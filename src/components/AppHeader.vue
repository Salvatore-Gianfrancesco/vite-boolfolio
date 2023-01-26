<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <div class="container h-100 py-2 d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="../assets/img/logo.png" alt="logo">
            </div>

            <div class="d-flex align-items-center ">
                <ul class="list-unstyled d-flex gap-3">
                    <!-- home link -->
                    <li>
                        <router-link class="menu_link" :class="$route.name == 'home' ? 'active' : ''"
                            :to="{ name: 'home' }">Home</router-link>
                    </li>

                    <!-- projects link -->
                    <li>
                        <router-link class="menu_link" :class="$route.name == 'projects' ? 'active' : ''"
                            :to="{ name: 'projects' }">Work</router-link>
                    </li>

                    <!-- about link -->
                    <!-- <li>
                        <router-link class="menu_link" :class="$route.name == 'about' ? 'active' : ''"
                            :to="{ name: 'about' }">About</router-link>
                    </li> -->

                    <!-- contacts link -->
                    <!-- <li>
                        <router-link class="menu_link" :class="$route.name == 'contacts' ? 'active' : ''"
                            :to="{ name: 'contacts' }">Contact Us</router-link>
                    </li> -->
                </ul>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@import '../styles/partials/_variables.scss';

header {
    height: 6rem;
    width: 100%;
    background-color: $pf-dark;
    position: fixed;
    top: 0;
    z-index: 999999;

    .logo {
        img {
            width: 80%;
        }
    }

    .menu_link {
        color: $pf-light;
        font-size: 20px;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
            color: $pf-white;
        }

        &.active {
            color: $pf-white;
        }
    }
}
</style>