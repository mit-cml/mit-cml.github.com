(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wing = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F59046").s().p("AAIDtQBWgeA0g7QA1g9AAhKQAAhkhihIQhhhJiJAAQg5AAg2AOIgbgyQBDgSBHAAQCnAAB3BYQB3BYAAB7QAABahCBLQhABIhqAlg");
	this.shape.setTransform(27.2,28.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing, new cjs.Rectangle(0,0,54.5,57.4), null);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6CD50").s().p("AhPDvQgsglg8gUIAnhFIBOAAIAYgrIh/AAIg5BkQgpgIgpAAIAAkwIE0iyIE1CyIAAFjIgrAAIgIABIg0AGIhSAUIguASQg4AbgkAkQgUgugtgkg");
	this.shape.setTransform(28.9,-56.6,0.91,0.91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#902A7A").s().p("AhOECIhAgYIgbgHIgvgJIhKgFIgSAAIAAljIE0iyIE1CyIAAEwQgpAAgpAIIg5hkIh/AAIABADIADAEIAVAkIBMAAIAoBFQg8AUgsAlQgtAkgUAuQgmglg3gag");
	this.shape_1.setTransform(-27.4,-56.6,0.91,0.91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59046").s().p("AkjgwIgDACQgSARgUANQgjAXgoAQQgMAGgNADIgfg1QA9gSAvgjQAdgVASgYIJpAAQASAYAdAVQAvAjA9ASIgfA1QgMgDgNgGQgogQgjgXQgUgNgSgRIgDgCIkkCog");
	this.shape_2.setTransform(0.7,12,0.91,0.91);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F59046").s().p("ACCASQg0gdhBgNQgvgJguAAQg6AAg6APIgdgzQA9gRBCgCIBEABIBHAMIAbAHIBAAZQA3AaAmAkQgOAiAAAkQgdgpg0geg");
	this.shape_3.setTransform(-46.6,-29.1,0.91,0.91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59046").s().p("AjhATQAmgjA3gbIAvgTIA5gQIBLgKIAIAAIArAAQBEACA7ARIgcAzQg6gPg7AAQgtAAguAJQhBANg0AdQg2AegcApQAAglgPghg");
	this.shape_4.setTransform(48,-29.1,0.91,0.91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_5.setTransform(7.7,-29.2,0.91,0.91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_6.setTransform(-6.3,-29.2,0.91,0.91);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_7.setTransform(0.7,-1.6,0.91,0.91);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_8.setTransform(0.7,-12.7,0.91,0.91);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F59046").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_9.setTransform(0.7,-18.2,0.91,0.91);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F59046").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_10.setTransform(0.7,-7.1,0.91,0.91);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ak0ChQAAgkAPgjQAUguAtgkQAsgjA8gVIgohFIhlAAIAAgrIB/AAIA5BkQAngHAqgBIAAAAQAqAAAoAIIA6hkIB+AAIAAArIhlAAIgoBFQA8AUAtAkQAsAkAUAuQAPAiAAAlg");
	this.shape_11.setTransform(0.7,-35.6,0.91,0.91);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AAYBRIgehBIgXAAIAABBIgfAAIAAihIA+AAQAYAAAPAPQANAOAAAVQAAAegdALIAkBGgAgdgJIAdAAQAKAAAHgGQAGgGAAgJQAAgKgGgGQgHgGgKAAIgdAAg");
	this.shape_12.setTransform(65.4,78.4,0.91,0.91);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgrBAQgLgKgDgRQgCgKAAgbQAAgaACgKQADgQALgLQARgSAaAAQAaAAARASQALALAEAQQACALAAAZQAAAagCALQgEAQgLALQgRASgaAAQgaAAgRgSgAgUgsQgEAFgCAIQgBAJAAAWQAAAXABAJQACAIAEAFQAIAJAMAAQANAAAHgJQAFgFACgIQABgJAAgXQAAgWgBgJQgCgIgFgFQgHgJgNAAQgMAAgIAJg");
	this.shape_13.setTransform(51.8,78.4,0.91,0.91);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AgPBRIAAiFIgqAAIAAgcIBzAAIAAAcIgqAAIAACFg");
	this.shape_14.setTransform(39.8,78.4,0.91,0.91);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AAiBRIg/hiIAABiIggAAIAAihIAcAAIA/BiIAAhiIAgAAIAAChg");
	this.shape_15.setTransform(27,78.4,0.91,0.91);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("Ag0BRIAAihIBpAAIAAAcIhKAAIAAAmIA/AAIAAAbIg/AAIAAAoIBKAAIAAAcg");
	this.shape_16.setTransform(13.7,78.4,0.91,0.91);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgLBRIg1ihIAgAAIAgBoIAghoIAhAAIg1Chg");
	this.shape_17.setTransform(0.8,78.4,0.91,0.91);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AAiBRIg/hiIAABiIggAAIAAihIAcAAIA/BiIAAhiIAgAAIAAChg");
	this.shape_18.setTransform(-12.5,78.4,0.91,0.91);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgPBRIAAihIAfAAIAAChg");
	this.shape_19.setTransform(-22.9,78.4,0.91,0.91);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("Ag5BRIAAihIA9AAQAZAAAPAPQAOAOAAAWQAAAVgOANQgPAPgZAAIgdAAIAAA9gAgZgHIAcAAQALAAAGgGQAHgGAAgKQAAgKgHgHQgGgGgLAAIgcAAg");
	this.shape_20.setTransform(-38.4,78.4,0.91,0.91);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("Ag5BRIAAihIA+AAQAYAAAPAPQAOAOAAAWQAAAVgOANQgPAPgYAAIgeAAIAAA9gAgZgHIAcAAQALAAAGgGQAGgGAAgKQAAgKgGgHQgGgGgLAAIgcAAg");
	this.shape_21.setTransform(-51.3,78.4,0.91,0.91);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAmBRIgJgdIg4AAIgKAdIghAAIA7ihIAXAAIA7ChgAgTAaIAoAAIgUg6g");
	this.shape_22.setTransform(-64.4,78.4,0.91,0.91);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F59046").s().p("AgpChIAAj6IhFAAIAAhHIDdAAIAABHIhFAAIAAD6g");
	this.shape_23.setTransform(26.7,49,0.91,0.91);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F59046").s().p("AgpChIAAlBIBTAAIAAFBg");
	this.shape_24.setTransform(8.5,49,0.91,0.91);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F59046").s().p("AB2ChIgYi4IAAAAIhOC4IggAAIhKi4IgBAAIgbC4IhTAAIA2lBIBTAAIBBCrIBFirIBTAAIAxFBg");
	this.shape_25.setTransform(-17.7,49,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-85.9,141.9,171.8);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A6CD50").s().p("AhPDvQgsglg8gUIAnhFIBOAAIAYgrIh/AAIg5BkQgpgIgpAAIAAkwIE0iyIE1CyIAAFjIgrAAIgIABIg0AGIhSAUIguASQg4AbgkAkQgUgugtgkg");
	this.shape.setTransform(28.9,-56.6,0.91,0.91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#902A7A").s().p("AhOECIhAgYIgbgHIgvgJIhKgFIgSAAIAAljIE0iyIE1CyIAAEwQgpAAgpAIIg5hkIh/AAIABADIADAEIAVAkIBMAAIAoBFQg8AUgsAlQgtAkgUAuQgmglg3gag");
	this.shape_1.setTransform(-27.4,-56.6,0.91,0.91);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59046").s().p("AkjgwIgDACQgSARgUANQgjAXgoAQQgMAGgNADIgfg1QA9gSAvgjQAdgVASgYIJpAAQASAYAdAVQAvAjA9ASIgfA1QgMgDgNgGQgogQgjgXQgUgNgSgRIgDgCIkkCog");
	this.shape_2.setTransform(0.7,12,0.91,0.91);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F59046").s().p("ACCASQg0gdhBgNQgvgJguAAQg6AAg6APIgdgzQA9gRBCgCIBEABIBHAMIAbAHIBAAZQA3AaAmAkQgOAiAAAkQgdgpg0geg");
	this.shape_3.setTransform(-46.6,-29.1,0.91,0.91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59046").s().p("AjhATQAmgjA3gbIAvgTIA5gQIAZgEIAygGIAIAAIArAAQBEACA7ARIgcAzQg6gPg7AAQgtAAguAJQhBANg0AdQg2AegcApQAAglgPghg");
	this.shape_4.setTransform(48,-29.1,0.91,0.91);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#58595B").s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_5.setTransform(7.7,-29.2,0.91,0.91);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#58595B").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_6.setTransform(-6.3,-29.2,0.91,0.91);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_7.setTransform(0.7,-1.6,0.91,0.91);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_8.setTransform(0.7,-12.7,0.91,0.91);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F59046").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_9.setTransform(0.7,-18.2,0.91,0.91);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F59046").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_10.setTransform(0.7,-7.1,0.91,0.91);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ak0ChQAAgkAPgjQAUguAtgkQAsgjA8gVIgohFIhlAAIAAgrIB/AAIA5BkQAngHAqgBIAAAAQAqAAAoAIIA6hkIB+AAIAAArIhlAAIgoBFQA8AUAtAkQAsAkAUAuQAPAiAAAlg");
	this.shape_11.setTransform(0.7,-35.6,0.91,0.91);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#58595B").s().p("AAYBRIgehBIgXAAIAABBIgfAAIAAihIA+AAQAYAAAPAPQANAOAAAVQAAAegdALIAkBGgAgdgJIAdAAQAKAAAHgGQAGgGAAgJQAAgKgGgGQgHgGgKAAIgdAAg");
	this.shape_12.setTransform(65.4,78.4,0.91,0.91);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#58595B").s().p("AgrBAQgLgKgDgRQgCgKAAgbQAAgaACgKQADgQALgLQARgSAaAAQAaAAARASQALALAEAQQACALAAAZQAAAagCALQgEAQgLALQgRASgaAAQgaAAgRgSgAgUgsQgEAFgCAIQgBAJAAAWQAAAXABAJQACAIAEAFQAIAJAMAAQANAAAHgJQAFgFACgIQABgJAAgXQAAgWgBgJQgCgIgFgFQgHgJgNAAQgMAAgIAJg");
	this.shape_13.setTransform(51.8,78.4,0.91,0.91);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#58595B").s().p("AgPBRIAAiFIgqAAIAAgcIBzAAIAAAcIgqAAIAACFg");
	this.shape_14.setTransform(39.8,78.4,0.91,0.91);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#58595B").s().p("AAiBRIg/hiIAABiIggAAIAAihIAcAAIA/BiIAAhiIAgAAIAAChg");
	this.shape_15.setTransform(27,78.4,0.91,0.91);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#58595B").s().p("Ag0BRIAAihIBpAAIAAAcIhKAAIAAAmIA/AAIAAAbIg/AAIAAAoIBKAAIAAAcg");
	this.shape_16.setTransform(13.7,78.4,0.91,0.91);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#58595B").s().p("AgLBRIg1ihIAgAAIAgBoIAghoIAhAAIg1Chg");
	this.shape_17.setTransform(0.8,78.4,0.91,0.91);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#58595B").s().p("AAiBRIg/hiIAABiIggAAIAAihIAcAAIA/BiIAAhiIAgAAIAAChg");
	this.shape_18.setTransform(-12.5,78.4,0.91,0.91);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AgPBRIAAihIAfAAIAAChg");
	this.shape_19.setTransform(-22.9,78.4,0.91,0.91);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("Ag5BRIAAihIA9AAQAZAAAPAPQAOAOAAAWQAAAVgOANQgPAPgZAAIgdAAIAAA9gAgZgHIAcAAQALAAAGgGQAHgGAAgKQAAgKgHgHQgGgGgLAAIgcAAg");
	this.shape_20.setTransform(-38.4,78.4,0.91,0.91);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("Ag5BRIAAihIA+AAQAYAAAPAPQAOAOAAAWQAAAVgOANQgPAPgYAAIgeAAIAAA9gAgZgHIAcAAQALAAAGgGQAGgGAAgKQAAgKgGgHQgGgGgLAAIgcAAg");
	this.shape_21.setTransform(-51.3,78.4,0.91,0.91);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AAmBRIgJgdIg4AAIgKAdIghAAIA7ihIAXAAIA7ChgAgTAaIAoAAIgUg6g");
	this.shape_22.setTransform(-64.4,78.4,0.91,0.91);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F59046").s().p("AgpChIAAj6IhFAAIAAhHIDdAAIAABHIhFAAIAAD6g");
	this.shape_23.setTransform(26.7,49,0.91,0.91);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F59046").s().p("AgpChIAAlBIBTAAIAAFBg");
	this.shape_24.setTransform(8.5,49,0.91,0.91);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F59046").s().p("AB2ChIgYi4IAAAAIhOC4IggAAIhKi4IgBAAIgbC4IhTAAIA2lBIBTAAIBBCrIBFirIBTAAIAxFBg");
	this.shape_25.setTransform(-17.7,49,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-85.9,141.9,171.8);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F59046").s().p("AgHAJIAAgRIAPAAIAAARg");
	this.shape.setTransform(69.7,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAHgMAOAAQAHAAAFADQAGAEADAGQADAFACAJQACAIAAAKIAAAFIgrAAIAAAFIABAPIADAJQACAEAEABQADACADAAQAEAAACgCIAFgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgOAAgHgMgAAPgIIgBgNIgCgJQgCgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgBAGAAAIIAeAAg");
	this.shape_1.setTransform(64.3,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAGgMAPAAQAHAAAFADQAGAEADAGQADAFADAJQABAIAAAKIAAAFIgrAAIAAAFIABAPIADAJQACAEAEABQADACADAAQAEAAACgCIAFgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgPAAgGgMgAAPgIIgBgNIgCgJQgCgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgCAGABAIIAeAAg");
	this.shape_2.setTransform(57.3,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F59046").s().p("AgIA/QgEgDgEgFIgDAJIgKAAIACgKIAAgPIAAhoIANAAIAAAsQADgEAFgDQAEgCAFAAQAFgBAFADQAFADAEAFQADAGACAKQADAHAAAOQAAAOgDAJQgCAJgDAGQgEAFgFADQgFADgFAAQgGAAgFgDgAgHgRIgHAFIAAA6QADAEAEACQAEADADAAQADAAADgCQAEgCACgEQACgEABgIQACgHAAgLQAAgLgCgGQgBgHgCgFQgCgEgDgCQgEgCgDAAQgEABgDACg");
	this.shape_3.setTransform(49.9,-3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAGgMAPAAQAHAAAFADQAGAEADAGQADAFADAJQABAIAAAKIAAAFIgrAAIAAAFIABAPIADAJQACAEAEABQADACADAAQAEAAACgCIAFgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgPAAgGgMgAAPgIIgBgNIgCgJQgCgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgCAGABAIIAeAAg");
	this.shape_4.setTransform(38.4,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59046").s().p("AAOBBIAAhEQAAgIgCgEQgDgDgFgBQgEAAgEADQgFADgEAGIAABIIgNAAIAAiBIANAAIAAAuQAEgEAGgEQAFgDAFAAQAJgBAGAHQACADABAEQACAFAAAGIAABGg");
	this.shape_5.setTransform(30.9,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F59046").s().p("AgEA7IgDgHIgBgJIAAg/IgNAAIAAgLIANAAIAAggIAMAAIAAAgIARAAIAAALIgRAAIAABAQAAAEADADQACADAEgBIAFAAIADgBIAAAKIgFABIgHAAQgJAAgEgEg");
	this.shape_6.setTransform(24.2,-3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F59046").s().p("AgFBBIAAhdIALAAIAABdgAgFgxIAAgPIALAAIAAAPg");
	this.shape_7.setTransform(16,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F59046").s().p("AgMA/QgFgDgEgFQgDgGgCgJQgDgJAAgOQAAgOADgHQACgKADgGQAEgFAFgDQAFgDAFABQAFAAAEACIAIAHIAAgsIANAAIAABoIAAAPIACAKIgMAAIgBgJIAAAAQgEAFgFADQgEADgGAAQgFAAgFgDgAgGgSQgDACgCAEQgCAFgBAHQgCAGAAALQAAALACAHQABAIACAEQACAEAEACQADACADAAQADAAAEgDQAEgCADgEIAAg6IgHgFQgDgCgEgBQgEAAgDACg");
	this.shape_8.setTransform(9.8,-3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F59046").s().p("AgUAlQgIgMAAgZQAAgYAIgMQAGgMAOAAQAOAAAIAMQADAGACAJQABAJAAAMQAAANgBAJQgCAJgDAGQgIAMgOAAQgOAAgGgMgAgGgjQgDABgCAEQgCAFgBAHIgBASIABATQABAHACAEQACAFADABQADACADAAQAEAAADgCQADgBACgFQACgEABgHIAAgTIAAgSQgBgHgCgFQgCgEgDgBQgDgCgEAAQgDAAgDACg");
	this.shape_9.setTransform(2.5,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F59046").s().p("AgOA/IgGgFIgFgGQgEgGgEgPQgCgNAAgSQAAgMACgSQACgJAGgMQAEgIAHgDQAIgEAHAAQAPAAAIAKQAFAFACAIQADAIAAAKIgOAAQgBgPgFgHQgFgHgIAAQgFAAgFADQgEADgDAGQgDAHgBAKIgBAZIABAZQABALADAGQADAHAEADQAFADAFAAQAFAAAEgCQAEgCACgEQADgEACgGQABgGAAgJIAOAAQAAAVgJAMQgFAGgGADQgHADgIAAQgHAAgIgEg");
	this.shape_10.setTransform(-5.5,-3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F59046").s().p("AgYA6QgEgDgCgEQgCgEAAgEQAAgGAFgFQADgFAHgDQgFgCgDgCQgDgEAAgEQAAgGAEgDQAEgDAFAAIgGgFIgDgHIgCgHIAAgIQAAgIABgGQACgHADgFQAIgJAMAAQAEAAAFACQAFADADAEQACgEADgCQAFgDAFAAIAAAMIgCAAIgBAAIgFABIgEACIACAIIABAKQAAAJgCAHQgCAGgDAEQgDADgFACQgFACgEAAIgEAAIgEgBIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIAFACIAHACIAIABIAJAEQAFABADACIAGAHQACADAAAGQABAFgDAEQgCAEgEADQgEACgGACQgGACgHAAQgQAAgIgFgAgQAhQgEAEAAADQABAGAEAEQADABAEABIAIABQALAAAEgDQAEgEABgGQAAgDgDgCIgHgDIgJgDIgIgCIgJAGgAgLgvQgEAFAAANIABALQABAFACADQAEAFAGAAIAEgBIAFgEIADgIIAAgLIAAgLQgBgEgCgDQgDgDgCgBIgEgBQgGAAgEAFg");
	this.shape_11.setTransform(-17.8,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F59046").s().p("AAOAwIAAhEQAAgJgCgDQgDgEgFAAQgEAAgEADQgFADgEAGIAABIIgNAAIAAhdIAMAAIAAAKIALgIQAFgEAEAAQAKAAAGAGQACADABAFQACAEAAAHIAABGg");
	this.shape_12.setTransform(-25.8,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F59046").s().p("AgGBBIAAhdIANAAIAABdgAgGgxIAAgPIANAAIAAAPg");
	this.shape_13.setTransform(-31.8,-3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F59046").s().p("AgSAwIAAhdIAOAAIAAALIAEgGIAGgEIAGgCIAGgBIAAANIgGAAIgGADIgGAFIgEAIIAABCg");
	this.shape_14.setTransform(-35.7,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F59046").s().p("AgOAuQgEgBgDgDQgFgGAAgNIAAhGIANAAIAABEQAAAIACAEQADAEAFAAQAEAAAEgDIAJgJIAAhIIANAAIAABdIgMAAIAAgLQgFAFgGAEQgFAEgEAAQgFAAgEgCg");
	this.shape_15.setTransform(-42.7,-1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F59046").s().p("AgDA7IgEgHIgBgJIAAg/IgMAAIAAgLIAMAAIAAggIAMAAIAAAgIARAAIAAALIgRAAIAABAQAAAEADADQABADAGgBIADAAIAEgBIAAAKIgFABIgHAAQgJAAgDgEg");
	this.shape_16.setTransform(-49.4,-3.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F59046").s().p("AgWAqQgDgDgCgFQgCgEAAgGQAAgIAFgHQAEgGAGgEQAHgFAHgDIAOgEIAAgHQAAgIgDgEQgEgFgGAAQgDAAgDACIgEAEIgDAGIgCAGIgMgBIADgLIAGgJQADgDAFgDQAEgCAGAAQANAAAHAHIAFAJQABAFAAAGIAAAzIABALIACAGIgOAAIgBgIIgFAEIgFADIgFACIgEABQgLAAgHgHgAAFAAQgFACgFAEQgEADgDAEQgEAFAAAFQAAAHAEAEQADAEAHAAQAEAAAEgDIAIgHIAAgfg");
	this.shape_17.setTransform(-55.9,-2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAGgMAPAAQAHAAAFADQAFAEAEAGQAEAFACAJQABAIAAAKIAAAFIgsAAIAAAFIABAPIAEAJQACAEADABQADACAEAAQAEAAADgCIAEgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgPAAgGgMgAAPgIIgBgNIgDgJQgBgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgBAGgBAIIAfAAg");
	this.shape_18.setTransform(-63.1,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F59046").s().p("AgHBCIAAhSIgOAAIAAgLIAOAAIAAgTQAAgKAFgEQACgDACgBIAJgBIAGAAIAFABIAAAKQgDgBgEAAQgFAAgCACQgDADAAAFIAAASIAPAAIAAALIgPAAIAABSg");
	this.shape_19.setTransform(-69.2,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-16.4,386,25);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F59046").s().p("AgHAJIAAgRIAPAAIAAARg");
	this.shape.setTransform(69.7,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAHgMAOAAQAHAAAFADQAGAEADAGQADAFACAJQACAIAAAKIAAAFIgrAAIAAAFIABAPIADAJQACAEAEABQADACADAAQAEAAACgCIAFgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgOAAgHgMgAAPgIIgBgNIgCgJQgCgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgBAGAAAIIAeAAg");
	this.shape_1.setTransform(64.3,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAGgMAPAAQAHAAAFADQAGAEADAGQADAFADAJQABAIAAAKIAAAFIgrAAIAAAFIABAPIADAJQACAEAEABQADACADAAQAEAAACgCIAFgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgPAAgGgMgAAPgIIgBgNIgCgJQgCgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgCAGABAIIAeAAg");
	this.shape_2.setTransform(57.3,-2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F59046").s().p("AgIA/QgEgDgEgFIgDAJIgKAAIACgKIAAgPIAAhoIANAAIAAAsQADgEAFgDQAEgCAFAAQAFgBAFADQAFADAEAFQADAGACAKQADAHAAAOQAAAOgDAJQgCAJgDAGQgEAFgFADQgFADgFAAQgGAAgFgDgAgHgRIgHAFIAAA6QADAEAEACQAEADADAAQADAAADgCQAEgCACgEQACgEABgIQACgHAAgLQAAgLgCgGQgBgHgCgFQgCgEgDgCQgEgCgDAAQgEABgDACg");
	this.shape_3.setTransform(49.9,-3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAGgMAPAAQAHAAAFADQAGAEADAGQADAFADAJQABAIAAAKIAAAFIgrAAIAAAFIABAPIADAJQACAEAEABQADACADAAQAEAAACgCIAFgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgPAAgGgMgAAPgIIgBgNIgCgJQgCgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgCAGABAIIAeAAg");
	this.shape_4.setTransform(38.4,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59046").s().p("AAOBBIAAhEQAAgIgCgEQgDgDgFgBQgEAAgEADQgFADgEAGIAABIIgNAAIAAiBIANAAIAAAuQAEgEAGgEQAFgDAFAAQAJgBAGAHQACADABAEQACAFAAAGIAABGg");
	this.shape_5.setTransform(30.9,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F59046").s().p("AgEA7IgDgHIgBgJIAAg/IgNAAIAAgLIANAAIAAggIAMAAIAAAgIARAAIAAALIgRAAIAABAQAAAEADADQACADAEgBIAFAAIADgBIAAAKIgFABIgHAAQgJAAgEgEg");
	this.shape_6.setTransform(24.2,-3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F59046").s().p("AgFBBIAAhdIALAAIAABdgAgFgxIAAgPIALAAIAAAPg");
	this.shape_7.setTransform(16,-3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F59046").s().p("AgMA/QgFgDgEgFQgDgGgCgJQgDgJAAgOQAAgOADgHQACgKADgGQAEgFAFgDQAFgDAFABQAFAAAEACIAIAHIAAgsIANAAIAABoIAAAPIACAKIgMAAIgBgJIAAAAQgEAFgFADQgEADgGAAQgFAAgFgDgAgGgSQgDACgCAEQgCAFgBAHQgCAGAAALQAAALACAHQABAIACAEQACAEAEACQADACADAAQADAAAEgDQAEgCADgEIAAg6IgHgFQgDgCgEgBQgEAAgDACg");
	this.shape_8.setTransform(9.8,-3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F59046").s().p("AgUAlQgIgMAAgZQAAgYAIgMQAGgMAOAAQAOAAAIAMQADAGACAJQABAJAAAMQAAANgBAJQgCAJgDAGQgIAMgOAAQgOAAgGgMgAgGgjQgDABgCAEQgCAFgBAHIgBASIABATQABAHACAEQACAFADABQADACADAAQAEAAADgCQADgBACgFQACgEABgHIAAgTIAAgSQgBgHgCgFQgCgEgDgBQgDgCgEAAQgDAAgDACg");
	this.shape_9.setTransform(2.5,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F59046").s().p("AgOA/IgGgFIgFgGQgEgGgEgPQgCgNAAgSQAAgMACgSQACgJAGgMQAEgIAHgDQAIgEAHAAQAPAAAIAKQAFAFACAIQADAIAAAKIgOAAQgBgPgFgHQgFgHgIAAQgFAAgFADQgEADgDAGQgDAHgBAKIgBAZIABAZQABALADAGQADAHAEADQAFADAFAAQAFAAAEgCQAEgCACgEQADgEACgGQABgGAAgJIAOAAQAAAVgJAMQgFAGgGADQgHADgIAAQgHAAgIgEg");
	this.shape_10.setTransform(-5.5,-3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F59046").s().p("AgYA6QgEgDgCgEQgCgEAAgEQAAgGAFgFQADgFAHgDQgFgCgDgCQgDgEAAgEQAAgGAEgDQAEgDAFAAIgGgFIgDgHIgCgHIAAgIQAAgIABgGQACgHADgFQAIgJAMAAQAEAAAFACQAFADADAEQACgEADgCQAFgDAFAAIAAAMIgCAAIgBAAIgFABIgEACIACAIIABAKQAAAJgCAHQgCAGgDAEQgDADgFACQgFACgEAAIgEAAIgEgBIgFACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQABABAAAAQABABAAAAIAFACIAHACIAIABIAJAEQAFABADACIAGAHQACADAAAGQABAFgDAEQgCAEgEADQgEACgGACQgGACgHAAQgQAAgIgFgAgQAhQgEAEAAADQABAGAEAEQADABAEABIAIABQALAAAEgDQAEgEABgGQAAgDgDgCIgHgDIgJgDIgIgCIgJAGgAgLgvQgEAFAAANIABALQABAFACADQAEAFAGAAIAEgBIAFgEIADgIIAAgLIAAgLQgBgEgCgDQgDgDgCgBIgEgBQgGAAgEAFg");
	this.shape_11.setTransform(-17.8,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F59046").s().p("AAOAwIAAhEQAAgJgCgDQgDgEgFAAQgEAAgEADQgFADgEAGIAABIIgNAAIAAhdIAMAAIAAAKIALgIQAFgEAEAAQAKAAAGAGQACADABAFQACAEAAAHIAABGg");
	this.shape_12.setTransform(-25.8,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F59046").s().p("AgGBBIAAhdIANAAIAABdgAgGgxIAAgPIANAAIAAAPg");
	this.shape_13.setTransform(-31.8,-3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F59046").s().p("AgSAwIAAhdIAOAAIAAALIAEgGIAGgEIAGgCIAGgBIAAANIgGAAIgGADIgGAFIgEAIIAABCg");
	this.shape_14.setTransform(-35.7,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F59046").s().p("AgOAuQgEgBgDgDQgFgGAAgNIAAhGIANAAIAABEQAAAIACAEQADAEAFAAQAEAAAEgDIAJgJIAAhIIANAAIAABdIgMAAIAAgLQgFAFgGAEQgFAEgEAAQgFAAgEgCg");
	this.shape_15.setTransform(-42.7,-1.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F59046").s().p("AgDA7IgEgHIgBgJIAAg/IgMAAIAAgLIAMAAIAAggIAMAAIAAAgIARAAIAAALIgRAAIAABAQAAAEADADQABADAGgBIADAAIAEgBIAAAKIgFABIgHAAQgJAAgDgEg");
	this.shape_16.setTransform(-49.4,-3.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F59046").s().p("AgWAqQgDgDgCgFQgCgEAAgGQAAgIAFgHQAEgGAGgEQAHgFAHgDIAOgEIAAgHQAAgIgDgEQgEgFgGAAQgDAAgDACIgEAEIgDAGIgCAGIgMgBIADgLIAGgJQADgDAFgDQAEgCAGAAQANAAAHAHIAFAJQABAFAAAGIAAAzIABALIACAGIgOAAIgBgIIgFAEIgFADIgFACIgEABQgLAAgHgHgAAFAAQgFACgFAEQgEADgDAEQgEAFAAAFQAAAHAEAEQADAEAHAAQAEAAAEgDIAIgHIAAgfg");
	this.shape_17.setTransform(-55.9,-2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F59046").s().p("AgVAlQgHgMAAgZQAAgYAHgMQAGgMAPAAQAHAAAFADQAFAEAEAGQAEAFACAJQABAIAAAKIAAAFIgsAAIAAAFIABAPIAEAJQACAEADABQADACAEAAQAEAAADgCIAEgEIADgFIACgHIAMACQgBAFgCAFIgGAIQgEAEgFACQgFADgGAAQgPAAgGgMgAAPgIIgBgNIgDgJQgBgDgDgCQgDgCgEAAQgDAAgDACIgFAEQgCAEgBAFQgBAGgBAIIAfAAg");
	this.shape_18.setTransform(-63.1,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F59046").s().p("AgHBCIAAhSIgOAAIAAgLIAOAAIAAgTQAAgKAFgEQACgDACgBIAJgBIAGAAIAFABIAAAKQgDgBgEAAQgFAAgCACQgDADAAAFIAAASIAPAAIAAALIgPAAIAABSg");
	this.shape_19.setTransform(-69.2,-3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-16.4,386,25);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(94.4,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAlQAAAKgCAJQgDAJgFAHQgFAGgHAEQgIADgMAAQgLAAgHgDgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_1.setTransform(86.4,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AgXBVQgIgCgGgCQgLgGAAgKQAAgHAFgGQAGgFAHgCIAAAAQgGgCgDgEQgEgEAAgHIACgGIAEgGIAFgFIAGgDIgJgHQgDgDgCgFIgDgMIgBgTQAAgNADgJQACgJAFgGQAFgFAIgDQAIgCALAAQAIAAAHADQAIADAGAIIAFgHIAFgEIAFgDIAHAAIAAAWIgCAAIgCAAIgHABQgDAAgDADIACALIABAJQAAAPgDAKQgCAKgFAFQgFAGgIADQgIACgJAAIgJAAIgEACQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAEAFACIANABIAPABQAJABAIACQAIADAFAGQAFAGAAALQAAARgOAHQgIAEgKABQgKACgMAAQgKAAgIgBgAgPAyQgFACAAAFQAAAFAFADQAFACAMAAQAOAAAEgCQAFgDAAgFQAAgFgFgCQgEgCgOAAQgMAAgFACgAgLg+IgEAEQgCADAAAGIgBANIABANQAAAGACADIAEAEIAGABIAGgBQACgBACgDQACgDAAgGIABgNIgBgNQAAgGgCgDQgCgDgCgBIgGgBg");
	this.shape_2.setTransform(75.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAlQAAAKgCAJQgDAJgFAHQgFAGgHAEQgIADgMAAQgLAAgHgDgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_3.setTransform(65.1,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AgNBXIAAitIAbAAIAACtg");
	this.shape_4.setTransform(57.2,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgeBCIAAiAIAZAAIAAAPIABAAQAEgJAIgEQAIgFAKAAIAFAAIAAAcIgIgBIgJgBQgHAAgFAEQgFAEAAAJIAABYg");
	this.shape_5.setTransform(45.7,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAlQAAAKgCAJQgDAJgFAHQgFAGgHAEQgIADgMAAQgLAAgHgDgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_6.setTransform(35.9,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AADBRQgFgBgEgEQgIgHAAgPIAAhPIgPAAIAAgWIAPAAIAAgjIAaAAIAAAjIASAAIAAAWIgSAAIAABJQAAAFACADQADADAEAAIAJAAIAAAXIgGABIgHAAQgIAAgGgCg");
	this.shape_7.setTransform(27.2,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_8.setTransform(18.6,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAXIg4AAIAAASQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgCIAbAAQAAAKgDAIQgCAJgFAGQgFAGgIAEQgIADgLAAQgLAAgHgDgAgKgnQgEAFAAALIAAAHIAdAAIAAgHQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_9.setTransform(8,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgMBBIgfiAIAbAAIAQBUIAAAAIARhUIAbAAIgfCAg");
	this.shape_10.setTransform(-2,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_11.setTransform(-12,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_12.setTransform(-20.6,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgoBWIAAipIAZAAIAAAOIABAAQAGgJAHgEQAEgDALAAQANAAAHAJQAHAJAAASIAAA9QAAARgHAKQgEAEgFACQgFADgGAAIgIgBIgGgDIgGgEIgHgGIAAA0gAgGg9IgHAEIAABMIAHAFQAEACADAAIAFgBQADgBABgDIADgGIABgKIAAgvIgBgLIgDgGQgBgDgDAAIgFgBQgDAAgEACg");
	this.shape_13.setTransform(-34.5,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgoBWIAAipIAZAAIAAAOIABAAQAGgJAHgEQAFgDAJAAQAOAAAHAJQAHAJAAASIAAA9QAAARgHAKQgEAEgFACQgFADgHAAIgHgBIgGgDIgGgEIgHgGIAAA0gAgGg9IgHAEIAABMIAHAFQAEACADAAIAFgBIAEgEIADgGIABgKIAAgvIgBgLIgDgGQgCgDgCAAIgFgBQgDAAgEACg");
	this.shape_14.setTransform(-45.1,20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAWBXIgGgnIgfAAIgGAnIgcAAIAgitIAjAAIAgCtgAAMAWIgMhJIAAAAIgLBJIAXAAg");
	this.shape_15.setTransform(-55.9,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgOBXIAAiTIgdAAIAAgaIBXAAIAAAaIgdAAIAACTg");
	this.shape_16.setTransform(-71.1,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_17.setTransform(-79.1,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAjBXIAAiHIgBAAIgbCHIgNAAIgbiHIgBAAIAACHIgZAAIAAitIAnAAIAUBlIAAAAIAVhlIAnAAIAACtg");
	this.shape_18.setTransform(-89.8,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AAOBBIgOhRIAAAAIgSBRIgVAAIgZiBIAaAAIALBQIABAAIARhQIATAAIAOBQIABAAIAOhQIAaAAIgeCBg");
	this.shape_19.setTransform(80.5,-13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQAMAAAIADQAHAEAFAGQAFAGADAJQACAKAAAKIAAAXIg4AAIAAASQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgCIAbAAQAAAKgDAJQgCAIgFAGQgFAGgIADQgIAEgLAAQgLAAgHgEgAgKgnQgEAFAAALIAAAHIAdAAIAAgHQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_20.setTransform(68.5,-13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_21.setTransform(57.8,-13.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQAMAAAIADQAHAEAFAGQAFAGADAJQACAKAAAKIAAAXIg4AAIAAASQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgCIAbAAQAAAKgDAJQgCAIgFAGQgFAGgIADQgIAEgLAAQgLAAgHgEgAgKgnQgEAFAAALIAAAHIAdAAIAAgHQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_22.setTransform(41.9,-13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AANBXIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAitIAbAAIAAA5IAGgGIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_23.setTransform(31.2,-15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AADBRQgFgBgEgEQgIgHAAgPIAAhPIgPAAIAAgWIAPAAIAAgjIAaAAIAAAjIASAAIAAAWIgSAAIAABJQAAAFACADQADADAEAAIAJAAIAAAXIgGABIgHAAQgIAAgGgCg");
	this.shape_24.setTransform(22.5,-15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgXBVQgIgCgGgCQgLgGAAgKQAAgHAFgGQAGgFAHgCIAAAAQgGgCgDgEQgEgEAAgHIACgGIAEgGIAFgFIAGgDIgJgHQgDgDgCgFIgDgMIgBgTQAAgNADgJQACgJAFgGQAFgFAIgDQAIgCALAAQAIAAAHADQAIADAGAIIAFgHIAFgEIAFgDIAHAAIAAAWIgCAAIgCAAIgHABQgDAAgDADIACALIABAJQAAAPgDAKQgCAKgFAFQgFAGgIADQgIACgJAAIgJAAIgEACQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAAEAFACIANABIAPABQAJABAIACQAIADAFAGQAFAGAAALQAAARgOAHQgIAEgKABQgKACgMAAQgKAAgIgBgAgPAyQgFACAAAFQAAAFAFADQAFACAMAAQAOAAAEgCQAFgDAAgFQAAgFgFgCQgEgCgOAAQgMAAgFACgAgLg+IgEAEQgCADAAAGIgBANIABANQAAAGACADIAEAEIAGABIAGgBQACgBACgDQACgDAAgGIABgNIgBgNQAAgGgCgDQgCgDgCgBIgGgBg");
	this.shape_25.setTransform(8.6,-11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_26.setTransform(-2,-13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgMBXIAAiAIAaAAIAACAgAgMg9IAAgZIAaAAIAAAZg");
	this.shape_27.setTransform(-10,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQALAAAIADQAIAEAFAGQAFAGACAIQADAJAAAKIgbAAIAAgDQAAgLgEgFQgEgFgHAAQgGAAgEAFQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgIIAbAAIAAAEQAAALgCAJQgDAIgFAGQgFAHgHADQgIAEgMAAQgLAAgHgEg");
	this.shape_28.setTransform(-18,-13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AghA6QgDgDgCgFQgBgFAAgGIAAhoIAbAAIAABjQAAAFACACQADADAEAAQAEAAAEgDIAIgGIAAhkIAbAAIAACAIgZAAIAAgNIgIAHIgHAFIgHADIgKABQgLAAgFgIg");
	this.shape_29.setTransform(-28.6,-13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgYBWQgFgDgDgEQgEgFgCgGQgCgHAAgJIAAg9QAAgJACgHQACgGAEgFQAGgJAOAAIAHABIAGACIAGAFIAHAFIAAg3IAbAAIAACtIgaAAIAAgOIAAAAQgGAIgGAEQgFAEgKAAQgHAAgFgCgAgKgTQgDAFAAAMIAAAvQAAAMADAFQAEAEAGAAQADAAADgCIAIgFIAAhMIgIgEQgDgCgDAAQgGAAgEAEg");
	this.shape_30.setTransform(-39.3,-15.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQAMAAAIADQAHAEAFAGQAFAGADAJQACAKAAAKIAAAlQAAALgCAJQgDAIgFAGQgFAHgHADQgIAEgMAAQgLAAgHgEgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_31.setTransform(-49.9,-13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgeBCIAAiAIAaAAIAAAPIAAAAQAEgJAIgEQAIgFAJAAIAGAAIAAAcIgHgBIgKgBQgHAAgGAEQgEAEAAAJIAABYg");
	this.shape_32.setTransform(-58.8,-13.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AADBRQgFgBgEgEQgIgHAAgPIAAhPIgPAAIAAgWIAPAAIAAgjIAaAAIAAAjIASAAIAAAWIgSAAIAABJQAAAFACADQADADAEAAIAJAAIAAAXIgGABIgHAAQgIAAgGgCg");
	this.shape_33.setTransform(-66.6,-15.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_34.setTransform(-75.2,-13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_35.setTransform(-83.8,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-32.3,386,64.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape.setTransform(94.4,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAlQAAAKgCAJQgDAJgFAHQgFAGgHAEQgIADgMAAQgLAAgHgDgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_1.setTransform(86.4,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("AgXBVQgIgCgGgCQgLgGAAgKQAAgHAFgGQAGgFAHgCIAAAAQgGgCgDgEQgEgEAAgHIACgGIAEgGIAFgFIAGgDIgJgHQgDgDgCgFIgDgMIgBgTQAAgNADgJQACgJAFgGQAFgFAIgDQAIgCALAAQAIAAAHADQAIADAGAIIAFgHIAFgEIAFgDIAHAAIAAAWIgCAAIgCAAIgHABQgDAAgDADIACALIABAJQAAAPgDAKQgCAKgFAFQgFAGgIADQgIACgJAAIgJAAIgEACQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAAEAFACIANABIAPABQAJABAIACQAIADAFAGQAFAGAAALQAAARgOAHQgIAEgKABQgKACgMAAQgKAAgIgBgAgPAyQgFACAAAFQAAAFAFADQAFACAMAAQAOAAAEgCQAFgDAAgFQAAgFgFgCQgEgCgOAAQgMAAgFACgAgLg+IgEAEQgCADAAAGIgBANIABANQAAAGACADIAEAEIAGABIAGgBQACgBACgDQACgDAAgGIABgNIgBgNQAAgGgCgDQgCgDgCgBIgGgBg");
	this.shape_2.setTransform(75.8,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAlQAAAKgCAJQgDAJgFAHQgFAGgHAEQgIADgMAAQgLAAgHgDgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_3.setTransform(65.1,18.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#58595B").s().p("AgNBXIAAitIAbAAIAACtg");
	this.shape_4.setTransform(57.2,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgeBCIAAiAIAZAAIAAAPIABAAQAEgJAIgEQAIgFAKAAIAFAAIAAAcIgIgBIgJgBQgHAAgFAEQgFAEAAAJIAABYg");
	this.shape_5.setTransform(45.7,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAlQAAAKgCAJQgDAJgFAHQgFAGgHAEQgIADgMAAQgLAAgHgDgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_6.setTransform(35.9,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AADBRQgFgBgEgEQgIgHAAgPIAAhPIgPAAIAAgWIAPAAIAAgjIAaAAIAAAjIASAAIAAAWIgSAAIAABJQAAAFACADQADADAEAAIAJAAIAAAXIgGABIgHAAQgIAAgGgCg");
	this.shape_7.setTransform(27.2,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_8.setTransform(18.6,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgSBAQgIgEgFgGQgFgHgDgJQgCgJAAgKIAAglQAAgLACgJQADgIAFgGQAFgHAIgDQAHgEALAAQAMAAAIAEQAHADAFAHQAFAGADAIQACAJAAALIAAAXIg4AAIAAASQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgCIAbAAQAAAKgDAIQgCAJgFAGQgFAGgIAEQgIADgLAAQgLAAgHgDgAgKgnQgEAFAAALIAAAHIAdAAIAAgHQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_9.setTransform(8,18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgMBBIgfiAIAbAAIAQBUIAAAAIARhUIAbAAIgfCAg");
	this.shape_10.setTransform(-2,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_11.setTransform(-12,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_12.setTransform(-20.6,16);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AgoBWIAAipIAZAAIAAAOIABAAQAGgJAHgEQAEgDALAAQANAAAHAJQAHAJAAASIAAA9QAAARgHAKQgEAEgFACQgFADgGAAIgIgBIgGgDIgGgEIgHgGIAAA0gAgGg9IgHAEIAABMIAHAFQAEACADAAIAFgBQADgBABgDIADgGIABgKIAAgvIgBgLIgDgGQgBgDgDAAIgFgBQgDAAgEACg");
	this.shape_13.setTransform(-34.5,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgoBWIAAipIAZAAIAAAOIABAAQAGgJAHgEQAFgDAJAAQAOAAAHAJQAHAJAAASIAAA9QAAARgHAKQgEAEgFACQgFADgHAAIgHgBIgGgDIgGgEIgHgGIAAA0gAgGg9IgHAEIAABMIAHAFQAEACADAAIAFgBIAEgEIADgGIABgKIAAgvIgBgLIgDgGQgCgDgCAAIgFgBQgDAAgEACg");
	this.shape_14.setTransform(-45.1,20.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231F20").s().p("AAWBXIgGgnIgfAAIgGAnIgcAAIAgitIAjAAIAgCtgAAMAWIgMhJIAAAAIgLBJIAXAAg");
	this.shape_15.setTransform(-55.9,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgOBXIAAiTIgdAAIAAgaIBXAAIAAAaIgdAAIAACTg");
	this.shape_16.setTransform(-71.1,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231F20").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_17.setTransform(-79.1,16);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AAjBXIAAiHIgBAAIgbCHIgNAAIgbiHIgBAAIAACHIgZAAIAAitIAnAAIAUBlIAAAAIAVhlIAnAAIAACtg");
	this.shape_18.setTransform(-89.8,16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#58595B").s().p("AAOBBIgOhRIAAAAIgSBRIgVAAIgZiBIAaAAIALBQIABAAIARhQIATAAIAOBQIABAAIAOhQIAaAAIgeCBg");
	this.shape_19.setTransform(80.5,-13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQAMAAAIADQAHAEAFAGQAFAGADAJQACAKAAAKIAAAXIg4AAIAAASQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgCIAbAAQAAAKgDAJQgCAIgFAGQgFAGgIADQgIAEgLAAQgLAAgHgEgAgKgnQgEAFAAALIAAAHIAdAAIAAgHQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_20.setTransform(68.5,-13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#58595B").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_21.setTransform(57.8,-13.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQAMAAAIADQAHAEAFAGQAFAGADAJQACAKAAAKIAAAXIg4AAIAAASQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgCIAbAAQAAAKgDAJQgCAIgFAGQgFAGgIADQgIAEgLAAQgLAAgHgEgAgKgnQgEAFAAALIAAAHIAdAAIAAgHQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_22.setTransform(41.9,-13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#58595B").s().p("AANBXIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAitIAbAAIAAA5IAGgGIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_23.setTransform(31.2,-15.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#58595B").s().p("AADBRQgFgBgEgEQgIgHAAgPIAAhPIgPAAIAAgWIAPAAIAAgjIAaAAIAAAjIASAAIAAAWIgSAAIAABJQAAAFACADQADADAEAAIAJAAIAAAXIgGABIgHAAQgIAAgGgCg");
	this.shape_24.setTransform(22.5,-15.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#58595B").s().p("AgXBVQgIgCgGgCQgLgGAAgKQAAgHAFgGQAGgFAHgCIAAAAQgGgCgDgEQgEgEAAgHIACgGIAEgGIAFgFIAGgDIgJgHQgDgDgCgFIgDgMIgBgTQAAgNADgJQACgJAFgGQAFgFAIgDQAIgCALAAQAIAAAHADQAIADAGAIIAFgHIAFgEIAFgDIAHAAIAAAWIgCAAIgCAAIgHABQgDAAgDADIACALIABAJQAAAPgDAKQgCAKgFAFQgFAGgIADQgIACgJAAIgJAAIgEACQAAABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQAAAEAFACIANABIAPABQAJABAIACQAIADAFAGQAFAGAAALQAAARgOAHQgIAEgKABQgKACgMAAQgKAAgIgBgAgPAyQgFACAAAFQAAAFAFADQAFACAMAAQAOAAAEgCQAFgDAAgFQAAgFgFgCQgEgCgOAAQgMAAgFACgAgLg+IgEAEQgCADAAAGIgBANIABANQAAAGACADIAEAEIAGABIAGgBQACgBACgDQACgDAAgGIABgNIgBgNQAAgGgCgDQgCgDgCgBIgGgBg");
	this.shape_25.setTransform(8.6,-11.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#58595B").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_26.setTransform(-2,-13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#58595B").s().p("AgMBXIAAiAIAaAAIAACAgAgMg9IAAgZIAaAAIAAAZg");
	this.shape_27.setTransform(-10,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQALAAAIADQAIAEAFAGQAFAGACAIQADAJAAAKIgbAAIAAgDQAAgLgEgFQgEgFgHAAQgGAAgEAFQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAgIIAbAAIAAAEQAAALgCAJQgDAIgFAGQgFAHgHADQgIAEgMAAQgLAAgHgEg");
	this.shape_28.setTransform(-18,-13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#58595B").s().p("AghA6QgDgDgCgFQgBgFAAgGIAAhoIAbAAIAABjQAAAFACACQADADAEAAQAEAAAEgDIAIgGIAAhkIAbAAIAACAIgZAAIAAgNIgIAHIgHAFIgHADIgKABQgLAAgFgIg");
	this.shape_29.setTransform(-28.6,-13.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#58595B").s().p("AgYBWQgFgDgDgEQgEgFgCgGQgCgHAAgJIAAg9QAAgJACgHQACgGAEgFQAGgJAOAAIAHABIAGACIAGAFIAHAFIAAg3IAbAAIAACtIgaAAIAAgOIAAAAQgGAIgGAEQgFAEgKAAQgHAAgFgCgAgKgTQgDAFAAAMIAAAvQAAAMADAFQAEAEAGAAQADAAADgCIAIgFIAAhMIgIgEQgDgCgDAAQgGAAgEAEg");
	this.shape_30.setTransform(-39.3,-15.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#58595B").s().p("AgSA/QgIgDgFgHQgFgGgDgIQgCgJAAgLIAAglQAAgKACgKQADgJAFgGQAFgGAIgEQAHgDALAAQAMAAAIADQAHAEAFAGQAFAGADAJQACAKAAAKIAAAlQAAALgCAJQgDAIgFAGQgFAHgHADQgIAEgMAAQgLAAgHgEgAgKgnQgEAFAAALIAAAuQAAAMAEAFQAEAFAGAAQAHAAAEgFQAEgFAAgMIAAguQAAgLgEgFQgEgFgHAAQgGAAgEAFg");
	this.shape_31.setTransform(-49.9,-13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#58595B").s().p("AgeBCIAAiAIAaAAIAAAPIAAAAQAEgJAIgEQAIgFAJAAIAGAAIAAAcIgHgBIgKgBQgHAAgGAEQgEAEAAAJIAABYg");
	this.shape_32.setTransform(-58.8,-13.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#58595B").s().p("AADBRQgFgBgEgEQgIgHAAgPIAAhPIgPAAIAAgWIAPAAIAAgjIAaAAIAAAjIASAAIAAAWIgSAAIAABJQAAAFACADQADADAEAAIAJAAIAAAXIgGABIgHAAQgIAAgGgCg");
	this.shape_33.setTransform(-66.6,-15.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#58595B").s().p("AANBCIAAhjQAAgFgCgCQgDgDgEAAQgEAAgDADIgJAGIAABkIgbAAIAAiAIAZAAIAAANIAIgHIAGgFIAIgDIAKgBQAFAAAEACQAEACAEADQAFAIAAAMIAABog");
	this.shape_34.setTransform(-75.2,-13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#58595B").s().p("AgOBXIAAitIAdAAIAACtg");
	this.shape_35.setTransform(-83.8,-15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193,-32.3,386,64.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F59046").s().p("AjNCyQhChLAAhaQAAh7B3hYQB3hYCnAAQBGAABEASIgcAyQg1gOg5AAQiJAAhiBJQhhBIAABkQAABKA1A9QA0A7BWAeIgcAyQhqglhAhIg");
	this.shape.setTransform(27.2,28.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,54.5,57.4), null);


(lib.codistopped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape.setTransform(82,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgIgJg");
	this.shape_1.setTransform(66.6,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_2.setTransform(74.3,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_3.setTransform(74.3,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59046").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_4.setTransform(74.3,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59046").s().p("Ak0AfIAAg9IJpAAIAAA9g");
	this.shape_5.setTransform(74.3,47.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBEC0").s().p("Ak0ChQAAglAPgiQAUguAsglQAtgjA8gUIgnhFIhOAAIgYgrIB+AAIA6BlQAogJApAAQApAAApAJIA5hlICAAAIgZArIhOAAIgnBFQA9AUArAjQAtAlAUAuQAPAjAAAkg");
	this.shape_6.setTransform(74.3,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F59046").s().p("AAIDtQBWgeA0g7QA1g9AAhKQAAhkhihIQhhhJiJAAQg5AAg2AOIgbgyQBDgSBHAAQCnAAB3BYQB3BYAAB7QAABahCBLQhABIhqAlg");
	this.shape_7.setTransform(27.2,43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F59046").s().p("AjNCyQhChLAAhaQAAh7B3hYQB3hYCnAAQBGAABEASIgcAyQg1gOg5AAQiJAAhiBJQhhBIAABkQAABKA1A9QA0A7BWAeIgcAyQhqglhAhIg");
	this.shape_8.setTransform(121.9,43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F59046").s().p("AkjgwIAAAAIgRgJIAAg9IAAgBIJpAAIAAA8Ik1Czg");
	this.shape_9.setTransform(74.3,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.codistopped, new cjs.Rectangle(0,0,149.2,80.4), null);


(lib.cody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58595B").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape.setTransform(54.8,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#58595B").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgIgJg");
	this.shape_1.setTransform(39.4,23.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_2.setTransform(47.1,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58595B").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_3.setTransform(47.1,41.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F59046").s().p("Ak0AeIAAg7IJpAAIAAA7g");
	this.shape_4.setTransform(47.1,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F59046").s().p("Ak0AfIAAg9IJpAAIAAA9g");
	this.shape_5.setTransform(47.1,47.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BCBEC0").s().p("Ak0ChQAAglAPgiQAUguAsglQAtgjA8gUIgnhFIhOAAIgYgrIB+AAIA6BlQAogJApAAQApAAApAJIA5hlICAAAIgZArIhOAAIgnBFQA9AUArAjQAtAlAUAuQAPAjAAAkg");
	this.shape_6.setTransform(47.1,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F59046").s().p("AkjgwIAAAAIgRgJIAAg9IAAgBIJpAAIAAA8Ik1Czg");
	this.shape_7.setTransform(47.1,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(5));

	// Layer 1 copy
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(67.5,43,1,1,0,0,0,0,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:27.2,scaleX:0.75,x:87.9},0).wait(1).to({scaleX:0.5,x:81.1},0).wait(1).to({scaleX:0.75,x:87.9},0).wait(1).to({scaleX:1,x:94.7},0).wait(1));

	// Layer 1
	this.instance_1 = new lib.wing();
	this.instance_1.parent = this;
	this.instance_1.setTransform(27.3,43,1,1,0,0,0,54.5,28.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:27.2,scaleX:0.75,x:6.9},0).wait(1).to({scaleX:0.5,x:13.6},0).wait(1).to({scaleX:0.75,x:6.9},0).wait(1).to({scaleX:1,x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,0,149.2,80.4);


// stage content:
(lib.mitappinventor_logo_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_28 = function() {
		playSound("_3salamisound3845337beewasporbumblebeein");
	}
	this.frame_349 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(28).call(this.frame_28).wait(321).call(this.frame_349).wait(1));

	// and cody
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(550,422.7,1.636,1.636);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(550,422.7,1.636,1.636);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(153).to({_off:false},0).to({_off:true,alpha:1},11).wait(186));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},11).wait(46).to({startPosition:0},0).to({alpha:0},9).to({_off:true},1).wait(130));

	// Layer 15
	this.instance_2 = new lib.cody();
	this.instance_2.parent = this;
	this.instance_2.setTransform(970.6,-147,1.636,1.636,-179.7,0,0,38.5,33.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).wait(1).to({regX:47.4,regY:40.2,rotation:-177.9,x:960.8,y:-116.5},0).wait(1).to({rotation:-176.2,x:963.8,y:-74.8},0).wait(1).to({rotation:-174.5,x:965.1,y:-33},0).wait(1).to({rotation:-172.9,x:964.9,y:8.9},0).wait(1).to({rotation:-171.2,x:962.9,y:50.7},0).wait(1).to({rotation:-169.5,x:959.4,y:92.3},0).wait(1).to({rotation:-167.8,x:954.2,y:133.9},0).wait(1).to({rotation:-166.2,x:947.5,y:175.2},0).wait(1).to({rotation:-164.5,x:939.1,y:216.1},0).wait(1).to({rotation:-162.8,x:929.3,y:256.8},0).wait(1).to({rotation:-161.1,x:918,y:297},0).wait(1).to({rotation:-159.5,x:905.3,y:336.9},0).wait(1).to({rotation:-157.8,x:891.1,y:376.2},0).wait(1).to({rotation:-156.1,x:875.6,y:415.1},0).wait(1).to({rotation:-154.4,x:858.7,y:453.3},0).wait(1).to({rotation:-152.8,x:840.4,y:490.9},0).wait(1).to({rotation:-151.1,x:820.9,y:527.8},0).wait(1).to({rotation:-149.4,x:800.2,y:564.2},0).wait(1).to({rotation:-147.7,x:778.2,y:599.7},0).wait(1).to({rotation:-146.1,x:755,y:634.5},0).wait(1).to({rotation:-144.4,x:730.7,y:668.5},0).wait(1).to({rotation:-142.7,x:705.2,y:701.6},0).wait(1).to({rotation:-141,x:678.7,y:734},0).wait(1).to({rotation:-139.4,x:651,y:765.3},0).wait(1).to({rotation:-137.7,x:622.4,y:795.7},0).wait(1).to({rotation:-136,x:592.7,y:825.1},0).to({_off:true},1).wait(244));

	// Layer 14
	this.instance_3 = new lib.cody();
	this.instance_3.parent = this;
	this.instance_3.setTransform(23.3,810.4,1.634,1.634,14.8,0,0,41,39);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(27).to({_off:false},0).wait(1).to({regX:47.4,regY:40.2,scaleX:1.64,scaleY:1.64,rotation:16.7,x:45.8,y:774.9},0).wait(1).to({rotation:18.4,x:59,y:734.9},0).wait(1).to({rotation:20.2,x:72.8,y:695},0).wait(1).to({rotation:21.9,x:87.1,y:655.4},0).wait(1).to({rotation:23.6,x:101.9,y:615.9},0).wait(1).to({rotation:25.3,x:117.4,y:576.6},0).wait(1).to({rotation:27.1,x:133.4,y:537.7},0).wait(1).to({rotation:28.8,x:150.1,y:498.9},0).wait(1).to({rotation:30.5,x:167.6,y:460.6},0).wait(1).to({rotation:32.2,x:185.8,y:422.5},0).wait(1).to({rotation:34,x:204.8,y:384.9},0).wait(1).to({rotation:35.7,x:224.5,y:347.7},0).wait(1).to({rotation:37.4,x:245.2,y:310.9},0).wait(1).to({rotation:39.1,x:266.7,y:274.7},0).wait(1).to({rotation:40.9,x:289.2,y:239},0).wait(1).to({rotation:42.6,x:312.7,y:203.9},0).wait(1).to({rotation:44.3,x:337.1,y:169.5},0).wait(1).to({rotation:46,x:362.4,y:135.9},0).wait(1).to({rotation:47.8,x:388.9,y:103},0).wait(1).to({rotation:49.5,x:416.3,y:71},0).wait(1).to({rotation:51.2,x:444.6,y:39.9},0).wait(1).to({rotation:52.9,x:474.1,y:9.6},0).wait(1).to({rotation:54.6,x:504.5,y:-19.6},0).wait(1).to({rotation:56.4,x:535.8,y:-47.8},0).wait(1).to({rotation:58.1,x:568.1,y:-74.9},0).wait(1).to({rotation:59.8,x:601.2,y:-101},0).to({_off:true},1).wait(296));

	// Layer 1
	this.instance_4 = new lib.codistopped();
	this.instance_4.parent = this;
	this.instance_4.setTransform(551.5,245.2,1.494,1.483,0,0,0,74.6,0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(145).to({_off:false},0).to({_off:true},75).wait(130));

	// Layer 11
	this.instance_5 = new lib.cody();
	this.instance_5.parent = this;
	this.instance_5.setTransform(349,854.7,1.488,1.474,44.9,0,0,47.2,0.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(118).to({_off:false},0).wait(1).to({regX:47.4,regY:40.2,scaleX:1.49,scaleY:1.48,rotation:42.5,x:333,y:870.6},0).wait(1).to({rotation:40,x:357.4,y:843.4},0).wait(1).to({rotation:37.5,x:380.6,y:815},0).wait(1).to({rotation:35,x:402.3,y:785.6},0).wait(1).to({rotation:32.5,x:422.6,y:755.3},0).wait(1).to({rotation:30,x:441.4,y:724.1},0).wait(1).to({rotation:27.5,x:458.6,y:691.9},0).wait(1).to({rotation:25,x:474.4,y:658.9},0).wait(1).to({rotation:22.5,x:488.5,y:625.3},0).wait(1).to({rotation:20,x:501.2,y:591.1},0).wait(1).to({rotation:17.5,x:512.3,y:556.4},0).wait(1).to({rotation:15,x:522,y:521.2},0).wait(1).to({rotation:12.5,x:530.2,y:485.7},0).wait(1).to({rotation:10,x:537.1,y:449.8},0).wait(1).to({rotation:7.5,x:542.6,y:413.7},0).wait(1).to({rotation:5,x:546.9,y:377.4},0).wait(1).to({rotation:2.5,x:549.9,y:341.1},0).wait(1).to({rotation:0,x:551.8,y:304.5},0).wait(8).to({_off:true},1).wait(205));

	// logo
	this.instance_6 = new lib.Tween5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(550,327.3,1.636,1.636);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(550,327.3,1.636,1.636);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},221).to({state:[{t:this.instance_7}]},8).wait(121));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(221).to({_off:false},0).to({_off:true,alpha:1},8).wait(121));

	// introducing
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(550,422.7,1.636,1.636);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(550,422.7,1.636,1.636);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true,alpha:1},11).wait(339));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:false},11).wait(129).to({startPosition:0},0).to({alpha:0},11).to({_off:true},1).wait(198));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(784.2,697.3,631.6,105.7);
// library properties:
lib.properties = {
	id: '523750EE92BE413A9DFCC5604A7E83B6',
	width: 1100,
	height: 655,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/_3salamisound3845337beewasporbumblebeein.mp3", id:"_3salamisound3845337beewasporbumblebeein"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['523750EE92BE413A9DFCC5604A7E83B6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;