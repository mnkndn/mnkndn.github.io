import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default ({ iconName, tooltip }) => {
  return (
    <Tippy content={tooltip}>
      <i
        className={`text-4xl md:text-6xl lg:text-8xl cursor-pointer opacity-40 scale-100 hover:scale-110 hover:opacity-100 duration-75 transition-all ${iconName}`}
      ></i>
    </Tippy>
  );
};
