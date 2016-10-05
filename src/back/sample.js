$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});
$(document).ajaxError(function(event, jqxhr, settings, exception) {
	if (exception == 'Unauthorized') {
		// Prompt user if they'd like to be redirected to the login page
		var redirect = confirm("You're session has expired. Would you like to be redirected to the login page?");
		// If the answer is yes
		if (redirect) {
			// Redirect
			window.location = 'http://hikaku-jan.com/backend/login';
		}
	}
});

function doFormData($thisForm) {
	var formData = new FormData($thisForm[0]);
	var actionUrl = $thisForm.attr('action');
	var hasId = $('#' + $thisForm.attr('id') + ' > input[name=id]').length;
	if (hasId) {
		actionUrl = actionUrl + '/' + $('#' + $thisForm.attr('id') + ' > input[name=id]').val();
		formData.delete('id');
	}

	$.ajax({
		url : actionUrl,
		data : formData,
		dataType : 'json',
		async: false,
		type : 'POST',
		processData: false,
		contentType: false,
		scriptCharset : 'utf-8',
		success : function(data) {
			// Success
			alert(JSON.stringify(data));
		},
		error: function(XMLHttpRequest, json, errorThrown) {
			alert(XMLHttpRequest.status);
		}
	});
}

function doForm($thisForm) {
	var actionUrl = $thisForm.attr('action');
	var hasId = $('#' + $thisForm.attr('id') + ' > input[name=id]').length;
	if (hasId) {
		actionUrl = actionUrl + '/' + $('#' + $thisForm.attr('id') + ' > input[name=id]').val();
	}
	$.ajax({
		url : actionUrl,
		data: $thisForm.serialize(),
		dataType : 'json',
		type : $thisForm.attr('method'),
		scriptCharset : 'utf-8',
		success : function(data) {
			// Success
			alert(JSON.stringify(data));
		},
		error: function(XMLHttpRequest, json, errorThrown) {
			alert(XMLHttpRequest.status);
		}
	});
}

var imageCnt = 1;
function addImageForm($this) {
	$this.after($('<input>').attr({'name': 'image[' + imageCnt + ']', 'type': 'file'}));
	imageCnt++;
}

$(document).ready(function(){
	var paramsStr = $(location).attr('search');
	if (paramsStr) {
		var params = paramsStr.split('?');
		var spparams = params[1].split("&");
		var paramArray = [];
		for ( i = 0; i < spparams.length; i++ ) {
			vol = spparams[i].split("=");
			$('#estimate-complete > input[name=' + vol[0] +']').val(vol[1]);
		}
	}
});