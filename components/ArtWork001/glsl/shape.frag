varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;

void main() {
    gl_FragColor = vec4(uMouse.x, uMouse.y * vUv.y, 1.0, 1.0);
}