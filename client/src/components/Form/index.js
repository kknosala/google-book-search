import React from "react";

//pass down q, handleInputChange, handleFormSubmit as props
function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={props.q}
          placeholder="Ready Player One"
          name="q"
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
