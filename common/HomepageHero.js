import React from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function HomepageHero({ attributes }) {
    const { heroSlides = [], ctaText, ctaUrl } = attributes;

    if (attributes === undefined || !heroSlides.length) {
        return <p>{__("No slides added yet. Add new slides in the inspector.", "text-domain")}</p>;
    }

    return (
        <div className="slides-preview-container">
            {heroSlides.map((slide, index) => (
                <div key={index} className="slide-preview">
                    <img src={slide.image} alt={slide.headline || 'Slide image'} />
                    <h2>{slide.headline}</h2>
                    <p>{slide.subheadline}</p>
                </div>
            ))}
            <div className="cta-preview">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">{ctaText}</a>
            </div>
        </div>
    );
}
