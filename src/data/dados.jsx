import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL
});

export const getLivros = async () => {
	try {
		const resposta = await api.get('/livros');
		return resposta.data;
	} catch (error) {
		console.error("Ocorreu um erro ao listar os livros:", error);
		return [];
	}
};

export const getLivroPorId = async (id) => {
	try {
		const resposta = await api.get(`/livros/${id}`);
		return resposta.data;
	} catch (error) {
		console.error(`Ocorreu um erro ao listar o livro com ID ${id}:`, error);
		return null;
	}
};