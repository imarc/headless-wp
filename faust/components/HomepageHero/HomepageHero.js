import React from 'react';
import className from 'classnames/bind';
import styles from './HomepageHero.module.scss';

let cx = className.bind(styles);

export default function HomepageHero(props) {
  const { ctaText, ctaUrl, heroSlides } = props || {};
  return (
      <div>
          {heroSlides?.map((slide, index) => (
              <div key={index}>
                  <h1>{slide.headline}</h1>
                  <h2>{slide.subheadline}</h2>
                  <img src={slide.slideImage?.node?.sourceUrl} alt="Slide" />
              </div>
          ))}
          {ctaText && ctaUrl && (
              <div>
                  <a href={ctaUrl}>{ctaText}</a>
              </div>
          )}
      </div>
  );
}
