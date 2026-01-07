'use client'
import React, { useEffect } from "react";

export default function CookieBanner() {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieAccepted")) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-xl rounded-xl px-6 py-4 z-[200] flex flex-col md:flex-row items-center gap-4 animate-fade-in">
      <span className="text-gray-700 text-sm">Usamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href='/privacidade' className='underline text-[#3f17cc]'>Política de Privacidade</a>.</span>
      <button
        className="bg-[#3f17cc] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2a128a] transition-all text-sm"
        onClick={() => {
          localStorage.setItem("cookieAccepted", "true");
          setShow(false);
        }}
      >
        Aceitar
      </button>
    </div>
  );
}
