import { useEffect, useState } from "react";

export const useFetch = url => {
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.ok && response.json())
        .then(json => setData(json));
    }, [url]);

    return data;
};
