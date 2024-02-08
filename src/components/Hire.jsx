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
        <button onClick={handleWhatsAppClick} class="button active:scale-90 ease-in-out duration-200">Hire Me</button>
    </div>
  )
}

export default Hire
