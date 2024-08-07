import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

export interface CarouselProps {
  slides: React.ReactNode[];
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme } = useTheme();

  const customStyles = {
    '--carousel-bg-color': theme.colors.gray['200'],
    '--carousel-control-bg-color': theme.colors.white,
    '--carousel-control-color': theme.colors.gray['700'],
    '--carousel-indicator-color': theme.colors.white,
    '--carousel-indicator-active-color': theme.colors.primary.DEFAULT,
  } as React.CSSProperties;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative" style={customStyles}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            onClick={goToPrevSlide}
            style={{ backgroundColor: 'var(--carousel-control-bg-color)', color: 'var(--carousel-control-color)' }}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
            onClick={goToNextSlide}
            style={{ backgroundColor: 'var(--carousel-control-bg-color)', color: 'var(--carousel-control-color)' }}
          >
            <ChevronRight />
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-primary' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => goToSlide(index)}
              style={{ 
                backgroundColor: index === currentSlide 
                  ? 'var(--carousel-indicator-active-color)' 
                  : 'var(--carousel-indicator-color)' 
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = 'Carousel';