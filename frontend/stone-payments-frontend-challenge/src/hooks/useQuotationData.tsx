import axios from "axios";
import { useQuery } from "react-query";
import { QuotationData } from "@/interfaces/QuotationData";
import { PaymentTypes } from "@/interfaces/PaymentTypes";
import { useEffect, useState } from "react";

const API_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

const fetchData = async (): Promise<QuotationData> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export function useQuotationData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["quotation-data"],
  });

  return {
    ...query,
    apiData: query.data,
    dollarPrice: Number(query?.data?.USDBRL.ask),
  };
}
