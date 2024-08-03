import React from 'react';
import TvShowListItem from "./tvShowListItem.jsx";
import PropTypes from "prop-types";

function TvShowList({tvShowList,onClickItem}) {

    return (
        <>
<div className="fw-bolder fs-4">You will Probably Like these too.</div>
<div className="d-flex overflow-hidden pb-5">
    {
        tvShowList.map((tv)=>{
return(
<span className={"ms-4"} key={tv.id}><TvShowListItem onClick={onClickItem} tvshow={tv}/> </span>
)
        })
    }
</div>

        </>
    );
}

export default TvShowList;
TvShowList.propTypes={
    onClickItem:PropTypes.func,
    tvShowList:PropTypes.any
}