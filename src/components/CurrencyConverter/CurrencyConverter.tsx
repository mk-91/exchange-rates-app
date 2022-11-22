import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyInput from "./CurrencyInput";

const BASE_URL = "http://api.nbp.pl/api/exchangerates/tables/a/";

const CurrencyConverter = () => {
  const [currencyOptions, setCurrencyOptions] = useState<any>([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    if (exchangeRate !== undefined) toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    if (exchangeRate !== undefined) fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    axios
      .get(BASE_URL)

      .then((data: any) => {
        setCurrencyOptions({ ...data[0]?.rates });
        const [{ code, mid }] = currencyOptions;
        setFromCurrency(code);
        setToCurrency(code);
        setExchangeRate(mid);
      });
    // getPromise();
  }, []);
  // const getPromise = () => {
  //   return fetch(BASE_URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrencyOptions({ ...data[0].rates });
  //       const [{ code, mid }] = currencyOptions;
  //       setFromCurrency(code);
  //       setToCurrency(code);
  //       setExchangeRate(mid);
  //     });
  // };

  function handleFromAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(parseInt(e.target.value));
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAmount(parseInt(e.target.value));
    setAmountInFromCurrency(false);
  }
  return (
    <>
      <div>
        <CurrencyInput
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e: any) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <CurrencyInput
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e: any) => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
    </>
  );
};

export default CurrencyConverter;
