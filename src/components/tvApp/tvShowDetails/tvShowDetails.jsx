
import PropTypes from "prop-types";
import FiveStarRating from "../fiveStarRating/fiveStarRating.jsx";

function TvShowDetails({tvShowDetails}) {
    const voting = tvShowDetails.vote_average/2
    return (
        <>
            <div className="fw-bold fs-3">{tvShowDetails.original_name}</div>
            <div className="d-flex fs-4">
                <FiveStarRating rating={voting}/>
                <span className={" ms-2  "}>{voting}/5</span>
            </div>
            <div className="overflow-auto">{tvShowDetails.overview}</div>

        </>
    );
}

export default TvShowDetails;
TvShowDetails.propTypes={
    tvShowDetails:PropTypes.any
}