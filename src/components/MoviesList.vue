<script >
import { store } from '../store.js';

export default {
    name: 'MoviesList',

    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col movies" v-for="movie in store.movies">
        <h6>{{ movie.title }}</h6>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua Originale: {{ movie.original_language }}</p>
        <p>Voto: {{ movie.vote_average }}</p>
    </div>
</template>