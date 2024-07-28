
// 4) handle loaded model
function initScene(data) {
  let { geo } = data;
  geo.center();
  const material = new THREE.MeshNormalMaterial({
  });
  const mesh = new THREE.Mesh(geo, material);

  mesh.scale.multiplyScalar(3);
  scene.add(mesh);
}

// 3) load model
import { OBJLoader } from "jsm/loaders/OBJLoader.js";

// 2) animate
mesh.rotation.y = timeStep * -timeMult;
// 1)
const texLoader = new THREE.TextureLoader();
const material = new THREE.MeshMatcapMaterial({
  matcap: texLoader.load('./assets/steel.jpg'),
  // flatShading: true,
});

// 0)
// *lens* geo
const lensGeo = new THREE.PlaneGeometry(10, 10, 10, 10);
let positions = lensGeo.attributes.position.array;
let len = positions.length;
for (let i = 0; i < len; i += 1) {
  // randomize the *z* position only
  let randomZPos = Math.random() * 0.2 - 0.1;
  if (i % 3 === 2) {
    positions[i] += randomZPos;
  }
}
lensGeo.computeVertexNormals();
const lensMat = new THREE.MeshPhysicalMaterial({
  roughness: 0.0,
  transmission: 1,
  thickness: 3,
  flatShading: true,
});
const lensMesh = new THREE.Mesh(lensGeo, lensMat);
lensMesh.position.z = 2;
scene.add(lensMesh);
//
lensMesh.rotation.z = timeStep * timeMult;