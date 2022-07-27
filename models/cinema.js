const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function () {
  return this.films.map(film => film.title);
};

Cinema.prototype.findFilmByTitle = function (title) {
  return this.films.find(film => film.title===title);
}

// Cinema.prototype.filterByGenre = function (genre) {
//   return this.films.filter(film => film.genre===genre);
// }

Cinema.prototype.hasYear = function (year) {
  result = this.films.some(film => film.year === year);
  return result;
}

Cinema.prototype.allFilmsOverLength = function (length) {
  return this.films.every(film => film.length > length);
}

Cinema.prototype.totalRunningTime = function () {
  return this.films.reduce((accumulator, film) => accumulator+film.length, 0);
}

Cinema.prototype.filterByCategory = function (category, value) {
  return this.films.filter(film => film[category]===value);
}

module.exports = Cinema;
