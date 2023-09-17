import { Row, Card } from "antd";
import PaginationComp from "../pagination";

const { Meta } = Card;

const MoviesList = ({ movies, setPage }) => {
  return (
    <>
      <Row justify={"space-evenly"}>
        {movies === "Movie not found!" ? (
          <h1 style={{ textAlign: "center" }}>Movie not found!</h1>
        ) : (
          movies?.Search?.map((item, index) => {
            const { Title, Poster, Year } = item;
            return (
              <Card
                key={index}
                hoverable
                style={{
                  width: 240,
                  margin: "20px 0px",
                }}
                cover={<img alt={Title} src={Poster} />}
              >
                <Meta title={Title} description={Year} />
              </Card>
            );
          })
        )}
      </Row>
      <Row justify={"center"}>
        {movies?.Search && (
          <PaginationComp setPage={setPage} length={movies?.totalResults} />
        )}
      </Row>
    </>
  );
};

export default MoviesList;
