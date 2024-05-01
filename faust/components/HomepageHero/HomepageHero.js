import React from 'react';
import styles from './HomepageHero.module.scss';
import Image from 'next/image'

export default function HomepageHero(props) {
    console.log(props);
    const { ctaText, ctaUrl, heroSlides } = props || {};
    return (
        <section id="de-carousel" className="no-top no-bottom carousel slide carousel-fade" data-mdb-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators z1000">
                {heroSlides?.map((slide, index) => (
                    <li key={index}
                        data-mdb-target="#de-carousel"
                        data-mdb-slide-to={index}
                        className={index === 0 ? 'active' : ''}>
                    </li>
                ))}
            </ol>

            {/* Inner */}
            <div className="carousel-inner position-relative">
                {heroSlides?.map((slide, index) => (
                    <div className={`carousel-item jarallax ${index === 0 ? 'active' : ''}`} key={index}>
                        <div className="jarallax-img">
                            <Image src={slide.slideImage.node.sourceUrl} alt="" layout="fill" className='jarallax-img' objectFit='cover' quality={100}/>
                        </div>
                        <div className="mask">
                            <div className="no-top no-bottom">
                                <div className="h-100 v-center">
                                    <div className="container">
                                        <div className="row gx-5 align-items-center">
                                            <div className="col-lg-6 offset-lg-3 text-center mb-sm-30">
                                                <h1 className="s3 mb-3 wow fadeInUp">{slide.headline}</h1>
                                                <p className="lead wow fadeInUp" data-wow-delay=".3s">{slide.subheadline}</p>
                                                <div className="spacer-10"></div>
                                                <a className="btn-line mb10 wow fadeInUp" data-wow-delay=".6s" href={ctaUrl}>{ctaText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Inner */}

            {/* Controls */}
            <a className="carousel-control-prev" href="#de-carousel" role="button" data-mdb-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#de-carousel" role="button" data-mdb-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <div className="de-gradient-edge-bottom"></div>
        </section>
    );
}
