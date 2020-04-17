import * as THREE from "three"

import vertexShader from '../glsl/shape.vert'
import fragmentShader from '../glsl/shape.frag'
import { Vector2 } from "three"

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

        this.mouse = new Vector2(0.0, 0.0)

        this.uniforms = {
            uAspect: {
                value: null
            },
            uTime: {
                value: null
            },
            uMouse: {
                value: this.mouse
            }
        }

        this.mesh = null
    }

    Init($canvas) {
        this.SetSize()

        this.scene = new THREE.Scene()

        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, -1);

        this.renderer = new THREE.WebGLRenderer({
            canvas: $canvas
        })
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(this.size.windowW, this.size.windowH);
        this.renderer.setClearColor(0xffffff);
        
        this.light = new THREE.PointLight(0x000000)
        this.light.position.set(2, 2, 2)
        this.scene.add(this.light)

        this.geo = new THREE.PlaneGeometry(2, 2, 1, 1)
        
        this.uniforms.uAspect.value = this.size.windowW / this.size.windowH

        this.mat = new THREE.ShaderMaterial({
            uniforms: this.uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            wireframe: false
        })
        this.mesh = new THREE.Mesh(this.geo, this.mat)
        this.scene.add(this.mesh)

        this.Render()
    }

    SetSize() {
        this.size = {
            windowW: window.innerWidth,
            windowH: window.innerHeight
        }
    }

    Resize(){
        this.setSize();
        this.camera.aspect = this.size.windowW / this.size.windowH;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.size.windowW, this.size.windowH);
    }

    Render(){
        requestAnimationFrame(() => {
            this.Render()            
        })

        //時間経過
        // const sec = performance.now() / 1000
        this.uniforms.uTime.value = 0.5

        //レンダリング
        this.renderer.render(this.scene, this.camera);
    }

    MouseMoved(x, y) {
        this.mouse.x = x / this.size.windowW
        this.mouse.y = 1.0 - (y / this.size.windowH)
    }
}

export default new Common()