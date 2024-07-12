import { NextRequest, NextResponse } from "next/server";
import { config } from "@/config/config";
import axios from "axios";
import { sortTypeSchema } from "@/schemas/product.schema";
import { v4 as uuidv4 } from "uuid";
import ApiResponse from "@/utils/ApiResponse";

interface query {
  n: number;
  page?: number;
  min?: number;
  max?: number;
  sort?: string;
  sortType?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { categoryname: string } }
) {
  try {
    const { categoryname } = params;
    const url = new URL(request.url);

    const n = url.searchParams.get("n");
    const page = url.searchParams.get("page");
    const min = url.searchParams.get("min");
    const max = url.searchParams.get("max");
    const sort = url.searchParams.get("sort");
    const sortType = url.searchParams.get("sortType");

    const response = await axios.get(
      `${
        config.TESTSERVER
      }/companies/AMZ/categories/${categoryname}/products?top=${
        n || 10
      }&minPrice=${min || 1}&maxPrice=${max || 100000}`,
      {
        headers: {
          Authorization: `Bearer ${config.ACCESSTOKEN}`,
        },
      }
    );

    const data = response.data;

    if (sort) {
      if (sortType) {
        if (sortTypeSchema.safeParse(sortType)) {
          data.sort((a: any, b: any) => {
            if (sortType === "asc") {
              return a[sort] - b[sort];
            } else {
              return b[sort] - a[sort];
            }
          });
        }
      }
    }

    const products = data.map((product: any) => {
      return {
        id: uuidv4(),
        ...product,
      };
    });

    const numberOfPages = Math.ceil(products.length / 10);

    return NextResponse.json(
      new ApiResponse(200, "Success", {
        products: products.slice(
          page ? (parseInt(page) - 1) * 10 : 0,
          page ? parseInt(page) * 10 : 10
        ),
        numberOfPages,
      })
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(new ApiResponse(500, "Internal Server Error"));
  }
}
