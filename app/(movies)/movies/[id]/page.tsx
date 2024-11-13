export default function MovieDetail({
    params: {id}, 
    } : {
    params: {id: string};
    }) {
    // console.log(props)
    return <h1>Movie {id}</h1>
}