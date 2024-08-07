import React, { useState } from 'react';
import { useTheme } from '../theme/ThemeProvider';

export interface TimePickerProps {
  value?: string;
  onChange?: (time: string) => void;
}

export const TimePicker: React.FC<TimePickerProps> = ({ value = '', onChange }) => {
  const [time, setTime] = useState(value);
  const { theme } = useTheme();

  const customStyles = {
    '--timepicker-border-color': theme.colors.gray['300'],
    '--timepicker-focus-border-color': theme.colors.primary.DEFAULT,
    '--timepicker-focus-ring-color': theme.colors.primary.DEFAULT,
    '--timepicker-text-color': theme.colors.gray['700'],
    '--timepicker-placeholder-color': theme.colors.gray['400'],
  } as React.CSSProperties;

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <input
      type="time"
      value={time}
      onChange={handleTimeChange}
      className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1"
      style={{
        ...customStyles,
        borderColor: 'var(--timepicker-border-color)',
        color: 'var(--timepicker-text-color)',
        '::placeholder': { color: 'var(--timepicker-placeholder-color)' },
        ':focus': {
          borderColor: 'var(--timepicker-focus-border-color)',
          boxShadow: `0 0 0 1px var(--timepicker-focus-ring-color)`,
        },
      }}
    />
  );
};

TimePicker.displayName = 'TimePicker';