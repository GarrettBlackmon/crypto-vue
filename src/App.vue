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
                  <p id="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </v-card-title>
                
                <div id="midtext">
                    <p>Select two currencies and enter the amount you would like to see converted...</p>
                </div>

                <v-layout row justify-center>
                <v-flex xs2>
                  <v-text-field
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
                    class="vselect"
                    :items="fiats"
                    value="USD"
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

                <v-flex xs1 class="text-xs-center">
                  <v-icon style="margin-top: 10px" x-large>compare_arrows</v-icon>
                </v-flex>


                <v-flex xs2>
                  <v-text-field
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
                    class="vselect"
                    :items="cryptos"
                    value="BTC"
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

              <div id="resulttext">
                <p>1 Naira = 00001BTC</p>
              </div>
            </v-card>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

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

      cryptos: ['BTC', 'ETH', 'XRP'],
      fiats: ['USD', 'EUR', 'PES']
    }
  }
}
</script>

<style>
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
