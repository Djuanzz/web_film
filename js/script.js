const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGE1ZDdkNTVlODk2M2IwN2JmZGQwN2IzYjMyYjYwNCIsInN1YiI6IjY1MjRjZGI0ZmQ2MzAwMDExYzc4M2RlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EmHsVIKOrNp4uc_V5CDKz_FvdGP9EMniHmCAxD4ak-8",
  },
};

const gambar = document.querySelector("#img-card");
const container = document.querySelector(".container");

console.log(gambar);
console.log(container);

async function getPerfilman() {
  const resFilm = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  );
  const data = await resFilm.json();
  console.log(data.results);

  for (let i = 0; i < 20; i++) {
    const imgPath =
      "https://image.tmdb.org/t/p/original" + data.results[i].poster_path;

    const title = data.results[i].original_title;

    let colom = document.createElement("div");
    colom.className = "col";
    colom.id = i;
    // let oke = document.createElement("h1");
    document.querySelector(".row").append(colom);

    const oke = `
    <div class="card" style="width: 15rem;">
        <img src=${imgPath} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
        </div>
    </div>
    `;

    document.getElementById(i).innerHTML = oke;
  }
}

getPerfilman();
