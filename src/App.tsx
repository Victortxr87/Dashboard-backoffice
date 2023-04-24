import React from 'react';
import Layout from './components/layout/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastrarInformacoes from './pages/Curriculo/Cadastrarinformacoes';
import CadastrarExperiencia from './pages/Curriculo/CadastrarExperiencia';
import ListaExperiencia from './pages/Curriculo/ListaExperiencia';

// import CadastrarPortfolio from './pages/portfolio/CadastrarPortfolio';
import ListaPortfolio from './pages/Portfolio/ListaPortfolio';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
          <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
          <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />


          {/* <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} /> */}
          <Route path="/portfolio/lista" element={<ListaPortfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
