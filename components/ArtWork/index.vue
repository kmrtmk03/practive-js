<template>
    <section class="artwork">
        <canvas class="artwork__canvas" ref="canvas"></canvas>
    </section>
</template>

<script>
import ArtworkGL from './js/ArtworkGL'

export default {
    name: 'artwork',
    components: {},
    props: [],
    data() {
        return {
        }
    },
    computed: {

    },
    mounted() {
        this.artworkGL = new ArtworkGL({
            $canvas: this.$refs.canvas
        })
    }
}
</script>