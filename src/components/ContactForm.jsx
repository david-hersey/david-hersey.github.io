import React from 'react';
import { reduxForm, Field } from 'redux-form';
// https://scotch.io/tutorials/managing-form-state-in-react-with-redux-form
// https://redux-form.com/8.2.2/

class ContactForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="col-md-6">
        <form onSubmit={handleSubmit} className="form">
          <div className="field form-group">
            <div className="control">
              <label className="label">First Name</label>
              <Field className="input form-control" name="firstName" component="input" type="text" placeholder="First Name"/>
            </div>
          </div>
          <div className="field form-group">
            <div className="control">
              <label className="label">Last Name</label>
              <Field className="input form-control" name="lastName" component="input" type="text" placeholder="Last Name"/>
            </div>
          </div>
          <div className="field form-group">
            <div className="control">
              <label className="label">Email</label>
              <Field className="input form-control" name="email" component="input" type="email" placeholder="Email Address"/>
            </div>
          </div>
          <div className="field form-group">
            <div className="control">
              <label className="label">Message</label>
              <Field className="textarea form-control" name="message" component="textarea" />
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

ContactForm = reduxForm({
  form: 'contact',
})(ContactForm);


export default ContactForm;

