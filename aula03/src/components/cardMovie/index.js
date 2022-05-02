import "./style.css";
export const CardMovie = ({ movie }) =>{
    console.log(">>>>",movie);
    return(
        <div className="container">
            <h1>{movie.movie}</h1>
            <img className="card-img" src={movie.avatar}></img>
            <p>Disponibilidade: {movie.done ? "Disponivel" : "Indisponivel"}</p>
            <p>e-mail: {movie.email}</p>
        </div>
   
    );
};

