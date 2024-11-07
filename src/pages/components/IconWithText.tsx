import { LucideIcon } from "lucide-react";

type IconWithTextProps = {
  icon: LucideIcon | JSX.Element;
  text: string;
};
const IconWithText = ({ icon, text }: IconWithTextProps) => {
  return (
    <div className=" flex justify-start items-center text-xs text-[#666666] gap-1 cursor-pointer">
      <>{icon}</>
      <span>{text ?? 15} </span>
    </div>
  );
};

export default IconWithText;
