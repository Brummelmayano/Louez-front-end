import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReserveCart() {
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [mmNumber, setMmNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMode, setPaymentMode] = useState('on_delivery');
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const selected = localStorage.getItem('selectedCart');
    if (selected) {
      setSelectedItems(JSON.parse(selected));
    } else {
      setSelectedItems([]);
    }
  }, []);

  const handleRemoveOne = (idx) => {
    setSelectedItems(items => {
      const newItems = [...items];
      if (newItems[idx].quantity > 1) {
        newItems[idx] = { ...newItems[idx], quantity: newItems[idx].quantity - 1 };
      } else {
        newItems.splice(idx, 1);
      }
      localStorage.setItem('selectedCart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const handleReserve = async () => {
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');
    try {
      const userId = JSON.parse(localStorage.getItem('user'))?.id;
      const items = selectedItems.map(item => ({
        produit_id: item.produit_id,
        quantity: item.quantity,
        start: item.start,
        end: item.end,
        price: parseFloat(item.price),
      }));

      const total = items.reduce((sum, item) => sum + (item.price || 0), 0);

      const payload = {
        items,
        payment_mode: paymentMode,
        mm_number: paymentMode === 'mobile_money' ? mmNumber : "",
        delivery_address: deliveryAddress,
        phone_number: phoneNumber,
        total,
        user: userId, // <-- récupéré dynamiquement
      };

      await api.post('/reservations/cart/', payload);
      setSuccessMsg('Réservation effectuée avec succès !');
      clearCart();
      localStorage.removeItem('selectedCart');
      setTimeout(() => navigate('/'), 2000);
    } catch (e) {
      setErrorMsg(
        "La réservation a échoué. Il est possible que l’un des produits ne soit plus disponible pour la période choisie ou qu’une information soit incorrecte. Veuillez vérifier vos dates, vos informations et réessayer. Si le problème persiste, contactez le support."
      );
    } finally {
      setLoading(false);
    }
  };

  const total = selectedItems.reduce((sum, item) => sum + parseFloat(item.price || 0), 0);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center pt-24 pb-8">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Réserver la sélection</h1>
          {selectedItems.length === 0 ? (
            <div className="text-center text-gray-500">Aucun produit sélectionné.</div>
          ) : (
            <>
              <div className="mb-6 max-h-[70vh] overflow-y-auto">
                {selectedItems.map((item, idx) => (
                  <div key={item.produit_id + item.start + item.end + idx} className="border-b py-2">
                    <div className="font-semibold">{item.product.nom || item.product.name}</div>
                    <div className="text-xs text-gray-500">Début : {item.start}</div>
                    <div className="text-xs text-gray-500">Fin : {item.end}</div>
                    <div className="flex items-center justify-between">
                      <span>
                        Quantité : <span className="font-bold">{item.quantity}</span>
                      </span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="danger"
                          className="px-2 py-1 text-xs rounded shadow hover:bg-red-700"
                          onClick={() => handleRemoveOne(idx)}
                        >
                          -1
                        </Button>
                        <Button
                          size="sm"
                          variant="primary"
                          className="px-2 py-1 text-xs rounded shadow hover:bg-indigo-700"
                          onClick={() => {
                            setSelectedItems(items => {
                              const newItems = [...items];
                              newItems[idx] = { ...newItems[idx], quantity: newItems[idx].quantity + 1 };
                              localStorage.setItem('selectedCart', JSON.stringify(newItems));
                              return newItems;
                            });
                          }}
                        >
                          +1
                        </Button>
                      </div>
                    </div>
                    <div>Prix : {item.price} $</div>
                  </div>
                ))}
              </div>
              <div className="mb-4 text-lg font-semibold text-right">
                Total : <span className="text-indigo-600">{total.toFixed(2)} $</span>
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Adresse de livraison</label>
                <input
                  type="text"
                  className="border rounded px-3 py-2 w-full"
                  value={deliveryAddress}
                  onChange={e => setDeliveryAddress(e.target.value)}
                  placeholder="Adresse complète"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Numéro de téléphone</label>
                <input
                  type="text"
                  className="border rounded px-3 py-2 w-full"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
                  placeholder="243 825608939"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-1">Mode de paiement</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment_mode"
                      value="mobile_money"
                      checked={paymentMode === 'mobile_money'}
                      onChange={() => setPaymentMode('mobile_money')}
                      className="mr-2"
                    />
                    Payer maintenant (Mobile Money)
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="payment_mode"
                      value="on_delivery"
                      checked={paymentMode === 'on_delivery'}
                      onChange={() => setPaymentMode('on_delivery')}
                      className="mr-2"
                    />
                    Payer à la livraison
                  </label>
                </div>
              </div>
              {paymentMode === 'mobile_money' && (
                <div className="mb-4">
                  <label className="block font-medium mb-1">Numéro Mobile Money</label>
                  <input
                    type="text"
                    className="border rounded px-3 py-2 w-full"
                    value={mmNumber}
                    onChange={e => setMmNumber(e.target.value)}
                    placeholder="243 825608939"
                    required={paymentMode === 'mobile_money'}
                  />
                </div>
              )}
              {successMsg && <div className="mb-4 text-green-600">{successMsg}</div>}
              {errorMsg && <div className="mb-4 text-red-600">{errorMsg}</div>}
              <Button
                onClick={handleReserve}
                disabled={
                  loading ||
                  !deliveryAddress ||
                  !phoneNumber ||
                  (paymentMode === 'mobile_money' && !mmNumber)
                }
                className="w-full"
              >
                {loading ? "Réservation en cours..." : "Réserver la sélection"}
              </Button>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}