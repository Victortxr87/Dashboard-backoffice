import React from 'react';
import Layout from './components/layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastrarInformacoes from './pages/Curriculo/Cadastrarinformacoes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
