varying vec2 vUv; //UV座標
uniform float uTime; //経過時間
uniform vec2 uMouse; //マウス座標
uniform vec2 uResolution; //画面解像度

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
  // vec2 q = mod(p, 0.5) - 0.5;
  vec2 q = p;

  float s = sin(uTime);
  float c = cos(uTime);

  q *= mat2(c, -s, s, c);

  float v = 0.1 / abs(q.x) * abs(q.y);
  float r = v * abs(sin(uTime * 6.0) + 1.5);
  float g = v * abs(sin(uTime * 4.5) + 1.5);
  float b = v * abs(sin(uTime * 3.0) + 1.5);
  gl_FragColor = vec4(r, g, b, 1.0);
}