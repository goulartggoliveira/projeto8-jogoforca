export default function Chute(props) {
  return (
    <div className="chute-container">
      <span>Já sei a palavra</span>
      <input
        type="text"
        disabled={props.disableInput}
        value={props.chute}
        onChange={(e) => props.setChute(e.target.value)}
      />
      <button onClick={props.acertarNoChute}>Chutar</button>
    </div>
  );
}
