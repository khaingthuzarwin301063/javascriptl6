var getbtnmodal = document.getElementById('btn-modal');
var getmodalbox = document.getElementById('loginmodal');
var getbtnclose = document.querySelector('.btn-close');

// getbtnmodal.addEventListener('click',function(){
// 	getmodalbox.style.display = "block";
// });

// getbtnclose.addEventListener('click',function(){
// 	getmodalbox.style.display = "none";
// });

// window.onclick = function(e){
// 	if(e.target === getmodalbox){
// 		getmodalbox.style.display = "none";
// 	}
// }


getbtnmodal.addEventListener('click',openmodal);

getbtnclose.addEventListener('click',closemodal);

window.onclick = function(e){
	if(e.target === getmodalbox){
		closemodal();
	}
}

function openmodal(){
	getmodalbox.style.display = "block";
}

function closemodal(){
	getmodalbox.style.display = "none";
}