<template lang="html">
    <div id="actors">
        <div v-for="m in movies">
            <p>{{ m.name }}</p>
            <p>{{ m.description }}</p>
        </div>

        <div v-for="a in actors">
            <p>{{ a.firstName }} {{ a.lastName }}</p>
        </div>
    </div>
</template>

<script>
export default {
    mounted () {
        this.$store.dispatch('getMovies')
        this.$store.dispatch('getActors')
    },
    computed: {
        movies () {
            this.$store.getters.movies
        },
        actors () {
            this.$store.getters.actors
        }
    },
    name: 'actors'
}
</script>