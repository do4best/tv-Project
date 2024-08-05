
import {Star, StarFill, StarHalf,} from "react-bootstrap-icons";
import PropTypes from "prop-types";

function FiveStarRating({rating}) {
    {/*declare star icon*/}
    const starList=[];
// store number of filled star
    const starCount = Math.floor(rating)
    {/* store if yes or no there is  half star*/}
    const halfStar = (rating - parseInt(rating)) > 0.5;
    {/* store the number of empty star*/}
    const emptyStar = 5 - starCount - (halfStar?1:0)
    {/*Push the filled star icons*/}
    for(let i=0; i<starCount; i++){
        starList.push(<StarFill key={"star-fill"+i}/>)
    }
    {/*Push half icon star if necessary*/}
    if(halfStar){
        starList.push(<StarHalf key={"star-half"}/>)
    }
    {/*Push the empty star icon*/}
    for(let i=0; i<emptyStar; i++){
        starList.push(<Star key={"star-empty"+i}/>)
    }



    return <div>{starList}</div>
}

export default FiveStarRating;
FiveStarRating.propTypes={
    rating:PropTypes.any
}