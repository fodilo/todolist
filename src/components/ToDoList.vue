<template lang="html">

  <section class="to-do-list">
    <v-container grid-list-xs>
      
    <v-list
      flat
      subheader
      three-line
    >
      <v-subheader>Todos</v-subheader>
        <!-- list of todlist -->
      <v-list-item-group
        v-model="todolist"
        multiple
      >
        <template v-for="todo in $store.state.toDos">
                  <v-divider></v-divider>

        <v-list-item >
           <v-list-item-content>
              <v-list-item-title>
                
                {{todo.title}} - <span class="caption"> {{todo.date}}</span></v-list-item-title>
              <v-list-item-subtitle>{{todo.description}}</v-list-item-subtitle>
              
            </v-list-item-content>
            <v-list-item-action>
                <v-switch v-model="todo.done"
     
    ></v-switch>
                    <v-icon v-if="todo.done" color="green">check_circle_outline</v-icon>

                </v-list-item-action>
        </v-list-item>
        </template>
        <v-divider></v-divider>

        

        
      </v-list-item-group>
    </v-list>
    </v-container>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'to-do-list',
    props: ['todolist'],
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
.to-do-list {
}
</style>
