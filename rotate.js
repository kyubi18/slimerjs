//--- costom direct ---
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const directCostom="on";//on/off
const directRandom="yes";//yes/no
var linkDirectRandom=["https://google.com","https://www.youtube.com"];
var linkDirectOne=linkDirectRandom[random(0, (linkDirectRandom.length-1))];
