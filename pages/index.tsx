import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";

const Home: NextPage = () => {
	return (
		<Container fluid>
			<Row>
				<Col>1 of 2</Col>
				<Col>2 of 2</Col>
			</Row>
			<Row>
				<Col>1 of 3</Col>
				<Col>2 of 3</Col>
				<Col>3 of 3</Col>
			</Row>
		</Container>
	);
};

export default Home;
