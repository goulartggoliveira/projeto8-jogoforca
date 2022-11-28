export default function Chute(props) {
  return (
    <div className="chute-container">
      <span>Já sei a palavra</span>
      <input type="text" disabled={props.disableInput} />
      <button>Chutar</button>
    </div>
  );
}
