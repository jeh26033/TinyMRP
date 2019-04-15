<script>
$(document).ready(function(){

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
  var noBounce = debounce(function(){
  $(".quad").mouseover(function(){
    $(this).addClass('active col-md-10').removeClass('col-md-6');
    $(this).siblings().addClass('inactive col-md-2').removeClass('col-md-6');
    $(this).find('.quadOverlay').fadeOut('slow');
  });
  $(".quad").mouseout(function(){
    $(this).siblings().removeClass('inactive col-md-2').addClass('col-md-6');
    $(this).removeClass('active col-md-9').addClass('col-md-6');
    $(this).find('.quadOverlay').fadeIn('slow');
  });
},2500);//noBounce function

window.addEventListener('mouseenter', noBounce());
  
})	
</script>