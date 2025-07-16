import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import DocumentCreatePage from './pages/DocumentCreatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<div className="p-4">Dashboard</div>} />
          <Route path="create-doc" element={<DocumentCreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
