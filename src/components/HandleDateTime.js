import "../styles.scss";

const HandleDateTime = ({ dateTime }) => {
  const { wish, date, time } = dateTime;
  const hourStart = time.slice(-8, -7);
  const hourEnd = time.slice(-7, -6);
  const minStart = time.slice(-5, -4);
  const minEnd = time.slice(-4, -3);
  const secStart = time.slice(-2, -1);
  const secEnd = time.slice(-1, time.length);

  return (
    <div className="wrap">
      <h2>{wish}</h2>
      <h3>{date}</h3>
      <h1 id="timer-wrap">
        <span className="timer">{hourStart}</span>
        <span className="timer">{hourEnd}</span>:
        <span className="timer">{minStart}</span>
        <span className="timer">{minEnd}</span>:
        <span className="timer">{secStart}</span>
        <span className="timer">{secEnd}</span>
      </h1>
    </div>
  );
};

export default HandleDateTime;
