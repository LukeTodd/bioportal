<template>

  <div class="login">
    <div class="row">
      <div class="col-2 bg-red login">

      </div>
      <div class="col-10">
        <div class="row">
          <h1 class="col-12 login-header">BioPortal</h1>
        </div>
        <div class="row">
          <div class="col-4 offset-4 d-flex justify-content-center ">
            <form class="coolForm" v-if="loginForm" @submit.prevent="loginUser">
              <input class="form-control bg-transparent text-dark form-border" type="email" v-model="creds.email"
                placeholder="Email">
              <input class="form-control bg-transparent text-dark form-border" type="password" v-model="creds.password"
                placeholder="Password">
              <button class="btn btn-lg btn-block btn-secondary btn-bio" type="submit">Login</button>
            </form>
            <form class="coolForm" v-else @submit.prevent="register">
              <input class="form-control bg-transparent text-dark" type="text" v-model="newUser.name"
                placeholder="name">
              <input class="form-control bg-transparent text-dark" type="email" v-model="newUser.email"
                placeholder="email">
              <input class="form-control bg-transparent text-dark" type="password" v-model="newUser.password"
                placeholder="password">
              <button class="btn btn-secondary" type="submit">Create Account</button>
            </form>
          </div>
          <div class="action col-12" @click="loginForm = !loginForm">
            <!-- <p class="formstuff" v-if="loginForm">No account? Click here to Register</p>
            <p class="formstuff" v-else>Already have an account? Click here to Login</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  import router from '@/router.js'
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style scoped>
  .login {
    height: 100vh;
  }

  .login-header {
    font-family: 'Syncopate', sans-serif;
    font-size: 100px;
    margin-top: 250px;
  }

  .bg-red {
    background-color: rgb(199, 19, 19);
  }

  .btn-bio {
    border-radius: 20px;
    background-color: rgb(199, 19, 19);
    border: none;
  }

  .btn-bio:hover {
    background-color: #810c0c
  }

  .form-border {
    border: none;
    border-bottom: solid 1px black;
    border-radius: 0px;
    margin-bottom: 10px;
  }

  .form-border:focus {
    box-shadow: none;
    border-bottom: solid 1px black;
  }

  .action {
    cursor: pointer;
    color: white;
    text-shadow: -1px -1px black;
  }


  .full {
    margin-left: -15px;
    margin-right: -15px;
  }

  .oneBar {
    background-color: black;
    height: 30vh;
  }







  .coolForm {
    margin-top: 100px;
    width: 244px;
    text-align: center;
    /* margin-left: 815px; */
  }



  .titleh2 {
    color: white;
    margin-top: 20px;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
  }

  .formstuff {
    color: white;
    margin-top: 10px;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    text-shadow: 2px 2px black;
  }

  .explanation {
    text-align: center;
    margin-top: 15px;
  }

  .prettyList {
    text-align: left;
    margin-top: 30px;
    font-size: 19px;
    margin-left: 770px;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
  }

  @media only screen and (max-width: 450px) {
    .prettyList {
      text-align: left;
      margin-left: 38px;
      margin-top: 30px;
      font-size: 19px;
      margin-left: 20px;
      font-size: 22px;
      font-family: 'Montserrat', sans-serif;
    }
  }
</style>