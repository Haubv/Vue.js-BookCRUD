<template>
    <div class="sidebar">
        <div class="title">
                Sidebar
        </div>
        <div class="menu-items">
            <router-link to="Book" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Book Management
                </div>
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">
export default {

};
</script>

<style scoped>
.title {
    color: white;
    font-size: 40px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
    
}

.menu-items > * {
    margin-top: 60px;
}

.side-btn {
    border: none;
    padding: 16px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 300;
    color: white;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: rgb(201, 185, 185);
    color: rgb(206, 116, 20);
    font-weight: 100;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active::before, .side-btn.active::after {
    position: absolute;
    content: "";
    right: 0;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

.side-btn.active .link-container::before, .side-btn.active .link-container::after {
    position: absolute;
    content: "";
    right: 0px;
    background-color: rgb(19, 181, 38);
}
.link-container:hover {
    color :red;
}
</style>