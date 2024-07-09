// imports hooks
import { useEffect, useState } from "react";

// export custom hook
export const useFetch = (url) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(null);

    // deal with leak memory
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            if (cancelled) return;

            setLoading(true);

            try {
                if (url.includes('top_rated') || url.includes('query')) {
                    const res = await fetch(url);
                    const data = await res.json();
                
                    setMovies(data.results)
                }else{
                    const res = await fetch(url);
                    const data = await res.json();
                    
                    setMovies(data)
                }

                setLoading(false);
            } catch (error) {
                console.log(error);

                setLoading(false)
            }
        }

        fetchMovies()
    }, [url])

    useEffect(() => {
        () => setCancelled(true)
    }, [])

    return {
        movies,
        loading
    }
}
