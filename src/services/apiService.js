export const fetchTickets = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) {
        throw new Error(`Failed to fetch tickets: ${response.status}`);
      }
      const data = await response.json();
  
      // Map userId to user names
      const userMap = data.users.reduce((acc, user) => {
        acc[user.id] = user.name;
        return acc;
      }, {});
  
      // Add user names to tickets
      const ticketsWithUserNames = data.tickets.map((ticket) => ({
        ...ticket,
        user: userMap[ticket.userId] || 'Unassigned',
      }));
  
      console.log('Processed Tickets:', ticketsWithUserNames); // Debugging log
      return ticketsWithUserNames;
    } catch (error) {
      console.error(error.message);
      return [];
    }
  };
  