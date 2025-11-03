import React, { useState, useEffect, FormEvent } from 'react';
import { useContent } from '../contexts/ContentContext';

const ADMIN_PASSWORD = 'admin123'; // Simple password for demo purposes

// Helper to get a value from a nested object
const getIn = (obj: any, path: string[], d: any = undefined) => {
    let current = obj;
    for (const key of path) {
        if (current === undefined || current === null) return d;
        current = current[key];
    }
    return current ?? d;
};

const BilingualField = ({ label, path, type = 'input' }: { label: string; path: string; type?: 'input' | 'textarea' }) => {
    const { content, updateContent } = useContent();
    const enValue = getIn(content, ['texts', 'en', ...path.split('.')]) || '';
    const arValue = getIn(content, ['texts', 'ar', ...path.split('.')]) || '';

    const handleChange = (lang: 'en' | 'ar', value: string) => {
        updateContent(`texts.${lang}.${path}`, value);
    };

    const InputComponent = type === 'textarea' ? 'textarea' : 'input';
    const inputClasses = "w-full bg-brand-dark text-brand-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary";

    return (
        <div className="mb-6">
            <label className="block text-brand-primary mb-2">{label}</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <span className="text-sm text-brand-gray">English</span>
                    <InputComponent
                        value={enValue}
                        onChange={(e) => handleChange('en', e.target.value)}
                        className={inputClasses}
                        rows={type === 'textarea' ? 5 : undefined}
                    />
                </div>
                <div className="rtl">
                    <span className="text-sm text-brand-gray">Arabic (العربية)</span>
                    <InputComponent
                        value={arValue}
                        onChange={(e) => handleChange('ar', e.target.value)}
                        className={`${inputClasses} text-right`}
                        rows={type === 'textarea' ? 5 : undefined}
                    />
                </div>
            </div>
        </div>
    );
};

const ImageField = ({ label, path }: { label: string; path: string }) => {
    const { content, updateContent } = useContent();
    const value = getIn(content, ['images', ...path.split('.')]) || '';

    return (
        <div className="mb-6">
            <label className="block text-brand-primary mb-2">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => updateContent(`images.${path}`, e.target.value)}
                className="w-full bg-brand-dark text-brand-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                placeholder="https://example.com/image.jpg"
            />
            {value && <img src={value} alt="Preview" className="mt-4 rounded-lg max-w-xs shadow-lg" />}
        </div>
    );
};


const AdminPage: React.FC = () => {
    const { resetContent, content } = useContent();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('General');

    useEffect(() => {
        const authStatus = sessionStorage.getItem('isAdminAuthenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
    }, []);
    
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            sessionStorage.setItem('isAdminAuthenticated', 'true');
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password.');
        }
    };
    
    const handleReset = () => {
        if (window.confirm('Are you sure you want to reset all content to the default? This cannot be undone.')) {
            resetContent();
            alert('Content has been reset to defaults.');
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-brand-dark">
                <div className="w-full max-w-md p-8 bg-brand-blue rounded-lg shadow-2xl">
                    <h1 className="text-3xl font-bold font-serif text-brand-primary text-center mb-6">Admin Login</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-full bg-brand-dark text-brand-light p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        />
                        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
                        <button type="submit" className="w-full mt-6 bg-brand-primary text-brand-dark font-bold py-3 rounded-lg hover:bg-opacity-80 transition-all duration-300">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        );
    }
    
    const tabs = ['General', 'Homepage', 'Services', 'Team', 'Contact & Footer'];

    return (
        <div className="pt-24 md:pt-32 pb-16 md:pb-20 bg-brand-dark">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold font-serif text-brand-primary">Admin Panel</h1>
                    <button onClick={handleReset} className="mt-4 md:mt-0 bg-red-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors duration-300">
                        Reset to Defaults
                    </button>
                </div>

                <div className="flex flex-wrap border-b border-brand-light-blue/20 mb-8">
                    {tabs.map(tab => (
                        <button 
                          key={tab} 
                          onClick={() => setActiveTab(tab)}
                          className={`py-2 px-4 font-semibold transition-colors duration-300 ${activeTab === tab ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-brand-light hover:text-brand-primary'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="bg-brand-blue p-8 rounded-lg shadow-lg">
                    {activeTab === 'General' && (
                        <>
                            <h2 className="text-2xl font-serif text-brand-primary mb-6">General Website Content</h2>
                            <BilingualField label="Firm Name" path="header.firmName" />
                        </>
                    )}
                    {activeTab === 'Homepage' && (
                        <>
                            <h2 className="text-2xl font-serif text-brand-primary mb-6">Homepage Content</h2>
                            <BilingualField label="Hero Title" path="hero.title" />
                            <BilingualField label="Hero Subtitle" path="hero.subtitle" type="textarea" />
                            <ImageField label="Hero Background Image" path="hero" />
                            <hr className="my-8 border-brand-light-blue/20" />
                            <BilingualField label="About Title" path="about.title" />
                            <BilingualField label="About Paragraph 1" path="about.p1" type="textarea"/>
                            <BilingualField label="About Paragraph 2" path="about.p2" type="textarea"/>
                            <ImageField label="About Section Image" path="about" />
                        </>
                    )}
                     {activeTab === 'Services' && (
                        <>
                            <h2 className="text-2xl font-serif text-brand-primary mb-6">Services Content</h2>
                            <BilingualField label="Services Section Title" path="services.title" />
                            <BilingualField label="Services Section Subtitle" path="services.subtitle" />
                            {content.texts.en.services.items.map((item, index) => (
                                <div key={item.id} className="my-6 p-4 border border-brand-light-blue/20 rounded-lg">
                                    <h3 className="text-xl font-semibold text-brand-light mb-4">Service: {item.title}</h3>
                                    <BilingualField label="Title" path={`services.items.${index}.title`} />
                                    <BilingualField label="Short Description" path={`services.items.${index}.description`} type="textarea"/>
                                </div>
                            ))}
                        </>
                    )}
                     {activeTab === 'Team' && (
                        <>
                            <h2 className="text-2xl font-serif text-brand-primary mb-6">Team Content</h2>
                            <BilingualField label="Team Section Title" path="team.title" />
                            <BilingualField label="Team Section Subtitle" path="team.subtitle" />
                            {content.texts.en.team.members.map((member, index) => (
                                <div key={index} className="my-6 p-4 border border-brand-light-blue/20 rounded-lg">
                                    <h3 className="text-xl font-semibold text-brand-light mb-4">Team Member: {member.name}</h3>
                                    <BilingualField label="Name" path={`team.members.${index}.name`} />
                                    <BilingualField label="Title" path={`team.members.${index}.title`} />
                                    <BilingualField label="Biography" path={`team.members.${index}.bio`} type="textarea" />
                                    <ImageField label="Profile Image" path={`team.${index}`} />
                                </div>
                            ))}
                        </>
                    )}
                    {activeTab === 'Contact & Footer' && (
                        <>
                            <h2 className="text-2xl font-serif text-brand-primary mb-6">Contact & Footer Content</h2>
                            <BilingualField label="Contact Title" path="contact.title" />
                            <BilingualField label="Contact Subtitle" path="contact.subtitle" />
                            <BilingualField label="Address Value" path="contact.info.addressValue" />
                            <hr className="my-8 border-brand-light-blue/20" />
                             <BilingualField label="Footer About Text" path="footer.about" type="textarea"/>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;