import React from 'react';
import className from 'classnames/bind';
import styles from './HomepageHero.module.scss';

let cx = className.bind(styles);

export default function HomepageHero(props) {
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
