<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portafolio de Nadia</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=DM+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'DM Sans', sans-serif;
      background-color: white;
      color: #333;
    }

    /* Navbar */
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 89px;
      background-color: white;
      box-shadow: 0px 4px 12.1px -2px rgba(255, 0, 82, 0.3);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
    }

    .logo {
      font-weight: 900;
      font-size: 40px;
      color: #ff0052;
      opacity: 0.9;
    }

    nav a {
      margin-left: 40px;
      font-size: 18px;
      color: #ff0052;
      text-decoration: underline;
      font-style: italic;
      font-weight: 300;
    }

    /* Main content */
    main {
      padding-top: 130px;
      padding-bottom: 60px;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    h1 {
      font-size: 30px;
      margin-bottom: 60px;
      font-weight: 500;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 40px;
      justify-items: center;
    }

    .card {
      width: 299px;
      text-align: center;
    }

    .card img {
      width: 100%;
      height: 299px;
      background-color: #ddd;
      object-fit: cover;
      border-radius: 16px;
      margin-bottom: 20px;
    }

    .card h2 {
      font-size: 24px;
      font-family: 'DM Mono', monospace;
      font-weight: 500;
      margin-bottom: 10px;
    }

    .card p {
      font-size: 18px;
      font-family: 'DM Sans', sans-serif;
      font-weight: 400;
      max-width: 322px;
      margin: 0 auto;
    }

    /* Back to top button */
    .back-top {
      margin-top: 60px;
      font-size: 40px;
      color: #ff0052;
      font-weight: 900;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <header>
    <div class="logo">Nadia</div>
    <nav>
      <a href="#">About</a>
      <a href="#">Proyectos</a>
      <a href="#">Contacto</a>
    </nav>
  </header>

  <main>
    <h1>Proyectos :)</h1>

    <div class="grid">
      <div class="card">
        <img src="proyecto1.jpg" alt="Andean Republic" />
        <h2>Andean Republic</h2>
        <p>Identidad visual y diseño de packaging.</p>
      </div>

      <div class="card">
        <img src="proyecto2.jpg" alt="Notas de identidad" />
        <h2>Notas de identidad</h2>
        <p>Diseño editorial; diagramación, impresión y publicación A5.</p>
      </div>

      <div class="card">
        <img src="proyecto3.jpg" alt="CC BELLAS ARTES" />
        <h2>CC BELLAS ARTES</h2>
        <p>Identidad visual y campaña publicitaria.</p>
      </div>

      <div class="card">
        <img src="proyecto4.jpg" alt="Miski Raymi" />
        <h2>Miski Raymi</h2>
        <p>Identidad visual y diseño de packaging.</p>
      </div>

      <div class="card">
        <img src="proyecto5.jpg" alt="Open city" />
        <h2>Open city</h2>
        <p>Diseño editorial; diagramación impresión y publicación.</p>
      </div>
    </div>

    <div class="back-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">↑</div>
  </main>

</body>
</html>

