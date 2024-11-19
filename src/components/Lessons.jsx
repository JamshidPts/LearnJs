import React from "react";
import backBtn from "../assets/backBtn.png";
import logo from "../assets/js_logo.png";

function Lessons() {
  
  const navItem = "py-[5px] border-b-2";
  const itemHover = "transition-all ease-in delay-[0.6] hover:border-[#F3CD03]";
  const activeClass = "border-b-2 border-[#F3CD03]"; // active tab class

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
          <button className={`${navItem} ${itemHover} ${activeTab === "Theory" ? activeClass : "border-transparent"}`} onClick={() => setActiveTab("Theory")}>Theory</button>
          <button className={`${navItem} ${itemHover} ${activeTab === "Practice" ? activeClass : "border-transparent"}`} onClick={() => setActiveTab("Practice")}>Practice</button>
          <button className={`${navItem} ${itemHover} ${activeTab === "Challenge of the week" ? activeClass : "border-transparent"}`} onClick={() => setActiveTab("Challenge of the week")}>Challenge of the week</button>
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
