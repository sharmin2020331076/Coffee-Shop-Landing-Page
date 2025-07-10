type ButtonProps = {
  text: string;                         // Button text
  height?: string;                     // Optional height (e.g., "3rem")
  width?: string;                      // Optional width (e.g., "10rem")
  background?: string;                 // Optional solid background color (used only if variant is 'solid')
  variant?: 'solid' | 'gradient';      // Controls button style
  onClick?: () => void;                // Optional click handler
};

const Button: React.FC<ButtonProps> = ({
  text,
  height,
  width,
  background,
  variant = 'solid', // default to 'solid' if not passed
  onClick,
}) => {
  // Inline styles for sizing and shadow
  const style = {
    height,
    width,
    // Apply custom background only for solid variant
    background: variant === 'solid' ? background : undefined,
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.5)', // consistent shadow
  };

  // Use class from index.css depending on variant
  const variantClass = variant === 'gradient' ? 'bg-grad' : 'bg-coffee';

  return (
    <button
      onClick={onClick}
      style={style}
      className={`flex items-center justify-center text-white rounded-full shadow-2xl ${variantClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
