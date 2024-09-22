import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate'i ekleyin
import Navbar from './Main/Navbar';
import Footer from './Main/Footer';

const Home = () => {
    const navigate = useNavigate(); // navigate fonksiyonunu tanımlayın

    const handlePurchase = () => {
        navigate('/ebook-purchase'); // Kullanıcıyı e-kitabı satın alma sayfasına yönlendirin
    };

    return (
        <div>
            {/* Navbar sabit kalıyor */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>

            {/* İçerik kısmı */}
            <div className="pt-20"> {/* Navbar boşluğu */}
                <div className="hero-section text-center py-20">
                    <h1 className="text-5xl font-bold mb-4">E-Kitap: Online Para Kazanma Yöntemleri</h1>
                    <p className="text-xl">YouTube'dan nasıl para kazanılır ve kitle büyütme yöntemlerini detaylarıyla öğrenin.</p>
                    <button onClick={handlePurchase} className="mt-8 bg-white text-indigo-600 font-semibold py-2 px-6 rounded-md">
                        Şimdi Satın Al - $19.99
                    </button>
                </div>

                {/* Ürün bilgileri */}
                <div className="product-section py-10 px-6">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">E-Kitap Bilgileri</h2>
                    <div className="flex justify-center">
                        <div className="product-card bg-white rounded-lg shadow-md p-4 max-w-md">
                            {/* Görselin boyutunu büyüttüm */}
                            <img src="books-stack-or-pile-paper-book-stacked-flat-vector-20724035-removebg-preview.png" alt="E-Kitap Kapak" className="w-full h-64 object-contain rounded-md" />
                            <h3 className="text-lg font-semibold mt-4">Online Para Kazanma Yöntemleri</h3>
                            <p className="text-gray-600 mt-2">Bu e-kitap, çevrimiçi dünyada nasıl gelir elde edebileceğinizi tüm detaylarıyla anlatıyor. Özellikle YouTube'dan gelir sağlama ve kitle oluşturma stratejilerine odaklanıyor.</p>
                            <button onClick={handlePurchase} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md w-full">
                                Şimdi Satın Al
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
