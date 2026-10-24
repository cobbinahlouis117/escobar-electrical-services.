
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0b2345">
  <meta name="description" content="Escobar Electrical Services provides electrical installation, repairs, home wiring and maintenance in Dansoman and across Ghana.">
  <title>Escobar Electrical Services | Ghana</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f3f6fb;
      color: #222;
      line-height: 1.6;
    }

    header {
      background: #0b2345;
      color: white;
      padding: 28px 15px;
      text-align: center;
    }

    header h1 {
      font-size: 28px;
      margin-bottom: 8px;
    }

    header p {
      color: #d8e6ff;
    }

    nav {
      background: #123661;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 18px;
      padding: 14px 10px;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }

    nav a:hover {
      color: #25d366;
    }

    .hero {
      background: linear-gradient(135deg, #0b2345, #1767a5);
      color: white;
      text-align: center;
      padding: 65px 20px;
    }

    .hero h2 {
      font-size: 32px;
      margin-bottom: 15px;
    }

    .hero p {
      max-width: 650px;
      margin: 0 auto 22px;
    }

    .button {
      display: inline-block;
      padding: 13px 22px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      margin: 7px;
    }

    .green {
      background: #25d366;
      color: #07391c;
    }

    .white {
      background: white;
      color: #0b2345;
    }

    .blue {
      background: #1767a5;
      color: white;
    }

    .section {
      padding: 48px 18px;
      text-align: center;
    }

    .section h2 {
      color: #0b2345;
      font-size: 28px;
      margin-bottom: 12px;
    }

    .intro {
      max-width: 650px;
      margin: 0 auto 25px;
      color: #555;
    }

    .services {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      max-width: 1000px;
      margin: 25px auto 0;
    }

    .card {
      background: white;
      padding: 28px 20px;
      border-radius: 15px;
      box-shadow: 0 5px 18px #0000000d;
    }

    .emoji {
      font-size: 36px;
      margin-bottom: 10px;
    }

    .card h3 {
      color: #123661;
      font-size: 21px;
      margin-bottom: 12px;
    }

    .card p {
      color: #555;
    }

    .why,
    .location {
      background: white;
    }

    .reasons {
      max-width: 600px;
      margin: 20px auto 0;
      text-align: left;
    }

    .reasons p {
      padding: 8px 0;
    }

    .location-box,
    .contact-box {
      max-width: 650px;
      margin: 25px auto 0;
      padding: 28px 18px;
      background: #f3f6fb;
      border-radius: 15px;
      box-shadow: 0 5px 18px #0000000d;
    }

    .location-box h3,
    .contact-box h3 {
      color: #123661;
      margin-bottom: 12px;
    }

    .location-box p,
    .contact-box p {
      margin: 12px 0;
    }

    footer {
      background: #0b2345;
      color: white;
      text-align: center;
      padding: 28px 15px;
    }

    footer p + p {
      margin-top: 8px;
      color: #d8e6ff;
    }

    .float-whatsapp {
      position: fixed;
      bottom: 20px;
      right: 16px;
      background: #25d366;
      color: #07391c;
      padding: 13px 17px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      box-shadow: 0 4px 12px #0003;
      z-index: 10;
    }

    @media (max-width: 480px) {
      header h1 {
        font-size: 24px;
      }

      .hero h2 {
        font-size: 27px;
      }

      nav {
        gap: 12px;
      }
    }
  </style>
</head>

<body>

  <header>
    <h1>⚡ Escobar Electrical Services</h1>
    <p>Quality Work. Reliable Service.</p>
    <p>📍 Based in Dansoman, serving all of Ghana</p>
  </header>

  <nav>
    <a href="#home">Home</a>
    <a href="#services">Services</a>
    <a href="#about">About</a>
    <a href="#location">Location</a>
    <a href="#contact">Contact</a>
  </nav>

  <section class="hero" id="home">
    <h2>Your Trusted Electrical Expert</h2>
    <p>
      Professional electrical installation, repairs, home wiring
      and maintenance. Based in Dansoman, Accra, and available
      for jobs across Ghana.
    </p>

    <a class="button green"
       href="https://wa.me/233257674192?text=Hello%20Escobar%20Electrical%20Services%2C%20I%20need%20electrical%20services."
       target="_blank" rel="noopener noreferrer">
      💬 Contact Us on WhatsApp
    </a>

    <a class="button white" href="#services">
      Explore Our Services
    </a>
  </section>

  <section class="section" id="services">
    <h2>Our Services</h2>
    <p class="intro">
      Electrical solutions for homes, shops, offices and businesses.
    </p>

    <div class="services">
      <div class="card">
        <div class="emoji">💡</div>
        <h3>Light Installation</h3>
        <p>Installation of lights, switches and sockets.</p>
      </div>

      <div class="card">
        <div class="emoji">🔧</div>
        <h3>Electrical Repairs</h3>
        <p>Electrical fault finding and repair services.</p>
      </div>

      <div class="card">
        <div class="emoji">🏠</div>
        <h3>Home Wiring</h3>
        <p>Electrical wiring and maintenance for homes.</p>
      </div>

      <div class="card">
        <div class="emoji">🏢</div>
        <h3>Commercial Wiring</h3>
        <p>Electrical installations for shops and offices.</p>
      </div>

      <div class="card">
        <div class="emoji">🔌</div>
        <h3>Socket Installation</h3>
        <p>Installation and replacement of electrical sockets.</p>
      </div>

      <div class="card">
        <div class="emoji">🛠️</div>
        <h3>Maintenance</h3>
        <p>Electrical checks and maintenance to help keep systems safe.</p>
      </div>
    </div>
  </section>

  <section class="section why" id="about">
    <h2>About Our Business</h2>
    <p class="intro">
      Escobar Electrical Services aims to provide dependable
      electrical services with careful workmanship and attention
      to safety.
    </p>

    <div class="reasons">
      <p>✅ Careful workmanship</p>
      <p>✅ Reliable customer service</p>
      <p>✅ Residential and commercial electrical work</p>
      <p>✅ Based in Dansoman, Accra</p>
      <p>✅ Available for projects across Ghana</p>
    </div>
  </section>

  <section class="section location" id="location">
    <h2>Our Location</h2>
    <p class="intro">
      Our base is in Dansoman, Accra, Ghana. We welcome enquiries
      for electrical jobs from customers throughout Ghana.
    </p>

    <div class="location-box">
      <div class="emoji">📍</div>
      <h3>Dansoman, Accra, Ghana</h3>
      <p><strong>Service coverage:</strong> Across Ghana</p>
      <p>
        Contact us to discuss your location, project and
        travel arrangements.
      </p>

      <a class="button blue"
         href="https://www.google.com/maps/search/?api=1&query=Dansoman%2C+Accra%2C+Ghana"
         target="_blank" rel="noopener noreferrer">
        📍 Find Dansoman on Google Maps
      </a>
    </div>
  </section>

  <section class="section" id="contact">
    <h2>Contact Us</h2>
    <p class="intro">
      Need an electrician? Message us to discuss your project
      and arrange service.
    </p>

    <div class="contact-box">
      <h3>Escobar Electrical Services</h3>
      <p>📱 WhatsApp: 0257674192</p>
      <p>📍 Dansoman, Accra — serving all of Ghana</p>

      <a class="button green"
         href="https://wa.me/233257674192?text=Hello%20Escobar%20Electrical%20Services%2C%20I%20need%20electrical%20services."
         target="_blank" rel="noopener noreferrer">
        💬 Chat with Us on WhatsApp
      </a>

      <p>We look forward to hearing from you!</p>
    </div>
  </section>

  <footer>
    <p>© <span id="year"></span> Escobar Electrical Services</p>
    <p>Quality Work. Reliable Service.</p>
    <p>Dansoman, Accra, Ghana | Serving all of Ghana</p>
  </footer>

  <a class="float-whatsapp"
     href="https://wa.me/233257674192?text=Hello%20Escobar%20Electrical%20Services"
     target="_blank" rel="noopener noreferrer"
     aria-label="Contact Escobar Electrical Services on WhatsApp">
    WhatsApp 💬
  </a>

  <script>
    document.getElementById("year").textContent =
      new Date().getFullYear();
  </script>

</body>
</html>
