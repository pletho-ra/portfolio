import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Layout, Home, About } from './Components'

function App() {
  return (
    <>
      <Routes>
        <Route path ="/portfolio" element = { <Layout />}>
          <Route index element = { <Home /> } />
          <Route path ="about" element = { <About/> } />
        </Route>   
      </Routes>
    </>
  );
}

export default App;
