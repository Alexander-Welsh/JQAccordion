$(document).ready(function(){

	
    $(".test").hide(); 
    $("h2").click(function(){
        $(this).toggleClass("open").next().slideToggle(200, "linear");
        
        $(this).parent().toggleClass("remover").siblings().removeClass("remover").children("p").hide(200, "linear");
        
        });
	
});