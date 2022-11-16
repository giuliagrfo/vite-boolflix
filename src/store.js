import axios from 'axios';

import {
    reactive

} from 'vue'

export const store = reactive({
    api_key: 'f528b95285dd507e418eb5dbedffc474',
    query: null,
    error: null,
    movies: null,
    page: null,
    searchText: '',
    callApi() {
        const config = {
            method: 'get',
            url: 'get',
            url: `https://api.themoviedb.org/3/search/movie?api_key=${store.api_key}&language=en-US&query=${store.query}`,
            params: {

            }
        }
        axios(config)
            .then(response => {
                console.log(response.data);
                store.movies = response.data.results;
            })
            .catch(error => {
                console.log(error);
            });

    }
})

