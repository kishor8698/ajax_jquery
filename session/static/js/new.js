
$(document).ready(function()
{
    $(".post").hover(function()
    {
        $(this).css("background-color", "aquamarine");
    }, 
    function()
    {
        $(this).css("background-color", "cornflowerblue");
    });
});
