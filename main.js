function validate()
{
    let user=document.getElementById("username").value;
    let pass=document.getElementById("pswrd").value;
   

    if(user=='doctor' && pass=='swaps')
    {
        alert("Login Successful");
        return true;
        
    }
        else
    {
        alert("Wrong Credentials");
        return false;
    }

}
function valid()
{
    
    let us=document.getElementById("usernamepa").value;
    let passpa=document.getElementById("pswrdpa").value;
    if(us=='user' && passpa=='sagnik')
    {
        alert("Login Successful");
       return true;
        
    }
   
        else
    {
        alert("Wrong Credentials");
        return false;
    }

}