'use client';
import Marquee from 'react-fast-marquee';

const SlideText = ({ title }: { title: string }) => {
  return (
    <>
      <section className="flex  text-white">
        <div className="Slider-text-wraper">
          <Marquee>{title}</Marquee>
        </div>

        {/* <Image
      src={Frame4}
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
      </section>
    </>
  );
};

export default SlideText;
