import { Fragment } from "react";
import MainLayout from "./MainLayout";

const PollResultRow = ({ value, votes, percent }) => (
  <Fragment>
    <div className="poll-result-label-row">
      <span className="poll-result-label">{value}</span>
      <span className="poll-result-count">
        {votes} {votes === 1 ? "vote" : "votes"}
      </span>
    </div>
    <div className="poll-result-chart-row">
      <div className="poll-result-bar-container">
        <div className="poll-result-bar" style={{ width: `${percent}%` }} />
      </div>
      <span className="poll-result-percent">{Math.round(percent)}%</span>
    </div>
  </Fragment>
);

const PollResultChart = ({ poll: { subject, options } }) => {
  const maxValue = Object.keys(options).reduce(
    (maxValue, key) => Math.max(maxValue, options[key]),
    0
  );

  const optionRows = Object.keys(options)
    .map((key) => [key, options[key]])
    .sort((a, b) => b[1] - a[1])
    .map(([value, votes], i) => (
      <PollResultRow
        key={i}
        value={value}
        votes={votes}
        percent={!maxValue ? 0 : (votes / maxValue) * 100}
      />
    ));

  return (
    <div>
      <h1 className="poll-title">{subject}</h1>
      {optionRows}
    </div>
  );
};

function PollResult(props) {
  // componentDidMount() {
  //   stopPolling = props.beginPollingPoll(props.id);
  // }

  // componentWillUnmount() {
  //   stopPolling();
  // }

  const { poll, history } = props;

  const pollChart =
    poll && !poll.loading ? (
      <PollResultChart poll={poll} />
    ) : (
      <h4 className="poll-loading">Loading...</h4>
    );

  return (
    <MainLayout history={history}>
      <div className="container">{pollChart}</div>
    </MainLayout>
  );
}

export default PollResult;
