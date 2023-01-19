<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            projects: null,
            apiUrl: 'http://localhost:8000'
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        getImage(img) {
            console.log(img);
            if (img) {
                return this.apiUrl + '/storage/' + img;
            }
            return 'https://via.placeholder.com/600x300.png?text=Cover+Image';
        }
    },
    mounted() {
        this.getProjects(this.apiUrl + '/api/projects');
    }
}
</script>

<template>
    <main>
        <div class="container my-4" v-if="projects">
            <h1 class="mb-3">Projects</h1>

            <div class="row row-cols-5">
                <div class="col" v-for="project in projects.data">
                    <div class="card h-100">
                        <img class="card-img-top" :src="getImage(project.cover_img)" :alt="project.name">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.name }}</h4>
                            <p class="card-text">{{ project.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>