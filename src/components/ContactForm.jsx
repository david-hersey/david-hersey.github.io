import React from 'react';

class ContactForm extends React.Component {

  render() {

    return (
      <div className="col-md-6">
        <form className="form" action="/" name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="field form-group">
            <div className="control">
              <label className="label">First Name</label>
              <input className="input form-control" name="firstName" component="input" type="text" placeholder="First Name" required />
            </div>
          </div>
          <div className="field form-group">
            <div className="control">
              <label className="label">Last Name</label>
              <input className="input form-control" name="lastName" component="input" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="field form-group">
            <div className="control">
              <label className="label">Email</label>
              <input className="input form-control" name="email" component="input" type="email" placeholder="Email Address" required />
            </div>
          </div>
          <div className="field form-group">
            <div className="control">
              <label className="label">Message</label>
              <input className="textarea form-control" name="message" component="textarea" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
};

export default ContactForm;

