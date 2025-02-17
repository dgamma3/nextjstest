export interface Image {
  url: string;
  alt: string;
}

export interface VariantOptionValue {
  id: number;
  value: string;
}

export interface VariantOption {
  id: number;
  name: string;
  values: VariantOptionValue[];
}

export interface Variant {
  id: number;
  name: string;
  variantOptionIds: number[];
  imageIndex: number;
  price: number;
  outOfStock?: boolean;
}

export interface Product {
  title: string;
  description: string;
  images: Image[];
  rating: {
    count: number;
    value: number;
  },
  price: number;
  variantOptions: VariantOption[];
  variants: Variant[];
}
