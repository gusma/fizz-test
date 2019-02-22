
var products = [
    { title: 'Camiseta de Futbol Adidas River Plate Away', price: 849.00, category: 'Camisetas Futbol', image: './img/cam1river.jpg', brand: 'adidaschiq' },
    { title: 'Ojotas Adidas Duramo Thong', price: 29.00, category: 'Ojotas - Chinelas', image: './img/ojotasadidas.jpg', brand: 'adidaschiq' },
    { title: 'Zapatillas Nike Roubaix', price: 450.00, category: 'Zapatillas', image: './img/zapatillasnike.jpg', brand: 'adidaschiq' },
	{ title: 'Camiseta de Futbol Adidas River Plate Home', price: 849.00, category: 'Camisetas Futbol', image: './img/cam2river.jpg', brand: 'adidaschiq' },
	{ title: 'Pantalon Jockey Dama', price: 150.00, category: 'Pantalones', image: './img/pantalonjockeydama.jpg', brand: 'jockeychiq' },
	{ title: 'Camiseta de Futbol nike Boca Home Authentic', price: 399.00, category: 'Camisetas Futbol', image: './img/camisetaboca.jpg', brand: 'nikechiq' },
	{ title: 'Short Nike Squad Strike LGR', price: 399.00, category: 'Short', image: './img/shortnike.jpg', brand: 'nikechiq' },
	{ title: 'Zapatillas Adidas Original Schoolstar CF K', price: 370.00, category: 'Zapatillas', image: './img/zapasadidas.jpg', brand: 'adidaschiq' },	
    { title: 'BotÃ­n', price: 800.44, category: 'Botines', image: 'http://placehold.it/225x225', brand: 'nikechiq' },
	{ title: 'Ojotas', price: 300.99, category: 'Ojotas', image: 'http://placehold.it/225x225', brand: 'adidaschiq' },
	{ title: 'Zapatillas', price: 1120.00, category: 'Calzado', image: 'http://placehold.it/225x225', brand: 'pumachiq' },
	{ title: 'Short', price: 320.44, category: 'Vestimenta', image: 'http://placehold.it/225x225', brand: 'nikechiq' },
	{ title: 'PantalÃ³n', price: 360.44, category: 'NataciÃ³n', image: 'http://placehold.it/225x225', brand: 'nikechiq' }	
];

$(document).ready(function() {

var container = document.getElementById('shopcart-items');
      
for (var i = 0; i < products.length; i++) {
  var galleryItem = document.createElement('div');
  galleryItem.className ='product-item';
  container.appendChild(galleryItem);

  var productImg = document.createElement('img');
  galleryItem.appendChild(productImg);
  productImg.className = 'prod-image image-effect';
  productImg.setAttribute('data-index', i + 1);
  productImg.src = products[i].image;

   var productOffer = document.createElement('div');
   productOffer.className = 'special-offer';
   galleryItem.appendChild(productOffer);
   productOffer.innerHTML = '<p>Oferta</p>';

  var productTitle = document.createElement('p');
  productTitle.className = 'prod-title';
  galleryItem.appendChild(productTitle);
  productTitle.innerHTML = products[i].title;

  var productPrice = document.createElement('p');
  productPrice.className = 'prod-price';
  productPrice.setAttribute('data-index', i + 1);
  galleryItem.appendChild(productPrice);
  productPrice.innerHTML = '$' + products[i].price.toFixed(2);

  var productBrand = document.createElement('span');
  productBrand.className = 'prod-logo' + ' ' + products[i].brand;
  galleryItem.appendChild(productBrand);
  
  var productCategory = document.createElement('p');
  productCategory.className = 'prod-category';
  galleryItem.appendChild(productCategory);
  productCategory.innerHTML = products[i].category;
}

$(".rslides").responsiveSlides({
    auto: true,
    pager: false,
    nav: false,
    speed: 500,
    maxwidth: 980,
    namespace: "transparent-btns"
  });

$('.prod-image').hover(function(){
    var index = $(this).data('index');
    $("p[data-index='" + index +"']").css({'color': 'green', 'font-size': '17px'});
  }, function(){
    var index = $(this).data('index');
    $("p[data-index='" + index +"']").css({'color': 'red', 'font-size': '15px'});
  });

  $('.prod-image').click(function(){
    console.log($(this));
  });

$("#logos").click(function(){
    $.get("http://remote.fizzmod.com/ajax.php", function(data){
        $("#logos").html('<p>' + data + '</p>');
    });
});

$('.accordion .content').hide();
$('.accordion h3:first').addClass('active').next();
        $('.accordion h3').click(function() {
        if($(this).next().is(':hidden')) {
            $('.accordion h3').removeClass('active').next().slideUp('slow');
            $(this).toggleClass('active').next().slideDown('slow');
        }
});

$(".special-offer:odd").css({
        visibility: 'hidden'
});
    
});

$(document).ready(function () {
    var menu = $('.dropdown_menu');

    $(".dropdown_menu").hide();

    $('.hoverli, .dropdown_menu').hover(
    
    function () {
        //show its sibling menu
        menu.stop().slideDown();
    },
    
    function () {
        //hide its sibling menu
        menu.stop().slideUp();
    });

});