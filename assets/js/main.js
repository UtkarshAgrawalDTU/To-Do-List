$(document).on("click", "li", function(){
    $(this).toggleClass("completed");
})

$("input").on("keypress", function(event){
    if(event.which === 13){
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + $(this).val() + "</li>");
        $(this).val("");        
    }
});

$(document).on("click", "span", function(event){
    
    $(this).parent().toggleClass("completed");
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$(document).on("click", "i.fa-plus", function(event){
    
    $("input").fadeToggle(500);
    // event.stopPropagation();
})
