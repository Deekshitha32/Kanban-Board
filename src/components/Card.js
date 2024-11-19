// import React from 'react';
// import '../styles/Card.css';

// // Import priority icons
// import UrgentIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
// import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
// import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
// import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
// import NoPriorityIcon from '../assets/icons/No-priority.svg';

// const priorityIcons = {
//   4: UrgentIcon,
//   3: HighPriorityIcon,
//   2: MediumPriorityIcon,
//   1: LowPriorityIcon,
//   0: NoPriorityIcon,
// };

// const priorityLabels = {
//   4: 'Urgent',
//   3: 'High',
//   2: 'Medium',
//   1: 'Low',
//   0: 'No Priority',
// };

// const Card = ({ ticket }) => (
//   <div className="card">
//     <div className="card-header">
//       <img
//         src={priorityIcons[ticket.priority] || NoPriorityIcon}
//         alt={priorityLabels[ticket.priority]}
//         className="priority-icon"
//       />
//       <span>{ticket.title}</span>
//     </div>
//     <p>{ticket.description || 'No description available'}</p>
//     <div className="card-footer">
//       <span>{priorityLabels[ticket.priority]}</span>
//       <span>{ticket.user || 'Unassigned'}</span>
//     </div>
//   </div>
// );

// export default Card;

import React from 'react';
import '../styles/Card.css';

// Import priority icons
import UrgentIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
import HighPriorityIcon from '../assets/icons/Img - High Priority.svg';
import MediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
import LowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
import NoPriorityIcon from '../assets/icons/No-priority.svg';

const priorityIcons = {
  4: UrgentIcon,
  3: HighPriorityIcon,
  2: MediumPriorityIcon,
  1: LowPriorityIcon,
  0: NoPriorityIcon,
};

const priorityLabels = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No Priority',
};

const Card = ({ ticket }) => (
  <div className="card">
    <div className="card-header">
      <span className="ticket-id">{ticket.id}</span>
      <img
        src={priorityIcons[ticket.priority] || NoPriorityIcon}
        alt={priorityLabels[ticket.priority]}
        className="priority-icon"
      />
    </div>
    <h2 className="card-title">{ticket.title}</h2>
    <div className="card-tag">
      {ticket.tag && ticket.tag.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
    <div className="card-footer">
      <span className="user-avatar">{ticket.user || 'Unassigned'}</span>
    </div>
  </div>
);

export default Card;
