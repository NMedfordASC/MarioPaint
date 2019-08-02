const gridarray = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
let currentselect
function setup(){
    createCanvas(300, 300)
}

function draw(){
    background(100)
    if(mouseX < 100 && mouseX > 0 && mouseY < 100 && mouseY > 0 ){  
        square(0, 0, 100)
        currentselect = "1"
    }
    if(mouseX < 200 && mouseX > 100 && mouseY < 100 && mouseY > 0){  
        square(100, 0, 100)
        currentselect = "2"
    }
    if(mouseX < 300 && mouseX > 200 && mouseY < 100 && mouseY > 0){  
        square(200, 0, 100)
        currentselect = "3"
    }
    if(mouseX < 100 && mouseX > 0 && mouseY < 200 && mouseY > 100){  
        square(0, 100, 100)
        currentselect = "4"
    }
    if(mouseX < 200 && mouseX > 100 && mouseY < 200 && mouseY > 100){  
        square(100, 100, 100)
        currentselect = "5"
    }
    if(mouseX < 300 && mouseX > 200 && mouseY < 200 && mouseY > 100){  
        square(200, 100, 100)
        currentselect = "6"
    }
    if(mouseX < 100 && mouseX > 0 && mouseY < 300 && mouseY > 200){  
        square(0, 200, 100)
        currentselect = "7"
    }
    if(mouseX < 200 && mouseX > 100 && mouseY < 300 && mouseY > 200){  
        square(100, 200, 100)
        currentselect = "8"
    }
    if(mouseX < 300 && mouseX > 200 && mouseY < 300 && mouseY > 200){  
        square(200, 200, 100)
        currentselect = "9"
    }
}