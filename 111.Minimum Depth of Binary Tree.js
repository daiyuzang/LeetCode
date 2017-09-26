var minDepth = function(root){
	if (!root) 
		return 0;
	else if(root.left && root.right)
		return 1 + Math.min(minDepth(root.left),minDepth(root.right));
	return 1 + Math.max(minDepth(root.left),minDepth(root.right));
}