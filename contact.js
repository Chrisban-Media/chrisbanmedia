document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get input values
    let name = document.getElementById("fullname").value;
    let phone = document.getElementById("tel").value;
    let message = document.getElementById("message").value;

    // Construct WhatsApp message
    let whatsappMessage = `Hello, my name is ${encodeURIComponent(
      name
    )}. My phone number is ${encodeURIComponent(phone)}. ${encodeURIComponent(
      message
    )}`;

    // WhatsApp URL
    let whatsappUrl = `https://wa.me/2348145626046?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  });
