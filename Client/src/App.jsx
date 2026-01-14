import React from 'react';

// Import Components
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-slate-900 bg-white selection:bg-purple-600 selection:text-white">
      {/* 1. Navigation Bar */}
      <Header />

      {/* 2. Main Page Sections */}
      <main>
        <Hero />
        <Services />
        <Work />
        <ContactForm />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

export default App;