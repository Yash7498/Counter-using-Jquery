function colourSettings(check) {
    var check = $("h3").text();
    if (check == 0) {
        $("h3").css("color", "#000000");
    }
    else if (check <= 0) {
        $("h3").css("color", "red");
    }
    else {
        $("h3").css("color", "green");
    }

}
var res = 0;
$("h3").text(res);
$("h3").css("color", "#000000");
$("#btn1").click(function () {
    res--;
    $("h3").text(res);
    colourSettings(res);
});
$("#btn2").click(function () {
    res = 0;
    $("h3").text(res);
    colourSettings(res);
});
$("#btn3").click(function () {
    res++;
    $("h3").text(res);
    colourSettings(res);
});




