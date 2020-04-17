<template>
    <section class="artwork">
        <h2 class="over-text">ART WORK</h2>
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

<style lang="scss" scoped>
.artwork {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
}
.over-text {
    color: #fff;
    font-family: 'Helvetica';
    font-size: 5vh;
    font-weight: bold;
    opacity: 0.5;
    position: fixed;
    width: 100vw;
    height: 100vh;
    line-height: 100vh;
    text-align: center;
    @include mq(md) {
        font-size: 20vh;
    }
}
</style>