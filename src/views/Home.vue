<template>
  <div class="home">
    <img alt="Vue logo" height="" src="../assets/logo.png"><br><br>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
        <b-button variant="primary"  @click="store()">Click Here</b-button><br><br>
        <h1>Count : {{counter}} </h1><br>
        <h1>Count from store : {{getCounterValueFromStore}} </h1><br>
        <b-button variant="info"  @click="ResetCount()">Reset Count</b-button><br>
    </div>
      

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      counter: 0
    }
  },
  computed:{
    getCounterValueFromStore(){
      return this.$store.getters['getCounterValue'];
    }
  },
  created(){
    this.counter = this.$store.state.GlobleCounter
  },
  methods:{
    store(){
      this.counter++
      this.$store.commit('ADD_COUNTER',this.counter)
    },
  ResetCount(){
    this.counter = 0
    // this.$store.commit('ADD_COUNTER',this.counter)
  },
  },
  
};
</script>
