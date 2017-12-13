var test = false;


 function verifchamp(){
 	
	var tabligne=formulaire.elements;

	for(var i=0;i<tabligne.length-1;i++){
		if(tabligne[i].value==""){
		test = false;
		
		document.getElementById("alertax").innerHTML="Veuillez bien renseigner : "+tabligne[i].name;
		break;
	
	} else {
		test =true;
		document.getElementById("alertax").innerHTML="";

	
	}
	}
	
	if(test===true){

		envoie();
	}
  }
  function envoie(){
	var valeur1= formulaire.elements["name"].value;
	var valeur2= formulaire.elements["firstname"].value;
	var valeur3= formulaire.elements["email"].value;
	var valeur4= formulaire.elements["phonenumber"].value; 
	var valeur5= formulaire.elements["country"].value;

	receptacle.innerHTML="";
	receptacle.innerHTML+=valeur1+"<br/>";
	receptacle.innerHTML+=valeur2+"<br/>";
	receptacle.innerHTML+=valeur3+"<br/>";
	receptacle.innerHTML+=valeur4+"<br/>";
	receptacle.innerHTML+=valeur5+"<br/>";
}

 
