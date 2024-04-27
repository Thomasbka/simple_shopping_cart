$(document).ready(function () {
  // Initial calculation of subtotals and total cart value
  $('tbody tr').each(function() {
    updateSubTotalPrice(this);
  });
  updateShoppingCartValue();

  // Recalculate subtotal on price or quantity input changes
  $(document).on('input', '.price input, .quantity input', function() {
    var row = $(this).closest('tr');
    updateSubTotalPrice(row);
    updateShoppingCartValue();
  });

  // Remove item from cart
  $(document).on('click', '.btn.remove', function () {
    $(this).closest('tr').remove();
    updateShoppingCartValue();
  });

  // Add new item to the cart
  $('#addItem').on('submit', function (event) {
    event.preventDefault();
    var name = $(this).find('[name=item]').val();
    var price = $(this).find('[name=price]').val();
    var quantity = $(this).find('[name=amount]').val();

    $('tbody').append('<tr>' +
      '<td class="name">' + name + '</td>' +
      '<td class="price"><input type="number" value="' + price + '" /></td>' +
      '<td class="quantity"><input type="number" value="' + quantity + '" /></td>' +
      '<td class="total"></td>' + // Added empty total cell for new rows
      '<td><button class="btn btn-light btn-sm remove">Remove</button></td>' +
      '</tr>');

    updateSubTotalPrice($('tbody tr:last')); // Calculate subtotal for new row
    updateShoppingCartValue(); // Update the total cart value
    this.reset(); // Reset the form inputs
  });
});

function updateSubTotalPrice(ele) {
  var price = parseFloat($(ele).find('.price input').val());
  var quantity = parseFloat($(ele).find('.quantity input').val());
  var subTotalPrice = price * quantity;
  $(ele).find('.total').text(subTotalPrice.toFixed(2)); // Ensure the subtotal is updated in the table
  return subTotalPrice;
}

function updateShoppingCartValue() {
  var totalCartValue = 0;
  $('tbody tr').each(function () {
    var subTotal = parseFloat($(this).find('.total').text());
    if (!isNaN(subTotal)) {
      totalCartValue += subTotal;
    }
  });
  $('#shoppingCartValue').text(totalCartValue.toFixed(2)); // This updates the shopping cart value element
}
