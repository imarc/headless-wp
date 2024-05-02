export default function FeaturedRentals(props) {
    return (
        <section id="section-cars">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        {props.heading && <h2>{props.heading}</h2>}
                        {props.subheading && <p>{props.subheading}</p>}
                        <div className="spacer-20"></div>
                    </div>
                    <div id="items-carousel" className="owl-carousel wow fadeIn">
                        {props.featuredCars && props.featuredCars.nodes && props.featuredCars.nodes.map(car => {
                            const carFields = car.carFields;
                            const carType = carFields?.carType?.nodes[0].name;
                            
                            return (
                                <div className="col-lg-12">
                                    <div className="de-item mb30">
                                        <div className="d-img">
                                            <img src="images/cars/jeep-renegade.jpg" className="img-fluid" alt="" />
                                        </div>
                                        <div className="d-info">
                                            <div className="d-text">
                                                <h4>{carFields.name}</h4>
                                                <div className="d-item_like">
                                                    <i className="fa fa-heart"></i><span>{carFields.likes}</span>
                                                </div>
                                                <div className="d-atr-group">
                                                    <span className="d-atr"><img src="images/icons/1-green.svg" alt="" />{carFields.passengers}</span>
                                                    <span className="d-atr"><img src="images/icons/2-green.svg" alt="" />{carFields.luggage}</span>
                                                    <span className="d-atr"><img src="images/icons/3-green.svg" alt="" />{carFields.doors}</span>
                                                    {carType && <span className="d-atr"><img src="images/icons/4-green.svg" alt="" />{carType}</span>}
                                                </div>
                                                <div className="d-price">
                                                    Daily rate from <span>${carFields.dailyRate}</span>
                                                    <a className="btn-main" href="car-single.html">Rent Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}