<template>
    <div>
        <img :src="url" :alt="name">
    </div>
</template>

<script>
export default {
    data() {
        return {
            url: {
                type: String,
                required: true,
            }
        }
    },
    props: {
        name: {
            type: String,
            required: true,
        }
    },
    watch: {
        name: {
            immediate: true,
            handler(value) {
                this.url = `https://robohash.org/${value}`;
            }
        }
    }
}
</script>