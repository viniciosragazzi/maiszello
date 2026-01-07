'use client'

import React from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    // Sempre começa no modo claro
    setDark(false);
    document.documentElement.classList.remove('dark');
  }, []);

  function toggle() {
    setDark((d) => {
      if (!d) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return !d;
    });
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-[300] bg-[#3f17cc] text-white rounded-full p-3 shadow-lg hover:bg-[#2a128a] transition-all"
      aria-label="Alternar modo escuro/claro"
    >
      {dark ? (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
      ) : (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
      )}
    </button>
  );
}
