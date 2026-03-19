//import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import HomePage from './pages/Home';
import Login from "./Login";
import ToolsPage from './pages/Tools';
import SupportPage from './pages/Support';
import Settings from "./settings";
export function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="tools" element={<ToolsPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>;
}