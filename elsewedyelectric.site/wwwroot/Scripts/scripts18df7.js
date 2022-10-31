
/*========================================
Zoom
========================================*/
$(function () {
    if (!(/iPad|iPhone|iPod/.test(navigator.userAgent))) return
    $(document.head).append(
        '<style>*{cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}</style>'
    )
    $(window).on('gesturestart touchmove', function (evt) {
        if (evt.originalEvent.scale !== 1) {
            evt.originalEvent.preventDefault()
            document.body.style.transform = 'scale(1)'
        }
    })
})

/*========================================
Search click
========================================*/
function Search(){
                window.location.href = "/" + langss + "/search-results/?q=" + $('#form-name').val();
        }
        $('#form-name').keypress(function(event){
	
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '13'){
		Search();
	}

});

/*========================================
language
========================================*/

$("#soflow").change(function () {
    var newlang = "/" + this.value +"/" ;
    var link= window.location.href;
    var newlink=link.replace(lang, newlang).replace("//home", "/home");
    window.location.href = newlink;
});
