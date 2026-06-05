import { useState } from 'react';
import { GlobalSytle } from "./styles/GlobalStyle";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Leitura } from './pages/Leitura';

function App() {
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  
  return (
    <div>
      <GlobalSytle />
      <Header />

      {livroSelecionado ? (
        <Leitura
          livroId={livroSelecionado}
          onVoltar={() => setLivroSelecionado(null)}
        />
      ) : (
        <Home onSelecionarLivro={setLivroSelecionado} />
      )}
    </div>
  );
}

export default App;
