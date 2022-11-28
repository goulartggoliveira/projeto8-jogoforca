export default function Jogo(props) {
  return (
    <div className="jogo-container">
      <img
        src={props.forcaImagens[props.contadorErros]}
        alt="forca-imagem"
        data-test="game-image"
      />
      <button onClick={props.iniciarJogo} data-test="choose-word">
        Escolher Palavra
      </button>
      <h1 className={props.corResposta} data-test="word">
        {props.palavraBranca}
      </h1>
    </div>
  );
}
