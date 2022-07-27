const Film = function (title, genre, year, length) {
  this.title = title;
  this.genre = genre;
  this.year = year;
  this.length = length;
};

module.exports = Film;


const myFilm = {
  title:'Dunkirk',
  genre:'history',
  year:2017,
  length:96,
  filmrating:8.2
}