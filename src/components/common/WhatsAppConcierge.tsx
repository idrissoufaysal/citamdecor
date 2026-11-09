export default function WhatsAppConcierge() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      <a
        className="relative flex items-center gap-3 bg-secondary text-on-secondary px-4 py-3 rounded-full shadow-[0_8px_24px_rgba(40,35,31,0.25),0_0_16px_rgba(124,87,48,0.35)] hover:bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-fixed cursor-pointer"
        href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR,%20je%20souhaite%20une%20consultation%20ou%20un%20devis."
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Contacter sur WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-fixed"></span>
        </span>
        <span className="material-symbols-outlined text-[20px]">chat</span>
        <span className="font-label-md text-xs uppercase tracking-wider hidden sm:inline-block pr-1 font-semibold">
          Consultation WhatsApp
        </span>
      </a>
    </div>
  );
}

