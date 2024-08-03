import axios from "axios";
// import {Fake_popular, Fake_recommendation} from "./fake_data.jsx";

import {base_url,api_key} from "./config.js";

export  class TvShow{
    static async fetchPopulars(){
        const response= await axios.get(`${base_url}/tv/popular?${api_key}`)

        return response.data.results;

        // return Fake_popular;

    }
    static async fetchRecoPopulars(tvid){
        const response= await axios.get(`${base_url}/tv/${tvid}/recommendations?${api_key}`)
        return response.data.results;

        // return Fake_recommendation;

    }
    static async fetchByTitle(searchid){
        const response= await axios.get(`${base_url}/search/tv?${api_key}&query=${searchid}`)
        return response.data.results;

        // return Fake_recommendation;

    }
}