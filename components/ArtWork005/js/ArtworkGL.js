import Common from "./Common"

export default class ArtWorkGL {
    constructor(props) {
        this.props = props
        this.Init()

        // window.addEventListener('mousemove', e => {
        //     Common.MouseMoved(e.clientX, e.clientY)
        // })

        window.addEventListener('scroll', e => {
          Common.Scroll()
        }, {passive: true})
    }

    Init() {
        Common.Init(this.props.$canvas)
    }
}