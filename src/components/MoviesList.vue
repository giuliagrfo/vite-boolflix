<script >
import { store } from '../store.js';

export default {
    name: 'MoviesList',
    components: {
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="col movies" v-for="movie in store.movies">
        <div class="cover">
            <img class="img-fluid" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="not available">
        </div>
        <h6>{{ movie.title || movie.name }}</h6>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua Originale:
            <img class="img-fluid" v-if="movie.original_language === 'it'" src="../assets/img/italy_icon_127831.png"
                alt="not available">
            <img class="img-fluid" v-else-if="movie.original_language === 'en'"
                src="../assets/img/gb_flag_great_britain_england_union_jack_english_icon_228674.png"
                alt="not available">
            <img class="img-fluid" v-else-if="movie.original_language === 'de'"
                src="../assets/img/germany_icon_127822.png" alt="not available">
            <span v-else>{{ movie.original_language }}</span>
        </p>
        <p>Voto:
            <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                :class="Math.ceil(movie.vote_average / 2) > i ? 'on' : 'blind'" />
        </p>

    </div>


</template>

<style lang="scss">
p {
    img {
        width: 20px;
    }
}

.on {
    color: yellow;
}

.blind {
    color: lightgrey;
}
</style>