import styled from 'styled-components';
import theme from '../../styles/theme';
import mixins from '../../styles/mixins';

export const EmailFormContainer = styled.div`
  font-family: ${theme.fonts.sansSerif};
  margin: 4rem 0;

  .input-container {
    width: 100%;
    display: block;
    margin: 3rem 0;
  }

  .label {
    display: flex;
    align-items: center;
    height: 1.25em;
    font-size: 0.875rem;
  }

  input,
  textarea {
    line-height: 1.5rem;
    box-sizing: border-box;
    font-size: 1rem;
    max-width: 100%;
    min-width: 100%;
    color: ${theme.colors.white};
    min-height: 2.5rem;
    font-family: ${theme.fonts.sansSerif};
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    border-radius: 0;
    border-bottom: 1px solid ${theme.colors.orange};
  }

  textarea {
    padding-top: 0.5rem;
    min-height: 4rem;
  }

  .form-message {
    color: ${theme.colors.orange};
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  .submit-btn {
    padding: 0.5rem 1rem;
    background: ${theme.colors.black};
    border: 1px solid ${theme.colors.orange};
    font-family: ${theme.fonts.serif};
    transition: all 0.2s;
    position: relative;

    :hover,
    :focus {
      background: ${theme.colors.orange};
    }

    .loader {
      ${mixins.engulf}

      &, .loader-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
