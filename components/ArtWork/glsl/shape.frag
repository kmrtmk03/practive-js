varying vec2 vUv;
uniform float uAspect;

void main() {
//   vec4 color = vec4(vUv.x, vUv.y, 0.0, 1.0);
//   gl_FragColor = color;
    // vec2 center = vec2(0.5, 0.5);
    // float lightness = 0.05 / length(vUv - center);
    // lightness = clamp(lightness, 0.0, 1.0);
    
    // vec4 color = vec4(vec3(lightness), 1.0);
    // color *= vec4(0.2, 1.0, 0.5, 1.0);

    vec2 uv = vec2(vUv.x * uAspect, vUv.y);
    vec2 center = vec2(0.5 * uAspect, 0.5);
    float lightness = 0.05 / length(uv - center);
    vec4 color = vec4(vec3(lightness), 1.0);
    color *= vec4(0.2, 1.0, 0.5, 1.0);

    gl_FragColor = color;
}