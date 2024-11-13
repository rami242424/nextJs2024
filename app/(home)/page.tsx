export const metadata = {
    title: "Home",
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    // 프로그램을 멈춰서 느리게 만드는 간단한 트릭
    await new Promise((resolve) => setTimeout(resolve, 10000));

    // return fetch(URL).then(response => response.json());
    // 같은 코드
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage(){
    const movies = await getMovies();
    return (
    <div>
        {JSON.stringify(movies)}
    </div>
    )
}