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

    <div class="row row-cols-xs-2 row-cols-md-5">
        <MovieItem />
    </div>

</template>

<style lang="scss">

</style>