function Login_Cond()
{
var Name = document.contactform.Name.value.length;
var Password = document.contactform.Password.value.length;
if (Password < 8)
   {
	document.contactform.Password.style.background = 'Yellow';
    alert("Incorrect details Try Again......");

    return false;
    }
    else
    {
	    if (Name < 10)
	    {
		document.contactform.Name.style.background = 'Yellow';
        alert("Incorrect details Try Again......");
		return false;
        }
        else 
        {
	     document.contactform.Password.style.background = 'Green';
         openWin();
         return true; 
	    }
	
    }
function openWin() {

 window.open("file:///C:/Users/kunal%20B/Desktop/PHP/Meenu_Profile-master/index1.html");
   Login_Cond();
   getLocation();
     
}


}


