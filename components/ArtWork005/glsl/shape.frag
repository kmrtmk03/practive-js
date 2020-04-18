varying vec2 vUv; //UV座標
uniform float uTime; //経過時間
uniform vec2 uMouse; //マウス座標
uniform vec2 uResolution; //画面解像度
uniform float uScroll;

void main() {
    //いっぱい円が出る
    vec2 p  = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
    vec3 destColor = vec3(0.0);
    for(float i = 0.0; i < 36.0; i++) {
        float j = i + 1.0;
        float f = 0.0004 * j / abs(length(p + vec2(cos(j + uScroll / uResolution.y), sin(j + uScroll * 2.0 / uResolution.y))) - j * 0.1);
        destColor += f * j / 36.0;
    }
    gl_FragColor = vec4(destColor, 1.0);
}