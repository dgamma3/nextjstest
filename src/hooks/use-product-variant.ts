import { useMemo } from "react";
import {Product, Variant} from "@/types/product";

export interface VariantData {
  outOfStock: boolean;
  price: number;
  imageIndex: number;
}

export const useProductVariants = (productVariants: Variant[]) => {
  return useMemo(() => {
    const structuredData = new Map<string, Map<string, VariantData>>();
    const sizeSet = new Map<string, string>();
    const colorSet = new Map<string, string>();

    productVariants.forEach((item) => {
      const [size, color] = item.name.split(" - ");
      const [sizeId, colorId] = item.variantOptionIds;

      if (!sizeSet.has(size)) {
        sizeSet.set(size, sizeId.toString());
      }

      if (!colorSet.has(color)) {
        colorSet.set(color, colorId.toString());
      }

      if (!structuredData.has(sizeId.toString())) {
        structuredData.set(sizeId.toString(), new Map());
      }

      structuredData.get(sizeId.toString())!.set(colorId.toString(), {
        outOfStock: item.outOfStock || false,
        price: item.price,
        imageIndex: item.imageIndex,
      });
    });

    return { structuredData, sizeSet, colorSet };
  }, [productVariants]);
};