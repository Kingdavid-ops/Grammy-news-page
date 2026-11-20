const Card = ({ largeText, smallText, imgPaht, alt, date }) => {
  return (
    <div className="flex items-start gap-x-4">
      <div>
        <img className="w-50 h-45" src={imgPaht} alt={alt} />
      </div>
      <div className="flex flex-col mt-2  w-[314px]">
        <h2 className="text-[22px] leading-tight font-medium">{largeText}</h2>
        <p className="text-sm">{smallText}</p>
        <p className="mt-4 text-xss">
          <span className="font-semibold font">GRAMMYs</span>
          <span className="ml-1">{date}</span>
        </p>
      </div>
    </div>
  );
};
//BTKGZCAZM5M,BTKHZLZHB6U

export default Card;
