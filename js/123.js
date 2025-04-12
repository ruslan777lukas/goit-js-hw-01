function duplicateEncode(word) {
  let result = "";
  let spWord = word.toLowerCase().split();
  for (x in spWord) {
    let one = word.indexOf(x);
    let two = word.lastIndexOf(x);
    if (one == two) {
      result.concat(")");
    } else {
      result.concat("(");
    }
  }
  return result;
}

console.log(duplicateEncode("fallout"));
