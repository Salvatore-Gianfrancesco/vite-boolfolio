<script>
import { store } from '../store';

export default {
    name: "ProjectList",
    props: {
        project: Object
    },
    data() {
        return {
            max: 100,
            store
        }
    },
    methods: {
        trimBody(text) {
            if (text && text.length > this.max) {
                return text.slice(0, this.max) + '...';
            }
            return text;
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <img class="card-img-top" :src="store.getImage(project.cover_img)" :alt="project.name">
            <div class="card-body">
                <!-- project name -->
                <h4 class="card-title">{{ project.name }}</h4>

                <!-- project type and technologies -->
                <div class="mb-2">
                    <div><strong>Type</strong>: {{ store.getType(project) }}</div>
                    <div><strong>Technologies</strong>: {{ store.getTechnologies(project) }}</div>
                </div>

                <!-- project body -->
                <p class="card-text">{{ trimBody(project.body) }}</p>

                <!-- link to single project view -->
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">
                    Read more
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    box-shadow: 0px 0px 5px -3px black;
    transition: 0.25s;

    img {
        height: 15rem;
        width: 100%;
        object-position: center;
        object-fit: cover;
    }

    p {
        height: 5rem;
    }

    &:hover {
        box-shadow: 0px 0px 10px -5px black;
    }
}
</style>