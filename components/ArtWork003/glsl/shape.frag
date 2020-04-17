varying vec2 vUv; //UV座標
uniform float uTime; //経過時間
uniform vec2 uMouse; //マウス座標
uniform vec2 uResolution; //画面解像度

void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
    vec3 destColor = vec3(1.0, 0.3, 0.7);
    float f = 0.0;
    for(float i = 0.0; i < 10.0; i++) {
        float s = sin(uMouse.x + i * 0.628318) * 0.5;
        float c = cos(uMouse.y + i * 0.628318) * 0.5;
        f += 0.0025 / abs(length(p + vec2(c, s)) - 0.5);
    }
    gl_FragColor = vec4(vec3(destColor * f), 1.0);
}