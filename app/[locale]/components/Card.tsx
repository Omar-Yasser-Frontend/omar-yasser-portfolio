interface Card {
  icon: React.ReactNode;
  heading: string;
  desc: React.ReactNode;
}

function Card({ desc, heading, icon }: Card) {
  return (
    <div className="bg-text/5 before:bg-glass-reflection-top relative z-10 overflow-hidden rounded-lg border border-white/20 p-5 text-center shadow-lg backdrop-blur-sm duration-300 before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:content-[''] hover:-translate-y-2">
      <div className="bg-primary mx-auto w-fit rounded-full p-3">{icon}</div>
      <h3 className="mt-8 mb-3 text-2xl">{heading}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Card;
