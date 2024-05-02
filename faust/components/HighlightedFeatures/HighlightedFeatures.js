import React from 'react';
import styles from './HighlightedFeatures.module.scss';
import Image from 'next/image'

export default function HighlightedFeatures(props) {
    const { headline, description, centerImage, features} = props || {};
    // Take only the top 4 features
    const topFeatures = features.slice(0, 4);

    // Function to split the features into two groups
    const splitFeatures = (features) => {
    const halfwayPoint = Math.ceil(features.length / 2);
    return [features.slice(0, halfwayPoint), features.slice(halfwayPoint)];
  };

  // Splitting the top features into two groups
  const [groupOne, groupTwo] = splitFeatures(topFeatures);


    return (
    <>
        <section aria-label="section" className="no-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <h2>{headline}</h2>
                        <p>{description}</p>
                        <div className="spacer-20"></div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="col-lg-3">
                        {groupOne.map((feature, index) => (
                            <div key={index} className="box-icon s2 p-small mb20 wow fadeInLeft" data-wow-delay=".5s">
                                <i className={`fa bg-color ${feature.fontAwesomeIconName}`}></i>
                                <div className="d-inner">
                                    <h4>{feature.title}</h4>
                                    {feature.description}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-lg-6">
                        <img src={centerImage.node.sourceUrl} alt="" className="img-fluid wow fadeInUp" />
                    </div>

                    <div className="col-lg-3">
                        {groupTwo.map((feature, index) => (
                            <div key={index} className="box-icon s2 p-small mb20 wow fadeInRight" data-wow-delay=".5s">
                                <i className={`fa bg-color ${feature.fontAwesomeIconName}`}></i>
                                <div className="d-inner">
                                    <h4>{feature.title}</h4>
                                    {feature.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
