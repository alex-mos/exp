<template>
  <div class="message">
    <div class="message-header">
      <p><i class="fas fa-star"></i> Топ 10 криптовалют</p>
    </div>

    <div class="message-body">
      <table class="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Market Cap</th>
          <th>Price</th>
          <th>Available Supply</th>
          <th>24 Hour Volume</th>
          <th>24hr</th>
          <th>Trade</th>
        </tr>
        </thead>
        <tbody>
        <tr @click="toggleNextRow(1)">
          <td>1</td>
          <td>Bitcoin BTC</td>
          <td>$235&nbsp;104&nbsp;032&nbsp;550</td>
          <td>$8&nbsp;802,66</td>
          <td>16&nbsp;909&nbsp;037&nbsp;BTC</td>
          <td>16&nbsp;909&nbsp;037&nbsp;BTC</td>
          <td>-6.75%</td>
          <td>Buy / Sell</td>
        </tr>

        <transition name="slide">
          <tr v-if="activeRow === 1">
            <td colspan="8" class="currency-info">
              <div class="columns">
                <div class="column is-7">
                  <highstock :options="stockOptions" ref="highcharts"></highstock>
                </div>
                <div class="column is-5">
                  <CurrencyTableExchanges />

                  <CurrencyTableCourse />
                </div>
              </div>
            </td>
          </tr>
        </transition>

        <tr @click="toggleNextRow(2)">
          <td>2</td>
          <td>Etherium</td>
          <td>$66 032 550</td>
          <td>$8 802,66</td>
          <td>16 909 037 BTC</td>
          <td>16 909 037 BTC</td>
          <td>-6.75%</td>
          <td>Buy / Sell</td>
        </tr>

        <transition name="slide">
          <tr v-if="activeRow === 2">
            <td colspan="8" class="currency-info">
              <highstock :options="stockOptions"></highstock>
            </td>
          </tr>
        </transition>
        </tbody>
      </table>
    </div>

    <div class="message-footer">
      <a class="message-footer-more">
        Смотреть все <i class="fas fa-chevron-right"></i>
      </a>
    </div>
  </div>
</template>

<script>
import CurrencyTableExchanges from './CurrencyTableExchanges'
import CurrencyTableCourse from './CurrencyTableCourse'

export default {
  name: 'CurrencyTable',

  components: {
    CurrencyTableExchanges,
    CurrencyTableCourse
  },

  data: () => ({
    activeRow: 1,

    stockOptions: {
      chart: {
        backgroundColor: 'transparent',

        title: {
          text: 'Bitcoin Stock Price'
        }
      },

      rangeSelector: {
        selected: 1
      },

      series: [{
        name: 'BTC',
        data: [], // put data here
        tooltip: {
          valueDecimals: 2
        }
      }]
    }
  }),

  methods: {
    // Expand or collapse table row
    toggleNextRow (id) {
      this.activeRow = this.activeRow === id ? null : id
    },
    // Convert data from socket to highStock format
    currencyJSONtoArray (rawData) {
      let dataObject = JSON.parse(rawData)
      return [dataObject.dt, dataObject.price]
    }
  },

  mounted () {
    const { chart } = this.$refs.highcharts

    let lastPointOfTick
    let chartData = []

    this.$socket.onopen = () => {
      console.log("Connection established")
      this.$socket.send('{"type":"subscribe","symbol":"ETHUSD","source":1}')
    };

    this.$socket.onclose = function(event) {
      if (event.wasClean) {
        console.log('Connection closed clean')
      } else {
        console.log('Connect interrupted')
      }
      console.log('Code: ' + event.code + ' reason: ' + event.reason)
    };

    this.$socket.onmessage = (event) => {
      if (event.data !== '[]') {
        console.log("Data received: " + event.data)
        lastPointOfTick = this.currencyJSONtoArray(event.data)
      }
    };

    setInterval(() => {
      chartData.push(lastPointOfTick)

      chart.update({
        series: {
          data: chartData
        }
      })
    }, 1000)


    this.$socket.onerror = function(error) {
      console.log("Error: " + error.message)
    };
  }
}
</script>

<style lang="stylus" scoped>
  .message
    &-body
      padding 0

  .table
    font-size 12px

    .currency-info
      padding 0
      background-color #f6fafd
      box-shadow-top inset 0 10px 10px #000000

    th
      padding 2em .75em
      vertical-align middle
      font-weight bold
      background-color #f6fafd

    td
      padding 1em .75em
      vertical-align middle

  .exchanges,
  .course
    &.table
      background-color transparent
</style>
