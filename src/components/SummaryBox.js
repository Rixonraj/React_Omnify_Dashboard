import React, { useState, useEffect } from 'react';

const SummaryBox = ({ data }) => {
  const [allWaitlistCount, setAllWaitlistCount] = useState(0);
  const [newlyAddedCount, setNewlyAddedCount] = useState(0);
  const [leadsCount, setLeadsCount] = useState(0);

  useEffect(() => {
    // Calculate all waitlist count
    setAllWaitlistCount(data.length);

    // Calculate newly added count (for today)
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const startOfDayUnix = Math.floor(startOfDay.getTime() / 1000);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);
    const endOfDayUnix = Math.floor(endOfDay.getTime() / 1000);

    const newlyAdded = data.filter(item => {
      return item.createdOn >= startOfDayUnix && item.createdOn <= endOfDayUnix;
    });
    setNewlyAddedCount(newlyAdded.length);

    // Calculate leads count
    const leads = data.filter(item => item.status === 'Lead');
    setLeadsCount(leads.length);
  }, [data]);

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">All Waitlist</h3>
        <p className="text-2xl">{allWaitlistCount}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">Newly Added</h3>
        <p className="text-2xl">{newlyAddedCount}</p>
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold">Leads</h3>
        <p className="text-2xl">{leadsCount}</p>
      </div>
    </div>
  );
};

export default SummaryBox;
