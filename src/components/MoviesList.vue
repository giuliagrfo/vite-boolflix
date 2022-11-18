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

    <div class="row row-cols-6">
        <MovieItem />
    </div>

</template>

<style lang="scss">

</style>