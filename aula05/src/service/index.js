import api from "./urlBase";


export const GetMovie = async() =>{
    try{
        const movie = await api.get("s=hulk")
        return movie.data.Search
    } catch (error){

    }
};

export default GetMovie;