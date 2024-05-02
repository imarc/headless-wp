import React from 'react';
import styles from './StatsSection.module.scss';
import Image from 'next/image'

export default function StatsSection(props) {
    const { headline, description, statistics, backgroundImage} = props || {};
    return (
        <>
        <section className="text-light jarallax">
            <img src={backgroundImage.node.sourceUrl} className="jarallax-img" alt="" />
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInRight">
                        <h2>{headline}</h2>
                    </div>
                    <div className="col-lg-6 wow fadeInLeft">
                        {description}
                    </div>
                </div>
                <div className="spacer-double"></div>
                <div className="row text-center">
                {statistics?.map((stat, index) => (
                    <div className="col-md-3 col-sm-6 mb-sm-30" key={index}>
                        <div className="de_count transparent text-light wow fadeInUp">
                            <h3 className="timer" data-to="15425" data-speed="3000">{stat.stat}</h3>
                            {stat.description}
                        </div>
                    </div>

                 ))}
                </div>
            </div>
        </section>
    </>


    );
}
