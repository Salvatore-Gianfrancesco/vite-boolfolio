<script>
export default {
    name: "HomeView",
}
</script>

<template>
    <div class="home_view">
        <div class="container d-flex align-items-center flex-column gap-3 py-4">
            <h1>Hello!</h1>

            <p>My name is Salvatore Gianfrancesco,<br>I'm a Full-Stack Developer Student.</p>

            <img src="../assets/img/profile-image.png" alt="profile image" class="rounded-circle">

            <router-link class="see_my_work" :to="{ name: 'projects' }">See my work</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../styles/partials/variables';

.home_view {
    min-height: calc(100vh - 7rem);
    padding-top: 6rem;
    background-image: url('../assets/img/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    h1 {
        font-size: 60px;
        font-weight: 700;
        color: $pf-white;
    }

    p {
        color: $pf-white;
    }

    img {
        width: 20%;
        object-fit: cover;
    }

    .see_my_work {
        color: $pf-light;
        text-shadow: $pf-dark 0 0 5px;
        font-size: 22px;
        transition: 0.3s;

        &:hover {
            color: $pf-white;
        }
    }
}

@media screen and (max-width: 992px) {
    .home_view img {
        width: 35%;
    }
}

@media screen and (max-width: 576px) {
    .home_view img {
        width: 40%;
    }
}
</style>