let btnajouter=document.querySelector("button"); 
console.log(btnajouter);

btnajouter.addEventListener("click", () => {
// reccuperer les donnees formulaires							
let nom=document.querySelectorAll("input[name ='nom']"); 	
let coefficient=document.querySelectorAll("input[name ='coefficient']"); 	
let nbmat=document.querySelectorAll("input[name ='nombre de matières']"); 	

for(i=0 ;i<nom.length; i++)
	{
	 if(nom[i].checked==true)
		 {
			 nomMod=nom[i].nodeValue;
		 }

	
	}
localStorage.setItem("Nom",document.querySelector("#nom").value); 
//setItem("Coefficient",document.querySelector("#coeff").value); 
//localStorage.setItem("Nombre de matières",document.querySelector("#nbmat").value); 
//localStorage.setItem("Nom",nomMod); 
//localStorage.setItem("textFormulaire",document.querySelector("#textFormulaire".value); 


	
							
	console.log(document.querySelector("#nom").innerHTML=localStorage.getItem("nom")) ; 						
							
							
							
							}); 