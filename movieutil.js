const movies = [{
    year: 1928,
    title: "Wings",
    init: "W",
    director: "William Wellman",
    stars: ["Clara Bow", "Charles (Buddy) Rogers", "Richard Arlen"],
    lines: [],
    hints: ["First Oscar", "Young Gary Cooper"],
    pics: [],
    videos: [],
    audios: [],
    oscar: "Y"
  },
  {
    year: 1957,
    title: "Bridge on the River Kwai",
    init: "BOTRK",
    director: "David Lean",
    stars: ["William Holden", "Jack Hawkins"],
    lines: ["Kill him! Kill him!"],
    hints: ["Asian jungle"],
    pics: [],
    videos: ['./vids/test.mp4'],
    audios: ["./auds/boo.mp3"],
    oscar: "Y"
    },
  {
    year: 1959,
    title: "Ben Hur",
    init: "BH",
    director: "William Wyler",
    stars: ["Charlton Heston", "Stephen Boyd", "Haya Harareet", "Jack Hawkins", "Hugh Griffith"],
    lines: ["Row well and live", "We keep you alive to serve this ship"],
    hints: ["12 awards", "./auds/applause.mp3", './vids/Ben Hur opening.mp4'],
    pics: ['./pics/strand.jpg'],
    videos: ['./vids/Ben Hur opening.mp4','./vids/Ben-Hur 2.mp4'],
    audios: ["./auds/applause.mp3"],
    oscar: "Y"
}
];

let randomMovies = [];

function loop_thru(){
for(i=0; i<movies.length; i++){
  console.log("Movie Title is " + movies[i].title + " directed by " + movies[i].director + " from " + movies[i].year);
  for(j=0; j<movies[i].stars.length; j++){
    if(j===0){
    console.log("Starring - " + movies[i].stars[j]);
    }
  else{
    console.log(movies[i].stars[j]);
    }
  }
  for(j=0; j<movies[i].lines.length; j++){
    if(j===0){
    console.log("Lines from - " + movies[i].lines[j]);
    }
  else{
    console.log(movies[i].lines[j]);
    }
  }
  for(j=0; j<movies[i].hints.length; j++){
    if(j===0){
    console.log("Hints for - " + movies[i].hints[j]);
    }
  else{
    console.log(movies[i].lines[j]);
    }
  }
  const audio = new Audio (movies[i].audios[0]);
  audio.play(); 
}
}


function show_image() {
  var img = document.createElement("img");
  img.src = movies[1].pics[0];
  img.setAttribute("width", "320");
  img.setAttribute("height", "240");
 
  if (document.body.lastElementChild) {
    document.body.removeChild(document.body.lastElementChild);
  }

  document.body.appendChild(img);
}


function play_vid() {
  var x = document.createElement("VIDEO");

  x.setAttribute("src",movies[1].videos[0]);

  x.setAttribute("width", "320");
  x.setAttribute("height", "240");
  x.setAttribute("controls", "controls");
  if (document.body.lastElementChild) {
    document.body.removeChild(document.body.lastElementChild);
  }
  document.body.appendChild(x);

}

/*
function applause() {
  const audio = new Audio (movies[1].audios[0]);
  audio.play(); 
}*/


/* GET THE FIRST LETTER OF EACH WORD IN EACH MOVIE*/
function getFirstLetters(str) {
  const firstLetters = str
    .split(' ')
    .map(word => word[0])
    .join('');

  return firstLetters;
}

/* PUSH THE OBJECTS OF 5 MOVIES INTO THE RANDOMMOVIES ARRAY*/
for (let i=0; i<movies.length; i++){
  randomMovies.push(movies[i]);
}
/* SORT THOSE RANDOM MOVIE OBJECTS RANDOMLY */
console.log(randomMovies)

/* THEN EITHER PUSH THEM INTO A NEW ARRAY OR MAYBE JUST ADD A FIELD TO THE MOVIES THAT CONTAINS THE INITIALS*/

let stringOfInits = ""

function applause(){
for (let i=0; i<randomMovies.length; i++){
 //  console.log(getFirstLetters(randomMovies[i].title));
   console.log(randomMovies[i].init);
   stringOfInits = stringOfInits + randomMovies[i].init
   for (let j = 0; j<randomMovies[i].hints.length; j++ ){
     console.log (randomMovies[i].hints[j]);
     let hint = (randomMovies[i].hints[j]);
     let last3 = (hint.slice(hint.length - 3));
     console.log("last 3 = " + last3);
     if(last3==="mp3"){
      soundHint(i, j)
     }
     if(last3==="mp4"){
      show_hint_image(i, j)
     }
   }
} 
}

console.log ("string of initials = " + stringOfInits)

function soundHint(movie, hint){
  const audio = new Audio (randomMovies[movie].hints[hint]);
  audio.play(); 
}


function show_hint_image(movie, hint) {
  var x = document.createElement("VIDEO");

  x.setAttribute("src",randomMovies[movie].hints[hint]);

  x.setAttribute("width", "320");
  x.setAttribute("height", "240");
  x.setAttribute("controls", "controls");
  if (document.body.lastElementChild) {
    document.body.removeChild(document.body.lastElementChild);
  }
  document.body.appendChild(x);
}


