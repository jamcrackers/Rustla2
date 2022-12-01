import MainLayout from "./MainLayout";
import Checkbox from "./Checkbox";

const SingleSelectInput = ({ value }) => (
  <div className="form-group col-sm-12">
    <label>
      <div className="poll-vote-input">
        <input
          className="form-control form-radio-input"
          name="options"
          value={value}
          type="radio"
        />
      </div>
      <span className="poll-vote-label">{value}</span>
    </label>
  </div>
);

const MultiSelectInput = ({ value }) => (
  <div className="form-group col-sm-12">
    <label className="poll-vote-row">
      <div className="poll-vote-input">
        <Checkbox
          className="form-control form-checkbox-input"
          name={`options`}
          value={value}
        />
      </div>
      <span className="poll-vote-label">{value}</span>
    </label>
  </div>
);

function PollForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const options = Array.from(event.target.elements)
      .filter((el) => el.name === "options" && el.checked)
      .map((el) => el.value);

    if (options.length === 0) {
      return;
    }

    props.onSubmit({ options });
  };

  const { subject, options, multi_vote: multiVote } = props.poll;

  const Input = multiVote ? MultiSelectInput : SingleSelectInput;
  const optionInputs = Object.entries(options).map(([value], i) => (
    <Input key={i} value={value} />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="col-sm-12 poll-title">{subject}</h1>
      {optionInputs}
      <div className="form-group">
        <div className="col-sm-12">
          <button type="submit" className="btn btn-primary" disabled={false}>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

const PollVote = ({ poll, history, submitPollVote }) => {
  const pollForm =
    poll && poll.loaded ? (
      <PollForm onSubmit={submitPollVote} poll={poll} />
    ) : (
      <h4 className="poll-loading">Loading...</h4>
    );

  return (
    <MainLayout history={history}>
      <div className="container">{pollForm}</div>
    </MainLayout>
  );
};

export default PollVote;
