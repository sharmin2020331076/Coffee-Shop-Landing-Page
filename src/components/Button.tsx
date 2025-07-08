type ButtonProps = {
  text: string;
  height?: string;
  width?: string;
 background?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, height, width, onClick,background }) => {
   // Confirm values

  return (
    <button
      onClick={onClick}
      style={{ height, width, background }}
      className="flex items-center justify-center text-white rounded-full"
    >
      {text}
    </button>
  );
};

export default Button;