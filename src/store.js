import { reactive  } from "vue";
const API_KEY = 'cd8576f9be964ebd86b19d98f629ae98'

export const store = reactive({
    apiKey: API_KEY,
    endpoint: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`,
    films: [],

    /* Film cercato */
    search: ''
})