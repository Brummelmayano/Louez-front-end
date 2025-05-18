// src/pages/ProductDetail.jsx

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import { useCart } from '../context/CartContext';
import { calculatePrice } from '../utils/price';

const JOUR = 'jour';
const NUIT = 'nuit';
const JOURNEE = 'journee';

function getPresetTimes(type) {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  if (type === JOUR) {
    return {
      start: `${yyyy}-${mm}-${dd}T07:30`,
      end: `${yyyy}-${mm}-${dd}T18:00`
    };
  }
  if (type === NUIT) {
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dd2 = String(tomorrow.getDate()).padStart(2, '0');
    return {
      start: `${yyyy}-${mm}-${dd}T18:30`,
      end: `${yyyy}-${mm}-${dd2}T07:00`
    };
  }
  // Journée entière : fin = lendemain même heure
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dd2 = String(tomorrow.getDate()).padStart(2, '0');
  return {
    start: `${yyyy}-${mm}-${dd}T07:30`,
    end: `${yyyy}-${mm}-${dd2}T07:30`
  };
}


export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('0.00');
  const [tarifType, setTarifType] = useState('');
  const [dateError, setDateError] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    api.get(`/produits/produits/${id}/`)
      .then(res => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  // Quand on sélectionne un tarif prédéfini, on remplit les champs
  useEffect(() => {
    if (tarifType && tarifType !== '') {
      const { start, end } = getPresetTimes(tarifType);
      setStart(start);
      setEnd(end);
    }
  }, [tarifType]);

  // Vérifie que la date de début précède la date de fin
  useEffect(() => {
    if (start && end && new Date(start) >= new Date(end)) {
      setDateError('La date de début doit précéder la date de fin.');
    } else {
      setDateError('');
    }
  }, [start, end]);

  // Calcul du prix en temps réel
  useEffect(() => {
    if (product && start && end && quantity > 0 && !dateError) {
      setPrice(
        calculatePrice({
          start,
          end,
          quantity,
          tarif_jour: parseFloat(product.tarif_jour),
          tarif_nuit: parseFloat(product.tarif_nuit),
          tarifType
        })
      );
    } else {
      setPrice('0.00');
    }
  }, [product, start, end, quantity, tarifType, dateError]);

  if (!product) return <p className="p-8 text-center">Produit introuvable.</p>;

  const backEndURL = import.meta.env.VITE_APP_BACK_END_URL;
  const mainImage = product.premiere_image?.image
    ? `${backEndURL}${product.premiere_image.image}`
    : '/src/assets/image_not_found.jpg';

  const handleAddToCart = () => {
    addToCart({
      produit_id: product.id,
      product,
      start,
      end,
      quantity,
      price,
    });
  };
  const otherImages = product.autres_images || [];

  const handleReserveNow = () => {
    navigate(`/reserve/${product.id}?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}&quantity=${quantity}`);
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <section className="bg-white shadow-lg mb-12 animate-fadeIn px-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center p-6">
          <div className="lg:w-1/2 wl p-4">
            <img
              src={mainImage}
              alt={product.nom || product.name}
              className="w-full h-auto max-h-[450px] object-contain rounded-lg shadow-md transition-transform duration-500 ease-in-out "
            />
          </div>
          <div className="lg:w-[55.556%] w-full lg:pl-12 mt-6 lg:mt-0 p-4">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 animate-fadeInUp">{product.nom || product.name}</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
            <div className="mb-4">
              <label className="block font-medium mb-1">Choisir un tarif</label>
              <select
                className="border rounded px-2 py-1"
                value={tarifType}
                onChange={e => setTarifType(e.target.value)}
              >
                <option value="">-- Sélectionner --</option>
                <option value={JOUR}>Tarif journée (7h30–18h00)</option>
                <option value={NUIT}>Tarif nuit (18h30–7h00)</option>
                <option value={JOURNEE}>Journée entière</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Date de début</label>
              <Input
                type="datetime-local"
                value={start}
                onChange={e => setStart(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Date de fin</label>
              <Input
                type="datetime-local"
                value={end}
                onChange={e => setEnd(e.target.value)}
                required
              />
            </div>
            {dateError && (
              <div className="mb-4 text-red-600">{dateError}</div>
            )}
            <div className="mb-4">
              <label className="block font-medium mb-1">Quantité</label>
              <Input
                type="number"
                min="1"
                value={quantity}
                onChange={e => setQuantity(Number(e.target.value))}
                required
              />
            </div>
            <div className="text-xl font-semibold mb-6">
              Prix total : <span className="text-indigo-600">{price} $</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleReserveNow}
                className="transform hover:-translate-y-1 transition-shadow"
                disabled={!start || !end || quantity < 1 || !!dateError}
              >
                Réserver maintenant
              </Button>
              <Button
                variant="secondary"
                onClick={handleAddToCart}
                disabled={!start || !end || quantity < 1 || !!dateError}
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sections détaillées générées dynamiquement */}
      <section className="container mx-auto mb-12 space-y-20 px-12">
        {otherImages.map((img, index) => (
          <div
            key={index}
            className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center transition-colors`}
          >
            <div className="lg:w-[44.444%] w-full p-4">
              <img
                src={`${backEndURL}${img.image}`}
                alt={img.description}
                className="w-full h-auto max-h-[400px] object-contain rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className={`lg:w-[55.556%] w-full p-4 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 transition-colors group-hover:text-indigo-600">
                {img.titre || `Section ${index + 1}`}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {img.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}

