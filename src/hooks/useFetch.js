import { useEffect, useState } from "react";

export const useFetch = url => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setData([]);

        if(url !== ''){
            setLoading(true);

            fetch(url)
            .then(response => {
                if(response.ok) return response.json();
                else throw Error(response.statusText);
            })
            .then(json => setData(json))
            .catch(error => setError(error))
            .finally(() => setLoading(false));    
        }
    }, [url]);

    return { loading, data, error};
};
