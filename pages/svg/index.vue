<template>
    <section class="container">
        <h1 class="title title-large">SVG Animation</h1>
        <div class="wrap wrap-svg-inline">
            <h3 class="title title-mid">Inline SVG</h3>
            <img class="svg-inline" src="@/assets/images/svg/sample-1.svg?inline">
        </div>
        <div class="wrap wrap-svg-tag">
            <h3 class="title title-mid">Inline SVG</h3>
            <SampleSvg id="svg-tag" class="svg-tag" v-on:click="AnimSvgTag" />
        </div>
    </section>
</template>

<script>
import SampleSvg from '@/assets/images/svg/sample.svg'
import Vivus from 'vivus'

export default {
    data() {
        return {
            svgTag: ''
        }
    },
    components: {
        SampleSvg
    },
    mounted: function() {
        this.$nextTick(function() {
            this.InitSvgtag()
            this.AnimSvgTag()
        })
    },
    methods: {
        InitSvgtag() {
            this.svgTag = document.getElementById("svg-tag")
            this.svgTag.removeAttribute('style')
            this.svgTag.removeAttribute('width')
            this.svgTag.removeAttribute('height')
        },
        AnimSvgTag() {
            new Vivus('svg-tag', {
                duration: 500,
                start: 'autostart',
                type: 'oneByOne',
                pathTimingFunction: Vivus.EASE_OUT
            })
        }
    }
}
</script>

<style lang="scss">
.wrap {
    margin-bottom: 64px;
}
.title {
    color: #333;
    text-align: center;
    font-family: 'Helvetica'
}
.title-large {
    padding: 1rem 0;
    font-size: 2rem;
    margin-bottom: 4rem;
}
.title-mid {
    font-size: 1.3rem;
    padding: 0.5rem;
}

.svg {
    display: block;
    margin: 1rem auto 0;
}
.svg-inline {
    display: block;
    width: 256px;
    margin: 1rem auto 0;
}
.svg-tag {
    display: block;
    width: 256px;
    display: block;
    margin: 0 auto;
    transition: 0.2s;
    stroke-width: 6px;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #333333;
    fill: #fff;
    &.finish {
        transition: 0.8s;
        fill: #333;
    }
}
</style>