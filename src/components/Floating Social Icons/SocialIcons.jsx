import { FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* YouTube */}
      <a
        href="https://youtube.com/@yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition duration-300 hover:scale-105"
      >
        <FaYoutube size={28} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition duration-300 hover:scale-105"
      >
        <FaFacebookF size={28} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/9779842827215"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition duration-300 hover:scale-105"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default SocialIcons;