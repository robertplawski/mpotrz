import { PropsWithChildren } from "react";

export default function TextGradient({ children }: PropsWithChildren) {
  return (
    <h1 className="tracking-wide text-5xl sm:text-6xl md:text-7xl lg:text-8xl pb-4 font-[900] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
      {children}
    </h1>
  );
}
