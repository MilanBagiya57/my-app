import Accordion from '@/Components/Accordion/Accordion';
import Header from '@/Components/Header/Header';
import SlideText from '@/Components/SlideText/SlideText';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main>
        <Header />

        <section className="text-white pt-24 max-w-[1250px] px-5 mx-auto">
          {/* <--------------first Part-----------> */}
          <section>
            <div>
              <h1 className="text-4xl lg:text-[7.5rem]">LOREM IPSUM</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-16">
                <div className="md:my-0 my-8">
                  <h1 className="font-bold text-[1.5rem] leading-[0.8rem] text-white mb-3">
                    DOLER SIT
                  </h1>
                  <p className="leading-8 text-[#FFFFFF] opacity-70">
                    Lorem ipsum dolor sit amet consectetur. In nibh nam vel
                    lacus sit. Neque venenatis mattis est nibh sed quis vel quis
                    eu. In tincidunt faucibus aliquet quis sed sed. Phasellus
                    non at lacus convallis elementum. Suspendisse tincidunt
                    congue sem turpis. Nulla eu lorem cras leo.
                  </p>
                  <div className="mt-5">
                    <Image
                      src="/Icon.png"
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      width={20}
                      height={20}
                      alt="Picture of Logo"
                      className="mr-2"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="md:my-0 my-8">
                  <h1 className="font-bold text-[1.5rem] leading-[0.8rem] text-white mb-3">
                    LOREM IPSUM DOLOR SIT
                  </h1>
                  <p className="leading-8 text-[#FFFFFF] opacity-70">
                    Dolor adipiscing condimentum aliquam nullam mauris ante
                    ipsum vel nisl. Dignissim molestie amet purus felis egestas
                    amet eget. Viverra malesuada ultricies nunc vel diam posuere
                    mauris sociis maecenas. Aenean dui et nec ultrices libero
                    lacus.
                  </p>
                  <div className="mt-5">
                    <Image
                      src="/Icon1.png"
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      width={20}
                      height={20}
                      alt="Picture of Logo"
                      className="mr-2"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
                <div className="md:my-0 my-8">
                  <Image
                    src="/Frame1.png"
                    width={450}
                    height={450}
                    alt="Picture of Logo"
                  />
                  <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white mb-3 uppercase lg:mt-10 max-sm:mt-16 mt-8">
                    LOREM IPSUM DOLOR SIT
                  </h1>
                  <p className="leading-8 text-[#FFFFFF] opacity-70">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                  <div className="mt-5">
                    <Image
                      src="/Icon2.png"
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      width={20}
                      height={20}
                      alt="Picture of Logo"
                      className="mr-2"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <--------------Second Part-----------> */}
          <section className="text-white pt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] mb-3 uppercase">
                  Lorem ipsum
                </h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <div className="mt-5">
                  <Image
                    src="/Icon3.png"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    width={20}
                    height={20}
                    alt="Picture of Logo"
                    className="mr-2"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>

              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] mb-3 uppercase">
                  dolor sit amet
                </h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <div className="mt-5">
                  <Image
                    src="/Icon4.png"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    width={20}
                    height={20}
                    alt="Picture of Logo"
                    className="mr-2"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
              <div></div>
            </div>
          </section>

          <section className="text-white pt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
              <div></div>

              <div className="md:my-0 my-8">
                <Image
                  src="/Frame2.png"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  width={410}
                  height={411}
                  alt="Picture of Logo"
                  className="mr-2"
                  style={{ color: 'transparent' }}
                />
              </div>

              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] mb-3 uppercase">
                  LOREM IPSUM DOLOR
                </h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <div className="mt-5">
                  <Image
                    src="/Icon5.png"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    width={20}
                    height={20}
                    alt="Picture of Logo"
                    className="mr-2"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/*<-----------------About Us--------------->*/}
          <section className="lg:mt-[20rem] py-10 mb-10 lg:block md:hidden sm:hidden max-sm:hidden relative backgroundContainer cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-2 transition-all h-[25rem] items-center">
              <div className="relative h-[25rem]">
                <h1 className="mb-4 font-bold tracking-tight leading-none text-[7.5rem] text-white uppercase">
                  About <br /> Us
                </h1>
                <div className="absolute top-[6.5rem] left-[13rem] w-[300px] h-[300px] hover:hidden backgroundRectangleImage">
                  <Image
                    src="/frame3.png"
                    alt="round-image"
                    width={450}
                    height={450}
                    className="absolute left-0 top-0 right-0 buttom-0  h-full w-full bg-cover text-transparent rounded-full"
                  />
                </div>
              </div>
              <p className="leading-8 text-[#FFFFFF] opacity-70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </section>
        </section>

        <SlideText title="LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM  &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM  &nbsp; LOREM IPSUM &nbsp;  LOREM IPSUM  &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM  &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM &nbsp; LOREM IPSUM" />

        {/* Dolor Set Start here */}
        <section className="container mx-auto max-w-[1237px] px-5 pt-16">
          <div className="container mx-auto max-w-[1237px] pt-16">
            <h1 className="lg:mb-24 sm:mb-5 text-4xl font-bold text-white md:text-5xl lg:text-8xl dark:text-white uppercase md:w-9/12 xs:w-full">
              lorem ipsum dolor set
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white mb-3 uppercase">
                  Lorem ipsum dolor
                </h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="mt-5">
                  <Image
                    src="/Icon6.png"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    width={20}
                    height={20}
                    alt="Picture of Logo"
                    className="mr-2"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
              <div className="md:my-0 my-8">
                <h1 className="font-bold text-[1.5rem] leading-[0.75rem] text-white mb-3 uppercase">
                  Ldolor sit amet
                </h1>
                <p className="leading-8 text-[#FFFFFF] opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="mt-5">
                  <Image
                    src="/Icon7.png"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    width={20}
                    height={20}
                    alt="Picture of Logo"
                    className="mr-2"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </div>
              <div></div>
            </div>

            <section className="text-white pt-10 ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 mt-10">
                <div></div>

                <div className="md:my-0 my-8">
                  <Image
                    src="/Frame5.png"
                    loading="lazy"
                    decoding="async"
                    data-nimg="1"
                    width={410}
                    height={411}
                    alt="Picture of Logo"
                    className="mr-2"
                    style={{ color: 'transparent' }}
                  />
                </div>

                <div className="md:my-0 my-8">
                  <h1 className="font-bold text-[1.5rem] leading-[0.75rem] mb-3 uppercase">
                    Lorem ipsum
                  </h1>
                  <p className="leading-8 text-[#FFFFFF] opacity-70">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit.
                  </p>
                  <div className="mt-5">
                    <Image
                      src="/Icon8.png"
                      loading="lazy"
                      decoding="async"
                      data-nimg="1"
                      width={20}
                      height={20}
                      alt="Picture of Logo"
                      className="mr-2"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="pt-20 lg:mt-[15rem] md:mt-[5rem]">
            <h1 className="text-4xl max-sm:mb-16 font-extrabold tracking-wider leading-none md:text-5xl lg:text-[5.9rem] text-white uppercase">
              lorem ipsum dolor
            </h1>
          </div>
        </section>
      </main>

      <footer className="lg:mt-[4rem] lg:pb-[17rem]">
        <Accordion />
      </footer>
    </>
  );
}
