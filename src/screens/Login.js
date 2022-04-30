import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        ></input>
        <div className="input-group-append">
          <span className="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>
      </div>

      <label for="basic-url">Your vanity URL</label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        ></input>
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">$</span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        ></input>
        <div className="input-group-append">
          <span className="input-group-text">.00</span>
        </div>
      </div>

      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">With textarea</span>
        </div>
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
    </div>
  );
};

export default Login;
