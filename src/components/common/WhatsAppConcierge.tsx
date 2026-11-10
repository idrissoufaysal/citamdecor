import { MessageCircle } from "lucide-react";

export default function WhatsAppConcierge() {
  return (
    <a
      href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR%2C%20je%20souhaite%20une%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Écrire à C.I.TA.M DÉCOR sur WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-pill border border-border bg-background/80 px-5 py-3 text-sm text-foreground backdrop-blur-md transition-colors hover:border-foreground hover:bg-surface sm:bottom-6 sm:right-6"
    >
    
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
