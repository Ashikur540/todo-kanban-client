import { genRandomNum } from "../../lib/utils";

const AvatarWithName = () => {
  return (
    <>
      <div className="flex items-center mb-2 gap-2">
        <img
          src={`https://randomuser.me/api/portraits/men/${genRandomNum(
            1,
            40
          )}.jpg`}
          alt={`user-image`}
          className="w-7 h-7 rounded-full"
        />

        <p className="text-sm font-semibold text-[#666666]">Sadik Istiak</p>
      </div>
    </>
  );
};

export default AvatarWithName;
