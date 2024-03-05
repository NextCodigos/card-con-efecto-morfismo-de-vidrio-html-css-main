const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get input values for the cards
function getCardValues() {
  return new Promise((resolve) => {
    rl.question('Introduce el nombre para la tarjeta: ', (name) => {
      rl.question('Introduce el texto para la tarjeta: ', (text) => {
        resolve({ name, text });
      });
    });
  });
}

// Function to generate the HTML file with one card
async function generateSingleCardHTML() {
  const { name, text } = await getCardValues();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Single Card Example</title>
    <link rel="stylesheet" href="css/estilos-grid-una-card.css">
</head>
<body>

    <div class="container__background-triangle">
        <div class="triangle triangle1"></div>
        <div class="triangle triangle2"></div>
        <div class="triangle triangle3"></div>
    </div>

    <div class="container__cards">
        <div class="card">
            <div class="cover__card">
                <img src="images/img-1.jpg" alt="">
            </div>
            <h2>${name}</h2>
            <p>${text}</p>
            <hr>
            <div class="footer__card">
                <h3 class="user__name">${name}</h3>
                <i>08 Marzo</i>
            </div>
        </div>
    </div>
    
</body>
</html>
`;

  console.log(html);
}

// Function to generate the HTML file with three cards
async function generateTripleCardHTML() {
  const card1 = await getCardValues();
  const card2 = await getCardValues();
  const card3 = await getCardValues();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Triple Cards Example</title>
    <link rel="stylesheet" href="css/estilos-grid-una-card.css">
</head>
<body>

    <div class="container__background-triangle">
        <div class="triangle triangle1"></div>
        <div class="triangle triangle2"></div>
        <div class="triangle triangle3"></div>
    </div>

    <div class="container__cards">
        <div class="card">
            <div class="cover__card">
                <img src="images/img-1.jpg" alt="">
            </div>
            <h2>${card1.name}</h2>
            <p>${card1.text}</p>
            <hr>
            <div class="footer__card">
                <h3 class="user__name">${card1.name}</h3>
                <i>08 Marzo</i>
            </div>
        </div>

        <div class="card">
            <div class="cover__card">
                <img src="images/img-2.jpg" alt="">
            </div>
            <h2>${card2.name}</h2>
            <p>${card2.text}</p>
            <hr>
            <div class="footer__card">
                <h3 class="user__name">${card2.name}</h3>
                <i>08 Marzo</i>
            </div>
        </div>

        <div class="card">
            <div class="cover__card">
                <img src="images/img-3.jpg" alt="">
            </div>
            <h2>${card3.name}</h2>
            <p>${card3.text}</p>
            <hr>
            <div class="footer__card">
                <h3 class="user__name">${card3.name}</h3>
                <i>08 Marzo</i>
            </div>
        </div>
    </div>
    
</body>
</html>
`;

  console.log(html);
}

// Display menu
function displayMenu() {
  console.log('Menú de Ejemplos de HTML con JavaScript:');
  console.log('1. Generar HTML con una tarjeta');
  console.log('2. Generar HTML con tres tarjetas');
  console.log('3. Salir');
}

// Menu loop
async function menu() {
  while (true) {
    displayMenu();
    const option = await new Promise((resolve) => rl.question('Selecciona una opción: ', resolve));

    switch (option) {
      case '1':
        await generateSingleCardHTML();
        break;

      case '2':
        await generateTripleCardHTML();
        break;

      case '3':
        rl.close();
        process.exit(0);

      default:
        console.log('Opción inválida. Introduce un número del 1 al 3.');
    }
  }
}

// Start the menu
menu();
