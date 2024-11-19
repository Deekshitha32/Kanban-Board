export const groupTickets = (tickets, groupBy) => {
    if (!Array.isArray(tickets) || tickets.length === 0) {
      console.warn('No tickets to group');
      return {};
    }
    return tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy] || 'Unassigned';
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  };
  
  export const sortTickets = (tickets, sortBy) => {
    const sortedTickets = [...tickets]; // Make a shallow copy to avoid mutating the original
    return sortedTickets.sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  };
  