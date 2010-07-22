MooImageTip
===========

A MooTools plugin that displays image tooltips when you rollover links and thumbnails.

![Screenshot](http://github.com/lorenzos/MooImageTip/raw/master/Graphics/logo.png)


How to use
----------

JS sample:

	// Just create the object in the DOM ready event
	window.addEvent('domready', function() {
		var myImageTip = new MooImageTip();
	});
	
	// If you want to customize the tip, you can use some options
	window.addEvent('domready', function() {
		var myAdvancedImageTip = new MooImageTip({
			offset: {x: 4, y: 4},		// Offset relative to mouse position
			className: 'mylinks',		// This is the links class name
			tipId: 'mytip',				// This is the tip ID, for styling
			follow: false,				// Tip will not follow the mouse cursor
			fx: { duration: 'short' }	// Additional Fx options
		});
	});

HTML code:

	<div>
		Standard tip:
		<a href="#" class="imagetip" rel="image.jpg" title="Label">link</a>.
	</div>
	
	<div>
		Customized tip:
		<a href="#" class="mylinks" rel="image.jpg" title="Label">link</a>.
	</div>
	
CSS rules:
	
	/* Standard tip styling (default ID is "mooimagetip") */
	#mooimagetip {
		padding: 5px;
		background-color: #CCCCCC; }

	/* Customized tip styling (our ID is "mytip") */
	#mytip {
		padding: 5px;
		background-color: #CCCCFF;
	}


Docs
----------

Implements:

	Options, Events

Syntax and options:

	var myImageTip = new MooImageTip(options);
	
	options (object, optional): 
		Initial options for the class. Options are:
			offset: An object like {x: 16, y: 16} (default), that specify
				the distance of the tip from the mouse cursor.
			className: Class name of the links to parse (default "imagetip").
			tipId: ID for the tip element, for styling (default "mooimagetip").
			follow: If TRUE (default) tip will follow mouse cursor movements.
			fx: An object for additional Fx options (tip fade in/out).

Events:

	shown(me, tip): 
		Fires when the tip is shown. Me is the MooImageTip object,
		Tip is the created element.
	
	hide(me):
		Fires when mouse the tip is completely faded out.
		Me is the MooImageTip object.
	
	hiding(me, tip):
		Fires when tip is starting to hide. Me is the MooImageTip object,
		Tip is the tip element.

Methods:

	getTipId(): 
		Gets the tip element ID.
