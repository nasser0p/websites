import React from 'react';

const FloatingActionButtons: React.FC = () => {
    const phoneNumber = '+96893205058';
    const whatsappNumber = '96893205058';
    const whatsappMessage = "Hello, I saw the Horizon Medical Center website and I would like to inquire about booking an appointment.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="fixed bottom-6 right-6 rtl:left-6 rtl:right-auto flex flex-col items-center gap-4 z-40 animate-[fade-in-up_0.5s_ease-out_0.5s_backwards]">
            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.52 11.99c-.25-.12-1.47-.72-1.7-.82s-.39-.12-.56.12c-.17.25-.64.82-.79.98s-.29.17-.54.06c-.25-.12-1.06-.39-2.02-1.25s-1.46-1.54-1.63-1.8c-.17-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.21.25-.35.12-.25.06-.47c-.06-.21-.56-1.34-.76-1.84s-.4-.42-.56-.42h-.54c-.17 0-.43.06-.66.31s-.86.84-.86 2.06c0 1.22.88 2.39 1 2.56.12.17 1.76 2.67 4.27 3.77 2.51 1.1 2.51.74 2.96.71.45-.02 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18s-.23-.15-.48-.27z"/>
                </svg>
            </a>
            {/* Call Button */}
            <a
                href={`tel:${phoneNumber}`}
                aria-label="Call us"
                className="bg-clinic-primary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </a>
        </div>
    );
};

export default FloatingActionButtons;