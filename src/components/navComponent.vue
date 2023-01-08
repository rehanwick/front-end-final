<template>
   <nav>
    <div class="nav">
        <div>
            <router-link class="same-as-router-link" to="/">Home</router-link> |
            <router-link class="same-as-router-link" to="/problem">Problem</router-link> |  
            <router-link v-if="isAdmin" class="same-as-router-link" to="/addProblem">Add Problem |</router-link>
        </div>
        <div>
           <span class="same-as-router-link">hi! {{name}}  </span>|
            <router-link class="same-as-router-link" v-if="isAuthenticatede" to="/profile" >Profile</router-link> |
            <router-link class="same-as-router-link" v-if="!isAuthenticatede" to="/login" >log-in</router-link> |
            <span v-if="isAuthenticatede" class="same-as-router-link" @click="logout()"> log-out </span> |
            <router-link  class="same-as-router-link" v-if="!isAuthenticatede" to="/SignUp">SingnUp</router-link> 
        </div>
    </div>    
  </nav>
</template>

<script>
export default {
    name:  'navComponent' , 
    data() {
      return {
            name : this.getname() ,
      }
    } , 
    computed : {
        isAuthenticatede() {
         // console.log(this.$store.state.auth.token);
         // return true 
          return(this.$store.getters.isAuthenticated) ;  
        } ,
        isAdmin() {
          return(this.$store.getters.isAdmin) ; 
        } , 
        getname() {
              return(this.$store.state.auth.email) ; 
        }
    } ,
    created() {
      if(this.$store.getters.isAuthenticated)
      {
        this.name = this.$store.state.auth.email 
      } else {

      }
    } ,
    methods :{
      logout() {
                this.$store.dispatch( 'logout' )
                    .then(() => this.$router.push( '/' ));
            }
    } 
}
</script>

<style scoped >

.nav > * {
  text-decoration-line: none;
}

.nav{
  padding:2px ; 
    display: flex;
    justify-content: space-between;
}
nav {
    margin: 0;
    padding: 10px;
    background-color: #7599bd;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #6242b9;
  }

  .same-as-router-link {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
  }
  .same-as-router-link:hover {
    font-size: 1.02em;
    border-radius: 5px;
    padding: 10px ;
    background-color: rgba(106, 103, 103, 0.466);
  }


</style>