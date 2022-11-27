export default function Letras(props) {
  const { alfabeto } = props;
  return (
    <div className="letras-container">
      {props.alfabeto.map((a) => (
        <button>{a}</button>
      ))}
    </div>
  );
}
