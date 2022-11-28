export default function Letras(props) {
  const { alfabeto } = props;
  return (
    <div className="letras-container">
      {props.alfabeto.map((a) => (
        <button
          onClick={() => props.letrasClicadas(a)}
          key={a}
          disabled={props.letrasSelecionadas.includes(a)}
        >
          {a}
        </button>
      ))}
    </div>
  );
}
