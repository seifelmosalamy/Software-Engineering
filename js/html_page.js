$(document).ready(function(){

    // var id;

     /* $.ajax({
        url: '../php/controller/html_pages.php',
        type: 'POST',
        dataType: "JSON",                                                  
        success: function(data) {
            console.log(data);

            for (var key in data) {
                $("<option id='opt-"+ key +"'>"+ data[key] +"</option>").appendTo("#pages_select");
            }
            
        },
        error: function(data){
            console.log(data);
        }
    }); */
	
	$(document).on('click','#insert_btn',function(e){

        e.preventDefault();
        e.stopImmediatePropagation();

        var pageid = $('#page_number').val();
        var html_input = $('#html_input').val();

        if(pageid == "" || html_input == "" ){

            // alert you need to enter data
            console.log("you need to enter data");
        }
        else{

            $.ajax({ 
                url: '../controller/insert_pages_html.php',
                data: {pageid: pageid, html: html_input},
                type: 'POST',                                                  
                success: function(data) {
                    console.log(data);
    
                    // alert
                },
                error: function(data){
                    console.log(data);
                }
            });
    

        }




		
		
        return false;

    });	
	
	/* $(document).on('click','#delete_btn',function(e){

        e.preventdefault();
        e.stopimmediatepropagation();

        $.ajax({
            url: '../model/user_intermediate.php',
            data: {function2call: 'delete_html', num:id},
            type: 'post',
            datatype: "json",
            success: function(data) {
                console.log(data);

            },
            error: function(data){
                console.log(data);
            }
        }); */



        return false;

    });

    $("#pages_select").change(function() {
        var id_selected = $(this).children(":selected").attr("id");
        id = id_selected.substr(id_selected.indexOf('-')+1, id_selected.indexOf('-'));
    });

function switch_divs(evt, secName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(secName).style.display = "block";
    evt.currentTarget.className += " active";
}
