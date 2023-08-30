import React from 'react';
import Image from 'next/image';
const Page = React.forwardRef(({ image, number }, ref) => {
  return (
    <div
      className={`page-${number}`}
      ref={ref}
    >
      <Image
        src={image}
        width={'100%'}
        height={'100%'}
        alt={`Newspaper page ${number}`}
      />
    </div>
  );
});

export default Page;
