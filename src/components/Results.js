import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="grid px-4 min-[390px]:grid-cols-2 min-[390px]:px-0 min-[390px]:gap-3 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:px-3 lg:grid-cols-3 xl:grid-cols-4 xl:px-0 max-w-6xl mx-auto gap-5">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;
