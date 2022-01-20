console.log("Register");

//Class user
class User{
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;        
        this.first=first;
        this.last=last; 
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}


//Input Validation 
function isValid(user){

    
    let valid = true;
    $('input').removeClass("error");

    if(user.email.length == 0)
    {
        valid = false;
        $("#txtEmail").addClass("error");

    }
  
    if(user.password.length == 0)
    {
        valid = false;
        $("#txtPassword").addClass("error");
    }

    if(user.first.length == 0)
    {
        valid = false;
        $("#txtFirst").addClass("error");
    }   

    if(user.last.length == 0)
    {
        valid = false;
        $("#txtLast").addClass("error");
    }

    if(user.age.length == 0)
    {
        valid = false;
        $("#txtAge").addClass("error");
    }

    if(user.address.length == 0)
    {
        valid = false;
        $("#txtAddress").addClass("error");
    }

    if(user.phone.length == 0)
    {
        valid = false;
        $("#txtPhone").addClass("error");
    }

    return valid;

    
}


//Regisrter User Function
function registerUser(){

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();

    let user = new User(email,password,first,last,age,address,phone,payment);
   
    //Validation to print in console
    if(isValid(user))
    {
        //Storemanager
        saveUser(user);
        
        //Clean de input's
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtPassword").value = "";
        document.getElementById("txtFirst").value = "";
        document.getElementById("txtLast").value = "";
        document.getElementById("txtAge").value =""; 
        document.getElementById("txtAddress").value = "";
        document.getElementById("txtPhone").value = "";
        document.getElementById("selPayment").value = "";

        
    }
}

function init(){
    console.log("Init function");

    $("#btnSave").click(registerUser);
}
window.onload=init;