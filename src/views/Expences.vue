<template>
    <div>
        <Header />
        <div class="container">
             <div class="col-lg-12 border">
            <div class="col-lg-12">
                <!-- <h2 class="mt-2 text-left">expences_mngr's id {{this.$route.params.id}} Items</h2> -->
                <div>
                    
                </div>
            </div>
            </div>
        <!-- here -->
          <div>
                         <b-alert
                                :show="dismissCountDown"
                                dismissible
                                variant="warning"
                                @dismissed="dismissCountDown=0"
                                

                                >
                                {{msg}}
                                </b-alert>
             <table class="table">
  <thead>
    <tr>
      <th scope="col">{{fields[0]}}</th>
      <th scope="col">{{fields[1]}}</th>
      <th scope="col">{{fields[2]}}</th>
      <!-- <th scope="col">{{fields[3]}}</th>
      <th scope="col">{{fields[4]}}</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-bind:key="item.id" v-for="item in items">
      <td>{{item.exp_date}}</td>
      <td>{{item.exp_vat}}</td>
      <td>{{item.exp_reason}}</td>
      <!-- <td>
          <router-link :to="{path:'/editexpences_mngr/'+item.id}" > <b-button variant="outline-success" append>edit</b-button></router-link>
          <b-button :to="{path:'/PostItem/'+item.id}" variant="outline-primary">Add Item</b-button>
          <b-button variant="outline-danger"   @click="deleteexpences_mngr(item.id)">delete</b-button>
          <b-button :to="{path:'/ItemView/'+item.id}" variant="">View Items</b-button>
      </td> -->
    </tr>
   
  </tbody>
</table>
        </div>
       </div>
    </div>    
</template>

<script>
import Header from '../components/layout/Header.vue';
import  axios  from "axios";

export default {
    name:'Expences',
     components:{
        Header,
        
    },data:function () {
        return{
            token: localStorage.getItem('token'),
            bid:this.$route.params.id,
                msg:"",
            dismissSecs: 5,
            dismissCountDown: 0,
            fields: [ 'exp_date','exp_vat','exp_reason'],
            items: [
        //   { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        //   { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        //   { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        //   { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
        }
    },
    methods:{
showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
    },
    created(){
        let fd = new FormData();
        fd.append('jwt',this.token);
        axios.get('http://idealhealthcare.wilsonjohnsonlawgroup.org/expences')
        .then(res =>{
            let data = res.data;
           
            console.log(data);
            if (data.status===true) {
                    this.msg=data.message;

                    this.showAlert();
                     this.items=data.data;

                }else if (data.status===false) {
                    this.msg=data.message;
                    this.showAlert();   
                }
        })
        .catch(err => {
            // console.log(err);            
        })

}
}
</script>

<style scoped>

</style>>

