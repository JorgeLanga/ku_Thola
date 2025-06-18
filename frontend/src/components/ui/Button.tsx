import type { ButtonProps } from "@/types/recruiterProps"; 

export const Button = ({
  text,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all";

  const variants = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1E3A8A]",
    secondary: "bg-[#60A5FA] text-[#111827] hover:bg-[#3B82F6]",
    outline: "border border-[#2563EB] text-[#2563EB] hover:bg-[#E0F2FE]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]}${
        disabled ? " opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text}
    </button>
  );
};
