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
                const res = await fetch(url);
                const data = await res.json();
                
                console.log(data.results);
                setMovies(data.results)

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
