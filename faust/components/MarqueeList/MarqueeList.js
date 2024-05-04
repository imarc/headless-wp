export default function MarqueeList(props) {
    if (!props) return;

    function renderTerms(terms) {
        return props.terms && props.terms.map((term, index) => {
            if (!term.keyWord) return;
            return (
                <div className="d-item" key={index}>
                    <span className="d-item-txt">{term.keyWord}</span>
                    <span className="d-item-display">
                        <i className="d-item-dot"></i>
                    </span>
                </div>
            )
        })
    }

    return (
        <>
            <section aria-label="section" className="pt40 pb40 text-light" data-bgcolor="#111111">
                <div className="wow fadeInRight d-flex">
                    <div className="de-marquee-list">
                        {renderTerms(props.terms)}
                    </div>
                    <div className="de-marquee-list">
                        {renderTerms(props.terms)}
                    </div>
                </div>
            </section>
        </>
    )
}