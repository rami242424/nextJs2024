import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

// 타입 정의
interface MovieType {
  id: string;
  title: string;
  poster_path: string;
}

// `getMovies` 함수의 반환 타입 명시
async function getMovies(): Promise<MovieType[]> {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json; // API가 MovieType[]을 반환한다고 가정
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map((movie: MovieType) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
