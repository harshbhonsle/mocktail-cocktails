import React from "react";
import gsap from "gsap";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App =()=>{
    return(
        <main>
            <Navbar/>
            <Hero/>
            <div className="h-dvh bg-black"></div>
        </main>
    )
}

export default App;