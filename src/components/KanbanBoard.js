// import React, { useState, useEffect } from 'react';
// import { fetchTickets } from '../services/apiService';
// import { groupTickets, sortTickets } from '../utils/kanbanUtils';
// import Card from './Card';
// import '../styles/styles.css';

// // Import status icons
// import TodoIcon from '../assets/icons/To-do.svg';
// import DoneIcon from '../assets/icons/Done.svg';
// import InProgressIcon from '../assets/icons/in-progress.svg';
// import BacklogIcon from '../assets/icons/Backlog.svg';

// // Mapping status to icons
// const statusIcons = {
//   'To-do': TodoIcon,
//   Done: DoneIcon,
//   'In Progress': InProgressIcon,
//   Backlog: BacklogIcon,
// };

// const KanbanBoard = () => {
//   const [tickets, setTickets] = useState([]);
//   const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
//   const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

//   useEffect(() => {
//     fetchTickets()
//       .then((data) => setTickets(data))
//       .catch((err) => console.error('API Fetch Error:', err));
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('groupBy', groupBy);
//     localStorage.setItem('sortBy', sortBy);
//   }, [groupBy, sortBy]);

//   const groupedTickets = groupTickets(tickets, groupBy);
//   const sortedGroups = Object.entries(groupedTickets).map(([key, value]) => ({
//     key,
//     tickets: sortTickets(value, sortBy),
//   }));

//   if (!tickets || tickets.length === 0) {
//     return <h2>No tickets available</h2>;
//   }

//   return (
//     <div>
//       <div className="menu">
//         <div className="menu-item">
//           <label>Group By: </label>
//           <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
//             <option value="status">Status</option>
//             <option value="user">User</option>
//             <option value="priority">Priority</option>
//           </select>
//         </div>
//         <div className="menu-item">
//           <label>Sort By: </label>
//           <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
//             <option value="priority">Priority</option>
//             <option value="title">Title</option>
//           </select>
//         </div>
//       </div>
//       <div className="board">
//         {sortedGroups.map(({ key, tickets }) => (
//           <div key={key} className="column">
//             <div className="column-header">
//               <img
//                 src={statusIcons[key] || BacklogIcon}
//                 alt={key}
//                 className="status-icon"
//               />
//               <h3>{key}</h3>
//             </div>
//             {tickets.map((ticket) => (
//               <Card key={ticket.id} ticket={ticket} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default KanbanBoard;

import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../services/apiService';
import { groupTickets, sortTickets } from '../utils/kanbanUtils';
import Card from './Card';
import '../styles/styles.css';

// Import status icons
import TodoIcon from '../assets/icons/To-do.svg';
import DoneIcon from '../assets/icons/Done.svg';
import InProgressIcon from '../assets/icons/in-progress.svg';
import BacklogIcon from '../assets/icons/Backlog.svg';

const statusIcons = {
  'To-do': TodoIcon,
  Done: DoneIcon,
  'In Progress': InProgressIcon,
  Backlog: BacklogIcon,
};

// Priority Labels
const priorityLabels = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority',
};

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

  useEffect(() => {
    fetchTickets()
      .then((data) => setTickets(data))
      .catch((err) => console.error('API Fetch Error:', err));
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedGroups = Object.entries(groupedTickets).map(([key, value]) => ({
    key,
    label: groupBy === 'priority' ? priorityLabels[key] || key : key, // Add priority labels
    tickets: sortTickets(value, sortBy),
  }));

  if (!tickets || tickets.length === 0) {
    return <h2>No tickets available</h2>;
  }

  return (
    <div>
      <div className="menu">
        <div className="menu-item">
          <label>Group By: </label>
          <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="menu-item">
          <label>Sort By: </label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      <div className="board">
        {sortedGroups.map(({ key, label, tickets }) => (
          <div key={key} className="column">
            <div className="column-header">
              <img
                src={statusIcons[key] || BacklogIcon}
                alt={key}
                className="status-icon"
              />
              <h3>{label}</h3>
            </div>
            {tickets.map((ticket) => (
              <Card key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
