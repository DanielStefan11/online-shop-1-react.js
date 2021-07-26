import React from "react";
// React icons
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function ScrollButton(props) {
   const { scrollBtnVizibility, handleScrollToTop } = props;

   return (
      <div>
         {scrollBtnVizibility ? (
            <button style={scrollBtn} onClick={() => handleScrollToTop()}>
               <IoIosArrowDropupCircle
                  size="3rem"
                  style={scrollIcon}
                  onClick={() => handleScrollToTop()}
               />
            </button>
         ) : null}
      </div>
   );
}

const scrollBtn = {
   zIndex: 1,
   cursor: "pointer",
   position: "fixed",
   right: "20px",
   bottom: "20px",
   backgroundColor: "transparent",
   color: "#6A8ED9",
   outline: "none",
   border: "none",
};

const scrollIcon = {
   cursor: "pointer",
};
