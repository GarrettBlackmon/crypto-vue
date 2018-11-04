<template>
  <v-app style="background: #FFF6DB">
    <v-content >
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-card
            
            class="elevation-20"
            height="650px"
            width="1040px">

              <v-card-title primary-title>
                <div id="titletext">
                  <h3 class="headline">Global Currency Converter</h3>
                  <p id="subtext">Convert Fiat Currency to Crypto Currency and vise-versa.</p>
                </div>
              </v-card-title>
                
                <div id="midtext">
                    <p>Select two currencies and enter the amount you would like to see converted...</p>
                </div>

                <v-layout row justify-center>
                <v-flex xs2>
                  <v-text-field
                    v-model.number="value1"
                    @input="update2"
                    type="number"
                    class="vtext"
                    solo
                    label="Enter amount"
                    height="60px"
                    hide-details
                    flat
                  ></v-text-field>
                </v-flex>

                <v-flex xs1>
                  <v-select
                    v-model="selectedFiat"
                    @change="update2"
                    class="vselect"
                    :items="fiats"
                    height="62px"
                    solo
                    background-color="#FFF6DB"
                    prepend-inner-icon="attach_money"
                    flat
                    color="E6A122"
                    hide-details
                    append-icon=""
                  >
                  
                  

                  
                  
                  </v-select>
                </v-flex>

                <v-flex xs1 class="text-xs-center">
                  <v-icon style="margin-top: 10px" x-large>compare_arrows</v-icon>
                </v-flex>


                <v-flex xs2>
                  <v-text-field
                    v-model.number="value2"
                    @input="update1"
                    type="number"
                    class="vtext"
                    solo
                    label="Enter amount"
                    height="60px"
                    flat
                    hide-details
                  ></v-text-field>
                </v-flex>

                <v-flex xs1>
                  <v-select
                    v-model="selectedCrypto"
                    @change="update1"
                    class="vselect"
                    :items="cryptos"
                    height="62px"
                    solo
                    background-color="#FFF6DB"
                    prepend-inner-icon="attach_money"
                    flat
                    hide-details
                    append-icon=""
                    color="#E6A122"
                    item-avatar="attach_money"
                  ></v-select>
                </v-flex>
              </v-layout>

              <div v-if="value1 && value2" id="resulttext">
                <p>{{value1}} {{selectedFiat}} = {{value2}} {{selectedCrypto}}</p>
              </div>
            </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      //end of vuetify data
      cryptoRates: [],
      errors: [],
      selectedFiat: "USD",
      selectedCrypto: "BTC",
      value1: null,
      value2: null,
      
    }
  },

  methods: {
    update1() {
      if(this.value2){
        this.value1 = (this.value2 * this.cryptoRates[this.selectedCrypto][this.selectedFiat]).toFixed(2)
      }else{
        this.value1 = null
      }
    },
    update2() {
      if(this.value1){
          this.value2 = (this.value1 / this.cryptoRates[this.selectedCrypto][this.selectedFiat]).toFixed(5)
        }else{
          this.value2 = null
        }
    }
  },

  computed: {
    ...mapState([
      'cryptos',
      'fiats'
    ]),
  },

  created () {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=' + this.cryptos.join(",") + '&tsyms=' + this.fiats.join(","))
      .then(response => {
        this.cryptoRates = response.data
        console.log(this.cryptoRates)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style scoped>
  html {
    overflow-y: auto;
  }

  #titletext {
    margin-left: 60px;
  }

  .headline {
    font-weight: bold;
    color: #2C3134;
  }

  #subtext {
    color: rgba(44, 49, 52, 0.5);
  }

  #midtext {
    margin: 107px 0px 64px 0px;
    text-align: center;
    width: 100%;
  }

  .vtext {
    border: 1px solid rgba(44, 49, 52, 0.25);
    border-right: 0;
    border-radius: 2px 0px 0px 2px;
    box-shadow: 10px 15px 15px rgba(0, 0, 0, 0.1);
  }
  input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

  .vselect {
    box-shadow: 10px 15px 15px rgba(0, 0, 0, 0.1);

  }
  .theme--light.v-text-field--solo .v-input__slot {
    border-radius: 0px 2px 2px 0px;
  }

  .theme--light.v-select .v-select__selections {
    color: #E6A122;
  }

  .v-input__slot .theme--light.v-icon {
    color: #E6A122;
  }

  #resulttext {
    margin-top: 20px;
    text-align: center;
    width: 100%;
    color: rgba(44, 49, 52, 0.5);
  }


</style>
