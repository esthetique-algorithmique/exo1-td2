// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    
    randomSeed: 0,
    nbRectangle : 100,
    Download_Image: () => save(),
}
gui.add(params, "randomSeed",0, 200, 1)
gui.add(params, "nbRectangle",0, 500, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    background('white')
    
    randomSeed(params.randomSeed);
    let widthR, heightR = 0; 
    const colors = ['red', 'green', 'blue'];
    let color;
    noStroke();
    
    for(let i = 0; i < params.nbRectangle; i++){
        color = random(colors)
        
        fill(color);
        widthR = random(1, 70);
        heightR = random(1, 70);
        rect(random(width), random(height), widthR, heightR)
    }

}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}