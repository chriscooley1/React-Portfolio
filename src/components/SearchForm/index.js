import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Name</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Name"
          id="breed"
        />
        <label htmlFor="breed">Email</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Email"
          id="breed"
        />
        <label htmlFor="breed">Message</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Message"
          id="breed"
        />
        <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Submit
        </button>
      </div>
      <br></br>
      <div class="col-xl-6 col-sm-12 border-left border-primary mainLinkBox">
        <div class="container linkBox">
          <ul>
            <li class="phone textContact"><i class="fa fa-phone"></i><span> Phone</span><a href="tel:915-246-2751">
              (915)246-2751</a></li>
            <li class="email textContact"><i class="fa fa-envelope"></i><span> Email</span><a
              href="mailto:chriscooley1984@yahoo.com">
              chriscooley1984@yahoo.com</a></li>
            <li class="github"><i class="fab fa-github"></i><span> Github</span><a
              href="https://github.com/chriscooley1">
              chriscooley1</a></li>
            <li class="linkedin"><i class="fab fa-linkedin"></i><span> LinkedIn</span><a
              href="https://www.linkedin.com/in/chris-cooley-65057b14/">
              chris-cooley-65057b14</a></li>
          </ul>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
