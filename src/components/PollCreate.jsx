import { useState } from "react";
import Checkbox from "./Checkbox";

import "../css/Polls.scss";

const OptionInput = ({ value, index, onChange }) => (
  <div className="form-group">
    <div className="col-sm-12">
      <input
        className="form-control"
        type="text"
        placeholder={"Enter poll option"}
        value={value}
        onChange={(event) => onChange(event, index)}
      />
    </div>
  </div>
);

function PollCreateForm({ minOptionCount = 3, ...props }) {
  const [state, setState] = useState({
    options: new Array(props.minOptionCount).fill(""),
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      subject: event.target.elements.subject.value,
      options: state.options.filter((option) => option !== ""),
      multi_vote: event.target.elements.multi_vote.checked,
    };

    if (!payload.options.length) {
      return;
    }

    props.onSubmit(payload);
  };

  const handleOptionChange = (event, index) => {
    const options = state.options.slice();

    options[index] = event.target.value;

    let { length } = options;
    while (length > props.minOptionCount && options[--length] === "") {
      options.pop();
    }

    setState({ options });
  };

  const options = [...state.options, ""];

  const optionInputs = options.map((value, i) => (
    <OptionInput
      key={i}
      index={i}
      value={value}
      onChange={handleOptionChange}
    />
  ));

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="col-sm-12">
          <input
            className="form-control"
            type="text"
            name="subject"
            placeholder={"Enter poll title"}
          />
        </div>
      </div>
      {optionInputs}
      <div className="form-group">
        <div className="col-sm-12">
          <label>
            <Checkbox
              className="form-control"
              id="poll-multi-vote"
              name="multi_vote"
            />
            <span className="poll-multi-vote-label">
              Allow multiple poll answers
            </span>
          </label>
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <button type="submit" className="btn btn-primary" disabled={false}>
            Save Poll
          </button>
        </div>
      </div>
    </form>
  );
}

export default PollCreateForm;
