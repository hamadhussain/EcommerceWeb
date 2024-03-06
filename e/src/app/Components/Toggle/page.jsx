// 'use client'
// import React, { useState } from 'react';
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons"


// const ToggleButton = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleMode = () => {
//     setIsDarkMode(prevMode => !prevMode);
//     document.body.classList.toggle('dark');
//   };

//   return (
//     <button
//       className={`px-2 py-2 rounded-full ${
//         isDarkMode ? 'bg-gray-200' : ' bg-yellow-300'
//       } text-black font-bold`}
//       onClick={toggleMode}
//     >
//       {isDarkMode ? <MoonIcon /> : <SunIcon />}
//     </button>
//   );
// };

// export default ToggleButton;



'use client'
import React, { useState } from 'react';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

const ToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    document.body.classList.toggle('dark');
  };

  return (
    <button
      className={`px-4 py-2 rounded-full ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
      } text-white font-bold`}
      onClick={toggleMode}
    >
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ToggleButton;
