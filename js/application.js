var updateShoppingCartValue = function () {
  var price = [];
  var quantity = [];

  
}

$(document).ready(function () {
  updateShoppingCartValue;

  $(document).on('click', 'btn.remove', function (event) {
    $(this).closest('tr').remove();
    updateShoppingCartValue();
  })

});