<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "AppMain",
    components: {
        ProjectCard
    },
    data() {
        return {
            apiUrl: 'http://localhost:8000',
            projects: null
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
        nextPage(currentPage) {
            // console.log(this.apiUrl + '/api/projects?page=' + (currentPage + 1));
            this.getProjects(this.apiUrl + '/api/projects?page=' + (currentPage + 1));
        },
        prevPage(currentPage) {
            // console.log(this.apiUrl + '/api/projects?page=' + (currentPage - 1));
            this.getProjects(this.apiUrl + '/api/projects?page=' + (currentPage - 1));
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
                    <ProjectCard v-for="project in projects.data" :project="project" />
                </div>

                <nav class="mt-3" aria-label="Page navigation">
                    <ul class="pagination    ">
                        <li class="page-item" :class="!projects.prev_page_url ? 'disabled' : ''">
                            <button class="page-link" @click="prevPage(projects.current_page)" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>

                        <li class="page-item" v-for="i in projects.last_page">
                            <button class="page-link" :class="projects.current_page == i ? 'active' : ''"
                                @click="getProjects(apiUrl + '/api/projects?page=' + i)">
                                {{ i }}
                            </button>
                        </li>

                        <li class="page-item" :class="!projects.next_page_url ? 'disabled' : ''">
                            <button class="page-link" @click="nextPage(projects.current_page)" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </template>
            <template v-else>
                <h2>No projects stored...</h2>
            </template>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>