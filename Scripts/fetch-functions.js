const ts = 1;
const publicKey = "76ed41d8b1c16043309b790a254bd202";
const privateKey = "49ee97d90c9ca478ac8cf9f395e49a3b7bfab8fb";
const hash = md5(ts + privateKey + publicKey);

let characterID;

let favorites = {
  characterIds: new Set(),
};
let favoritesPage;
let characterPage;
let homePage;
let favoritesQueryParam;

document.addEventListener("DOMContentLoaded", () => {
  const regexCharacterID = /(?<=characterid=)\d+/g;
  const characterIDResult = window.location.href.match(regexCharacterID);
  if (characterIDResult) {
    characterID = characterIDResult[0];
  }
  const regexFavorites = /(?<=favorites=).*/g;
  const regexFavoritesResult = window.location.href.match(regexFavorites);
  if (regexFavoritesResult) {
    favorites.characterIds = new Set(
      regexFavoritesResult[0].split(",").map((id) => Number(id))
    );
  }
  favoritesQueryParam =
    favorites.characterIds.size == 0
      ? ""
      : "favorites=" + Array.from(favorites.characterIds).join(",");
  const path = window.location.pathname;
  console.log(window.location);
  console.log(path);
  console.log("Page loaded");
  if (path === "/Pages/character.html") {
    // console.log(favorites);
    // console.log(characterID);
    favoritesPage = "./favorites.html?";
    homePage = "../index.html?";
    document
      .querySelector("nav .home-link")
      .setAttribute("href", homePage + favoritesQueryParam);
    document
      .querySelector("nav .favorites-link")
      .setAttribute("href", favoritesPage + favoritesQueryParam);
    createCharacterSection(characterID, favorites);
    createEventListeners(characterID);
  }
  if (path === "/Pages/favorites.html") {
    console.log(window.location.pathname);
    characterPage = "./character.html?";
    homePage = "../index.html?";
    populateFavorites();
  }
  if (["/index.html", "/Marvel-API-App/"].includes(path)) {
    favoritesPage = "./Pages/favorites.html?";
    characterPage = "./Pages/character.html?";
  }
  if (path === "/Marvel-API-App/Pages/favorites.html") {
    characterPage = "./character.html?";
    homePage = "/Marvel-API-App/Pages/?";
  }
  // Add favorites to url parameters
  console.log(`Favorites page link: ${favoritesPage + favoritesQueryParam}`);
  const favPage = document.querySelector("nav .favorites-link");
  if (favPage) {
    favPage.setAttribute("href", favoritesPage + favoritesQueryParam);
  }
});

// -----------------------Favorites page functions--------------

function createCharacterCard(data, col) {
  const columns = document.querySelectorAll(".favorites-grid .col");
  const link = document.createElement("a");
  const fig = document.createElement("figure");
  const img = document.createElement("img");
  const caption = document.createElement("figcaption");
  const remove = document.createElement("span");
  remove.classList.add("remove");
  remove.textContent = "Remove";
  remove.addEventListener("click", (event) => {
    event.stopPropagation();
    favorites.characterIds.delete(Number(data.id));
    favoritesQueryParam =
      favorites.characterIds.size == 0
        ? ""
        : "favorites=" + Array.from(favorites.characterIds).join(",");
    // link.remove();
    event.target.closest("a").remove();
    if (window.location.pathname === "/Marvel-API-App/Pages/favorites.html") {
      window.location.href =
        "/Marvel-API-App/Pages/favorites.html?" + stringToSend;
    } else {
      window.location.href = "./favorites.html?" + favoritesQueryParam;
    }
    populateFavorites();
  });
  caption.textContent = data.name;
  const src = data.thumbnail.path + "." + data.thumbnail.extension;
  img.setAttribute("src", src);
  fig.appendChild(img);
  fig.appendChild(caption);
  fig.appendChild(remove);
  img.addEventListener("load", () => {
    columns[col.idx].appendChild(link);
    col.idx = (col.idx + 1) % 3;
  });
  link.addEventListener("click", (event) => {
    event.preventDefault();
    let stringToSend = `characterid=${data.id}&${favoritesQueryParam}`;
    window.location.href = "./character.html?" + stringToSend;
  });
  link.appendChild(fig);
}

function renderCharacter(id, col) {
  try {
    const api = `http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.data.results[0]);
        createCharacterCard(res.data.results[0], col);
      });
  } catch (error) {
    console.error(error);
  }
}

function populateFavorites() {
  console.log(`window.location.pathname: ${window.location.pathname}`);
  document
    .querySelectorAll(".favorites-grid .col")
    .forEach((col) => (col.innerHTML = ""));
  let col = { idx: 0 };
  favorites.characterIds.forEach((characterId) =>
    renderCharacter(characterId, col)
  );
  document
    .querySelector("nav .home-page")
    .addEventListener("click", (event) => {
      event.preventDefault();
      let stringToSend = `${favoritesQueryParam}`;
      if (window.location.pathname === "/Marvel-API-App/Pages/favorites.html") {
        window.location.href =
          "https://roderick0411.github.io/Marvel-API-App/index.html?" +
          stringToSend;
      } else {
        window.location.href = "../index.html?" + stringToSend;
      }
    });
}

// ---------------------Character page functions-----------------

function createEventListeners(characterID) {
  document
    .querySelector(".header-div .buttons .comics")
    .addEventListener("click", () => {
      getCharacterComics(characterID);
    });
  document
    .querySelector(".header-div .buttons .events")
    .addEventListener("click", () => {
      getCharacterEvents(characterID);
    });
  document
    .querySelector(".header-div .buttons .series")
    .addEventListener("click", () => {
      getCharacterSeries(characterID);
    });
  document
    .querySelector(".header-div .buttons .stories")
    .addEventListener("click", () => {
      getCharacterStories(characterID);
    });
  const favoritesButton = document.querySelector(
    "#character-page .character-info .add-remove"
  );

  favoritesButton.addEventListener("click", () => {
    if (favoritesButton.getAttribute("data-state") === "add") {
      favorites.characterIds.add(Number(characterID));
      console.log(favorites);
      favoritesButton.setAttribute("data-state", "remove");
    } else {
      favorites.characterIds.delete(Number(characterID));
      console.log(favorites);
      favoritesButton.setAttribute("data-state", "add");
    }
    favoritesButton.textContent = favorites.characterIds.has(
      Number(characterID)
    )
      ? "Remove from Favorites"
      : "Add to Favorites";
    favoritesQueryParam =
      favorites.characterIds.size == 0
        ? ""
        : "favorites=" + Array.from(favorites.characterIds).join(",");
    document
      .querySelector("nav .home-link")
      .setAttribute("href", homePage + favoritesQueryParam);
    document
      .querySelector("nav .favorites-link")
      .setAttribute("href", favoritesPage + favoritesQueryParam);
  });
}

function populateSuggestions(characters, favorites) {
  const suggestionsList = document.querySelector(".input-div .suggestions");
  suggestionsList.innerHTML = "";
  characters.forEach((character) => {
    const link = document.createElement("a");
    // ./Pages/character.html
    link.setAttribute(
      "href",
      `./Pages/character.html?characterid=${character.id}&${favoritesQueryParam}`
    );
    const li = document.createElement("li");
    li.textContent = character.name;
    li.setAttribute("data-id", character.id);
    li.addEventListener("click", () => {
      characterID = character.id;
      console.log(`characterID clicked: ${characterID}`);
      console.log(character.id);
      document.querySelector(".input-div input").value = "";
      document.querySelector(".input-div .suggestions").innerHTML = "";
      createCharacterSection(character.id, favorites);
    });
    link.appendChild(li);
    suggestionsList.appendChild(link);
  });
}

function searchSuggestions(value, favorites) {
  if (value === "") {
    const suggestionsList = document.querySelector(".input-div .suggestions");
    suggestionsList.innerHTML = "";
    return;
  }
  try {
    const api = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${value}&limit=15&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => populateSuggestions(res.data.results, favorites));
  } catch (error) {
    console.error(error);
  }
}

function getCharacter(id, favorites) {
  try {
    const api = `http://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.results[0]);
        populateThumbnail(res.data.results[0], favorites);
      });
  } catch (error) {
    console.error(error);
  }
}

function populateGallery(data) {
  document.querySelector(".gallery-grid").classList.remove("hidden");
  const gallery = document.querySelector(".gallery-grid .gallery");
  gallery.innerHTML = "";
  data.forEach((card) => {
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    img.addEventListener("load", () => gallery.appendChild(fig));
    fig.appendChild(img);
    const caption = document.createElement("figcaption");
    caption.textContent = card.title;
    const src = card.thumbnail.path + "." + card.thumbnail.extension;
    img.setAttribute("src", src);
    fig.appendChild(img);
    fig.appendChild(caption);
  });
}

function getCharacterComics(id) {
  try {
    const api = `http://gateway.marvel.com/v1/public/characters/${id}/comics?format=comic&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.results);
        document.querySelector(".gallery-grid .gallery-title").textContent =
          "COMICS";
        populateGallery(res.data.results);
      });
  } catch (error) {
    console.error(error);
  }
}

function getCharacterEvents(id) {
  try {
    const api = `http://gateway.marvel.com/v1/public/characters/${id}/events?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.results);
        document.querySelector(".gallery-grid .gallery-title").textContent =
          "EVENTS";
        populateGallery(res.data.results);
      });
  } catch (error) {
    console.error(error);
  }
}

function getCharacterStories(id) {
  try {
    const api = `http://gateway.marvel.com/v1/public/characters/${id}/stories?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.results);
        document.querySelector(".gallery-grid .gallery-title").textContent =
          "STORIES";
        populateGallery(res.data.results);
      });
  } catch (error) {
    console.error(error);
  }
}

function getCharacterSeries(id) {
  try {
    const api = `http://gateway.marvel.com/v1/public/characters/${id}/series?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    fetch(api)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.results);
        document.querySelector(".gallery-grid .gallery-title").textContent =
          "SERIES";
        populateGallery(res.data.results);
      });
  } catch (error) {
    console.error(error);
  }
}

function populateThumbnail(data, favorites) {
  document.querySelector(
    "#character-page .character-info .character-name"
  ).textContent = data.name;
  const img = document.createElement("img");
  const src = data.thumbnail.path + "." + data.thumbnail.extension;
  img.setAttribute("src", src);
  img.addEventListener("load", () => {
    document
      .querySelector("#character-page .header-div .thumbnail")
      .appendChild(img);
    document
      .querySelector("#character-page .header-div")
      .classList.remove("hidden");
  });

  const favoritesButton = document.querySelector(
    "#character-page .character-info .add-remove"
  );
  if (favorites.characterIds.has(data.id)) {
    favoritesButton.setAttribute("data-state", "remove");
  } else {
    favoritesButton.setAttribute("data-state", "add");
  }
  favoritesButton.textContent = favorites.characterIds.has(data.id)
    ? "Remove from Favorites"
    : "Add to Favorites";
}

function createCharacterSection(id, favorites) {
  getCharacter(id, favorites);
  getCharacterComics(id);
  // getCharacterEvents(id);
  // getCharacterStories(id);
  // getCharacterSeries(id);
}

export { searchSuggestions };
