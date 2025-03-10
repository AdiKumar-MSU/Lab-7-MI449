function getRandomInt(max) {
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - 1 + 1) + 1); 
}

window.getRandomInt = getRandomInt;
