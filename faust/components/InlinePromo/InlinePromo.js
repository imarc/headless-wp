export default function InlinePromo(props) {
    return (
        <>
            <section className="text-light jarallax" aria-label="section">
                <img src="images/background/3.jpg" alt="" className="jarallax-img" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                {props.heading && <h1>{props.heading}</h1>}
                                <div className="spacer-20"></div>
                            </div>
                            { props.promoItems && props.promoItems.map(item => {
                                return (
                                    <div className="col-md-3">
                                        {item.icon && <i className={`fa ${item.icon} de-icon mb20`}></i>}
                                        {item.heading && <h4>{item.heading}</h4>}
                                        {item.subheading && <p>{item.subheading}</p>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
            </section>
        </>
    )
}