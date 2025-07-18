import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
      }

      body {
        background: linear-gradient(135deg, #dff1ff, #f9e0ff);
        min-height: 100vh;
        overflow-x: hidden;
      }

      button {
        transition: all 0.3s ease;
      }

      button:hover {
        transform: scale(1.05);
      }
    `}
  />
);

export default GlobalStyles;
