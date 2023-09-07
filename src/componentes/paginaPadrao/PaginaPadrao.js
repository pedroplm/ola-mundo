import Banner from 'componentes/banner/Banner'
import React from 'react'
import { Outlet } from 'react-router-dom'

function PaginaPadrao() {
  return (
    <main>
        <Banner />

        <Outlet />
    </main>
  )
}

export default PaginaPadrao