// Check off specific Todos By clicking
/**$('li').click(function(){
    if($(this).css('color') === 'rgb(128, 128, 128)'){
        //$(this).css('color','black')
        $(this).css({
            color: 'black',
            textDecoration: 'none'
        })
    } 
    else{
        $(this).css({
            color: 'gray',
            textDecoration: 'line-through'
        })
    
    }
})**/
// Check off specific Todos By clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed')
})
//click on X to delete Todo
$('ul').on('click', 'span', function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    })
    event.stopPropagation()
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val()
        $(this).val("")
        //create a new li and add to ul
        $('ul').append('<li><span><i class="fa fa-trash" aria-hidden="true"></i><span/> ' + todoText + '</li>')
    }
})

//Togling the input form
$('.fa-plus-square').click(function(){
    $("input[type='text'").fadeToggle()
})
