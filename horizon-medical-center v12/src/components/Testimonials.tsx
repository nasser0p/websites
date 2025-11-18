import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { StarIcon, QuoteIcon, GoogleIcon } from './Icons';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useTilt from '../hooks/useTilt';
import { Review, GoogleReviews, TextContent } from '../types';
import SchemaMarkup from './SchemaMarkup';
import { optimizeCloudinaryUrl } from '../utils/imageOptimizer';

interface TestimonialsProps {
    testimonials: Review[];
    googleReviews: GoogleReviews;
}

const TestimonialCard: React.FC<{ testimonial: Review, text: TextContent, isVisible: boolean, index: number }> = ({ testimonial, text, isVisible, index }) => {
    const { ref, style, handleMouseMove, handleMouseLeave } = useTilt();
    return (
        <div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ ...style, transitionDelay: `${300 + index * 100}ms` }}
            className={`bg-gray-50/95 backdrop-blur-sm p-8 rounded-lg shadow-lg relative flex flex-col tilt-card hover:shadow-2xl hover:shadow-brand-teal/20 tappable transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
        >
            <QuoteIcon className="absolute top-4 right-4 h-12 w-12 text-gray-200/50 rtl:left-4 rtl:right-auto" />
            <div className="flex items-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-brand-gold" />
                ))}
            </div>
            <blockquote className="mt-6 text-gray-700 italic flex-grow">
                <p>“{text[testimonial.quoteKey as keyof typeof text]}”</p>
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-4">
               <img src={optimizeCloudinaryUrl(testimonial.avatarUrl)} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover shadow-md" loading="lazy" />
                <div className="font-semibold text-brand-dark">{testimonial.name}</div>
            </figcaption>
        </div>
    );
};

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, googleReviews }) => {
    const langContext = useContext(LanguageContext);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    if (!langContext) return null;
    const { text, content } = langContext;

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<StarIcon key={`full-${i}`} className="h-6 w-6 text-brand-gold" />);
        }
        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative h-6 w-6">
                    <StarIcon className="absolute text-gray-300" />
                    <div className="absolute top-0 left-0 h-full w-1/2 overflow-hidden">
                        <StarIcon className="text-brand-gold" />
                    </div>
                </div>
            );
        }
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<StarIcon key={`empty-${i}`} className="h-6 w-6 text-gray-300" />);
        }
        return stars;
    };

    const aggregateRatingSchema = {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "Dentist",
        "name": text.clinicName,
        "image": content.logoUrl,
        "address": text.address,
        "telephone": text.phone
      },
      "ratingValue": googleReviews.averageRating.toString(),
      "reviewCount": googleReviews.totalReviews.toString()
    };


    return (
        <section id="reviews" className="bg-white py-20 md:py-28 relative overflow-hidden" ref={ref}>
             {/* Parallax Background with Overlay */}
            {content.testimonialsBgUrl && (
                <div className="absolute inset-0 z-0">
                    <div 
                        className="w-full h-full parallax-bg" 
                        style={{ backgroundImage: `url(${optimizeCloudinaryUrl(content.testimonialsBgUrl)})` }}
                    ></div>
                    {/* Marketing Upgrade: Frosted Glass Effect */}
                    <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
                </div>
            )}
            <div style={{ display: 'none' }}>
                <SchemaMarkup schema={aggregateRatingSchema} />
                {testimonials.map(testimonial => (
                    <SchemaMarkup key={`review-schema-${testimonial.id}`} schema={{
                        "@context": "https://schema.org",
                        "@type": "Review",
                        "itemReviewed": {
                            "@type": "Dentist",
                            "name": text.clinicName
                        },
                        "reviewRating": {
                            "@type": "Rating",
                            "ratingValue": testimonial.rating.toString(),
                            "bestRating": "5"
                        },
                        "author": {
                            "@type": "Person",
                            "name": testimonial.name
                        },
                        "reviewBody": text[testimonial.quoteKey as keyof typeof text]
                    }} />
                ))}
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className={`transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'} text-center max-w-3xl mx-auto`}>
                    <h2 className="text-4xl font-serif font-bold sm:text-5xl bg-gradient-to-r from-brand-dark via-brand-teal to-gray-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">{text.testimonialsTitle}</h2>
                    <p className="mt-4 text-lg text-brand-gold font-semibold">{text.testimonialsSubtitle}</p>
                </div>
                
                <div 
                    className={`mt-12 max-w-md mx-auto bg-gray-50/95 backdrop-blur-sm p-6 rounded-lg shadow-lg text-center transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-teal/20 tappable ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'}`}
                    style={{ transitionDelay: `150ms` }}
                >
                    <p className="text-5xl font-bold text-brand-dark">{googleReviews.averageRating.toFixed(1)}</p>
                    <div className="flex justify-center my-3">
                        {renderStars(googleReviews.averageRating)}
                    </div>
                    <p className="text-gray-600">
                        {text.reviewsOverallRatingText
                            .replace('{rating}', googleReviews.averageRating.toFixed(1))
                            .replace('{total}', googleReviews.totalReviews.toString())
                        }
                    </p>
                    <a 
                        href={googleReviews.reviewsPageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full font-semibold border border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 shadow-sm"
                    >
                        <GoogleIcon className="h-5 w-5"/>
                        <span>{text.viewAllOnGoogle}</span>
                    </a>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            text={text}
                            isVisible={isVisible}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;