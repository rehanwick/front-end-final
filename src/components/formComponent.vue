<template>
    <div class="container my-4">
        <div class="row">
            <div class="offset-0 offset-md-3 col-12 col-md-6">
                <h1>Login</h1>
                <hr />
                <form name="form" @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            placeholder="rehan.shaikh@gmail.com"
                            v-model="form.email"
                            @blur="$v.form.email.$touch()"
                        />
                        <div v-if="$v.form.email.$error">
                            <div v-if="!$v.form.email.required" class="error-message">
                                <small>The email field is required</small>
                            </div>
                            <div v-if="!$v.form.email.email" class="error-message">
                                <small>Invalid email address</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            autocomplete="off"
                            class="form-control"
                            name="password"
                            id="password"
                            v-model="form.password"
                            @blur="$v.form.password.$touch()"
                        />
                        <div v-if="$v.form.password.$error">
                            <div v-if="!$v.form.password.required" class="error-message">
                                <small>The password field is required</small>
                            </div>
                            <div v-if="!$v.form.password.minLength" class="error-message">
                                <small>The password must have at least 8 characters</small>
                            </div>
                            <div v-if="!$v.form.password.containsUppercase" class="error-message">
                                <small>The password must have at least 1 uppercase character</small>
                            </div>
                            <div v-if="!$v.form.password.containsLowercase" class="error-message">
                                <small>The password must have at least 1 lowercase character</small>
                            </div>
                            <div v-if="!$v.form.password.containsNumber" class="error-message">
                                <small>The password must have at least 1 digit</small>
                            </div>
                            <div v-if="!$v.form.password.containsSpecial" class="error-message">
                                <small>The password must have at least 1 special character</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" :disabled="$v.form.$invalid" >Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { email , required, minLength } from 'vuelidate/lib/validators';
    export default {
        name: 'fromComponent',
        data() {
            return {
                processing: false,
                form: {
                    email: '',
                   password: ''
                }
                
            };
        },
        validations: {
                form: {
                    email:{
                        email , 
                        required
                    } , 
                    password: {
                        required , 
                        minLength: minLength(8) , 
                        containsUppercase: function(value) {
                        return /[A-Z]/.test(value)
                        },
                        containsLowercase: function(value) {
                        return /[a-z]/.test(value)
                        },
                        containsNumber: function(value) {
                        return /[0-9]/.test(value)
                        },
                        containsSpecial: function(value) {
                        return /[#?!@$%^&*-]/.test(value)
                       }
                    }
                } 

        }, 
        methods : { 
           async login() {
                this.$v.form.$touch() ; 
                if(!this.$v.form.$invalid){
                     this.$store.dispatch('login', this.form)
                    .then(() => this.$router.push( '/problem' ))
                    .catch( error => {
                        this.$swal({
                                    title: 'Error!',
                                    text: `User name or password is wrong `,
                                    icon: 'error',
                                    confirmButtonText: 'ok'
                                    })
                        });  
                }
            }
        }

    }
</script>

<style scoped>
   .form-group{
    margin: 10px;
  }
  .error-message {
    color: crimson;
  }
</style>