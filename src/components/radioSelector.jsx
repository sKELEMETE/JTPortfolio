export default function RadioSelector({ onChange }) {
  return (
    <div className="relative flex flex-col pl-2" style={{ "--total-radio": 2 }}>
      <input
        id="radio-soft"
        name="radio"
        type="radio"
        value="soft"
        defaultChecked
        className="cursor-pointer appearance-none"
        onChange={(e) => onChange(e.target.value)}
      />
      <label
        htmlFor="radio-soft"
        className="cursor-pointer p-4 text-gray-400 transition-all duration-300 ease-in-out"
      >
        Soft Skills
      </label>

      <input
        id="radio-hard"
        name="radio"
        type="radio"
        value="tech"
        className="cursor-pointer appearance-none"
        onChange={(e) => onChange(e.target.value)}
      />
      <label
        htmlFor="radio-hard"
        className="cursor-pointer p-4 text-gray-400 transition-all duration-300 ease-in-out"
      >
        Technical Skills
      </label>

      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1b1b1b] to-transparent">
        <div className="relative h-[calc(100%/var(--total-radio))] w-full transition-transform duration-500 ease-[cubic-bezier(0.37,1.95,0.66,0.56)] bg-gradient-to-b from-transparent via-[#00ADB5] to-transparent glider"></div>
      </div>

      <style>{`
        :root {
          --main-color: #00ADB5;
          --main-color-opacity: #00ADB51c;
        }
        input:checked + label {
          color: var(--main-color);
        }
        input:nth-of-type(1):checked ~ div .glider {
          transform: translateY(0);
        }
        input:nth-of-type(2):checked ~ div .glider {
          transform: translateY(100%);
        }
        .glider::before {
          content: "";
          position: absolute;
          height: 60%;
          width: 300%;
          top: 50%;
          transform: translateY(-50%);
          background: var(--main-color);
          filter: blur(10px);
        }
        .glider::after {
          content: "";
          position: absolute;
          left: 0;
          height: 100%;
          width: 150px;
          background: linear-gradient(90deg, var(--main-color-opacity) 0%, transparent 100%);
        }
      `}</style>
    </div>
  );
}
