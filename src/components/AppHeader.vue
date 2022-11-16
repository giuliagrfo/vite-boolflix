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
    <div class="container">
        <div class="search d-flex m-5">
            <input type="search" class="form-control" v-model="store.query">
            <button type="submit" class="btn btn-primary mx-2" @click="$emit('searchData')">Search</button>
        </div>
    </div>
</template>
