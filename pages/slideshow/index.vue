<template>
  <div class="container">
    <h1 class="title">Slideshow</h1>
    <div class="slideshow-wrap">
      <ul class="slideshow-parent" v-bind:style="{left: parentPos + 'vw'}">
        <li class="slideshow-child">
          <img src="@/assets/images/jpg/slideshow/slideshow-0.jpg" alt="slideshow-0" />
        </li>
        <li class="slideshow-child">
          <img src="@/assets/images/jpg/slideshow/slideshow-1.jpg" alt="slideshow-1" />
        </li>
        <li class="slideshow-child">
          <img src="@/assets/images/jpg/slideshow/slideshow-2.jpg" alt="slideshow-2" />
        </li>
      </ul>
    </div>
    <ul class="arrow-parent">
      <li class="arrow-child" v-bind:class="{disable: noRight}" v-on:click="ActionSlide(-1)">←</li>
      <li class="arrow-child" v-bind:class="{disable: noLeft}" v-on:click="ActionSlide(1)">→</li>
    </ul>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  data() {
    return {
      displayNum: 0,
      parentPos: 0,
      noRight: true,
      noLeft: false
    }
  },
  mounted() {
    this.displayNum = 0
  },
  computed: {
    parentLeft() {
      return -50 * this.displayNum
    }
  },
  methods: {
    ActionSlide(_direction) {
      this.displayNum += _direction

      if(this.displayNum >= 2) {
        this.displayNum = 2
        this.noLeft = true
      }
      else if (this.displayNum <= 0) {
        this.displayNum = 0
        this.noRight = true
      } else {
        this.noRight = false
        this.noLeft = false
      }

      var _position = {value: this.parentPos}
      anime({
        targets: _position,
        value: this.displayNum * -100,
        round: 1,
        easing: 'easeInOutSine',
        duration: 500,
        update: () => { this.parentPos = _position.value }
      });        
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  @include Title();
}

.slideshow {
  $slideWidth: 100vw;
  &-wrap {
    margin: 0 auto 0;
    width: $slideWidth;
    overflow: hidden;
  }
  &-parent {
    display: flex;
    position: relative;
  }
  &-child {
    width: $slideWidth;
    img {
      width: $slideWidth;
      display: block;
    }
  }
}

.arrow {
  &-parent {
    display: flex;
    width: 26vw;
    margin: 1.5rem auto;
    justify-content: space-between;
  }
  &-child {
    width: 10vw;
    height: 10vw;
    text-align: center;
    line-height: 10vw;
    background-color: $base-color;
    color: #fff;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      color: $base-color;
      background-color: #fff;
      border: 1px solid $base-color;
      transition: 0.8s;
    }
    &.disable {
      background-color: #ccc;
    }
  }
}
</style>