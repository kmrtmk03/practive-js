<template>
    <section class="countainer">
        <div id="pixiview"></div>
    </section>
</template>

<script>
let PIXI
if(process.client) {
    PIXI = require('pixi.js')
}

export default {
    data() {
        return {
            width: 0,
            height: 0,
            app: '',
            el: '',
            textObj: '',
            container: ''
        }
    },
    mounted: function() {
        //Init - Pixi.js
        this.InitPixi()
    },
    methods: {
        InitPixi() {
            //Setting - Canvas
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.app = new PIXI.Application({
                width: this.width,
                height: this.height,
                backgroundColor: 0x1099bb,
                antialias: true,
                autoResize: true,
                resolution: devicePixelRatio
            });

            //Wait - 1f
            this.$nextTick(function() {
                this.el = document.getElementById('pixiview');
                this.el.appendChild(this.app.view);

                //Init - Container
                this.InitContainer();
                
                //Init - Text
                this.InitText()
            })
        },
        InitContainer() {
            this.container = new PIXI.Container()
            this.container.x = 0
            this.container.y = 0

            this.app.stage.addChild(this.container)
        },
        InitText() {
            //Init - Text
            let _word = 'Pixi.js'
            let _style = {
                fontFamily:'Helvetica', 
                fontSize:'60px', 
                fontWeight:'bold', 
                fill:'white'
            }

            //Setting - Object
            this.textObj = new PIXI.Text(_word, _style)
            this.textObj.position.set(this.width / 2, this.height / 2)
            this.textObj.anchor.set(0.5, 0.5)
            this.container.addChild(this.textObj)
            
            //Setting - Interactive
            this.textObj.interactive = true
            this.textObj.buttonMode = true
            this.textObj.on('pointerdown', this.OnTextDown)
            this.textObj.on('pointerup', this.OnTextUp)
            
            //Animation
            // this.app.ticker.add((delta) => {
                // this.AnimationText()
            // })
        },
        OnTextDown() {
            this.textObj.on('pointermove', this.MoveText)
        },
        OnTextUp() {
            this.textObj.off('pointermove', this.MoveText)
        },
        MoveText(e) {
            let _position = e.data.getLocalPosition(this.app.stage)
            this.textObj.x = _position.x
            this.textObj.y = _position.y
        },
        AnimationText() {
            this.textObj.x += 1
            if(this.textObj.x > this.width) {
                this.textObj.x = 0
            }
        }
    }
}
</script>


<style lang="scss" scoped>
.title-page {
    font-size: 94px;
    height: 111px;
    line-height: 111px;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    color: #fff;
}
</style>