import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Check } from 'lucide-react';

const stepperVariants = cva('flex items-center text-textSecondary');

const stepVariants = cva(
  'flex items-center',
  {
    variants: {
      status: {
        incomplete: 'text-gray-500',
        current: 'text-primary-600',
        complete: 'text-green-600',
      },
    },
    defaultVariants: {
      status: 'incomplete',
    },
  }
);

const stepCircleVariants = cva(
  'flex items-center justify-center w-8 h-8 rounded-full border-2',
  {
    variants: {
      status: {
        incomplete: 'border-borderHeavy bg-backgroundSecondary',
        current: 'border-primary bg-backgroundPrimary text-textPrimary',
        complete: 'border-success bg-success text-white',
      },
    },
    defaultVariants: {
      status: 'incomplete',
    },
  }
);

export interface Step {
  label: string;
  description?: string;
}

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stepperVariants> {
  steps: Step[];
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({
  className,
  steps,
  currentStep,
  ...props
}) => {

  return (
    <div className={stepperVariants({ className })} {...props}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className={stepVariants({ status: index < currentStep ? 'complete' : index === currentStep ? 'current' : 'incomplete' })}>
            <div 
              className={stepCircleVariants({ status: index < currentStep ? 'complete' : index === currentStep ? 'current' : 'incomplete' })}
            >
              {index < currentStep ? (
                <Check size={16} />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium" >{step.label}</p>
              {step.description && (
                <p className="text-sm" >{step.description}</p>
              )}
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="flex-1 border-t-2 mx-4"  />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

Stepper.displayName = 'Stepper';