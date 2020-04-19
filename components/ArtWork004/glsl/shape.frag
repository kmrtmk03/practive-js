varying vec2 vUv; //UV座標
uniform float uTime; //経過時間
uniform vec2 uMouse; //マウス座標
uniform vec2 uResolution; //画面解像度

void main() {
    vec2 p = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);

    float k = (uMouse.y * 300.0) / uResolution.y + 0.05;

    float f = p.y + sin(p.x + uTime) * k;

    f = 1.0 - pow(abs(f), 0.2);

    vec3 color = vec3(f, f / 2.0, 0.5);

    gl_FragColor = vec4(color, 1.0);
}