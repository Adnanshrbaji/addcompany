<template>
  <div class="box">
    
   
    <h1>Delevary Data</h1>
   
    <div class="in">
        <label for="name">Source Location</label>
        <div>  <input type="text" v-model="sourcelocation" placeholder="Enter Source Location"
             /><img v-if="username.length >= 5" src="../assets/ok.svg" alt=""></div>
             <label for="name">Distination Location</label>
        <div>  <input type="text" v-model="Distinationlocation" placeholder="Enter Distination Location"
             /><img v-if="username.length >= 5" src="../assets/ok.svg" alt=""></div>
             
             <label for="name">Type off</label>
        <div>  <input type="text" v-model="typeoff" placeholder="Enter the Type"
             /><img v-if="username.length >= 5" src="../assets/ok.svg" alt=""></div>

             <label for="name">Source Email</label>
        <div>  <input type="text" v-model="smail" placeholder="Enter source email"
             /><img v-if="mail.length >= 6" src="../assets/ok.svg" alt=""></div>
  
    <div class="button_action">
      <button v-on:click="mail = ' @gmail.com' ">@gmail.com</button> <button v-on:click="mail = '@yahoo.com' ">@yahoo.com</button>  <button v-on:click="mail = '@outlook.com' ">@outlook.com</button>  <button v-on:click="mail = '@aol.com' ">@aol.com</button>
    </div>
    
    <label for="name">Destination Email</label>
        <div>  <input type="text" v-model="dmail" placeholder="Enter Destination email"
             /><img v-if="mail.length >= 6" src="../assets/ok.svg" alt=""></div>
  
    <div class="button_action">
      <button v-on:click="mail = ' @gmail.com' ">@gmail.com</button> <button v-on:click="mail = '@yahoo.com' ">@yahoo.com</button>  <button v-on:click="mail = '@outlook.com' ">@outlook.com</button>  <button v-on:click="mail = '@aol.com' ">@aol.com</button>
    </div>
    <label for ="service">Service</label>
    
    <select name="service">
      <option>Track</option>
      <option>Expect time</option>
      <option>Delay time</option>
    </select>
    
    </div>
  
    <div class="in">
    
    </div>
    
    
  
  
    <button class="log">
      Save
      </button>
     
  

  </div>
  
  </template>
  
  
  <script>
  export default {
  
    data() {
      return {
        password:"",
        userLoggedIn: false,
        username:"",
        mail:"",
        mail_confirm:"",
        password_confirmation:"",
        isActive: false,

      };
      
    },
    toggle() {
this.isActive = ! this.enable ;
},
  };
  
  </script>
  
  
  
  
  