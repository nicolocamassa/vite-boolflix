import { reactive } from "vue";
const API_KEY = "cd8576f9be964ebd86b19d98f629ae98";

export const store = reactive({
  apiKey: API_KEY,
  endpoint: ``,
  endpoint_tv: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT`,
  endpoint_popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  endpoint_popular_trailer: ``,
  endpoint_cast: ``,
  
  films: [],
  tv_series: [],
  popular_films: [],
  popular_trailer: [],
  cast: [],

  /* Film cercato */
  search: "",
  cover_image: `https://image.tmdb.org/t/p/w342/`,
  click: false,
});
