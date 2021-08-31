<template>
    <div>
        <p class="info"><span class="info-subtitle">Модель</span> - {{starship.model}},</p> 
        <p class="info"><span class="info-subtitle">название</span> - {{starship.name}} </p>          
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            starship: {},
        }
    },
    props: {
        starshipUrl: {
            type: String,
            required: true,
        }
    },
    watch: {
        starshipUrl: {
            immediate: true,
            handler(value) {
                axios.get(`${value}`)
                .then(response => {
                    this.starship = response.data;
                });
            }
        }
    },
}
</script>

<style scoped>
.info-subtitle {
    text-decoration: underline;
    box-sizing: border-box;
}
.info {
    padding: 0;
    margin: 0;
}
</style>