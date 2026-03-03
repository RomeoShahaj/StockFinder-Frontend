import axios from "axios";
import { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenK } from "./company";
import { Search } from "react-router";

interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
        const { data } = await axios.get<SearchResponse>(
            `${process.env.REACT_APP_API_URL}/stock/search?query=${query}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    } catch (error: unknown) {
        if ((error as any).isAxiosError) {
            console.log("error message: ", (error as any).message);
            return (error as any).message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured.";
        }
    }
}


export const getCompanyProfile = async (query: string): Promise<CompanyProfile[] | undefined> => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      `${process.env.REACT_APP_API_URL}/stock/company-profile/${query}`,
      {
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data; 
  } catch (error: any) {
    console.error("Error message from API:", error.message);
    return undefined; 
  }
};

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `${process.env.REACT_APP_API_URL}/stock/key-metrics/${query}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );
        return data;
    } catch (error: any) {
        console.log("error message from API", error.message);
    }
};


export const getIncomeStatement = async (query: string ) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
        `${process.env.REACT_APP_API_URL}/stock/income-statements/${query}`,
        { 
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
        );
        return data;
    } catch (error: any) {
        console.log("error meesage from API", error.message);
    }
}


export type ApiError = {
  error: string;
};

export const isApiError = (value: any): value is ApiError => {
  return value && typeof value === 'object' && 'error' in value;
};


export const getBalanceSheet = async (query: string ) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
        `${process.env.REACT_APP_API_URL}/stock/balance-sheet/${query}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
        );
        return data;
    } catch (error: any) {
        console.log("error meesage from API", error.message);
    }
}

export const getCashFlowStatement = async (query: string ) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
        `${process.env.REACT_APP_API_URL}/stock/cash-flow-statements/${query}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
    );
        return data;
    } catch (error: any) {
        console.log("error meesage from API", error.message);
    }
}

export const getTenK = async (query: string ) => {
    try {
        const today = new Date();
        //const twoYearsAgo = new Date();
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(today.getMonth() - 1);
        //twoYearsAgo.setFullYear(today.getFullYear() - 2);

        //const fromDate = twoYearsAgo.toISOString().split('T')[0]; // Format: YYYY-MM-DD
        const fromDate = oneMonthAgo.toISOString().split('T')[0]; // YYYY-MM-DD
        const toDate = today.toISOString().split('T')[0];
        const data = await axios.get<CompanyTenK[]>(
       ` https://financialmodelingprep.com/stable/sec-filings-search/symbol?symbol=${query}&from=${fromDate}&to=${toDate}&apikey=${process.env.REACT_APP_API_KEY}`
        //    `https://financialmodelingprep.com/stable/sec-filings-search/symbol?symbol=${query}&from=${fromDate}&to=${toDate}&apikey=${process.env.REACT_APP_API_KEY}`
    )
        return data;
    } catch (error: any) {
        console.log("error meesage from API", error.message);
    }
}
