import { reactive } from "vue";
const API_KEY = "cd8576f9be964ebd86b19d98f629ae98";

export const store = reactive({
  apiKey: API_KEY,
  endpoint: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=it_IT`,
  endpoint_tv: `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT`,
  endpoint_popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  
  
  cover_image: `https://image.tmdb.org/t/p/w342/`,
  films: [],
  tv_series: [],
  popular_films: [],
  endpoint_popular_trailer: ``,
  popular_trailer: [],

  /* Film cercato */
  search: "",
  click: false,
});
