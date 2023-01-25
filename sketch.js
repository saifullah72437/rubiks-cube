let dim = 3;
let cube
const width = 600;
const height = 600;
var easycam;

function make3DArray(x, y,z) {
  let arr = new Array(x);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(y);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Array(z);
    }
  }
  return arr;
}


function setup() {
  
  // fix for EasyCam to work with p5 v0.7.2
 Dw.EasyCam.prototype.apply = function(n) {
   var o = this.cam;
   n = n || o.renderer,
   n && (this.camEYE = this.getPosition(this.camEYE), this.camLAT = this.getCenter(this.camLAT), this.camRUP = this.getUpVector(this.camRUP), n._curCamera.camera(this.camEYE[0], this.camEYE[1], this.camEYE[2], this.camLAT[0], this.camLAT[1], this.camLAT[2], this.camRUP[0], this.camRUP[1], this.camRUP[2]))
 };

  createCanvas(width, height, WEBGL);
  cube = make3DArray(dim,dim,dim)
  easycam = createEasyCam()

  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        let len = 30;
        let offset = (dim-1)*len*0.5
        let x = len * i - offset;
        let y = len * j - offset;
        let z = len * k - offset;
        cube[i][j][k] = new cubo(x,y,z,len);
      }
    }
  }
}


function draw() {
  background(51)


    for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      for (let k = 0; k < dim; k++) {
        let len = 10;
        let x = len * i
        let y = len * j
        let z = len * k
        cube[i][j][k].show();
        }
      }
    }
}