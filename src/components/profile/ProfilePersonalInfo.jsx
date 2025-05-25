import React, { useState } from 'react';
import api from '../../api/api';
import Button from '../Button';

export default function ProfilePersonalInfo({ user: initialUser }) {
  const [user, setUser] = useState(initialUser);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    first_name: user.first_name || '',
    last_name: user.last_name || '',
    birth_date: user.birth_date || '',
    gender: user.gender || '',
    phone_number: user.phone_number || '',
    address: user.address || '',
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const labelClass = "text-gray-900 dark:text-gray-100";
  const valueClass = "text-gray-900 dark:text-gray-100";
  const placeholderClass = "text-gray-400 dark:text-gray-400";

  const handleEdit = () => {
    setForm({
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      birth_date: user.birth_date || '',
      gender: user.gender || '',
      phone_number: user.phone_number || '',
      address: user.address || '',
    });
    setEdit(true);
    setMsg('');
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    try {
      const res = await api.put(`/users/${user.id}/`, form);
      setUser(res.data);
      setEdit(false);
      setMsg('Informations mises à jour.');
    } catch {
      setMsg('Erreur lors de la mise à jour.');
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setEdit(false);
    setMsg('');
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Informations personnelles</h3>
      {!edit ? (
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <span className={labelClass}>Prénom :</span>
            <span className={user.first_name ? valueClass : placeholderClass}>
              {user.first_name || "Non renseigné"}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className={labelClass}>Nom :</span>
            <span className={user.last_name ? valueClass : placeholderClass}>
              {user.last_name || "Non renseigné"}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className={labelClass}>Date de naissance :</span>
            <span className={user.birth_date ? valueClass : placeholderClass}>
              {user.birth_date || "Non renseignée"}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className={labelClass}>Sexe :</span>
            <span className={user.gender ? valueClass : placeholderClass}>
              {user.gender === "M" ? "Homme" : user.gender === "F" ? "Femme" : user.gender === "O" ? "Autre" : "Non renseigné"}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className={labelClass}>Téléphone :</span>
            <span className={user.phone_number ? valueClass : placeholderClass}>
              {user.phone_number || "Non renseigné"}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className={labelClass}>Adresse :</span>
            <span className={user.address ? valueClass : placeholderClass}>
              {user.address || "Non renseignée"}
            </span>
          </div>
          <Button variant="secondary" onClick={handleEdit}>Modifier</Button>
          {msg && <div className="mt-2 text-green-600 dark:text-green-400">{msg}</div>}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className={labelClass}>Prénom</label>
            <input
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full dark:bg-gray-800 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label className={labelClass}>Nom</label>
            <input
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full dark:bg-gray-800 dark:text-gray-100"
              required
            />
          </div>
          <div>
            <label className={labelClass}>Date de naissance</label>
            <input
              name="birth_date"
              type="date"
              value={form.birth_date}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className={labelClass}>Sexe</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full dark:bg-gray-800 dark:text-gray-100"
            >
              <option value="">Sélectionner</option>
              <option value="M">Homme</option>
              <option value="F">Femme</option>
              <option value="O">Autre</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Téléphone</label>
            <input
              name="phone_number"
              value={form.phone_number}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div>
            <label className={labelClass}>Adresse</label>
            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              className="border rounded px-2 py-1 w-full dark:bg-gray-800 dark:text-gray-100"
            />
          </div>
          <div className="flex gap-2 mt-2">
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Enregistrement..." : "Enregistrer"}
            </Button>
            <Button type="button" variant="secondary" onClick={handleCancel}>Annuler</Button>
          </div>
          {msg && <div className="mt-2 text-red-600 dark:text-red-400">{msg}</div>}
        </form>
      )}
    </div>
  );
}