import { FaWhatsapp } from "react-icons/fa"

const Whatsappicon = () => {
    return(
        <a href="https://wa.me/9815887651" target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white
        p-4 rounded-full hover:scale-105 duration-500
        animate-bounce">
            <FaWhatsapp size={30}/>


        </a>
    )
}

export default Whatsappicon