import React, { useEffect, useRef } from 'react';

const SkeletonLoader = () => {
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);

  useEffect(() => {
    const simulateLoading = () => {
      if (item1Ref.current && item2Ref.current && item3Ref.current) {
        setTimeout(() => {
          item1Ref.current.style.width = '100%';
          setTimeout(() => {
            item2Ref.current.style.width = '100%';
            setTimeout(() => {
              item3Ref.current.style.width = '75%';
            }, 200);
          }, 20);
        }, 20);
      }
    };

    simulateLoading();
  }, []);

  return (
    <>
      <div 
        ref={item1Ref}
        className="h-[15px] mb-[15px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 bg-[length:200%_100%] animate-blueShimmer rounded-lg relative overflow-hidden w-0 transition-[width] duration-800 ease-in-out"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
      </div>
      <div 
        ref={item2Ref}
        className="h-[15px] mb-[15px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 bg-[length:200%_100%] animate-blueShimmer rounded-lg relative overflow-hidden w-0 transition-[width] duration-800 ease-in-out"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
      </div>
      <div 
        ref={item3Ref}
        className="h-[15px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 bg-[length:200%_100%] animate-blueShimmer rounded-lg relative overflow-hidden w-0 transition-[width] duration-800 ease-in-out"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
      </div>
    </>
  );
};

export default SkeletonLoader;