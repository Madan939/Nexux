import Image from "next/image";
import CountUp from "../ui/Countup";
import Container from "./layout/Container";

export interface countItem {
  num: number;
  symbol: string;
  text: string;
}

export interface countProps {
  countData: countItem[];
  image?: string;
}
const Count = ({ countData, image }: countProps) => {
  return (
    <>
      <section className="bg-linear-to-t from-[#E53935] to-[#C62828] py-8 md:py-16 relative">
        {image ? (
          <>
            <div className="absolute inset-0">
              <Image
                src={image}
                alt="grid"
                height={1000}
                width={100}
                className="w-full h-full object-cover"
              />
            </div>
          </>
        ) : (
          <></>
        )}
        <Container>
          <div className="grid relative z-1 grid-cols-2 gap-0 md:gap-y-6 lg:gap-0 lg:grid-cols-4 text-center text-white">
            {countData.map((item, index) => (
              <section key={index}>
                <div className="flex items-center justify-center text-3xl md:text-6xl leading-16 md:leading-20 font-semibold">
                  <CountUp
                    from={0}
                    to={item.num}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  <span>{item.symbol}</span>
                </div>
                <p className="font-normal md:text-2xl">{item.text}</p>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Count;
