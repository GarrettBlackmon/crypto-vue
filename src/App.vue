<template>
  <v-app style="background: #FFF6DB">
    <v-content >
      <v-container fluid fill-height>
        <v-layout align-center>
          <v-flex xs12 sm6 offset-sm3>
            <v-card
            class="elevation-20"
            height="650px"
            width="1040px">

              <v-card-title primary-title>
                <div id="titletext">
                  <h3 class="headline mb-0">Global Currency Converter</h3>
                  <p id="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </v-card-title>
                
                <div id="midtext">
                    <p>Select two currencies and enter the amount you would like to see converted...</p>
                </div>

                <v-layout row justify-center>
                <v-flex xs2>
                  <v-text-field
                    solo
                    label="Enter amount"
                    height="60px"
                    hide-details
                    flat
                    class="elevation-6"
                  ></v-text-field>
                </v-flex>

                <v-flex xs2>
                  <v-select
                    :items="fiats"
                    value="USD"
                    height="60px"
                    solo
                    background-color="#FFF6DB"
                    prepend-inner-icon="attach_money"
                    flat
                    class="elevation-6"
                    hide-details
                  ></v-select>
                </v-flex>

                <v-flex xs1 class="text-xs-center">
                  <v-icon style="margin-top: 10px" x-large>compare_arrows</v-icon>
                </v-flex>


                <v-flex xs2>
                  <v-text-field
                    solo
                    label="Enter amount"
                    height="60px"
                    flat
                    hide-details
                    class="elevation-6"
                  ></v-text-field>
                </v-flex>

                <v-flex xs2>
                  <v-select
                    :items="cryptos"
                    value="BTC"
                    height="60px"
                    solo
                    background-color="#FFF6DB"
                    prepend-inner-icon="attach_money"
                    flat
                    hide-details
                    class="elevation-6"
                  ></v-select>
                </v-flex>
              </v-layout>

              <div id="resulttext">
                <p>1 Naira = 00001BTC</p>
              </div>
            </v-card>
          </v-flex>
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
  #titletext {
    margin-left: 60px;
  }

  #subtext {
    color: rgba(44, 49, 52, 0.5);
  }

  #midtext {
    margin: 107px 0px 64px 0px;
    text-align: center;
    width: 100%;
  }

  #resulttext {
    margin-top: 20px;
    text-align: center;
    width: 100%;
    color: rgba(44, 49, 52, 0.5);
  }
</style>
