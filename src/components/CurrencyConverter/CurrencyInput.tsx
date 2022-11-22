import React from "react";

export default function CurrencyInput(props: any) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;
  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions !== undefined &&
          Object.keys(currencyOptions).map((keyName: any, i) => (
            <option key={i} value={keyName}>
              {currencyOptions[keyName].code}
            </option>
          ))}
      </select>
    </div>
  );
}
