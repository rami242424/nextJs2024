import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

export default async function MovieDetail({
    params: {id}, 
    } : {
    params: {id: string};
    }) {
    

    return (
    <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        {/* <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideo id={id}/>    
        </Suspense> */}
    </div>
    );
}