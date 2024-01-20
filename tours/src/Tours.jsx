import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>OUR TOURS</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
