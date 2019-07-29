window.onload = function (){
	var elements = document.getElementsByTagName("input");
	var display = document.querySelector('id');
	var clear = document.getElementsByClassName('clearButton')[0];
	
	for(var i=0;i<elements.length;i+=1){
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("onclick", calculate(i));
		  }else{
			   elements[i].addEventListener("onclick", addtocurrentvalue(i));
		  }
	}
	
	
	function addtocurrentvalue (i){
		return function(){
			if (elements[i].innerHTML === "÷") {
               display.innerHTML  +=  "/ " ;
      }else if(elements[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   display.innerHTML  += elements[i].innerHTML;
		   }
	  };
   }
 

   clearButton.onclick = function () {
    display.innerHTML = '"';
  }; 

 function calculate(i) {
    return function () {
        display.innerHTML = eval(display.innerHTML);
    };
  }
};