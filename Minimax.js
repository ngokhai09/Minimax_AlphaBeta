class Minimax {
    Max(a, b) {
        try {
            let valA = parseInt(a);
            let valB = parseInt(b);
            return valA > valB ? a : b;
        } catch (e) {
            System.out.println("Error");
            return null;
        }
    }
    Min( a,  b) {
        try {
            let valA = parseInt(a);
            let valB = parseInt(b);
            return valA < valB ? a : b;
        } catch ( e) {
            System.out.println("Error");
            return null;
        }
    }
    equal( a,  b){
        try {
            let valA = parseInt(a);
            let valB = parseInt(b);
            if(valA >= valB){
                return 1;
            }
            if(valA <= valB){
                return 0;
            }
            return -1;
        } catch ( e) {
            System.out.println("Error");
            return -1;
        }
    }
    drawRemove(father, root){
        root.nodeSettings= {
            fill: am5.color(0xFF621F)
        }
        if(!root.hasChild()){
            return;
        }
        for(let children of root.children){
            this.drawRemove(root, children);
        }
    }

    minimax(root, isMax,  alpha,  beta) {
        if (!root.hasChild()) {
            return root.name;
        }
        if (isMax) {
            let max = "-9999";
            for(let children of root.children){
                let val = this.minimax(children, false, alpha, beta);
                max = this.Max(max, val);
                alpha = this.Max(alpha, max);
                if(this.equal(val, beta) == 1){
                    let index = root.children.indexOf(children);
                    for(let i = index + 1; i < root.children.length; i++){
                        this.drawRemove(root, root.children[i]);
                    }
                    break;
                }
            }
            root.name += " = " + max;
            return max;
        }
        else{
            let min = "9999";
            for(let children of root.children){
                let val = this.minimax(children, true, alpha, beta);
                min = this.Min(min, val);
                beta = this.Min(beta, min);
                if(this.equal(alpha, val) == 1){
                    let index = root.children.indexOf(children);
                    for(let i = index + 1; i < root.children.length; i++){
                        this.drawRemove(root, root.children[i]);
                    }
                    break;
                }
            }
            root.name += " = " + min;

            return min;
        }
        
        // return "TODO";
    }
}
    
