$('document').ready(function() {

	var previous;

	$('select.remRep').on('focus', function () { 
		previous = this.value;
	}).on('change', function() {
		var t = $(this);
		$('option[value=' + previous + ']').removeAttr('disabled');
		$('option[value=' + t.val() + ']').not(t).attr('disabled', true);
	});
});