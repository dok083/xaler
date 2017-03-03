// Product arrays
var grownProducts=[
  {id:"0", name: "Mulholland OG", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz", eighthprice: "$55", fourthprice: "$110", halfprice: "- - -", ozprice: "- - -", description: "hella dank"},
  {id:"1", name: "Girl Scout Cookies", type: "indica" , eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz", eighthprice: "$45", fourthprice: "$90", halfprice: "- - -", ozprice: "- - -", description: "hella dank"},
  {id:"2", name: "White Walker", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "- - -", ozprice: "- - -", description: "hella dank"},
  {id:"3", name: "Sunset Sherbet", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$35", fourthprice: "$65", halfprice: "$120", ozprice: "$200", description: "hella dank"}
];
var fullProducts=[
  {id:"0", name: "KushCo OG", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz", eighthprice: "$55", fourthprice: "$110", halfprice: "- - -", ozprice: "- - -", description: "hella dank"},
  {id:"1", name: "Skywalker OG", type: "indica" , eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz", eighthprice: "$45", fourthprice: "$90", halfprice: "- - -", ozprice: "- - -", description: "hella dank"},
  {id:"2", name: "Holy Grail OG", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "- - -", ozprice: "- - -"},
  {id:"3", name: "Pure OG", type: "indica", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$35", fourthprice: "$65", halfprice: "$120", ozprice: "$200"},
  {id:"4", name: "Pineapple Express", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$45", fourthprice: "$90", halfprice: "$160", ozprice: "- - -"},
  {id:"5", name: "Baby Blue", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$45", fourthprice: "$90", halfprice: "$160", ozprice: "$260"},
  {id:"6", name: "Banana Split", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$45", fourthprice: "$90", halfprice: "- - -", ozprice: "- - -"},
  {id:"7", name: "Strawberry Banana", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$150", ozprice: "- - -"},
  {id:"8", name: "Supreme Blue Dream", type: "sativa", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$140", ozprice: "$260"},
  {id:"9", name: "Thin Mint", type: "Hybrid", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$140", ozprice: "- - -"},
  {id:"10", name: "Forum Cookies", type: "Hybrid", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$140", ozprice: "- - -"},
  {id:"11", name: "Purple Kryptonite", type: "Hybrid", eighth: "1/8 oz", fourth: "1/4 oz", half: "1/2 oz", oz: "1 oz",  eighthprice: "$40", fourthprice: "$80", halfprice: "$150", ozprice: "$260"},
  {id:"12", name: "Nug Run - White Walker (Shatter)", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$26", oneprice: "$48", twoprice: "$92"},
  {id:"13", name: "Skywalker OG Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$45", twoprice: "$85"},
  {id:"14", name: "Green Crack Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$45", twoprice: "$85"},
  {id:"15", name: "Animal Spirits - Holy Grail OG Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$40", twoprice: "$92"},
  {id:"16", name: "Animal Spirits - Girl Scout Cookies Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$40", twoprice: "- - -"},
  {id:"17", name: "Animal Spirits - Blue Dream Vape Cartridge", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$40", twoprice: "$80"},
  {id:"18", name: "Blue Dream Shatter", type:"concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "$25", oneprice: "$45", twoprice: "$85"},
  {id:"19", name: "Brass Knuckles - Jack Herer", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"20", name: "Brass Knuckles - Strawberry Cough", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"21", name: "Brass Knuckles - Candy Apple", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"22", name: "Brass Knuckles - Blue Dream", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"23", name: "Brass Knuckles - Gorilla Glue", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"24", name: "Brass Knuckles - Girl Scout Cookies", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"25", name: "Brass Knuckles - Raw", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"26", name: "Brass Knuckles - Abracadabra", type:"hybrid concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"27", name: "Brass Knuckles - Blueberry", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"28", name: "Brass Knuckles - Grape Ape", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"29", name: "Brass Knuckles - Purple Haze", type:"sativa concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"30", name: "Brass Knuckles - SFV OG", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"31", name: "Brass Knuckles - Skywalker OG", type:"indica concentrate", half: "0.5 g", one: "1 g", two: "2 g", halfprice: "- - -", oneprice: "$60", twoprice: "- - -"},
  {id:"32", name: "Kiva - Ginger Dark Chocolate", type:"edible", per: "each", price: "$32"},
  {id:"33", name: "Kiva Bar - 4 Flavors", type:"edible", per: "each", price: "$20"},
  {id:"34", name: "Kiva - Expresso Dark Chocolate", type:"edible", per: "each", price: "$20"},
  {id:"35", name: "Kiva - Terra Bites - Expresso Beans", type:"edible", per: "each", price: "$18"},
  {id:"36", name: "Kiva - Terra Bites - Blueberries", type:"edible", per: "each", price: "$18"},
  {id:"37", name: "Kiva Bar", type:"edible", per: "each", price: "$18"},
  {id:"38", name: "HealthCare Bar - Vegan", type:"edible", per: "each", price: "$10"},
  {id:"39", name: "Brass Knuckes - Adjustable Voltage Gold Battery", type:"gear", per: "each", price: "$30"},
  {id:"40", name: "Brass Knuckes - Gold Vape Battery", type:"gear", per: "each", price: "$25"},
  {id:"41", name: "Brass Knuckes - Woodgrain Battery", type:"gear", per: "each", price: "$25"}
];

// show selection of quantity
function selectQuantity(){
  $(this).css({'background-color': 'blue', 'color': 'white'});
  $(this).siblings().css({'background-color': 'white', 'color': 'black'});
}

function closeModal(){
  $('#productModal').modal('close');
  $('#cartModal').modal('open');
}

function grownModal(){
  var id = $(this).attr('id')
  var productInfo = grownProducts[id];
  var productTemplate = $('#productTemplate').html();
  var productScript = Handlebars.compile(productTemplate);
  var productContent = productInfo;
  var productHtml = productScript(productContent);
  $(document.body).append(productHtml);
  $('#productModal').modal({endingTop: '50%'});

  // Remove blank labeled buttons
  var productQuantityModal = document.querySelectorAll('#productModal .quantity');
  for(i = 0; i < productQuantityModal.length; i++){
    console.log('yo');
    productQuantityModal[i].addEventListener('click', selectQuantity);
    if(productQuantityModal[i].textContent == ''){
      productQuantityModal[i].style.display = 'none';
    }
  }

  //close Modal when add to cart
  $('#productModal .addCart').click(closeModal);
}

function fullModal(){
  var id = $(this).attr('id')
  var productInfo = fullProducts[id];
  var productTemplate = $('#productTemplate').html();
  var productScript = Handlebars.compile(productTemplate);
  var productContent = productInfo;
  var productHtml = productScript(productContent);
  $(document.body).append(productHtml);
  $('#productModal').modal({endingTop: '50%'});

  // Remove blank labeled buttons
  var productQuantityModal = document.querySelectorAll('#productModal .quantity');
  for(i = 0; i < productQuantityModal.length; i++){
    console.log('yo');
    productQuantityModal[i].addEventListener('click', selectQuantity);
    if(productQuantityModal[i].textContent == ''){
      productQuantityModal[i].style.display = 'none';
    }
  }
}

$(document).ready(function() {
  // Register Partials
  Handlebars.registerPartial(
    'fullTemplate', $('#fullPartial').html()
  );
  Handlebars.registerPartial(
    'grownTemplate', $('#grownPartial').html()
  );
  Handlebars.registerPartial(
    'productTemplate', $('#productPartial').html()
  );

  var fullTemplate = $('#fullTemplate').html();
  var fullScript = Handlebars.compile(fullTemplate);
  var fullContent = {fullMenu: fullProducts};
  var fullHtml = fullScript(fullContent);

  var grownTemplate = $('#grownTemplate').html();
  var grownScript = Handlebars.compile(grownTemplate);
  var grownContent = {grownMenu: grownProducts};
  var grownHtml = grownScript(grownContent);

  $(document.body).append(grownHtml);
  $(document.body).append(fullHtml);

  $('.grownModal').click(grownModal);
  $('.fullModal').click(fullModal);

  // Carousel
  $('.slider').slider();
  $('.slider').slider('pause');
  $('.slider').slider('start');
  $('.slider').slider('next');
  $('.slider').slider('prev');

  // Remove blank labeled buttons
  var quantityButton = document.querySelectorAll('.quantity');
  for(i = 0; i < quantityButton.length; i++){
    quantityButton[i].addEventListener('click', selectQuantity);
    if(quantityButton[i].textContent == ''){
      quantityButton[i].style.display = 'none';
    }
  }

  //Alert added to cart
  $('#cartModal').modal({endingTop: '50%'});

});
