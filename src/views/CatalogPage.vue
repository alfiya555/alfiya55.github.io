<template>
    <div class="character-list">  
        <div class="character-list-item" 
        v-for="character in this.characters" 
        :key="character.name">
            <router-link :to="{name: 'Character', params: {slug: character.name, character: character}}">            
                <CharacterImage :name="character.name"/>
                <p class="character-name">{{character.name}}</p>
                <p class="character-created">Создан: {{createdDateFormat(character.created)}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import CharacterImage from '../components/CharacterImage.vue';
export default {
    data() {
        return {
            characters: [],
        }
    },
    components: {
        CharacterImage,
    },
    props: {
        page: {
            type: Number,
            required: true
        }
    },
    methods: {
       createdDateFormat: function(dateString) {
           let date = new Date(Date.parse(dateString));
           return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
       },
       changeBackColor() {
           this.target
       },
    },
    watch: {
        page: {
            immediate: true,
            handler(value) {
                axios.get(`https://swapi.dev/api/people/?page=${value}`)
                .then(response => {
                    this.characters = response.data.results;
                });
            }
        }
    },
}  
</script>

<style scoped>
.character-list {
    max-width: 900px;
    display: flex;
    flex-direction: row;
    padding: 5px;
    flex-wrap: wrap;
}
.character-list-item {
    padding: 50px;
    text-decoration: none;
    color: blueviolet;
}
.character-list-item:hover {
    text-decoration: none;
    color: blueviolet;
    background: radial-gradient(blue 0%, white 60%);
}
.character-name {
    font-weight: bold;
    text-decoration: none;
}
.character-created {
    text-decoration: none;
}
</style>