import { createGlobalStyle } from 'styled-components';

export const GlobalSytle = createGlobalStyle`
:root {
	/* principais */
	--color-principal: #8293f6;
	--color-principal-hover: #6584db;

	/* background */
	--bg-app: #f4f4f4;
	--bg-card: #ffffff;
	--bg-light: #f9f9f9;
	--bg-icon: #fdf2fe;sss

	/* fonte de texto */
	--font-primaria: #111827;
	--font-secundaria: #6b7280;
	--font-body: #333;

	/* borda */
	--border-cor: #e5e7eb;
	--border-light: #ddd;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--bg-app);
    color: var(--font-body);
}
`;