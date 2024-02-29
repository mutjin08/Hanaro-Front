import React from 'react';
import './App.css';

import Layout from './component/Layout';
import Logon from './component/Logon';
import AlbumList from './component/AlbumList';
import PhotoList from './component/PhotoList';
import Home from './component/Home';
import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './component/mycontext';

function App() {
  return (
    <div>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Logon />}></Route>
            <Route path="/album/list" element={<AlbumList />}></Route>
            <Route path="/photo/list" element={<PhotoList />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </AppProvider>
    </div>
  )
}

export default App;
