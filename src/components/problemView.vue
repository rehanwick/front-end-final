<template>
    <div class="body">
       <!-- <h1> {{id}}</h1> -->
       <!-- <pre>{{ problem }}</pre> -->
       <div class="flex">
          <div class="question">
              <h2>{{ problem.name }} 
                  <button type="button" class="btn btn-success btnc" v-if="problem.categories == 'easy'">Easy</button>
                  <button type="button" class="btn btn-danger btnc" v-else-if="problem.categories == 'hard'">Hard</button>
                  <button type="button" class="btn btn-warning btnc" v-else-if="problem.categories == 'medium'">Medium</button>
              </h2>    
              <br/>

              <p>{{ problem.discription }}</p>
              <br/>
              <h5>Output</h5>
              <div class="alert alert-dark">{{ problem.output }}</div>
          </div>
          <div>
              <div class="alert alert-info top-code">
                <div>
                </div>
                <select name="language" class="language-btn btn btn-info ">
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                    <option value="py">Python</option>
                </select>
              </div>
              <textarea class="code" name="" id="" cols="65" rows="14" v-model="code.code" placeholder="Write your code here"></textarea> <br/>
              <div class="flex">
                <div>
                  <button class="btn btn-outline-primary" @click = "run">Submite</button>
                </div>
              <div>
                  <div v-if="error" class="alert alert-danger" role="alert">
                      Error in the code 
                  </div>
                  <div v-if="correct" class="alert alert-success" role="alert">
                      correct answer 
                  </div>
              </div>
                <textarea cols="50" rows="5" class="console alert" disabled placeholder="Console" v-model="console"></textarea>
              </div>
          </div>
       </div>
    </div>
</template>

<script>
import { fetchProblemById } from '../services/getProblems';
import {runCode} from '../services/runCode.js'
import Vue from 'vue' ; 
import config from '@/config';
export default {
  name : 'problemApp' , 
  data() {
    return {
        id : this.$route.params.id  ,
        problem : [] , 
        code : {
          code : '' ,
          id : this.$route.params.id , 
          email : this.$store.state.auth.email
        },
        console : '' ,
        error : false , 
        correct: false , 
        solved : false 
    }
  },
  methods: {
      run() {
        this.error = false ; 
         if(this.code.code == '')
         {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Code should not be empty'
          }) ;
         }
         else {
                runCode(this.code)
                  .then(output => {
                    console.log(output.data);
                    if( output.data.output.stderr == undefined)
                    {
                     if(output.data.a)
                     {
                        this.correct = true ; 
                        this.console = output.data.output ; 
                     }
                     else {
                       this.console =output.data.output ; 
                     }
                    } 
                    else {
                      this.error = true ; 
                      this.console = output.data.output.stderr ; 
                    }
                    
                    this.solved=output.data.solved ; 
                      
                  })
                  .then(() => {
                    if(this.correct && this.solved)
                    {
                       //toast

                       this.$swal({
                            title: 'Congratulation you have earned some points',
                            width: 600,
                            padding: '3em',
                            color: '#716add',
                            background: '#fff url(/images/trees.png)',
                            backdrop: `
                              rgba(0,0,123,0.4)
                              url("https://media.tenor.com/EPB7uiDGlDwAAAAC/kbc-memes-7crore-meme.gif")
                              left top
                              no-repeat
                            `
                        }) 
                    }
                  }) 
         }
      }
  }  ,
  created() {
    if(this.$store.getters.isAuthenticated)
    {
      fetchProblemById(this.id)
            .then(problem => {this.problem = problem.data})
            .catch(error => console.log(error)) 
    }
    else
     {

      this.$swal({
             title: 'Please Log-in Before Solveing the problem',
             showClass: {
             popup: 'animate__animated animate__fadeInDown'
             },
             hideClass: {
             popup: 'animate__animated animate__fadeOutUp'
             }
          }) ; 

      this.$router.push( '/login' ); 
    }      
  }
}
</script>

<style scoped>

.language-btn{
  margin : 2px ; 
  background-color: #93bfeae7;
  border: #506276;

}
.top-code {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  background-color: #8aaccee7;
}

.console {
color: black;
background-color: rgba(192, 147, 79, 0.606);
}

.question{
   flex-basis: 35%;
}
.code
{
  font-family: MonoLisa  ;
  font-size: 1.5em;
  background-color: black;
  color: aliceblue;
}
.btnc{
  padding: 5px;

}
.output{
  background-color: rgba(128, 128, 128, 0.429);
  padding: 5px;
}
.body{
  margin: 2em;
  margin-right: 8em;
}
.flex {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>