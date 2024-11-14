import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";

type PageProps = {
    params: {
      id: string;
    };
  };
  
export async function generateMetadata({ params }: PageProps) {
    const movie = await getMovie(params.id);
    return {
        title: movie.title,
    };
}

export default async function MovieDetailPage({ params }: PageProps) {
    return (
    <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={params.id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideo id={params.id}/>    
        </Suspense>
    </div>
    );
}