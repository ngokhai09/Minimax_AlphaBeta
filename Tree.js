class Tree {
    root;

    constructor() {
        this.root = null;
    }
    
    printPreorder(node)
	{
		if (node == 'undefined')
		{
			return;
		}
		let i = 0;
		temp = null;
        System.out.print(node.name + " ");
		while (i < node.child.length())
		{
			temp = node.child[i];
			this.printPreorder(temp);
			i++;
		}
	}

}
