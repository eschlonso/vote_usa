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
		{src:"images/fondo_300x250.jpg?1478028139448", id:"fondo_300x250"},
		{src:"images/FrameBgEnd.jpg?1478028139448", id:"FrameBgEnd"},
		{src:"images/N1.png?1478028139448", id:"N1"},
		{src:"images/tarima.png?1478028139448", id:"tarima"},
		{src:"images/thisNov8SausageParty1.png?1478028139448", id:"thisNov8SausageParty1"},
		{src:"images/VoteForBagel_bagelSammy.png?1478028139448", id:"VoteForBagel_bagelSammy"},
		{src:"images/VoteForChillary.png?1478028139448", id:"VoteForChillary"},
		{src:"images/VoteForHotDogBum_Brenda.png?1478028139448", id:"VoteForHotDogBum_Brenda"},
		{src:"images/VoteForLavasha.png?1478028139448", id:"VoteForLavasha"},
		{src:"images/VoteForSausage.png?1478028139448", id:"VoteForSausage"},
		{src:"images/VoteForTaco_teresa.png?1478028139448", id:"VoteForTaco_teresa"},
		{src:"images/VoteForTrumpkinpngcopy.png?1478028139448", id:"VoteForTrumpkinpngcopy"}
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


(lib.N1 = function() {
	this.initialize(img.N1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.tarima = function() {
	this.initialize(img.tarima);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,98);


(lib.thisNov8SausageParty1 = function() {
	this.initialize(img.thisNov8SausageParty1);
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


(lib.VoteForMY = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
	this.shape.graphics.f("#FFFFFF").s().p("AD2B3IgGgQIgiAAIgGAQIgZAAIAjhcIAaAAIAjBcgADpBVIgKgdIgKAdIAUAAgABXB3IAAhcIAjAAQATAAANAOQAHAHAEAIQADAIAAAJQAAATgOANQgGAHgIAEQgIADgKAAgABvBjIAGAAQAFAAAFgCQAFgCAEgDQAHgHAAgMQAAgFgCgFQgCgFgDgDIgFgFIgGgCIgOgBgAAsB3Igsg4IAAA4IgXAAIAAhcIAXAAIAsA4IAAg4IAYAAIAABcgAhaB3IAAhcIA1AAIAAAUIgdAAIAAAQIAbAAIAAAUIgbAAIAAAQIAdAAIAAAUgAiCB3IgXgjIAAAjIgYAAIAAhcIAmAAQANAAAJAHQAEAEACAGQACAFAAAHIgBAJQgBAEgDADQgFAHgKACIAdAmgAiZBEIAFAAQAGAAAEgCQAFgDAAgGQAAgHgFgCIgJgDIgGAAgAkGB3IAAhcIAkAAQAGAAAFABQAFACADADQAHAGAAANQAAAGgDAEQgCAFgGADQAKACAFAFQACADABAEIABAJQAAAGgCAFQgCAFgEADQgJAHgOAAgAjuBlIAFAAQAJAAAEgDQAEgCAAgFQAAgGgEgCQgDgCgKAAIgFAAgAjuA/IAEAAIAIgCQAEgCAAgFQAAgFgEgCQgDgCgFAAIgEAAgAkSh1IALAAIAZBEIAahEIALAAIglBfgACCgnQgHgHgDgIQgEgIAAgKQAAgJAEgJQADgIAHgHQAOgNATAAQATAAAOANQAHAHADAIQAEAJAAAJQAAAUgOANQgOANgTAAQgTAAgOgNgACJhiQgLALAAAPQAAAIADAGQADAHAFAFQALALAPAAQAPAAALgLQALgLAAgPQAAgIgDgGQgDgHgFgFQgLgLgPAAQgQAAgKALgAi2gnQgHgHgEgIQgDgIAAgKQAAgJADgJQAEgIAHgHQANgNATAAQAUAAANANQAHAHAEAIQADAJAAAJQAAAUgOANQgNANgUAAQgTAAgNgNgAiwhiQgKALAAAPQAAAIACAGQADAHAFAFQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgGQgDgHgFgFQgLgLgQAAQgPAAgLALgAEHgbIgbgoIgDAAIAAAoIgKAAIAAhaIANAAQANAAAKAFQAKAFAAAPQAAAFgCAEQgBAFgDADQgGAHgKABIAcAogADphLIAEAAIAIgBIAHgCQAHgDAAgKQAAgGgCgDQgBgEgEgBIgHgCIgJgBIgDAAgABAgbIAAhaIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAtgAgigbIAAhaIAtAAIAAAJIgjAAIAAAbIAiAAIAAAJIgiAAIAAAjIAjAAIAAAKgAhLgbIAAhRIgWAAIAAgJIA1AAIAAAJIgVAAIAABRg");
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


(lib.Txt_VoteForLavash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABtB2QgIgDgIgFIALgTIAHAFIAHADIAHABQAFAAADgCQADgDAAgEQAAgEgDgCIgJgEIgHgCQgIgCgGgGQgGgFAAgLQAAgOAJgJQAEgEAGgCQAFgCAHAAIAGAAIAPADIAJAEIgKATIgIgFQgDgBgEAAQgFAAgDACQgDACAAAEQAAADADACIAIADIAJADQAHADAGAFQADADACAEQACAEAAAFIgCANIgCAEQgEAIgIAEQgJAEgKAAQgJAAgJgCgADrB2IAAgmIgjAAIAAAmIgYAAIAAhcIAYAAIAAAkIAjAAIAAgkIAYAAIAABcgAA9B2IgGgQIghAAIgGAQIgYAAIAihcIAaAAIAjBcgAAxBUIgKgdIgKAdIAUAAgAhCB2IgnhcIAaAAIAWA4IAXg4IAaAAIgoBcgAiEB2IgGgQIghAAIgGAQIgaAAIAkhcIAaAAIAjBcgAiQBUIgKgdIgKAdIAUAAgAkDB2IAAhcIAYAAIAABIIAdAAIAAAUgAkSh2IALAAIAZBEIAahEIALAAIglBfgACCgoQgHgHgDgIQgEgIAAgKQAAgJAEgJQADgIAHgHQAOgNATAAQATAAAOANQAHAHADAIQAEAJAAAJQAAAUgOANQgOANgTAAQgTAAgOgNgACJhjQgLALAAAPQAAAIADAGQADAHAFAFQALALAPAAQAPAAALgLQALgLAAgPQAAgIgDgGQgDgHgFgFQgLgLgPAAQgQAAgKALgAi2goQgHgHgEgIQgDgIAAgKQAAgJADgJQAEgIAHgHQANgNATAAQAUAAANANQAHAHAEAIQADAJAAAJQAAAUgOANQgNANgUAAQgTAAgNgNgAiwhjQgKALAAAPQAAAIACAGQADAHAFAFQALALAPAAQAQAAAKgLQALgLAAgPQAAgIgCgGQgDgHgFgFQgLgLgQAAQgPAAgLALgAEHgcIgbgoIgDAAIAAAoIgKAAIAAhaIANAAQANAAAKAFQAKAFAAAPQAAAFgCAEQgBAFgDADQgGAHgKABIAcAogADphMIAEAAIAIgBIAHgCQAHgDAAgKQAAgGgCgDQgBgEgEgBIgHgCIgJgBIgDAAgABAgcIAAhaIApAAIAAAJIgfAAIAAAbIAeAAIAAAJIgeAAIAAAtgAgigcIAAhaIAtAAIAAAJIgjAAIAAAbIAiAAIAAAJIgiAAIAAAjIAjAAIAAAKgAhLgcIAAhRIgWAAIAAgJIA1AAIAAAJIgVAAIAABRg");
	this.shape.setTransform(841.7,161.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(814.2,149.8,55.1,24.2);


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


(lib.txt_ThankForVotingTrumkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANAuIgbgvIABAFIAAAqIggAAIAAhbIAhAAIAbAvIgBgvIAgAAIAABbg");
	this.shape.setTransform(66,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAuIAAhbIAhAAIAABbg");
	this.shape_1.setTransform(58.5,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAHAuIgUgnIAAAnIghAAIAAhbIAhAAIAAAoIATgoIAmAAIgdAtIAgAug");
	this.shape_2.setTransform(52.2,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAuIAAhbIAnAAQAUAAAKAIQAKAIAAASQAAAOgJAIQgIAIgUgBIgIAAIAAAcgAgFgEIAFAAQADAAACgCQADgCAAgDQAAgEgDgCQgDgCgCAAIgFAAg");
	this.shape_3.setTransform(42.9,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAeAuIgGg0IgPA0IgSAAIgOg0IgGA0IghAAIAQhbIAjAAIAHAaIAEAWIAAAAIANgwIAjAAIAOBbg");
	this.shape_4.setTransform(32.3,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAqQgIgEgHgJQgDgFgBgGIgBhAIAiAAIAAAwQAAAKACACQABAEAEAAQAFAAACgEQACgDAAgJIAAgwIAhAAIAAAwIgBAQQgBAGgDAFQgGAJgKAEQgLAFgKAAQgKAAgLgFg");
	this.shape_5.setTransform(21.5,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAAKgFAEQgFAHgIABIAZAmgAgJgDIAFAAQAEAAABgCQADgDAAgEQAAgEgDgDQgBgCgEAAIgFAAg");
	this.shape_6.setTransform(13,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAuIAAg8IgTAAIAAgfIBFAAIAAAfIgTAAIAAA8g");
	this.shape_7.setTransform(4.7,30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAJAAAOQAAAJgFAFQgFAGgIACIAZAmgAgJgDIAFAAQAEAAACgDQACgCAAgEQAAgDgCgEQgCgCgEAAIgFAAg");
	this.shape_8.setTransform(77.7,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAsQgJgEgHgGQgHgHgDgJQgEgHAAgLQAAgKAEgIQADgIAHgHQAHgIAJgDQAJgDAJAAQAKAAAJADQAKADAGAIQAHAHAEAIQADAJAAAJQAAAKgDAIQgEAJgHAHQgFAGgLAEQgKAEgJAAQgIAAgKgEgAgKgMQgEAGAAAGQAAAHAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_9.setTransform(67.7,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAuIAAhbIA7AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_10.setTransform(59.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAsQgJgDgHgHQgHgGgDgKQgEgJAAgJQAAgJAEgJQADgJAHgHQAIgHAIgDQAJgDAJAAQAOAAALAGQAKAFAIANIgeALQgCgDgDgDQgEgCgEAAQgFAAgFAGQgEAGAAAIQAAAJAEAGQAFAFAGAAQAFAAADgCQADgCAAgEIgMAAIAAgUIAxAAIAAAHQAAAGgBAHIgEALQgIAMgLAHQgMAGgNAAQgIAAgKgEg");
	this.shape_11.setTransform(47,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AANAuIgbguIABAuIggAAIAAhbIAhAAIAaAuIgBguIAhAAIAABbg");
	this.shape_12.setTransform(36.7,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAuIAAhbIAgAAIAABbg");
	this.shape_13.setTransform(29.2,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_14.setTransform(23.4,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAsQgKgEgGgGQgGgGgFgKQgDgHAAgLQAAgKADgIQAFgJAGgGQAGgIAKgDQAJgDAJAAQAKAAAJADQAJADAHAIQAHAHAEAIQADAJAAAJQAAAKgDAIQgEAJgHAHQgGAGgKAEQgKAEgJAAQgJAAgJgEgAgKgMQgEAFAAAHQAAAIAEAEQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgGgEgGQgEgEgHAAQgFAAgFAEg");
	this.shape_15.setTransform(14.9,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAuIgjhbIAkAAIANAtIAAAIIAAAAIAPg1IAjAAIgjBbg");
	this.shape_16.setTransform(5.6,17.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAJAAAOQAAAJgFAFQgFAGgIACIAZAmgAgJgDIAFAAQAEAAACgDQACgCAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_17.setTransform(79.5,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAsQgJgEgHgGQgIgHgDgJQgDgHAAgLQAAgKADgIQADgIAIgHQAHgIAJgDQAIgDAKAAQAKAAAJADQAJADAHAIQAHAHADAIQAEAJAAAJQAAAKgEAIQgDAJgHAHQgFAGgLAEQgJAEgKAAQgJAAgJgEgAgKgMQgEAFAAAHQAAAIAEAEQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgGgEgGQgEgEgHAAQgFAAgFAEg");
	this.shape_18.setTransform(69.5,4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAZIgdAAIAAALIAaAAIAAAVIgaAAIAAAig");
	this.shape_19.setTransform(61.2,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAtQgKgCgJgFIALgaIANAHQAGACAEAAQADAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgEgIgBIgFgCQgKgCgGgHQgGgEAAgKQAAgPALgJQALgJAPAAQAJAAAHACIAQAGIgLAYIgJgFIgKgCQgDAAgCABQgBAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQAAAEAOADIADABQAKADAFAGQAGAEAAAKQAAAQgLAJQgMAKgPAAQgJAAgJgDg");
	this.shape_20.setTransform(50,4.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAHAuIgVgnIAAAnIghAAIAAhbIAhAAIAAAnIATgnIAnAAIgdAtIAgAug");
	this.shape_21.setTransform(42.5,4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AANAuIgbguIABAEIAAAqIggAAIAAhbIAhAAIAbAuIgBgFIAAgpIAgAAIAABbg");
	this.shape_22.setTransform(32,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgJIgGAVIAMAAIgDgLIgDgSIAAAAg");
	this.shape_23.setTransform(22.4,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAKAuIAAghIgSAAIAAAhIgiAAIAAhbIAiAAIAAAfIASAAIAAgfIAhAAIAABbg");
	this.shape_24.setTransform(13,4.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_25.setTransform(4.7,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0,83.3,35.4);


(lib.txt_ThankForVotingTeresa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAihbIAjAAIAgBbgAgDACIgCAKIALAAIgFgVIgBgIIAAAAg");
	this.shape.setTransform(42.2,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAtQgJgCgJgFIALgaQAEADAJAEQAEACAGAAIAEgBQAAAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBQAAgEgIgBIgGgBQgKgDgGgHQgFgEAAgKQAAgOALgKQAKgJAQAAQAIAAAIACQAIACAIAEIgKAYIgLgFIgJgCIgFABIgCADQAAAEANADIAEABQAKACAFAHQAGAFAAAJQAAAPgLAKQgMAKgQAAQgIAAgKgDg");
	this.shape_1.setTransform(34,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAZIgeAAIAAAJIAbAAIAAAWIgbAAIAAAKIAeAAIAAAZg");
	this.shape_2.setTransform(27.2,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAALgFADQgFAIgIAAIAZAmgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_3.setTransform(19.7,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAuIAAhbIA8AAIAAAZIgdAAIAAAJIAbAAIAAAWIgbAAIAAAKIAeAAIAAAZg");
	this.shape_4.setTransform(11.5,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAuIAAg8IgTAAIAAgfIBFAAIAAAfIgTAAIAAA8g");
	this.shape_5.setTransform(4.4,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAALgFADQgFAHgIABIAZAmgAgJgDIAFAAQAEAAACgDQACgCAAgEQAAgEgCgCQgCgDgEAAIgFAAg");
	this.shape_6.setTransform(77.5,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAsQgIgCgIgIQgHgHgEgJQgDgJAAgJQAAgHADgLQAEgIAHgHQAIgHAIgEQAJgDAJAAQAKAAAJADQAIAEAIAHQAHAHAEAIQADAJAAAJQAAAJgDAJQgEAJgHAHQgHAHgJADQgKAEgJAAQgIAAgKgEgAgKgLQgEAEAAAHQAAAHAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgGAAQgFAAgFAFg");
	this.shape_7.setTransform(67.4,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAuIAAhbIA8AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_8.setTransform(59.2,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAtQgIgEgIgHQgHgGgEgJQgDgLAAgIQAAgIADgKQAEgKAHgFQAFgGALgFQAIgDAKAAQAOAAALAGQALAGAHAMIgeALQgCgDgDgDIgIgBQgGAAgEAFQgEAGAAAIQAAAJAEAGQAFAFAGAAQAEAAAEgCQACgCABgEIgMAAIAAgTIAxAAIAAAGQAAAGgBAHQgCAHgDAFQgHAMgLAGQgMAGgNAAQgIAAgKgDg");
	this.shape_9.setTransform(46.7,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAuIgbguIABAFIAAApIggAAIAAhbIAhAAIAbAuIgBguIAgAAIAABbg");
	this.shape_10.setTransform(36.4,17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAuIAAhbIAgAAIAABbg");
	this.shape_11.setTransform(28.9,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_12.setTransform(23.2,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAsQgJgDgHgHQgHgHgEgJQgDgJAAgJQAAgHADgLQAEgIAHgHQAIgHAIgEQAJgDAJAAQALAAAIADQAKAEAGAHQAHAHAEAIQADAJAAAJQAAALgDAHQgEAIgHAIQgIAIgIACQgKAEgJAAQgIAAgKgEgAgKgLQgEAEAAAHQAAAHAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgGgEgGQgEgEgHAAQgFAAgFAFg");
	this.shape_13.setTransform(14.6,17.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAuIgkhbIAlAAIANAtIAAAIIAAAAIAPg1IAjAAIgjBbg");
	this.shape_14.setTransform(5.3,17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAALgFADQgFAHgIABIAZAmgAgJgDIAFAAQAEAAACgDQACgCAAgEQAAgEgCgCQgCgDgEAAIgFAAg");
	this.shape_15.setTransform(79.2,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAsQgIgCgIgIQgHgHgEgJQgDgJAAgJQAAgHADgLQAEgIAHgHQAIgHAIgEQAJgDAJAAQALAAAIADQAIAEAIAHQAHAHAEAIQADAJAAAJQAAALgDAHQgEAIgHAIQgIAHgIADQgKAEgJAAQgIAAgKgEgAgKgLQgEAEAAAHQAAAHAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgGAAQgFAAgFAFg");
	this.shape_16.setTransform(69.2,5.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAuIAAhbIA7AAIAAAZIgcAAIAAALIAZAAIAAAVIgZAAIAAAig");
	this.shape_17.setTransform(61,5.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAuQgKgEgIgEIALgaQAGAEAHADQAEACAGAAIADgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgHgBIgFgBQgLgDgFgGQgGgFAAgKQAAgPALgJQALgJAPAAQAJAAAHACQAJADAGADIgKAYIgJgFIgKgCIgFABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAADAOADIADABQAKADAFAGQAGAFAAAJQAAAQgLAJQgMAKgPAAQgIAAgLgCg");
	this.shape_18.setTransform(49.7,5.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHAuIgVgnIAAAnIggAAIAAhbIAgAAIAAAnIAUgnIAmAAIgdAtIAgAug");
	this.shape_19.setTransform(42.2,5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAuIgaguIAAAuIggAAIAAhbIAhAAIAaAuIgBguIAhAAIAABbg");
	this.shape_20.setTransform(31.8,5.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgIIgFAUIALAAIgGgUIAAgJIAAAAg");
	this.shape_21.setTransform(22.1,5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAKAuIAAghIgTAAIAAAhIghAAIAAhbIAhAAIAAAfIATAAIAAgfIAhAAIAABbg");
	this.shape_22.setTransform(12.7,5.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_23.setTransform(4.4,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,83.4,35.3);


(lib.txt_ThankForVotingSammyBagelJr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAtQgGgFAAgGQAAgHAGgEQAFgEAGgBQAHABAFAEQAGAEAAAHQAAAGgGAFQgFAEgHAAQgGAAgFgEgAgOALIAAg7IAdAAIAAA7g");
	this.shape.setTransform(67.5,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAQQAAAKgFAEQgFAGgIABIAZAmgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_1.setTransform(61.6,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAtQgFgCgHgGIAKgZIAGAFIAEABQAEAAABgDIABgMIAAgxIAgAAIAAA6IgBANIgEAIQgEAGgHAEQgIAEgHAAQgHAAgIgCg");
	this.shape_2.setTransform(53.4,36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAuIAAhbIAgAAIAAA8IAgAAIAAAfg");
	this.shape_3.setTransform(43.9,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAZIgeAAIAAAJIAaAAIAAAWIgaAAIAAAKIAeAAIAAAZg");
	this.shape_4.setTransform(36.7,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAtQgKgEgGgHQgHgGgEgJQgDgJAAgKQAAgJADgJQAEgIAHgHQAGgHAKgEQAIgDAKAAQAOAAALAGQALAHAHALIgeALQgCgDgDgDIgIgBQgGAAgEAFQgEAGAAAIQAAAKAEAFQAFAFAGAAQAEAAAEgCQACgCABgEIgMAAIAAgTIAxAAIAAAGQAAAGgBAHQgCAHgDAFQgGALgMAHQgLAGgOAAQgIAAgKgDg");
	this.shape_5.setTransform(28,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAgCACIgEAKIAMAAIgGgVIAAgIIAAAAg");
	this.shape_6.setTransform(18.6,35.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgmAuIAAhbIAqAAQAQAAAHAGQAHAHABAMQgBAIgDAFQgDAFgIABQAJABAGAFQAEAFAAAKQAAANgJAHQgJAGgRAAgAgGAXIAFAAQADAAACgCQADgCAAgEQAAgEgDgBQgCgCgDAAIgFAAgAgGgKIADAAQADAAACgCQACgBAAgDIgCgFQgCgCgDAAIgDAAg");
	this.shape_7.setTransform(10.2,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAuIAAgpIgfgyIAmAAIAJAZIAAABIADgHIAAgBIAIgSIAlAAIggAyIAAApg");
	this.shape_8.setTransform(49.8,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAeAuIgGg0IgOA0IgTAAIgOg0IgGA0IghAAIAQhbIAjAAIAIAaIADAWIAAAAIADgLIALglIAiAAIAOBbg");
	this.shape_9.setTransform(40,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAeAuIgGg0IgBAGIgDAKIgKAkIgTAAIgNguIgBgGIgGA0IggAAIAPhbIAjAAIAHAaQAEAOAAAIIAAAAIANgwIAjAAIAPBbg");
	this.shape_10.setTransform(27.9,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAuIgDgMIgYAAIgCAMIgkAAIAhhbIAkAAIAgBbgAAAgJIgFAVIALAAIgFgVIgBgIIAAAAg");
	this.shape_11.setTransform(17.5,23.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAuQgKgEgIgEIALgaIANAHQAEACAGAAIAEgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgFgIgBIgFgBQgLgDgFgGQgGgFAAgKQAAgPALgJQALgJAPAAQAJAAAHACQAIACAHAEIgKAYIgJgFIgKgCIgFABQgBABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQAAADAOADIADABQAKADAFAGQAGAEAAAKQAAAQgLAJQgMAKgPAAQgIAAgLgCg");
	this.shape_12.setTransform(9.2,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAALgFADQgFAHgIABIAZAmgAgJgDIAFAAQAEAAACgDQACgCAAgEQAAgEgCgCQgCgDgEAAIgFAAg");
	this.shape_13.setTransform(82.2,10.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgEgJQgDgJAAgJQAAgHADgLQAEgIAHgHQAIgHAIgEQAJgDAJAAQALAAAIADQAIAEAIAHQAHAHAEAIQADAJAAAJQAAALgDAHQgEAIgHAIQgHAHgJAEQgLADgIAAQgHAAgLgDgAgKgLQgEAEAAAHQAAAHAEAFQAFAFAFAAQAGAAAFgFQAEgFAAgHQAAgHgEgEQgFgFgGAAQgFAAgFAFg");
	this.shape_14.setTransform(72.1,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAuIAAhbIA8AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_15.setTransform(63.9,10.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAtQgIgEgIgHQgHgGgEgJQgDgLAAgIQAAgHADgLQAEgIAHgHQAGgHAKgEQAIgDAKAAQAOAAALAGQALAGAHAMIgeALQgCgDgDgDIgIgBQgGAAgEAFQgEAGAAAIQAAAKAEAFQAFAFAGAAQAEAAAEgCQACgCABgEIgMAAIAAgTIAxAAIAAAGQAAAGgBAHQgCAHgDAFQgGALgMAHQgLAGgOAAQgIAAgKgDg");
	this.shape_16.setTransform(51.4,10.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AANAuIgbguIABAFIAAApIggAAIAAhbIAhAAIAbAuIgBguIAgAAIAABbg");
	this.shape_17.setTransform(41.1,10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPAuIAAhbIAgAAIAABbg");
	this.shape_18.setTransform(33.6,10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_19.setTransform(27.9,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgEgJQgDgJAAgJQAAgHADgLQAEgIAHgHQAIgHAIgEQAJgDAJAAQALAAAIADQAKAEAGAHQAHAHAEAIQADAJAAAJQAAALgDAHQgEAIgHAIQgIAIgIADQgLADgIAAQgHAAgLgDgAgKgLQgEAEAAAHQAAAHAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgHgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_20.setTransform(19.3,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAuIgkhbIAlAAIANAtIAAAIIAAAAIAPg1IAjAAIgjBbg");
	this.shape_21.setTransform(10,10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAFAuIgOgeIAAAeIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAALgFADQgFAIgIAAIAZAmgAgJgDIAFAAQAEAAACgDQACgCAAgEQAAgEgCgCQgCgDgEAAIgFAAg");
	this.shape_22.setTransform(83.9,-2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgEgJQgDgJAAgJQAAgHADgLQAEgIAHgHQAIgHAIgEQAJgDAJAAQALAAAIADQAKAEAGAHQAHAHAEAIQADAJAAAJQAAALgDAHQgEAIgHAIQgIAIgIADQgLADgIAAQgHAAgLgDgAgKgLQgEAEAAAHQAAAHAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgHgEgEQgEgFgHAAQgFAAgFAFg");
	this.shape_23.setTransform(73.9,-2.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdAuIAAhbIA7AAIAAAZIgcAAIAAALIAZAAIAAAWIgZAAIAAAhg");
	this.shape_24.setTransform(65.7,-2.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAuQgKgEgIgEIALgaIANAHQAEACAGAAIAEgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgFgHgBIgFgBQgLgDgFgGQgGgFAAgKQAAgPALgJQALgJAPAAQAJAAAHACQAJADAGADIgKAYIgJgFIgKgCIgFABIgCAEQAAADAOADIADABQAKADAFAGQAGAFAAAJQAAAQgLAJQgMAKgPAAQgIAAgLgCg");
	this.shape_25.setTransform(54.4,-2.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAHAuIgUgnIAAAnIghAAIAAhbIAhAAIAAAnIATgnIAmAAIgdAtIAgAug");
	this.shape_26.setTransform(46.9,-2.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AANAuIgaguIAAAuIggAAIAAhbIAhAAIAbAuIgCguIAhAAIAABbg");
	this.shape_27.setTransform(36.5,-2.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgIIgFAUIALAAIgGgUIAAgJIAAAAg");
	this.shape_28.setTransform(26.8,-2.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAKAuIAAghIgTAAIAAAhIghAAIAAhbIAhAAIAAAfIATAAIAAgfIAhAAIAABbg");
	this.shape_29.setTransform(17.4,-2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_30.setTransform(9.1,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.9,-7.3,83.4,48.2);


(lib.txt_ThankForVotingLavash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAtQgGgFAAgGQAAgHAGgEQAGgEAFAAQAHAAAGAEQAEAEAAAHQAAAGgEAFQgGAEgHAAQgFAAgGgEgAgOALIAAg7IAdAAIAAA7g");
	this.shape.setTransform(52.9,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKAuIAAghIgTAAIAAAhIghAAIAAhbIAhAAIAAAfIATAAIAAgfIAhAAIAABbg");
	this.shape_1.setTransform(45.8,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAuQgKgEgIgEIALgaQAIAFAFACQAEACAGAAIADgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgEgHgCIgFgBQgLgDgFgGQgGgEAAgLQAAgPALgJQALgJAPAAQAJAAAHACQAJADAGADIgKAYIgJgFIgKgCIgFABQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAADAOADIADABQAKADAFAGQAGAFAAAJQAAAQgLAJQgMAKgPAAQgJAAgKgCg");
	this.shape_2.setTransform(37.2,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgJIgGAVIAMAAIgFgVIgBgIIAAAAg");
	this.shape_3.setTransform(29.2,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAuIgjhbIAkAAIAMAtIABAIIAAAAIAPg1IAjAAIgjBbg");
	this.shape_4.setTransform(20.7,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgJIgGAVIAMAAIgDgKIgDgTIAAAAg");
	this.shape_5.setTransform(12.1,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAuIAAhbIAgAAIAAA9IAhAAIAAAeg");
	this.shape_6.setTransform(4.5,30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAFAuIgOgeIAAAeIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAALgFADQgFAIgIAAIAZAmgAgJgDIAFAAQAEAAACgCQACgEAAgDQAAgEgCgCQgCgDgEAAIgFAAg");
	this.shape_7.setTransform(77.1,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgGgDgJQgEgJAAgKQAAgJAEgJQADgIAHgHQAHgHAJgEQAJgDAJAAQAKAAAJADQAKAEAGAHQAHAHAEAIQADAJAAAJQAAALgDAHQgFAKgGAGQgIAHgIAEQgMADgHAAQgHAAgLgDgAgKgLQgEAEAAAHQAAAHAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgHQAAgHgEgEQgEgFgHAAQgGAAgEAFg");
	this.shape_8.setTransform(67.1,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdAuIAAhbIA7AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_9.setTransform(58.9,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgGgDgJQgEgKAAgJQAAgIAEgKQADgIAHgHQAHgHAJgEQAJgDAJAAQAOAAALAGQALAHAHALIgeALQgCgDgDgDQgDgBgFAAQgGAAgEAFQgEAGAAAIQAAAKAEAFQAFAFAGAAQAEAAAEgCQADgCAAgEIgMAAIAAgTIAxAAIAAAGQAAAHgBAGQgCAHgDAFQgGAMgMAGQgLAGgOAAQgHAAgLgDg");
	this.shape_10.setTransform(46.4,17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAuIgbguIABAuIggAAIAAhbIAhAAIAaAuIgBguIAhAAIAABbg");
	this.shape_11.setTransform(36.1,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAuIAAhbIAgAAIAABbg");
	this.shape_12.setTransform(28.6,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_13.setTransform(22.8,17.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAtQgKgEgGgHQgHgGgEgJQgDgJAAgKQAAgJADgJQAEgIAHgHQAGgHAKgEQAJgDAJAAQAKAAAJADQAJAEAHAHQAHAHAEAIQADAJAAAJQAAALgDAHQgFAKgGAGQgHAHgJAEQgLADgIAAQgHAAgLgDgAgKgLQgEAEAAAHQAAAIAEAEQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgGgEgFQgEgFgHAAQgFAAgFAFg");
	this.shape_14.setTransform(14.3,17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOAuIgjhbIAkAAIANAtIAAAIIAAAAIAPg1IAjAAIgjBbg");
	this.shape_15.setTransform(5,17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAFAuIgOgeIAAAeIghAAIAAhbIAqAAQARAAAJAIQAKAJAAAOQAAAKgFAEQgFAIgIAAIAZAmgAgJgDIAFAAQAEAAACgCQACgEAAgDQAAgEgCgCQgCgDgEAAIgFAAg");
	this.shape_16.setTransform(78.9,5.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgGgEgJQgDgJAAgKQAAgJADgJQADgIAIgHQAHgHAJgEQAIgDAKAAQAKAAAJADQAJAEAHAHQAHAHADAIQAEAJAAAJQAAALgEAHQgEAKgGAGQgHAHgJAEQgLADgIAAQgIAAgKgDgAgKgLQgFAEAAAHQAAAHAFAFQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgGgEgFQgEgFgHAAQgFAAgFAFg");
	this.shape_17.setTransform(68.9,5.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAZIgdAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_18.setTransform(60.6,5.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAuQgKgDgJgFIALgaQAHAFAGACQAEACAGAAIAEgBIACgDQAAgEgIgCIgFgBQgKgDgGgGQgGgFAAgKQAAgPALgJQAKgJAQAAQAJAAAHACQAIACAIAEIgLAYIgJgFQgFgCgFAAIgFABQgBABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAADAOADIADABQAKADAFAGQAGAEAAAKQAAAQgLAJQgMAKgPAAQgIAAgKgCg");
	this.shape_19.setTransform(49.4,5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAHAuIgVgnIAAAnIghAAIAAhbIAhAAIAAAnIATgnIAnAAIgdAtIAgAug");
	this.shape_20.setTransform(41.9,5.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANAuIgbguIABAEIAAAqIggAAIAAhbIAhAAIAbAuIgBgFIAAgpIAgAAIAABbg");
	this.shape_21.setTransform(31.4,5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPAuIgDgLIgXAAIgDALIgkAAIAhhbIAjAAIAhBbgAAAgIIgGAUIAMAAIgDgLIgDgSIAAAAg");
	this.shape_22.setTransform(21.8,5.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAKAuIAAghIgSAAIAAAhIgiAAIAAhbIAiAAIAAAfIASAAIAAgfIAhAAIAABbg");
	this.shape_23.setTransform(12.4,5.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_24.setTransform(4.1,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0.2,83.3,35.3);


(lib.txt_ThankForVotingChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAuIAAgpIgfgyIAmAAIAJAaIAAAAIACgHIAIgTIAmAAIggAyIAAApg");
	this.shape.setTransform(58.4,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQAQAAAKAIQAKAIAAAQQAAAJgFAFQgFAGgIABIAZAmgAgJgCIAFAAQAEgBACgCQACgDAAgDQAAgFgCgDQgCgCgEAAIgFAAg");
	this.shape_1.setTransform(50.8,31.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAgCACIgDALIALAAIgGgWIAAgIIAAAAg");
	this.shape_2.setTransform(41.5,31.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAuIAAhbIAfAAIAAA9IAgAAIAAAeg");
	this.shape_3.setTransform(33.9,31.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAuIAAhbIAgAAIAAA9IAgAAIAAAeg");
	this.shape_4.setTransform(27,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAuIAAhbIAgAAIAABbg");
	this.shape_5.setTransform(20.8,31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKAuIAAggIgTAAIAAAgIghAAIAAhbIAhAAIAAAfIATAAIAAgfIAhAAIAABbg");
	this.shape_6.setTransform(13.6,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAvIgJgEQgNgHgGgLQgHgLAAgOQABgJADgJQADgIAIgHQAGgHAJgEQAHgDALAAIAMABIAKADIAAAjQgEgEgGgDQgEgCgFAAQgJAAgFAFQgCAFAAAHQAAAIACAFQAGAFAHAAIAKgCIAKgHIgBAjIgKADIgLABIgNgBg");
	this.shape_7.setTransform(4.9,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAFAuIgOgeIAAAeIghAAIAAhbIAqAAQAQAAAKAJQAKAHAAAPQAAAJgFAGQgFAGgIABIAZAmgAgJgCIAFAAQAEAAACgDQACgCAAgEQAAgFgCgCQgCgDgEAAIgFAAg");
	this.shape_8.setTransform(77.5,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgDgIQgEgJAAgKQAAgJAEgJQAEgJAGgGQAHgHAJgEQALgDAHAAQAJAAAKADQAKAEAGAHQAGAGAFAKQADAHAAAKQAAAKgDAJQgFAJgGAGQgGAHgKAEQgJADgKAAQgJAAgJgDgAgKgLQgEAEAAAHQAAAIAEAEQAEAFAGAAQAGAAAFgFQAEgFAAgHQAAgGgEgFQgFgFgGAAQgFAAgFAFg");
	this.shape_9.setTransform(67.5,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgdAuIAAhbIA7AAIAAAaIgcAAIAAAKIAaAAIAAAWIgaAAIAAAhg");
	this.shape_10.setTransform(59.2,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgSAtQgLgFgFgGQgIgHgDgIQgDgJAAgKQAAgJADgJQAEgIAHgHQAGgHAKgEQAKgDAIAAQAOAAALAGQALAHAHALIgeALQgDgEgDgBQgCgCgFAAQgGAAgEAFQgEAGAAAIQAAAKAEAFQAEAFAHAAQAFAAACgCQAEgCAAgDIgNAAIAAgUIAyAAIAAAEIAAADQAAAGgCAGQgBAIgDAEQgHAMgLAGQgLAGgOAAQgKAAgIgDg");
	this.shape_11.setTransform(46.8,18.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AANAuIgbguIABAuIggAAIAAhbIAhAAIAbAvIgBgFIAAgqIAgAAIAABbg");
	this.shape_12.setTransform(36.4,18.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAuIAAhbIAgAAIAABbg");
	this.shape_13.setTransform(28.9,18.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_14.setTransform(23.2,18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAtQgKgEgGgHQgHgHgEgIQgDgJAAgKQAAgJADgJQAFgJAGgGQAGgHAKgEQALgDAHAAQAIAAALADQAJAEAHAHQAGAFAFALQADAHAAAKQAAAKgDAJQgFAJgGAGQgHAHgJAEQgJADgKAAQgJAAgJgDgAgKgLQgEAFAAAGQAAAHAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgGgEgFQgFgFgGAAQgFAAgFAFg");
	this.shape_15.setTransform(14.6,18.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAuIgkhbIAkAAIANAtIABAJIAAAAIAPg2IAjAAIgjBbg");
	this.shape_16.setTransform(5.4,18.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAFAuIgOgeIAAAeIghAAIAAhbIAqAAQARAAAJAJQAKAHAAAPQAAAKgFAFQgFAGgIACIAZAlgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgCQgCgDgEAAIgFAAg");
	this.shape_17.setTransform(79.2,5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgEgIQgDgJAAgKQAAgJADgJQAEgJAHgGQAHgHAJgEQAKgDAIAAQAJAAAKADQAJAEAHAHQAGAGAEAKQAEAHAAAKQAAAKgEAJQgEAJgGAGQgHAHgJAEQgJADgKAAQgKAAgIgDgAgKgLQgEAFAAAGQAAAHAEAFQAFAFAFAAQAHAAAEgFQAEgFAAgHQAAgGgEgFQgFgFgGAAQgFAAgFAFg");
	this.shape_18.setTransform(69.2,5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAaIgdAAIAAAKIAaAAIAAAWIgaAAIAAAhg");
	this.shape_19.setTransform(61,5.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAuQgJgCgKgGIALgaQAGAFAGACQAHADAEAAQADAAAAgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgEgIgCIgEgBQgLgCgFgHQgGgFAAgJQAAgPALgKQAKgJAQAAIAQACQAIACAHAEIgJAZQgGgFgEgBQgEgCgGAAIgGABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAEAOADIADAAQAJACAHAHQAFAFAAAJQAAAQgLAKQgMAJgPAAQgLAAgHgCg");
	this.shape_20.setTransform(49.8,5.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAHAuIgVgmIAAAmIghAAIAAhbIAhAAIAAAoIATgoIAnAAIgdAtIAgAug");
	this.shape_21.setTransform(42.3,5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AANAuIgbguIABAEIAAAqIggAAIAAhbIAhAAIAbAvIgBgGIAAgpIAgAAIAABbg");
	this.shape_22.setTransform(31.8,5.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPAuIgDgLIgXAAIgDALIgkAAIAhhbIAjAAIAhBbgAAAgIIgGAUIAMAAIgDgKIgDgSIAAAAg");
	this.shape_23.setTransform(22.1,5.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAKAuIAAghIgSAAIAAAhIgiAAIAAhbIAiAAIAAAfIASAAIAAgfIAhAAIAABbg");
	this.shape_24.setTransform(12.8,5.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_25.setTransform(4.4,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.6,83.3,35.4);


(lib.txt_ThankForVotingBrenda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAtQgEgFAAgGQAAgHAEgEQAGgEAGAAQAHAAAFAEQAFAEABAHQgBAGgFAFQgGAEgGAAQgGAAgGgEgAgPALIAAg7IAeAAIAAA7g");
	this.shape.setTransform(55.7,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAihbIAjAAIAgBbgAgDACIgCAKIALAAIgFgVIgBgIIAAAAg");
	this.shape_1.setTransform(49.1,30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgrAuIAAhbIAbAAIAUABQAJACAGADQAMAGAHALQAGAKAAAMQAAANgGAKQgHALgMAGQgGADgJACIgWABgAgKASQAKAAAFgFQAFgEAAgJQAAgHgFgFQgFgEgIAAIgCAAg");
	this.shape_2.setTransform(40.2,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AANAuIgbguIABAEIABAqIghAAIAAhbIAhAAIAaAvIgBgvIAhAAIAABbg");
	this.shape_3.setTransform(30.1,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgeAuIAAhbIA8AAIAAAZIgdAAIAAAJIAaAAIAAAWIgaAAIAAAKIAeAAIAAAZg");
	this.shape_4.setTransform(21.6,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAAKgFAFQgFAGgIABIAZAmgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_5.setTransform(14.1,30.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgmAuIAAhbIAqAAQAPAAAIAHQAIAHAAALQAAAIgEAFQgEAFgHACQAKAAAFAFQAEAGAAAJQAAAMgJAHQgIAHgSAAgAgGAXIAFAAQACAAADgCQAEgCAAgDQAAgEgEgCQgBgCgEAAIgFAAgAgGgKIADAAQADAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgCgBQgCgCgDAAIgDAAg");
	this.shape_6.setTransform(5.3,30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAAKgFAFQgFAGgIABIAZAmgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_7.setTransform(77.3,17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgDgIQgEgKAAgJQAAgIAEgJQADgKAHgGQAHgHAJgDQAKgEAIAAQAKAAAJAEQAKADAGAHQAHAHAEAJQADAHAAAKQAAAKgDAJQgEAIgHAHQgIAHgIAEQgJADgKAAQgJAAgJgDgAgKgLQgEAFAAAGQAAAIAEAEQAFAFAFAAQAHAAAEgFQAEgEAAgIQAAgGgEgFQgEgFgHAAQgFAAgFAFg");
	this.shape_8.setTransform(67.2,17.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeAuIAAhbIA8AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_9.setTransform(59,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAtQgIgDgIgHQgHgHgDgJQgEgJAAgKQAAgIAEgKQADgIAHgHQAIgIAIgCQAKgEAIAAQANAAAMAGQAKAGAIANIgeALQgCgEgDgCQgEgCgEAAQgFAAgFAGQgEAFAAAIQAAAKAEAFQAEAFAHAAQAFAAADgCQACgBABgEIgMAAIAAgUIAxAAIAAAHQAAAGgBAGQgCAHgDAFQgGALgMAHQgLAGgOAAQgJAAgJgDg");
	this.shape_10.setTransform(46.5,17.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AANAuIgaguIABAuIghAAIAAhbIAhAAIAbAvIgBgvIAgAAIAABbg");
	this.shape_11.setTransform(36.2,17.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAuIAAhbIAgAAIAABbg");
	this.shape_12.setTransform(28.7,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_13.setTransform(23,17.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgIgHgCgIQgEgJAAgKQAAgKAEgHQACgKAIgGQAHgHAJgDQAJgEAJAAQAKAAAJAEQAJADAHAHQAHAHADAJQAEAHAAAKQAAAKgEAJQgDAIgHAHQgHAHgJAEQgJADgKAAQgKAAgIgDgAgKgLQgEAFgBAGQABAIAEAEQAFAFAFAAQAGAAAFgFQAEgFAAgHQAAgGgEgFQgFgFgGAAQgFAAgFAFg");
	this.shape_14.setTransform(14.4,17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOAuIgkhbIAlAAIANAtIAAAJIAAAAIAPg2IAjAAIgjBbg");
	this.shape_15.setTransform(5.1,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAAKgFAFQgFAGgIABIAZAmgAgJgDIAFAAQAEAAACgCQACgDAAgEQAAgEgCgDQgCgCgEAAIgFAAg");
	this.shape_16.setTransform(79,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAtQgJgEgHgHQgHgHgDgIQgEgJAAgKQAAgKAEgHQADgKAHgGQAHgHAJgDQAKgEAIAAQAJAAAKAEQAKADAGAHQAHAHAEAJQADAIAAAJQAAAKgDAJQgEAIgHAHQgIAHgIAEQgJADgKAAQgJAAgJgDgAgKgLQgEAFAAAGQAAAIAEAEQAEAFAGAAQAHAAAEgFQAEgEAAgIQAAgGgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_17.setTransform(69,4.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAuIAAhbIA7AAIAAAZIgcAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_18.setTransform(60.8,4.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAuQgKgCgJgGIALgaIANAHQAGADAEAAQADAAABgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgIgCIgFgBQgKgCgGgHQgGgFAAgJQAAgPALgKQALgJAPAAQAHAAAJACIAQAGIgLAZIgJgGIgKgCQgDAAgCACQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAEAOADIADABQAKABAFAHQAGAEAAALQAAAPgLAKQgLAJgQAAQgLAAgHgCg");
	this.shape_19.setTransform(49.5,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAHAuIgUgnIAAAnIghAAIAAhbIAhAAIAAAoIATgoIAlAAIgcAtIAhAug");
	this.shape_20.setTransform(42.1,4.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AANAuIgagvIAAAvIggAAIAAhbIAhAAIAbAvIgBgFIAAgqIAgAAIAABbg");
	this.shape_21.setTransform(31.6,4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgJIgGAVIAMAAIgDgKIgDgTIAAAAg");
	this.shape_22.setTransform(21.9,4.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAKAuIAAghIgTAAIAAAhIghAAIAAhbIAhAAIAAAfIATAAIAAgfIAhAAIAABbg");
	this.shape_23.setTransform(12.6,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_24.setTransform(4.2,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.4,35.4);


(lib.txt_ThankForVoting = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAtQgGgFABgGQgBgHAGgEQAFgEAGAAQAHAAAFAEQAFAEAAAHQAAAGgFAFQgEAEgIAAQgHAAgEgEgAgPALIAAg7IAeAAIAAA7g");
	this.shape.setTransform(46.8,30.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAHAuIgVgnIAAAnIggAAIAAhbIAgAAIAAAnIAUgnIAlAAIgcAtIAgAug");
	this.shape_1.setTransform(40.7,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANAuIgbguIABAEIABAqIghAAIAAhbIAhAAIAbAuIgBguIAgAAIAABbg");
	this.shape_2.setTransform(30.3,30.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgJIgGAVIAMAAIgGgVIAAgIIAAAAg");
	this.shape_3.setTransform(20.6,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAJAAAOQAAAKgFAFQgFAFgIACIAZAmgAgJgDIAFAAQAEAAABgDQADgCAAgEQAAgFgDgCQgBgCgEAAIgFAAg");
	this.shape_4.setTransform(12.4,30.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAZIgdAAIAAALIAaAAIAAAVIgaAAIAAAig");
	this.shape_5.setTransform(4.4,30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAJAAAOQAAAKgFAFQgFAFgIACIAZAmgAgJgDIAFAAQAEAAABgCQADgCAAgFQAAgFgDgCQgBgCgEAAIgFAAg");
	this.shape_6.setTransform(77.3,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAsQgKgEgGgGQgHgHgEgJQgDgHAAgLQAAgKADgIQAEgIAHgHQAGgIAKgDQAIgDAKAAQAKAAAJADQAJADAHAIQAIAHACAIQAEAKAAAIQAAAJgEAJQgCAIgIAIQgHAGgJAEQgKAEgJAAQgJAAgJgEgAgKgMQgEAGAAAGQAAAHAEAFQAEAFAGAAQAGAAAFgFQAEgEAAgIQAAgHgEgFQgFgEgGAAQgGAAgEAEg");
	this.shape_7.setTransform(67.2,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAZIgdAAIAAALIAaAAIAAAVIgaAAIAAAig");
	this.shape_8.setTransform(59,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAsQgJgDgHgHQgHgGgEgKQgDgHAAgLQAAgKADgIQAEgJAHgHQAHgHAJgDQAIgDAKAAQAOAAALAGQALAGAHAMIgeALQgCgDgEgDQgEgCgDAAQgGAAgEAGQgEAGAAAIQAAAJAEAGQAFAFAGAAQAFAAACgCQADgCABgEIgMAAIAAgUIAxAAIAAAFIAAACQAAAGgBAHQgCAHgDAEQgHAMgLAHQgMAGgNAAQgJAAgJgEg");
	this.shape_9.setTransform(46.5,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANAuIgbgvIABAFIAAAqIggAAIAAhbIAhAAIAbAvIgBgGIAAgpIAgAAIAABbg");
	this.shape_10.setTransform(36.2,17.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAuIAAhbIAgAAIAABbg");
	this.shape_11.setTransform(28.7,17.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPAuIAAg8IgTAAIAAgfIBFAAIAAAfIgTAAIAAA8g");
	this.shape_12.setTransform(23,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAsQgKgEgGgGQgHgHgEgJQgDgHAAgLQAAgKADgIQAEgIAHgHQAGgIAKgDQAIgDAKAAQAKAAAJADQAJADAHAIQAHAHAEAIQADALAAAHQAAAJgEAJQgDAJgHAHQgHAGgJAEQgKAEgJAAQgJAAgJgEgAgKgMQgEAGAAAGQAAAHAEAFQAEAFAGAAQAGAAAFgFQAEgFAAgHQAAgGgEgGQgFgEgGAAQgGAAgEAEg");
	this.shape_13.setTransform(14.4,17.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAuIgkhbIAkAAIANAtIABAJIAAAAIAPg2IAjAAIgjBbg");
	this.shape_14.setTransform(5.1,17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAFAuIgOgfIAAAfIghAAIAAhbIAqAAQARAAAJAIQAKAIAAAPQAAAKgFAFQgFAGgIABIAZAmgAgJgDIAFAAQAEAAABgCQADgCAAgFQAAgFgDgCQgBgCgEAAIgFAAg");
	this.shape_15.setTransform(79,5.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAsQgKgEgGgGQgHgHgEgIQgDgIAAgLQAAgKADgIQAEgIAHgHQAGgHAKgEQAJgEAJAAQAJAAAKAEQAJAEAHAHQAIAIACAHQAEAKAAAIQAAAJgEAKQgDAIgHAHQgHAGgJAEQgKAFgJAAQgJAAgJgFgAgKgMQgEAGAAAGQAAAIAEAEQAEAFAGAAQAGAAAFgFQAEgEAAgIQAAgHgEgFQgFgEgGAAQgGAAgEAEg");
	this.shape_16.setTransform(69,5.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgeAuIAAhbIA9AAIAAAZIgdAAIAAALIAaAAIAAAWIgaAAIAAAhg");
	this.shape_17.setTransform(60.7,5.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAuQgJgDgKgFIALgaIAMAHQAHACAEABQADgBAAgBQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBQAAgDgIgCIgEgBQgLgDgFgGQgGgEAAgKQAAgPALgKQALgKAPAAQAHABAJACQAGABAJAFIgJAZIgKgGIgJgCQgEAAgCACQAAAAgBAAQAAAAAAAAQgBABAAAAQAAABAAAAQAAAFAOACIADABQAKADAGAGQAFAFAAAJQAAAPgLALQgLAKgQAAQgKAAgIgDg");
	this.shape_18.setTransform(49.5,5.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHAuIgVgnIAAAnIggAAIAAhbIAgAAIAAAoIAUgoIAlAAIgcAtIAgAug");
	this.shape_19.setTransform(42,5.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AANAuIgbgvIABAFIAAAqIggAAIAAhbIAgAAIAbAvIgBgvIAhAAIAABbg");
	this.shape_20.setTransform(31.6,5.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAPAuIgDgMIgXAAIgDAMIgkAAIAhhbIAjAAIAhBbgAAAgJIgFAVIALAAIgGgVIAAgIIAAAAg");
	this.shape_21.setTransform(21.9,5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAKAuIAAghIgSAAIAAAhIgiAAIAAhbIAiAAIAAAfIASAAIAAgfIAhAAIAABbg");
	this.shape_22.setTransform(12.5,5.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAuIAAg9IgTAAIAAgeIBFAAIAAAeIgTAAIAAA9g");
	this.shape_23.setTransform(4.2,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,83.4,35.3);


(lib.txt_Sausage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.thisNov8SausageParty1();
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
	this.shape.setTransform(157.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAqQgMgJAAgSIAAg/IAbAAIAAA9QAAAGABADQACADACAAQAEAAABgDQABgBAAgIIAAg9IAbAAIAABDQAAAIgDAFQgCAGgHAEQgIAHgMAAQgNgBgIgGg");
	this.shape_1.setTransform(150.3,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAxIAAhhIAfAAQAPABAJAHQAIAIAAAMQAAATgSABQALAAAEAFQAFAFAAALQAAAMgIAIQgIAHgOABgAgFAcIACAAQADAAADgDQADgDAAgEQAAgEgDgDQgDgDgDAAIgCAAgAgFgKIABAAQAEAAACgCQADgCAAgFQAAgIgIAAIgCAAg");
	this.shape_2.setTransform(143.1,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A3bB7IAAj1MAu2AAAIAAD1g");
	this.shape_3.setTransform(150,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

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


(lib.img_voteN1_07_Chillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N1();
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmXMCIAA0/IOrAAIAAU/g");
	mask.setTransform(53.2,77);

	// Layer 2
	this.instance_1 = new lib.VoteForChillary();
	this.instance_1.setTransform(29.9,5.1,0.59,0.59);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.VoteForMY();
	this.instance_2.setTransform(150,135,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,300,250);


(lib.img_voteN1_06_Trumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N1();
	this.instance.setTransform(0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmXMCIAAzHIOrAAIAATHg");
	mask.setTransform(53.2,77);

	// Layer 2
	this.instance_1 = new lib.VoteForTrumpkinpngcopy();
	this.instance_1.setTransform(19.5,-6.3,0.77,0.77);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.VoteForMY();
	this.instance_2.setTransform(150,135,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,300,250);


(lib.img_voteN1_05_Lavash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N1();
	this.instance.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmXNNIAAzHIOrAAIAATHg");
	mask.setTransform(53.2,84.5);

	// Layer 2
	this.instance_1 = new lib.VoteForLavasha();
	this.instance_1.setTransform(15.6,17.7,0.62,0.62);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.VoteForMY();
	this.instance_2.setTransform(150,150,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,25,300,250);


(lib.img_voteN1_04_Teresa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AneLuIAA1BIQJAAIAAVBg");
	mask.setTransform(55.6,75.1);

	// Layer 2
	this.instance_1 = new lib.VoteForTaco_teresa();
	this.instance_1.setTransform(8.2,6.4,0.63,0.63);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.VoteForMY();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img_voteN1_03_SammyBagelJr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao2JkIAAzHIRtAAIAATHg");
	mask.setTransform(59.4,82.8);

	// Layer 2
	this.instance_1 = new lib.VoteForBagel_bagelSammy();
	this.instance_1.setTransform(8.9,-3.5,0.73,0.73);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.VoteForMY();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img_voteN1_02_Brenda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AirHVIhqifIjAuZIOrAAIilQ4IkKCPg");
	mask.setTransform(59.4,82.8);

	// Layer 2
	this.instance_1 = new lib.VoteForHotDogBum_Brenda();
	this.instance_1.setTransform(18.8,1.1,0.8,0.8);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.VoteForMY();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.img_voteN1_01_Frank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVJkIAAzHIOrAAIAATHg");
	mask.setTransform(59.4,82.8);

	// Layer 2
	this.instance_1 = new lib.VoteForSausage();
	this.instance_1.setTransform(19.6,-13,1,1,0.3);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 1
	this.instance_2 = new lib.VoteForMY();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._102_ResultsChillary = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(147));

	// txt_N1Vote
	this.instance = new lib.img_voteN1_07_Chillary();
	this.instance.setTransform(151,129.8,1,1,0,0,0,150,125);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:121.4,alpha:1},2).to({y:123.8},1).to({_off:true},8).wait(146));

	// txt_sausageParty
	this.instance_1 = new lib.txt_Sausage();
	this.instance_1.setTransform(150,145,1.05,1.05,0,0,0,150,125);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,y:125,alpha:1},3).to({_off:true},8).wait(146));

	// Txt_ThanksForVoting
	this.instance_2 = new lib.txt_ThankForVotingChillary();
	this.instance_2.setTransform(171,125.3,1.63,1.63,0,0,0,41.6,17.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:123.5,alpha:1},3).to({_off:true},8).wait(146));

	// resultadoFondo
	this.instance_3 = new lib.FondoResultado();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},11).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,0,315,276.3);


(lib._101_ResultsTrumpkin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(144));

	// txt_N1Vote
	this.instance = new lib.img_voteN1_06_Trumpkin();
	this.instance.setTransform(151,129.8,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({y:121.4,alpha:1},2).to({y:123.8},1).to({_off:true},9).wait(142));

	// txt_sausageParty
	this.instance_1 = new lib.txt_Sausage();
	this.instance_1.setTransform(150,145,1.05,1.05,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({scaleX:1,scaleY:1,y:125,alpha:1},3).to({_off:true},9).wait(142));

	// Txt_ThanksForVoting
	this.instance_2 = new lib.txt_ThankForVotingTrumkin();
	this.instance_2.setTransform(171,125.3,1.63,1.63,0,0,0,41.6,17.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:123.5,alpha:1},3).to({_off:true},9).wait(142));

	// resultadoFondo
	this.instance_3 = new lib.FondoResultado();
	this.instance_3.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:true},12).wait(142));

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
	this.VoteForVoteForHotDogBum = new lib.txt_ThankForVotingLavash();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.instance_3 = new lib.Txt_VoteForLavash();
	this.instance_3.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.VoteForVoteForHotDogBum}]},2).to({state:[{t:this.instance_3}]},2).to({state:[]},26).to({state:[]},1).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({_off:true,alpha:1},2).wait(218));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(192));

	// img_VoteForVoteForHotDogBum
	this.instance_4 = new lib.VoteForLavash();
	this.instance_4.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(192));

	// txt_sausageParty
	this.instance_5 = new lib.txt_Sausage();
	this.instance_5.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// bg
	this.instance_6 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},30).wait(192));

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


(lib._05_ResultsLavash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(147));

	// txt_N1Vote
	this.instance = new lib.img_voteN1_05_Lavash();
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
	this.instance_2 = new lib.txt_ThankForVotingLavash();
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
	this.VoteForVoteForHotDogBum = new lib.txt_ThankForVotingLavash();
	this.VoteForVoteForHotDogBum.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);
	this.VoteForVoteForHotDogBum.alpha = 0;
	this.VoteForVoteForHotDogBum._off = true;

	this.instance_3 = new lib.Txt_VoteForLavash();
	this.instance_3.setTransform(-309,117.1,1,1,0,0,0,454.2,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.VoteForVoteForHotDogBum}]},2).to({state:[{t:this.instance_3}]},2).to({state:[]},26).to({state:[]},1).wait(191));
	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum).wait(2).to({_off:false},0).to({_off:true,alpha:1},2).wait(218));

	// Img_tarima_izq
	this.VoteForVoteForHotDogBum_1 = new lib.Izq_Tarima_();
	this.VoteForVoteForHotDogBum_1.setTransform(77.9,210,1,1,0,0,0,69.5,49);

	this.timeline.addTween(cjs.Tween.get(this.VoteForVoteForHotDogBum_1).to({y:201},2,cjs.Ease.get(0.4)).to({_off:true},28).wait(192));

	// img_VoteForVoteForHotDogBum
	this.instance_4 = new lib.VoteForLavash();
	this.instance_4.setTransform(82.3,135,1,1,0,0,0,57,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({y:123},2,cjs.Ease.get(-0.1)).to({y:125},2,cjs.Ease.get(0.3)).to({y:130},4).to({y:125},4).to({y:130},5).to({_off:true},12).wait(192));

	// txt_sausageParty
	this.instance_5 = new lib.txt_Sausage();
	this.instance_5.setTransform(150,145,1.17,1.17,0,0,0,150,125);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1,scaleY:1,y:125,alpha:1},7).to({_off:true},28).wait(187));

	// bg
	this.instance_6 = new lib.fondo_300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},30).wait(192));

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


(lib._04_ResultsTeresa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(147));

	// txt_N1Vote
	this.instance = new lib.img_voteN1_04_Teresa();
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
	this.instance_2 = new lib.txt_ThankForVotingTeresa();
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


(lib._03_ResultsSammyBagelJr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(147));

	// txt_N1Vote
	this.instance = new lib.img_voteN1_03_SammyBagelJr();
	this.instance.setTransform(151,155.8,1,1,0,0,0,150,125);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({y:140.9,alpha:1},2).to({y:143.3},1).to({_off:true},8).wait(146));

	// Txt_ThanksForVoting
	this.instance_1 = new lib.txt_ThankForVotingSammyBagelJr();
	this.instance_1.setTransform(171,125.3,1.63,1.63,0,0,0,41.6,17.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({y:123.5,alpha:1},3).to({_off:true},8).wait(146));

	// txt_sausageParty
	this.instance_2 = new lib.txt_Sausage();
	this.instance_2.setTransform(150,145,1.05,1.05,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1,scaleY:1,y:125,alpha:1},3).to({_off:true},8).wait(146));

	// resultadoFondo
	this.instance_3 = new lib.FondoResultado();
	this.instance_3.setTransform(150.1,125,1.05,1.05,0,0,0,150,125);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,x:150,alpha:1},5).to({_off:true},9).wait(146));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-6.2,315,262.5);


(lib._02_ResultsBrenda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(147));

	// txt_N1Vote
	this.instance = new lib.img_voteN1_02_Brenda();
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
	this.instance_2 = new lib.txt_ThankForVotingBrenda();
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


(lib._01_ResultsFrank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(147));

	// txt_N1Vote
	this.instance = new lib.img_voteN1_01_Frank();
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



(lib.SausageParty_300x250_StartChillaryV5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"01_ResultsFrank":5,"02_BrendaVsChillary":6,"02_ResultsBrenda":7,"03_SammyBagelJrVsTrumpkin":8,"03_Results":9,"04_TeresaVsChillary":10,"04_ResultsTeresa":11,"05_LavashVsTrumpkin":12,"05_ResultsLavash":13,"06_FrankVsChillary":14,"06_ResultsFrank":15,"07_BrendaVsTrumpkin":16,"07_ResultsBrenda":17,"08_SammyBagelJrVsChillary":18,"08_ResultsSammyBagelJr":19,"09_TeresaVsTrumpkin":20,"09_ResultsTeresa":21,"10_LavashVsChillary":22,"10_END":23,"01_ResultsTrumpkin":33,"02_ResultsChillary":34,"03_ResultsTrumpkin":35,"04_ResultsChillary":36,"05_ResultsTrumpkin":37,"06_ResultsChillary":38,"07_ResultsTrumpkin":39,"08_ResultsChillary":40,"09_ResultsTrumpkin":41,"10_ResultsChillary":42,btn_ResultsGotoTrumpkinCinco:42});

	// timeline functions:
	this.frame_0 = function() {
		///
		// footer link btn_Watch and btn_buy
				
		
		
		this.btn_buy.addEventListener("click",btn_buyToGoToWebPage);
		
		function btn_buyToGoToWebPage() {
			window.open("http://www.google.com", "_blank");
		}
		
		
		////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		
		// 01_FrankVsTrumpkin
		
		// btn_VoteForFrankONE to 01_Results
		
			this.btn_VoteForFrankONEroto.addEventListener("click", VoteForFrankONE.bind(this));
					function VoteForFrankONE(){
						
						this.gotoAndPlay("01_ResultsFrank");
						// EB.userActionCounter("VoteForSausage");
					}
					
			// btn_VoteForTranckONE to 01_Results
		
			this.btn_VoteForTrumpkinONE.addEventListener("click", VoteForTrumpkinONE.bind(this));
					function VoteForTrumpkinONE(){
						this.gotoAndPlay("01_ResultsTrumpkin");
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
					this.gotoAndPlay("02_ResultsBrenda");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForChillaryONE to ResultsOne
		
			this.btn_VoteForChillaryONE.addEventListener("click", VoteForChillaryONE.bind(this));
					function VoteForChillaryONE(){
						this.gotoAndPlay("02_ResultsChillary");
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
						this.gotoAndPlay("03_ResultsTrumpkin");
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
					this.gotoAndPlay("04_ResultsTeresa");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForChillaryONE to ResultsOne
		
			this.btn_VoteForChillaryTWO.addEventListener("click", VoteForChillaryTWO.bind(this));
					function VoteForChillaryTWO(){
						this.gotoAndPlay("04_ResultsChillary");
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
					this.gotoAndPlay("05_ResultsLavash");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForTrumpkinTHREE to ResultsOne
		
			this.btn_VoteForTrumpkinTHREE.addEventListener("click", VoteForTrumpkinTHREE.bind(this));
					function VoteForTrumpkinTHREE(){
						this.gotoAndPlay("05_ResultsTrumpkin");
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
						this.gotoAndPlay("06_ResultsFrank");
						// EB.userActionCounter("VoteForSausage");
					}
					
			// btn_VoteForTranckONE to 06_Results
		
			this.btn_VoteForChillaryTHREE.addEventListener("click", VoteForChillaryTHREE.bind(this));
					function VoteForChillaryTHREE(){
						this.gotoAndPlay("06_ResultsChillary");
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
					this.gotoAndPlay("07_ResultsBrenda");
					// EB.userActionCounter("VoteForSausage");
					}
					
		// btn_VoteForTrumpkinFOUR to 07_Results
		
			this.btn_VoteForTrumpkinFOUR.addEventListener("click", VoteForTrumpkinFOUR.bind(this));
					function VoteForTrumpkinFOUR(){
						this.gotoAndPlay("07_ResultsTrumpkin");
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
						this.gotoAndPlay("08_ResultsChillary");
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
						this.gotoAndPlay("09_ResultsTrumpkin");
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
						this.gotoAndPlay("10_ResultsChillary");
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
		
		
		//01
		this.btn_ResultsGotoTrumpkinUno.addEventListener("click", btn_VoteForFrankONEroto.bind(this));
					function btn_VoteForFrankONEroto(){
						this.gotoAndPlay("02_BrendaVsChillary");
						//EB.userActionCounter("VoteForChillary");
					}	
		//01
		this.btn_ResultsGotoChillaryUno.addEventListener("click", btn_ResultsGotoChillaryUno.bind(this));
					function btn_ResultsGotoChillaryUno(){
						this.gotoAndPlay("03_SammyBagelJrVsTrumpkin");
						//EB.userActionCounter("VoteForChillary");
					}	
		//02
		this.btn_ResultsGotoTrumpkinDos.addEventListener("click", btn_ResultsGotoTrumpkinDos.bind(this));
				function btn_ResultsGotoTrumpkinDos(){
					this.gotoAndPlay("04_TeresaVsChillary");
						//EB.userActionCounter("VoteForChillary");
				}	
		//02
		this.btn_ResultsGotoChillaryDos.addEventListener("click", btn_ResultsGotoChillaryDos.bind(this));
				function btn_ResultsGotoChillaryDos(){
					this.gotoAndPlay("05_LavashVsTrumpkin");
						//EB.userActionCounter("VoteForChillary");
				}	
		//03
		this.btn_ResultsGotoTrumpkinTres.addEventListener("click", btn_ResultsGotoTrumpkinTres.bind(this));
				function btn_ResultsGotoTrumpkinTres(){
					this.gotoAndPlay("06_FrankVsChillary");
						//EB.userActionCounter("VoteForChillary");
				}	
		//03
		this.btn_ResultsGotoChillaryTres.addEventListener("click", btn_ResultsGotoChillaryTres.bind(this));
				function btn_ResultsGotoChillaryTres(){
					this.gotoAndPlay("07_BrendaVsTrumpkin");
						//EB.userActionCounter("VoteForChillary");
				}			
				
		//04
		this.btn_ResultsGotoTrumpkinCuatro.addEventListener("click", btn_ResultsGotoTrumpkinCuatro.bind(this));
				function btn_ResultsGotoTrumpkinCuatro(){
					this.gotoAndPlay("08_SammyBagelJrVsChillary");
						//EB.userActionCounter("VoteForChillary");
				}			
				
		//04
		this.btn_ResultsGotoChillaryCuatro.addEventListener("click", btn_ResultsGotoChillaryCuatro.bind(this));
				function btn_ResultsGotoChillaryCuatro(){
					this.gotoAndPlay("09_TeresaVsTrumpkin");
						//EB.userActionCounter("VoteForChillary");
				}			
		
		//05
		this.btn_ResultsGotoTrumpkinCinco.addEventListener("click", btn_ResultsGotoTrumpkinCinco.bind(this));
				function btn_ResultsGotoTrumpkinCinco(){
					this.gotoAndPlay("10_LavashVsChillary");
						//EB.userActionCounter("VoteForChillary");
				}	
		
		//05
		//this.btn_ResultsGotoTrumpkinCinco.addEventListener("click", btn_ResultsGotoTrumpkinCinco.bind(this));
		//		function btn_ResultsGotoTrumpkinCinco(){
		//			this.gotoAndPlay("08_SammyBagelJrVsChillary");
		//				//EB.userActionCounter("VoteForChillary");
		//		}	
		
		
		// ViewResultsLandingPageFede
		this.btn_ViewResultsLandingPageFede.addEventListener("click", ViewResultsLandingPageFede.bind(this));
				function ViewResultsLandingPageFede(){
					window.open("http://ar.ansibleww.com/produccion/ansible/sausage/landing/index.html", "_blank");
				}
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
	this.frame_33 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_36 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(10).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(183));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A9181C").ss(1,1,1).p("A3WzbMAutAAAMAAAAm4MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},194).wait(31));

	// btn_Buy
	this.btn_buy = new lib.btn_buy();
	this.btn_buy.setTransform(62.6,233.2,2.007,1);
	this.btn_buy._off = true;
	new cjs.ButtonHelper(this.btn_buy, 0, 1, 2, false, new lib.btn_buy(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_buy).wait(3).to({_off:false},0).to({_off:true},190).wait(32));

	// footer
	this.instance = new lib.footer();
	this.instance.setTransform(150,251.7,1,1,0,0,0,150,12.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:237.7,alpha:1},3).to({_off:true},190).wait(32));

	// Fede_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageFede = new lib.SeeResults();
	this.btn_ViewResultsLandingPageFede.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageFede._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageFede, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageFede).wait(33).to({_off:false},0).wait(9).to({x:205.6,y:115.5},0).to({_off:true},1).wait(182));

	// 20
	this.instance_1 = new lib._102_ResultsChillary();
	this.instance_1.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_2 = new lib._10_LavashVsChillary();
	this.instance_2.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},42).to({state:[]},1).to({state:[]},161).wait(21));

	// 19
	this.btn_ResultsGotoTrumpkinCinco = new lib.VoteAgain();
	this.btn_ResultsGotoTrumpkinCinco.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoTrumpkinCinco._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoTrumpkinCinco, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoTrumpkinCinco).wait(41).to({_off:false},0).to({_off:true},1).wait(183));

	// 19
	this.instance_3 = new lib._101_ResultsTrumpkin();
	this.instance_3.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_4 = new lib._10_LavashVsChillary();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},41).to({state:[]},1).wait(183));

	// 18
	this.btn_ResultsGotoChillaryCuatro = new lib.VoteAgain();
	this.btn_ResultsGotoChillaryCuatro.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoChillaryCuatro._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoChillaryCuatro, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoChillaryCuatro).wait(40).to({_off:false},0).to({_off:true},1).wait(184));

	// 18
	this.instance_5 = new lib._102_ResultsChillary();
	this.instance_5.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_6 = new lib._10_LavashVsChillary();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},40).to({state:[]},1).to({state:[]},161).wait(23));

	// 17
	this.btn_ResultsGotoTrumpkinCuatro = new lib.VoteAgain();
	this.btn_ResultsGotoTrumpkinCuatro.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoTrumpkinCuatro._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoTrumpkinCuatro, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoTrumpkinCuatro).wait(39).to({_off:false},0).to({_off:true},1).wait(185));

	// 17
	this.instance_7 = new lib._101_ResultsTrumpkin();
	this.instance_7.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_8 = new lib._10_LavashVsChillary();
	this.instance_8.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},39).to({state:[]},1).to({state:[]},183).wait(2));

	// 16
	this.btn_ResultsGotoChillaryTres = new lib.VoteAgain();
	this.btn_ResultsGotoChillaryTres.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoChillaryTres._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoChillaryTres, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoChillaryTres).wait(38).to({_off:false},0).to({_off:true},1).wait(186));

	// 16
	this.instance_9 = new lib._101_ResultsTrumpkin();
	this.instance_9.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_10 = new lib._10_LavashVsChillary();
	this.instance_10.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10},{t:this.instance_9}]},38).to({state:[]},1).to({state:[]},160).wait(26));

	// 15
	this.btn_ResultsGotoTrumpkinTres = new lib.VoteAgain();
	this.btn_ResultsGotoTrumpkinTres.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoTrumpkinTres._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoTrumpkinTres, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoTrumpkinTres).wait(37).to({_off:false},0).to({_off:true},1).wait(187));

	// 15
	this.instance_11 = new lib._101_ResultsTrumpkin();
	this.instance_11.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_12 = new lib._10_LavashVsChillary();
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12},{t:this.instance_11}]},37).to({state:[]},1).to({state:[]},183).wait(4));

	// 14
	this.btn_ResultsGotoChillaryDos = new lib.VoteAgain();
	this.btn_ResultsGotoChillaryDos.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoChillaryDos._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoChillaryDos, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoChillaryDos).wait(36).to({_off:false},0).to({_off:true},1).wait(188));

	// 14
	this.instance_13 = new lib._102_ResultsChillary();
	this.instance_13.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_14 = new lib._10_LavashVsChillary();
	this.instance_14.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13}]},36).to({state:[]},1).to({state:[]},160).wait(28));

	// 13
	this.btn_ResultsGotoTrumpkinDos = new lib.VoteAgain();
	this.btn_ResultsGotoTrumpkinDos.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoTrumpkinDos._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoTrumpkinDos, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoTrumpkinDos).wait(35).to({_off:false},0).to({_off:true},1).wait(189));

	// 13
	this.instance_15 = new lib._101_ResultsTrumpkin();
	this.instance_15.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_16 = new lib._10_LavashVsChillary();
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16},{t:this.instance_15}]},35).to({state:[]},1).to({state:[]},185).wait(4));

	// 12
	this.btn_ViewResultsLandingPageNine = new lib.SeeResults();
	this.btn_ViewResultsLandingPageNine.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageNine._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageNine, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageNine).wait(34).to({_off:false},0).to({_off:true},1).wait(190));

	// 12_Result_Btn_VoteAgain
	this.btn_ResultsGotoChillaryUno = new lib.VoteAgain();
	this.btn_ResultsGotoChillaryUno.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoChillaryUno._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoChillaryUno, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoChillaryUno).wait(34).to({_off:false},0).to({_off:true},1).wait(190));

	// 12_ResultsChillary
	this.instance_17 = new lib._102_ResultsChillary();
	this.instance_17.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_18 = new lib._10_LavashVsChillary();
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17}]},34).to({state:[]},1).to({state:[]},162).wait(28));

	// 11_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageNine_1 = new lib.SeeResults();
	this.btn_ViewResultsLandingPageNine_1.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageNine_1._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageNine_1, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageNine_1).wait(33).to({_off:false},0).to({_off:true},1).wait(191));

	// 11_Result_Btn_VoteAgain
	this.btn_ResultsGotoTrumpkinUno = new lib.VoteAgain();
	this.btn_ResultsGotoTrumpkinUno.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoTrumpkinUno._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoTrumpkinUno, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoTrumpkinUno).wait(33).to({_off:false},0).to({_off:true},1).wait(191));

	// 11_ResultsTrumpkin
	this.instance_19 = new lib._102_ResultsChillary();
	this.instance_19.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_20 = new lib._10_LavashVsChillary();
	this.instance_20.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20},{t:this.instance_19}]},33).to({state:[]},1).to({state:[]},163).wait(28));

	// 10_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageTen = new lib.SeeResults();
	this.btn_ViewResultsLandingPageTen.setTransform(204.6,115,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageTen._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageTen, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageTen).wait(23).to({_off:false},0).to({_off:true},1).wait(201));

	// 10_ResultGotoLavashVsChillary
	this.instance_21 = new lib._05_ResultsLavash();
	this.instance_21.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(23).to({_off:false},0).to({_off:true},2).wait(200));

	// 10_btn_VoteFor
	this.btn_VoteForChillaryFIVE = new lib.boton_Izq();
	this.btn_VoteForChillaryFIVE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryFIVE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryFIVE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryFIVE).wait(22).to({_off:false},0).to({_off:true},1).wait(202));

	// 10_btn_VoteFor
	this.btn_VoteForLavashTWO = new lib.boton_Der();
	this.btn_VoteForLavashTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForLavashTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForLavashTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForLavashTWO).wait(22).to({_off:false},0).to({_off:true},1).wait(202));

	// 10_LavashVsChillary
	this.instance_22 = new lib._10_LavashVsChillary();
	this.instance_22.setTransform(150,129.5,1,1,0,0,0,150,129.5);

	this.instance_23 = new lib._10_LavashVsChillary();
	this.instance_23.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.instance_22}]},22).to({state:[]},2).wait(201));

	// 09_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageNine_2 = new lib.SeeResults();
	this.btn_ViewResultsLandingPageNine_2.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageNine_2._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageNine_2, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageNine_2).wait(21).to({_off:false},0).to({_off:true},1).wait(203));

	// 09_Result_Btn_VoteAgain
	this.btn_ResultsGoto10_LavashVsChillary = new lib.VoteAgain();
	this.btn_ResultsGoto10_LavashVsChillary.setTransform(132.6,118.6,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto10_LavashVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto10_LavashVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto10_LavashVsChillary).wait(21).to({_off:false},0).to({_off:true},1).wait(203));

	// 09_ResultGotoLavashVsChillary
	this.instance_24 = new lib._04_ResultsTeresa();
	this.instance_24.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(21).to({_off:false},0).to({_off:true},1).wait(203));

	// 09_btn_VoteFor
	this.btn_VoteForTrumpkinFIVE = new lib.boton_Izq();
	this.btn_VoteForTrumpkinFIVE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinFIVE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinFIVE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinFIVE).wait(20).to({_off:false},0).to({_off:true},1).wait(204));

	// 09_btn_VoteFor
	this.btn_VoteForTeresaTWO = new lib.boton_Der();
	this.btn_VoteForTeresaTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForTeresaTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTeresaTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTeresaTWO).wait(20).to({_off:false},0).to({_off:true},1).wait(204));

	// 09_TeresaVsTrumpkin
	this.instance_25 = new lib._09_TeresaVsTrumpkin();
	this.instance_25.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(20).to({_off:false},0).to({_off:true},2).wait(203));

	// 08_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageEight = new lib.SeeResults();
	this.btn_ViewResultsLandingPageEight.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageEight._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageEight, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageEight).wait(19).to({_off:false},0).to({_off:true},1).wait(205));

	// 08_Result_Btn_VoteAgain
	this.btn_ResultsGotoTeresaVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGotoTeresaVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoTeresaVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoTeresaVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoTeresaVsTrumpkin).wait(19).to({_off:false},0).to({_off:true},1).wait(205));

	// 08_ResultGotoTeresaVsTrumpkin
	this.instance_26 = new lib._03_ResultsSammyBagelJr();
	this.instance_26.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(19).to({_off:false},0).to({_off:true},2).wait(204));

	// 08_btn_VoteFor
	this.btn_VoteForChillaryFOUR = new lib.boton_Izq();
	this.btn_VoteForChillaryFOUR.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryFOUR._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryFOUR, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryFOUR).wait(18).to({_off:false},0).to({_off:true},1).wait(206));

	// 08_btn_VoteFor
	this.btn_VoteForSammyBagelJrTWO = new lib.boton_Der();
	this.btn_VoteForSammyBagelJrTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForSammyBagelJrTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForSammyBagelJrTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForSammyBagelJrTWO).wait(18).to({_off:false},0).to({_off:true},1).wait(206));

	// 08_SammyBagelJrVsChillary
	this.instance_27 = new lib._08_SammyBagelJrVsChillary();
	this.instance_27.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(18).to({_off:false},0).to({_off:true},2).wait(205));

	// 07_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageSeven = new lib.SeeResults();
	this.btn_ViewResultsLandingPageSeven.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageSeven._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageSeven, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageSeven).wait(17).to({_off:false},0).to({_off:true},1).wait(207));

	// 07_Result_Btn_VoteAgain
	this.btn_ResultsGotoSammyBagelJrVsChillary = new lib.VoteAgain();
	this.btn_ResultsGotoSammyBagelJrVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoSammyBagelJrVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoSammyBagelJrVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoSammyBagelJrVsChillary).wait(17).to({_off:false},0).to({_off:true},1).wait(207));

	// 07_ResultGotoSammyBagelJrVsChillary
	this.instance_28 = new lib._02_ResultsBrenda();
	this.instance_28.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(17).to({_off:false},0).to({_off:true},2).wait(206));

	// 07_btn_VoteFor
	this.btn_VoteForTrumpkinFOUR = new lib.boton_Izq();
	this.btn_VoteForTrumpkinFOUR.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinFOUR._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinFOUR, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinFOUR).wait(16).to({_off:false},0).to({_off:true},1).wait(208));

	// 07_btn_VoteFor
	this.btn_VoteForBrendaTWO = new lib.boton_Der();
	this.btn_VoteForBrendaTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForBrendaTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForBrendaTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForBrendaTWO).wait(16).to({_off:false},0).to({_off:true},1).wait(208));

	// 07_BrendaVsTrumpkin
	this.instance_29 = new lib._07_BrendaVsTrumpkin();
	this.instance_29.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(16).to({_off:false},0).to({_off:true},2).wait(207));

	// 06_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageSix = new lib.SeeResults();
	this.btn_ViewResultsLandingPageSix.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageSix._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageSix, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageSix).wait(15).to({_off:false},0).to({_off:true},1).wait(209));

	// 06_Result_Btn_VoteAgain
	this.btn_ResultsGotoBrendaVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGotoBrendaVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoBrendaVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoBrendaVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoBrendaVsTrumpkin).wait(15).to({_off:false},0).to({_off:true},1).wait(209));

	// 06_ResultGotoBrendaVsTrumpkin
	this.instance_30 = new lib._01_ResultsFrank();
	this.instance_30.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(15).to({_off:false},0).to({_off:true},2).wait(208));

	// 06_btn_VoteFor 
	this.btn_VoteForChillaryTHREE = new lib.boton_Izq();
	this.btn_VoteForChillaryTHREE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryTHREE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryTHREE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryTHREE).wait(14).to({_off:false},0).to({_off:true},1).wait(210));

	// 06_btn_VoteFor
	this.btn_VoteForFrankTWO = new lib.boton_Der();
	this.btn_VoteForFrankTWO.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForFrankTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForFrankTWO, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForFrankTWO).wait(14).to({_off:false},0).to({_off:true},1).wait(210));

	// 06_FrankVsChillary
	this.instance_31 = new lib._01_FrankVsTrumpkin();
	this.instance_31.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(14).to({_off:false},0).to({_off:true},2).wait(209));

	// 05_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageFive = new lib.SeeResults();
	this.btn_ViewResultsLandingPageFive.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageFive._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageFive, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageFive).wait(13).to({_off:false},0).to({_off:true},1).wait(211));

	// 05_Result_Btn_VoteAgain 
	this.btn_ResultsGoto06_FrankVsChillary = new lib.VoteAgain();
	this.btn_ResultsGoto06_FrankVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto06_FrankVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto06_FrankVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto06_FrankVsChillary).wait(13).to({_off:false},0).to({_off:true},1).wait(211));

	// 05_ResultGotoFrankVsChillary
	this.instance_32 = new lib._05_ResultsLavash();
	this.instance_32.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(13).to({_off:false},0).to({_off:true},2).wait(210));

	// 05_btn_VoteFor 
	this.btn_VoteForTrumpkinTHREE = new lib.boton_Izq();
	this.btn_VoteForTrumpkinTHREE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinTHREE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinTHREE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinTHREE).wait(12).to({_off:false},0).to({_off:true},1).wait(212));

	// 05_btn_VoteFor
	this.btn_VoteForLavashONE = new lib.boton_Der();
	this.btn_VoteForLavashONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForLavashONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForLavashONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForLavashONE).wait(12).to({_off:false},0).to({_off:true},1).wait(212));

	// 05_LavashVsTrumpkin
	this.instance_33 = new lib._05_LavashVsTrumpkin();
	this.instance_33.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(12).to({_off:false},0).to({_off:true},2).wait(211));

	// 04_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageFour = new lib.SeeResults();
	this.btn_ViewResultsLandingPageFour.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageFour._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageFour, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageFour).wait(11).to({_off:false},0).to({_off:true},1).wait(213));

	// 04_Result_Btn_VoteAgain 
	this.btn_ResultsGoto05_LavashVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGoto05_LavashVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto05_LavashVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto05_LavashVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto05_LavashVsTrumpkin).wait(11).to({_off:false},0).to({_off:true},1).wait(213));

	// 04_ResultGotoLavashVsTrumpkin
	this.instance_34 = new lib._04_ResultsTeresa();
	this.instance_34.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(11).to({_off:false},0).to({_off:true},2).wait(212));

	// 04_btn_VoteFor 
	this.btn_VoteForChillaryTWO = new lib.boton_Izq();
	this.btn_VoteForChillaryTWO.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryTWO, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryTWO).wait(10).to({_off:false},0).to({_off:true},1).wait(214));

	// 04_btn_VoteFor
	this.btn_VoteForTeresaONE = new lib.boton_Der();
	this.btn_VoteForTeresaONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForTeresaONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTeresaONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTeresaONE).wait(10).to({_off:false},0).to({_off:true},1).wait(214));

	// 04_TeresaVsChillary
	this.instance_35 = new lib._04_TeresaVsChillary();
	this.instance_35.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(10).to({_off:false},0).to({_off:true},2).wait(213));

	// 03_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageThree = new lib.SeeResults();
	this.btn_ViewResultsLandingPageThree.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageThree._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageThree, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageThree).wait(9).to({_off:false},0).to({_off:true},1).wait(215));

	// 03_Result_Btn_VoteAgain
	this.btn_ResultsGoto04_TeresaVsChillary = new lib.VoteAgain();
	this.btn_ResultsGoto04_TeresaVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGoto04_TeresaVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGoto04_TeresaVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGoto04_TeresaVsChillary).wait(9).to({_off:false},0).to({_off:true},1).wait(215));

	// 03_ResultGotoTeresaVsChillary
	this.instance_36 = new lib._03_ResultsSammyBagelJr();
	this.instance_36.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(9).to({_off:false},0).to({_off:true},2).wait(214));

	// 03_btn_VoteFor
	this.btn_VoteForTrumpkinTWO = new lib.boton_Izq();
	this.btn_VoteForTrumpkinTWO.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForTrumpkinTWO._off = true;
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinTWO, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinTWO).wait(8).to({_off:false},0).to({_off:true},1).wait(216));

	// 03_btn_VoteFor
	this.btn_VoteForSammyBagelJrONE = new lib.boton_Der();
	this.btn_VoteForSammyBagelJrONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForSammyBagelJrONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForSammyBagelJrONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForSammyBagelJrONE).wait(8).to({_off:false},0).to({_off:true},1).wait(216));

	// 03_SammyBagelJrVsTrumpkin
	this.instance_37 = new lib._03_SammyBagelJrVsTrumpkin();
	this.instance_37.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(8).to({_off:false},0).to({_off:true},2).wait(215));

	// 02_Result_Btn_SeeResults
	this.btn_ViewResultsLandingPageTwo = new lib.SeeResults();
	this.btn_ViewResultsLandingPageTwo.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageTwo._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageTwo, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageTwo).wait(7).to({_off:false},0).to({_off:true},1).wait(217));

	// 02_Result_Btn_VoteAgain
	this.btn_ResultsGotoSammyBagelJrVsTrumpkin = new lib.VoteAgain();
	this.btn_ResultsGotoSammyBagelJrVsTrumpkin.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoSammyBagelJrVsTrumpkin._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoSammyBagelJrVsTrumpkin, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoSammyBagelJrVsTrumpkin).wait(7).to({_off:false},0).to({_off:true},1).wait(217));

	// 02_ResultGotoSammyBagelJrVsTrumpkin
	this.instance_38 = new lib._02_ResultsBrenda();
	this.instance_38.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(7).to({_off:false},0).to({_off:true},1).wait(217));

	// 02_btn_VoteForChillaryONE
	this.btn_VoteForChillaryONE = new lib.boton_Izq();
	this.btn_VoteForChillaryONE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	this.btn_VoteForChillaryONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForChillaryONE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForChillaryONE).wait(6).to({_off:false},0).to({_off:true},1).wait(218));

	// 02_btn_VoteForBrendaONE
	this.btn_VoteForBrendaONE = new lib.boton_Der();
	this.btn_VoteForBrendaONE.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	this.btn_VoteForBrendaONE._off = true;
	new cjs.ButtonHelper(this.btn_VoteForBrendaONE, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForBrendaONE).wait(6).to({_off:false},0).to({_off:true},1).wait(218));

	// 02_BrendaVsChillary
	this.instance_39 = new lib._02_BrendaVsChillary();
	this.instance_39.setTransform(150,124,1,1,0,0,0,150,125);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(6).to({_off:false},0).to({_off:true},2).wait(217));

	// 01_Result_Btn_VseeResults
	this.btn_ViewResultsLandingPageOne = new lib.SeeResults();
	this.btn_ViewResultsLandingPageOne.setTransform(277.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ViewResultsLandingPageOne._off = true;
	new cjs.ButtonHelper(this.btn_ViewResultsLandingPageOne, 0, 1, 2, false, new lib.SeeResults(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ViewResultsLandingPageOne).wait(5).to({_off:false},0).to({_off:true},1).wait(219));

	// 01_Result_Btn_VoteAgain
	this.btn_ResultsGotoBrendaVsChillary = new lib.VoteAgain();
	this.btn_ResultsGotoBrendaVsChillary.setTransform(132.6,118.5,0.9,0.9,0,0,0,68.9,11.3);
	this.btn_ResultsGotoBrendaVsChillary._off = true;
	new cjs.ButtonHelper(this.btn_ResultsGotoBrendaVsChillary, 0, 1, 2, false, new lib.VoteAgain(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ResultsGotoBrendaVsChillary).wait(5).to({_off:false},0).to({_off:true},1).wait(219));

	// 01_Results
	this.instance_40 = new lib._01_ResultsFrank();
	this.instance_40.setTransform(150.1,125,1,1,0,0,0,150.1,125);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(5).to({_off:false},0).to({_off:true},2).wait(218));

	// 01_btn_VoteForTrumpkinONE
	this.btn_VoteForTrumpkinONE = new lib.boton_Izq();
	this.btn_VoteForTrumpkinONE.setTransform(167.3,243,0.964,1.428,0,0,0,110,53.5);
	new cjs.ButtonHelper(this.btn_VoteForTrumpkinONE, 0, 1, 2, false, new lib.boton_Izq(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForTrumpkinONE).to({_off:true},6).wait(219));

	// 01_btn_VoteForFrankONE
	this.btn_VoteForFrankONEroto = new lib.boton_Der();
	this.btn_VoteForFrankONEroto.setTransform(74.4,-27,1.016,1.387,0,0,0,221.3,164.1);
	new cjs.ButtonHelper(this.btn_VoteForFrankONEroto, 0, 1, 2, false, new lib.boton_Der(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_VoteForFrankONEroto).to({_off:true},6).wait(219));

	// 01_FrankVsTrumpkin
	this.instance_41 = new lib._06_FrankVsChillary();
	this.instance_41.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).to({_off:true},6).wait(219));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.4,123.8,351,292.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;