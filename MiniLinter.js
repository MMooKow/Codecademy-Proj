//Setup
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];
//Split the words in story into new array elements
const storyWords = story.split(' ');
//Remove words in the unnecessaryWords array
const betterWords = storyWords.filter(word => ! unnecessaryWords.includes(word)
  );
//Count the number of words in the overusedWords array
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;
for (word of betterWords){
  if (word === 'really'){
    reallyCount++;
  }else if (word === 'very'){
    veryCount++;
  }else if (word === 'basically'){
    basicallyCount++;
  }
};
//Count number of sentences in the story
let periodCount = story.split('.');
let exclamationCount = 0 + periodCount.length;
for (word of story){
  if (word === '!'){
    exclamationCount++
  }
}
const sentenceCount = exclamationCount - 1;
//Create function to output word count, sentence count, and overused words in consistent format.
const printOutput = () => {
  console.log('Your word count is ' + storyWords.length + '.');
    console.log('Your sentence count is ' + sentenceCount + '.');
  console.log('You have overused the following words: ');
  console.log('Really: ' + reallyCount);
  console.log('Very: ' + veryCount);
  console.log('Basically: ' + basicallyCount);
};
printOutput();
console.log(betterWords.join(' '));