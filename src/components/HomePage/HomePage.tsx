import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nbp.pl/api/exchangerates/tables/C/`)
      .then((response) => {
        setExchangeRates(response.data.rates);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
