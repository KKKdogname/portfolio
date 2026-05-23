import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import VideosPage from './pages/VideosPage';
import GraphicsPage from './pages/GraphicsPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="graphics" element={<GraphicsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
