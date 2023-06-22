import { Typography } from "antd";
const { Text } = Typography;

export const Columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
    },
  },
  {
    title: "symbol",
    dataIndex: "symbol",
    key: "symbol",
    sorter: {
      compare: (a, b) => a.symbol.localeCompare(b.symbol),
    },
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price",
    sorter: {
      compare: (a, b) => a.price - b.price,
    },
    render: (price) => <Text>$ {price.toLocaleString()}</Text>,
  },
  {
    title: "1h",
    dataIndex: "price_change_1h",
    key: "price_change_1h",
    sorter: {
      compare: (a, b) => a.price_change_1h - b.price_change_1h,
    },
    render: (price) => (
      <Text type={price > 0 ? "success" : "danger"}>{price}</Text>
    ),
  },
  {
    title: "7d",
    dataIndex: "price_change_7d",
    key: "price_change_7d",
    sorter: {
      compare: (a, b) => a.price_change_7d - b.price_change_7d,
    },
    render: (price) => (
      <Text type={price > 0 ? "success" : "danger"}>{price}</Text>
    ),
  },
  {
    title: "Volumn 24h",
    dataIndex: "volume_24h",
    key: "volume_24h",
    sorter: {
      compare: (a, b) => a.volume_24h - b.volume_24h,
    },
    render: (volume_24h) => <Text>$ {volume_24h.toLocaleString("en-US")}</Text>,
  },
];
