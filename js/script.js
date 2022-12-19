// # FASE PREPARATORIA ---------------------------------

// Recupero gli elementi in pagina
const grid = document.getElementById("grid");
const playButton = document.getElementById("play-button");

function play() {
  // # Funzioni interne al gioco
  const createCell = (number) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.append(number);

    return cell;
  };

  // Cambiamo il testo del bottone in "Ricomincia"
  playButton.innerText = "Ricomincia";

  // Svuotiamo la griglia
  grid.innerHTML = "";

  // ! -------------------------------
  // ! SVOLGIMENTO EFFETTIVO
  // ! -------------------------------

  for (let i = 1; i <= 100; i++) {
    const cell = createCell(i);

    cell.addEventListener("click", function () {
      cell.classList.add("clicked");
      console.log(i);
    });

    grid.appendChild(cell);
  }
}

playButton.addEventListener("click", play);

//Quando l'utente clicca su una cella, incrementiamo il punteggio.
function numbersum(num1, num2) {
  let risultato = num1 + num2;
  return;
}

// generare 16 numeri casuali (tutti diversi) compresi tra 1 e il massimo di caselle disponibili
result = Math.floor(random * (max - 1)) + 1;
console.log("result:" + result);

//Quando l'utente clicca su una cella, verifichiamo se ha calpestato una bomba, controllando se il numero di cella è presente nell'array di bombe. Se si, la cella diventa rossa (raccogliamo il punteggio e e scriviamo in console che la partita termina) altrimenti diventa azzurra e dobbiamo incrementare il punteggio.
