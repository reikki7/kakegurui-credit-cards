import { memo } from 'react';

const FirstCard = memo(({ firstLetter, cardImage }) => {
    return (
        <div className='relative flex w-48 p-3'>
            <div className='relative flex items-center justify-center'>
                <img src={cardImage} alt="card" className='relative z-10' style={{ filter: "invert(100%) saturate(0)" }} />
                <div className='absolute inset-0 z-20 bg-red-700 rounded-2xl opacity-90'></div>
                <div className='absolute z-50 flex items-center justify-center w-full h-full'>
                    <p className='z-50 flex text-white text-[130px]'>{firstLetter}</p>
                </div>
            </div>
        </div>
    );
});

export default FirstCard;