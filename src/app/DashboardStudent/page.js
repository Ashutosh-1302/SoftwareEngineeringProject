import React from 'react'

export default function StudentDashboard() {
  return (
    <div className='flex justify-between p-4'>
     <div className='flex flex-col border-red-600 border-2 rounded-lg p-3 bg-green-600 w-1/6'>
      <div className='flex gap-x-3'>
        <div>
      <img src ='
https://www.nitp.ac.in/static/38e3ca6dcde2d64b3a8dd024e041b302/d8255/homebg-1.jpg' className='rounded-full h-16 w-16'></img>
        </div>
        <div>
      <h1 className='text-l '>Welcome Ashutosh Singh!</h1>
      <h2 className='pl-8'>SID:xxxxx6226</h2>
        </div>
        <hr className='border border-solid border-black'></hr>
        </div>
    <div className='flex flex-col gap-y-5 pt-10 justify-center items-center'>
        <a href="/DashboardTeacher">Account</a>
        <a href="/DashboardTeacher">Certifications</a>
        <a href="/DashboardTeacher">Instructor</a>
        <a href="/DashboardTeacher">Setting</a>
 </div>
 <div className='flex flex-col items-center pt-20 gap-y-6'>
       <a href ="/DashboardTeacher" className='font-bolder text-2xl'>Feedback</a>
       <button className='border border-solid border-red-500 bg-red-600 rounded-lg w-full'>LOGOUT</button>
     </div>
     </div>
     
     <div className='flex flex-col border-grey-600 border-2 rounded-lg p-3 shadow-md gap-y-2 pt-3 w-3/6'>
     <div className='flex flex-col border-grey-600 border-2 rounded-lg p-3 shadow-sm gap-y-3'>
          <h1 className='text-sm font-semibold'>Course 1</h1>
          <h1 className='text-sm font-semibold'>INSTRUCTOR:XYZ</h1>
          <h1 className='text-sm font-semibold'>TA:ABC</h1>
          <h1 className='text-l font-semibold'>Progress Bar</h1>
     </div>
     <div className='flex flex-col border-grey-600 border-2 rounded-lg p-3 shadow-sm gap-y-3'>
          <h1 className='text-sm font-semibold'>Course 1</h1>
          <h1 className='text-sm font-semibold'>INSTRUCTOR:XYZ</h1>
          <h1 className='text-sm font-semibold'>TA:ABC</h1>
          <h1 className='text-l font-semibold'>Progress Bar</h1>
     </div>
     <div className='flex flex-col border-grey-600 border-2 rounded-lg p-3 shadow-sm gap-y-3'>
          <h1 className='text-sm font-semibold'>Course 1</h1>
          <h1 className='text-sm font-semibold'>INSTRUCTOR:XYZ</h1>
          <h1 className='text-sm font-semibold'>TA:ABC</h1>
          <h1 className='text-l font-semibold'>Progress Bar</h1>
     </div>
     
     
     <div>

     </div>
     <div>

     </div>
    </div>
     <div className='flex flex-col border-2 rounded-lg p-4'>
  <div className='flex flex-row gap-x-5'>
  <input placeholder='Search' type="text" className='border border-solid border-gray-500 shadow-md rounded-lg px-3 py-2'></input>
   <h2>Bell Icon</h2>
  </div>
<div className='flex flex-row gap-x-5 pt-3'>
<div className='flex flex-row gap-x-2 '>
<button className='rounded-lg bg-green-400 px-2'>Clock Icon</button>
     <button className='rounded-lg bg-pink-400 px-2'>25 mintues of 1.5 hours remaining</button>
</div>
<div>
<button className='rounded-lg bg-orange-400 px-4 py-4'>50</button>
</div>
</div>
<div className='flex flex-col justify-between border border-solid border-gray-500 rounded-lg mt-4 gap-y-8 py-4 bg-slate-500'>
    <h1 className='font-bold text-center'> Task Manager</h1>
    <div className='items-center flex flex-col'>
        <div><input placeholder='Search' type="checkbox" className='border border-solid border-gray-500 shadow-md rounded-lg px-3 py-2'></input>Demo</div>
        <div><input placeholder='Search' type="checkbox" className='border border-solid border-gray-500 shadow-md rounded-lg px-3 py-2'></input>Demo</div>
        <div><input placeholder='Search' type="checkbox" className='border border-solid border-gray-500 shadow-md rounded-lg px-3 py-2'></input>Demo</div>
        <div><input placeholder='Search' type="checkbox" className='border border-solid border-gray-500 shadow-md rounded-lg px-3 py-2'></input>Demo</div>
        <div><input placeholder='Search' type="checkbox" className='border border-solid border-gray-500 shadow-md rounded-lg px-3 py-2'></input>Demo</div>
        <div><input placeholder='Search' type="checkbox" className='border border-solid border-gray-500 shadow-md rounded-lg px-3 py-2'></input>Demo</div>
        
    </div>
    
    
</div>
<div className='flex flex-col border-grey-600 border-2 rounded-lg p-3 shadow-sm gap-y-3 mt-4'>
          <h1 className='text-sm font-semibold'>Course 1</h1>
          <h1 className='text-sm font-semibold'>INSTRUCTOR:XYZ</h1>
          <h1 className='text-sm font-semibold'>TA:ABC</h1>
          <h1 className='text-l font-semibold'>Progress Bar</h1>
     </div>
     </div>
     
     <div>
     </div>
</div>
)
}
