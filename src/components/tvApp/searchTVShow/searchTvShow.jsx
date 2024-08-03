import {useState} from 'react';
import {BiSearch} from "react-icons/bi";
import PropTypes from "prop-types";

function SearchTvShow({submitit}) {
const [value,setValue] = useState("")
const onSubmit=(e)=>{
if(e.key === "Enter" && e.target.value.trim() !== "") {
    submitit(e.target.value)
    setValue("")
}}
    const handelEvent=(e)=>{
        setValue(e.target.value)
    }
    return (
        <>

<BiSearch size={27} className={"position-absolute  mt-2 ms-2 text-black"}/>
            <input type="text" value={value} onChange={handelEvent} onKeyUp={onSubmit} className={"form-control  w-100 "} placeholder={"Search Your Favorite Show"} />
        </>
    );
}

export default SearchTvShow;
SearchTvShow.propTypes={
    submitit:PropTypes.func
}