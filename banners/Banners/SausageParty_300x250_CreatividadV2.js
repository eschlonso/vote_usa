(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fondo_300x250.jpg?1478029371888", id:"fondo_300x250"},
		{src:"images/FrameBgEnd.jpg?1478029371888", id:"FrameBgEnd"},
		{src:"images/tarima.png?1478029371888", id:"tarima"},
		{src:"images/thisNov9SausageParty.png?1478029371888", id:"thisNov9SausageParty"},
		{src:"images/VoteForBagel_bagelSammy.png?1478029371888", id:"VoteForBagel_bagelSammy"},
		{src:"images/VoteForChillary.png?1478029371888", id:"VoteForChillary"},
		{src:"images/VoteForHotDogBum_Brenda.png?1478029371888", id:"VoteForHotDogBum_Brenda"},
		{src:"images/VoteForLavasha.png?1478029371888", id:"VoteForLavasha"},
		{src:"images/VoteForMY.png?1478029371888", id:"VoteForMY"},
		{src:"images/VoteForSausage.png?1478029371888", id:"VoteForSausage"},
		{src:"images/VoteForTaco_teresa.png?1478029371888", id:"VoteForTaco_teresa"},
		{src:"images/VoteForTrumpkinpngcopy.png?1478029371888", id:"VoteForTrumpkinpngcopy"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.fondo_300x250 = function() {
	this.initialize(img.fondo_300x250);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.FrameBgEnd = function() {
	this.initialize(img.FrameBgEnd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.tarima = function() {
	this.initialize(img.tarima);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,98);


(lib.thisNov9SausageParty = function() {
	this.initialize(img.thisNov9SausageParty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.VoteForBagel_bagelSammy = function() {
	this.initialize(img.VoteForBagel_bagelSammy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,145,250);


(lib.VoteForChillary = function() {
	this.initialize(img.VoteForChillary);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,250);


(lib.VoteForHotDogBum_Brenda = function() {
	this.initialize(img.VoteForHotDogBum_Brenda);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,250);


(lib.VoteForLavasha = function() {
	this.initialize(img.VoteForLavasha);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.VoteForMY = function() {
	this.initialize(img.VoteForMY);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.VoteForSausage = function() {
	this.initialize(img.VoteForSausage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,250);


(lib.VoteForTaco_teresa = function() {
	this.initialize(img.VoteForTaco_teresa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,250);


(lib.VoteForTrumpkinpngcopy = function() {
	this.initialize(img.VoteForTrumpkinpngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,250);


(lib.VoteForTrumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForTrumpkinpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,250);


(lib.VoteForTaco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForTaco_teresa();
	this.instance.setTransform(-30.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.5,0,170,250);


(lib.VoteForSausage_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForSausage();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,250);


(lib.VoteForMY_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForMY();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.VoteForLavash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForLavasha();
	this.instance.setTransform(-26,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-6,300,250);


(lib.VoteForHotDogBum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForHotDogBum_Brenda();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,250);


(lib.VoteForChillary_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForChillary();
	this.instance.setTransform(1,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-4,111,250);


(lib.VoteForBagel_bagelSammy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForBagel_bagelSammy();
	this.instance.setTransform(-18,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-10,145,250);


(lib.Txt_VoteForVoteForHotDogBum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD2B3IgGgQIgiAAIgGAQIgZAAIAjhcIAaAAIAjBcgADVBVIAUAAIgKgdgABXB3IAAhcIAjAAQATAAANAOQAHAHAEAIQADAIAAAJQAAATgOANQgGAHgIAEQgIADgKAAgABvBjIAGAAQAFAAAFgCQAFgCAEgDQAHgHAAgMQAAgFgCgFQgCgFgDgDIgFgFIgGgCIgOgBgAAsB3Igsg4IAAA4IgXAAIAAhcIAXAAIAsA4IAAg4IAYAAIAABcgAhaB3IAAhcIA1AAIAAAUIgdAAIAAAQIAbAAIAAAUIgbAAIAAAQIAdAAIAAAUgAiCB3IgXgjIAAAjIgYAAIAAhcIAmAAQANAAAJAHQAEAEACAGQACAFAAAHIgBAJQgBAEgDADQgFAHgKACIAdAmgAiZBEIAFAAQAGAAAEgCQAFgDAAgGQAAgHgFgCIgJgDIgGAAgAkGB3IAAhcIAkAAQAGAAAFABQAFACADADQAHAGAAANQAAAGgDAEQgCAFgGADQAKACAFAFQACADABAEIABAJQAAAGgCAFQgCAFgEADQgJAHgOAAgAjuBlIAFAAQAJAAAEgDQAEgCAAgFQAAgGgEgCQgDgCgKAAIgFAAgAjuA/IAEAAIAIgCQAEgCAAgFQAAgFgEgCQgDgCgFAAIgEAAgAkSh1IALAAIAZBEIAahEIALAAIglBfgACCgnQgHgHgDgIQgEgIAAgKQAAgJAEgJQADgIAHgHQAOgNATAAQATAAAOANQAHAHADAIQAEAJAAAJQAAAUgOANQgOANgTAAQgTAAgOgNgACJhiQgLALAAAPQAAAIADAGQADAHAFAFQALALAPAAQAPAAALgLQALgLAAgPQAAgIgDgGQgDgHgFgFQgLgLgPAAQgQAAgKALgAi2gnQgHgHgEgIQgDgIAAgKQAAgJADgJQAEgIAHgHQANgNATAAQAUAAANANQAHAHAEAIQADAJAAAJQAAAUgOANQgNANgUAAQgTAAgNgNgAiwhiQgKALAAAPQAAAIACAGQADAHAFAFQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgGQgDgHgFgFQgLgLgQAAQgPAAgLALgAEHgbIgbgoIgDAAIAAAoIgKAAIAAhaIANAAQANAAAKAFQAKAFAAAPQAAAFgCAEQgBAFgDADQgGAHgKABIAcAogADphLIAEAAIAIgBIAHgCQAHgDAAgKQAAgGgCgDQgBgEgEgBIgHgCIgJgBIgDAAgABAgbIAAhaIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAtgAgigbIAAhaIAtAAIAAAJIgjAAIAAAbIAiAAIAAAJIgiAAIAAAjIAjAAIAAAKgAhLgbIAAhRIgWAAIAAgJIA1AAIAAAJIgVAAIAABRg");
	this.shape.setTransform(841.3,162);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(774.1,150,134.4,34.3);


(lib.Txt_VoteForTRumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AigB4IgJgDQgJgEgEgGQgFgFgBgGQgBgHAAgKIAAg1IAYAAIAAA7IABAFIABABIAAABQADAEADACQADABAEAAQAGAAADgCQAEgCABgDIABgBIAAgBIACgFIAAg7IAYAAIAAA1QAAAKgBAGQgCAGgEAFIgCACIgGAFIgIAEQgHADgLAAIgKAAgAFHB2Igtg4IAAA4IgYAAIAAhcIAYAAIAtA4IAAg4IAXAAIAABcgADXB2IAAhcIAYAAIAABcgACuB2IgggoIAAAoIgYAAIAAhcIAYAAIAAAmIAdgmIAeAAIgkAsIAnAwgAAjB2IAAhcIAmAAQAPAAAJAIQAEADADAGQABAGAAAHQABAQgJAIQgIAIgOAAIgQAAIAAAegAA7BEIAIAAQAHAAAEgDQACgCAAgGQABgGgEgDQgDgDgGAAIgJAAgAgBB2IgIg1IgWA1IgJAAIgWg1IgIA1IgXAAIAPhcIAYAAIASAxIAUgxIAXAAIAOBcgAjlB2IgXgjIAAAjIgYAAIAAhcIAmAAQANAAAJAHQAEAEACAGQACAFAAAHIgBAJQgCAEgCADQgGAHgJACIAdAmgAj8BDIAFAAQAFAAAFgCQAFgDgBgGQABgHgFgCIgJgDIgGAAgAlKB2IAAhIIgUAAIAAgUIBAAAIAAAUIgUAAIAABIgAkOh2IALAAIAaBEIAZhEIALAAIgkBfgACHgoQgHgHgEgIQgDgIAAgKQAAgJADgJQAEgIAHgHQANgNAUAAQATAAAOANQAGAHAEAIQADAJAAAJQABAUgOANQgOANgTAAQgUAAgNgNgACOhjQgLALAAAPQAAAIACAGQAEAHAFAFQALALAPAAQAPAAALgLQALgLgBgPQAAgIgCgGQgDgHgFgFQgLgLgPAAQgQAAgKALgAiygoQgGgHgEgIQgEgIABgKQgBgJAEgJQAEgIAGgHQAOgNATAAQAUAAANANQAHAHAEAIQADAJAAAJQAAAUgOANQgNANgUAAQgTAAgOgNgAirhjQgKALAAAPQgBAIADAGQADAHAFAFQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgGQgDgHgFgFQgLgLgQAAQgQAAgKALgAELgcIgbgoIgCAAIAAAoIgKAAIAAhaIANAAQAMAAALAFQAKAFAAAPQAAAFgCAEQgCAFgDADQgFAHgLABIAdAogADuhMIADAAIAIgBIAIgCQAHgDAAgKQAAgGgCgDQgBgEgEgBIgIgCIgIgBIgDAAgABFgcIAAhaIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAtgAgdgcIAAhaIAsAAIAAAJIgiAAIAAAbIAiAAIAAAJIgiAAIAAAjIAiAAIAAAKgAhHgcIAAhRIgVAAIAAgJIA1AAIAAAJIgWAAIAABRg");
	this.shape.setTransform(840.8,162.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(774.1,150,134.4,34.3);


(lib.Txt_VoteForTaco = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMB2QgJgDgHgFIAKgTIAHAFIAHADIAHABQAGAAADgCQADgDAAgEQAAgEgEgCIgIgEIgIgCQgHgCgGgGQgGgFAAgLQAAgOAIgJQAFgEAFgCQAGgCAHAAIAFAAIAPADIAJAEIgJATIgIgFQgEgBgEAAQgEAAgDACQgDACAAAEQAAADADACIAIADIAIADQAIADAGAFQADADABAEQACAEAAAFIgCANIgCAEQgDAIgJAEQgJAEgKAAQgJAAgIgCgADNB2IgGgQIgiAAIgGAQIgZAAIAjhcIAaAAIAjBcgACsBUIAUAAIgKgdgAgCB2IAAhcIAzAAIAAAUIgdAAIAAAQIAbAAIAAAUIgbAAIAAAQIAdAAIAAAUgAgqB2IgXgjIAAAjIgYAAIAAhcIAmAAQANAAAJAHQAEAEACAGQACAFAAAHIgBAJQgBAEgDADQgFAHgKACIAdAmgAhBBDIAFAAQAGAAAEgCQAFgDAAgGQAAgHgFgCIgJgDIgGAAgAidB2IAAhcIA1AAIAAAUIgdAAIAAAQIAbAAIAAAUIgbAAIAAAQIAdAAIAAAUgAjTB2IAAhIIgTAAIAAgUIA/AAIAAAUIgUAAIAABIgAkSh2IALAAIAZBEIAahEIALAAIglBfgACCgoQgHgHgDgIQgEgIAAgKQAAgJAEgJQADgIAHgHQAOgNATAAQATAAAOANQAHAHADAIQAEAJAAAJQAAAUgOANQgOANgTAAQgTAAgOgNgACJhjQgLALAAAPQAAAIADAGQADAHAFAFQALALAPAAQAPAAALgLQALgLAAgPQAAgIgDgGQgDgHgFgFQgLgLgPAAQgQAAgKALgAi2goQgHgHgEgIQgDgIAAgKQAAgJADgJQAEgIAHgHQANgNATAAQAUAAANANQAHAHAEAIQADAJAAAJQAAAUgOANQgNANgUAAQgTAAgNgNgAiwhjQgKALAAAPQAAAIACAGQADAHAFAFQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgGQgDgHgFgFQgLgLgQAAQgPAAgLALgAEHgcIgbgoIgDAAIAAAoIgKAAIAAhaIANAAQANAAAKAFQAKAFAAAPQAAAFgCAEQgBAFgDADQgGAHgKABIAcAogADphMIAEAAIAIgBIAHgCQAHgDAAgKQAAgGgCgDQgBgEgEgBIgHgCIgJgBIgDAAgABAgcIAAhaIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAtgAgigcIAAhaIAtAAIAAAJIgjAAIAAAbIAiAAIAAAJIgiAAIAAAjIAjAAIAAAKgAhLgcIAAhRIgWAAIAAgJIA1AAIAAAJIgVAAIAABRg");
	this.shape.setTransform(841.3,162.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(813.7,150,55.1,24.2);


(lib.Txt_VoteForSausage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADFB3IgfgoIAAAoIgYAAIAAhcIAYAAIAAAmIAdgmIAeAAIglAsIAoAwgABjB3Igtg4IAAA4IgYAAIAAhcIAYAAIAtA4IAAg4IAYAAIAABcgAgEB3IgGgQIghAAIgGAQIgaAAIAkhcIAaAAIAhBcgAgQBVIgKgdIgKAdIAUAAgAhqB3IgXgjIAAAjIgYAAIAAhcIAmAAQANAAAJAHQAEAEACAGQACAFAAAHIgBAJQgBAEgDADQgFAHgKACIAdAmgAiBBEIAFAAQAGAAAEgCQAFgDAAgGQAAgHgFgCIgJgDIgGAAgAjcB3IAAhcIA1AAIAAAUIgdAAIAAAQIAbAAIAAAUIgbAAIAAAkgAkSh1IALAAIAZBEIAahEIALAAIglBfgACCgnQgHgHgDgIQgEgIAAgKQAAgJAEgJQADgIAHgHQAOgNATAAQATAAAOANQAHAHADAIQAEAJAAAJQAAAUgOANQgOANgTAAQgTAAgOgNgACJhiQgLALAAAPQAAAIADAGQADAHAFAFQALALAPAAQAPAAALgLQALgLAAgPQAAgIgDgGQgDgHgFgFQgLgLgPAAQgQAAgKALgAi2gnQgHgHgEgIQgDgIAAgKQAAgJADgJQAEgIAHgHQANgNATAAQAUAAANANQAHAHAEAIQADAJAAAJQAAAUgOANQgNANgUAAQgTAAgNgNgAiwhiQgKALAAAPQAAAIACAGQADAHAFAFQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgGQgDgHgFgFQgLgLgQAAQgPAAgLALgAEHgbIgbgoIgDAAIAAAoIgKAAIAAhaIANAAQANAAAKAFQAKAFAAAPQAAAFgCAEQgBAFgDADQgGAHgKABIAcAogADphLIAEAAIAIgBIAHgCQAHgDAAgKQAAgGgCgDQgBgEgEgBIgHgCIgJgBIgDAAgABAgbIAAhaIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAtgAgigbIAAhaIAtAAIAAAJIgjAAIAAAbIAiAAIAAAJIgiAAIAAAjIAjAAIAAAKgAhLgbIAAhRIgWAAIAAgJIA1AAIAAAJIgVAAIAABRg");
	this.shape.setTransform(841.3,162);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(774.1,150,134.4,34.3);


(lib.Txt_VoteForChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkpBrQgIgIgDgIQgEgJAAgKQAAgKAEgJQADgIAIgIQAOgOAWABIAJABIAKADIAAAdQgEgFgFgCQgFgDgFAAQgMAAgGAHQgIAGAAALQAAAMAHAHQAHAHAMAAQAFAAAFgCQAFgDAEgEIAAAcIgLADIgJACQgWAAgNgOgAD+B2IAAgtIghgwIAdAAIARAaIARgaIAdAAIgjAwIAAAtgADAB2IgXgkIAAAkIgYAAIAAhdIAlAAQAOABAJAHQAEAEACAGQACAFAAAHIgBAIQgCAFgCADQgGAHgJACIAdAmgACpBDIAFAAQAFgBAFgCQAEgCAAgHQAAgGgEgCIgJgDIgGAAgABtB2IgFgQIgiAAIgGAQIgaAAIAkhdIAaAAIAjBdgABhBTIgKgdIgKAdIAUAAgAgQB2IAAhdIAWAAIAABIIAdAAIAAAVgAhRB2IAAhdIAYAAIAABIIAdAAIAAAVgAh9B2IAAhdIAZAAIAABdgAioB2IAAgmIgjAAIAAAmIgXAAIAAhdIAXAAIAAAlIAjAAIAAglIAYAAIAABdgAkWh2IALAAIAaBEIAZhEIALAAIgkBfgAB/gpQgHgGgEgIQgDgIAAgKQAAgJADgJQAEgIAHgHQANgNAUAAQATAAAOANQAGAHAEAIQADAJAAAJQABATgOANQgOAOgTAAQgUAAgNgOgACFhjQgKALAAAPQAAAHACAHQAEAGAEAGQAMALAPAAQAPAAALgLQALgLgBgPQAAgIgCgHQgDgGgFgFQgLgLgPAAQgQAAgLALgAi6gpQgGgGgEgIQgEgIABgKQgBgJAEgJQAEgIAGgHQAOgNATAAQAUAAANANQAHAHAEAIQADAJAAAJQAAATgOANQgNAOgUAAQgTAAgOgOgAizhjQgKALAAAPQgBAHADAHQADAGAFAGQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgHQgDgGgFgFQgLgLgQAAQgQAAgKALgAEDgcIgbgoIgCAAIAAAoIgKAAIAAhaIANAAQAMAAALAFQAKAEAAAQQAAAFgCAEQgCAEgDAEQgFAGgLABIAdApgADmhNIADAAIAIAAIAIgDQAHgCAAgKQAAgGgCgDQgBgEgEgBIgIgCIgIgBIgDAAgAA9gcIAAhaIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAtgAglgcIAAhaIAsAAIAAAJIgiAAIAAAbIAiAAIAAAJIgiAAIAAAjIAiAAIAAAKgAhPgcIAAhRIgVAAIAAgJIA1AAIAAAJIgWAAIAABRg");
	this.shape.setTransform(841.6,162.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(774.1,150,134.4,34.3);


(lib.Txt_VoteForBagel_bagel_Sammy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACpBrQgIgHgCgJQgEgJAAgKQAAgLAEgJQADgJAHgHQANgOAWAAQAIAAAHACQAGACAFADQAFADAFAFIAHALIgXAKQgDgIgFgDQgFgEgHAAQgFAAgEACQgEACgEAEQgHAJAAAMQAAAGACAGQABAFAEAEQAEAEAEACQAFACAFAAIAHgBIAGgDQAFgEABgIIgUAAIAAgTIAwAAIgCAUQgCAIgEAGIAAABIgBABQgGAKgLAEQgJAFgPAAQgUAAgNgOgAIxB0QgFgEAAgGIABgGQABgCADgCQADgEAHAAQAFAAAFAEIADAEIABAGQAAAGgEAEQgFAEgFAAQgHAAgDgEgAG3B1QgFgDgFgHIAQgRQAAAFACACQADADADAAQADAAABgDQACgDAAgFIAAhAIAYAAIAABAIAAALIgEAHIgDAEQgFAEgGADQgFACgHAAQgHAAgHgDgAo4B1QgIgCgIgFIAKgUIAHAGIAIADIAHABQAFAAADgDQADgCAAgEQAAgEgDgCIgJgEIgHgDQgIgCgGgFQgGgFAAgMQAAgOAJgIQAEgFAGgCQAFgCAHAAIAGAAIAOAEIAJAEIgJASIgIgEQgDgCgEAAQgFAAgDACQgDADAAADQAAAEADABIAIAEIAJADQAHACAGAFQADADACAEQACAEAAAGIgCAMIgDAFQgDAHgIAFQgKAEgJAAQgKAAgIgDgAH0B2IAAg/IAWAAIAAAKQAEgGAFgCQAFgDAHAAIAEAAIAAAVIgCgBIgFgBIgCAAIgHABQgDABgCADQgEAEAAAJIAAAbgAFOB2IAAhdIAYAAIAABIIAdAAIAAAVgAELB2IAAhdIA1AAIAAAVIgdAAIAAAPIAbAAIAAAUIgbAAIAAAQIAdAAIAAAVgAB7B2IgGgQIghAAIgGAQIgaAAIAjhdIAbAAIAjBdgABaBTIAVAAIgLgdgAgXB2IAAhdIAiAAQAGAAAGACQAEABAEAEQAGAGAAAMQAAAHgDAEQgCAEgGADQAKACAFAGQADACAAAEIABAJQAAAGgCAFQgCAFgEAEQgJAHgOAAgAAABjIAFAAQAIAAAEgCQAEgCABgGQgBgFgEgCQgDgCgKAAIgEAAgAAAA+IAEAAIAIgCQADgCAAgFQAAgFgDgCQgEgCgEAAIgEAAgAh/B2IAAgtIgigwIAdAAIARAaIARgaIAdAAIgiAwIAAAtgAi8B2IgHg1IgWA1IgKAAIgVg1IgIA1IgYAAIAQhdIAXAAIATAyIAUgyIAYAAIAOBdgAk7B2IgHg1IgWA1IgKAAIgVg1IgIA1IgYAAIAQhdIAXAAIATAyIAUgyIAYAAIAOBdgAm3B2IgGgQIghAAIgHAQIgZAAIAjhdIAaAAIAjBdgAnXBTIAUAAIgKgdgAkOh2IALAAIAaBEIAZhEIALAAIgkBfgACHgpQgHgGgEgIQgDgJAAgJQAAgKADgIQAEgIAHgHQANgOAUAAQATAAAOAOQAGAHAEAIQADAIAAAKQABATgOANQgOAOgTAAQgUAAgNgOgACOhkQgLALAAAQQAAAHACAHQAEAGAFAGQALALAPAAQAPAAALgLQALgLgBgPQAAgIgCgHQgDgGgFgGQgLgLgPAAQgQABgKAKgAiygpQgGgGgEgIQgEgJABgJQgBgKAEgIQAEgIAGgHQAOgOATAAQAUAAANAOQAHAHAEAIQADAIAAAKQAAATgOANQgNAOgUAAQgTAAgOgOgAirhkQgKALAAAQQgBAHADAHQADAGAFAGQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgHQgEgGgEgGQgLgLgQAAQgQABgKAKgAELgdIgbgnIgCAAIAAAnIgKAAIAAhZIANAAQAMAAALAFQAKAEAAAQQAAAFgCAEQgCAEgDAEQgFAGgLABIAdAogADuhNIADAAIAIAAIAIgDQAHgCAAgLQAAgFgCgEQgBgDgEgBIgIgCIgIgBIgDAAgABFgdIAAhZIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAsgAgdgdIAAhZIAsAAIAAAJIgiAAIAAAbIAiAAIAAAJIgiAAIAAAjIAiAAIAAAJgAhHgdIAAhQIgVAAIAAgJIA1AAIAAAJIgWAAIAABQg");
	this.shape.setTransform(840.8,162.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(782.3,150,117.1,24.3);


(lib.txt_ThankForVoting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAtQgGgFAAgGQAAgHAGgEQAFgEAGAAQAHAAAFAEQAGAEAAAHQAAAGgGAFQgFAEgHAAQgGAAgFgEgAgOALIAAg7IAdAAIAAA7g");
	this.shape.setTransform(61.6,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAuIAAhbIA8AAIAAAZIgdAAIAAAJIAbAAIAAAWIgbAAIAAAKIAeAAIAAAZg");
	this.shape_1.setTransform(56.2,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAtQgJgDgHgHQgHgIgEgIQgDgIAAgLQAAgJADgJQAEgJAHgGQAHgHAJgDQAJgEAJAAQANAAAMAGQALAGAHANIgeALQgCgEgEgCQgEgCgDAAQgFAAgFAGQgEAFAAAIQAAAKAEAFQAEAFAHAAQAFAAADgCQACgBABgEIgMAAIAAgUIAxAAIAAAEIAAADQAAAGgBAGQgCAHgDAFQgHAMgLAGQgLAGgOAAQgKAAgIgDg");
	this.shape_2.setTransform(47.5,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAuIgDgMIgYAAIgCAMIgkAAIAhhbIAkAAIAgBbgAAAgJIgGAVIAMAAIgFgVIgBgIIAAAAg");
	this.shape_3.setTransform(38.1,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAuQgKgCgJgGIALgaIANAHQAGADAEAAQADAAABgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgIgCIgFgBQgKgCgGgHQgGgFAAgJQAAgPALgKQALgJAPAAQAHAAAJACIAQAGIgLAZIgJgGIgKgCQgDAAgCACQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAEAOADIADABQAKABAFAHQAGAEAAAKQAAAQgLAKQgLAJgQAAQgLAAgHgCg");
	this.shape_4.setTransform(29.8,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUArQgJgFgHgJQgCgDgCgIQgBgFAAgLIAAgwIAhAAIAAAwQAAAIACAFQACADAEAAQAFAAACgDQACgEAAgJIAAgwIAhAAIgBBAQgBAHgDAEQgGAJgJAFQgKAEgMAAQgLAAgJgEg");
	this.shape_5.setTransform(21.5,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAkAAIAgBbgAAAgJIgFAVIALAAIgFgVIgBgIIAAAAg");
	this.shape_6.setTransform(12.6,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAuQgKgCgJgGIALgaIANAHQAGADAEAAQADAAABgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgIgCIgFgBQgKgCgGgHQgGgFAAgJQAAgPALgKQALgJAPAAQAHAAAJACIAQAGIgLAZIgJgGIgKgCQgDAAgCACQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAEAOADIADABQAKABAFAHQAGAEAAAKQAAAQgLAKQgLAJgQAAQgLAAgHgCg");
	this.shape_7.setTransform(4.3,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAAKgFAFQgFAGgIABIAZAmgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_8.setTransform(77.3,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgEgIQgDgLAAgIQAAgIADgJQAEgKAHgGQAIgIAIgCQAKgEAIAAQAKAAAJAEQAKADAGAHQAHAHAEAJQADAHAAAKQAAAKgDAJQgEAIgHAHQgIAIgIADQgJADgKAAQgJAAgJgDgAgKgLQgEAFAAAGQAAAIAEAEQAFAFAFAAQAHAAAEgFQAEgEAAgIQAAgGgEgFQgEgFgHAAQgFAAgFAFg");
	this.shape_9.setTransform(67.2,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAuIAAhbIA8AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_10.setTransform(59,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAtQgIgDgIgHQgHgHgEgJQgDgKAAgJQAAgHADgLQAEgJAHgGQAIgIAIgCQAJgEAJAAQANAAAMAGQAKAGAIANIgeALQgCgEgDgCIgIgCQgFAAgFAGQgEAFAAAIQAAAKAEAFQAEAFAHAAQAFAAADgCQACgBABgEIgMAAIAAgUIAxAAIAAAHQAAAGgBAGQgCAHgDAFQgGALgMAHQgLAGgOAAQgKAAgIgDg");
	this.shape_11.setTransform(46.5,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AANAuIgbguIABAEIAAAqIggAAIAAhbIAhAAIAbAvIgBgvIAgAAIAABbg");
	this.shape_12.setTransform(36.2,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPAuIAAhbIAgAAIAABbg");
	this.shape_13.setTransform(28.7,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_14.setTransform(23,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgDgIQgEgKAAgJQAAgIAEgJQADgKAHgGQAHgHAJgDQAKgEAIAAQAKAAAJAEQAKADAGAHQAHAHAEAJQADAHAAAKQAAAKgDAJQgEAIgHAHQgIAHgIAEQgJADgKAAQgJAAgJgDgAgKgLQgEAFAAAGQAAAIAEAEQAFAFAFAAQAHAAAEgFQAEgEAAgIQAAgGgEgFQgEgFgHAAQgFAAgFAFg");
	this.shape_15.setTransform(14.4,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAuIgkhbIAlAAIANAtIAAAJIAAAAIAPg2IAjAAIgjBbg");
	this.shape_16.setTransform(5.1,17.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAAKgFAFQgFAGgIABIAZAmgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_17.setTransform(79,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgDgIQgEgKAAgJQAAgIAEgJQADgKAHgGQAIgIAIgCQAKgEAIAAQAKAAAJAEQAKADAGAHQAHAHAEAJQADAIAAAJQAAAKgDAJQgEAIgHAHQgIAIgIADQgJADgKAAQgJAAgJgDgAgKgLQgEAFAAAGQAAAIAEAEQAFAFAFAAQAHAAAEgFQAEgEAAgIQAAgGgEgFQgEgFgHAAQgFAAgFAFg");
	this.shape_18.setTransform(69,4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAuIAAhbIA7AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_19.setTransform(60.8,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAuQgJgCgJgGIALgaIANAHQAGADAEAAQADAAABgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgIgCIgFgBQgLgDgFgGQgGgFAAgJQAAgPALgKQALgJAPAAQAHAAAJACQAFABAKAFIgKAZIgJgGIgKgCQgDAAgCACQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAEAOADIADABQAKABAFAHQAGAEAAAKQAAAQgLAKQgLAJgQAAQgLAAgIgCg");
	this.shape_20.setTransform(49.5,4.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAHAuIgUgnIAAAnIghAAIAAhbIAhAAIAAAoIATgoIAlAAIgcAtIAhAug");
	this.shape_21.setTransform(42.1,4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AANAuIgaguIAAAuIggAAIAAhbIAhAAIAbAvIgBgFIAAgqIAgAAIAABbg");
	this.shape_22.setTransform(31.6,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgJIgFAVIALAAIgGgVIAAgIIAAAAg");
	this.shape_23.setTransform(21.9,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAKAuIAAghIgTAAIAAAhIghAAIAAhbIAhAAIAAAfIATAAIAAgfIAhAAIAABbg");
	this.shape_24.setTransform(12.5,4.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_25.setTransform(4.2,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.4,35.4);


(lib.txt_Sausage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thisNov9SausageParty();
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,300,250);


(lib.Izq_Tarima_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tarima();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,98);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAxIAAgqIgZg3IAcAAIAIAfIAJgfIAcAAIgYA3IAAAqg");
	this.shape.setTransform(193.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAqQgMgJAAgSIAAg/IAbAAIAAA9QAAAGABADQACADACAAQAEAAABgDQABgBAAgIIAAg9IAbAAIAABDQAAAIgDAFQgCAGgHAEQgIAHgMAAQgNgBgIgGg");
	this.shape_1.setTransform(186.3,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAxIAAhhIAfAAQAPABAJAHQAIAIAAAMQAAATgSABQALAAAEAFQAFAFAAALQAAAMgIAIQgIAHgOABgAgFAcIACAAQADAAADgDQADgDAAgEQAAgEgDgDQgDgDgDAAIgCAAgAgFgKIABAAQAEAAACgCQADgCAAgFQAAgIgIAAIgCAAg");
	this.shape_2.setTransform(179.1,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAxIAAgnIgLAAIAAAnIgaAAIAAhhIAaAAIAAAkIALAAIAAgkIAaAAIAABhg");
	this.shape_3.setTransform(129.9,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAlQgMgMAAgZQAAgUALgOQAMgOASAAQAGABAHACIAAAbQgGgGgGAAQgIAAgFAHQgCAHAAAKIAAALQAAAFACADQACADADABQAEACADAAQAHABAHgHIgBAbQgJADgHAAQgPAAgLgMg");
	this.shape_4.setTransform(123.1,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAxIAAhJIgPAAIAAgYIA3AAIAAAYIgQAAIAABJg");
	this.shape_5.setTransform(117.6,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAxIgCgMIgQAAIgCAMIgcAAIAYhhIAeAAIAVBhgAAAgMIAAACIgEAZIAKAAIgCgKIAAgCIgCgNIgBgNg");
	this.shape_6.setTransform(111.5,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJAxIgJgyIAAgKIgHA8IgYAAIgWhhIAaAAIAJA8IAAgHIAIg1IAUAAIAFAZIAFAkIAIg9IAaAAIgUBhg");
	this.shape_7.setTransform(102.7,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A3bB7IAAj1MAu2AAAIAAD1g");
	this.shape_8.setTransform(150,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,24.7);


(lib.FondoResultado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FrameBgEnd();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Der_Tarima_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tarima();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,98);


(lib.VoteAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAQA4Ighg4IABAGIAAAyIgnAAIAAhvIAnAAIAiA5IgBg5IAoAAIAABvg");
	this.shape.setTransform(51.1,101.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTA4IAAhvIAnAAIAABvg");
	this.shape_1.setTransform(41.9,101.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AASA4IgDgNIgdAAIgEANIgsAAIAphvIAsAAIAoBvgAAAgLIgHAaIAPAAIgDgNIgEgNIgBgKIAAAAg");
	this.shape_2.setTransform(33.6,101.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA3QgLgEgJgJQgHgIgFgLQgFgLAAgMQAAgLAFgMQAFgLAHgHQAKgJAKgFQAMgEALAAQARABAOAHQAOAIAIAOIglAOQgDgFgEgCQgEgDgFABQgHgBgGAIQgFAGAAALQAAAMAFAGQAGAHAIAAQAGAAAEgDQAEgCAAgFIgQAAIAAgZIA9AAIABAGIAAACQAAAKgCAGQgCAJgEAGQgJAPgNAHQgPAIgQAAQgLABgMgFg");
	this.shape_3.setTransform(21.9,101.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA4IgDgNIgdAAIgEANIgsAAIAphvIAsAAIAoBvgAAAgLIgHAaIAPAAIgHgaIgBgKIAAAAg");
	this.shape_4.setTransform(10.3,101.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA4IAAhvIBKAAIAAAeIgkAAIAAALIAhAAIAAAcIghAAIAAAMIAlAAIAAAeg");
	this.shape_5.setTransform(-3.9,101.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTA4IAAhKIgXAAIAAglIBVAAIAAAlIgXAAIAABKg");
	this.shape_6.setTransform(-12.6,101.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA3QgLgEgIgJQgIgIgFgLQgFgLAAgMQAAgLAFgMQAFgLAIgHQAIgJALgFQAMgEALAAQAMAAALAEQAMAFAIAJQAJAIAEALQAFAKAAAMQAAAMgFAKQgEALgJAJQgJAJgLAEQgLAFgMgBQgLABgMgFgAgNgOQgFAFAAAJQAAAJAFAGQAGAGAHAAQAIAAAFgGQAGgHAAgIQAAgIgGgGQgFgHgIAAQgHAAgGAHg");
	this.shape_7.setTransform(-23.2,101.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSA4IgrhvIAsAAIAQA3IABALIAAAAIACgLIAQg3IAsAAIgrBvg");
	this.shape_8.setTransform(-34.6,101.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D62027").s().p("AJ0CeIzuAAQguAAgigvQghguAAhBQAAhAAhgvQAggtAtgBIT8AAQAtABAfAtQAhAvAABAQAABCghAtQghAvguAAIgIAAg");
	this.shape_9.setTransform(8,101.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,85.7,149.6,31.7);


(lib.SeeResults = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXA4QgMgDgLgGIAOghQAJAHAGACQAIAEAFAAQAEAAABgDQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgEgKgDIgGgBQgOgEgFgHQgIgHAAgLQAAgSAOgMQAMgMAUAAQAMABAIACQAKADAJAEIgNAeQgFgEgHgCQgGgDgFAAQgEAAgDACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAFARADIAEABQAMAEAHAHQAGAHABALQAAATgOANQgNALgVAAQgJABgNgEg");
	this.shape.setTransform(51.6,101.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTA4IAAhKIgXAAIAAglIBVAAIAAAlIgXAAIAABKg");
	this.shape_1.setTransform(43.1,101.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA4IAAhvIAnAAIAABKIAoAAIAAAlg");
	this.shape_2.setTransform(35.6,101.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA0QgLgFgHgLQgEgFgBgIQgCgKAAgKIAAg8IApAAIAAA8QAAAMADADQACAEAFAAQAGAAACgEQADgEAAgLIAAg8IApAAIAAA8QAAAMgCAIQgBAIgEAFQgHALgLAFQgMAGgPAAQgOAAgMgGg");
	this.shape_3.setTransform(24.9,101.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA4QgMgDgLgGIAOghQAJAHAGACQAHAEAGAAQAEAAABgDQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgEgKgDIgGgBQgOgEgFgHQgIgHABgLQAAgSANgMQAMgMAUAAQAMABAIACQAKADAJAEIgNAeQgFgEgGgCQgHgDgFAAQgEAAgCACQgBAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAFARADIAFABQAMAEAGAHQAHAHAAALQAAATgOANQgNALgVAAQgJABgNgEg");
	this.shape_4.setTransform(14.5,101.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglA4IAAhvIBKAAIAAAeIgkAAIAAALIAhAAIAAAcIghAAIAAAMIAlAAIAAAeg");
	this.shape_5.setTransform(6.1,101.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAHA4IgSglIAAAlIgpAAIAAhvIA0AAQAWgBAKALQAMAJAAATQAAAMgGAGQgGAIgKABIAfAugAgLgEIAGAAQAFAAACgDQADgDAAgFQAAgGgDgCQgCgDgFAAIgGAAg");
	this.shape_6.setTransform(-3.1,101.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglA4IAAhvIBKAAIAAAeIgkAAIAAALIAhAAIAAAcIghAAIAAAMIAlAAIAAAeg");
	this.shape_7.setTransform(-17.8,101.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglA4IAAhvIBKAAIAAAeIgkAAIAAALIAhAAIAAAcIghAAIAAAMIAlAAIAAAeg");
	this.shape_8.setTransform(-26.5,101.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXA4QgMgDgLgGIANghIAQAJQAHAEAGAAQAEAAABgDQAAAAABAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAgEgKgDIgGgBQgOgEgGgHQgGgGAAgMQAAgTANgLQANgMATAAQAMABAIACQAKADAJAEIgNAeQgEgEgHgCQgHgDgFAAQgEAAgDACQAAAAgBABQAAAAgBABQAAAAAAABQAAAAAAABQAAAFARADIAEABQAMAEAHAHQAHAHAAALQAAATgOANQgOALgUAAQgJABgNgEg");
	this.shape_9.setTransform(-35.6,101.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D62027").s().p("AJ0CeIzuAAQguAAgigvQghguAAhBQAAhAAhgvQAggtAtgBIT8AAQAtABAfAtQAhAvAABAQAABCghAtQghAvguAAIgIAAg");
	this.shape_10.setTransform(8,101.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.8,85.7,149.6,31.7);


(lib.btn_watch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArsB4IAAjvIXZAAIAADvg");
	this.shape.setTransform(-22.8,4.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.btn_buy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArsB4IAAjvIXZAAIAADvg");
	this.shape.setTransform(43.2,4.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.boton_Izq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00671A").ss(1,1,1).p("AqoCSIVRAAIAAkjI1RAAg");
	this.shape.setTransform(166.8,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D591C").s().p("AqoCSIAAkjIVRAAIAAEjg");
	this.shape_1.setTransform(166.8,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.boton_Der = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00671A").ss(1,1,1).p("AqoCSIVRAAIAAkjI1RAAg");
	this.shape.setTransform(224.5,318.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D591C").s().p("AqoCSIAAkjIVRAAIAAEjg");
	this.shape_1.setTransform(224.5,318.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.img_voteN1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VoteForMY_1();
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._10_LavashVsChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(193));

	// txt_VoteForChillary
	this.instance = new lib.Txt_VoteForChillary();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},2).to({_off:true},21).wait(192));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},24).wait(192));

	// img_VoteForChillary
	this.instance_2 = new lib.VoteForChillary_1();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},21).wait(192));

	// txt_VoteForVoteForHotDogBum
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForBagel_bagel_Sammy();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(192));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(192));

	// img_VoteForVoteForHotDogBum
	this.instance_3 = new lib.VoteForLavash();
	this.instance_3.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(192));

	// txt_sausageParty
	this.instance_4 = new lib.txt_Sausage();
	this.instance_4.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// bg
	this.instance_5 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(192));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0081").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._09_TeresaVsTrumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(188));

	// txt_VoteForTrumpkin
	this.instance = new lib.Txt_VoteForTRumpkin();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},2).to({_off:true},23).wait(187));

	// Btn_VoteForTrumpkin
	this.VoteForTrumpkin_btn = new lib.boton_Izq();
	this.VoteForTrumpkin_btn.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.VoteForTrumpkin_btn._off = true;
	new cjs.ButtonHelper(this.VoteForTrumpkin_btn, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.VoteForTrumpkin_btn).wait(2).to({_off:false},0).to({_off:true},28).wait(187));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},26).wait(187));

	// img_VoteForTrumpkin
	this.instance_2 = new lib.VoteForTrumpkin();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},23).wait(187));

	// txt_VoteForTaco
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForTaco();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(187));

	// Btn_VoteForTaco
	this.instance_3 = new lib.boton_Der();
	this.instance_3.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},30).wait(187));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(187));

	// img_VoteForTaco
	this.instance_4 = new lib.VoteForTaco();
	this.instance_4.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(187));

	// txt_sausageParty
	this.instance_5 = new lib.txt_Sausage();
	this.instance_5.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(182));

	// bg
	this.instance_6 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},30).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._08_SammyBagelJrVsChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(188));

	// txt_VoteForChillary
	this.instance = new lib.Txt_VoteForChillary();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},2).to({_off:true},21).wait(187));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},24).wait(187));

	// img_VoteForChillary
	this.instance_2 = new lib.VoteForChillary_1();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},21).wait(187));

	// txt_VoteForVoteForHotDogBum
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForBagel_bagel_Sammy();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(187));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(187));

	// img_VoteForVoteForHotDogBum
	this.instance_3 = new lib.VoteForBagel_bagelSammy_1();
	this.instance_3.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(187));

	// txt_sausageParty
	this.instance_4 = new lib.txt_Sausage();
	this.instance_4.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(182));

	// bg
	this.instance_5 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._07_BrendaVsTrumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(188));

	// txt_VoteForTrumpkin
	this.instance = new lib.Txt_VoteForTRumpkin();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},2).to({_off:true},24).wait(182));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},26).wait(187));

	// img_VoteForTrumpkin
	this.instance_2 = new lib.VoteForTrumpkin();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},24).wait(182));

	// txt_VoteForVoteForHotDogBum
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForVoteForHotDogBum();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(187));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(187));

	// img_VoteForVoteForHotDogBum
	this.instance_3 = new lib.VoteForHotDogBum();
	this.instance_3.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(187));

	// txt_sausageParty
	this.instance_4 = new lib.txt_Sausage();
	this.instance_4.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(182));

	// bg
	this.instance_5 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._06_FrankVsChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(188));

	// txt_VoteForChillary
	this.instance = new lib.Txt_VoteForChillary();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},2).to({_off:true},23).wait(187));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},26).wait(187));

	// img_VoteForChillary
	this.instance_2 = new lib.VoteForChillary_1();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},23).wait(187));

	// txt_VoteForSausage
	this.instance_3 = new lib.Txt_VoteForSausage();
	this.instance_3.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},2).to({_off:true},27).wait(187));

	// Img_tarima_izq
	this.instance_4 = new lib.Izq_Tarima_();
	this.instance_4.setTransform(77.9,210,1,1,0,0,0,69.5,49);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},29).wait(187));

	// img_VoteForSausage
	this.instance_5 = new lib.VoteForSausage_1();
	this.instance_5.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},13).wait(187));

	// txt_sausageParty
	this.instance_6 = new lib.txt_Sausage();
	this.instance_6.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// txt_sausageParty
	this.instance_7 = new lib.txt_Sausage();
	this.instance_7.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// bg
	this.instance_8 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},35).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._05_LavashVsTrumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(193));

	// txt_VoteForTrumpkin
	this.instance = new lib.Txt_VoteForTRumpkin();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},2).to({_off:true},23).wait(192));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},26).wait(192));

	// img_VoteForTrumpkin
	this.instance_2 = new lib.VoteForTrumpkin();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},23).wait(192));

	// txt_VoteForVoteForHotDogBum
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForBagel_bagel_Sammy();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(192));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(192));

	// img_VoteForVoteForHotDogBum
	this.instance_3 = new lib.VoteForLavash();
	this.instance_3.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(192));

	// txt_sausageParty
	this.instance_4 = new lib.txt_Sausage();
	this.instance_4.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// bg
	this.instance_5 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._04_TeresaVsChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(188));

	// txt_VoteForChillary
	this.instance = new lib.Txt_VoteForChillary();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({alpha:1},2).to({_off:true},23).wait(182));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},26).wait(182));

	// img_VoteForChillary
	this.instance_2 = new lib.VoteForChillary_1();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},23).wait(182));

	// txt_VoteForTaco
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForTaco();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(187));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(187));

	// img_VoteForTaco
	this.instance_3 = new lib.VoteForTaco();
	this.instance_3.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(187));

	// txt_sausageParty
	this.instance_4 = new lib.txt_Sausage();
	this.instance_4.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(182));

	// bg
	this.instance_5 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._03_SammyBagelJrVsTrumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(193));

	// txt_VoteForTrumpkin
	this.instance = new lib.Txt_VoteForTRumpkin();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},2).to({_off:true},23).wait(192));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},26).wait(192));

	// img_VoteForTrumpkin
	this.instance_2 = new lib.VoteForTrumpkin();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},23).wait(192));

	// txt_VoteForVoteForHotDogBum
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForBagel_bagel_Sammy();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(192));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(192));

	// img_VoteForVoteForHotDogBum
	this.instance_3 = new lib.VoteForBagel_bagelSammy_1();
	this.instance_3.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(192));

	// txt_sausageParty
	this.instance_4 = new lib.txt_Sausage();
	this.instance_4.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// bg
	this.instance_5 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(192));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._02_BrendaVsChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(188));

	// txt_VoteForChillary
	this.instance = new lib.Txt_VoteForChillary();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({alpha:1},2).to({_off:true},23).wait(187));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},26).wait(187));

	// img_VoteForChillary
	this.instance_2 = new lib.VoteForChillary_1();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},23).wait(187));

	// txt_VoteForVoteForHotDogBum
	this.VoteForVoteForHotDogBum = new lib.Txt_VoteForVoteForHotDogBum();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({alpha:1},2).to({_off:true},26).wait(187));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(187));

	// img_VoteForVoteForHotDogBum
	this.instance_3 = new lib.VoteForHotDogBum();
	this.instance_3.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(187));

	// txt_sausageParty
	this.instance_4 = new lib.txt_Sausage();
	this.instance_4.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(182));

	// bg
	this.instance_5 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},30).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


(lib._01_ResultsGotoBrendaVsChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(147));

	// txt_N1Vote
	this.instance = new lib.img_voteN1();
	this.instance.setTransform(151,129.8,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:121.4,alpha:1},2).to({y:123.8},1).to({_off:true},8).wait(146));

	// txt_sausageParty
	this.instance_1 = new lib.txt_Sausage();
	this.instance_1.setTransform(150,145,1.05,1.05,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,y:125,alpha:1},3).to({_off:true},8).wait(146));

	// Txt_ThanksForVoting
	this.instance_2 = new lib.txt_ThankForVoting();
	this.instance_2.setTransform(171,125.3,1.63,1.63,0,0,0,41.6,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({y:123.5,alpha:1},3).to({_off:true},8).wait(146));

	// resultadoFondo
	this.instance_3 = new lib.FondoResultado();
	this.instance_3.setTransform(150.1,125,1.05,1.05,0,0,0,150,125);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:150,alpha:1},5).to({_off:true},9).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-6.2,315,262.5);


(lib._01_FrankVsTrumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(188));

	// txt_VoteForTrumpkin
	this.instance = new lib.Txt_VoteForTRumpkin();
	this.instance.setTransform(-165.7,117.1,1,1,0,0,0,454.2,92.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({alpha:1},2).to({_off:true},24).wait(187));

	// Img_tarima_der
	this.instance_1 = new lib.Der_Tarima_();
	this.instance_1.setTransform(221.5,210,1,1,0,0,0,69.5,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},27).wait(187));

	// img_VoteForTrumpkin
	this.instance_2 = new lib.VoteForTrumpkin();
	this.instance_2.setTransform(223.1,135.1,1,1,0,0,0,57,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({y:123.1},2,cjs.Ease.get(-0.1)).to({y:125.1},2,cjs.Ease.get(0.3)).to({_off:true},24).wait(187));

	// txt_VoteForSausage
	this.instance_3 = new lib.Txt_VoteForSausage();
	this.instance_3.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({alpha:1},2).to({_off:true},27).wait(187));

	// Img_tarima_izq
	this.instance_4 = new lib.Izq_Tarima_();
	this.instance_4.setTransform(77.9,210,1,1,0,0,0,69.5,49);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},29).wait(187));

	// img_VoteForSausage
	this.instance_5 = new lib.VoteForSausage_1();
	this.instance_5.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},13).wait(187));

	// txt_sausageParty
	this.instance_6 = new lib.txt_Sausage();
	this.instance_6.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// bg
	this.instance_7 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},35).wait(187));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-1.2,351,292.5);


// stage content:



(lib.SausageParty_300x250_CreatividadV2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"01_Results":5,"02_BrendaVsChillary":6,"02_Results":7,"03_SammyBagelJrVsTrumpkin":8,"03_Results":9,"04_TeresaVsChillary":10,"04_Results":11,"05_LavashVsTrumpkin":12,"05_Results":13,"06_FrankVsChillary":14,"06_Results":15,"07_BrendaVsTrumpkin":16,"07_Results":17,"08_SammyBagelJrVsChillary":18,"08_Results":19,"09_TeresaVsTrumpkin":20,"09_Results":21,"10_LavashVsChillary":22,"10_END":23});

	// timeline functions:
	this.frame_0 = function() {
		///
		// footer link btn_Watch and btn_buy
				
		this.btn_Watch.addEventListener("click",btn_WatchToGoToWebPage);
		
		function btn_WatchToGoToWebPage() {
			window.open("http://www.adobe.com", "_blank");
		}		
		
		this.btn_buy.addEventListener("click",btn_buyToGoToWebPage);
		
		function btn_buyToGoToWebPage() {
			window.open("http://www.google.com", "_blank");
		}
		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		// 01_FrankVsTrumpkin
		
		// btn_VoteForFrankONE to 01_Results
		
			this.btn_VoteForFrankONE.addEventListener("click", VoteForFrankONE.bind(this));
					function VoteForFrankONE(){
						this.gotoAndPlay("01_Results");
						// EB.userActionCounter("VoteForSausage");
						alert('hola');
					}
					
			// btn_VoteForTranckONE to 01_Results
		
			this.btn_VoteForTrumpkinONE.addEventListener("click", VoteForTrumpkinONE.bind(this));
					function VoteForTrumpkinONE(){
						this.gotoAndPlay("01_Results");
						//EB.userActionCounter("VoteForTrumpkin");
					}	
		
		
		// ResultsGotoBrendaVsChillary
		this.btn_ResultsGotoBrendaVsChillary.addEventListener("click", GotoBrendaVsChillary.bind(this));
				function GotoBrendaVsChillary(){
					this.gotoAndPlay("02_BrendaVsChillary");
				}	
		
		// ViewResultsLandingPageOne
		this.btn_ViewResultsLandingPageOne.addEventListener("click", ViewResultsLandingPageOne.bind(this));
				function ViewResultsLandingPageOne(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// 02_BrendaVsChillary
		
		// btn_VoteForBrendaONE to 01_Results
		this.btn_VoteForBrendaONE.addEventListener("click", VoteForBrendaONE.bind(this));
			function VoteForBrendaONE(){
					this.gotoAndPlay("02_Results");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForChillaryONE to ResultsOne
		
			this.btn_VoteForChillaryONE.addEventListener("click", VoteForChillaryONE.bind(this));
					function VoteForChillaryONE(){
						this.gotoAndPlay("02_Results");
						//EB.userActionCounter("VoteForTrumpkin");
					}	
		
		// ResultsGotoBrendaVsChillary
		this.btn_ResultsGotoSammyBagelJrVsTrumpkin.addEventListener("click", SammyBagelJrVsTrumpkin.bind(this));
				function SammyBagelJrVsTrumpkin(){
					this.gotoAndPlay("03_SammyBagelJrVsTrumpkin");
				}	
		// ViewResultsLandingPageTwo
		this.btn_ViewResultsLandingPageTwo.addEventListener("click", ViewResultsLandingPageTWO.bind(this));
				function ViewResultsLandingPageTWO(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		// 03_SammyBagelJrVsTrumpkin
		
		// VoteForSammyBagelJrONE to 01_Results
		this.btn_VoteForSammyBagelJrONE.addEventListener("click", VoteForSammyBagelJrONE.bind(this));
			function VoteForSammyBagelJrONE(){
					this.gotoAndPlay("03_Results");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForTrumpkinONE to ResultsOne
		
			this.btn_VoteForTrumpkinTWO.addEventListener("click", VoteForTrumpkinTWO.bind(this));
					function VoteForTrumpkinTWO(){
						this.gotoAndPlay("03_Results");
						//EB.userActionCounter("VoteForTrumpkin");
					}	
		
		
		// ResultsGoto04_TeresaVsChillary
		this.btn_ResultsGoto04_TeresaVsChillary.addEventListener("click", TeresaVsChillary.bind(this));
				function TeresaVsChillary(){
					this.gotoAndPlay("04_TeresaVsChillary");
				}	
		// ViewResultsLandingPageTrhee
		this.btn_ViewResultsLandingPageThree.addEventListener("click", ViewResultsLandingPageThree.bind(this));
				function ViewResultsLandingPageThree(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// 04_TeresaVsChillary
		
		// VoteForTeresaONE to 04_Results
		this.btn_VoteForTeresaONE.addEventListener("click", VoteForTeresaONE.bind(this));
			function VoteForTeresaONE(){
					this.gotoAndPlay("04_Results");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForChillaryONE to ResultsOne
		
			this.btn_VoteForChillaryTWO.addEventListener("click", VoteForChillaryTWO.bind(this));
					function VoteForChillaryTWO(){
						this.gotoAndPlay("04_Results");
						//EB.userActionCounter("VoteForChillary");
					}	
		
		
		// ResultsGoto05_LavashVsTrumpkin
		this.btn_ResultsGoto05_LavashVsTrumpkin.addEventListener("click", LavashVsTrumpkin.bind(this));
				function LavashVsTrumpkin(){
					this.gotoAndPlay("05_LavashVsTrumpkin");
				}	
		// ViewResultsLandingPageFour
		this.btn_ViewResultsLandingPageFour.addEventListener("click", ViewResultsLandingPageFour.bind(this));
				function ViewResultsLandingPageFour(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// 05_LavashVsTrumpkin to 05_Results
		
		// VoteForLavashONE to 01_Results
		this.btn_VoteForLavashONE.addEventListener("click", VoteForLavashONE.bind(this));
			function VoteForLavashONE(){
					this.gotoAndPlay("05_Results");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForTrumpkinTHREE to ResultsOne
		
			this.btn_VoteForTrumpkinTHREE.addEventListener("click", VoteForTrumpkinTHREE.bind(this));
					function VoteForTrumpkinTHREE(){
						this.gotoAndPlay("05_Results");
						//EB.userActionCounter("VoteForChillary");
					}	
		
		
		// ResultsGoto05_LavashVsTrumpkin
		this.btn_ResultsGoto06_FrankVsChillary.addEventListener("click", FrankVsChillary.bind(this));
				function FrankVsChillary(){
					this.gotoAndPlay("06_FrankVsChillary");
				}	
		
		// ViewResultsLandingPageFive
		this.btn_ViewResultsLandingPageFive.addEventListener("click", ViewResultsLandingPageFive.bind(this));
				function ViewResultsLandingPageFive(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}			
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		// 06_FrankVsChillary
		
		// btn_VoteForFrankTWO to 07_Results
		
			this.btn_VoteForFrankTWO.addEventListener("click", VoteForFrankTWO.bind(this));
					function VoteForFrankTWO(){
						this.gotoAndPlay("06_Results");
						// EB.userActionCounter("VoteForSausage");
					}
					
			// btn_VoteForTranckONE to 06_Results
		
			this.btn_VoteForChillaryTHREE.addEventListener("click", VoteForChillaryTHREE.bind(this));
					function VoteForChillaryTHREE(){
						this.gotoAndPlay("06_Results");
						//EB.userActionCounter("VoteForTrumpkin");
					}	
		
		
		// ResultsGotoBrendaVsTrumpkin
		this.btn_ResultsGotoBrendaVsTrumpkin.addEventListener("click", GotoBrendaVsTrumpkin.bind(this));
				function GotoBrendaVsTrumpkin(){
					this.gotoAndPlay("07_BrendaVsTrumpkin");
				}	
		
		// ViewResultsLandingPageSix
		this.btn_ViewResultsLandingPageSix.addEventListener("click", ViewResultsLandingPageSix.bind(this));
				function ViewResultsLandingPageSix(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// 07_BrendaVsTrumpkin
		
		// btn_VoteForBrendaTWO to 07_Results
		this.btn_VoteForBrendaTWO.addEventListener("click", VoteForBrendaTWO.bind(this));
			function VoteForBrendaTWO(){
					this.gotoAndPlay("07_Results");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForTrumpkinFOUR to 07_Results
		
			this.btn_VoteForTrumpkinFOUR.addEventListener("click", VoteForTrumpkinFOUR.bind(this));
					function VoteForTrumpkinFOUR(){
						this.gotoAndPlay("07_Results");
						//EB.userActionCounter("VoteForChillary");
					}	
		
		
		// ResultsGotoSammyBagelJrVsChillary
		this.btn_ResultsGotoSammyBagelJrVsChillary.addEventListener("click", SammyBagelJrVsChillary.bind(this));
				function SammyBagelJrVsChillary(){
					this.gotoAndPlay("08_SammyBagelJrVsChillary");
				}	
		
		// ViewResultsLandingPageSeven
		this.btn_ViewResultsLandingPageSeven.addEventListener("click", ViewResultsLandingPageSeven.bind(this));
				function ViewResultsLandingPageSeven(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// 08_SammyBagelJrVsChillary to 08_Results
		
		// VoteForSammyBagelJrTWO to 08_Results
		this.btn_VoteForSammyBagelJrTWO.addEventListener("click", VoteForSammyBagelJrTWO.bind(this));
			function VoteForSammyBagelJrTWO(){
					this.gotoAndPlay("08_Results");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForChillaryFOUR to 08_Results
		
			this.btn_VoteForChillaryFOUR.addEventListener("click", VoteForChillaryFOUR.bind(this));
					function VoteForChillaryFOUR(){
						this.gotoAndPlay("08_Results");
						//EB.userActionCounter("VoteForTrumpkin");
					}	
		
		// ResultsGotoTeresaVsTrumpkin
		this.btn_ResultsGotoTeresaVsTrumpkin.addEventListener("click", ResultsGotoTeresaVsTrumpkin.bind(this));
				function ResultsGotoTeresaVsTrumpkin(){
					this.gotoAndPlay("09_TeresaVsTrumpkin");
				}	
		
		// ViewResultsLandingPageEight
		this.btn_ViewResultsLandingPageEight.addEventListener("click", ViewResultsLandingPageEight.bind(this));
				function ViewResultsLandingPageEight(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// 09_TeresaVsTrumpkin
		
		
		// VoteForTeresaTWO to 09_Results
		this.btn_VoteForTeresaTWO.addEventListener("click", VoteForTeresaTWO.bind(this));
			function VoteForTeresaTWO(){
					this.gotoAndPlay("09_Results");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForChillaryFIVE to 09_Results
		
			this.btn_VoteForTrumpkinFIVE.addEventListener("click", VoteForTrumpkinFIVE.bind(this));
					function VoteForTrumpkinFIVE(){
						this.gotoAndPlay("09_Results");
						//EB.userActionCounter("VoteForChillary");
					}	
		
		
		// ResultsGoto10_LavashVsChillary to 09_Results
		this.btn_ResultsGoto10_LavashVsChillary.addEventListener("click", LavashVsChillary.bind(this));
				function LavashVsChillary(){
					this.gotoAndPlay("10_LavashVsChillary");
				}	
		// ViewResultsLandingPageNine
		this.btn_ViewResultsLandingPageNine.addEventListener("click", ViewResultsLandingPageNine.bind(this));
				function ViewResultsLandingPageNine(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		// 10_LavashVsChillary to 10_END
		
		
		// VoteForLavashONE to to 10_END
		this.btn_VoteForLavashTWO.addEventListener("click", VoteForLavashTWO.bind(this));
			function VoteForLavashTWO(){
					this.gotoAndPlay("10_END");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForCillaryFIVE to 10_END
		
			this.btn_VoteForChillaryFIVE.addEventListener("click", ChillaryFIVE.bind(this));
					function ChillaryFIVE(){
						this.gotoAndPlay("10_END");
						//EB.userActionCounter("VoteForChillary");
					}	
		
		// ViewResultsLandingPageTen
		this.btn_ViewResultsLandingPageTen.addEventListener("click", ViewResultsLandingPageTen.bind(this));
				function ViewResultsLandingPageTen(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}	
		
		
		// btn_ResultsGotoEND
		//this.btn_ResultsGotoEND.addEventListener("click", ResultsGotoEND.bind(this));
		//		function ResultsGotoEND(){
		//			this.gotoAndPlay("10_END");		}	
		
		
		////////////////////////////////////////////END_FEDE////////////////////////////////////////////////////
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(174));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A9181C").ss(1,1,1).p("A3WzbMAutAAAMAAAAm4MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},194).wait(3));

	// btn_Buy
	this.btn_buy = new lib.btn_buy();
	this.btn_buy.setTransform(181.6,233.2);
	this.btn_buy._off = true;
	new cjs.ButtonHelper(this.btn_buy, 0, 1, 2, false, new lib.btn_buy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_buy).wait(3).to({_off:false},0).to({_off:true},190).wait(4));

	// btn_Watch
	this.btn_Watch = new lib.btn_watch();
	this.btn_Watch.setTransform(97.7,233.2);
	this.btn_Watch._off = true;
	new cjs.ButtonHelper(this.btn_Watch, 0, 1, 2, false, new lib.btn_watch(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_Watch).wait(3).to({_off:false},0).to({_off:true},190).wait(4));

	// footer
	this.instance = new lib.footer();
	this.instance.setTransform(150,251.7,1,1,0,0,0,150,12.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:237.7,alpha:1},3).to({_off:true},190).wait(4));

	// 10_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageTen = new lib.SeeResults();
	this.btn_ViewResultsLandingPageTen.setTransform(204.6,98.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageTen._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageTen, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageTen).wait(23).to({_off:false},0).to({_off:true},1).wait(173));

	// 10_ResultGotoLavashVsChillary
	this.instance_1 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_1.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({_off:true},2).wait(172));

	// 10_btn_VoteFor
	this.btn_VoteForChillaryFIVE = new lib.boton_Izq();
	this.btn_VoteForChillaryFIVE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryFIVE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryFIVE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryFIVE).wait(22).to({_off:false},0).to({_off:true},1).wait(174));

	// 10_btn_VoteFor
	this.btn_VoteForLavashTWO = new lib.boton_Der();
	this.btn_VoteForLavashTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForLavashTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForLavashTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForLavashTWO).wait(22).to({_off:false},0).to({_off:true},1).wait(174));

	// 10_LavashVsChillary
	this.instance_2 = new lib._10_LavashVsChillary();
	this.instance_2.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_3 = new lib._10_LavashVsChillary();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},22).to({state:[]},2).wait(173));

	// 09_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageNine = new lib.SeeResults();
	this.btn_ViewResultsLandingPageNine.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageNine._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageNine, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageNine).wait(21).to({_off:false},0).to({_off:true},1).wait(175));

	// 09_Result_Btn_VoteAgain
	this.btn_ResultsGoto10_LavashVsChillary = new lib.VoteAgain();
	this.btn_ResultsGoto10_LavashVsChillary.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto10_LavashVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto10_LavashVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto10_LavashVsChillary).wait(21).to({_off:false},0).to({_off:true},1).wait(175));

	// 09_ResultGotoLavashVsChillary
	this.instance_4 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_4.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({_off:true},1).wait(175));

	// 09_btn_VoteFor
	this.btn_VoteForTrumpkinFIVE = new lib.boton_Izq();
	this.btn_VoteForTrumpkinFIVE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinFIVE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinFIVE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinFIVE).wait(20).to({_off:false},0).to({_off:true},1).wait(176));

	// 09_btn_VoteFor
	this.btn_VoteForTeresaTWO = new lib.boton_Der();
	this.btn_VoteForTeresaTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForTeresaTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTeresaTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTeresaTWO).wait(20).to({_off:false},0).to({_off:true},1).wait(176));

	// 09_TeresaVsTrumpkin
	this.instance_5 = new lib._09_TeresaVsTrumpkin();
	this.instance_5.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({_off:true},2).wait(175));

	// 08_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageEight = new lib.SeeResults();
	this.btn_ViewResultsLandingPageEight.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageEight._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageEight, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageEight).wait(19).to({_off:false},0).to({_off:true},1).wait(177));

	// 08_Result_Btn_VoteAgain
	this.btn_ResultsGotoTeresaVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGotoTeresaVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoTeresaVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoTeresaVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoTeresaVsTrumpkin).wait(19).to({_off:false},0).to({_off:true},1).wait(177));

	// 08_ResultGotoTeresaVsTrumpkin
	this.instance_6 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_6.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({_off:true},2).wait(176));

	// 08_btn_VoteFor
	this.btn_VoteForChillaryFOUR = new lib.boton_Izq();
	this.btn_VoteForChillaryFOUR.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryFOUR._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryFOUR, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryFOUR).wait(18).to({_off:false},0).to({_off:true},1).wait(178));

	// 08_btn_VoteFor
	this.btn_VoteForSammyBagelJrTWO = new lib.boton_Der();
	this.btn_VoteForSammyBagelJrTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForSammyBagelJrTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForSammyBagelJrTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForSammyBagelJrTWO).wait(18).to({_off:false},0).to({_off:true},1).wait(178));

	// 08_SammyBagelJrVsChillary
	this.instance_7 = new lib._08_SammyBagelJrVsChillary();
	this.instance_7.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(18).to({_off:false},0).to({_off:true},2).wait(177));

	// 07_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageSeven = new lib.SeeResults();
	this.btn_ViewResultsLandingPageSeven.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageSeven._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageSeven, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageSeven).wait(17).to({_off:false},0).to({_off:true},1).wait(179));

	// 07_Result_Btn_VoteAgain
	this.btn_ResultsGotoSammyBagelJrVsChillary = new lib.VoteAgain();
	this.btn_ResultsGotoSammyBagelJrVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoSammyBagelJrVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoSammyBagelJrVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoSammyBagelJrVsChillary).wait(17).to({_off:false},0).to({_off:true},1).wait(179));

	// 07_ResultGotoSammyBagelJrVsChillary
	this.instance_8 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_8.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({_off:true},2).wait(178));

	// 07_btn_VoteFor
	this.btn_VoteForTrumpkinFOUR = new lib.boton_Izq();
	this.btn_VoteForTrumpkinFOUR.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinFOUR._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinFOUR, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinFOUR).wait(16).to({_off:false},0).to({_off:true},1).wait(180));

	// 07_btn_VoteFor
	this.btn_VoteForBrendaTWO = new lib.boton_Der();
	this.btn_VoteForBrendaTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForBrendaTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForBrendaTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForBrendaTWO).wait(16).to({_off:false},0).to({_off:true},1).wait(180));

	// 07_BrendaVsTrumpkin
	this.instance_9 = new lib._07_BrendaVsTrumpkin();
	this.instance_9.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(16).to({_off:false},0).to({_off:true},2).wait(179));

	// 06_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageSix = new lib.SeeResults();
	this.btn_ViewResultsLandingPageSix.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageSix._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageSix, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageSix).wait(15).to({_off:false},0).to({_off:true},1).wait(181));

	// 06_Result_Btn_VoteAgain
	this.btn_ResultsGotoBrendaVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGotoBrendaVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoBrendaVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoBrendaVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoBrendaVsTrumpkin).wait(15).to({_off:false},0).to({_off:true},1).wait(181));

	// 06_ResultGotoBrendaVsTrumpkin
	this.instance_10 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_10.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15).to({_off:false},0).to({_off:true},2).wait(180));

	// 06_btn_VoteFor 
	this.btn_VoteForChillaryTHREE = new lib.boton_Izq();
	this.btn_VoteForChillaryTHREE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryTHREE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryTHREE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryTHREE).wait(14).to({_off:false},0).to({_off:true},1).wait(182));

	// 06_btn_VoteFor
	this.btn_VoteForFrankTWO = new lib.boton_Der();
	this.btn_VoteForFrankTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForFrankTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForFrankTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForFrankTWO).wait(14).to({_off:false},0).to({_off:true},1).wait(182));

	// 06_FrankVsChillary
	this.instance_11 = new lib._06_FrankVsChillary();
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({_off:true},2).wait(181));

	// 05_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageFive = new lib.SeeResults();
	this.btn_ViewResultsLandingPageFive.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageFive._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageFive, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageFive).wait(13).to({_off:false},0).to({_off:true},1).wait(183));

	// 05_Result_Btn_VoteAgain 
	this.btn_ResultsGoto06_FrankVsChillary = new lib.VoteAgain();
	this.btn_ResultsGoto06_FrankVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto06_FrankVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto06_FrankVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto06_FrankVsChillary).wait(13).to({_off:false},0).to({_off:true},1).wait(183));

	// 05_ResultGotoFrankVsChillary
	this.instance_12 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_12.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(13).to({_off:false},0).to({_off:true},2).wait(182));

	// 05_btn_VoteFor 
	this.btn_VoteForTrumpkinTHREE = new lib.boton_Izq();
	this.btn_VoteForTrumpkinTHREE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinTHREE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinTHREE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinTHREE).wait(12).to({_off:false},0).to({_off:true},1).wait(184));

	// 05_btn_VoteFor
	this.btn_VoteForLavashONE = new lib.boton_Der();
	this.btn_VoteForLavashONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForLavashONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForLavashONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForLavashONE).wait(12).to({_off:false},0).to({_off:true},1).wait(184));

	// 05_LavashVsTrumpkin
	this.instance_13 = new lib._05_LavashVsTrumpkin();
	this.instance_13.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12).to({_off:false},0).to({_off:true},2).wait(183));

	// 04_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageFour = new lib.SeeResults();
	this.btn_ViewResultsLandingPageFour.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageFour._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageFour, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageFour).wait(11).to({_off:false},0).to({_off:true},1).wait(185));

	// 04_Result_Btn_VoteAgain 
	this.btn_ResultsGoto05_LavashVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGoto05_LavashVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto05_LavashVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto05_LavashVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto05_LavashVsTrumpkin).wait(11).to({_off:false},0).to({_off:true},1).wait(185));

	// 04_ResultGotoLavashVsTrumpkin
	this.instance_14 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_14.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(11).to({_off:false},0).to({_off:true},2).wait(184));

	// 04_btn_VoteFor 
	this.btn_VoteForChillaryTWO = new lib.boton_Izq();
	this.btn_VoteForChillaryTWO.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryTWO, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryTWO).wait(10).to({_off:false},0).to({_off:true},1).wait(186));

	// 04_btn_VoteFor
	this.btn_VoteForTeresaONE = new lib.boton_Der();
	this.btn_VoteForTeresaONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForTeresaONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTeresaONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTeresaONE).wait(10).to({_off:false},0).to({_off:true},1).wait(186));

	// 04_TeresaVsChillary
	this.instance_15 = new lib._04_TeresaVsChillary();
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(10).to({_off:false},0).to({_off:true},2).wait(185));

	// 03_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageThree = new lib.SeeResults();
	this.btn_ViewResultsLandingPageThree.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageThree._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageThree, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageThree).wait(9).to({_off:false},0).to({_off:true},1).wait(187));

	// 03_Result_Btn_VoteAgain
	this.btn_ResultsGoto04_TeresaVsChillary = new lib.VoteAgain();
	this.btn_ResultsGoto04_TeresaVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto04_TeresaVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto04_TeresaVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto04_TeresaVsChillary).wait(9).to({_off:false},0).to({_off:true},1).wait(187));

	// 03_ResultGotoTeresaVsChillary
	this.instance_16 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_16.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(9).to({_off:false},0).to({_off:true},2).wait(186));

	// 03_btn_VoteFor
	this.btn_VoteForTrumpkinTWO = new lib.boton_Izq();
	this.btn_VoteForTrumpkinTWO.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinTWO, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinTWO).wait(8).to({_off:false},0).to({_off:true},1).wait(188));

	// 03_btn_VoteFor
	this.btn_VoteForSammyBagelJrONE = new lib.boton_Der();
	this.btn_VoteForSammyBagelJrONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForSammyBagelJrONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForSammyBagelJrONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForSammyBagelJrONE).wait(8).to({_off:false},0).to({_off:true},1).wait(188));

	// 03_SammyBagelJrVsTrumpkin
	this.instance_17 = new lib._03_SammyBagelJrVsTrumpkin();
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(8).to({_off:false},0).to({_off:true},2).wait(187));

	// 02_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageTwo = new lib.SeeResults();
	this.btn_ViewResultsLandingPageTwo.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageTwo._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageTwo, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageTwo).wait(7).to({_off:false},0).to({_off:true},1).wait(189));

	// 02_Result_Btn_VoteAgain
	this.btn_ResultsGotoSammyBagelJrVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGotoSammyBagelJrVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoSammyBagelJrVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoSammyBagelJrVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoSammyBagelJrVsTrumpkin).wait(7).to({_off:false},0).to({_off:true},1).wait(189));

	// 02_ResultGotoSammyBagelJrVsTrumpkin
	this.instance_18 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_18.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({_off:false},0).to({_off:true},2).wait(188));

	// 02_btn_VoteForChillaryONE
	this.btn_VoteForChillaryONE = new lib.boton_Izq();
	this.btn_VoteForChillaryONE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryONE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryONE).wait(6).to({_off:false},0).to({_off:true},1).wait(190));

	// 02_btn_VoteForBrendaONE
	this.btn_VoteForBrendaONE = new lib.boton_Der();
	this.btn_VoteForBrendaONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForBrendaONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForBrendaONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForBrendaONE).wait(6).to({_off:false},0).to({_off:true},1).wait(190));

	// 02_BrendaVsChillary
	this.instance_19 = new lib._02_BrendaVsChillary();
	this.instance_19.setTransform(150,124,1,1,0,0,0,150,125);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(6).to({_off:false},0).to({_off:true},2).wait(189));

	// 01_Result_Btn_VseeResults
	this.btn_ViewResultsLandingPageOne = new lib.SeeResults();
	this.btn_ViewResultsLandingPageOne.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageOne._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageOne, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageOne).wait(5).to({_off:false},0).to({_off:true},1).wait(191));

	// 01_Result_Btn_VoteAgain
	this.btn_ResultsGotoBrendaVsChillary = new lib.VoteAgain();
	this.btn_ResultsGotoBrendaVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoBrendaVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoBrendaVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoBrendaVsChillary).wait(5).to({_off:false},0).to({_off:true},1).wait(191));

	// 01_Results
	this.instance_20 = new lib._01_ResultsGotoBrendaVsChillary();
	this.instance_20.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5).to({_off:false},0).to({_off:true},2).wait(190));

	// 01_btn_VoteForTrumpkinONE
	this.btn_VoteForTrumpkinONE = new lib.boton_Izq();
	this.btn_VoteForTrumpkinONE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinONE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinONE).to({_off:true},6).wait(191));

	// 01_btn_VoteForFrankONE
	this.btn_VoteForFrankONE = new lib.boton_Der();
	this.btn_VoteForFrankONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	new cjs.ButtonHelper(this.btn_VoteForFrankONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForFrankONE).to({_off:true},6).wait(191));

	// 01_FrankVsTrumpkin
	this.instance_21 = new lib._01_FrankVsTrumpkin();
	this.instance_21.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({_off:true},6).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.4,123.8,351,292.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;