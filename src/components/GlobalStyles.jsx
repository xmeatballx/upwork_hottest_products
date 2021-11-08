import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
        margin: 0;
        padding: 0;
        font-family: Roboto;
}

main {
    width: 60vw;
    max-width:900px;
    margin: auto;
}

@media (max-width: 900px) {
    main {
        width: 90vw;
    }
}

    `;

export { GlobalStyles };
