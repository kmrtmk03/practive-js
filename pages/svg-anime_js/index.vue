<template>
    <section class="container">
        <h1 class="title title-large">SVG-anime_js</h1>
        <div class="wrap--svg">
            <SampleSvg class="svg" />
        </div>
        <!-- <button class="button--back" v-bind:class="{active: isFinishSvg}">戻る</button> -->
        <nuxt-link to="/" class="button--back" v-bind:class="{active: isFinishSvg}">戻る</nuxt-link>
    </section>
</template>

<script>
import anime from 'animejs'
import SampleSvg from '@/assets/images/svg/sample.svg'

export default {
    data() {
        return {
            isFinishSvg: false
        }
    },
    components: {
        SampleSvg
    },
    mounted: function() {
        console.log(anime)
        this.OnSvg()
    },
    methods: {
        //SVGアニメーションを再生
        OnSvg() {
            let _anime = anime
                .timeline({
                    easing: 'easeInOutSine',
                    loop: false,
                    direction: 'alternate'
                })
                .add({
                    targets: '.sample_svg__st0',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    stroke: '#333',
                    duration: 4000,
                    delay: function(el, i) {
                        return i * 150
                    }
                })
                .add({
                    targets: '.sample_svg__st0',
                    duration: 500,
                    fill: '#333'
                })

            //終了時のCallback
            _anime.complete = () => {
                this.isFinishSvg = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 1.3rem;
    text-align: center;
    padding: 0.4rem 0;
    border-bottom: 2px solid #333;
}
.wrap--anim-target {
    margin-top: 5rem;
}
.anim-target {
    width: 100px;
    height: 100px;
    background-color: #aaa;
    border-radius: 100%;
    margin: 0 auto;
}
.wrap--svg {
    margin-top: 5rem;
    margin-bottom: 5rem;
}
.svg {
    width: 90vw;
    height: 90vw;
    margin: 0 auto;
    display: block;
    fill: #ffffff;
    stroke-width: 1px;
    stroke: #333;
}
.button--back {
    background-color: #fff;
    padding: 0;
    display: block;
    width: 85vw;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: 0 auto;
    border: 1px solid #333;
    border-radius: 4px;
    opacity: 0;
    text-align: center;
    text-decoration: none;
    &.active {
        opacity: 1;
        transition: 1s;
    }
}
</style>