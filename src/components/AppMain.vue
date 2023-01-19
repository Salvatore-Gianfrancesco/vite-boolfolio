<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            apiUrl: 'http://localhost:8000/api/projects'
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        this.getProjects(this.apiUrl);
    }
}
</script>

<template>
    <main>
        <div class="container my-4">
            <h1>Projects</h1>

            <div class="row row-cols-5">
                <div class="col">

                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>