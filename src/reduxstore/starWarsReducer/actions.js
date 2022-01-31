import { GET_FILMS } from "./constants";
import axios from "axios";

//Get films

export const getFilms =  (name) => async dispatch => {
    try {
        const res = await axios.get(`https://swapi.dev/api/${name}/`);
        dispatch({
            type: GET_FILMS,
            payload: res.data
        })
    }
    catch(err) {
        console.log(err);
    }
}