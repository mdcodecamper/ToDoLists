// Check Off Specific ToDos By Clicking

$("ul").on("click", "li", function () {
    // check li is grey
    $(this).toggleClass("completed");

});


// Click on X to delete ToDos
$("ul").on("click","span",function (e) {

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();

});


$("#addToDo").keypress(function (event) {
    if(event.which === 13){
        var addToDos = $(this).val();

        $(this).val("");

        $("ul").append("<li><span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></span> " + addToDos + "</li>");
    }
});



$(".fa-plus").click(function () {
    $("#addToDo").fadeToggle();

});