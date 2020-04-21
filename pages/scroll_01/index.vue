<template>
  <div class="container">
    <div class="section-wrapper" v-bind:style="{top: pagePos + 'vh'}">
      <section id="section-0" class="section section--0">
        <div class="section-content">
          <h2 class="section-title">セクション0</h2>
        </div>
      </section>
      <section id="section-1" class="section section--2">
        <div class="section-content">
          <h2 class="section-title">セクション1</h2>
        </div>
      </section>
      <section id="section-2" class="section section--3">
        <div class="section-content">
          <h2 class="section-title">セクション2</h2>
        </div>
      </section>
      <section id="section-3" class="section section--3">
        <div class="section-content">
          <h2 class="section-title">セクション3</h2>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  data() {
    return {
      displaySection: 0,
      isScroll: true,
      pagePos: 0,
      interval: null
    }
  },
  mounted() {

    this.ToggleScrollListener(true)

    this.preScrollY = window.scrollY

    this.displaySection = 0
  },
  methods: {
    //Event Wheel and Touchmove
    WheelTouchmove($event) {
      console.log($event.deltaY)
      this.ToggleScrollListener(false)

      //下にスクロールした時
      if(0 < $event.deltaY) {
        this.displaySection++
        if(this.displaySection >= 3) {this.displaySection = 3}
      }
      //上にスクロールしたとき
      else if( $event.deltaY < 0) {
        this.displaySection--
        if(this.displaySection <= 0) {this.displaySection = 0}
      }

      this.ScrollAction($event.deltaY)
    },
    //スクロールアクション
    ScrollAction(delta_y) {
      var _position = {value: this.pagePos}
      anime({
        targets: _position,
        value: this.displaySection * -100,
        round: 1,
        easing: 'easeInOutSine',
        duration: 1000,
        update: () => { this.pagePos = _position.value },
        complete: () => {
          setTimeout(() => {
            this.ToggleScrollListener(true)
          }, 1000)
        }
      });        
    },
    //Toggle EventListener
    ToggleScrollListener(isAdd) {
      if(isAdd) {
        window.addEventListener('wheel', this.WheelTouchmove)
        window.addEventListener('touchmove', this.WheelTouchmove)
      }
      else {
        window.removeEventListener('wheel', this.WheelTouchmove)
        window.removeEventListener('touchmove', this.WheelTouchmove)
      }
    },
    TargetPosition(_num) {
      const _target = document.getElementById('section-' + _num)
      const _rect = _target.getBoundingClientRect()
      const _pos = _rect.top
      return _pos
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #333;
}
.section-wrapper {
  position: relative;
}
.title {
  color: #fff;
}
.section {
  min-height: 100vh;
}
.section-content {
  width: 90vw;
  height: 90vh;
  background-color: #fff;
  margin: 0 auto 0;
  position: relative;
  top: 5vh;
}
.section-title {
  color: #333;
  text-align: center;
} 
</style>