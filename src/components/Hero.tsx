import TextGradient from "./TextGradient";
import matrixVideo from "../assets/matrix.mp4";
export default function Hero() {
  return (
    <div className="relative text-emerald-100 justify-center bg-stone-900 w-full h-[95vh] p-4 sm:p-8 lg:p-16 flex flex-col gap">
      <video
        className="absolute object-cover top-0 right-0 w-full h-full"
        autoPlay
        loop
        muted
        src={matrixVideo}
      />
      <div className="w-[100%]  opacity-60 lg:opacity-100 bg-linear-to-r from-stone-400/20 lg:from-stone-900 lg:via-stone-900/80 to-stone-400/20 absolute top-0 right-0 z-1 h-full"></div>
      <div className="w-[100%] opacity-60 lg:opacity-100  bg-linear-to-t from-stone-900 via-stone-900/30 to-green-400/0 absolute top-0 right-0  z-1 h-full"></div>

      <div className="z-10 flex bg-stone-900/70 border-stone-600/70 border rounded-3xl p-8 backdrop-blur-sm flex-col gap-4 lg:gap-8  max-w-[100%] lg:max-w-[48rem]  ">
        <TextGradient>Maciej Potrz</TextGradient>

        <div className="text-sm sm:text-md md:text-lg flex flex-col sm:flex-row gap-8 items-center">
          <div className="flex-1 flex flex-col gap-4">
            <p>
              I'm a 17-year-old programmer* from Poland. I've been programming
              since 2023.
            </p>
            <button className="border rounded-xl p-2">Get in touch</button>
          </div>
          <div className="flex-2 flex flex-col h-full gap-4">
            <p>
              Im super happy to be in place where I am now, and for 2 years of
              programming i managed to achieve:
            </p>
            <ul className="list-disc pl-4">
              <li>Hours of programming: 500+</li>
              <li> Experienced: 15+languages</li>
              <li>Projects Completed: 41</li>
              <li>Syntax errors: [Integer out of range]</li>
            </ul>
          </div>
        </div>
        <div className="text-sm text-green-200">
          *mostly focusing on mobile apps, websites, and mathematical
          algorithms.
        </div>
      </div>
    </div>
  );
}
