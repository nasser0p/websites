import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { themes, ThemeName } from '../lib/themes';

type AdminTab = 'homepage' | 'services' | 'team' | 'testimonials' | 'gallery' | 'appearance';

const AdminPage: React.FC = () => {
  const { content, setContent } = useContent();
  const { text } = useLanguage();
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<AdminTab>('homepage');

  const handleTextChange = (lang: 'en' | 'ar', path: string, value: string) => {
    setContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let currentLevel = newContent.texts[lang];
      keys.forEach((key, index) => {
        const isLast = index === keys.length - 1;
        const arrayMatch = key.match(/^(\w+)\[(\d+)\]$/);
        if (arrayMatch) {
            const arrayKey = arrayMatch[1];
            const arrayIndex = parseInt(arrayMatch[2], 10);
            if(isLast) {
                 (currentLevel as any)[arrayKey][arrayIndex] = value;
            } else {
                 currentLevel = (currentLevel as any)[arrayKey][arrayIndex];
            }
        } else {
             if (isLast) {
                (currentLevel as any)[key] = value;
            } else {
                currentLevel = (currentLevel as any)[key];
            }
        }
      });
      return newContent;
    });
  };
  
  const handleImageChange = (path: string, value: string) => {
     setContent(prev => {
      const newContent = JSON.parse(JSON.stringify(prev));
      const keys = path.split('.');
      let currentLevel = newContent.images;
      keys.forEach((key, index) => {
        const isLast = index === keys.length - 1;
        const arrayMatch = key.match(/^(\w+)\[(\d+)\]$/);

        if(arrayMatch) {
            const arrayKey = arrayMatch[1];
            const arrayIndex = parseInt(arrayMatch[2], 10);
            if(isLast) {
                (currentLevel as any)[arrayKey][arrayIndex] = value;
            } else {
                currentLevel = (currentLevel as any)[arrayKey][arrayIndex];
            }
        } else {
            if (isLast) {
                (currentLevel as any)[key] = value;
            } else {
                currentLevel = (currentLevel as any)[key];
            }
        }
      });
      return newContent;
    });
  }

  const handleThemeChange = (themeName: ThemeName) => {
    setContent(prev => ({ ...prev, theme: themeName }));
  };
  
  const handleRemoveItem = (section: 'team' | 'testimonials' | 'gallery', index: number) => {
    if (!window.confirm('Are you sure you want to remove this item? This action cannot be undone.')) return;

    setContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));

        if (section === 'team') {
            newContent.texts.en.team.members.splice(index, 1);
            newContent.texts.ar.team.members.splice(index, 1);
            newContent.images.team.splice(index, 1);
        } else if (section === 'testimonials') {
            newContent.texts.en.testimonials.items.splice(index, 1);
            newContent.texts.ar.testimonials.items.splice(index, 1);
            newContent.images.testimonials.splice(index, 1);
        } else if (section === 'gallery') {
            newContent.texts.en.smileGallery.items.splice(index, 1);
            newContent.texts.ar.smileGallery.items.splice(index, 1);
            newContent.images.smileGallery.splice(index, 1);
        }

        return newContent;
    });
  };

  const handleAddItem = (section: 'team' | 'testimonials' | 'gallery') => {
    setContent(prev => {
        const newContent = JSON.parse(JSON.stringify(prev));

        if (section === 'team') {
            newContent.texts.en.team.members.push({ name: 'New Member', title: 'New Title', bio: 'Bio...', expertise: ['Expertise 1'] });
            newContent.texts.ar.team.members.push({ name: 'عضو جديد', title: 'منصب جديد', bio: 'سيرة ذاتية...', expertise: ['خبرة 1'] });
            newContent.images.team.push('/images/team-placeholder.jpg');
        } else if (section === 'testimonials') {
            newContent.texts.en.testimonials.items.push({ name: 'New Patient', location: 'City, Country', rating: 5, quote: 'A great experience...' });
            newContent.texts.ar.testimonials.items.push({ name: 'مريض جديد', location: 'المدينة، الدولة', rating: 5, quote: 'تجربة رائعة...' });
            newContent.images.testimonials.push('/images/patient-placeholder.jpg');
        } else if (section === 'gallery') {
            newContent.texts.en.smileGallery.items.push({ case: 'New Case', description: 'A brief description of the case.' });
            newContent.texts.ar.smileGallery.items.push({ case: 'حالة جديدة', description: 'وصف موجز للحالة.' });
            newContent.images.smileGallery.push({ before: '/images/before-placeholder.jpg', after: '/images/after-placeholder.jpg' });
        }

        return newContent;
    });
  };


  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => {
        const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
        if (arrayMatch) {
            const arrayKey = arrayMatch[1];
            const arrayIndex = parseInt(arrayMatch[2], 10);
            return acc && acc[arrayKey] ? acc[arrayKey][arrayIndex] : undefined;
        }
        return acc ? acc[part] : undefined;
    }, obj);
  };

  const InputField = ({ label, path, lang }: { label: string, path: string, lang: 'en' | 'ar' }) => {
    const value = getNestedValue(content.texts[lang], path) ?? '';
    return (
      <div className="mb-4">
        <label className="block text-clinic-gray text-sm font-bold mb-2">{label} ({lang.toUpperCase()})</label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleTextChange(lang, path, e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-clinic-dark leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    );
  };
  
  const ImageInputField = ({ label, path }: { label: string, path: string }) => {
    const value = getNestedValue(content.images, path) ?? '';
    return (
        <div className="mb-4">
            <label className="block text-clinic-gray text-sm font-bold mb-2">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => handleImageChange(path, e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-clinic-dark leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
    );
  };
  
  const TextAreaField = ({ label, path, lang }: { label: string, path: string, lang: 'en' | 'ar' }) => {
    const value = getNestedValue(content.texts[lang], path) ?? '';
    return (
        <div className="mb-4">
            <label className="block text-clinic-gray text-sm font-bold mb-2">{label} ({lang.toUpperCase()})</label>
            <textarea
                value={value}
                onChange={(e) => handleTextChange(lang, path, e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-clinic-dark leading-tight focus:outline-none focus:shadow-outline h-24"
            />
        </div>
    );
   };


  const renderTabContent = () => {
    switch (activeTab) {
      case 'homepage':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Homepage Content</h3>
            <InputField lang="en" label="Hero Title" path="hero.title" />
            <InputField lang="ar" label="Hero Title" path="hero.title" />
            <TextAreaField lang="en" label="Hero Subtitle" path="hero.subtitle" />
            <TextAreaField lang="ar" label="Hero Subtitle" path="hero.subtitle" />
            <ImageInputField label="Hero Background Image URL" path="hero" />
            <ImageInputField label="Services Parallax Image URL" path="parallax.services" />
            <ImageInputField label="Team Parallax Image URL" path="parallax.team" />
            <ImageInputField label="Contact Parallax Image URL" path="parallax.contact" />
          </div>
        );
      case 'services':
        return (
            <div>
                <h3 className="text-xl font-bold mb-4">Services</h3>
                {content.texts.en.services.items.map((_, index) => (
                    <div key={index} className="p-4 border rounded-md mb-4 bg-gray-50">
                        <h4 className="font-bold mb-2 text-lg">Service {index + 1}</h4>
                        <InputField lang="en" label="Title" path={`services.items[${index}].title`} />
                        <InputField lang="ar" label="Title" path={`services.items[${index}].title`} />
                        <TextAreaField lang="en" label="Description" path={`services.items[${index}].description`} />
                        <TextAreaField lang="ar" label="Description" path={`services.items[${index}].description`} />
                    </div>
                ))}
            </div>
        );
      case 'team':
        return (
            <div>
                <h3 className="text-xl font-bold mb-4">Team Members</h3>
                {content.texts.en.team.members.map((_, index) => (
                    <div key={index} className="p-4 border rounded-md mb-4 bg-gray-50 relative">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-bold text-lg">Member {index + 1}</h4>
                            <button onClick={() => handleRemoveItem('team', index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700 transition-colors text-sm">Remove</button>
                        </div>
                        <InputField lang="en" label="Name" path={`team.members[${index}].name`} />
                        <InputField lang="ar" label="Name" path={`team.members[${index}].name`} />
                        <InputField lang="en" label="Title" path={`team.members[${index}].title`} />
                        <InputField lang="ar" label="Title" path={`team.members[${index}].title`} />
                        <TextAreaField lang="en" label="Bio" path={`team.members[${index}].bio`} />
                        <TextAreaField lang="ar" label="Bio" path={`team.members[${index}].bio`} />
                        <ImageInputField label="Photo URL" path={`team[${index}]`} />
                    </div>
                ))}
                <button onClick={() => handleAddItem('team')} className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors">Add New Member</button>
            </div>
        );
      case 'testimonials':
         return (
            <div>
                <h3 className="text-xl font-bold mb-4">Testimonials</h3>
                {content.texts.en.testimonials.items.map((_, index) => (
                    <div key={index} className="p-4 border rounded-md mb-4 bg-gray-50 relative">
                        <div className="flex justify-between items-center mb-2">
                           <h4 className="font-bold text-lg">Testimonial {index + 1}</h4>
                            <button onClick={() => handleRemoveItem('testimonials', index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700 transition-colors text-sm">Remove</button>
                        </div>
                        <InputField lang="en" label="Name" path={`testimonials.items[${index}].name`} />
                        <InputField lang="ar" label="Name" path={`testimonials.items[${index}].name`} />
                        <TextAreaField lang="en" label="Quote" path={`testimonials.items[${index}].quote`} />
                        <TextAreaField lang="ar" label="Quote" path={`testimonials.items[${index}].quote`} />
                        <ImageInputField label="Patient Photo URL" path={`testimonials[${index}]`} />
                    </div>
                ))}
                 <button onClick={() => handleAddItem('testimonials')} className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors">Add New Testimonial</button>
            </div>
        );
      case 'gallery':
          return (
            <div>
                <h3 className="text-xl font-bold mb-4">Smile Gallery</h3>
                {content.images.smileGallery.map((_, index) => (
                    <div key={index} className="p-4 border rounded-md mb-4 bg-gray-50 relative">
                         <div className="flex justify-between items-center mb-2">
                           <h4 className="font-bold text-lg">Case {index + 1}</h4>
                           <button onClick={() => handleRemoveItem('gallery', index)} className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-700 transition-colors text-sm">Remove</button>
                        </div>
                         <InputField lang="en" label="Case Title" path={`smileGallery.items[${index}].case`} />
                         <InputField lang="ar" label="Case Title" path={`smileGallery.items[${index}].case`} />
                        <ImageInputField label="Before Image URL" path={`smileGallery[${index}].before`} />
                        <ImageInputField label="After Image URL" path={`smileGallery[${index}].after`} />
                    </div>
                ))}
                <button onClick={() => handleAddItem('gallery')} className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 transition-colors">Add New Gallery Case</button>
            </div>
        );
      case 'appearance':
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Website Appearance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.keys(themes).map((themeKey) => {
                const theme = themes[themeKey as ThemeName];
                const isSelected = content.theme === themeKey;
                return (
                  <div key={themeKey} onClick={() => handleThemeChange(themeKey as ThemeName)} className={`p-4 border-2 rounded-lg cursor-pointer ${isSelected ? 'border-clinic-primary' : 'border-gray-300'}`}>
                    <h4 className="font-bold capitalize mb-2">{themeKey.replace(/([A-Z])/g, ' $1')}</h4>
                    <div className="flex gap-2">
                        {Object.values(theme).map((color, idx) => (
                            <div key={idx} className="w-8 h-8 rounded-full border" style={{ backgroundColor: color }}></div>
                        ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const TabButton = ({ tab, label }: { tab: AdminTab, label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 font-semibold rounded-t-lg transition-colors duration-200 ${activeTab === tab ? 'bg-white text-clinic-primary border-b-0' : 'bg-clinic-light text-clinic-gray hover:bg-gray-200'}`}
    >
      {label}
    </button>
  )

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-20 bg-clinic-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 relative">
            <h1 className="text-3xl md:text-4xl font-bold font-serif text-clinic-primary mb-4">Admin Panel</h1>
            <p className="text-clinic-gray">Manage your website content here. Changes are saved automatically.</p>
            <button
              onClick={logout}
              className="absolute top-0 right-0 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
              aria-label="Logout"
            >
              Logout
            </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="border-b border-gray-200 mb-8 -mx-8 px-8">
                <nav className="flex flex-wrap -mb-px">
                    <TabButton tab="homepage" label="Homepage" />
                    <TabButton tab="services" label="Services" />
                    <TabButton tab="team" label="Team" />
                    <TabButton tab="testimonials" label="Testimonials" />
                    <TabButton tab="gallery" label="Smile Gallery" />
                    <TabButton tab="appearance" label="Appearance" />
                </nav>
            </div>
            {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;