import React from 'react';
import Layout from '../components/layout/layout';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CadastrarInformacoes from '../pages/Curriculo/Cadastrarinformacoes';
import CadastrarExperiencia from '../pages/Curriculo/CadastrarExperiencia';
import ListaExperiencia from '../pages/Curriculo/ListaExperiencia';

import CadastrarPortfolio from '../pages/Portfolio/CadastrarPortfolio';
import ListaPortfolio from '../pages/Portfolio/ListaPortifolio/ListaPortfolio';


const AppRoutes: React.FC = () => {
  return (
   
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/curriculo/informacoes/cadastro" element={<CadastrarInformacoes />} />
          <Route path="/curriculo/experiencia/cadastro" element={<CadastrarExperiencia />} />
          <Route path="/curriculo/experiencia/lista" element={<ListaExperiencia />} />


          <Route path="/portfolio/cadastro" element={<CadastrarPortfolio />} />
          <Route path="/portfolio/lista" element={<ListaPortfolio />} />
        </Routes>
      </Layout>
    
  );
};

export default AppRoutes;
