<script >
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    emits: ['searchData'],
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
    <header id="site_header">
        <div class="container d-flex">
            <div class="logo mt-2 me-5">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="search d-flex justify-content-between">
                <input type="search" class="form-control rounded-pill input" v-model="store.query"
                    @keyup.enter="$emit('searchData')">
                <button type="submit" class="btn btn-dark rounded-5 mx-2" @click="$emit('searchData')">Search</button>
            </div>
        </div>
    </header>

</template>

<style lang="scss">
@use '../assets/scss/partials/variables' as*;


#site_header {
    background-color: $dark;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100px;


    .search {
        width: 100%;
        padding: 2rem;

        .input {
            width: 300px;
        }
    }
}
</style>