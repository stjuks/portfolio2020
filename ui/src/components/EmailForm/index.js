import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { EmailFormContainer } from './styles';
import { Loader } from '../icons';
import { buildAPIURL } from '../../util';
import { LocaleContext } from '../../util/LocaleContext';

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

  const { translations } = useContext(LocaleContext);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const req = await fetch(buildAPIURL('/api/sendEmail'), {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (req.status !== 200) {
        throw new Error();
      }

      setFormMessage(translations.emailForm.successMsg);
      setValues(DEFAULT_VALUES);
    } catch (err) {
      setFormMessage(translations.emailForm.errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EmailFormContainer>
      <p>{translations.emailForm.title}</p>
      <form onSubmit={handleSubmit}>
        <label className="input-container">
          <div className="label">{translations.emailForm.nameLabel}</div>
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
          <div className="label">{translations.emailForm.emailLabel}</div>
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
          <div className="label">{translations.emailForm.messageLabel}</div>
          <textarea
            name="message"
            placeholder={translations.emailForm.messagePlaceholder}
            value={values.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isLoading} className="submit-btn" aria-label="send message">
          <motion.div className="btn-text" animate={{ scale: isLoading ? 0.5 : 1, opacity: isLoading ? 0 : 1 }}>
            {translations.emailForm.submitBtn}
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
