import React, { useState } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';
import TeamModal from './TeamModal';
import { TeamMember } from '../lib/translations';

const Team: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const { text } = useLanguage();
  const { content } = useContent();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="perspective-1000" ref={ref}>
        <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-0 translate-y-10 rotate-x-[-15deg]'}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-primary mb-4">{text.team.title}</h2>
          <p className="text-brand-light mb-12 max-w-2xl mx-auto">{text.team.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {text.team.members.map((member, index) => (
              <div key={index} className="bg-brand-dark rounded-lg overflow-hidden shadow-lg p-6 group transition-all duration-500 transform-style-3d hover:shadow-xl hover:shadow-brand-primary/20 hover:-translate-y-2">
                <div className="transform transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={content.images.team[index]} 
                    alt={member.name} 
                    className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-brand-primary"
                    loading="lazy"
                    width="160"
                    height="160"
                  />
                  <div className="pt-6 text-center">
                    <h3 className="text-xl font-bold font-serif text-brand-light">{member.name}</h3>
                    <p className="text-brand-primary">{member.title}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="bg-brand-light-blue text-brand-light font-semibold py-2 px-5 rounded-lg hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 transform group-hover:opacity-100 opacity-0 group-hover:translate-y-0 translate-y-2"
                  >
                    {text.ui.viewBio}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedMember && (
        <TeamModal member={selectedMember} imageUrl={content.images.team[text.team.members.indexOf(selectedMember)]} onClose={() => setSelectedMember(null)} />
      )}
    </>
  );
};

export default Team;