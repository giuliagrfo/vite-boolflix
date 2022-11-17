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
        <h6>{{ movie.title || movie.name }}</h6>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua Originale:
            <!-- {{ movie.original_language }} -->
            <img class="img-fluid" v-if="movie.original_language === 'it'" src="../assets/img/italy_icon_127831.png"
                alt="">
            <img class="img-fluid" v-else-if="movie.original_language === 'en'"
                src="../assets/img/gb_flag_great_britain_england_union_jack_english_icon_228674.png" alt="">
            <img class="img-fluid" v-else-if="movie.original_language === 'de'"
                src="../assets/img/germany_icon_127822.png" alt="">
            <span v-else>{{ movie.original_language }}</span>
        </p>
        <p>Voto: {{ movie.vote_average }}</p>
    </div>
</template>

<style lang="scss">
img {
    width: 20px;
}
</style>