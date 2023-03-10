
import  GLTFLoader from '/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0xFFFFF } );

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const ambiantLight=new THREE.AmbientLight( 0xFFFFF, 0.5);
scene.add(ambiantLight);

const directionalLight=new THREE.DirectionalLight( 0xFFFFF, 3);
directionalLight.position.set(1,1,0);
scene.add(directionalLight);

camera.position.z = 5;
var controls=new THREE.OrbitControls(camera, renderer.domElement);





const gtlfLoader = new GLTFLoader();
gtlfLoader.load(".assets/forest_house/scene.gltf", (gtlfscene) => {
  scene.add(gtlfscene.scene)



});
function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

  renderer.render( scene, camera );
			};

animate();
