<template lang="html">

  <section class="src-components-sign-in">
    <v-container grid-list-md>
     

      <v-row>
      <v-col md="4"
        offset-md="4">

        <v-card class="p-3">
           <v-card-title>
             <!-- Title -->
      <div>Sign In</div>
      
    </v-card-title>
      <v-form class="px-3 py-3">
        <span class="red--text caption">Please Enter your Email to sign in</span>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-btn
      class="mt-3"
        color="success"
        @click="signIn"
      >
       Sign in
      </v-btn>
      <v-btn
      class="mt-3 ml-5"
        color="success"
        @click="logIn"
      >
       Sign in
      </v-btn>

      </v-form>

        </v-card>

      </v-col>
    </v-row>
    </v-container>


  </section>

</template>

<script lang="js">

  export default  {
    name: 'SignIn',
    props: [],
    mounted() {

    },
    data() {
      return {
        email:'',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]
      }
    },
    methods: {
      // sign method
      signIn(){
        if(this.validate()){
          axios.post('/signup',{"email":email})
          .then()
          .catch(resp=>{

          })
        }
      },
      // login method
      logIn(){
        if(this.validate()){
          axios.post('/login',{"email":email})
          .then()
          .catch(resp=>{

          })
        }
      },
       validate () {
        if (this.$refs.form.validate()) {
        return true;
        }
      }
    },
    computed: {

    }
}
</script>

<style scoped >
  .src-components-sign-in {

  }
</style>
