<script >
import { store } from '../store.js';

export default {
    name: 'MovieItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col movie" v-for="movie in store.movies">
        <div class="cover">
            <img class="img-fluid img_cover" src="../assets/img/download.png" alt=""
                v-if="movie.poster_path === undefined || movie.poster_path === null">

            <img class="img-fluid img_cover" v-else :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
                alt="">
            <div class="info">
                <h6 class="m-3">{{ movie.title || movie.name }}</h6>
                <p>Titolo Originale: {{ movie.original_title }}</p>
                <p>Lingua Originale:
                    <img class="img-fluid flag" v-if="movie.original_language === 'it'"
                        src="../assets/img/italy_icon_127831.png" alt="not available">
                    <img class="img-fluid flag" v-else-if="movie.original_language === 'en'"
                        src="../assets/img/gb_flag_great_britain_england_union_jack_english_icon_228674.png"
                        alt="not available">
                    <img class="img-fluid flag" v-else-if="movie.original_language === 'de'"
                        src="../assets/img/germany_icon_127822.png" alt="not available">
                    <img class="img-fluid flag" v-else-if="movie.original_language === 'ja'"
                        src="../assets/img/flagofjapan_6493.png" alt="not available">
                    <span v-else>{{ movie.original_language }}</span>
                </p>
                <p>
                    Voto:
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'on' : 'blind'" />
                </p>
                <p class="overview"> Overview: {{ movie.overview }}</p>
            </div>

        </div>
    </div>


</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

.movie {
    padding: 2rem 0.2rem;
}

.cover {
    position: relative;

    .flag {
        width: 20px;
    }

    .img_cover {
        width: 100%;
        height: 350px;
        object-fit: cover;
        object-position: center;
    }

    .info {
        display: none;
        position: absolute;
        width: 100%;
        height: 350px;
        top: 0;
        overflow-y: auto;

        p {
            margin: 1rem;
        }
    }

    &:hover .img_cover {
        opacity: 0.2;
    }

    &:hover .info {
        display: block;
        color: $light;
        background-color: rgba(0, 0, 0, 0.785);
    }


}
</style>