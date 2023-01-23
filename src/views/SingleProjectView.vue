<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: null,
            loading: true,
            store
        }
    },
    mounted() {
        const url = store.apiUrl + '/api/projects/' + this.$route.params.slug;
        // console.log(url);

        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    // console.log(response.data.results);
                    this.project = response.data.results;
                    this.loading = false;
                } else {
                    this.loading = false;
                }
            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<template>
    <div class="container my-4">
        <!-- if loading is ended and there is the project -->
        <div v-if="!loading && project">
            <!-- project imgage or placeholder -->
            <img class="img-fluid" :src="store.getImage(project.cover_img)" :alt="project.name">

            <!-- project title -->
            <h1 class="my-3">{{ project.name }}</h1>

            <!-- project type and technologies -->
            <div class="mb-2">
                <div><strong>Type</strong>: {{ store.getType(project) }}</div>
                <div><strong>Technologies</strong>: {{ store.getTechnologies(project) }}</div>
            </div>

            <!-- project body -->
            <p>{{ project.body }}</p>
        </div>

        <!-- if loading is ended and there is NO project  -->
        <h2 v-else-if="!loading">No project found...</h2>

        <!-- loading project -->
        <h2 v-else>Loading project...</h2>
    </div>
</template>


<style lang="scss" scoped>

</style>
