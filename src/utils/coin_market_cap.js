const API_KEY = "f5cfcade-3845-492d-8cbb-aa047348ecf2";
const cors_url = "https://peaceful-cove-55478-cb8fd6f6b407.herokuapp.com/";
const coin_market_cap_url =
  "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

export const fetchData = async () => {
  const response = await fetch(
    `${cors_url}/${coin_market_cap_url}?limit=1&convert=USD`,
    {
      mode: "cors",
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY,
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  return result;
};
