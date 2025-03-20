// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = "It was 94 fahrenheit outside, so :insertx: decided to take his pet turtle, Bob, for a walk. At :inserty:, Bob plopped down and refused to budge, :insertz:. :insertx: saw the whole thing, but wasn’t surprised — Bob weighs 2 pounds, and it was a hot day."

let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"]

let inserty = ["the soup kitchen", "Disneyland", "the White House"]

let insertz = ["spontaneously combusted", "melting into a puddle on the sidewalk", "turned into a slug and crawled away"]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

let newStory = storyText
let xItem = randomValueFromArray(insertx);
let yItem = randomValueFromArray(inserty);
let zItem = randomValueFromArray(insertz);

newStory = newStory.replaceAll(':insertx:', xItem);
newStory = newStory.replaceAll(':inserty:', yItem);
newStory = newStory.replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(2/14) + ' stone';
    const temperature =  Math.round((94-32) * 5/9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature).replace('2 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}