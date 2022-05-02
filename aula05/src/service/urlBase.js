import axios from "axios";

export const api = axios.create({
        baseURL: "http://www.omdbapi.com/?apikey=5dc1a0c3&"
    });