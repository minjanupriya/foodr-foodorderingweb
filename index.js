// let food = [];
let totalAmount = 0;

$(document).ready(function () {
  if ($(document).width() <= 992) {
    $(".navbar-nav").removeClass("ml-auto");
    $(".navbar-nav").addClass("mr-auto");
  } else {
    $(".navbar-nav").removeClass("mr-auto");
    $(".navbar-nav").addClass("ml-auto");
  }

  var scrollToTopBtn = $("#scrollToTop");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      scrollToTopBtn.addClass("show");
    } else {
      scrollToTopBtn.removeClass("show");
    }
  });

  scrollToTopBtn.on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "500"
    );
  });

  $(".navbar a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // console.log(this);
      // console.log(this.hash);
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $(".homeBtn").click(function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    }
  });

  $(".product-box-layout4").click(function () {
    $(this)
      .toggleClass("productClicked")
      .parent()
      .siblings("div")
      .children()
      .removeClass("productClicked");
    if ($(this)[0].className.search("momos productClicked") > -1) {
      $("#momos").show().siblings("div").hide();

      $("html, body").animate(
        {
          scrollTop: $("#momos").offset().top,
        },
        800,
        function () {}
      );
    } else if ($(this)[0].className.search("chinese productClicked") > -1) {
      $("#chinese").show().siblings("div").hide();

      $("html, body").animate(
        {
          scrollTop: $("#chinese").offset().top,
        },
        800,
        function () {}
      );
    } else if ($(this)[0].className.search("beverages productClicked") > -1) {
      $("#beverages").show().siblings("div").hide();

      $("html, body").animate(
        {
          scrollTop: $("#beverages").offset().top,
        },
        800,
        function () {}
      );
    }
  });

  $(".menuBtn").click(function () {
    let quantity = $(this).siblings(".quantity");
    let foodNameClicked = quantity
      .parent()
      .siblings("div")
      .children()
      .first()
      .text()
      .trim();
    let singleFoodAmount = Number(
      quantity.parent().siblings("div").children().last().text()
    );
    let isVeg = quantity
      .parent()
      .siblings("div")
      .children()
      .first()
      .children()
      .first()
      .children()
      .hasClass("vegIcon");

    let count = Number(quantity.text());
    if ($(this)[0].className.search("plus") > -1) {
      count = count + 1;
      quantity.text(count);
      ToCart(foodNameClicked, count, isVeg, singleFoodAmount);
    } else if ($(this)[0].className.search("minus") > -1) {
      if (count <= 0) {
        quantity.text(0);
      } else {
        count = count - 1;
        quantity.text(count);
        ToCart(foodNameClicked, count, isVeg, singleFoodAmount);
      }
    }
  });

  function ToCart(foodNameClicked, foodQuantity, isVeg, singleFoodAmount) {
    let foodAlreadyThere = false;
    let foodPos;
    let node;
    if (isVeg) {
      node = '<img class="vegIcon" src="./images/veg.webp" alt="" />';
    } else {
      node = '<img class="nonVegIcon" src="./images/non-veg.webp" alt="" />';
    }
    for (var i = 0; i < food.length; i++) {
      if (food[i][0] === foodNameClicked) {
        foodAlreadyThere = true;
        foodPos = i;
        break;
      } else {
        foodAlreadyThere = false;
      }
    }

    if (foodAlreadyThere) {
      food.splice(foodPos, 1);
      food.push([foodNameClicked, foodQuantity, singleFoodAmount, node]);
    } else {
      food.push([foodNameClicked, foodQuantity, singleFoodAmount, node]);
    }

    // Remove Food items with quantity = 0
    for (var i = 0; i < food.length; i++) {
      if (food[i][1] === 0) {
        food.splice(i, 1);
      }
    }

    if (food.length !== 0) {
      $(".shoppingCart").addClass("shoppingCartWithItems");

      $(".cartContentDiv").empty();
      for (var i = 0; i < food.length; i++) {
        let cartTxt =
          '<div class="row cartContentRow"><div class="col-10"><div style="display:flex;"><p>' +
          food[i][0] +
          '</p> <p class="text-muted-small">' +
          food[i][3] +
          '<p></div><i class="fas fa-rupee-sign"> ' +
          food[i][2] +
          '</i></p>  </div>  <div class="col-2"> <p class="text-muted-small" > <i class="fas fa-rupee-sign"></i> ' +
          food[i][1] * food[i][2] +
          '</p>  <span class="cartQuantity"> ' +
          " <span> Qty : </span>" +
          food[i][1] +
          '</span> </div>  </div> <hr class="cartHr">';
        $(".cartContentDiv").append(cartTxt);
      }
    } else {
      $(".shoppingCart").removeClass("shoppingCartWithItems");

      $(".cartContentDiv").empty();
      $(".cartContentDiv").append(
        '<h1 class="text-muted">Your Cart is Empty</h1>'
      );
    }

    $(".shoppingCartAfter").text(food.length);

    if (food.length === 0) {
      totalAmount = 0;
    } else {
      totalAmount = totalAmount + singleFoodAmount;
    }

    $(".totalAmountDiv").empty();
    $(".totalAmountDiv").append(
      '<span class="totalAmountText">TOTAL AMOUNT : </span><br/>' +
        '<i class="fas fa-rupee-sign"></i> ' +
        totalAmount
    );
  }
});

//function openWhatsapp() {
  // console.log($('#address'));

  // if ($("#address")[0].value === "") {
  //   alert("Please Enter Address");
  //   return;
  // } else {
  //   let total = 0;
  //   let address = $("#address")[0].value;
  //   let note = $("#note")[0].value;
  //   let wTxt = "*name*               *quantity* \n";

  //   for (var i = 0; i < food.length; i++) {
  //     let name = food[i][0];
  //     let quantity = food[i][1];
  //     total = total + food[i][1] * food[i][2];
  //     wTxt = wTxt + name + "      " + quantity + "  \n";
  //   }

  //   if ($("#note")[0].value === "") {
  //     wTxt =
  //       wTxt + "\n *Total Bill: " + total + "*" + "\n\n Address: " + address;
  //   } else {
  //     wTxt =
  //       wTxt +
  //       "\n *Total Bill: " +
  //       total +
  //       "*" +
  //       "\n\n Address: " +
  //       address +
  //       "\n Note: " +
  //       note;
  //   }

  //   let wTxtEncoded = encodeURI(wTxt);
  //   window.open("https://wa.me/917428789065?text=" + wTxtEncoded);
  // }
  // function makePayment() {
  //   // Perform necessary actions to initiate the payment using Google Pay or PhonePe
  //   // For example, you can show a payment dialog or redirect the user to a payment gateway
  
  //   // Example Google Pay integration code
  //   // Replace with your own implementation
  //   const paymentAmount = totalAmount; // Get the total amount to be paid
  //   const currency = 'USD'; // Set the currency for the payment
  
  //   // Create a payment request using the Payment Request API
  //   const paymentRequest = new PaymentRequest(
  //     [
  //       {
  //         supportedMethods: 'https://your-payment-gateway.com/pay',
  //         data: {
  //           environment: 'TEST',
  //           apiVersion: 2,
  //           allowedPaymentMethods: ['TOKENIZED_CARD'],
  //           paymentMethodTokenizationParameters: {
  //             tokenizationType: 'PAYMENT_GATEWAY',
  //             parameters: {
  //               gateway: 'your_payment_gateway',
  //               gatewayMerchantId: 'your_merchant_id',
  //             },
  //           },
  //           cardRequirements: {
  //             allowedCardNetworks: ['VISA', 'MASTERCARD'],
  //           },
  //         },
  //       },
  //     ],
  //     {
  //       total: {
  //         label: 'Total Amount',
  //         amount: {
  //           currency: currency,
  //           value: paymentAmount.toFixed(2), // Format the amount with 2 decimal places
  //         },
  //       },
  //     }
  //   );
  
  //   // Show the payment dialog to the user
  //   paymentRequest.show()
  //     .then(function(paymentResponse) {
  //       // Process the payment response and handle the success or failure
  //       console.log(paymentResponse);
  //     })
  //     .catch(function(error) {
  //       // Handle errors that occur during the payment process
  //       console.error('Payment error:', error);
  //     });
//}


/** Launches payment request flow when user taps on buy button. */
function onOrderNow() {
  if (!window.PaymentRequest) {
    console.log('Web payments are not supported in this browser.');
    return;
  }

  // Create supported payment method.
  const supportedInstruments = [
    {
      supportedMethods: ['https://tez.google.com/pay'],
      data: {
        pa: 'merchant-vpa@xxx',
        pn: 'Merchant Name',
        tr: '1234ABCD',  // Your custom transaction reference ID
        url: 'https://url/of/the/order/in/your/website',
        mc: '1234', //Your merchant category code
        tn: 'Purchase in Merchant',
      },
    }
  ];

  // Create order detail data.
  const details = {
    total: {
      label: 'Total',
      amount: {
        currency: 'INR',
        value: '10.01', // sample amount
      },
    },
    displayItems: [{
      label: 'Original Amount',
      amount: {
        currency: 'INR',
        value: '10.01',
      },
    }],
  };

  // Create payment request object.
  let request = null;
  try {
    request = new PaymentRequest(supportedInstruments, details);
  } catch (e) {
    console.log('Payment Request Error: ' + e.message);
    return;
  }
  if (!request) {
    console.log('Web payments are not supported in this browser.');
    return;
  }

  var canMakePaymentPromise = checkCanMakePayment(request);
  canMakePaymentPromise
    .then((result) => {
      showPaymentUI(request, result);
    })
    .catch((err) => {
      console.log('Error calling checkCanMakePayment: ' + err);
    });
}

// Show the payment request UI.
function showPaymentUI(request, canMakePayment) {
  if (!canMakePayment) {
    handleNotReadyToPay();
    return;
  }

  // Set payment timeout.
  let paymentTimeout = window.setTimeout(function() {
    window.clearTimeout(paymentTimeout);
    request.abort()
      .then(function() {
        console.log('Payment timed out after 20 minutes.');
      })
      .catch(function() {
        console.log('Unable to abort, user is in the process of paying.');
      });
  }, 20 * 60 * 1000); /* 20 minutes */

  request.show()
    .then(function(instrument) {
      window.clearTimeout(paymentTimeout);
      processResponse(instrument); // Handle response from browser.
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Attach the onOrderNow function to the "Order Now" button click event
$(".orderNowBtn").click(function () {
  onOrderNow();
});
