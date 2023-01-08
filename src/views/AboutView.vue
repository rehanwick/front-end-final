<template>
  <div class="problems">
    <problemList/>
  </div>
</template>

<script>
import {fetchProblems} from "../services/getProblems" 
import problemList from "../components/Problems.list.vue"
export default {
  name: 'problems' , 
  data() {
    return {
      problems : []
    }
  } , 
  components: {
    problemList ,
  } ,
  methods:{

  } ,
  created() {
    fetchProblems()
      .then(problems=>{this.problems = problems.data ;})
      .catch(error => console.log(error))
  }
}
</script>

<style>

</style>