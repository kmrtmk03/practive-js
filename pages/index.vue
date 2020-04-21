<template>
  <section class="container">
    <div>
      <h1 class="title">Nuxt.js -- Practice</h1>
      <ul class="wrap-links">
        <li v-for="link of links" v-bind:key="link.id" class="link">
          <nuxt-link v-bind:to="{path: link.to}" class="button--link">{{link.text}}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 0, to: '/svg', text: 'SVG'},
        { id: 1, to: '/svg-anime_js', text: 'svg-anime_js'},
        { id: 2, to: '/anime_js', text: 'anime.'},
        { id: 3, to: '/pixi', text: 'Pixi'},
        { id: 4, to: '/shader', text: 'Shader'},
        { id: 5, to: '/scroll', text: 'Scroll'},
        { id: 6, to: '/scroll_01', text: 'Scroll_01'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
}

.title {
  @include Title();
}

.wrap-links {
  padding: 0;
  margin: 3rem 0 0;
  width: 100vw;
  @include mq(md) {
    display: flex;
    flex-wrap: wrap;
    width: 54vw;
    margin: 100px auto;
    justify-content: space-between;
  }
  .link {
    @include ButtonLg();
    margin: 0 auto 1rem;
    position: relative;
    overflow: hidden;
    &::before {
      @include Absolute(0, 0);
      height: 100%;
      width: 200%;
      z-index: 0;
      border-right: 5vw solid transparent;
      border-bottom: 10vw solid $base-color;
      transform: translateX(-100%);
      transition: 0.3s;
    }
    &:hover {
      $transitionTime: 0.8s;
      &>a {
        color: #fff;
        transition: $transitionTime;
      }
      &::before {
        transform: translateX(0);
        transition: $transitionTime;
      }
    }

    @include mq(md) {
      width: 10vw;
      height: 10vw;
      line-height: 10vw;
      margin: 0 0 1vw;
    }
    :first-child {
      margin-bottom: 0;
    }
  }
  .button--link {
    color: $base-color;
    display: block;
    text-align: center;
    position: relative;
    z-index: 2;
    :visited {
      color: $base-color;
    }
  }
}
</style>

