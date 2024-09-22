// src/components/Pages/Payment.jsx
import React from 'react';

const Payment = () => {
    const handlePayment = () => {
        // Burada PayTR API'sine yönlendirme yapabilirsin
        window.location.href = 'https://www.paytr.com'; // Örnek URL, gerçek PayTR entegrasyonu için gerekli ayarları yapmalısın
    };

    return (
        <div className="payment-container">
            <h1 className="text-3xl font-bold">Ödeme Sayfası</h1>
            <p>E-Kitabınızı satın almak için aşağıdaki butona tıklayın:</p>
            <button onClick={handlePayment} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Ödeme Yap
            </button>
        </div>
    );
};

export default Payment;
