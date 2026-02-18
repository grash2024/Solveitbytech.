import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "919876543210"; // Replace with actual number if provided
  const message = "Hi, I'm interested in your services!";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-110 hover:shadow-green-500/40 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" className="text-white" />
      <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
