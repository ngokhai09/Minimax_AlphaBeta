class Node {
    name = '';
    children;
    father;
    nodeSettings= {
        fill: am5.color(000000)
      }
    

    constructor(father, data) {
        this.name = data;
        this.children = new Array();
        this.father = father;        
    }
    addChild(data) {
        let node = new Node(this, data);
        this.children.push(node);
        this.father = this;
    }
    hasChild() {
        return this.children.length != 0;
    }
    draw() {
        if(this.father != null){
            line.draw(this.father.x, this.father.y, this.x, this.y);
        }
        ctx.beginPath();
        
        ctx.arc(this.x, this.y, r, 0, 2 * Math.PI);
        ctx.fillStyle = 'White';
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.font = "normal 15px Arial";
        ctx.strokeText(this.name, this.x, this.y);
        
    };
}