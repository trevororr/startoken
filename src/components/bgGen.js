function bgGen() {
    let canvas = document.getElementById("starCanvas")
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
	let ctx = canvas.getContext('2d');
	ctx.fillStyle = '#000000';
	var starPalette = ['445094','8ab1cf','24346c','5965a4','b09bc7','313e58','f53636','ffecaa','ff8f2b','c1e371','f5cb42','f6fa91','fa9891','ffbd38'];
    var j,radius,cC = 0;

	for (var y = 0; y < canvas.height; y+=5) {
		for (var x = 0; x < canvas.width; x+=5) {
			j = Math.floor(Math.random() * 200);
			if (j < 1) {
				radius = Math.random()*3;
				ctx.beginPath();
				ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
				ctx.lineWidth = 1;
				cC = Math.floor(Math.random() * starPalette.length);
				ctx.fillStyle = '#' + starPalette[cC];
				ctx.fill();
			}
		}
	}
}

export default bgGen;