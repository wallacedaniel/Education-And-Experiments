
// world end function should be able to go into World class

//  or  aldocument.querySelector('[enemy]:not([alive])').  or in conjunction w jobs queue
// jobsQueue should go into   world.data   not be a parameter of it's own

// World Start comes after Inventory all else load

// handle no inventory from database .. default inventory

// handle if there was no previous world  end timeout


// when the world ends      world end time    updated inventory    updated jobsQueue
// when world begins      update jobsQueue    calculate finsihded items



//https://github.com/spite/ccapture.js/

// sepepearate concerns
// components reusable    -  simple things   .. notify  parent component  ...  nt too much application logic


class World {
  constructor() {
    this.data = this.worldStart();
    this.db;
  }

  get getData() {
    return this.data;
  };

  set setData(data) {
      this.data = data;
  };

  get getInventory() {
    return this.data.inventory;
  };

  set setInventory(inventory) {
      this.data.inventory = inventory;
  };

  worldStart(){
    let config = {
      apiKey: "AIzaSyDGZTfzI203kduXIqD4vozaBDKMGJSEyOw",                 // hide me elsewhere  ...  webpack level in config file .. server side
      authDomain: "test-world-fb68d.firebaseapp.com",
      databaseURL: "https://testproject-bbacc.firebaseio.com",
      projectId: "testproject-bbacc",
      storageBucket: "",
      messagingSenderId: "530575455352"
    };

    firebase.initializeApp(config);
    let db = firebase.database();
    this.db = db;
    let theData = {};





    let firstDay;
    let theTime = db.ref('timestamp');

    theTime.once("value").then(async function(snapshot) {

      let key = snapshot.key;
      let theEnd = snapshot.child("worldEnd").val();

      if(theEnd == null){
        firstDay = true;
      }

      let timeData = {
        worldBegin: new Date().getTime()
      }





      theTime.update(timeData);
      theTime.on('value', gotData, errData);

      timeData.worldEnd = await theEnd;

      theData.time = timeData;
      //console.log(Math.floor((theData.time.worldBegin - theData.time.worldEnd)/1000));
    });



    let theInventory = db.ref('inventory');


    let testData;
    theInventory.once("value").then(function(snapshot) {

      let key = snapshot.key;
      let items = snapshot.child("items").val();
      let containers = snapshot.child("containers").val();
      let crates = snapshot.child("crates").val();
      let land = snapshot.child("land").val();

      // console.log(containers);
      // console.log(crates);
      // console.log(land);

      testData = {
        'items': items,
        'containers': containers,
        'crates': crates,
        'land': land
      }
      // console.log(testData);
      //console.log(Math.floor((theData.time.worldBegin - theData.time.worldEnd)/1000));
    });




    let inventoryData = {
      items: [
          {'id': 'y1', 'type': 'yellowCylinder', 'radiusTop': .05, 'radiusBottom': .05, 'height': .3, 'color': '#FFC65D', 'x': -.7, 'y': .25, 'z': 2, 'counter': 30},
          {'id': 'y2', 'type': 'yellowCylinder', 'radiusTop': .05, 'radiusBottom': .05, 'height': .3, 'color': '#FFC65D', 'x': -1, 'y': .25, 'z': 2, 'counter': 30},
          {'id': 'y3', 'type': 'yellowCylinder', 'radiusTop': .05, 'radiusBottom': .05, 'height': .3, 'color': '#FFC65D', 'x': -.4, 'y': .25, 'z': 2, 'counter': 30},

          {'id': 'r1', 'type': 'redSphere', 'radius': .1, 'color': '#EF2D5E', 'x': 0, 'y': .25, 'z': -2, 'counter': 60},
          {'id': 'r2', 'type': 'redSphere', 'radius': .1, 'color': '#EF2D5E', 'x': -.3, 'y': .25, 'z': -2, 'counter': 60},
          {'id': 'r3', 'type': 'redSphere', 'radius': .1, 'color': '#EF2D5E', 'x': -.6, 'y': .25, 'z': -2, 'counter': 60},

          {'id': 'b1', 'type': 'blueCube', 'width': .2, 'height': .2, 'depth': .2, 'color': '#4CC3D9', 'x': -2, 'y': .2, 'z': 1, 'counter': 45, 'rotX': 0, 'rotY': 45, 'rotZ': 0},
          {'id': 'b2', 'type': 'blueCube', 'width': .2, 'height': .2, 'depth': .2, 'color': '#4CC3D9', 'x': -2, 'y': .2, 'z': .5, 'counter': 45, 'rotX': 0, 'rotY': 45, 'rotZ': 0},
          {'id': 'b3', 'type': 'blueCube', 'width': .2, 'height': .2, 'depth': .2, 'color': '#4CC3D9', 'x': -2, 'y': .2, 'z': 0, 'counter': 45, 'rotX': 0, 'rotY': 45, 'rotZ': 0}
      ],
      containers: [
          {'type': 'yellowCylinder', 'radiusTop': .2, 'radiusBottom': .2, 'height': .1, 'color': '#FFC65D', 'x': -2, 'y': .05, 'z': 1, 'capacity': 1},
          {'type': 'yellowCylinder', 'radiusTop': .2, 'radiusBottom': .2, 'height': .1, 'color': '#FFC65D', 'x': -2, 'y': .05, 'z': .5, 'capacity': 1},
          {'type': 'yellowCylinder', 'radiusTop': .2, 'radiusBottom': .2, 'height': .1, 'color': '#FFC65D', 'x': -2, 'y': .05, 'z': 0, 'capacity': 1},
          {'type': 'blueCube', 'width': .2, 'height': .2, 'depth': .2, 'color': '#4CC3D9', 'x': 0, 'y': .1, 'z': -2, 'capacity': 1},
          {'type': 'blueCube', 'width': .2, 'height': .2, 'depth': .2, 'color': '#4CC3D9', 'x': -.3, 'y': .1, 'z': -2, 'capacity': 1},
          {'type': 'blueCube', 'width': .2, 'height': .2, 'depth': .2, 'color': '#4CC3D9', 'x': -.6, 'y': .1, 'z': -2, 'capacity': 1},
          {'type': 'blueCube', 'width': .9, 'height': .2, 'depth': .2, 'color': '#4CC3D9', 'x': -.7, 'y': .1, 'z': 2, 'capacity': 3}
      ],
      crates: [
          {'width': .6, 'height': .3, 'depth': .6, 'color': '#BBB', 'x': .8, 'y': .15, 'z': -.9, 'capacity': 5, 'items' : []},
          {'width': .6, 'height': .3, 'depth': .6, 'color': '#BBB', 'x': .8, 'y': .15, 'z': 0, 'capacity': 5, 'items' : []},
          {'width': .6, 'height': .3, 'depth': .6, 'color': '#BBB', 'x': .8, 'y': .15, 'z': .9, 'capacity': 5, 'items' : []}
      ],
      land: [
          {'id': 1},
          {'id': 2},
          {'id': 3},
      ]
    }

    theInventory.update(inventoryData);
    theInventory.on('value', gotData, errData);
    theData.inventory = inventoryData;







    theData.jobsQueue = [];









    function gotData(data){
      data = data.val();
    }

    function errData(err){
      console.log('Error!');
      console.log(err);
    }






    //console.log(theData);
    return theData;
  }

  // worldEnd(){
  //     let database = this.db;
  //     let ref = database.ref('timestamp');
  //     let data = {
  //       worldEnd: new Date().getTime()
  //     }
  //     ref.update(data);
  //     ref.on('value', gotData, errData);
  //
  //     function gotData(data){
  //       data = data.val();
  //     }
  //
  //     function errData(err){
  //       console.log('Error!');
  //       console.log(err);
  //     }
  // }
  // }
}

let theWorld = new World();
//console.log('let there be light ', theWorld);

// the World Class brings in the data from the database   and sets the data back to the database
// this component loads/positions the world geometry/material/attributes from the World Class data ... adds event listeners  ...maintains the world tick and manages the jobsQueue    ... what relationship/timing to getters/setters of World Object  properties     sync/relationship between props

AFRAME.registerComponent('world', {
    schema: {
      items: {type: 'array', default: theWorld.data.inventory.items},
      containers: {type: 'array', default: theWorld.data.inventory.containers},
      crates: {type: 'array', default: theWorld.data.inventory.crates},
      land: {type: 'array', default: theWorld.data.inventory.land},
      jobsQueue: {type: 'array', default: theWorld.data.jobsQueue}
    },

    init: function () {

      let data = this.data;
      let scene = this.el;
      let geometry, material, mesh;

      for(i = 0; i < data.items.length; i++){

        let newEntity = document.createElement('a-entity');

        switch(theWorld.data.inventory.items[i].type) {
          case 'blueCube':
            geometry = new THREE.BoxBufferGeometry(data.items[i].width, data.items[i].height, data.items[i].depth);
            break;
          case 'redSphere':
            geometry = new THREE.SphereBufferGeometry(data.items[i].radius, 32, 32);
            break;
          case 'yellowCylinder':
            geometry = new THREE.CylinderBufferGeometry(data.items[i].radiusTop, data.items[i].radiusBottom, data.items[i].height, 32);
            break;
        }

        material = new THREE.MeshStandardMaterial({color: data.items[i].color});
        mesh = new THREE.Mesh(geometry, material);
        newEntity.setObject3D('mesh', mesh);
        newEntity.setAttribute('position', { x: data.items[i].x, y: data.items[i].y, z: data.items[i].z });
        newEntity.setAttribute('id', data.items[i].id);
        newEntity.setAttribute('rotation', { x: data.items[i].rotX, y: data.items[i].rotY, z: data.items[i].rotZ});    //  if true >>
        // newEntity.setAttribute('click-drag');
        scene.appendChild(newEntity);

        newEntity.addEventListener('click', function (evt) {        //  if this is not already clicked !!!
            //this.setAttribute('material', 'color', 'red');
            //console.log(this, evt.detail.intersection.point);
            if(!this.hasAttribute('inQueue')){
              let itemInInventory = data.items.find(item => item.id === this.id);
                let queueItem = {
                    'id': itemInInventory.id,
                    'counter': itemInInventory.counter
                }
                data.jobsQueue.push(queueItem);
                this.setAttribute('inQueue', true);
                let currentPosition = this.getAttribute('position');
                this.setAttribute('position', { x: currentPosition.x - 2, y: 0.1, z: currentPosition.z });
                let theNewPosition = this.getAttribute('position');

                // updateSchema method ???

                itemInInventory.x = theNewPosition.x;
                itemInInventory.y = theNewPosition.y;
                itemInInventory.z = theNewPosition.z;



                theWorld.setInventory = data;

                console.log('the new world order ', theWorld);

            }
        });
      }

      for(i = 0; i < data.crates.length; i++){

        let newEntity = document.createElement('a-entity');
        geometry = new THREE.BoxBufferGeometry(data.crates[i].width, data.crates[i].height, data.crates[i].depth);
        material = new THREE.MeshStandardMaterial({color: data.crates[i].color});
        mesh = new THREE.Mesh(geometry, material);
        newEntity.setObject3D('mesh', mesh);
        newEntity.setAttribute('position', { x: data.crates[i].x, y: data.crates[i].y, z: data.crates[i].z });
        scene.appendChild(newEntity);
      }

      for(i = 0; i < data.containers.length; i++){

        let newEntity = document.createElement('a-entity');

        switch(theWorld.data.inventory.containers[i].type) {
          case 'blueCube':
            geometry = new THREE.BoxBufferGeometry(data.containers[i].width, data.containers[i].height, data.containers[i].depth);
            break;
          case 'yellowCylinder':
            geometry = new THREE.CylinderBufferGeometry(data.containers[i].radiusTop, data.containers[i].radiusBottom, data.containers[i].height, 32);
            break;
        }

        material = new THREE.MeshStandardMaterial({color: data.containers[i].color});
        mesh = new THREE.Mesh(geometry, material);
        newEntity.setObject3D('mesh', mesh);
        newEntity.setAttribute('position', { x: data.containers[i].x, y: data.containers[i].y, z: data.containers[i].z });
        scene.appendChild(newEntity);
      }

      setInterval(function(){
      //   theWorld.worldStartTime = new Date().getTime();
      //   let origin = 1584753636629;
      //   counter++;
      //
        //console.log('tick');
        //console.log(data.jobsQueue);

        data.jobsQueue.forEach(item => console.log(item.counter));

        data.jobsQueue.forEach(item => queueTick(item));

        function queueTick(item){

          console.log(item.counter);


            item.counter--;
          if(item.counter <= 0){
            //console.log('time id up for ', item.id);

            // remove this item from data.jobsQueue     ++++    when world ends  >>> save out jobsQueue

          }
        }


      //   console.log('Now: ' + theWorld.worldStartTime);
      //     console.log(Math.floor((theWorld.worldStartTime - origin)/1000));
      }, 1000);

    },
});


AFRAME.registerComponent('item-info', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {

      var data = this.data;
      var el = this.el;

      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
        // AFRAME.log('hello to foo', 'foo');
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });


function playAmbient(){
  let ambient = document.querySelector('#ambient-sound');
  ambient.components.sound.playSound();
  //console.log('played sound?');
}

AFRAME.registerComponent('test-canvas',{
  init: function(){
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.ctx.beginPath();
    this.ctx.rect(20, 20, 150, 100);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.rect(40, 40, 150, 100);
    this.ctx.fillStyle = "blue";
    this.ctx.fill();
  }
});

// <body onunload="myFunction()">

//
// AFRAME.registerComponent('world', {
//
//     init: function () {
//
//
//
//       let inventory = {
//         containers: [
//             {'geometry': new THREE.BoxBufferGeometry(3, 3, 3), 'material': new THREE.MeshStandardMaterial({color: 'yellow'}), 'location': {'x': 3 ,'y': 3,'z': 3}'', 'capacity': 1, 'items' : [{'type': 'blueCube', 'counter': 30}]}
//       };
//
//
//
//       for(let i = 0; i < inventory.containers.length; i++){
//
//         let mesh = new THREE.Mesh(i.geometry, i.material);
//
//         el.setObject3D('mesh', mesh);
//         el.innerHMTL = "<a-entity> <a-sphere></a-sphere> </a-entity>"
//       }
//
//
//       this.el.addEventListener('click', function (evt) {
//
//          this.setAttribute('material', 'color', 'red');
//          console.log(this, evt.detail.intersection.point);
//       });
//     }
//   });

  // on load .. new time   from firebase   load scene objects/data/listeners etc   start clock
