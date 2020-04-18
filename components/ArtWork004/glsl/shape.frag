varying vec2 vUv; //UV座標
uniform float uTime; //経過時間
uniform vec2 uMouse; //マウス座標
uniform vec2 uResolution; //画面解像度

float plasma(vec2 p) {
  p *= 10.0;

  float s = 0.25;

  float _return = (sin(p.x) * s + s) + (sin(p.y) * s + s);

  return _return;
}

void main() {
  vec2 pos = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
  gl_FragColor = vec4(vec3(plasma(pos)), 1.0);
}