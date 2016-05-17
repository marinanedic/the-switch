 $('button').on('click', function(e) {

 	var button = $('button').hasClass('on'); //creating a button for when light is off

 	if (button == true) { //if you turn off the light

 		$('button').removeClass('on'); //removing the on light
 		$('button').addClass('off'); //adding off light
 		$('body').addClass('dark'); //adding colour
 		$('.status').text('Hey, who turned out the lights?'); //adding text
	}

	else if ( button == false ) { //if light is turned on, making the  initual variable statement false

		$('button').removeClass('off'); //removing the off aspect
		$('button').addClass ('on'); //adding the tunr light on aspect
		$('body').removeClass('dark'); //removing the dark aspect
		$('body').addClass('light'); //adding the light
		$('.status').text('Its so bright in here!'); //adding suitable text
	} 

 });

 
