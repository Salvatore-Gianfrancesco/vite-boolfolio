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
            // console.log(img);
            if (img) {
                return this.apiUrl + '/storage/' + img;
            }
            return 'https://via.placeholder.com/600x300.png?text=Cover+Image';
        },
        getType(project) {
            if (project.type) {
                return project.type.name;
            }
            return 'No type';
        },
        getTechnologies(project) {
            if (project.technologies.length > 0) {
                let techs = '';
                project.technologies.forEach(technology => {
                    techs = techs + technology.name + ' ';
                });
                return techs;
            }
            return 'No technologies'
        }
    },
    mounted() {
        this.getProjects(this.apiUrl + '/api/projects');
    }
}
</script>

<template>
    <main>
        <div class="container my-4">
            <template v-if="projects">
                <h1 class="mb-3">Projects</h1>

                <div class="row row-cols-1 row-cols-md-3 g-3">
                    <div class="col" v-for="project in projects.data">
                        <div class="card h-100">
                            <img class="card-img-top" :src="getImage(project.cover_img)" :alt="project.name">
                            <div class="card-body">
                                <h4 class="card-title">{{ project.name }}</h4>

                                <div class="mb-2">
                                    <div><strong>Type</strong>: {{ getType(project) }}</div>
                                    <div><strong>Technologies</strong>: {{ getTechnologies(project) }}</div>
                                </div>

                                <p class="card-text">{{ project.body }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <h2>No projects stored...</h2>
            </template>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>