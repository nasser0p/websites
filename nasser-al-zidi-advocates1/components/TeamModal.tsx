import React, { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TeamMember } from '../lib/translations';

interface TeamModalProps {
  member: TeamMember;
  imageUrl: string;
  onClose: () => void;
}

const TeamModal: React.FC<TeamModalProps> = ({ member, imageUrl, onClose }) => {
  const { text, language } = useLanguage();

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-brand-dark bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-member-name"
    >
      <div 
        className={`relative bg-brand-blue rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden animate-[fade-in_0.3s_ease-out] ${language === 'ar' ? 'rtl' : 'ltr'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-brand-gray hover:text-brand-light transition-colors z-10"
          aria-label={text.ui.close}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        <div className="w-full md:w-1/3 flex-shrink-0">
          <img src={imageUrl} alt={member.name} className="w-full h-48 md:h-full object-cover" />
        </div>
        
        <div className="p-8 overflow-y-auto">
          <h2 id="team-member-name" className="text-3xl font-bold font-serif text-brand-primary mb-2">{member.name}</h2>
          <p className="text-brand-light-blue text-lg mb-6">{member.title}</p>
          <p className="text-brand-light leading-relaxed mb-6">{member.bio}</p>
          
          <h3 className="text-xl font-semibold text-brand-light mb-3">{text.ui.expertise}</h3>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((area, index) => (
              <span key={index} className="bg-brand-dark text-brand-primary text-sm font-semibold px-3 py-1 rounded-full">{area}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;