import { gql } from '@apollo/client';
import React from 'react';
import { HomepageHero } from '../../components/HomepageHero'

export default function AcfHomepageHero(props) {
    return <HomepageHero {...props.homepageHero}/>
}

AcfHomepageHero.fragments = {
    entry: gql`
        fragment AcfHomepageHeroFragment on AcfHomepageHero {
            homepageHero {
                ctaText
                ctaUrl
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
