


 window.onload = () => {
	 let input = document.querySelector('#input')
	 input.oninput = function() {
	 	let value = this.value.trim();
	 	let filter = input.value.toLowerCase();
	 	let hide = document.querySelector('.products-element')
	 	let list = document.querySelectorAll('.products-container .products-element .products-element__name');

	 	if (value != '') {
	 		list.forEach(elem => {
	 			if(elem.innerHTML.toLowerCase().search(value) == -1){
	 				hide.classList.add('hide');
	 			}

	 		});
	 			
	 	} else{
	 		list.forEach(elem => {
	 			elem.classList.remove('hide');
	 		});
	 	}

	 	console.log(this.value);
	};

};


