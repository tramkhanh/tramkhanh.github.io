 $(function(){
 	$('.nhieumon').isotope({
	  itemSelector: '.motmon',
	  layoutMode: 'masonry'
	});
	khoimonan.imagesloaded().progress( function(){
		khoimonan.isotope('layout');
	});
	$('.tieudect a').click(function(){
		
		dulieu = $(this).attr('href');
		//console.log(tendanhmuc);
		$hieuung.isotope({filter:tendanhmuc})

		return false;
	});

soluongmon = $('.motmon').length;



})  


 