<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script lang="ts">
import Sidebar from '../components/SideBar.vue'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'home',
    components: {
        Sidebar,
    },
}
;
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: teal;
    height: 100%;
    width: 100vw;
}

.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>