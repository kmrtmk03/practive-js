<template>
    <section class="container">
        <h1 class="title">WebGL</h1>
        <!-- <Artwork000 /> -->
        <!-- <Artwork001 /> -->
        <!-- <Artwork002 /> -->
        <Artwork003 />
    </section>
</template>

<script>
import Artwork000 from '@/components/ArtWork000/index.vue'
import Artwork001 from '@/components/ArtWork001/index.vue'
import Artwork002 from '@/components/ArtWork002/index.vue'
import Artwork003 from '@/components/ArtWork003/index.vue'

export default {
    components: {
        Artwork000,
        Artwork001,
        Artwork002,
        Artwork003
    }
}
</script>

<style lang="scss" scoped>
.title {
    @include Title();
}
</style>