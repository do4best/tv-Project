
import {small_base_url} from "../../apiHandeling/config.js";
import PropTypes from "prop-types";

const Max_number=20
function TvShowListItem({tvshow,onClick}) {
    const onClick_=()=>{
onClick(tvshow)
    }
    return (
        <>
        <div className="" onClick={onClick_}>
<img src={small_base_url+tvshow.backdrop_path} alt={tvshow.name}/>
<div className="">{tvshow.name.length > Max_number?tvshow.name.slice(0,Max_number)+".....":tvshow.name}</div>
        </div>
        </>
    );
}

export default TvShowListItem;
TvShowListItem.propTypes={
    tvshow:PropTypes.any,
    onClick:PropTypes.func
}