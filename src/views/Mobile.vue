<template>
  <v-app id="inspire" style="background: #FFF6DB">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile href="http://garrettblackmon.com/">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blog</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile href="https://github.com/GarrettBlackmon/crypto-vue">
          <v-list-tile-action>
            <v-icon>code</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>GitHub</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="#E6A122" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Currency Converter</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-flex text-xs-center>
            
            

            <v-card
            class="elevation-20"
            width="100%"
            height="500px">

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
                <v-flex xs5>
                  <v-text-field
                    v-model="input1"
                    type="number"
                    class="vtext"
                    solo
                    label="Enter amount"
                    height="60px"
                    hide-details
                    flat
                  ></v-text-field>
                </v-flex>

                <v-flex xs2>
                  <v-select
                    v-model="selectedFiat"
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
                  ></v-select>
                </v-flex>
                </v-layout>

                <v-layout row justify-center>
                <v-flex xs1 class="text-xs-center">
                  <v-icon style="margin-top: 10px" x-large>swap_vert</v-icon>
                </v-flex>
                </v-layout>

                <v-layout row justify-center>

                <v-flex xs5>
                  <v-text-field
                    v-model="input2"
                    type="number"
                    class="vtext"
                    solo
                    label="Enter amount"
                    height="60px"
                    flat
                    hide-details
                  ></v-text-field>
                </v-flex>

                <v-flex xs2>
                  <v-select
                    v-model="selectedCrypto"
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

              <div id="resulttext" v-if="val1 && val2">
                <p>{{val1}} {{selectedFiat}} = {{val2}} {{selectedCrypto}}</p>
              </div>
            </v-card>

            


          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="#E6A122" app>
      <span class="white--text">Garrett Blackmon &copy; 2017</span>
    </v-footer>
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
      drawer: null,
      //end of vuetify data
      cryptoRates: [],
      errors: [],
      selectedFiat: "USD",
      selectedCrypto: "BTC",
      val1: null,
      val2: null
    }
  },

  methods: {
    
  },

  computed: {
    ...mapState([
      'cryptos',
      'fiats'
    ]),
    input1: {
      get () {
        return this.val1
      },
      set (val) {
        if(val) {
        this.val1 = val
        this.val2 = (val / this.cryptoRates[this.selectedCrypto][this.selectedFiat]).toFixed(5) // divide to set val2
        }else{
          this.val2 = null
        }
      }
    },
    input2: {
      get () {
        return this.val2
      },
      set (val) {
        if(val) {
        this.val2 = val
        this.val1 = (val * this.cryptoRates[this.selectedCrypto][this.selectedFiat]).toFixed(2) // multiply to set val1
        }else{
          this.val1 = null
        }
      }
    },
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

<style>

  html {
    overflow-y: auto;
  }

  #titletext {
    width: 100%;
  }

  .headline {
    font-weight: bold;
    color: #2C3134;
  }

  #subtext {
    color: rgba(44, 49, 52, 0.5);
  }

  #midtext {
    margin: 20px 0px 40px 0px;
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
    margin-top: 40px;
    text-align: center;
    width: 100%;
    color: rgba(44, 49, 52, 0.5);
  }
</style>