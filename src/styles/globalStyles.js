import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Ubuntu", sans-serif;
    text-align: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    background-color: #f8f9fa;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-size: 36px;
    font-weight: bold;
    color: #2c3e50;
    margin: 10px 0 20px;
    letter-spacing: 2px;
  }
`;
