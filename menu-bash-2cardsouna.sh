#!/bin/bash

# Function to get input values for the cards
get_card_values() {
  echo "Introduce el nombre para la primera tarjeta:"
  read -r NAME_1

  echo "Introduce el texto para la primera tarjeta:"
  read -r TEXT_1
}

# Function to generate the HTML file with one card
generate_single_card_html() {
  cat <<EOF >single_card_example.html
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
            <h2>$NAME_1</h2>
            <p>$TEXT_1</p>
            <hr>
            <div class="footer__card">
                <h3 class="user__name">$NAME_1</h3>
                <i>08 Marzo</i>
            </div>
        </div>
    </div>
    
</body>
</html>
EOF
}

# Function to generate the HTML file with two cards
generate_double_card_html() {
  cat <<EOF >double_cards_example.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Double Cards Example</title>
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
            <h2>$NAME_1</h2>
            <p>$TEXT_1</p>
            <hr>
            <div class="footer__card">
                <h3 class="user__name">$NAME_1</h3>
                <i>08 Marzo</i>
            </div>
        </div>

        <div class="card">
            <div class="cover__card">
                <img src="images/img-2.jpg" alt="">
            </div>
            <h2>$NAME_2</h2>
            <p>$TEXT_2</p>
            <hr>
            <div class="footer__card">
                <h3 class="user__name">$NAME_2</h3>
                <i>08 Marzo</i>
            </div>
        </div>

    </div>
    
</body>
</html>
EOF
}

while true; do
  clear
  echo "Menú de Ejemplos de HTML con Bash:"
  echo "1. Generar HTML con una tarjeta"
  echo "2. Generar HTML con dos tarjetas"
  echo "3. Salir"

  read -n 1 -r OPTION
  echo ""  # Add a newline for better formatting

  case $OPTION in
    1)
      clear
      get_card_values
      generate_single_card_html
      echo "Archivo HTML generado como 'single_card_example.html'. Presiona Enter para continuar."
      read -r
      ;;

    2)
      clear
      get_card_values
      echo "Introduce el nombre para la segunda tarjeta:"
      read -r NAME_2

      echo "Introduce el texto para la segunda tarjeta:"
      read -r TEXT_2
      generate_double_card_html
      echo "Archivo HTML generado como 'double_cards_example.html'. Presiona Enter para continuar."
      read -r
      ;;

    3)
      exit 0
      ;;

    *)
      echo "Opción inválida. Introduce un número del 1 al 3."
      ;;
  esac
done
