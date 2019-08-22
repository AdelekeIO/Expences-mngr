<template>

<div id="nav">
        <!-- Navigation -->
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div class="container">
                <router-link class="navbar-brand logo"  to="/">Expences Manager</router-link>
             
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                
                    <div class="navbar-nav mr-auto">
                <a class="navbar-link text-white" href="#/expences">Expences</a>
                     
                             <!-- <b-form-select v-model="selected" :options="options" @change="processSelected"></b-form-select> -->
                           <!-- http://idealhealthcare.wilsonjohnsonlawgroup.org/api/v1/ -->
                         
                     
                    </div>
                                        <form class="form-inline mt-2 mt-md-0">
                  </form>
                </div>
                </div>
               
                <!-- <b-form-select v-model="selected" :options="options"></b-form-select> -->
            </nav>
            <!--  -->
              
    </div>
 
</template>

<script>
import { axios } from "axios";

export default {
      name: "Header",
      data :function () {
        return{
            selected: '1',
        options: [
          { value: '0', text: 'expences_mngr List' },
          { value: '1', text: 'Post expences_mngr' },
          { value: '2', text: 'Item List' },
          { value: '3', text: 'Add Item' },
      //     { value: { C: '3PO' }, text: 'This is an option with object value' },
      //     { value: 'd', text: 'This one is disabled', disabled: true }
        ],
        selectedPage:null,
        search:"",
        }
    },
    methods:{
        processSelected(){
            let index = this.selected;
            let url=[
                {1: "expences_mngrlists"},
                {2: "Post expences_mngr"},
            ]
            this.selectedPage = url[index];
            // console.log(url[index]);
            // console.log(index);
            this.$emit('selpage', index);

        },
        deleteToken(){
            localStorage.setItem('token',"");
        },
        serchFunction(){
            console.log(123);
            let searchMsg = this.search;
            // searchMsg===""?alert("Enter the expences_mngr name"):"";
            // if (searchMsg==="") {
            //     alert("Enter the expences_mngr name");
            //     return;
            // }
            axios.get()
            .then(ress =>{
                
            })
            .catch(err=>{

            });

            console.log(searchMsg);
            
            
        }
    },
    created(){

        // this.$emit('selpage', this.selectedPage);
        var token = localStorage.getItem('token');
        if (token==null || token==undefined || token==="" ) {
            this.$router.replace('/');
        }

        
    }
}
</script>

<style scoped>
.link{
    border-left: 3pt black solid;
    height: 4pt;
}
</style>