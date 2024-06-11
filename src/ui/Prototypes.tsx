const Prototypes = ({
  cards,
}: {
  cards: {
    url: string;
    title: string;
    id: number;
  }[];
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="relative overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-auto rounded-lg transition-transform transform hover:scale-105"
            src={card.url}
            alt={card.title}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity opacity-0 hover:opacity-100">
            <h3 className="text-white font-bold text-lg">{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Prototypes;
