
//what we do section //
$(".design").click(function () {
    $("#design-p").toggle();
    $("#design").toggle();
});
$(".development").click(function () {
    $("#dev-p").toggle();
    $("#dev").toggle();
});
$(".product").click(function () {
    $("#product-p").toggle();
    $("#product").toggle();
});



$("#submit").click(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var mail = $("mail").val();
    var text = $("#text").val();
    //var key = '43ab10333d46e19325f96d210ed40c49-us5';//
    if (name == "" || mail == "" || text == "") {
        alert("hi" + " " + name + " " + "we have recieved Your message .Thank you for reaching out to us")
    } else {
        alert("please make sure you have filled in the form correctly")
    }
})


