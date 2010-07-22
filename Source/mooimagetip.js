/*
---
description: A plugin that displays image tooltips when you rollover links and thumbnails.

license: MIT-style

authors:
- Lorenzo Stanco

requires:
- core/1.2.1: '*'

provides: [MooImageTip]

...
*/

var MooImageTip = new Class({

	Implements: [Options, Events],

	options: {
		offset: {x: 16, y: 16},
		className: 'imagetip',
		tipId: 'mooimagetip',
		follow: true,
		fx: { }
	},

	initialize: function(options) {
		var $this = this;
		this.setOptions(options);
		$$('.' + $this.options.className).each(function (item) {
			$(item).addEvents({
				'mouseenter': function(e) {
					var title = $(item).getProperty('title');
					var image = $(item).getProperty('rel');
					if (!image) return;
					if (!title) title = "";
					if ($($this.options.tipId)) $($this.options.tipId).destroy();
					var tip = new Element('p', {'id': $this.options.tipId});
					new Element('img', {'src': image, 'alt': title, 'title': title}).inject(tip);
					if (title) {
						new Element('br').inject(tip);
						new Element('span', {'text': title}).inject(tip);
					}
					tip.setStyles({ 'position': 'absolute', 'left': e.page.x + $this.options.offset.x, 'top': e.page.y + $this.options.offset.y });
					tip.set('tween', $this.options.fx);
					tip.fade('hide').inject($(document.body), 'bottom').fade('in');
					$this.fireEvent('shown');
				},
				'mouseleave': function() {
					var tip = $($this.options.tipId);
					var tween = tip.get('tween');
					tween.start('opacity', 0).chain(function() {
						tip.destroy();
						$this.fireEvent('hide');
					});
					$this.fireEvent('hiding');
				},
				'mousemove': function(e) {
					if (!$this.options.follow) return;
					$($this.options.tipId).setStyles({'left': e.page.x + $this.options.offset.x, 'top': e.page.y + $this.options.offset.y});
					$this.fireEvent('moving');
				}
			});
		});
		return this;
	},

	getTipId: function() {
		return this.options.tipId;
	}
	
});
