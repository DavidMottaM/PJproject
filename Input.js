class MouseInput {
	
	static x = 400;
	static y = 400;
	
	static updateMousePos(evt) {
		var rect = World.canvas.getBoundingClientRect();
		var root = document.documentElement;

		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;

	}
}