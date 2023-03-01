import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  className = "",
  ...rest
}) => {
  const getVariant = () => {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      case "tertiary":
        return "btn-tertiary";
      default:
        return "btn-primary";
    }
  };

  const getSize = () => {
    switch (size) {
      case "small":
        return "btn-small";
      case "medium":
        return "btn-medium";
      case "large":
        return "btn-large";
      default:
        return "btn-medium";
    }
  };

  return (
    <button
      className={`btn ${getSize()} ${getVariant()} ${className}`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
