#!/usr/bin/node

// Radians in a circle
const radians = 2 * Math.PI / 360

// A node
function node(x, y, d, l, a) {

	// Position
	this.x1 = x;
	this.y1 = y;
	this.x2 = 0;
	this.y2 = 0;
	this.direction = d;
	this.length = l;
	this.angle = a

	// Debug
	this.print = function() {
		
		console.log(

			this.x1,
			this.y1
		)

		console.log(

			this.x2,
			this.y2
		)
	}

	// Grow this node
	this.grow = function() {

		// Trig
		this.x2 = this.x1 + (this.length * Math.cos(this.direction * radians))
		this.y2 = this.y1 + (this.length * Math.sin(this.direction * radians))

		console.log(

			this.x1,
			this.y1
		)

		console.log(

			this.x2,
			this.y2
		)
	}

	// Branch this node
	this.branch = function(sway) {

		// Direction is old direction plus a sway
		const direction = this.direction + (this.angle * sway)

		// Return new node
		var n = new node(this.x2, this.y2,
			direction, this.length * .5 + Math.random() * .4, this.angle * .7)

		// And grow it
		n.grow()

		return n
	}
}

// Create first node at the origin pointing upwards
nodes = []
nodes[nodes.length] = new node(0, 0, 90, 5, 30)
nodes[0].grow()

firstNode = 0

for (i = 0; i < 3; ++i) {

	totalNodes = nodes.length

	// Iterate over nodes adding new branches
	for (n = firstNode; n < totalNodes; ++n) {

		// Branch node
		nodes[nodes.length] = nodes[n].branch(1 + .2 * Math.random())
		nodes[nodes.length] = nodes[n].branch(0.1 * Math.random())
		nodes[nodes.length] = nodes[n].branch(-1 - .2 * Math.random())
	}

	firstNode = totalNodes
}

// Dump all points
// for (n = 0; n < nodes.length; ++n)
	// nodes[n].print()
