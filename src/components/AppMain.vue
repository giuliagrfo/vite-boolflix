<script >
import { store } from '../store.js';

export default {
    name: 'AppMain',
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

    <div class="container">
        <div class="search d-flex">
            <input type="search" class="form-control" v-model="store.searchText">
            <button type="submit" class="btn btn-primary" @click="$emit('searchData')">Search</button>
        </div>


    </div>

</template>
