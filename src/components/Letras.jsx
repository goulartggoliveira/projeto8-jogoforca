export default function Letras(props) {
  const { alfabeto } = props;
  return (
    <div className="letras-container">
      {props.alfabeto.map((a) => (
        <button key={a} disabled>
          {a}
        </button>
      ))}
    </div>
  );
}
