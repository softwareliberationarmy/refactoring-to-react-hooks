import { useEffect, useReducer } from "react";

function reducer (state, action) {
    switch(action.type){
        case "loading":
            return {loading: true, data: [], error: null};
        case "success": 
            return {loading: false, data: action.data, error: null};
        case "error":
            return {loading: false, data: [], error: action.error};
        default: 
            throw Error('unexpected action type');
    }
}

const initialState = {loading: false, data: [], error: null};

export const useFetch = url => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if(url !== ''){
            dispatch({type: 'loading'});

            fetch(url)
            .then(response => {
                if(response.ok) return response.json();
                else throw Error(response.statusText);
            })
            .then(json => dispatch({type:'success', data: json}))
            .catch(error => dispatch({type: 'error', error: error}));
        }
    }, [url]);

    return state;
};
