import { gql } from '@apollo/client';
import React from 'react';
import { HighlightedFeatures } from '../../components/HighlightedFeatures'

export default function AcfHighlightedFeatures(props) {
    return <HighlightedFeatures {...props.highlightedFeatures}/>
}

AcfHighlightedFeatures.fragments = {
    entry: gql`
        fragment AcfHighlightedFeaturesFragment on AcfHighlightedFeatures {
            highlightedFeatures {
                headline
                description
                centerImage{
                  node {
                    sourceUrl
                  }
                }
                features {
                  title
                  description
                  fontAwesomeIconName
                }
            }
        }
    `,
    key: `AcfHighlightedFeaturesFragment`,
};

AcfHighlightedFeatures.displayName = 'AcfHighlightedFeatures';
