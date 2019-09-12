import React from 'react';
import './styles/App.css';
import './styles/SectionOne.css';
import './styles/SectionTwo.css';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
function App() {
  return (
    <div className="App">
      <SectionOne/>
      <SectionTwo/>
    </div>
  );
}

export default App;
