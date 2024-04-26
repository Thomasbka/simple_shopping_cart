var updateSubTotalPrice = function (ele) {
  var price = parseFloat($(ele).find('.price input').val());
  var quantity = parseFloat($(ele).find('.quantity input').val());
  
  var subTotalPrice = price * quantity;
  $(ele).find('.total').text(subTotalPrice.toFixed(2));

  return subTotalPrice;
}

var updateShoppingCartValue = function () {
  var subTotalPrice = [];
}

$(document).ready(function () {
  $('tr').each(function() {
    updateSubTotalPrice(this);
  });

  $(document).on('input', '.price input, .quantity input', function() {
    var row = $(this).closest('tr');
    updateSubTotalPrice(row);
  });
});


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

