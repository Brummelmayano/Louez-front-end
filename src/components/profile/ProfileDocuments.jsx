import React, { useEffect, useState, useRef } from 'react';
import api from '../../api/api';
import Button from '../Button';

const STATUS_LABELS = {
  pending: 'En attente',
  validated: 'Validé',
  rejected: 'Refusé',
};

const STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  validated: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  rejected: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
};

const DOC_TYPES = [
  { value: 'cni', label: 'Carte Nationale d\'Identité' },
  { value: 'passport', label: 'Passeport' },
  { value: 'permis', label: 'Permis de conduire' },
  { value: 'electeur', label: 'Carte d\'électeur' },
  { value: 'autre', label: 'Autre' },
];

export default function ProfileDocuments({ user }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [replaceId, setReplaceId] = useState(null);
  const fileInputRef = useRef();

  useEffect(() => {
    setLoading(true);
    api.get(`/users/${user.id}/documents/`)
      .then(res => setDocuments(res.data))
      .catch(() => setDocuments([]))
      .finally(() => setLoading(false));
  }, [user.id, uploading, replaceId]);

  // Correction ici : utiliser document_type et document
  const handleUpload = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!selectedFile || !selectedType) {
      setError('Veuillez sélectionner un type et un fichier.');
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append('document_type', selectedType);
    formData.append('document', selectedFile);

    try {
      await api.post(`/users/${user.id}/documents/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSuccess('Document envoyé avec succès.');
      setSelectedFile(null);
      setSelectedType('');
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch {
      setError('Erreur lors de l\'envoi du document.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    setError('');
    setSuccess('');
    try {
      await api.delete(`/users/${user.id}/documents/${id}/`);
      setSuccess('Document supprimé.');
    } catch {
      setError('Erreur lors de la suppression.');
    }
  };

  const handleDownload = (id) => {
    window.open(`${import.meta.env.VITE_API_URL}/users/${user.id}/documents/${id}/download/`, '_blank');
  };

  const handleReplace = (id) => {
    setReplaceId(id);
    setSelectedFile(null);
    setSelectedType('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Correction ici : utiliser document
  const handleReplaceSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!selectedFile) {
      setError('Veuillez sélectionner un fichier.');
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append('document', selectedFile);

    try {
      await api.put(`/users/${user.id}/documents/${replaceId}/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setSuccess('Document remplacé avec succès.');
      setReplaceId(null);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch {
      setError('Erreur lors du remplacement.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Documents d'identité</h3>

      {/* Upload */}
      {!replaceId && (
        <form onSubmit={handleUpload} className="mb-6 flex flex-col md:flex-row gap-4 items-center">
          <select
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-gray-100"
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            required
          >
            <option value="">Type de document</option>
            {DOC_TYPES.map(dt => (
              <option key={dt.value} value={dt.value}>{dt.label}</option>
            ))}
          </select>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-gray-100"
            onChange={e => setSelectedFile(e.target.files[0])}
            ref={fileInputRef}
            required
          />
          <Button
            type="submit"
            disabled={uploading}
            className="min-w-[120px]"
          >
            {uploading ? 'Envoi...' : 'Envoyer'}
          </Button>
        </form>
      )}

      {/* Remplacement */}
      {replaceId && (
        <form onSubmit={handleReplaceSubmit} className="mb-6 flex flex-col md:flex-row gap-4 items-center">
          <span className="text-gray-900 dark:text-gray-100">Remplacer le document</span>
          <input
            type="file"
            accept="image/*,application/pdf"
            className="border rounded px-3 py-2 dark:bg-gray-800 dark:text-gray-100"
            onChange={e => setSelectedFile(e.target.files[0])}
            ref={fileInputRef}
            required
          />
          <Button
            type="submit"
            disabled={uploading}
            className="min-w-[120px]"
          >
            {uploading ? 'Remplacement...' : 'Remplacer'}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setReplaceId(null)}
          >
            Annuler
          </Button>
        </form>
      )}

      {/* Messages */}
      {error && <div className="mb-2 text-red-600 dark:text-red-400">{error}</div>}
      {success && <div className="mb-2 text-green-600 dark:text-green-400">{success}</div>}

      {/* Liste des documents */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Type</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Fichier</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Statut</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Envoyé le</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Actions</th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">Motif du refus</th>
            </tr>
          </thead>
          <tbody>
            {documents.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-4 text-center text-gray-500 dark:text-gray-400">
                  Aucun document envoyé.
                </td>
              </tr>
            )}
            {documents.map(doc => (
              <tr key={doc.id} className="border-t border-gray-200 dark:border-gray-700">
                <td className="px-4 py-2 text-gray-900 dark:text-gray-100">{DOC_TYPES.find(dt => dt.value === doc.type)?.label || doc.type}</td>
                <td className="px-4 py-2">
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 underline"
                  >
                    Voir
                  </a>
                </td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${STATUS_COLORS[doc.status] || ''}`}>
                    {STATUS_LABELS[doc.status] || doc.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                  {doc.created_at ? new Date(doc.created_at).toLocaleDateString() : '--'}
                </td>
                <td className="px-4 py-2 flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleDownload(doc.id)}
                  >
                    Télécharger
                  </Button>
                  {doc.status === 'pending' && (
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(doc.id)}
                    >
                      Supprimer
                    </Button>
                  )}
                  {doc.status === 'rejected' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleReplace(doc.id)}
                    >
                      Remplacer
                    </Button>
                  )}
                </td>
                <td className="px-4 py-2 text-red-600 dark:text-red-400">
                  {doc.status === 'rejected' ? doc.rejection_reason || 'Non précisé' : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}