<script >
import { store } from './store.js';

export default {
    name: 'App',
    components: {
    },
    data() {
        return {
            store
        }
    },
    mounted() {
        store.callApi(`${store.url}?api_key=${store.params.api_key}&query=${store.params.query}`)
    }
}
</script>

<template>

</template>


