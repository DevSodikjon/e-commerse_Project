import { Col, Row, Container } from "react-bootstrap";
import storeItems from "../datas/items.json";
import StoreItems from "./StoreItems";
const Store = () => {
  return (
    <>
      <Container>
        <Row md={2} xs={1} lg={3} className="g-5">
          {storeItems.map((item) => (
            <Col key={item.id}>
              <StoreItems {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Store;
