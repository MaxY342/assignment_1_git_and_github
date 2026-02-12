import * as THREE from "three"

// Initialize three js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias:true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const pointLight = new THREE.PointLight(0xffffff, 50, 100, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);
scene.add(ambientLight);

// Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color:0xff0000});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Animation loop
function animate() {
  mesh.rotation.y += 0.01;
  mesh.rotation.x += 0.01;
  mesh.rotation.z += 0.01;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);