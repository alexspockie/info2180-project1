/* Add your JavaScript to this file */
function initpage(){
	var nwbutton=document.getElementsByTagName("button")[0];
	//console.log(nwbutton.innerHTML);
nwbutton.addEventListener("click",mailingList);

}


function mailingList(event){
	event.preventDefault();
	var email=document.getElementById("email");
	
	var message=document.getElementsByClassName("message")[0];
	if (email.value.length==0){
		//display no valid email message.
		message.innerHTML= "Please enter a valid email address";
	}
	else{
		var em=email.value;
		var strng="Thank You! Your email address "+em+" has been added to our mailing list!";
		message.innerHTML=strng;

	}
}
document.addEventListener("DOMContentLoaded",function(){
	initpage();
});