import React from 'react';
import RoutesApp from './router';
import './app.css'


const MeuComponente = () => {
  useEffect(() => {
    document.title = "Título Dinâmico";
  }, []);
}
  function App() {
    return (
        <div className="App">
            <RoutesApp />
        </div>
    );
}

export default App;
