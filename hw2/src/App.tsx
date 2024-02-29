import {Routes, Route} from 'react-router-dom'
import { AppProvider } from './component/mycontext';

import Layout from './component/layout';
import Logon from './component/Logon';
import AlbumList from './component/albumList';
import PhotoList from './component/photoList';
import Home from './component/home';

function App() {
  return (
    <div>
      <h1>App</h1>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout/>} >
              <Route index element={<Logon/>} ></Route>
              <Route path="/album/list" element={<AlbumList/>} ></Route>
              <Route path="/photo/list" element={<PhotoList/>} ></Route>
              <Route path="/home" element={<Home/>} ></Route>
          </Route>
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
