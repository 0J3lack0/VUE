<script setup>
const vRainbow = {
  mounted: (el) => (el.style.color = '#' + Math.random().toString().slice(2, 8)),
}
</script>
<template>
  <header-weather> </header-weather>
  <div class="main">
    <div class="dashboard">
      <div class="search">
        <input
          style="width: 500px"
          @input="printInputChars"
          type="text"
          v-model="keyword"
          placeholder="Please write a City name!"
        />
        <button color="primary" v-on:click="requestWeatherApi(cityLat, cityLon)">Search</button>
        <!-- <button color="success">Add Favorite</button> -->
      </div>
      <div class="dropdown-content">
        <div class="dropdown-item" v-show="dropDown" v-for="city in citiesData" :key="city.id">
          <div v-on:click="setCityName(city)">
            <p v-rainbow>{{ city.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dashboard" v-show="!cardHidden">
    <h2 class="title-weather">Weather Status for {{ keyword }}</h2>
    <div class="dashboard2">
      <img
        class="icon"
        :src="`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`"
        alt="Weather Icon"
      />
      <div class="description">
        {{ weatherDescription }}
      </div>
    </div>
    <div>
      <hr />
      <div class="temp">
        Temperature : {{ weatherTemp }}&deg;C
        <hr />
      </div>
    </div>
    <div>
      <div class="humidity">
        Humidity
        {{ weatherHumidity }}%
        <hr />
        <button v-on:click="addFavorite">Add Favorite</button>
      </div>
    </div>
  </div>
  <div class="dashboard" v-if="favoriteCities.length > 0">
    <h3 style="text-align: center">Favorite Cities</h3>
    <div v-for="(city, index) in favoriteCities" :key="index">
      <div class="favorites-cities" v-on:click="getFavoriteCities(city.lat, city.lon, city.name)">
        {{ city.name }}
      </div>
    </div>
    <!-- <ul>
      <li v-for="(city, index) in favoriteCities" :key="index">
        {{ city.name }} ({{ city.lat }}, {{ city.lon }})
      </li>
    </ul> -->
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './HeaderWeather.vue'
import axios from 'axios'
export default {
  components: {
    'header-weather': Header,
  },
  data() {
    return {
      keyword: '',
      citiesData: null,
      cityLat: '',
      cityLon: '',
      BASE_URL: 'http://localhost/get_city.php',
      dropDown: true,
      errorSearch: false,
      weatherApiKey: '084fedb2ab5c8369b3a030eff24e4e74',
      weatherApiUrl: 'https://api.openweathermap.org/data/2.5/weather?',
      cardHidden: true,
      weatherTemp: '',
      weatherHumidity: '',
      weatherIcon: '',
      weatherDescription: '',
      favoriteCities: [],
    }
  },
  created() {
    // Sayfa yüklendiğinde, localStorage'dan favori şehirleri alıyoruz
    const storedCities = localStorage.getItem('favoriteCities')
    if (storedCities) {
      // Eğer favori şehirler varsa, onları JSON formatından çözümlüyoruz
      this.favoriteCities = JSON.parse(storedCities)
    }
  },
  methods: {
    upperCase: function (title) {
      return title.toUpperCase()
    },

    async printInputChars() {
      if (this.keyword.length >= 3) {
        this.dropDown = true
        try {
          const response = await axios.post(
            this.BASE_URL, // BASE_URL yerine gerçek URL
            { city_name: this.keyword }, // charValue yerine this.keyword kullanılmalı
            {
              headers: {
                'Content-Type': 'application/json; charset=UTF-8',
              },
            },
          )
          if (response.data.message === 'No city found with name') {
            this.citiesData = [{ id: 9999999, name: 'No city found with name' }]
          } else {
            this.citiesData = response.data.cities
            console.log('citiesData: ', this.citiesData)
          }
        } catch (error) {
          console.error('Error data:', error)
        }
      } else {
        this.citiesData = null
      }
    },
    async requestWeatherApi(lat, lon) {
      if (this.keyword.length === 0) {
        alert('Şehir ismi boş olamaz!')
      } else if (lat.length === 0 || lon.length === 0) {
        alert('Lütfen listeden şehri seçiniz!')
      } else if (lat.length !== 0 && lon.length !== 0) {
        console.log('request atıyorum')
        try {
          const response = await axios.get(
            `${this.weatherApiUrl}lat=${lat}&lon=${lon}&units=metric&appid=${this.weatherApiKey}`,
          )
          console.log('weather data: ', response)
          this.cardHidden = false
          this.weatherTemp = response.data.main.temp
          this.weatherHumidity = response.data.main.humidity
          this.weatherIcon = response.data.weather[0].icon
          this.weatherDescription = response.data.weather[0].description.replace(/\b\w/g, (char) =>
            char.toUpperCase(),
          )
          console.log(
            'cardHidden: ',
            this.cardHidden,
            'temp: ',
            this.weatherTemp,
            'Humidity: ',
            this.weatherHumidity,
            'Icon: ',
            this.weatherIcon,
            'description: ',
            this.weatherDescription,
          )
        } catch (error) {
          console.error('Error data:', error)
        }
      } else {
        console.log('hata!')
      }
    },
    setCityName: function (city) {
      this.dropDown = false
      this.selectedCity = city.name
      this.keyword = city.name
      this.cityLat = city.lat
      this.cityLon = city.lon
      console.log('Selected city:', city.name)
      console.log('City Latitude:', city.lat) // Enlem
      console.log('City Longitude:', city.lon) // Boylam
    },
    addFavorite() {
      // Örnek şehir verisi (bu veriler API'den veya dışarıdan alınabilir)
      const city = {
        name: this.selectedCity,
        lat: this.cityLat,
        lon: this.cityLon,
      }

      // Yeni şehir bilgilerini favoriteCities listesine ekliyoruz
      this.favoriteCities.push(city)

      // Yeni favori şehirleri localStorage'a kaydediyoruz
      localStorage.setItem('favoriteCities', JSON.stringify(this.favoriteCities))
    },
    getFavoriteCities(lat, lon, name) {
      this.keyword = name
      this.requestWeatherApi(lat, lon)
    },
  },

  computed: {
    upperCaseComputed() {
      return (title) => title.toUpperCase()
    },
    filteredBlogs() {
      return this.blogs.filter((blog) => blog.title.match(this.keyword))
    },
    // printInputChars() {
    //   console.log(this.keyword);
    // },
  },
}
</script>

<style scoped>
.main {
  /* backgroundImage: backgroundImage; */
  background-size: 'cover, contain';
  background-position: 'center, center';
  height: '100vh';
  display: 'flex';
  flex-direction: 'column';
}

.dashboard {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff79;
}

.dashboard2 {
  /* Flexbox kullanarak içeriği yatay ve dikey merkezle */
  display: flex;
  flex-direction: column; /* Dikey düzen */
  align-items: center; /* Yatayda merkezleme */
  justify-content: center; /* Dikeyde merkezleme */
  text-align: center; /* Yazıların merkezlenmesi */
}

.search {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.dropdown-content {
  position: absolute;
  background-color: #ffffffde;
  border: 1px solid #f8f8f800;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  width: 500px;
  max-height: 300px;
  overflow-y: auto;
  transition: all 0.3s ease;
  text-align: center;
}

.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.9s;
  background-color: #fcf8f8ea;
}

.dropdown-item:hover {
  background-color: #ebd4d4;
}

.title-weather {
  text-align: center;
}
.dashboard .icon {
  max-width: 100px;
  height: auto;
  margin-bottom: 15px;
}
.description {
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
}

.temp {
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
}

.humidity {
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
}

.favorites-cities {
  border: 1px solid #f8f8f800;
  border-radius: 4px;
  background-color: #6aa1d452;
  max-width: 150px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  margin: 5px auto;
}

.favorites-cities:hover {
  background-color: #1d6ebb;
}
</style>
