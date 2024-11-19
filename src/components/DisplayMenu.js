import React from 'react';
import '../styles/Menu.css';

// Import icons
import DisplayIcon from '../assets/icons/Display.svg';
import DownIcon from '../assets/icons/down.svg';

const DisplayMenu = ({ groupBy, sortBy, setGroupBy, setSortBy }) => (
  <div className="menu">
    <div className="menu-item">
      <img src={DisplayIcon} alt="Display" className="menu-icon" />
      <label>Group By</label>
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
    <div className="menu-item">
      <label>Sort By</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
      <img src={DownIcon} alt="Dropdown" className="menu-icon" />
    </div>
  </div>
);

export default DisplayMenu;
