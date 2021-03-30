

// PHASE ONE

// full time cycle  - 4hour day relative to 24 hour day -

//
let theEnd = document.querySelector('#world-end');

theEnd.addEventListener('click', function () {

      // can reduce these down to one update


      let db = theWorld.db;

      let theTime = db.ref('timestamp');
      let timeData = {
        worldEnd: new Date().getTime()
      }
      theTime.update(timeData);
      theTime.on('value', gotData, errData);

      let theInventory = db.ref('inventory');
      //console.log(theWorld.data.inventory);
      theInventory.update(theWorld.data.inventory);
      theInventory.on('value', gotData, errData);

      function gotData(data){
        data = data.val();
      }

      function errData(err){
        console.log('Error!');
        console.log(err);
      }
});


let rover = document.querySelector('#rover');

rover.addEventListener('click', function () {

  // AFRAME.log('hello to all log entities');

});



let scene = document.querySelector('a-scene');


// origin Date
// season 
let now = new Date();
let time = now.getTime();
let hour = now.getHours() % 4;
let minutes = now.getMinutes();
let seconds = now.getSeconds();
console.log(now);
console.log(time);
console.log('local time is: ' + hour + " " + minutes + " " + seconds);











// Grid
//
// for(i = 0; i < 10; i++){
//   for(j = 0; j < 10; j++){
//     let newEntity = document.createElement('a-entity');
//     let geometry = new THREE.SphereBufferGeometry(.02, 32, 32);
//     let material = new THREE.MeshStandardMaterial({color: 'yellow'});
//     let mesh = new THREE.Mesh(geometry, material);
//     newEntity.setObject3D('mesh', mesh);
//     newEntity.setAttribute('position', {x: i * .1, y: 1, z: j * .1 });
//     scene.appendChild(newEntity);
//   }
// }
//
// function polygon(x, y, radius, npoints) {
//   let angle = 6.2831855 / npoints;
//   let coordinates = [];
//   for (let a = 0; a < 6.2831855; a += angle) {
//     let vertex = [];
//     let sx = x + Math.cos(a) * radius;
//     let sy = y + Math.sin(a) * radius;
//     vertex.push(sx);
//     vertex.push(sy);
//     coordinates.push(vertex);
//   }
//   return coordinates;
// }
//
// let testPoly = polygon(10, 10, 5, 5);
//
// for(i = 0; i < testPoly.length; i++){
//     let newEntity = document.createElement('a-entity');
//     let geometry = new THREE.SphereBufferGeometry(.5, 32, 32);
//     let material = new THREE.MeshStandardMaterial({color: 'green'});
//     let mesh = new THREE.Mesh(geometry, material);
//     newEntity.setObject3D('mesh', mesh);
//     newEntity.setAttribute('position', {x: testPoly[i][0], y: 8, z: testPoly[i][1] });
//     scene.appendChild(newEntity);
// }



function star(x, y, radius1, radius2, npoints){

  let angle = 6.2831855 / npoints;
  let halfAngle = angle / 2.0;

  let coordinates = [];

  for (let a = 0; a < 6.2831855; a += angle) {

    let vertex1 = [];
    let sx1 = x + Math.cos(a) * radius2;
    let sy1 = y + Math.sin(a) * radius2;
    vertex1.push(sx1);
    vertex1.push(sy1);
    coordinates.push(vertex1);
    let sx2 = x + Math.cos(a + halfAngle) * radius1;
    let sy2 = y + Math.sin(a + halfAngle) * radius1;
    let vertex2 = [];
    vertex2.push(sx2);
    vertex2.push(sy2);
    coordinates.push(vertex2);
  }
  return coordinates;
}

let testStar = star(10, 10, 3, 7, 12);
//console.log(testStar);

for(i = 0; i < testStar.length; i++){
    let newEntity = document.createElement('a-entity');
    let geometry = new THREE.SphereBufferGeometry(.3, 32, 32);
    let material = new THREE.MeshStandardMaterial({color: 'green'});
    let mesh = new THREE.Mesh(geometry, material);
    newEntity.setObject3D('mesh', mesh);
    newEntity.setAttribute('position', {x: testStar[i][0], y: 8, z: testStar[i][1] });
    scene.appendChild(newEntity);
}



// console.log(theWorld.data);
//console.log(theWorld.data.time.worldBegin);


//


// python -m SimpleHTTPServer 8000
// 1584753636629

// // get the current moment
// var d = new Date();
// // time ellapsed between set moment and fixed moment
// var n = d.getTime();
// console.log(d,n);

// var el = document.querySelector('#test');
// var el = document.querySelector('#test');

// console.log(el);


//
//
//
// function World(now){
//
//   this.worldStartTime = new Date().getTime();
//           // on > new start time .. if ! worldTimeEnd ..no need to call update world ..  else newtime - endtime = elapsed time
//                         // calc tick qty in elapsed time > update/add worldGraph w qty .. if counter - qty <= 0 item's time's up > ation();
//   this.jobsQueue = [{'type': 'blueCube', 'counter': 30}, {'type': 'redSphere', 'counter': 60}];
//
//   this.balance = 100;              // then per second (qty ticks per sec?) .. update counters
//
//   this.inventory = {
//     containers: [
//         {'geometry': '', 'location': '', 'capacity': 1, 'items' : [{'type': 'blueCube', 'counter': 30}]},
//         {'geometry': '', 'location': '', 'capacity': 1, 'items' : [{'type': 'blueCube', 'counter': 30}]},
//         {'geometry': '', 'location': '', 'capacity': 1, 'items' : [{'type': 'blueCube', 'counter': 30}]},
//         {'geometry': '', 'location': '', 'capacity': 1, 'items' : [{'type': 'redSphere', 'counter': 60}]},
//         {'geometry': '', 'location': '', 'capacity': 1, 'items' : [{'type': 'redSphere', 'counter': 60}]},
//         {'geometry': '', 'location': '', 'capacity': 1, 'items' : [{'type': 'redSphere', 'counter': 60}]},
//         {'geometry': '', 'location': '', 'capacity': 3, 'items' : [{'type': 'blueCube', 'counter': 45}, {'type': 'blueCube', 'counter': 45}, {'type': 'blueCube', 'counter': 45}]},
//     ],
//     crates: [
//         {'geometry': '', 'location': '', 'capacity': 5, 'items' : []},
//         {'geometry': '', 'location': '', 'capacity': 5, 'items' : []},
//         {'geometry': '', 'location': '', 'capacity': 5, 'items' : []},
//     ],
//     land: [
//
//     ]
//   }
//
// }
//
// // let origin = 1584753636629;
// // console.log('origin: ' + origin);
// // console.log(typeof(origin));
//
// let theWorld = new World();
// //console.log(theWorld.worldStartTime);
//
// let counter = 0;
//
// setInterval(function(){
//   theWorld.worldStartTime = new Date().getTime();
//   let origin = 1584753636629;
//   counter++;
//
//   theWorld.jobsQueue.forEach(item => queueTick(item));
//
//   function queueTick(item){
//     item.counter--;
//     console.log(item.counter);
//     if(item.counter <= 0){
//       console.log('times up!');
//     }
//   }
//   //console.log('Now: ' + theWorld.worldStartTime);
//     console.log(Math.floor((theWorld.worldStartTime - origin)/1000));
// }, 1000);
//
//
//
//
//
//
//
//
//
// // var els = sceneEl.querySelectorAll('*');
// // for (var i = 0; i < els.length; i++) {
// //   console.log(els[i]);
// // }
//
//
//
//
//
// $(document).ready(function() {
//
//
//   // Initialize Firebase
//     var config = {
//
//     apiKey: "AIzaSyDGZTfzI203kduXIqD4vozaBDKMGJSEyOw",
//     authDomain: "test-world-fb68d.firebaseapp.com",
//     databaseURL: "https://testproject-bbacc.firebaseio.com",
//     projectId: "testproject-bbacc",
//     storageBucket: "",
//     messagingSenderId: "530575455352"
//
//     };
//     firebase.initializeApp(config);
//
//     //console.log(firebase);
//
//     let database = firebase.database();
//     let ref = database.ref('timestamp');
//
//     let data = {
//       worldBegin: new Date().getTime()
//     }
//
//     ref.update(data);
//
//     ref.on('value', gotData, errData);
// });
//
// function endWorld(firebase){
//
//   let database = firebase.database();
//   let ref = database.ref('timestamp');
//
//   let data = {
//     worldEnd: new Date().getTime()
//   }
//
//   ref.update(data);
//
//   ref.on('value', gotData, errData);
//
//
// }
//
// function gotData(data){
// 	console.log(data.val());
// }
//
// function errData(err){
// 	console.log('Error!');
// 	console.log(err);
// }
