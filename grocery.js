$(document).ready(function(){


  var groceries = [
  {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5, description: "Plump"},
  {name: "Onions", status: "needed", price: "1.85", quantity: 2, description: "Non-crying type"},
  {name: "Cilantro", status: "needed", price: ".95", quantity: 1, description: "Fresh"},
  {name: "Limes", status: "complete", price: ".33", quantity: 3, description: "Juicy"},
  {name: "Jalapeno", status: "complete", price: ".15", quantity: 2, description: "Spicy"}
  ];
//1. Add groceries to <ul>. Store status, price and quantity as data attributes

function genList(){
  for(i=0;i<groceries.length;i++){

   $("#list").append("<li class='listItem' data-name='"+groceries[i].name+
    "' data-status='"+groceries[i].status+
    "' data-price='"+groceries[i].price+
    "' data-quantity='"+groceries[i].quantity+
    "' data-description='"+groceries[i].description+
    "'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span><h2>"+groceries[i].name+
    "</h2></li>");
 };
};
genList();

//2. Give 'needed' items a background-color of your choosing. Do the same for 'complete' items.
//   Choose any text color you desire.
makeGreen();
makeRed();

function makeGreen(){
  $('#list').find("[data-status='needed']").css("background-color", "#4CBB17");
};

function makeRed(){
  $('#list').find("[data-status='complete']").css("background-color", "#FF3300");
};

//3. Display the item quantity next to it's name. (  i.e. Tomatoes (5)  )

$('h2').each(function(i, name){
  var currentText = $(this).text();
  $(this).text(currentText + " (" + groceries[i].quantity + ")");
});

// //4. Display total quantity and cost on the page.
//
totQuant();
totCost();


function totQuant(){
  total = 0;
  $('li').each(function(i, item){
    var quant = $(item).data('quantity');
    total += quant;
  });
  $(".quant").text(total);
  return total;

};

function totCost(){
  total = 0;
  $('li').each(function(i, item){
    var quant = $(item).data('quantity');
    var price = $(item).data('price');

    total += (quant * parseFloat(price));
  });
  $(".cost").text("$ "+total.toFixed(2));
};
//
// //5. When an item is hovered over, it's background should darken slightly. This can be done through CSS but use
// //   JS for practice.
//
$('#list').on("mouseenter", "li", function(){
  if(!$(this).hasClass("selected")){
    $(this).addClass("darken");
  }
});

$('#list').on("mouseleave", "li", function(){
  if(!$(this).hasClass("selected")){
    $(this).removeClass("darken");
  }
});

//
//
//
//6. When and item is double-clicked, give it the class 'selected' and have it's background remain slightly darkened.

$('#list').on("dblclick", "li", function(){
  $(this).toggleClass("selected");
  $(this).addClass("darken");
});

//
// //7. When 'Remove Item' is clicked, delete the item from the list. Have the item .fadeOut()
$('#removeItem').click(function(){
  $('.selected').fadeOut("fast", function(){
      // removes object from the grocery array as well as the screen
      // var name = $(this).data("name");
      // for(i=0;i<groceries.length;i++){
      //   if(name === groceries[i].name){
      //     groceries.splice(i, 1);
      //   }
      // }
    }).remove();
  totQuant();
  totCost();
});
// //8. When 'Add item' is clicked, a new item should be added to the list. 'Status' should default as 'needed'.
// //9. ** Have total quantity and cost update when items are added or removed!
//
$('.btn-success').click(function(){
  var status = "";
  if($('#splurge').prop('checked')){
    status = "splurge";
  } else {
    status = "needed"
  };
  var newObj = new Object()
  newObj.name = $('#addItem').val();
  newObj.description = $('#addDescription').val();
  newObj.price = $('#addPrice').val();
  newObj.quantity = $('#addQuantity').val();
  newObj.status = status;
  $("#list").append("<li class='listItem' data-name='"+newObj.name+
    "' data-status='"+newObj.status+
    "' data-price='"+newObj.price+
    "' data-quantity='"+newObj.quantity+
    "' data-description='"+newObj.description+
    "'><span class='glyphicon glyphicon-plus' aria-hidden='true'></span><h2>"+newObj.name+
    " ("+newObj.quantity+")</h2></li>");

  totQuant();
  totCost();
  resetVals();
  splurgeItem();
  extra();
});

function resetVals(){
  $('#addItem').val("");
  $('#addDescription').val("");
  $('#addPrice').val("");
  $('#addQuantity').val("");
  $('#splurge').prop('checked', false);
}

// //10. Add a new item with a status called 'splurge'. Any 'splurge' items should have a $$$ before the name and a
// //    unique background-color.
//
function splurgeItem(){
  var item = $('#list').find("[data-status='splurge']")
  var text = $(item).text();
  $(item).css("background-color", "#FFD700");
  $(item).children('h2').text("$$$ "+text+"");
};
//
// //11. Create a 'Tighten Budget' button that removes all splurged items from the list.
//
//
$('#tightenBudget').click(function(){
  $('#list').find("[data-status='splurge']").remove();
})
//
//
//
// //12. Add a <span> to each of your <li> items with a Plus Glyphicon (http://getbootstrap.com/components/). When
// //    this is clicked the item should expand down to reveal it's price and quantity.
//
$('#list').on("click", ".glyphicon", function(){
  $(this).siblings('.extra').slideToggle("slow", function(){

  });
});

extra();

function extra(){
  $('li').each(function(i, item){
    var price = $(item).data('price');
    var desc = $(item).data('description');
    $(this).append("<div class='extra'><h5>Price: $ "+price+
      " each</h5><h5>Description: "+desc+"</h5></div>");
  });
}
//
// //13. **BONUS** Incorporate a new property called 'description' and display it however you prefer.
//




});