import Image from "next/image";

export default function HomeHero({ name }) {
  return (
    <div className="border">
      <h1 className="text-4xl">Hi, I'm</h1>
      <h1 className="text-4xl">{name}</h1>
      <Image
        priority
        src="/images/James_Marshall1.jpg"
        className="inline-block h-12 w-12 ring-2"
        height={425}
        width={325}
        alt={name}
      />
      <h3>Javascript Developer</h3>
      <h5>Fitzroy, Melbourne, Australia</h5>
    </div>
  );
}
