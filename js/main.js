
$(function() {
	var car = $('.money');
	var month = $('.days');
	var	price = $('span#final_price');
	var month =  +$('.calc-range').val();
	var money =  +$('.money').val();	
	

	var elem = document.querySelector('.money');
	var init = new Powerange(elem, { min: 0, max: 4000000, start:100000, hideRange: true, step: 50000,  });
	
	var elem2 = document.querySelector('.calc-range');
	var init2 = new Powerange(elem2, { min: 1, max: 16, start: 1, step: 1, hideRange: true });
		
	

	$('.money').on('change', function(event){
	$('.money_val').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	money = +$(this).val()
	var final = money + month * money * 0.06 ;
	price.text(final.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

	});

	

	

	$('.calc-range').on('change', function(event){
	$('.days_val').text( $(this).val());
	month = +$(this).val()

	var final = money + month * money * 0.06 ;
	price.text(final.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	});

}); 






/*elem.onchange = function() {
  			if (elem.value < 100.000){
  				elem.value = 100000;
  			
		};

}*/
		