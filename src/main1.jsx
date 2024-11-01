import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this path is correct
import { FaTelegramPlane, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Main1 = () => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50 p-8 min-h-screen">
      {/* Search Section */}
      <section className="mb-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">Analiz Qidirish</h1>
        <div className="flex items-center justify-center space-x-2">
          <input
            type="text"
            placeholder="Analiz nomini kiriting"
            className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition">
            Qidirish
          </button>
        </div>
      </section>

      {/* About Laboratory Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Arzon va Sifatli Laboratoriya</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
       <img   className="rounded-lg w-48 h-48 object-cover shadow-md mb-4 md:mb-0" src="./src/assets/lab_image1.png" alt="" />
          <div className="md:ml-6">
            <p className="text-gray-700 mb-2">
              Yuqori sifatli laboratoriya xizmatlarini arzon narxlarda taqdim etadi. Arzon Laboratoriyaning yuqori texnologiyali laboratoriyalari tadqiqot jarayonida ham, butun xizmat sikli davomida ham eng ilg‘or innovatsion usullarni qo‘llaydi.
            </p>
            <p className="text-gray-600 font-bold">ArzonLab bugungi kunda 500 dan ortiq tadqiqot turlarini o'z ichiga oladi, bular:</p>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                "Urologik tadqiqotlar",
                "Dermatologiya",
                "Alergologiya",
                "Genetika tadqiqot",
                "Immunologik kasalliklar",
                "Infektologiya",
              ].map((tag) => (
                <button key={tag} className="bg-white text-blue-800 border-blue-800 px-4 py-2 rounded-full text-sm shadow hover:bg-blue-500 hover:text-black transition-colors duration-300">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Bizning Jamoamiz</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Bizning laboratoriya jamoasi - tajribali diagnostika mutaxassislaridan iborat. 
          Ular bemorlarga yuqori sifatli xizmat ko'rsatishni o'z burchlari deb biladilar.
        </p>
        <p className="bg-red-700 text-white px-4 py-2 rounded-lg font-semibold">
          Sog'lig'ingiz va qulayligingiz doimo ustuvor!
        </p>
      </section>

      {/* Location Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Bizning Manzilimiz</h2>
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <div className="mb-4 md:mb-0 md:mr-6 w-full h-96 rounded-lg overflow-hidden shadow-md border border-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47925.28815268537!2d69.22822326953124!3d41.345169364664386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef39a437deac9%3A0x9a5d34223e0d24c9!2sArzon%20Laboratoriya!5e0!3m2!1sen!2s!4v1730210457143!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Laboratory Location"
            ></iframe>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              "Toshkent shahar, Yunusobod tumani",
              "Toshkent viloyati, Chirchiq tumani",
              "Toshkent shahar, Mirzo Ulug'bek tumani",
              "Toshkent shahar, Shayxontohur tumani",
              "Toshkent shahar, Semashko ko'chasi",
            ].map((location) => (
              <span key={location} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm shadow">
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-8 p-8 text-center">
        <p className="text-sm">
          © 2024 All Rights Reserved <a href="https://instagram.com/easy.media.uz" className="text-blue-500 underline">Easy Media</a>
        </p>
        <p className="text-sm">
          Designed by <a href="https://instagram.com/easy.media.uz" className="text-blue-500 underline">Easy Media</a>
        </p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 text-2xl"><FaTelegramPlane /></a>
          <a href="#" className="mx-2 text-2xl"><FaYoutube /></a>
          <a href="#" className="mx-2 text-2xl"><FaInstagram /></a>
          <a href="#" className="mx-2 text-2xl"><FaFacebook /></a>
        </div>
      </footer>
    </div>
  );
};

export default Main1;

// Assuming you will render Main1 in your App component or index file
