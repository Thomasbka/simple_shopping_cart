var updateSubTotalPrice = function (ele) {
  var price = parseFloat($(ele).find('.price input').val());
  var quantity = parseFloat($(ele).find('.quantity input').val());
  
  if (isNaN(price) || isNaN(quantity)) {
    console.error('Invalid input for price or quantity');
    return;
  }

  var subTotalPrice = price * quantity;
  $(ele).children('.totalItemPrice').html(totalItemPrice.toFixed(2));

  return subTotalPrice;
}

var updateShoppingCartValue = function () {
  var subTotalPrice = [];
}

$(document).ready(function () {
  updateShoppingCartValue();

  $(document).on('click', '.btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateShoppingCartValue();
  });

  var timeout;
  $(document).on('input', 'tr input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateShoppingCartValue();
    }, 1000);
  })

});