'use client';
import { useState } from 'react';

export default function Footer() {
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText('ro.feel009@gmail.com');
    setMostrarNotificacao(true);
    setTimeout(() => setMostrarNotificacao(false), 3000);
  };

  return (
    <footer className='relative h-[95vh]'
      style={{clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)'}}>

      <div className="fixed bottom-0 h-[95vh] w-full bg-[#5C5032] text-center overflow-hidden flex flex-col justify-end">

        {mostrarNotificacao && (
          <div className="z-10 fixed top-15 left-1/2 transform -translate-x-1/2 bg-[#219239] text-white px-6 py-2 rounded-lg text-sm flex items-center gap-2 shadow-lg animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Email copiado
          </div>
        )}

        <div>
          <p className="text-[#ffffff85] text-sm absolute left-4 bottom-4">© 2025 RODRIGOFEL.</p>
        </div>

        <div className="translate-y-[-120px] translate-x-[-15px] space-x-4">
          <span
            onClick={copiarEmail}
            className="cursor-pointer text-[#fff7ef] hover:text-[#93804f] force-bebas text-6xl"
          >
            ro.feel009@gmail.com
          </span>
        </div>

        <div className="h-[45vh] border-t-[2px] border-[#93804f] flex items-end justify-end">
          <h1 className="text-[#93804f] force-bebas text-[280px] leading-none translate-y-[55px]">ROOTS</h1>
        </div>

      </div>
    </footer>
  );
}
