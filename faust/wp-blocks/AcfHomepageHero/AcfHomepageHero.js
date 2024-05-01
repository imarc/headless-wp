import { gql } from '@apollo/client';
import React from 'react';
import { HomepageHero } from '../../../common/components';

export default function AcfHomepageHero(props) {
  return <HomepageHero props={props}/>
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
