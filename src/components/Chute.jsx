export default function Chute(props) {
  return (
    <div className="chute-container">
      <span>Já sei a palavra</span>
      <input
        type="text"
        disabled={props.disableInput}
        value={props.chute}
        onChange={(e) => props.setChute(e.target.value)}
        data-test="guess-input"
      />
      <button onClick={props.acertarNoChute} data-test="guess-button">
        Chutar
      </button>
    </div>
  );
}
