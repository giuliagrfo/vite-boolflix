import axios from 'axios';

import {
    reactive

} from 'vue'

export const store = reactive({
    url: 'https://api.themoviedb.org/3/search/company',
    params: {
        api_key: 'f528b95285dd507e418eb5dbedffc474',
        query: ''
    },
    callApi(url) {
        axios(url)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });



    }

})