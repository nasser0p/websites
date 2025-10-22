import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { GoogleReviews, PerformanceSummaryData } from '../types';
import { GoogleIcon, StarIcon } from './Icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SocialProofProps {
    googleReviews: GoogleReviews;
    performanceSummary: PerformanceSummaryData;
}

const SocialProof: React.FC<SocialProofProps> = ({ googleReviews, performanceSummary }) => {
    const langContext = useContext(LanguageContext);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    if (!langContext) return null;
    const { text } = langContext;

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={`full-${i}`} className="h-5 w-5 text-brand-gold" />);
        }
        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative h-5 w-5">
                    <StarIcon className="absolute text-gray-300" />
                    <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
                        <StarIcon className="text-brand-gold" />
                    </div>
                </div>
            );
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarIcon key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
        }
        return stars;
    };

    const stats = [
        {
            id: 'google',
            value: googleReviews.averageRating.toFixed(1),
            label: text.basedOnReviews.replace('{total}', googleReviews.totalReviews.toString()),
            icon: <GoogleIcon className="h-6 w-6 mr-2" />,
            stars: renderStars(googleReviews.averageRating)
        },
        {
            id: 'patients',
            value: performanceSummary.happyPatients,
            label: text.happyPatientsStat
        },
        {
            id: 'experience',
            value: performanceSummary.yearsExperience,
            label: text.yearsExperienceStat
        }
    ];

    return (
        <section ref={ref} className="bg-white py-12 md:py-16 relative z-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {stats.map((stat, index) => (
                        <div 
                            key={stat.id} 
                            className={`flex flex-col items-center justify-center text-center p-6 bg-gray-50 rounded-lg shadow-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-center text-4xl md:text-5xl font-bold text-brand-dark">
                                {stat.icon}
                                <span>{stat.value}</span>
                            </div>
                            {stat.stars && <div className="flex mt-2">{stat.stars}</div>}
                            <p className="mt-2 text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
