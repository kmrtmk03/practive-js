varying vec2 vUv; //UV座標
uniform float uTime; //経過時間
uniform vec2 uMouse; //マウス座標
uniform vec2 uResolution; //画面解像度

void main() {
    float a = gl_FragCoord.x / uResolution.x;
    gl_FragColor = vec4(vec3(a), 1.0);
}