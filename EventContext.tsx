import React, { createContext, useContext, useState, ReactNode } from 'react';

type EventYear = '2024' | '2026';

interface EventContextType {
  year: EventYear;
  setYear: (year: EventYear) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [year, setYear] = useState<EventYear>('2026');

  return (
    <EventContext.Provider value={{ year, setYear }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};
