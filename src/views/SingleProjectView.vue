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
                if (response.data.results.length !== 0) {
                    this.project = response.data.results[0];
                    this.loading = false;
                    // console.log(this.project);
                } else {
                    this.project = 'no-project';
                    this.loading = false;
                    // console.log(this.project);
                }
            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<template>
    <div class="container my-4">
        <template v-if="loading">
            <h2>Loading project...</h2>
        </template>
        <template v-else>
            <template v-if="project !== 'no-project'">
                <img class="img-fluid" :src="store.getImage(project.cover_img)" :alt="project.name">

                <h1 class="my-3">{{ project.name }}</h1>

                <div class="mb-2">
                    <div><strong>Type</strong>: {{ store.getType(project) }}</div>
                    <div><strong>Technologies</strong>: {{ store.getTechnologies(project) }}</div>
                </div>

                <p>{{ project.body }}</p>
            </template>
            <template v-else>
                <h2>No project found...</h2>
            </template>
        </template>
    </div>
</template>


<style lang="scss" scoped>

</style>
