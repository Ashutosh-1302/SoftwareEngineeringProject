"use client"
import React, { useState } from 'react';

export default function MyComponent() {
  // State variables to manage section visibility
  const [showLectures, setShowLectures] = useState(true);
  const [showResources, setShowResources] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setShowLectures(section === 'lectures');
    setShowResources(section === 'resources');
    setShowFeedback(section === 'feedback');
  };

  return (
    <div className='flex flex-col w-full gap-x-5 p-2'>
      <div className='w-full h-fit'>
        <img className='w-full h-64' src="https://www.nitp.ac.in/static/38e3ca6dcde2d64b3a8dd024e041b302/d8255/homebg-1.jpg" alt="Course Image" />
      </div>
      <div className='p-3 flex flex-row gap-x-8 justify-between w-3/4'>
      <div >
        <h1 className='font-bold text-4xl'>Course 1</h1>
        <h2 className='pt-1'>The course description goes here</h2>
      </div>
      <div>
      <h1 className='font-bold text-3xl'>About the Instructor</h1>
        <h2 className='pt-1'>The Instructor experience goes here!!</h2>
      </div>
      </div>
      <div className='flex flex-row gap-x-6 p-2 pt-4 justify-between w-1/2'>
        <div>
          <button onClick={() => toggleSection('lectures')}>Lectures</button>
        </div>
        <div>
          <button onClick={() => toggleSection('resources')}>Resources</button>
        </div>
        <div>
          <button onClick={() => toggleSection('feedback')}>Feedback</button>
        </div>
        <hr className='bg-black' />
      </div>

      {/* Lecture content */}
      {showLectures && (
        <div className='flex flex-col p-1 py-4 gap-y-8 justify-center items-start'>
          {/* ... (your lecture content) ... */}
          <div className='flex flex-row gap-x-6 '>
             <div>
           <img src='https://www.nitp.ac.in/static/38e3ca6dcde2d64b3a8dd024e041b302/d8255/homebg-1.jpg' className='h-36'></img>
             </div>
             <div>
               <h1> Lecture 1</h1>
               <h1>Description</h1>
                            </div>
          </div>
          <div className='flex flex-row gap-x-6 '>
             <div>
           <img src='https://www.nitp.ac.in/static/38e3ca6dcde2d64b3a8dd024e041b302/d8255/homebg-1.jpg' className='h-36'></img>
             </div>
             <div>
               <h1> Lecture 1</h1>
               <h1>Description</h1>
                            </div>
          </div>
          <div className='flex flex-row gap-x-6 '>
             <div>
           <img src='https://www.nitp.ac.in/static/38e3ca6dcde2d64b3a8dd024e041b302/d8255/homebg-1.jpg' className='h-36'></img>
             </div>
             <div>
               <h1> Lecture 1</h1>
               <h1>Description</h1>
                            </div>
          </div>
          <div className='flex flex-row gap-x-6 '>
             <div>
           <img src='https://www.nitp.ac.in/static/38e3ca6dcde2d64b3a8dd024e041b302/d8255/homebg-1.jpg' className='h-36'></img>
             </div>
             <div>
               <h1> Lecture 1</h1>
               <h1>Description</h1>
                            </div>
          </div>
        </div>
      )}

      {/* Resources section */}
      {showResources && (
        <div>
          This is the Resources section
        </div>
      )}

      {/* Feedback section */}
      {showFeedback && (
        <div>
          This is the Feedback section
        </div>
      )}
    </div>
  );
}
