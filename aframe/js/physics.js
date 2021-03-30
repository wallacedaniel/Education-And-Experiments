//


let scene = document.querySelector('a-scene');


for(i = 0; i < 10; i++){
  for(j = 0; j < 10; j++){
    let newEntity = document.createElement('a-entity');
    let geometry = new THREE.SphereBufferGeometry(.2, 32, 32);
    let material = new THREE.MeshStandardMaterial({color: 'yellow'});
    let mesh = new THREE.Mesh(geometry, material);
    newEntity.setObject3D('mesh', mesh);
    newEntity.setAttribute('position', {x: (i * -1) + 5, y: 30, z: (j * -1) + 5 });
    newEntity.setAttribute('dynamic-body', 'shape: sphere;');
    scene.appendChild(newEntity);
  }
}
