<template>
    <div class="wrapper">
        <div><CharacterImage :name="character.name"/>
        </div>
        <div class="character-info">
            <div class="character-info-item"><span class="info-title">Имя: </span>{{character.name}}</div>
            <div class="character-info-item"><span class="info-title">Дата создания: </span>{{createdDateFormat(character.created)}}</div>
            <div class="character-info-item"><span class="info-title">Год рождения: </span>{{character.birth_year}}</div>
            <div class="character-info-item"><span class="info-title">Пол: </span>{{character.gender}}</div>
            <div class="info-starships" v-if="character.starships && character.starships.length > 0" > <span class="info-title">Корабли: </span>
                <ul v-for="url in character.starships" :key="url">
                    <li><CharacterStarship :starshipUrl="url" /></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import CharacterStarship from "../components/CharacterStarship.vue";
import CharacterImage from '../components/CharacterImage.vue';
export default {
    data() {
        return {

        }
    },
    components: {
        CharacterStarship,
        CharacterImage,
    },
    props: {
        slug: {
            type: String,
            required: true
        },
        character: {
            type: Object,
            required: true
        }
    },
    methods: {
        createdDateFormat: function(dateString) {
           let date = new Date(Date.parse(dateString));
           return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
       },
    },
}
</script>

<style scoped>
.info-title {
    font-weight: bold;
}
.info-subtitle {
    text-decoration: underline;
}
.wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background-color: burlywood;
    padding-bottom: 40px;
}
.character-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 70px;
    margin-right: 10px;
}
.character-info-item {
    padding-bottom: 10px;
}
.info-starships {
    text-align: left;
}
</style>