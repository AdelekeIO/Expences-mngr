<template>
    <div>
        <Header />
          <div class="container">
             <div class="col-lg-12 ">
            <div class="col-lg-12">
                    <div class="col-8 float-center "> 
                <h3>Post Expences</h3>
                <hr>
    <form>
  <div class="form-group">
    <label for="exp_date">Expences Date</label>
    <input type="date" v-model="exp_date" class="form-control" id="exp_date" aria-describedby="Expences date help" placeholder="Enter Expences Date" required>
     </div>
     <div class="form-group">
    <label for="exp_val">Expences value</label>
    <input type="text" v-model="exp_val" class="form-control" @keyup="loadVatValue" id="exp_date" aria-describedby="Expences value help" placeholder="Enter Expences Value (i.e, 5000)" required>
     </div>
      <div class="form-group">
    <label for="exp_val">Expences VAT</label>
    <input type="text" v-model="exp_vat" class="form-control" id="exp_vat" aria-describedby="Expences value VAT" placeholder="Expences VAT" disabled>
     </div>
     <div class="form-group">
    <label for="exp_reason">Expences Reason</label>
    <textarea name="exp_res" v-model="exp_res" class="form-control"  id="exp_res" cols="30" rows="5" required></textarea>
    <!-- <input type="date" v-model="exp_res" class="form-control" id="exp_date" aria-describedby="Expences Expences Reason help" placeholder="Expences Reason Date" required> -->
     </div>
  <button type="button" class="btn btn-primary" @click="submitExpences" >Submit</button>
</form>
            </div>
            </div>
            </div>
       </div>
         
    </div>    
</template>

<script>
import Header from '../components/layout/Header.vue';
import axios from "axios";
import { setTimeout } from 'timers';
import { isNumber } from 'util';

export default {
    name:'Postexpences_mngr',
     components:{
        Header,
        
    },  
    data(){
        return{
            name:"",
            token:localStorage.getItem('token'),
            success_status:false,
            success_msg:"",
            err_status:false,
            msg:"",
            dismissSecs: 5,
            dismissCountDown: 0,
            exp_val :"",
            exp_date :"",
            exp_res :"",
            exp_vat :"",
        }   
    },    
    methods:{
        submitExpences(e){
            e.preventDeefault;
            let name = this.name; 
            
            let fd = new FormData();

            fd.append('exp_val',this.exp_val);
            fd.append('exp_date',this.exp_date);
            fd.append('exp_reason',this.exp_res);
            fd.append('exp_vat',this.exp_vat);

            let url = 'http://idealhealthcare.wilsonjohnsonlawgroup.org/add-expences';
            axios.post(url,fd)
            .then(res => {
                console.log(res);
                
                let data = res.data;
                if (data.status===true) {
                    this.msg=data.message;
                    alert(this.msg);
                    this.exp_val = "";
                    this.exp_date = "";
                    this.exp_res ="";
                    this.exp_vat = "";
                }else if (data.status===false) {
                    this.msg=data.message;
                    alert(this.msg);

                }
            })
            .catch(err => {
                console.log(err);                
            });
                      

        },
        getVat() {
            let  vat =0;
            let vat_percent = 20;
            let val = this.exp_val;
            vat = (((parseFloat(val)*vat_percent)/100));
            return vat;
   },
      loadVatValue() {
          this.exp_vat = this.getVat();
        document.getElementById("exp_vat").value= this.exp_vat;
      }
},

}
</script>

<style scoped>

</style>>

