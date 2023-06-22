const API_KEY = "f5cfcade-3845-492d-8cbb-aa047348ecf2";
const cors_url = "https://peaceful-cove-55478-cb8fd6f6b407.herokuapp.com";
const coin_market_cap_url =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
const limit = 10;

export const fetchData = async () => {
  const response = await fetch(
    `${cors_url}/${coin_market_cap_url}?limit=${limit}&convert=USD`,
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  const array = Array.from({ length: limit }, (_, index) => index).map(
    (number) => {
      return {
        ...result.data[number],
        price: result.data[number].quote.USD.price.toFixed(2),
        price_change_1h:
          result.data[number].quote.USD.percent_change_1h.toFixed(2),
        price_change_7d:
          result.data[number].quote.USD.percent_change_7d.toFixed(2),
        volume_24h: result.data[number].quote.USD.volume_24h.toFixed(2),
      };
    }
  );

  return array;
};
