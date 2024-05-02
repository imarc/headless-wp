// FeaturedRentals.js
import React from 'react';
import { gql } from '@apollo/client';
import { FrequentlyAsked } from '../../components/FrequentlyAsked';

// create FeaturedRentals component
export default function AcfFrequentlyAsked(props) {
    return <FrequentlyAsked {...props.frequentlyAsked} />;
}

AcfFrequentlyAsked.displayName = 'AcfFeaturedRentals';

AcfFrequentlyAsked.fragments = {
    key: `AcfFrequentlyAskedFragment`,
    entry: gql`
    fragment AcfFrequentlyAskedFragment on AcfFrequentlyAsked {
        frequentlyAsked {
            heading
            questions {
                question
                answer
            }
        }
    }
    `
}