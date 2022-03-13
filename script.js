


window.onload = function(){

	document.querySelector(".mn-mobile").addEventListener("click", function(){
		if(document.querySelector(".menu-list").style.display=='flex') {

			document.querySelector(".menu-list").style.display='none';
		}		


		else {

				document.querySelector(".menu-list").style.display='flex';
			}
		}
	);
};

