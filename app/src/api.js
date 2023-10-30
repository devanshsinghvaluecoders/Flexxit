import axios from "axios"

const BASE_URL = "https://api.themoviedb.org/3";


export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};