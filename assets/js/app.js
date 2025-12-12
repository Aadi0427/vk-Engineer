// contacts form-- js

  const form = document.getElementById("contactForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // page refresh OFF

    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xyzrbwrv", {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      status.innerHTML = "Message sent successfully!";
      form.reset();
    } else {
      status.innerHTML = "Oops! Something went wrong.";
    }
  });
