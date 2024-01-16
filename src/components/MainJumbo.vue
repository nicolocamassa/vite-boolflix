<script>
import { store } from "../store";
import axios from "axios";

export default {
  name: "MainJumbo",
  data(){
    return{
        store
    }
  },
  mounted() {
    /* TIMEOUT 5 SECONDI */
    setTimeout(() => {
      const iframe = document.querySelector('iframe');
      /* INIZIO VIDEO AUTOMATICO CON LA SOSTITUZIONI DEL VALORE DI AUTOPLAY DA 0 A 1 */
      iframe.src = iframe.src.replace('autoplay=0', 'autoplay=1');
    }, 5000);

    /* COLLEGAMENTO ALL'ENDPOINT DEI FILM POPOLARI */
    axios.get(this.store.endpoint_popular)
      .then((response) => {
        this.store.popular_films = response.data.results;

        /* UNA VOLTA ACQUISITA LA LISTA DEI FILM POPOLARI NELL'ENDPOINT PRENDE L'ID DEL PRIMO FILM E LO POSIZIONA NELL'ENDPOINT DEI VIDEO*/
        /* (NELLO STORE L'ENDPOINT E' VUOTO) */
        this.store.endpoint_popular_trailer = `https://api.themoviedb.org/3/movie/${this.store.popular_films[0].id}/videos?api_key=${this.store.apiKey}`;
        return axios.get(this.store.endpoint_popular_trailer);
      })
      .then((response) => {
        /* VIENE POPOLATO L'ARRAY CON I VIDEO DEL FILM PIU' POPOLARE */
        this.store.popular_trailer = response.data.results;
      });

      
  },methods: {
    /* CONTROLLA SE L'ARRAY DEI TRAILER DEL FILM PIU' POPOLARE E' STATO POPOLATO */
    /* SENZA IL CONTROLLO NON TROVEREBBE LA CHIAVE UTILIZZATA PER L'ENDPOINT DEI VIDEO*/
    checkLoad(){
        if(this.store.popular_trailer.length > 0){
            return this.store.popular_trailer[0].key
        }
      }
  }
};
</script>
<template lang="">
  <div class='main_div'>

    <!-- IFRAME PER LA VISUALIZZAZIONE DEL VIDEO YOUTUBE -->
    <!-- IN SRC SE L'ARRAY E' STATO POPOLATO POSIZIONA LA CHIAVE PER LA RICERCA DEL VIDEO -->
    <iframe
      width="640"
      height="360"
      :src="`https://www.youtube.com/embed/${checkLoad()}?si=V1sMMYioPYUYGp-Y&amp;controls=0&amp;autoplay=0&amp;mute=1`"
      title="YouTube video player"
      frameborder="0"
      allowfullscreen
    ></iframe>

    <!-- COVER DEL FILM PIU' POPOLARE -->
    <div class="popular_cover_jumbo">

        <!-- INFORMAZIONI DEL FILM -->
        <!-- CONTROLLA SE E' STATO POPOLATO L'ARRAY -->
        <div class="info_cover" v-if='store.popular_films.length > 0'>
            
            <!-- CONTENITORE PER IL VOTO -->
            <div class="vote_container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ebd234" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <div class="film_vote">{{store.popular_films[0].vote_average}}</div>
            </div>

            <!-- TITOLO -->
            <h1 class="film_title">{{store.popular_films[0].original_title}}</h1>

            <!-- DESCRIZIONE -->
            <p class="film_descr_popular">{{store.popular_films[0].overview}}</p>

            <!-- PULSANTE -->
            <div class="watch_btn">Guarda ora</div>
        </div>

        <!-- IMMAGINE COVER FILM PRESA DAL FILM POPOLARE IN PRIMA POSIZIONE (:SRC [0])-->
        <img v-if='store.popular_films.length > 0' :src="`https://image.tmdb.org/t/p/original${store.popular_films[0].poster_path}`" alt="">
    </div>
    
    <!-- COPERTURA BORDI NERI E COMANDI YOUTUBE -->
    <div class="frame-border">
    </div>
  </div>
</template>
<style lang="scss" scoped>

div {
  width: 100%;

  iframe {
    width: 100%;
    height: 1105px;
    margin-top: -100px;
    position: relative;
    z-index: -2;
  }

  .popular_cover_jumbo{
    height: 820px;
    position: absolute;
    top: 0;
    animation: opacity 20s 7s forwards;
    opacity: 1;

    .info_cover{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 999;
        color: white;
        padding: 200px;

        .vote_container{
            display: flex;
            align-items: center;

            .bi{
                margin-right: 5px;
            }
        }

        .film_title{
            font-size: 60px;
            margin-top: 0px;
        }

        .film_descr_popular{
            margin-top: 50px;
            margin-right: 60%;
            line-height: 2;
        }

        .watch_btn{
            background-color: red;
            width: fit-content;
            font-size: 20px;
            font-weight: 700;
            padding: 13px 20px;
            border-radius: 100px;
            -webkit-box-shadow: 0px 0px 11px 6px rgba(255,0,0,0.4); 
            box-shadow: 0px 0px 11px 6px rgba(255,0,0,0.4);
            margin-top: 100px;
        }
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        
        
        filter: brightness(0.4);
    }

    @keyframes opacity {
        10%{
            opacity: 0;
        }
        90%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
  }

  .frame-border {
    position: absolute;
    background-color: #16151b;
    width: 100%;
    height: 300px;
    z-index: -1;
    bottom: -200px;
  }
}
</style>
 