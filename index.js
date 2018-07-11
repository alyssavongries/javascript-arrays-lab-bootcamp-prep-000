// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var kittenName = [...kittens, name]
  return kittenName;
}

function prependKitten(name) {
  var nameKitten = [name,...kittens];
  return nameKitten;
}

function removeLastKitten() {
  var minKitten = kitten.slice(1)
  return minKitten;
}

