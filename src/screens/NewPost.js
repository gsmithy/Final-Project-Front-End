import React from "react";

const NewPost = () => {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">
            What kind of Good News is this?
          </label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Healing!</option>
            <option>Financial Provision!</option>
            <option>Relationship Restoration!</option>
            <option>Miracle!</option>
            <option>Other!</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">
            Tell us some GOOD NEWS!
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
      <div>
        <h3>Have a picture or video?</h3>
        <form>
          <div class="form-group">
            <label for="exampleFormControlFile1">Picture or Video?</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
