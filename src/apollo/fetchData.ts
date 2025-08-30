// import { Dispatch } from "redux";
// import { gql } from "@apollo/client";
// import { AnyAction } from "@reduxjs/toolkit";
// import { client } from "./client";
// import {
//   fetchDataFailure,
//   fetchDataRequest,
//   fetchDataSuccess,
// } from "../redux/actions/dataAction";

// export const fetchData = () => async (dispatch: Dispatch<AnyAction>) => {
//   try {
//     dispatch(fetchDataRequest());
//     const GET_PRODUCTS = gql`
//       query {
//         products {
//           id
//           title
//           price
//           description
//           category
//           image
//           rating {
//             rate
//             count
//           }
//         }
//       }
//     `;
//     const { data } = await client.query({ query: GET_PRODUCTS });
//     dispatch(fetchDataSuccess(data?.products));
//   } catch (error) {
//     if (error instanceof Error) {
//       dispatch(fetchDataFailure(error.message));
//     } else {
//       dispatch(fetchDataFailure("An unknown error occurred"));
//     }
//   }
// };



// src/api/fetchData.ts

import { Dispatch } from "redux";
import { gql } from "@apollo/client";
import { AnyAction } from "@reduxjs/toolkit";
import { client } from "./client";
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../redux/actions/dataAction";

// ✅ Define GraphQL Query at module level
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      price
      description
      category
      image
      rating {
        rate
        count
      }
    }
  }
`;

// ✅ Type for product (you can move this to a types file)
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// ✅ Async thunk to fetch product data
export const fetchData = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(fetchDataRequest());

  try {
    const { data } = await client.query<{ products: Product[] }>({
      query: GET_PRODUCTS,
      fetchPolicy: "network-only", // avoids cache if needed
    });

    if (!data || !data.products) {
      throw new Error("Failed to fetch products data.");
    }

    dispatch(fetchDataSuccess(data.products.map(product => ({
      ...product,
      id: String(product.id),
    }))));
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";

    console.error("Error fetching products:", error);
    dispatch(fetchDataFailure(message));
  }
};
