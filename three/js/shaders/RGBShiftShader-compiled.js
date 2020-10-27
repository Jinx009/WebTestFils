console.warn("THREE.RGBShiftShader: As part of the transition to ES6 Modules, the files in 'examples/js' were deprecated in May 2020 (r117) and will be deleted in December 2020 (r124). You can find more information about developing using ES6 Modules in https://threejs.org/docs/#manual/en/introduction/Installation.");
/**
 * RGB Shift Shader
 * Shifts red and blue channels from center in opposite directions
 * Ported from http://kriss.cx/tom/2009/05/rgb-shift/
 * by Tom Butterworth / http://kriss.cx/tom/
 *
 * amount: shift distance (1 is width of input)
 * angle: shift angle in radians
 */

THREE.RGBShiftShader = {

	uniforms: {

		"tDiffuse": { value: null },
		"amount": { value: 0.005 },
		"angle": { value: 0.0 }

	},

	vertexShader: ["varying vec2 vUv;", "void main() {", "	vUv = uv;", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),

	fragmentShader: ["uniform sampler2D tDiffuse;", "uniform float amount;", "uniform float angle;", "varying vec2 vUv;", "void main() {", "	vec2 offset = amount * vec2( cos(angle), sin(angle));", "	vec4 cr = texture2D(tDiffuse, vUv + offset);", "	vec4 cga = texture2D(tDiffuse, vUv);", "	vec4 cb = texture2D(tDiffuse, vUv - offset);", "	gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);", "}"].join("\n")

};

//# sourceMappingURL=RGBShiftShader-compiled.js.map