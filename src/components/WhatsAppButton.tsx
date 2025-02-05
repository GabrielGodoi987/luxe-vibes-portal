import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/your-number"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
};

export default WhatsAppButton;