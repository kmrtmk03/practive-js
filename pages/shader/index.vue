<template>
    <section class="container">
        <h1 class="title">WebGL</h1>
        <Artwork />
    </section>
</template>

<script>
import Artwork from '@/components/ArtWork/index.vue'

export default {
    components: {
        Artwork
    }
}
</script>

<style lang="scss" scoped>
.title {
    @include Title();
    @include mq(md) {
        color: blue;
        @include mq(lg) {
            color: green;
        }
    }
}
</style>