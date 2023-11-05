const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat) {
  cats.push(cat);
}

function destructivelyPrependCat(cat) {
  cats.unshift(cat);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat () {
  cats.shift();
}

function appendCat(name) {
  let newcats = cats.slice()
  newcats.push(name);
  return newcats;
}

function prependCat(name) {
  let bcats = cats.slice()
  bcats.unshift(name);
  return bcats;
}

function removeLastCat() {
  let acats = cats.slice()
  acats.pop();
  return acats;
}

function removeFirstCat() {
  let differentcats = cats.slice();
  differentcats.shift(); 
  return differentcats;
}