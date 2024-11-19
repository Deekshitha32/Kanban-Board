// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import './index.css'; // Global styles

const App = () => {
  return (
    <div className="app-container">
      <h1>Interactive Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;
