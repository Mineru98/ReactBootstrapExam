import type { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";

const Header: NextPage = () => {
	return (
		<Container fluid as="header">
			<Row>
				<Col>1 of 2</Col>
				<Col>2 of 2</Col>
			</Row>
		</Container>
	);
};
export default Header;
