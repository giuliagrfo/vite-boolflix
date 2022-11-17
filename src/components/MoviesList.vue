<script >
import { store } from '../store.js';
import MovieItem from './MovieItem.vue'
export default {
    name: 'MoviesList',
    components: {
        MovieItem
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <div class="row row-cols-5">
        <MovieItem />
    </div>

</template>

<style lang="scss">
p {
    img {
        width: 20px;
    }

    .on {
        color: rgb(255, 213, 0);
    }

    .blind {
        color: lightgrey;
    }

}
</style>