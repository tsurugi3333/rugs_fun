import React from 'react';

interface StoryProps {
  fullPage?: boolean;
}

export default function Story({ fullPage = false }: StoryProps) {
  return (
    <section id="story" className={`py-16 bg-white border-b-3 text-black ${fullPage ? 'pt-24' : ''}`}>
      <div className="container flex flex-col text-center items-center mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto absolute z-10">
          <img src="/images/Paragraph+Background+Border+Shadow.png" alt="" width={600}/>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-35 max-w-5xl mx-auto border border-2 relative " style={{ 
              boxShadow: '4px 4px 5px rgba(0, 0, 0, 4)',
            }}>
          <div className="bg-white rounded-xl p-6">
            <h3 className="rounded-md font-semibold mb-4 border border-1 absolute -mt-10 bg-white"><img src="/images/fromharm.png" alt="" className='px-2 py-1' width={260}/></h3>
            <div className="comic-bg-1 rounded-lg mb-4 overflow-hidden relative mt-20 h-100 border border-2 " style={{ 
              boxShadow: '2px 2px 3px rgba(50, 50, 50, 4)',
            }}>
                <p className=" w-[80%] mt-40 ml-4 border-2 rounded-sm bg-white justify-center hidden md:block">
                  <img src="/images/asymbol.png" alt="" className='px-2 py-1'/>
                </p>
            </div>
            
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="rounded-md font-semibold mb-4 border border-1  absolute -mt-10 bg-white"><img src="/images/therewas.png" alt="" className='px-2 py-2' width={260}/></h3>
            <div className="comic-bg-2 rounded-lg mb-4 overflow-hidden relative mt-20 h-100 border border-2 " style={{ 
              boxShadow: '2px 2px 3px rgba(50, 50, 50, 4)',
            }}>
              <p className="text-xs w-[80%] mt-40 ml-4 border-2 rounded-sm bg-white justify-center className='px-2 py-1 hidden md:block">
                <img src="/images/powerstyle.png" alt="" className='px-2 py-1'/>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="rounded-md font-semibold mb-4 border border-1  absolute -mt-10 bg-white"><img src="/images/thencame.png" alt="" className='px-3 py-5' width={220}/></h3>
            <div className="comic-bg-3 rounded-lg mb-4 overflow-hidden relative mt-20 h-100 border border-2 " style={{ 
              boxShadow: '2px 2px 3px rgba(50, 50, 50, 4)',
            }}>
              <p className="text-xs w-[80%] mt-70 ml-4 border-2 rounded-sm bg-white justify-center">
                <img src="/images/butlegends.png" alt="" className='px-2 py-1'/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}