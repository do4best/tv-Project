// Author Meer
import TvLogo from "./logo/tvLogo.jsx";
import image from '../../assets/logo1.png'
import SearchTvShow from "./searchTVShow/searchTvShow.jsx";
import TvShowDetails from "./tvShowDetails/tvShowDetails.jsx";
import TvShowList from "./tvShowList/tvShowList.jsx";
import {useEffect, useState} from "react";
import {TvShow} from "../apiHandeling/tvApi.js";
import {back_drop_url} from "../apiHandeling/config.js";
function TvApp() {
    const [theTvShow,setTheTvShow] = useState("")
    const [recomendTv,setRecomendTv] = useState([])

async function fetchPopular(){
try{

const tvShowList = await TvShow.fetchPopulars()
    if(tvShowList.length > 0){
setTheTvShow(tvShowList[0])
    }

}catch (e) {alert("Please Try Again Later")
}
}
    // end of fetchPopular()
async function fetchRecommendation(tvid){
try{
const recommendTvProgramme = await TvShow.fetchRecoPopulars(tvid);
if(recommendTvProgramme.length > 0){
setRecomendTv(recommendTvProgramme.slice(0,10))
}


}catch (e) {
    alert("Sorry for Troubles")

}
}
// end of fetchRecommendation

    async function Recommend_by_title(title){
try{
const searchTv = await TvShow.fetchByTitle(title);
if(searchTv.length > 0){
setTheTvShow(searchTv[0])
}
}catch (e){
    alert("Sorry")
}
    }
    // end of recommend by title
    useEffect(() => {
fetchPopular();
    }, []);

    useEffect(() => {
if(theTvShow){
fetchRecommendation(theTvShow.id)
}
    }, [theTvShow]);
const updateTvShow=(tvshow)=>{
    setTheTvShow(tvshow)
}
    return (
        <>

            <div className="d-flex p-3 flex-column mh-100 d-inline-block  bg-black" style={{ height:"100vh",width:"100vw",background:theTvShow?`linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url("${back_drop_url}${theTvShow.backdrop_path}") no-repeat center / cover`:"black"}}>
            <div className="container-sm" style={{flex:2}}>
                <div className="row">
                    <div className="col-12 col-md-12 col-4 ">
                        <TvLogo img={image} title={"Ravi Scientific Traders"} subtitle={"Your favorite Tv Show is Here"}/>
                    </div>
                    <div className="col-12 col-md-12 col-4 pt-2">
                        <SearchTvShow submitit={Recommend_by_title}/>
                    </div>
                </div>
            </div>
                <div className="col-sm-12 col-md-12" style={{flex:4}}>{theTvShow && <TvShowDetails tvShowDetails={theTvShow}/>}</div>
                <div className="col-sm-12 col-md-12" style={{flex: 2}}>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {theTvShow && <TvShowList onClickItem={updateTvShow} tvShowList={recomendTv}/>}
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                  </div>
            </div>

        </>
    );
}

export default TvApp;