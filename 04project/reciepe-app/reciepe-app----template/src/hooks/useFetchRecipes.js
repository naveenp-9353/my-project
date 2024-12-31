import axios from "axios";
import { useState } from "react";
const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes",
    params: {
        from:'0',
        size:'20'
    },

    headers: {
        "X-RapidAPI-Key":"3ad8e37409msh99219c3b76a4298p13a45ejsn6160dfa4fd5e",
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
};



const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchRecipes = async (searchTerm) => {
        setLoading(true);
        setRecipes(null);
        setError(null);
        try {

            const reqOptions = { ...options };

            reqOptions.params.q = searchTerm;

            const response = await
                axios.request(reqOptions);
            setRecipes(response.data.results);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return [fetchRecipes, { data: recipes, loading, error }];
};

export default useFetchRecipes;