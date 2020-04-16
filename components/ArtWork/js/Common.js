import * as THREE from "three"

import vertexShader from '../glsl/shape.vert'
import fragmentShader from '../glsl/shape.frag'

class Common {
    constructor() {
        this.scene = null
        this.camera = null
        this.renderer = null

        this.size = {
            windowW: null,
            windowH: null
        }

        this.light = null

        this.geo = null
        this.mat = null
        this.mesh = null
    }

    Init($canvas) {
        this.SetSize()

        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(
            45,
            this.size.windowW / this.size.windowH,
            0.1,
            10000
        )
        this.camera.position.set(0, 5, 5)
        this.camera.lookAt(this.scene.position)

        this.renderer = new THREE.WebGLRenderer({
            canvas: $canvas
        })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(this.size.windowW, this.size.windowH);
        this.renderer.setClearColor(0xffffff);
        
        this.light = new THREE.PointLight(0x000000)
        this.light.position.set(2, 2, 2)
        this.scene.add(this.light)

        this.geo = new THREE.BoxGeometry(1, 1, 1)
        this.mat = new THREE.MeshNormalMaterial()
        // this.mat = new THREE.ShaderMaterial({
        //     vertexShader: vertexShader,
        //     fragmentShader: fragmentShader
        // })
        this.mesh = new THREE.Mesh(this.geo, this.mat)
        this.scene.add(this.mesh)

        this.Render()
    }

    SetSize() {
        this.size = {
            windowW: window.innerWidth,
            windowH: window.innerHeight - 51
        }
    }

    Resize(){
        this.setSize();
        this.camera.aspect = this.size.windowW / this.size.windowH;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.size.windowW, this.size.windowH);
    }

    Render(){
        // this.Rotate()
        requestAnimationFrame(() => {
            this.Render()            
        })

        this.Rotate()
        this.renderer.render(this.scene, this.camera);
    }

    Rotate() {
        this.mesh.rotation.x += 0.005
        this.mesh.rotation.y += 0.005
    }
}

export default new Common()