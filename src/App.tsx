import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { GuidesPage } from './components/GuidesPage';
import { SubscriptionsPage } from './components/SubscriptionsPage';
import { ClientsPage } from './components/ClientsPage';
import { AboutPage } from './components/AboutPage';
import './App.css';

function AppContent() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--dark-bg)' }}>
      <div className="container mx-auto px-4 py-8">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guides" element={<GuidesPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;