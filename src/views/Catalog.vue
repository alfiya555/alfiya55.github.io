<template>
<div class="wrapper">
    <h2>Персонажи "Звездных войн"</h2>
    <div class="catalog-pages">
        <div
        v-for="page in this.pages" :key="page" :page="page">
            <router-link class="catalog-pages-item" :to="{name: CatalogPage, params: {page: page}}">{{page}}</router-link>       
        </div>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    data() {
        return {
            pages: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    },
    props: ['page'],
}  
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.catalog-pages {
    display: flex;
    flex-direction: row;
}
.catalog-pages-item {
    padding: 10px;
}
.router-link-active {
    background-color: cornflowerblue;
    font-weight: bold;
}
</style>