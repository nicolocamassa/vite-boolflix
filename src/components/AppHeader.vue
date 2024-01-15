<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data(){
        return{
            store,
        }
    },
    methods: {
        /* Quando il pulsante è cliccato */

    },
};
</script>
<template lang="">
  <header>
    <div class="img-container">
        <img src="../assets/page-logo.png" alt="Main Logo">
    </div>
    
    <div class="search-container">
        <!-- Barra di ricerca del film -->
        <input type="text" name="searchBar" id="searchBar" v-model="store.search" class="input-text">
        <!-- Pulsante per la conferma -->
        <div class="button-container">
            <input type="button"  @click="$emit('searchedFilm')" class="input-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ff000032" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </div>
    </div>
    

  </header>
</template>
<style lang="scss" scoped>
    header{
        width: 100%;
        height: 100px;
        background-color: black;
        display: flex;
        align-items: center;
        padding: 10px 50px;
        justify-content: space-between;
        position: fixed;
        top: 0;
        z-index: 1;

        .img-container{
            height: 100%;

            img{
                width: 80%;
            }
        }

        .search-container{
            display: flex;
            .input-text{
                padding: 10px;
                border-radius: 10px;
                border: solid rgb(53, 53, 53) 1px;
                background-color: transparent;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
                font-family: 'Inter';
                margin-right: 10px;
            }
    
            .input-text:focus{
                outline: none;
                border: 1px solid #ff000032;
            }

            
            .button-container{
                position: relative;
                .input-button{
                    background-color: transparent;
                    height: 40px;
                    width: 40px;
                    border-radius: 10px;
                    border: solid 1px rgb(53, 53, 53);

                    &:hover{
                        cursor: pointer;
                    }
                }

                

                svg{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: -1;
                }

            }


        }
        
    }
</style>
