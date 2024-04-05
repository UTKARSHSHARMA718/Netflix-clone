import {
  BROWSE_BY_FILTER,
  FILMS,
  HOME,
  MY_LIST,
  NEW_AND_POPULAR,
  SERIES,
} from "./routeNames";

export const AUTH_BG_URL = "/images/hero.jpg";
export const LOGIN_TYPE = "login";
export const REGISTER_TYPE = "register";
export const CREDENTIALS = "credentials";
export const PRODUCION = "production";

export const IMAGES_ARRAY = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];

export const DISTANCE_TO_MAKE_NAVBAR_DARK = 66;
export const MOBILE_MENU_OPTIONS = [
  { label: "Home", routeName: HOME },
  { label: "Series", routeName: SERIES },
  { label: "Films", routeName: FILMS },
  { label: "New & Popular", routeName: NEW_AND_POPULAR },
  { label: "My List", routeName: MY_LIST },
  { label: "Browse by Filter", routeName: BROWSE_BY_FILTER },
];

export const MOVIE_TYPE = "movie";
export const SERIES_TYPE = "series";
export const LANGUAGES = {
  hi: "hindi",
  en: "english",
  es: "spanish",
  zh: "madarin",
  fr: "french",
};

export const LANGUAGES_OPTIONS_ARRAY = [
  { label: "Select Langauge", value: "", isSelected: true },
  { label: "English", value: "en" },
  { label: "Hindi", value: "hi" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "Mandrin", value: "zh" },
];

export const GENRE_OPTIONS_ARRAY = [
  { label: "Select Genre", value: "", isSelected: true },
  { label: "Action", value: "actions" },
  { label: "Adventure", value: "adventure" },
  { label: "Sci-fi", value: "sci-fi" },
  { label: "Fantasy", value: "fantasy" },
  { label: "Documentry", value: "documentry" },
  { label: "Disaster", value: "disaster" },
  { label: "Comedy", value: "comedy" },
];

export const DIRECTOR_OPTIONS_ARRAY = [
  { label: "Select Director", value: "", isSelected: true },
  { label: "Morten Tyldum", value: "Morten Tyldum" },
  { label: "David Fincher", value: "David Fincher" },
  { label: "Colin Trevorrow", value: "Colin Trevorrow" },
  { label: "Joe Johnston", value: "Joe Johnston" },
  { label: "J. A. Bayona", value: "J. A. Bayona" },
  { label: "Stephen Sommers", value: "Stephen Sommers" },
  { label: "Roland Emmerich", value: "Roland Emmerich" },
  { label: "Doug Liman", value: "Doug Liman" },
  { label: "Guy Ritchie", value: "Guy Ritchie" },
  { label: "Joe Russo", value: "Joe Russo" },
  { label: "Joss Whedon", value: "Joss Whedon" },
  { label: "Anthony Russo", value: "Anthony Russo" },
  { label: "Christopher Nolan", value: "Christopher Nolan" },
  { label: "Zack Snyder", value: "Zack Snyder" },
  { label: "Bassam Kurdali", value: "Bassam Kurdali" },
  { label: "Colin Levy", value: "Colin Levy" },
  { label: "Sacha Goedegebure", value: "Sacha Goedegebure" },
];

export const AVAILABLE_RESOLUTIONS_OPTIONS = ["720p", "1080p", "1440p"];
export const EARLIEST_YEAR = 1990;
export const NUMBER_OF_YEAR_AVAIALABLE = 35;
export const AVAILABLE_YEARS = new Array(NUMBER_OF_YEAR_AVAIALABLE)
  ?.fill(1)
  ?.map((value, index) => ({
    label: EARLIEST_YEAR + index,
    value: EARLIEST_YEAR + index,
  }));

export const SCROLL_BY = 250;
export const TRANSITION_TIME = 300;
