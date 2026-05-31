
export default function RadioSelector({ onChange }) {
  return (
    <div
      className="
        flex
        lg:flex-col
        flex-row
        gap-3
        w-full
        lg:w-auto
        justify-center
      "
    >
      <button
        onClick={() => onChange("soft")}
        className="
          px-5
          py-3
          rounded-full
          border
          border-[#00ADB5]/30
          text-[#EEEEEE]
          hover:bg-[#00ADB5]/10
          transition-all
          duration-300
          font-[Poppins]
          text-sm
          sm:text-base
          cursor-pointer
        "
      >
        Soft Skills
      </button>

      <button
        onClick={() => onChange("tech")}
        className="
          px-5
          py-3
          rounded-full
          border
          border-[#00ADB5]/30
          text-[#EEEEEE]
          hover:bg-[#00ADB5]/10
          transition-all
          duration-300
          font-[Poppins]
          text-sm
          sm:text-base
          cursor-pointer
        "
      >
        Technical Skills
      </button>
    </div>
  );
}