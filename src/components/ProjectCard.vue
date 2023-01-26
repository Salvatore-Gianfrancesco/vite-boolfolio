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
    }
}
</script>

<template>
    <div class="col">
        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">
            <div class="project_card">
                <img :src="store.getImage(project.cover_img)" :alt="project.name">

                <div class="card_body h-100 w-100 d-flex flex-column justify-content-center">
                    <!-- project type -->
                    <div class="fs-5">{{ store.getType(project) }}</div>

                    <!-- project name -->
                    <h3 class="card-title">{{ project.name }}</h3>

                    <!-- project technologies -->
                    <div class="d-flex gap-1 pt-2" v-if="project.technologies.length > 0">
                        <img :src="store.apiUrl + '/storage/' + technology.icon" :alt="technology.name"
                            v-for="technology in project.technologies">
                    </div>
                </div>

            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables';

.project_card {
    position: relative;
    transition: 0.25s;

    img {
        height: 15rem;
        width: 100%;
        object-fit: cover;
        object-position: top center;
    }

    .card_body {
        background-color: $pf-shadow;
        color: $pf-white;
        padding-left: 5rem;
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;

        img {
            height: 2rem;
            width: 2rem;
        }
    }

    &:hover .card_body {
        visibility: visible;
        transition: 0.5s;
    }
}
</style>