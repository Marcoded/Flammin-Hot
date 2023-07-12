import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/6157005/pexels-photo-6157005.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md bg-slate-900 bg-opacity-60 backdrop-blur-md p-5 rounded-lg shadow-xl"> {/* Added bg-opacity-60 and backdrop-blur-md */}
            <div className="flex items-center justify-center">
              <div className="normal-case text-5xl  font-marker my-5  ">
                Flamin&apos; hot
              </div>
              <Image
                className="ml-8"
                src="/logo.svg"
                alt="flamin hot logo"
                width={50}
                height={50}
              />
            </div>
            <p className="mb-5 text-left">
              If you love hot sauce, you&apos;ll love Flamin&apos;hot. We have the
              hottest sauces in the world, from mild to extreme. Don&apos;t miss
              our special offers and get ready to spice up your life!
            </p>
  
            <button
              className="btn btn-ghost"
              onClick={() => {
                // Scrolls down by 100vh (i.e., the height of the viewport)
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth", // Smooth scroll
                });
              }}
            >
              See our sauces
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  