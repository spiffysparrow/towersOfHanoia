Function.prototype.myBind = function(context){
  var fn = this;
  return function(){
    fn.apply(context);
  }
}

function Cow(name){
  this.name = name;
}

Cow.prototype.moo = function(){
  console.log(this.name);
}

var bessy = new Cow("bessy");

var la = bessy.moo.myBind(bessy)

la()
