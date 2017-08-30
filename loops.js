function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array[1] = 'I am 1 strange loop';
    }
    else {
      array[i] = 'I am ${i} strange loops';
    }
  }
return array;
}

let countdown = 100;
function whileLoop (countdown) {
  while (countdown > 0) {
    console.log(--countdown)
  }
  return "done";
}

function doWhileLoop (array) {
  do {
    function maybeTrue() {
  return Math.random() >= 0.5
}
array.push();
  } while (array.length > 0 && maybeTrue());
  return array;
}
