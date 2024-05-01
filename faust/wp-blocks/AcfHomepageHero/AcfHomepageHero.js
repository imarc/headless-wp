import { gql } from '@apollo/client';
import React from 'react';

export default function AcfHomepageHero(props) {
    console.log("HomepageHero called, props below:");
    console.log(props);

    const { ctaText, ctaLink, heroSlides } = props?.homepageHero || {};

    return (
        <div>
            {heroSlides?.map((slide, index) => (
                <div key={index}>
                    <h1>{slide.headline}</h1>
                    <h2>{slide.subheadline}</h2>
                    <img src={slide.slideImage?.node?.sourceUrl} alt="Slide" />
                </div>
            ))}
            {ctaText && ctaLink && (
                <div>
                    <a href={ctaLink}>{ctaText}</a>
                </div>
            )}
        </div>
    );
}

AcfHomepageHero.fragments = {
    entry: gql`
        fragment AcfHomepageHeroFragment on AcfHomepageHero {
            homepageHero {
                ctaText
                ctaLink
                heroSlides {
                    headline
                    subheadline
                    slideImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
    `,
    key: `AcfHomepageHeroFragment`,
};

AcfHomepageHero.displayName = 'AcfHomepageHero';
