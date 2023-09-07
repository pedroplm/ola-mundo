import React from "react";
import Inicio from "./paginas/inicio/Inicio";
import SobreMim from "./paginas/sobreMim/SobreMim";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/menu";
import Rodape from "componentes/rodape/Rodape";
import PaginaPadrao from "componentes/paginaPadrao/PaginaPadrao";
import Post from "paginas/post/Post";
import NaoEncontrada from "paginas/naoEncontrada/NaoEncontrada";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />} >
            <Route path="/"
              element={
                <Inicio />
              }
            />
            <Route path="/sobremim"
              element={
                <SobreMim />
              }
            />
            
        </Route>
        <Route path="/posts/:id"
              element={
                <Post />
              }
            />
        <Route path="*"
          element={
            <NaoEncontrada />
          }
        />
      </Routes>
      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
