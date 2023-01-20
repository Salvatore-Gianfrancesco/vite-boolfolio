<script>
export default {
    name: "ProjectList",
    props: {
        project: Object
    },
    data() {
        return {
            apiUrl: 'http://localhost:8000',
        }
    },
    methods: {
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
    }
}
</script>

<template>
    <div class="col">
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
</template>

<style lang="scss" scoped>
.card {
    img {
        height: 15rem;
        width: 100%;
        object-position: center;
        object-fit: cover;
    }
}
</style>