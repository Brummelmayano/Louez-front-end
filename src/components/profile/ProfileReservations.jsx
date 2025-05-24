import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Button from '../Button';
import Modal from '../Modal'; // Crée ce composant si tu veux un modal natif
import { useNavigate } from 'react-router-dom';

const STATUS_LABELS = {
  pending: 'En attente',
  active: 'Confirmée',
  completed: 'Terminée',
  cancelled: 'Annulée',
  rejected: 'Refusée',
};

const STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-700',
  active: 'bg-green-100 text-green-700',
  completed: 'bg-gray-100 text-gray-700',
  cancelled: 'bg-red-100 text-red-700',
  rejected: 'bg-red-100 text-red-700',
};

export default function ProfileReservations({ user, limit }) {
  const [reservations, setReservations] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null); // Pour modal détail
  const [cancelId, setCancelId] = useState(null); // Pour annulation
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  // Pagination : 5 réservations par page
  const PAGE_SIZE = 5;

  useEffect(() => {
    setLoading(true);
    api.get('/reservations/', { params: { page, page_size: PAGE_SIZE } })
      .then(res => {
        if (page === 1) {
          setReservations(res.data.results || res.data);
        } else {
          setReservations(prev => [...prev, ...(res.data.results || res.data)]);
        }
        setHasMore(res.data.next !== null && res.data.next !== undefined);
      })
      .catch(() => setReservations([]))
      .finally(() => setLoading(false));
  }, [user, page]);

  const handleShowDetails = (reservation) => setSelected(reservation);

  const handleCancel = async (id) => {
    try {
      await api.post(`/reservations/${id}/cancel/`);
      setReservations(reservations =>
        reservations.map(r => r.id === id ? { ...r, status: 'cancelled' } : r)
      );
      setCancelId(null);
      window.dispatchEvent(new CustomEvent('toast', {
        detail: { type: 'success', message: 'Réservation annulée.' }
      }));
    } catch (err) {
      window.dispatchEvent(new CustomEvent('toast', {
        detail: { type: 'error', message: "Impossible d'annuler la réservation." }
      }));
    }
  };

  const handleLeaveFeedback = async (id) => {
    try {
      await api.post(`/reservations/${id}/feedback/`, { feedback });
      setFeedback('');
      window.dispatchEvent(new CustomEvent('toast', {
        detail: { type: 'success', message: 'Merci pour votre avis !' }
      }));
    } catch {
      window.dispatchEvent(new CustomEvent('toast', {
        detail: { type: 'error', message: "Erreur lors de l'envoi de l'avis." }
      }));
    }
  };

  const handleDownloadInvoice = (id) => {
    // À adapter selon ton backend
    window.open(`${import.meta.env.VITE_API_URL}/reservations/${id}/invoice/`, '_blank');
  };

  // Responsive : grille sur mobile, tableau sur desktop
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Mes réservations</h3>
      {loading ? (
        <div className="text-center py-8">Chargement…</div>
      ) : reservations.length === 0 ? (
        <div className="text-center text-gray-500">Aucune réservation trouvée.</div>
      ) : (
        <div className="space-y-4">
          {(limit ? reservations.slice(0, limit) : reservations).map(r => (
            <div
              key={r.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              {/* Miniature produit */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <img
                  src={
                    r.produit?.premiere_image?.image
                      ? `${import.meta.env.VITE_APP_BACK_END_URL}${r.produit.premiere_image.image}`
                      : '/src/assets/image_not_found.jpg'
                  }
                  alt={r.produit?.nom || r.produit?.name || 'Produit'}
                  className="w-16 h-16 object-cover rounded-md border"
                />
                <div className="min-w-0">
                  <div className="font-semibold truncate">{r.produit?.nom || r.produit?.name}</div>
                  <div className="text-xs text-gray-500 truncate">
                    #{r.id} • {new Date(r.start).toLocaleDateString()} → {new Date(r.end).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-gray-500">
                    Adresse : {r.delivery_address || '—'}
                  </div>
                  <div className="text-xs text-gray-500">
                    Paiement : {r.payment_mode === 'mobile_money' ? 'Mobile Money' : r.payment_mode === 'on_delivery' ? 'À la livraison' : r.payment_mode}
                  </div>
                </div>
              </div>
              {/* Statut & montant */}
              <div className="flex flex-col items-start md:items-end gap-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${STATUS_COLORS[r.status] || 'bg-gray-100 text-gray-700'}`}>
                  {STATUS_LABELS[r.status] || r.status}
                </span>
                <span className="text-lg font-bold text-indigo-600">{r.total ? `${r.total} $` : '--'}</span>
                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <Button size="sm" onClick={() => handleShowDetails(r)}>
                    Voir détails
                  </Button>
                  {r.status === 'pending' || r.status === 'active' ? (
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => setCancelId(r.id)}
                    >
                      Annuler
                    </Button>
                  ) : null}
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => handleDownloadInvoice(r.id)}
                  >
                    Facture
                  </Button>
                  {r.status === 'completed' && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setSelected({ ...r, feedback: true })}
                    >
                      Laisser un avis
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="text"
                    onClick={() => window.open('mailto:support@Louez.com')}
                  >
                    Support
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {hasMore && !limit && (
            <div className="flex justify-center">
              <Button onClick={() => setPage(page + 1)}>Charger plus</Button>
            </div>
          )}
        </div>
      )}

      {/* Modal détail réservation */}
      {selected && !selected.feedback && (
        <Modal isOpen={!!selected} onClose={() => setSelected(null)} title="Détail de la réservation">
          <div>
            <div className="mb-2 font-semibold">{selected.produit?.nom || selected.produit?.name}</div>
            <div className="mb-2 text-sm">Du {new Date(selected.start).toLocaleString()} au {new Date(selected.end).toLocaleString()}</div>
            <div className="mb-2 text-sm">Quantité : {selected.quantity || 1}</div>
            <div className="mb-2 text-sm">Montant : {selected.total ? `${selected.total} $` : '--'}</div>
            <div className="mb-2 text-sm">Adresse : {selected.delivery_address || '—'}</div>
            <div className="mb-2 text-sm">Paiement : {selected.payment_mode}</div>
            <div className="mb-2 text-sm">Statut : {STATUS_LABELS[selected.status] || selected.status}</div>
            <div className="flex gap-2 mt-4">
              <Button onClick={() => navigate(`/reservation/${selected.id}`)}>Voir la page</Button>
              <Button variant="secondary" onClick={() => setSelected(null)}>Fermer</Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal avis */}
      {selected && selected.feedback && (
        <Modal isOpen={!!selected} onClose={() => setSelected(null)} title="Laisser un avis">
          <div>
            <textarea
              className="w-full border rounded p-2 mb-4"
              rows={4}
              placeholder="Votre avis sur cette location…"
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
            />
            <div className="flex gap-2">
              <Button onClick={() => handleLeaveFeedback(selected.id)}>Envoyer</Button>
              <Button variant="secondary" onClick={() => setSelected(null)}>Annuler</Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Modal annulation */}
      {cancelId && (
        <Modal isOpen={!!cancelId} onClose={() => setCancelId(null)} title="Annuler la réservation">
          <div>
            <p>Confirmer l'annulation de cette réservation ?</p>
            <div className="flex gap-2 mt-4">
              <Button variant="danger" onClick={() => handleCancel(cancelId)}>Oui, annuler</Button>
              <Button variant="secondary" onClick={() => setCancelId(null)}>Non</Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}