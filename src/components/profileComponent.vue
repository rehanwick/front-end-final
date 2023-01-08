<template>
  <div class="body">
     <!-- <pre>{{ user }}</pre> -->
     <div class="flex">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" class="img">
        <div class="details">
             <h1> Name :- {{ user.name }}</h1>
             <h2>
                Score:- {{user.total}}
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                </svg>
            </h2>
            <h2>
                Easy = {{ user.score.easy }} , Medium = {{user.score.medium}} , Hard = {{ user.score.hard }}
            </h2>
        </div>
     </div>
  </div>
</template>

<script>
import { fetchUserProfile } from '../services/getUser'
export default {
        name: 'profile' , 
        data() {
            return {
                email : this.$store.state.auth.email, 
                user : [] 
            }
        } , 
        created() {
            fetchUserProfile(this.email)
                         .then(User=>{this.user = User.data ;})

        }
}
</script>

<style scoped>
.bi{
    color: rgb(255, 131, 42);
}
.details{
    margin:1.5em ; 
}
.body {
    margin: 2em ; 
}
.flex{
    display: flex;
}
.img{
    height: 20em ; 

}

.details > * {
 
}
</style>