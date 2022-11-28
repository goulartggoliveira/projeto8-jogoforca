export default function Jogo(props) {
  return (
    <div className="jogo-container">
      <img src={props.forcaImagens[props.contadorErros]} alt="forca-imagem" />
      <button onClick={props.iniciarJogo}>Escolher Palavra</button>
      <h1 className={props.corResposta}>{props.palavraBranca}</h1>
    </div>
  );
}
