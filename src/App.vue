<template>
  <v-app>
    <v-container>
    <v-row>

      <v-col md="4"
        offset-md="4" >
       <span class="display-3">To DO APP</span> 
        </v-col>
        </v-row>
   <router-view></router-view>
   </v-container>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
