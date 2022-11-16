<script >
import { store } from './store.js';
import AppMain from './components/AppMain.vue';

export default {
    name: 'App',
    components: {
        AppMain

    },
    data() {
        return {
            store
        }
    },
    methods: {
        searchMovie() {
            console.log('Search');

            // const searchText = this.store.searchText
            // // const url
        }
    },
    mounted() {
        this.store.callApi(`${this.store.url}?api_key=${this.store.params.api_key}&query=${this.store.params.query}`)
    }
}
</script>

<template>
    <AppMain @searchData="searchMovie" />
</template>


