import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EmailFormContainer } from './styles';
import { Loader } from '../icons';

const DEFAULT_VALUES = {
  name: '',
  email: '',
  message: ''
};

const { hostname, protocol } = document.location;

function EmailForm() {
  const [values, setValues] = useState(DEFAULT_VALUES);

  const [formMessage, setFormMessage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const req = await fetch(`${protocol}//${hostname}:5001/api/sendEmail`, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      setFormMessage('Message successfully sent. :)');
      setValues(DEFAULT_VALUES);
    } catch (err) {
      setFormMessage('Error sending message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmailFormContainer>
      <p>Or shoot me a message right here:</p>
      <form onSubmit={handleSubmit}>
        <label className="input-container">
          <div className="label">Your name</div>
          <input
            type="text"
            name="name"
            placeholder="Patrick Star"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="input-container">
          <div className="label">Your email</div>
          <input
            type="email"
            name="email"
            placeholder="patrickstar@gmail.com"
            onChange={handleChange}
            autoComplete="off"
            value={values.email}
            required
          />
        </label>
        <label className="input-container">
          <div className="label">Message</div>
          <textarea
            name="message"
            placeholder="Hey Steven! I have a great offer for you..."
            value={values.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isLoading} className="submit-btn">
          <motion.div
            className="btn-text"
            animate={{ scale: isLoading ? 0.5 : 1, opacity: isLoading ? 0 : 1 }}
          >
            Send
          </motion.div>
          {isLoading && (
            <motion.div className="loader">
              <motion.div
                className="loader-wrapper"
                animate={{ rotate: 360 }}
                transition={{ loop: Infinity, duration: 1 }}
              >
                <Loader />
              </motion.div>
            </motion.div>
          )}
        </button>
        <div className="form-message">{formMessage}</div>
      </form>
    </EmailFormContainer>
  );
}

export default EmailForm;
