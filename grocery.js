// ***You will need to add the necessary script tags for jQuery and grocery.js to index.html***

$(document).ready(function(){

  var groceries = [
    {name: "Tomatoes", status: "needed", price: "3.99", quantity: 5},
    {name: "Onions", status: "needed", price: "1.85", quantity: 2},
    {name: "Cilantro", status: "needed", price: ".95", quantity: 1},
    {name: "Limes", status: "complete", price: ".33", quantity: 3},
    {name: "Jalapeno", status: "complete", price: ".15", quantity: 2}
  ];

//1. Add groceries to <ul>. Store status, price and quantity as data attributes
for(i = 0; i < groceries.length; i++) {
  $("#list").append("<li class='listItem' data-status='" + groceries[i].status + "' data-price='" + groceries[i].price + "' data-quantity='" + groceries[i].quantity + "'><h2>" + groceries[i].name + "</h2></li>");
}

//2. Give 'needed' items a background-color of your choosing. Do the same for 'complete' items.
//   Choose any text color you desire.
$( "li[data-status*='needed']" ).css('background-color', '#FFB00F');
$('li[data-status*="complete"]').css('background-color', 'green');

//3. Display the item quantity next to it's name. (  i.e. Tomatoes (5)  )
for(i = 0; i < groceries.length; i++) {
  $("#list").append("'<p>' + .listItem.quantity + ' ' + '</p>'");
}
// $("'<p>' + .listItem.quantity + ' ' + '</p>'").appendTo(".listItem");

//4. Display total quantity and cost on the page.
function totalCost(cost) {
	for (i = 0; i < groceries[i].price.length; i++) {
		var groceriesPrice = parseFloat(groceries[0].price) + parseFloat(groceries[1].price) + parseFloat(groceries[2].price) + parseFloat(groceries[3].price) + parseFloat(groceries[4].price);
		var groceriesCost = groceriesPrice.toFixed(2);
	}
}

//5. When an item is hovered over, it's background should darken slightly. This can be done through CSS but use
//   JS for practice.

//6. When and item is double-clicked, give it the class 'selected' and have it's background remain slightly darkened.

//7. When 'Remove Item' is clicked, delete the item from the list. Have the item .fadeOut()

//8. When 'Add item' is clicked, a new item should be added to the list. 'Status' should default as 'needed'.

//9. ** Have total quantity and cost update when items are added or removed!

//10. Add a new item with a status called 'splurge'. Any 'splurge' items should have a $$$ before the name and a
//    unique background-color.

//11. Create a 'Tighten Budget' button that removes all splurged items from the list.

//12. Add a <span> to each of your <li> items with a Plus Glyphicon (http://getbootstrap.com/components/). When
//    this is clicked the item should expand down to reveal it's price and quantity.

//13. **BONUS** Incorporate a new property called 'description' and display it however you prefer.





});
