<template lang="html">

  <section class="home">
    <ToDoAdd/>
    <ToDoList />
  </section>

</template>

<script lang="js">
import ToDoAdd from './ToDoAdd'
import ToDoList from './ToDoList'

  export default  {
    name: 'Home',
    components:{ToDoAdd,ToDoList},
    props: [],
    mounted() {

    },
    data() {
      return {
        
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped >
  .home {

  }
</style>
