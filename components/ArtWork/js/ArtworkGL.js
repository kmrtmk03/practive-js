import Common from "./Common"

export default class ArtWorkGL {
    constructor(props) {
        this.props = props
        this.Init()
    }

    Init() {
        console.log("ArtWork GL")
        Common.Init(this.props.$canvas)
    }
}