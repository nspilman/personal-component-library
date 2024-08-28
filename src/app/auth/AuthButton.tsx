"use client"
import { Button } from "@/components";


interface Props{
    label: string;
    onClick: () => void;
    icon?: JSX.Element;
}
export const AuthButton = ({
    label,
    onClick,
    icon
}: Props) => (
    <Button 
    variant="secondary" 
    className="w-full mb-3"
    leftIcon={icon}
    onClick={onClick}
  >
   {label}
  </Button>
)