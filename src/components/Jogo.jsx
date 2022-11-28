export default function Jogo(props) {
  return (
    <div className="jogo-container">
      <img src={props.forcaImagens[props.contadorErros]} alt="forca-imagem" />
      <button onClick={props.iniciarJogo}>Botão teste</button>
      <h1>{props.palavraBranca}</h1>
    </div>
  );
}
