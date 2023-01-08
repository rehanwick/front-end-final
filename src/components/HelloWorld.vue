<template>
  <div>
      <div class="body">
          <!-- <h1>{{msg}}</h1> -->
          <div class="flex">
              <div class="home-head" >
                <h1 class="heading">Skills speak louder than words</h1>
                <router-link to="/login" class="btn btn-primary get-started" >Get started</router-link> 
                <p class="quotes"> “Experience is the name everyone gives to their mistakes.” </p> 
              </div>
    
              <div>
                <table class="table table-hover">
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                  <tbody>
                    <tr v-for="Users in Users" :key="Users._id" >
                      <td>
                          {{Users.name}}
                      </td>
                      <td>
                          {{ Users.total }}
                      </td>
                  </tr> 
                  </tbody>
                </table>
              </div>
          </div>
        <div class="down">
          <img class ="img" src="./static/homeui.jpg" alt="UI">
        </div>
      </div>
  </div>
</template>

<script>
import {fetchUsers} from '../services/getUser' ;
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  } , 
  data() {
    return {
      Users : []
    }
  },
  methods:{

  }, 
  created() {
    fetchUsers()
      .then(Users=> { this.Users = Users.data ; } )
      .catch(error => console.log(error))  
  }
}


</script>



<style scoped>

.down{
  text-align: center;
}
.img{
  width: 78%;
}
.get-started{
  background-color: #7599BD;
  font-weight: bold;
  margin : 15px;
}
.home-head{
  text-align: center;
}
.quotes{
  font-size: 1.5em;
  text-align: center;
}
.heading{
  text-align: center;
  font-size: 6em;
}
.table {
  border: 1px solid rgba(75, 75, 75, 0.216);
  width: auto;
  height: auto;
}

 tr {
   height: auto;
}
.flex{
  display: flex;
  justify-content: space-between;
}

.body {
  margin: 4em;
}
 
</style>
