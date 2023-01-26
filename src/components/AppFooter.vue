<script>
export default {
    name: "AppFooter",
}
</script>

<template>
    <footer>
        <div class="container h-100 py-2 d-flex justify-content-between">
            <img src="../assets/img/logo.png" alt="logo">

            <ul class="list-unstyled d-flex flex-column justify-content-center gap-2">
                <li>
                    <a href="https://github.com/Salvatore-Gianfrancesco">
                        <i class="fa-brands fa-square-github"></i>
                        GitHub
                    </a>
                </li>

                <li>
                    <a href="">
                        <i class="fa-brands fa-linkedin"></i> Linkedin
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_variables.scss';

footer {
    height: 7rem;
    background-color: $pf-dark-gray;

    a {
        color: $pf-light;
        text-decoration: none;
        font-size: 16px;
        transition: 0.3s;

        &:hover {
            color: $pf-white;
        }
    }
}
</style>