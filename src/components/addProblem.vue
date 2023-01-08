<template>
  <div class="container my-4" >
    <div class="row offset-0 offset-md-3 col-12 col-md-6">
      <form name="form" @submit.prevent="addProblem">
        <div class="form-group">
                          <label for="name">Problem Name</label>
                          <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Ex- Print the array"
                              v-model="form.name"
                          />
         </div>
         <div class="form-group">
                          <label for="discription">Discription</label>
                          <textarea 
                              class="form-control"
                              name="discription"
                              id="discription"
                              placeholder="Add full Discription for the problem"
                              v-model="form.discription"
                          >
                          </textarea>
         </div>
         <div class="form-group">
                          <label for="Output">Out-put</label>
                          <input
                              type="text"
                              class="form-control"
                              name="Output"
                              id="Output"
                              placeholder="Output of the problem"
                              v-model="form.output"
                          />
         </div> 
         <div class="form-group">
                          <label for="Output">Categorie</label>
                          <ul class="list-group">
                              <li class="list-group-item">
                                <input class="form-check-input me-1" type="radio" name="listGroupRadio" v-model="form.categories" value="easy" id="firstRadio" checked>
                                <label class="form-check-label" for="firstRadio">Easy</label>
                              </li>
                              <li class="list-group-item">
                                <input class="form-check-input me-1" type="radio" name="listGroupRadio" v-model="form.categories" value="medium" id="secondRadio">
                                <label class="form-check-label" for="secondRadio">Medium</label>
                              </li>
                              <li class="list-group-item">
                                <input class="form-check-input me-1" type="radio" name="listGroupRadio" v-model="form.categories"  value="hard" id="thirdRadio">
                                <label class="form-check-label" for="thirdRadio">Hard</label>
                              </li>
                          </ul>
         </div>  
         <div class="form-group">
                        <button class="btn btn-primary">Submite</button>
          </div>
        </form>
    </div>
  </div>
</template>

<script>

import Vue from 'vue' ; 
import config  from '@/config';
import {addProblemSer} from '../services/addProblem'
export default {
  name: 'addProblem' , 
  data() {
    return {
      form : {
          name: '' ,
          discription : '' ,
          output : '',
          categories : ''
      }
    } ;
  },
  methods:{
        addProblem() {
              addProblemSer(this.form)
                        .then(() => {
                          this.$swal("Success", "Problem added", "success")
                          this.$router.push( '/problem' ) 
                        })
                        .catch(error => {
                          Vue.$toast.open({
                                message: error.response.data.message,
                                duration: config.toastDuration,
                                type: 'error'
                            })
                        }) 
        } 

  } 
}
</script>

<style>

</style>