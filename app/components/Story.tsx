import React from 'react';

interface StoryProps {
  fullPage?: boolean;
}

export default function Story({ fullPage = false }: StoryProps) {
  return (
    <section id="story" className={`py-16 bg-white border-b-3 text-black ${fullPage ? 'pt-24' : ''}`}>
      <div className="container flex flex-col text-center itmes-center justify-center mx-auto px-4 ">
        <img src="/images/Paragraph+Background+Border+Shadow.png" alt="" width={300}/>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto border border-3">
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 border border-3">FROM HARLEM TO HOLLYWOOD, FROM STAGES TO BOARDROOMS—DIDDY DEFINED AN ERA.</h3>
            <div className="aspect-square comic-bg-1 rounded-lg mb-4 overflow-hidden relative">
                <p className="text-xs w-[80%] mt-40 ml-4 border-2 rounded-sm bg-white justify-center">
                A SYMBOL OF HUSTLE, AMBITION, AND
                BLACK EXCELLENCE.
                HE DIDN&apos;T FOLLOW CULTURE, HE WAS THE CULTURE.
                </p>
            </div>
            
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 border border-3">THERE WAS A TIME WHEN HIS NAME ECHOED IN EVERY CLUB, EVERY RADIO STATION, EVERY RED CARPET.</h3>
            <div className="aspect-square comic-bg-2 rounded-lg mb-4 overflow-hidden relative">
            <p className="text-xs w-[80%] mt-40 ml-4 border-2 rounded-sm bg-white justify-center">
                POWER, STYLE, PRESENCE—
                HE WORE THE CROWN WITHOUT NEEDING PERMISSION.
                </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4 border border-3">THEN CAME THE SILENCE. THE HEADLINES. THE DISTANCE.</h3>
            <div className="aspect-square comic-bg-3 rounded-lg mb-4 overflow-hidden relative">
            <p className="text-xs w-[80%] mt-40 ml-4 border-2 rounded-sm bg-white justify-center">
                BUT LEGENDS DON&apos;T FADE—THEY WAIT.
                AND WHEN THE PEOPLE REMEMBER?
                THEY COME BACK LOUDER.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}