<template lang="html">

  <section class="to-do-list">
    <v-container grid-list-xs>
            
    <v-list
      
      subheader
      three-line
    >
      <v-subheader>Todos</v-subheader>
        <!-- list of todlist -->
      
     

      

          <template  v-for="(todo,index) in todos">
        <v-list-item  :key="todo.id">
           <v-list-item-content>
              <v-list-item-title>
                
                {{todo.title}} - <span class="caption"> {{todo.date}}</span></v-list-item-title>
              <v-list-item-subtitle>{{todo.description}}</v-list-item-subtitle>
              
            </v-list-item-content>
            <v-list-item-action>
                <v-switch v-model="todo.done"
     
    ></v-switch>
                    <v-icon v-if="todo.done" color="green">check_circle_outline</v-icon>
<v-btn icon color="success" @click="madeUp(todo.id)">                    <v-icon  color="gray">keyboard_arrow_up</v-icon>
</v-btn>
<v-btn icon color="success" @click="madeDown(todo.id)">                    <v-icon  color="gray">keyboard_arrow_down</v-icon>
</v-btn>                    </v-list-item-action>
        </v-list-item>
          </template>

        <v-divider></v-divider>
      
    </v-list>
    </v-container>
  </section>

</template>

<script lang="js">
  import draggable from 'vuedraggable'

export default  {
    name: 'to-do-list',
    components:{},
    props: ['todolist'],
    mounted() {

    },
    data() {
      return {
        items: [
        {
          id: 1,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/1.jpg",
          title: "Brunch this life?",
          subtitle: "Subtitle 1"
        },
        {
          id: 2,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/2.jpg",
          title: "Winter Lunch",
          subtitle: "Subtitle 2"
        },
        {
          id: 3,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/3.jpg",
          title: "Oui oui",
          subtitle: "Subtitle 3"
        }
      ],
      items2: [
        {
          id: 4,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/4.jpg",
          title: "Brunch this weekend?",
          subtitle: "Subtitle 4"
        },
        {
          id: 5,
          avatar: "https://s3.amazonaws.com/vuetify-docs/images/lists/5.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: "Subtitle 5"
        }
      ]
      }
    },
    methods: {
      madeUp(id){
        this.todos

      }
    },
    computed: {
      todos(){
        return this.$store.state.toDos
      }
    }
}
</script>

<style scoped >
.to-do-list {
}
</style>
