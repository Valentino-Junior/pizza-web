function addCart() { //function for placing an order
    //get inputs from form
    var name = $("#name").val();
    var size = $(".Pizzasize").val();
    var crust = $(".Pizzacrust").val();
    var toppings = $(".Pizzatoppings").val();
    var quantity = $("#pizzanumber").val();


    var sizeCost; //set prices for different pizza sizes
    if (size == "Large") {
        sizeCost = 1200;
    }else if (size == "Medium") {
        sizeCost = 950;
    }else if (size == "Small") {
        sizeCost = 650;
    }

var crustCost; //set prices for different crust types
if (crust === "Thick Crust") {
    crustCost = 300;
} else if (crust === "Thin Crust") {
    crustCost = 150;
} else if (crust === "Stuffed Crust") {
    crustCost = 200;
} else if (crust === "Deep Crust") {
    crustCost = 250;
}

var toppingsCost; //set prices for different topping types
if (toppings === "Sausage") {
    toppingsCost = 160;
}else if (toppings === "Mushroom") {
    toppingsCost = 140;
}else if (toppings === "Pepperoni") {
    toppingsCost = 150;
}else if (toppings === "Onions") {
    toppingsCost = 130;
}else if (toppings === "Bacon") {
    toppingsCost = 180;
}


var total = (sizeCost + crustCost + toppingsCost);
var totalCost =  parseInt(total * quantity);

$(".Pizzasize").append('<tr><td class ="Pizza Size">' + size);
      $(".Pizzacrust").append('<tr><td class ="Pizza Crust">' + crust);
      $(".Pizzatoppings").append('<tr><td class="Pizza Toppings">' + toppings);
      $(".quantity").append('<tr><td class="Quantity">' + quantity);
      $(".Grand Total").append('<tr><td class="Total">' + totalCost);
}

function delivered() {
    $(".delivery").show();
    var location = capitalize_inputs($("input#location").val()); //get delivery details
    var phone = $("input#phone").val();
    $(".del").text(location);
  }

  $(document).ready(function () {
      $("#submitmain").click(function (e) {
          e.preventDefault()
        $("#pic").hide()
      })
  })

  function checko() {
    $("#pic").show();
  }

  function delivered () {
    $(".deliv").show();
    $("#pic").hide();
    $(".delivery").show()
  }