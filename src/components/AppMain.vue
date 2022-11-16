<script >
import { store } from '../store.js';
import MoviesList from './MoviesList.vue';

export default {
    name: 'AppMain',
    components: {
        MoviesList
    },
    data() {
        return {
            store
        }
    }
}
</script>


<template>

    <div class="container">
        <div class="row row-cols-5">
            <MoviesList />
        </div>
    </div>

</template>
