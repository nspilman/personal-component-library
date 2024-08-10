import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { useTheme } from '../theme/ThemeProvider';

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate = new Date(), onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { theme } = useTheme();



  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const handleDateClick = (date: Date) => {
    onDateSelect && onDateSelect(date);
  };

  return (
    <div className="w-64" style={{ backgroundColor: 'var(--calendar-bg-color)', color: 'var(--calendar-text-color)' }}>
      <div className="flex justify-between items-center mb-4">
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>&lt;</button>
        <h2 className="text-lg font-semibold">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center font-medium">{day}</div>
        ))}
        {daysInMonth.map(day => (
          <button
            key={day.toString()}
            className={`p-2 text-center ${
              !isSameMonth(day, currentMonth) ? 'text-gray-300' :
              isSameDay(day, selectedDate) ? 'bg-primary text-white' : ''
            }`}
            onClick={() => handleDateClick(day)}
            style={{
              backgroundColor: isSameDay(day, selectedDate) ? 'var(--calendar-selected-bg-color)' : 
                               isSameDay(day, new Date()) ? 'var(--calendar-today-bg-color)' : 'transparent',
              color: isSameDay(day, selectedDate) ? 'var(--calendar-selected-text-color)' : 
                     !isSameMonth(day, currentMonth) ? 'var(--calendar-text-color)' : 'inherit',
              ':hover': {
                backgroundColor: 'var(--calendar-hover-bg-color)',
              },
            }}
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  );
};