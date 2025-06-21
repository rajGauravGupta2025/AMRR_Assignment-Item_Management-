import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

function ItemDetailModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-2xl relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-2">
          {item.name}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6 px-4">
          {item.description}
        </p>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          className="mb-4 rounded-xl overflow-hidden shadow-md"
        >
          {[item.coverImage, ...(item.images || [])].map((img, i) => (
            img && (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={`item-${i}`}
                  className="w-full h-72 object-contain bg-gray-100"
                />
              </SwiperSlide>
            )
          ))}
        </Swiper>
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
            onClick={() => window.location = `mailto:test@example.com?subject=Enquiry about ${item.name}`}
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailModal;