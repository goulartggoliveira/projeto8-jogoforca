import React, { useState } from "react";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import Chute from "./components/Chute";
import Palavras from "./Palavras";

const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const forcaImagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

function App() {
  const [disableInput, setDisableInput] = useState(true);
  const [contadorErros, setcontadorErros] = useState(0);
  const [palavraSelecionada, setpalavraSelecionada] = useState([]);
  const [palavraBranca, setpalavraBranca] = useState([]);
  const [letrasSelecionadas, setletrasSelecionadas] = useState(alfabeto);
  const [palavraCerta, setpalavraCerta] = useState("");
  const [chute, setChute] = useState("");

  function iniciarJogo() {
    setDisableInput(false);
    escolherPalavra();
    setletrasSelecionadas([]);
    setcontadorErros(0);
    setChute("");
  }

  function escolherPalavra() {
    let indice = Math.floor(Math.random() * Palavras.length);
    const palavra = Palavras[indice];
    const arrayP = palavra.split("");
    setpalavraSelecionada(arrayP);
    const espacoBranco = [];
    arrayP.forEach((P) => espacoBranco.push("_ "));
    setpalavraBranca(espacoBranco);
    console.log(palavra);
    setpalavraCerta(palavra);
  }

  function letrasClicadas(letra) {
    setletrasSelecionadas([...letrasSelecionadas, letra]);

    if (palavraCerta.includes(letra)) {
      letraCerta(letra);
    } else {
      letraErrada(letra);
    }
  }
  console.log(letrasSelecionadas);

  function letraCerta(letra) {
    console.log("acertou");
    let novaPalavraBranca = [...palavraBranca];
    palavraSelecionada.forEach((l, i) => {
      if (palavraCerta[i] === letra) {
        novaPalavraBranca[i] = l;
      }
    });
    setpalavraBranca(novaPalavraBranca);
  }
  function letraErrada(letra) {
    let somaErros = contadorErros + 1;
    setcontadorErros(somaErros);
    console.log("Erroooooou");
  }

  function acertarNoChute() {
    let palavraChutada = "";
    palavraSelecionada.forEach((letra) => (palavraChutada += letra));
    if (chute === palavraChutada) {
      console.log("acerto");
    } else {
      console.log("perdeu");
      setcontadorErros(6);
    }
    jogoFinalizado();
  }

  function jogoFinalizado() {
    console.log("jogo terminado");
  }

  return (
    <div className="container">
      <Jogo
        forcaImagens={forcaImagens}
        iniciarJogo={iniciarJogo}
        contadorErros={contadorErros}
        palavraBranca={palavraBranca}
        acertarNoChute={acertarNoChute}
      />
      <Letras
        alfabeto={alfabeto}
        disableInput={disableInput}
        letrasClicadas={letrasClicadas}
        letrasSelecionadas={letrasSelecionadas}
      />

      <Chute
        disableInput={disableInput}
        chute={chute}
        setChute={setChute}
        acertarNoChute={acertarNoChute}
      />
    </div>
  );
}

export default App;
