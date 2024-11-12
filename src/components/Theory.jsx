import React, { useState } from 'react';
import { LessonList } from '../data/Lessons';

function Theory() {
    const [activePart, setActivePart] = useState('PART 1');

    const btnItem = "flex flex-col font-semibold py-[10px] px-[15px] border-2 rounded-[6px]";
    const btnHover = "transition-all ease-in delay-[0.6] hover:border-[#F3CD03] hover:text-[#F3CD03]";
    const activeClass = "border border-[#F3CD03] text-[#F3CD03]"; // Active button styles

    return (
        <>
            <div className='py-[25px] flex justify-center gap-[50px] text-center items-center'>
                <button 
                    className={`${btnItem} ${btnHover} ${activePart === 'PART 1' ? activeClass : ''}`} 
                    onClick={() => setActivePart('PART 1')}
                >
                    <span className='font-normal font-mono'>PART 1</span>
                    The JavaScript language
                </button>
                <button 
                    className={`${btnItem} ${btnHover} ${activePart === 'PART 2' ? activeClass : ''}`} 
                    onClick={() => setActivePart('PART 2')}
                >
                    <span className='flex font-normal font-mono'>PART 2</span>
                    Browser: Document, Events, Interfaces
                </button>
                <button 
                    className={`${btnItem} ${btnHover} ${activePart === 'PART 3' ? activeClass : ''}`} 
                    onClick={() => setActivePart('PART 3')}
                >
                    <span className='flex font-normal font-mono'>PART 3</span>
                    Additional articles
                </button>
            </div>
            <div className=''>
                {LessonList.map((item) => (
                    <ul key={item.id}>
                        <li><a href={item.link}>{item.name}</a></li>
                    </ul>
                ))}  
            </div>
        </>
    );
}

export default Theory;
