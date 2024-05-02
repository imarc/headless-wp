import { gql } from '@apollo/client';
import React from 'react';
import { Testimonials } from '../../components/Testimonials';

export default function AcfTestimonials(props) {
    return <Testimonials {...props.testimonials}/>
}

AcfTestimonials.fragments = {
    entry: gql`
        fragment AcfTestimonialsFragment on AcfTestimonials {
          testimonials {
            testimonials {
              author
              headline
              paragraph
              image {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
    `,
    key: `AcfTestimonialsFragment`,
};

AcfTestimonials.displayName = 'AcfTestimonials';
