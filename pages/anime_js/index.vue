<template>
    <section class="container">
        <div class="content" v-bind:class="{hidden: !isLoad}">
            <h1 class="title--page">anime.js</h1>
        </div>
        <div class="wrap--loading">
            <span class="loading"></span>
        </div>
    </section>
</template>

<script>
import anime from 'animejs'

export default {
    data() {
        return {
            animejs: '',
            isLoad: false
        }
    },
    mounted: function() {
        this.PlayLoading()

        this.FinishLoading()
    },
    methods: {
        PlayLoading() {
            console.log("Play Loading")
        },
        FinishLoading() {
            console.log("Finish Loading")
            this.isLoad = false
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    &.hidden {
        display: none;
        background-color: red;
    }
}
.title--page {
    border-bottom: 2px solid #333;
    font-family: 'Helvetica';
    font-size: 1.3rem;
    padding: 0.4rem 0;
    text-align: center;
}
.wrap--loading {
    background-color: #ffffff;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    .loading {
        background-color: #aaaaaa;
        display: block;
        height: 100vh;
        width: 90vw;
        position: absolute;
        top: 0;
        left: 5vw;
    }
}
</style>