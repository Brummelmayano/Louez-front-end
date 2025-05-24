// src/pages/ReservationPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format, differenceInCalendarDays } from 'date-fns';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import Toast from '../components/Toast';
import api from '../api/api';
import { useAuth } from '../hooks/useAuth';

export default function ReservationPage() {
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [start, setStart] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [end, setEnd] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [quantity, setQuantity] = useState(1);
  const [mmNumber, setMmNumber] = useState('');
  const [msg, setMsg] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get(`/produits/produits/${id}/`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  if (authLoading) {
    return <p className="pt-20 text-center">Chargement du profil…</p>;
  }

  if (!user) return null;

  if (!product) {
    return <p className="pt-20 text-center">Produit introuvable.</p>;
  }

  const days = Math.max(
    differenceInCalendarDays(new Date(end), new Date(start)) + 1,
    1
  );
  const isNuit =
    new Date(start).getHours() >= 18 || new Date(end).getHours() < 7;
  const tarif =
    isNuit ? parseFloat(product.tarif_nuit) : parseFloat(product.tarif_jour);
  const total = (tarif * days * quantity).toFixed(2);

  const handleReserve = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (new Date(end) < new Date(start)) {
      setError('La date de fin ne peut pas être antérieure à la date de début.');
      return;
    }
    setBusy(true);
    setMsg(null);
    try {
      const payload = {
        client: user.id,
        start: `${start}T00:00:00`,
        end: `${end}T23:59:59`,
        payment_mode: 'mobile_money',
        mm_number: mmNumber, // à récupérer dans un champ du formulaire
        items: [{ produit_id: product.id, quantity }],
      };
      const res = await api.post('/reservations/', payload);

      await api.post('/paiements/', {
        reservation: res.data.id,
        amount: total,
        method: 'mobile_money',
      });

      setMsg({ type: 'success', text: 'Réservation confirmée !' });
    } catch (err) {
      console.error(err);
      setMsg({
        type: 'error',
        text: err.response?.data?.detail || JSON.stringify(err.response?.data) || 'Échec lors de la réservation.'
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-background dark:bg-gray-900 min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow my-8 space-y-4">
        {msg && <Toast type={msg.type}>{msg.text}</Toast>}
        {error && <p className="text-red-500">{error}</p>}

        <h2 className="text-2xl font-semibold">Réserver : {product.name || product.nom}</h2>

        <div>
          <label className="block mb-1">Date de début</label>
          <Input
            type="date"
            value={start}
            onChange={e => setStart(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Date de fin</label>
          <Input
            type="date"
            value={end}
            onChange={e => setEnd(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Quantité</label>
          <Input
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(+e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1">Numéro Mobile Money</label>
          <Input
            type="text"
            value={mmNumber}
            onChange={e => setMmNumber(e.target.value)}
          />
        </div>

        <div className="font-medium">
          Prix total : ${total} ({days} {days > 1 ? 'jours' : 'jour'})
        </div>

        <div className="flex space-x-4">
          <Button
            onClick={handleReserve}
            disabled={busy}
            className={busy ? 'opacity-50 cursor-not-allowed' : ''}
          >
            {busy ? 'Traitement…' : 'Confirmer'}
          </Button>
          <Button
            onClick={() => navigate(`/product/${product.id}`)}
            variant="secondary"
            disabled={busy}
          >
            Annuler
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
