import Common from "./Common"

export default class ArtWorkGL {
    constructor(props) {
        this.props = props
        this.Init()

        window.addEventListener('mousemove', e => {
            Common.MouseMoved(e.clientX, e.clientY)
        })
    }

    Init() {
        Common.Init(this.props.$canvas)
    }
}