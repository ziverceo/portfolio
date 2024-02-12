import React from 'react'
import './styles/Hire.css';

const Hire = () => {
    const phoneNumber = '917904391341';
    const defaultMessage = 'Hello! Siva...'; 
    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage);
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
      };
    return (
    <div>
        <button onClick={handleWhatsAppClick} class="button h-8 md:h-12 text-xs md:text-lg font-audiowide w-32 md:w-56 active:scale-90 ease-in-out duration-300">Hire Me</button>
    </div>
  )
}

export default Hire
