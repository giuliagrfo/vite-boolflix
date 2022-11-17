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
    // moviesUrl: 'https://api.themoviedb.org/3/search/movie',
    // seriesUrl: 'https://api.themoviedb.org/3/search/tv',
    callApi() {
        const config = {
            method: 'get',
            url: 'get',
            url: `https://api.themoviedb.org/3/search//multi?api_key=${store.api_key}&language=en-US&query=${store.query}&page=1&include_adult=falsehttps://api.themoviedb.org/3/search/tv?api_key=${store.api_key}&page=1&query=${store.query}&include_adult=false`,
            urlSeries: ``,
            // params: {

            // }
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

