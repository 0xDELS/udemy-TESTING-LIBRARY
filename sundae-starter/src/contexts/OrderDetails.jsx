import { createContext, useContext, useState } from "react";
import toast from "bootstrap/js/src/toast.js";
import { pricePerItem } from "../constants/index.js";

const OrderDetails = createContext();

// custom hook to check whether we're in a provider
export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);

  if (!contextValue) {
    throw new Error(
      "useOrderDetails must callen from within an OrderDetailsProvider",
    );
  }

  return contextValue;
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  const updateItemCount = (itemName, newItemCount, optionType) => {
    // make a copy of existing state
    const newOptionCounts = { ...optionCounts };

    // update the copy with new information
    newOptionCounts[optionType][itemName] = newItemCount;

    // update the state with updated copy
    setOptionCounts(newOptionCounts);
  };

  const resetOrder = () => {
    setOptionCounts({
      scoops: {},
      toppings: {},
    });
  };

  // util to derive totals from optionCounts state value
  const calculateTotal = (optionType) => {
    // get an array of counts for the option type (ie [1, 2])
    const countsArray = Object.values(optionCounts[optionType]);

    // total the values in the array of counts
    const totalCount = countsArray.reduce((total, value) => total + value, 0);

    // multiply the total number of item by the price per this item type
    return totalCount * pricePerItem[optionType];
  };

  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };

  return (
    <OrderDetails.Provider
      value={{
        optionCounts,
        totals,
        updateItemCount,
        resetOrder,
      }}
      {...props}
    />
  );
}
