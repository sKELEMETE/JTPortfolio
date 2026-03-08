export default function SkillCard({ icon, Name, Percent }) {
  return (
    <div className="group relative w-full rounded-[10px] border border-gray-500 px-2 pb-2 pt-5 sm:w-[48%] lg:w-[45%]">
      <div className=" flex flex-col w-full h-full">
        <div className="mb-1 flex  flex-row justify-start items-center w-full h-full">
          <img src={`${icon}`} alt={`${Name} logo`} className="mr-2 w-8 sm:w-[15%]" />
          <h1
            className=" font-[Poppins] font-bold text-[#EEEEEE] tracking-[2px] 
               truncate overflow-hidden text-ellipsis  
               transition-all duration-300 
           group-hover:overflow-visible z-100"
          >
            {Name}
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="relative w-full h-3 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] overflow-hidden shadow-inner shadow-black/50">
            <div
              className="absolute top-[2px] left-[2px] h-[calc(100%-4px)]  bg-[#00ADB5]/70 shadow-[0_0_12px_rgba(124,58,237,0.4)]"
              style={{ width: `calc(${Percent}% - 4px)` }}
            />
          </div>
        </div>
        {/* <h2 className="font-light text-[20px] text-[#00ADB5]">
          {Percent < 50 ? "Good" : Percent === 50 ? "Great" : "Mastered"}
        </h2> */}
      </div>

      {/* Corner borders with glowing neon filter */}
      {/* <span
        className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#00ADB5] bg-transparent
            [filter:drop-shadow(0_0_5px_#00ADB5)_drop-shadow(0_0_10px_#00ADB5)_drop-shadow(0_0_20px_#00ADB5)_drop-shadow(0_0_40px_#00ADB5)]"
      />
      <span
        className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#00ADB5] bg-transparent
            [filter:drop-shadow(0_0_5px_#00ADB5)_drop-shadow(0_0_10px_#00ADB5)_drop-shadow(0_0_20px_#00ADB5)_drop-shadow(0_0_40px_#00ADB5)]"
      />
      <span
        className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#00ADB5] bg-transparent
            [filter:drop-shadow(0_0_5px_#00ADB5)_drop-shadow(0_0_10px_#00ADB5)_drop-shadow(0_0_20px_#00ADB5)_drop-shadow(0_0_40px_#00ADB5)]"
      />
      <span
        className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#00ADB5] bg-transparent
            [filter:drop-shadow(0_0_5px_#00ADB5)_drop-shadow(0_0_10px_#00ADB5)_drop-shadow(0_0_20px_#00ADB5)_drop-shadow(0_0_40px_#00ADB5)]"
      /> */}
    </div>
  );
}

export function LockSkill({ icon, Name }) {
  return (
    <div className="relative mb-2 mt-2 w-full px-3 pb-3 opacity-50 blur-[2px] sm:w-[48%] lg:w-[45%]">
      <div className=" flex flex-col w-full h-full">
        <div className="flex flex-row justify-start items-center w-full h-full ">
          <img src={`${icon}`} alt={`${Name} logo`} className="mr-2 w-8 sm:w-[15%]" />
          <h1
            className="w-full max-w-full font-[Poppins] font-bold text-black tracking-[2px]
  text-[clamp(0.9rem, 1.5vw + 0.3rem, 1.5rem)]
 "
          >
            {Name}
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="relative w-full h-5 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] overflow-hidden shadow-inner shadow-black/50">
            <div
              className="absolute top-[2px] left-[2px] h-[calc(100%-4px)]  bg-[#75BA75] shadow-[0_0_12px_rgba(124,58,237,0.4)]"
              style={{ width: `calc(0% - 4px)` }}
            />
          </div>
        </div>
        {/* <h2 className="font-light text-[20px] text-[#00ADB5]">
          {Percent < 50 ? "Good" : Percent === 50 ? "Great" : "Mastered"}
        </h2> */}
      </div>

      {/* Corner borders with glowing neon filter */}
      <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-black" />
      <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-black" />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-black" />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-black" />
    </div>
  );
}

export function SkillTitle({ Title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center p-3 sm:p-4 lg:p-5
  bg-transparent text-gray-400 
  font-[Poppins] text-[18px] sm:text-[22px] lg:text-[26px] tracking-[1px]
  transition-all duration-500 ease-in-out 
  hover:text-[#00ADB5] 
  group overflow-hidden cursor-pointer"
    >
      <span
        className="absolute left-0 top-1/2 h-[60%] w-[2px] -translate-y-1/2 
    bg-gradient-to-b from-transparent via-[#00ADB5] to-transparent
    opacity-100 
    transition-all duration-500 ease-[cubic-bezier(0.37,1.95,0.66,0.56)] 
    before:content-[''] before:absolute before:h-[60%] before:w-[300%] before:top-1/2 before:-translate-y-1/2 before:bg-[#00ADB5] before:blur-[10px] before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-500 before:ease-in-out
    after:content-[''] after:absolute after:left-0 after:h-full after:w-[400px] after:bg-gradient-to-r after:from-[#00ADB51c] after:to-transparent after:opacity-0 group-hover:after:opacity-100 after:transition-all after:duration-500 after:ease-in-out"
      ></span>

      <h1
        className="font-medium text-[rgba(238,238,238,0.8)] transition-all duration-500 ease-in-out
    group-hover:text-[#00ADB5] "
      >
        {Title}
      </h1>
    </button>
  );
}
