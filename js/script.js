$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var phoneInput = $("input#phone").val();
    var addressInput = $("input#address").val();
    var productInput = $("input#product").val();

    // debugger;
    $(".name").text(nameInput);
    $(".phone").text(phoneInput);
    $(".address").text(addressInput);
    $(".product").text(productInput);

    $("#story").show();
    event.preventDefault();

    $(".thankyou").show();
  });
});
