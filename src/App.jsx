import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Index from './pages/Index';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="logo" />
        </Header>
        <Content>
          <div className="site-layout-content" style={{ background: '#fff' }}>
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Calista Code Creations ©2025
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;