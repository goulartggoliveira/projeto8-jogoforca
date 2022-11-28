export default function Letras(props) {
  return (
    <div className="letras-container">
      {props.alfabeto.map((a) => (
        <button
          onClick={() => props.letrasClicadas(a)}
          key={a}
          disabled={props.letrasSelecionadas.includes(a)}
          data-test="letter"
        >
          {a}
        </button>
      ))}
    </div>
  );
}
