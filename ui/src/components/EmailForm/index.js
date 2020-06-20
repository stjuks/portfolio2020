import React from 'react';
import { EmailFormContainer } from './styles';

function EmailForm() {
  return (
    <EmailFormContainer>
      <p>Or shoot me a message right here:</p>
      <form>
        <label className="input-container">
          <div className="label">Your name</div>
          <input
            type="text"
            name="name"
            placeholder="Patrick Star"
            autoComplete="off"
            required
          />
        </label>
        <label className="input-container">
          <div className="label">Email</div>
          <input
            type="email"
            name="email"
            placeholder="patrickstar@gmail.com"
            autoComplete="off"
            required
          />
        </label>
        <label className="input-container">
          <div className="label">Message</div>
          <textarea
            name="message"
            placeholder="Hey Steven! I have a great offer for you..."
            required
          />
        </label>
        <button className="submit-btn">Send</button>
      </form>
    </EmailFormContainer>
  );
}

export default EmailForm;
