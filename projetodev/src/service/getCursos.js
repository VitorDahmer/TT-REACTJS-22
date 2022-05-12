import axios from "axios";

export const GetCursos = async()=>{
    try{
        const response = await axios.get("https://61d3bc23b4c10c001712ba53.mockapi.io/course");
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};