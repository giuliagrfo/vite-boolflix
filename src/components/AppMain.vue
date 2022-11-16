<script >
import { store } from '../store.js';

export default {
    name: 'AppMain',

    data() {
        return {
            store
        }
    }
}
</script>


<template>

    <div class="container">
        <div class="movies">
            <ul>
                <li :movie="movie" v-for="movie in this.store.movies">
                    <h6>{{ movie.title }}</h6>
                    <p>Titolo Originale: {{ movie.original_title }}</p>
                    <p>Lingua Originale: {{ movie.original_language }}</p>
                    <p>Voto: {{ movie.vote_average }}</p>
                </li>
            </ul>
        </div>
    </div>

</template>
