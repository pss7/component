

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Main from "./components/layout/Main";

const Home = lazy(() => import('./pages/Home'));
const TitleComponent = lazy(() => import('./pages/TitleComponent'));
const ButtonComponent = lazy(() => import('./pages/ButtonComponent'));
const InputComponent = lazy(() => import('./pages/InputComponent'));
const SelectComponent = lazy(() => import('./pages/SelectComponent'));
const TableComponent = lazy(() => import('./pages/TableComponent'));
const TabComponent = lazy(() => import('./pages/TabComponent'));

function App() {

  return (

    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/titlecomponent" element={<TitleComponent />} />
          <Route path="/buttoncomponent" element={<ButtonComponent />} />
          <Route path="/inputcomponent" element={<InputComponent />} />
          <Route path="/selectcomponent" element={<SelectComponent />} />
          <Route path="/tablecomponent" element={<TableComponent />} />
          <Route path="/tabcomponent" element={<TabComponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>

  )

}

export default App;
