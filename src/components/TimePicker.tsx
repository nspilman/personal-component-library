import React, { useState } from 'react';

export interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ value = '', onChange }) => {
  const [time, setTime] = useState(value);

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <input
      type="time"
      value={time}
      onChange={handleTimeChange}
      className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
    />
  );
};