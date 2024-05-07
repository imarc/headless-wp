// FeaturedRentals.js
import React from 'react';
import { gql } from '@apollo/client';

import { FeaturedRentals } from '../../components/FeaturedRentals';

// create FeaturedRentals component
export default function AcfFeaturedRentals(props) {
    return <FeaturedRentals {...props.featuredRentals} />;
}

AcfFeaturedRentals.displayName = 'AcfFeaturedRentals';

AcfFeaturedRentals.fragments = {
    key: `AcfFeaturedRentalsFragment`,
    entry: gql`
    fragment AcfFeaturedRentalsFragment on AcfFeaturedRentals {
        featuredRentals {
            heading
            subheading
            featuredCars {
                nodes {
                  ... on Car {
                    carFields {
                      name
                      passengers
                      luggage
                      doors
                      thumbnailPhoto {
                        node {
                          sourceUrl
                        }
                      }
                      carType {
                        nodes {
                          name
                        }
                      }
                      dailyRate
                      likes
                    }
                    uri
                  }
                }
            }
        }
    }
    `
}