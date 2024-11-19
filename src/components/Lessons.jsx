import React from "react";
import backBtn from "../assets/backBtn.png";
import logo from "../assets/js_logo.png";
import { useNavigate } from "react-router-dom";

function Lessons() {
  const navItem = "py-[5px] border-b-2";
  const itemHover = "transition-all ease-in delay-[0.6] hover:border-[#F3CD03]";
  // const activeClass = "border-b-2 border-[#F3CD03]"; ${activeTab === "Theory" ? activeClass : "border-transparent"}// active tab class
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <>
    <header className="container">
      <nav className="p-[10px] flex justify-between items-center">
        <button
          onClick={handleBack}
          className="font-sans font-semibold w-[30px]"
        >
          <img src={backBtn} alt="Back" />
        </button>
        <div className="flex gap-[30px] font-bold text-[1.125rem]">
        </div>
        <img src={logo} alt="js" className="w-[55px] rounded-md" />
      </nav>
    </header>
    <main>
      <section className="container">
        
      </section>
    </main>

    </>
  );
}

export default Lessons;
