<template lang="html">

  <section class="home">
 
          <v-container grid-list-xs>
            
              <v-row>
          <v-btn
            class=""
        color="success"
        @click="showToDoDialog"
          >
          Add To do
          </v-btn>              </v-row>


         </v-container>



      <v-dialog
        v-model="toDoDialog"
        scrollable  
        :overlay="false"
        max-width="500px"
        transition="dialog-transition"
      >
        <v-card>
          <v-card-title primary-title>
            Add To Do
          </v-card-title>
          <v-card-text>
            <!-- Title of to do -->
            <v-form ref="addForm" v-model="valid">
              
            <v-text-field
            solo
        v-model="currentToDo.title"
        :rules="nameRules"
        label="Title"
        required
      ></v-text-field>

      <!-- Description of TodO -->
      <v-textarea
      solo
          v-model="currentToDo.description"
          name="input-7-1"
          label="Description"
          
        ></v-textarea>

      <!-- Date Picker -->
        <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="currentToDo.date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
          solo
            v-model="currentToDo.date"
            label="Picker in menu"
            prepend-icon="event"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="currentToDo.date" no-title scrollable>
          <div class="flex-grow-1"></div>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(currentToDo.date)">OK</v-btn>
        </v-date-picker>

      </v-menu>
                          </v-form>

          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="handleOnClickAddToDo">Add</v-btn>
          </v-card-actions>
        
        </v-card>
      </v-dialog>
        
  </section>

</template>

<script lang="js">
  export default  {
    name: 'ToDoAdd',
    props: [],
    mounted() {

    },
    data() {
      return {
        toDoDialog:false, // dailog variable
        nameRules: [ // rules to set to name
        v => !!v || 'Name is required',
      ],
      menu:false,
      currentToDo:{
        "title":null,
        "description":null,
        "date":null
      },
      valid:true,
     
      }
    },
    methods: {
      addToDo(){
        // add to do to the store
            this.$store.dispatch('ADD_TODO',Object.assign({}, this.currentToDo))

      },
      showToDoDialog(){
        this.toDoDialog=true;
      },
      handleOnClickAddToDo(){ // add to do if the form is validate
        if(this.$refs.addForm.validate()){
          this.addToDo()
        }
      }
      
    },
    computed: {

    }
}
</script>

<style scoped >
  .home {

  }
</style>
