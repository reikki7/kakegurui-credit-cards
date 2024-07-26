import './App.css'
import FirstCard from './components/FirstCard'
import NextCard from './components/NextCard'
import React, { useState, useRef, useMemo } from 'react';

import card1 from './assets/cards/card (1).png';
import card2 from './assets/cards/card (2).png';
import card3 from './assets/cards/card (3).png';
import card4 from './assets/cards/card (4).png';
import card5 from './assets/cards/card (5).png';
import card6 from './assets/cards/card (6).png';
import card7 from './assets/cards/card (7).png';
import card8 from './assets/cards/card (8).png';
import card9 from './assets/cards/card (9).png';
import card10 from './assets/cards/card (10).png';
import card11 from './assets/cards/card (11).png';
import card12 from './assets/cards/card (12).png';
import card13 from './assets/cards/card (13).png';
import card14 from './assets/cards/card (14).png';
import card15 from './assets/cards/card (15).png';
import card16 from './assets/cards/card (16).png';
import card17 from './assets/cards/card (17).png';
import card18 from './assets/cards/card (18).png';
import card19 from './assets/cards/card (19).png';
import card20 from './assets/cards/card (20).png';
import card21 from './assets/cards/card (21).png';
import card22 from './assets/cards/card (22).png';
import card23 from './assets/cards/card (23).png';
import card24 from './assets/cards/card (24).png';
import card25 from './assets/cards/card (25).png';
import card26 from './assets/cards/card (26).png';
import card27 from './assets/cards/card (27).png';
import card28 from './assets/cards/card (28).png';
import card29 from './assets/cards/card (29).png';
import card30 from './assets/cards/card (30).png';
import card31 from './assets/cards/card (31).png';
import card32 from './assets/cards/card (32).png';
import card33 from './assets/cards/card (33).png';
import card34 from './assets/cards/card (34).png';
import card35 from './assets/cards/card (35).png';
import card36 from './assets/cards/card (36).png';
import card37 from './assets/cards/card (37).png';
import card38 from './assets/cards/card (38).png';
import card39 from './assets/cards/card (39).png';
import card40 from './assets/cards/card (40).png';

function App() {
  const [rotate, setRotate] = useState(true);
  const [inputText, setInputText] = useState('');
  const [letters, setLetters] = useState([]);
  const [firstLetter, setFirstLetter] = useState('');

  const firstCardRef = useRef(null);
  const nextCardRef = useRef(null);

  const handleClick = () => {
    setRotate(!rotate);
  };

  const handleInputChange = (e) => {
    const text = e.target.value.toUpperCase();
    setInputText(text);
    const lettersArray = text.split('');
    setFirstLetter(lettersArray.shift() || '')
    setLetters(lettersArray);
  };

  const cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39, card40];

  const firstCardImage = useMemo(() => cards[Math.floor(Math.random() * cards.length)], []);
  const nextCardImages = useMemo(() => letters.map(() => cards[Math.floor(Math.random() * cards.length)]), [letters]);

  return (
    <div className='p-6 bg-[#10083f] font-otsutome'>
      <div className='p-2'>
        <label htmlFor="input" className="block text-lg font-bold text-white">Enter a text</label>
        <input
          type="text"
          id="input"
          className="px-3 py-2 mb-4 border border-gray-400 rounded-md input focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Text Here"
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <div className="card-container" style={{ perspective: '1000px' }}>
        <div className="flex">
          <div
            style={{
              transform: rotate ? "rotate3d(0, 1, 0, 0deg)" : "rotate3d(0, 1, 0, 90deg)",
              transition: "transform 0.2s ease-in-out",
              transformOrigin: rotate ? "left" : "right"
            }}
          >
            {firstLetter && <FirstCard firstLetter={firstLetter} cardImage={firstCardImage} ref={firstCardRef} />}
          </div>
          <div className="flex flex-wrap">
            {nextCardImages.map((cardImage, index) => (
              <div
                key={index}
                style={{
                  transform: rotate ? "rotate3d(0, 0, 0, 0deg)" : "rotate3d(0, 1, 0, 90deg)",
                  transition: `transform 0.25s ease-in-out ${index * 0.05}s`,
                  transformOrigin: rotate ? "left" : "right"
                }}
              >
                <NextCard text={letters[index]} cardImage={cardImage} ref={nextCardRef} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='px-2'>
        <div className='p-2'>
          <button
            onClick={handleClick}
            className="px-4 py-2 mr-4 font-bold text-white duration-300 bg-red-700 rounded-lg hover:bg-red-900"
          >
            Transform
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;