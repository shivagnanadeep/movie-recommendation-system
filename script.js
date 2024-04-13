let movies=[
    {
        name:"Avengers Infinity War",
        rating:8.7,
        poster:"https://tse4.mm.bing.net/th?id=OIP.ZkOmuqOWNqKDYkMKe2YeAgHaK-&pid=Api&P=0&h=180",
        description:"avengers stopping the deadly titan thanos who is meant to be the main antagonist of the movie"
    },
    {
        name:"RRR",
        rating:7.8,
        poster:"https://tse1.mm.bing.net/th?id=OIP.bcgcm869WjqN8lcLc7txEAHaHa&pid=Api&P=0&h=180",
        description:"A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India."
    },
    {
        name:"Jaws",
        rating:8.1,
        poster:"https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/11/jaws-1975-poster.jpg?q=50&fit=crop&w=750&dpr=1.5",
        description:"There are plenty of great  movies out there, but few resonate quite like the original Jaws. This was the film that made Steven Spielberg a household name, and arguably kicked off the idea of what a blockbuster movie was. "
    },
    {
        name: "Inception",
        poster: "https://th.bing.com/th?id=ODL.278411ebe959b0a31556e6d50a0ca08c&w=135&h=201&c=10&rs=1&qlt=90&o=6&dpr=1.5&pid=13.1",
        rating: 8.8,
        description: "A thief who enters the dreams of others to steal secrets from their subconscious."
      },
      {
        name: "The Shawshank Redemption",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        rating: 9.3,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
      },
      {
        name: "The Dark Knight",
        poster: "https://www.bing.com/th?id=OIP.KYSOiAL3fpjiYUBqKIlJywHaLH&w=155&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        rating: 9.0,
        description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham."
      },
      {
        name: "Pulp Fiction",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
        rating: 8.9,
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
      },
      {
        name: "The Godfather",
        poster: "https://www.bing.com/th?id=OIP.66C3DgcV1fTWC3J6O0qSygHaER&w=157&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        rating: 9.2,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
      },
      {
        name: "Forrest Gump",
        poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
        rating: 8.8,
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
      },
      {
        name: "The Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
        rating: 8.7,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
      },
      {
        name: "Interstellar",
        poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        rating: 8.6,
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
      },
      {
        name: "Schindler's List",
        poster: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
        rating: 8.9,
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."
      },
      {
        name: "Fight Club",
        poster: "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
        rating: 8.8,
        description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
      }
]

displayMovies(movies);
function searchMovie(){
    let movieName = document.getElementById("search").value;
    if(movieName!="")
    {
      let result = movies.filter(function(movie){
        return movie.name.toUpperCase().includes(movieName.toUpperCase())
      });
      displayMovies(result);
    }
    else{
      displayMovies(movies);
    }
}

function displayMovies(data){
  /*let movie = document.createElement("div");
  movie.classList.add("movie");

  let overlay=document.createElement("div");
  overlay.classList.add("overlay");

  movie.appendChild(overlay);*/
  document.getElementById("movies").innerHTML="";

  let htmlString=``;
  for(let i=0;i<data.length;i++){
    htmlString=htmlString+`
    <div class="movie">
            <div class="overlay">
                <div class="video">

                </div>
                <div class="details">
                    <h1 class="movie-name">${data[i].name}</h1>
                    <h2 class="rating">rating: ${data[i].rating}</h2>
                    <p class="description">${data[i].description}</p>
                </div>
            </div>
            <img class="movie-poster" src="${data[i].poster}" alt="movie-poster">
        </div>
    `;
  }
document.getElementById("movies").innerHTML=htmlString;

}
