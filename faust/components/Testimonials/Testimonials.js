import React from 'react';
import styles from './Testimonials.module.scss';

export default function Testimonials(props) {
    const { testimonials } = props;

    // Helper function to render spacer divs
    const renderSpacers = (count) => {
        let spacers = [];
        for (let i = 0; i < count; i++) {
            spacers.push(<div key={i} className="spacer-double sm-hide"></div>);
        }
        return spacers;
    };

    return (
        <section id="section-testimonials" className="no-top no-bottom">
            <div className="container">
                <div className="row g-4 align-items-center">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="col-md-4">
                            {renderSpacers(2 * index)}
                            <div className="de-image-text">
                                <div className="d-text">
                                    <div className="d-quote id-color"><i className="fa fa-quote-right"></i></div>
                                    <h4>{testimonial.headline}</h4>
                                    <blockquote>
                                        {testimonial.paragraph}
                                        <span className="by">{testimonial.author}</span>
                                    </blockquote>
                                </div>
                                <img src={testimonial.image.node.sourceUrl} className="img-fluid" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
