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
    <main id="site_main">
        <div class="container">
            <MoviesList />
        </div>
    </main>


</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;

#site_main {
    position: relative;
    top: 100px;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    padding: 3rem 0;

    .container {
        background-color: #000000b5;
        padding: 0 3rem;
        border-radius: 35px;
    }
}
</style>

