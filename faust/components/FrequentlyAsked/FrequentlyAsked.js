export default function FrequentlyAsked(props) {
    let n = 0;

    function renderFaq(faq) {
        ++n;
        return (
            <span key={`title-${n}`}>
                <div className="accordion-section-title" data-tab={`#accordion-${n}`}>
                    {faq.question}
                </div>
                <div className="accordion-section-content" id={`accordion-${n}`}>
                    <p>{faq.answer}</p>
                </div>
            </span>
        )
    }

    return (
        <>
            <section id="section-faq">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            {props.heading && <h2>{props.heading}</h2>}
                            <div className="spacer-20"></div>
                        </div>
                    </div>
                    <div className="row g-custom-x">
                        <div className="col-md-6 wow fadeInUp">
                            <div className="accordion secondary">
                                <div className="accordion-section">
                                    {props.questions && props.questions.slice(0,3).map(question => {
                                        if (!question.question || !question.answer) {
                                            return;
                                        }
                                        else {
                                            return renderFaq(question);
                                        }
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 wow fadeInUp">
                            <div className="accordion secondary">
                                <div className="accordion-section">
                                    {props.questions && props.questions.length > 3 && props.questions.slice(3,6).map(question => {
                                        if (!question.question || !question.answer) {
                                            return;
                                        }
                                        else {
                                            return renderFaq(question);
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}