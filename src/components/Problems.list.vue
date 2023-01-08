<template>
    <div class="problems">
        <!-- <pre>{{ problems }}</pre> -->
        <div class="badge text-bg-success" >Easy</div>
        <div class ="problem-list">
            <div
            class="list"
            v-for="problems in problems"
            :key="problems._id"
            >
                <router-link
                      :to="`/problemSolve/${problems._id}`"
                      v-if="problems.categories=='easy'"
                      class="text-decoration-none card-title"
                      ><h4 class="card-title" > {{ problems.name}} </h4>
                      <small>{{ problems.discription }}</small>
                </router-link >
            </div>
        </div>
        <br/>

        <div class="badge text-bg-warning">Medium</div>
        <div class ="problem-list">
            <div
            class="list"
            v-for="problems in problems"
            :key="problems._id"
            >
                <router-link
                      :to="`/problemSolve/${problems._id}`"
                      v-if="problems.categories=='medium'"
                      class="text-decoration-none card-title"
                      ><h4 class="card-title" > {{ problems.name}} </h4>
                      <small>{{ problems.discription }}</small>
                </router-link >
            </div>
        </div>
        <br/>


        <div class="badge text-bg-danger">Hard</div>
        <div class ="problem-list">
            <div
            class="list"
            v-for="problems in problems"
            :key="problems._id"
            >
                <router-link
                      :to="`/problemSolve/${problems._id}`"
                      v-if="problems.categories=='hard'"
                      class="text-decoration-none card-title"
                      ><h4 class="card-title" > {{ problems.name}} </h4>
                      <small>{{ problems.discription }}</small>
                </router-link >
            </div>
        </div>


  </div>

</template>

<script>
import {fetchProblems} from "../services/getProblems" 
export default {
    name : 'problemList' ,
    data() {
       return { problems: []   } 
    } ,
    created() {
        fetchProblems()
        .then(problems=>{this.problems = problems.data ;})
        .catch(error => console.log(error))
    }
}
</script>

<style scoped >
.card-title{
    padding: 0.001px;
}
.problem-list {
    border-radius : 5px ; 
    background-color: azure;
    margin: 10px;
}
.card-title {
    text-decoration-line : underline ; 
    color: black;
}
.problems{
 margin: 25px;
}
.list{
    margin: 0;
    margin-left: 15px;
    /* border: 1px solid rgb(71, 71, 71); */
    padding: 0;
}
.badge {
    font-size: 1em;
}

.list:hover{
    padding : 4px ;
    border-radius : 5px;
    background-color: rgba(147, 144, 144, 0.443);
}
</style>