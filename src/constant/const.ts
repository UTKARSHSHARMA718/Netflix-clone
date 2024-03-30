import {
  BROWSE_BY_LANGUAGES,
  FILMS,
  HOME,
  MY_LIST,
  NEW_AND_POPULAR,
  SERIES,
} from "./routeNames";

export const AUTH_BG_URL = "/images/hero.jpg";
export const LOGIN = "login";
export const REGISTER = "register";
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
  { label: "Browse by Language", routeName: BROWSE_BY_LANGUAGES },
];
