import React from 'react';
import styles from './home.module.css';
import InputForm from '../../components/InputForm/InputForm';
import { Container, Row, Col } from 'react-bootstrap';
import Output from '../../components/OutputForm/Output';

const Home = () => {
  return (
    <>
      <Container className={styles.main}>
        <h1 className={styles.main_heading}>CPU SCHEDULING VISUALIZER</h1>
        <Row>
          <Col lg={4}>
            <InputForm />
          </Col>
          <Col lg={8}>
            <Output />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
