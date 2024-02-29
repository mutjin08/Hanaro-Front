import './App.css';
import Layout from './component/Layout';
import Home from './component/Home';
import Page1 from './component/Page1';
import Page2 from './component/Page2';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <Routes>
        <Route page="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/page1" element={<Page1 />}></Route>
          <Route path="/page2" element={<Page2 />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;