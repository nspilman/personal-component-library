import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay } from 'date-fns';
import { cva } from 'class-variance-authority';


const calendarButton = cva('p-2 text-center text-textPrimary hover:text-textPrimary', {
  variants: {
    isCurrentMonth: {
      true: '',
      false: 'text-textSecondary',
    },
    isSelected: {
      true: 'bg-primary text-white',
      false: '',
    },
    isToday: {
      true: ' text-primary border-2 rounded-full border-heavy p-0',
      false: '',
    },
  },
  defaultVariants: {
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
});

export interface CalendarProps {
  selectedDate?: Date;
  onDateSelect?: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate = new Date(), onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const handleDateClick = (date: Date) => {
    onDateSelect && onDateSelect(date);
  };

  return (
    <div className='w-64'>
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
            className={calendarButton({
              isCurrentMonth: isSameMonth(day, currentMonth),
              isSelected: isSameDay(day, selectedDate),
              isToday: isSameDay(day, new Date()),
            })}
            onClick={() => handleDateClick(day)}
          >
            {format(day, 'd')}
          </button>
        ))}
      </div>
    </div>
  );
};