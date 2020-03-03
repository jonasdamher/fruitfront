<template>
  <div id="app">

    <h1 class="h1 pd-b-1">FRUITS</h1>
    
    <div class="card-group">
      <Card v-for="fruit in fruits" :key="fruit.id" v-bind:title="fruit.name"></Card>
    </div>
    
  </div>
</template>

<script>

import Card from './components/Card.vue'
import axios from "./helper/axios";

export default {
  name: 'App',
  components: {
    Card
  },
  data() {
    return {
      fruits: [],
      error: null
    };
  },
  methods: {
    allFruits() {
      axios.getAllFruits().then(res => {
          this.fruits = res.data;
          console.log(this.fruits);
        })
        .catch(err => {
          this.fruits = [];
          this.err = err;
        });
    }
  },
  created() {
    this.allFruits();
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #fff8ee;
}

#app {
  font-family: Roboto, Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card-group {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}

.h1 {
  font-size: 24px;
}

.pd-b-1 {
  padding-bottom: .5rem;
}

</style>
