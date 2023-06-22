import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./utils/coin_market_cap";
import { Table, Button, Layout, Row, Col } from "antd";
import { Columns } from "./utils/columns";

const { Header } = Layout;

const headerStyle = {
  textAlign: "center",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "white",
};

const buttonStyle = {
  border: "20px",
  margin: 20,
};

const App = () => {
  const [crypto, setCrypto] = useState([]);

  const fetchDataAndSetState = async () => {
    const result = await fetchData();
    setCrypto(result);
  };

  useEffect(() => {
    const fetchDataInterval = async () => {
      await fetchDataAndSetState();
      const intervalId = setInterval(fetchData, 60000);
      return intervalId;
    };

    const intervalId = fetchDataInterval();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="App">
      <Header style={headerStyle}>CoinMarketCap API Latest listings</Header>
      <Row>
        <Col span={6}></Col>
        <Col span={6}></Col>
        <Col span={6}>
          <Button
            type="primary"
            onClick={fetchDataAndSetState}
            style={buttonStyle}
          >
            Refresh
          </Button>
        </Col>
        <Col span={6}></Col>
      </Row>

      {crypto.length > 0 && (
        <Table columns={Columns} dataSource={crypto} pagination={false} />
      )}
    </div>
  );
};

export default App;
