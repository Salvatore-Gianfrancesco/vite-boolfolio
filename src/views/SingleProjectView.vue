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
    <div class="single_project_view">
        <div class="container my-4">
            <!-- if loading is ended and there is the project -->
            <div v-if="!loading && project">
                <div class="title_and_subtitle">
                    <!-- project title -->
                    <h1 class="my-3">{{ project.name }}</h1>

                    <!-- project body -->
                    <p>{{ project.body }}</p>
                </div>

                <!-- project type and technologies -->
                <div class="my-3">
                    <div><strong>Project type</strong>: {{ store.getType(project) }}</div>
                    <div><strong>Technologies used</strong>: {{ store.getTechnologies(project.technologies) }} </div>
                </div>

                <!-- project link and publication date -->
                <div class="my-3">
                    <div>
                        <strong>Link to GitHub repository</strong>:
                        <a :href="project.github_repo">{{ project.github_repo }}</a>
                    </div>
                    <div><strong>Publication date</strong>: {{ project.publication_date }} </div>
                </div>

                <!-- project imgage or placeholder -->
                <div>
                    <div class="mb-1"><strong>Site Preview</strong></div>
                    <img class="w-100" :src="store.getImage(project.cover_img)" :alt="project.name">
                </div>
            </div>

            <!-- if loading is ended and there is NO project  -->
            <h2 v-else-if="!loading">No project found...</h2>

            <!-- loading project -->
            <h2 v-else>Loading project...</h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.single_project_view {
    min-height: calc(100vh - 7rem);
    padding-top: 6rem;

    .title_and_subtitle {
        h1 {
            font-weight: 700;
        }
    }
}
</style>
