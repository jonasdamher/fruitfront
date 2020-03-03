<template>
  <div class="Card">
    <div class="Card-body">
      <p class="text-card">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.Card {
  margin-bottom: .4rem;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px #1313132d;
}

.Card .Card-body {
 padding: .5rem 1rem;
}

.card-body .text-card {
  font-weight: bold;
}

</style>
