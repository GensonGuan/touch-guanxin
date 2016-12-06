function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(200,50);
    
    var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093',
                 '#ffe2e6',
                 '#6eb66d',
                 '#ffa960',
                 '#2b61ce',
                 '#c496d7',
                 '#6faaec',
                 '#fea24d'
                ];
    //the list of touch points;touchs[]
    
    for(var i=0; i < touches.length; i++){
        var touch = touches[i];
        
        var touchColor = colorList[i];
        
        fill(touchColor);
        
        ellipse(touch.x, touch.y, 150)
    }
  
}