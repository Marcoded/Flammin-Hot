import NeutralPepper from "../../public/neutralPepper.svg";
import HotPepper from "../../public/hotPepper.svg";
import Image from "next/image";

interface ChiliProps {
  spiciness: 1 | 2 | 3 | 4 | 5;
}

const ChiliPeppers: React.FC<ChiliProps> = ({ spiciness }) => {
  const peppers = [];

  for (let i = 0; i < 5; i++) {
    peppers.push(
      <Image
        key={i}
        src={i < spiciness ? HotPepper : NeutralPepper}
        alt={i < spiciness ? "Neutral Pepper" : "Hot Pepper"}
        height={20}
        width={20}
      />
    );
  }

  return <div className="inline-flex justify-start gap-2">{peppers}</div>;
};

const comment = ({spiciness}: ChiliProps) => {
     if (spiciness === 5) return "Flamin' hot"
     if (spiciness === 4) return "Super hot"
     if (spiciness === 3) return "Nice kick"
     if (spiciness === 2) return "Mild"
     if (spiciness === 1) return "Not spicy"
}

const ChiliIndex: React.FC<ChiliProps> = ({ spiciness }) => {
  return (
    <div className="text-left font-bold font-marker text-orange-400">
      <div className="tooltip" data-tip={comment({spiciness})}>
        <ChiliPeppers spiciness={spiciness} />
      </div>
    </div>
  );
};

export default ChiliIndex;
