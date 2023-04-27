// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "Nobody",
  artist: "Avenged Sevenfold",
  album: "Life is but a dream",
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `Name of the song is ${music.title}, by '${music.artist}'. On the album "${music.album}".`;

console.log(songSnippet);
