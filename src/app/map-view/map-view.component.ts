import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { MeshStandardMaterial, Object3D, Mesh, OrthographicCamera, PerspectiveCamera, MeshBasicMaterial, Sprite } from 'three';
import * as THREE from 'three';
import { MapToggleService } from '../services/map-toggle.service';
import { ModalService } from '../services/modal.service';


type Marker = {
  id:number,
  tip:string,
  position:[number,number,number],
  scale:number
}

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})


export class MapViewComponent implements OnInit {

  pinList:Marker[] =[
    {id:1, tip:"Some pile of dirt", position:[800,700,-624], scale:0.06},
    {id:2, tip:"Excavation", position:[900,700,44], scale:0.06 },
    {id:3, tip:"Facilities", position:[650,700,-424] , scale:0.06}
  ];


  preMining: boolean = true;

  constructor(private gltfLoaderService: NgtGLTFLoaderService,
    private mapToggleService: MapToggleService, private modalService: ModalService) { }

  facilities$ = this.gltfLoaderService.load('assets/facilities.glb');
  terrainOuter$ = this.gltfLoaderService.load('assets/Terrain_Outer/Terrain_Outer.gltf');
  terrainYear16$ = this.gltfLoaderService.load('assets/Terrain_Year16/Terrain_Year16.gltf');
  terrainExisting$ = this.gltfLoaderService.load('assets/Terrain_Existing.glb');


  facilities: THREE.Object3D = new Object3D();
  terrainYear16: THREE.Object3D = new Object3D();
  terrainExisting: THREE.Object3D = new Object3D();
  terrainOuter: THREE.Object3D = new Object3D();


  ngOnInit() {

  console.log("oniinit map")
    this.mapToggleService.toggleMap.subscribe(value => {
      this.preMining = value;

      let scale = this.preMining ? 0 : 1;

      this.facilities.scale.set(scale,scale,scale);
      this.terrainYear16.scale.set(scale,scale,scale);
      /* 
      this.facilities.visible = !this.preMining;
      this.terrainYear16.visible = !this.preMining;
       */
      this.terrainExisting.visible = this.preMining;

     
    })
  }

  getPin()
  {
    let pin: THREE.Texture = new THREE.TextureLoader().load('assets/ui/Pin.svg');
    let pinMaterial = new THREE.SpriteMaterial({ map: pin, sizeAttenuation: false });
    let pinSprite$ = new THREE.Sprite(pinMaterial);

    return pinSprite$ ;
  }

  onHover() {
    //add toolip
   // console.log(this.material)
  }
  onHoverOut() {
    console.log("onHoverOut")

  }

  spriteloaded(object: any) {
    object.add(this.getPin())
    console.log(object)
  }
  onPinClick(event: any) {
    console.log("onpinlcikc");
    this.modalService.modalOpen.next(true);
    console.log(event)
  }

  facilitiesLoaded(object: Object3D) {
    console.log("facilitiesLoaded")
    this.facilities = object;
    this.facilities.scale.set(0,0,0);
   // this.facilities.visible = false;
    console.log(this.facilities)


  }
  terrainYear16Loaded(object: Object3D) {
    console.log("terrainYear16Loaded")
    this.terrainYear16 = object;
    this.terrainYear16.scale.set(0,0,0);
    //this.terrainYear16.visible = false;

  }
  terrainExistingLoaded(object: Object3D) {
    console.log("terrainExistingLoaded")
    this.terrainExisting = object;
  }
  terrainOuterLoaded(object: Object3D) {
    console.log("terrainOuterLoaded")
    this.terrainOuter = object;
  }
  pinLoaded(object: any) {
    console.log(object)
    object.scale.set(1, 1, 1);
  }

  controlsReady(controls: NgtSobaOrbitControls) {
   
    const orbitControls = controls.controls;
  
  /*  orbitControls.maxZoom = 1;
   orbitControls.minZoom = 1; */
  orbitControls.minDistance = 1300;
  orbitControls.maxDistance = 10000;
  orbitControls.minPolarAngle = 0;
  orbitControls.maxPolarAngle = Math.PI / 3.5;
  //orbitControls.enablePan = false;
  //orbitControls.maxAzimuthAngle = 1000;

    const camera = orbitControls.object as OrthographicCamera;
    // const camera = orbitControls.object as PerspectiveCamera;

    camera.position.setX(1320);
    camera.position.setY(999);
    camera.position.setZ(-554);
    camera.zoom = 1;

    camera.left = window.innerWidth / - 2;
    camera.right = window.innerHeight / 2;
    camera.top = window.innerHeight / - 2;
    camera.bottom = window.innerHeight / 2;
    camera.far = 100000;
    /*  
    camera.rotation.x = -100000;
    camera.near = 1;
    
    */
   camera.scale.set(1, 1, 1);
 

  }


}
