import { reactive } from 'vue';

export const store = reactive({
    apiUrl: 'http://localhost:8000',

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
    getTechnologies(technologies) {
        if (technologies.length > 0) {
            let techs = technologies[0].name;

            for (let i = 1; i < technologies.length; i++) {
                techs = techs + ', ' + technologies[i].name;
            }
            return techs;
        }
        return 'No technologies';
    }
})