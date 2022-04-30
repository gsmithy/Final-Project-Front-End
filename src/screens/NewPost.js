import React from "react";

const NewPost = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">
            What kind of Good News is this?
          </label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Healing!</option>
            <option>Financial Provision!</option>
            <option>Relationship Restoration!</option>
            <option>Miracle!</option>
            <option>Other!</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            Tell us some GOOD NEWS!
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <div>
        <h3>Have a picture or video?</h3>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlFile1">Picture or Video?</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
