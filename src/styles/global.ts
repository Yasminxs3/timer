import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialized;
    font-family: 'Roboto', sans-serif;

  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['gray-400']};
  }

  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

  }

  border-style, input-security, textarea, button, label {
    /* font-family: 'Roboto', sans-serif; */
    font-weight: 400;
    font-size: 1rem;
  }
`
