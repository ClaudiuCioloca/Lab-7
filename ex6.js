var pos = 0;
var clicked = false;
var elem = document.getElementById("sponge"); 
var texti = document.getElementById("rectangle");
var button = document.getElementById("buton");

button.addEventListener('mousedown', testMove, false);
rectangle.addEventListener('mousedown',changeColor,false);

 function changeColor() {
        
		if (clicked)
		{
			rectangle.style.fill = "red";
			clicked =  false;
		}
		else
		{
			rectangle.style.fill = "green";
			clicked =  true;
		}
 }   
	
function testMove() {
	if (clicked)
	{
		pos = move(pos,elem);
	}
}
 function move(position,elem) {
	 if (position < 1024)
	 {		
			var i = position;
			position += 100;
			
			while (i<position)
			{
				elem.style.top = i + 'px'; 
				++i;
			}
			return position;
	 }
	 else
	 {
		 elem.style.top = '0px'; 
		 return 0;
	 }
}