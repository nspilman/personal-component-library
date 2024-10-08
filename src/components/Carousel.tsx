"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

const carouselContainer = cva('relative px-12', {
  variants: {

  },
  defaultVariants: {
    theme: 'light',
  },
});

const carouselControl = cva(
  'absolute top-1/2 transform -translate-y-1/2 rounded-full p-2',
  {
    variants: {
      position: {
        left: 'left-4',
        right: 'right-4',
      },
      theme: {
        light: 'bg-backgroundTertiary text-info',
        dark: 'bg-backgroundTertiary text-info',
      },
    },
    defaultVariants: {
      theme: 'light',
    },
  }
);

const carouselIndicator = cva('w-3 h-3 rounded-full', {
  variants: {
    active: {
      true: 'bg-primary',
      false: 'bg-warning',
    },
  },
  compoundVariants: [
    { active: true,  className: 'bg-primary' },
    { active: false,  className: 'bg-warning' },
  ],
  defaultVariants: {
    active: false,
  },
});

export interface CarouselProps extends VariantProps<typeof carouselContainer> {
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
    <div className={carouselContainer()}>
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
            className={carouselControl({ position: 'left' })}
            onClick={goToPrevSlide}
          >
            <ChevronLeft />
          </button>
          <button
            className={carouselControl({ position: 'right' })}
            onClick={goToNextSlide}
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
              className={carouselIndicator({ active: index === currentSlide })}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Carousel.displayName = 'Carousel';