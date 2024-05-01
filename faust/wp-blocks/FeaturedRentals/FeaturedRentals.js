// FeaturedRentals.js
import React from 'react';
import { gql } from '@apollo/client';

// create FeaturedRentals component
export default function FeaturedRentals(props) {
  console.log(props.attributes);
  return <div>FeaturedRentals</div>;
}

FeaturedRentals.displayName = 'FeaturedRentals';

FeaturedRentals.fragments = {
    key: ``,
    entry: gql`
    fragment FeaturedRentalsBlockFragment on AcfRentalyFeaturedRentals {
        featuredRentalBlockFields {
            heading
        }
    }
    `
}