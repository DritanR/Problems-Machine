function stringBreakers(n, string) {
  string = string.split(' ').join('');
  let results = '';

  for (let i = 0; i < string.length; i++) {
    if (i % n === 0 && i !== 0) {
      results += "\n" + string[i];
    } else {
      results += string[i];
    }
  }
  return results
}