var Shop = [];
$(".spend").click(function() {
    var cart = $(".money").val();
    Shop.push(cart);
 $(".Shop").append("<li>" + cart + "</li>");
    var numItems = Shop.length;
    $(".numberOfItems").text(numItems);
});
      


var cost = [];
 $(".notBad").click(function(){
     var pay = $(".howMuch").val();
     cost.push(pay);
     $(".priceList").append("<li>" + pay + "</li>");
     var numPrices = cost.length;
     $(".numberOfPrices").text(numPrices);
});