
import PropTypes from "prop-types";

function TvLogo({title,subtitle,img}) {
    return (
        <>

<div className="row">
    <div className="col-2">
            <img src={img} className={"mt-1"} style={{width: "45px", height: "45px"}} alt=""/>
    </div>
    <div className="col-8">
        <div className="fs-4 fw-bold pt-1 ps-1">{title}</div>

        <div className="font-monospace fs-6" >{subtitle}</div>
    </div>
</div>


        </>
    );
}

export default TvLogo;

TvLogo.propTypes = {
    title: PropTypes.string,
    subtitle:PropTypes.string,
    img:PropTypes.any
}