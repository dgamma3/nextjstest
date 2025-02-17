import { Product } from "@/types/product";

export const getProductData = () => {
  return (
    {
      title: "Ramesses Elite 100% Cooling Bamboo Sheet Set",
      description: "Bamboo Sheets are known for its incredible Softness and durability. Highly absorbent, naturally anti-bacterial and hypoallergenic. This will make it suitable for babies and toddlers as well as those adults that suffer from respiratory or skin allergies.",
      images: [
        {
          url: "https://assets.mydeal.com.au/47178/2-pieces-550-gsm-100-cotton-bath-sheet-set-8-colors-7747194_00.jpg?v=7PYUA1722414633&imgclass=dealpageimage",
          alt: "Main Image"
        },
        {
          url: "https://assets.mydeal.com.au/47178/2-pieces-550-gsm-100-cotton-bath-sheet-set-8-colors-7747194_08.jpg?v=OF5Zc1721634945&imgclass=dealpageimage",
          alt: "Black"
        },
        {
          url: "https://assets.mydeal.com.au/47178/2-pieces-550-gsm-100-cotton-bath-sheet-set-8-colors-7747194_09.jpg?v=zLw5M1721634945&imgclass=dealpageimage",
          alt: "Dark Grey"
        },
        {
          url: "https://assets.mydeal.com.au/47178/2-pieces-550-gsm-100-cotton-bath-sheet-set-8-colors-7747194_10.jpg?v=nUYEw1721634945&imgclass=dealpageimage",
          alt: "Navy"
        },
        {
          url: "https://assets.mydeal.com.au/47178/2-pieces-550-gsm-100-cotton-bath-sheet-set-8-colors-7747194_11.jpg?v=d3Le41721634945&imgclass=dealpageimage",
          alt: "Teal"
        },
        {
          url: "https://assets.mydeal.com.au/47178/2-pieces-550-gsm-100-cotton-bath-sheet-set-8-colors-7747194_12.jpg?v=XXnHI1721634945&imgclass=dealpageimage",
          alt: "Purple"
        }
      ],
      rating: {
        "count": 119,
        "value": 4.74
      },
      price: 19.99,
      variantOptions: [
        {
          id: 1,
          name: "Size",
          values: [
            {
              id: 201,
              value: "Single"
            },
            {
              id: 202,
              value: "King Single"
            },
            {
              id: 203,
              value: "Double"
            },
            {
              id: 204,
              value: "Queen"
            }
          ]
        },
        {
          id: 2,
          name: "Colour",
          values: [
            {
              id: 301,
              value: "Black"
            },
            {
              id: 302,
              value: "Dark Grey"
            },
            {
              id: 303,
              value: "Navy"
            },
            {
              id: 304,
              value: "Teal"
            },
            {
              id: 305,
              value: "Purple"
            }
          ]
        }
      ],
      variants: [
        {
          id: 10,
          name: "Single - Black",
          variantOptionIds: [201, 301],
          imageIndex: 1,
          outOfStock: true,
          price: 14.99
        },
        {
          id: 11,
          name: "Single - Dark Grey",
          variantOptionIds: [201, 302],
          imageIndex: 2,
          price: 14.99
        },
        {
          id: 12,
          name: "Single - Navy",
          variantOptionIds: [201, 303],
          imageIndex: 3,
          outOfStock: true,
          price: 14.99
        },
        {
          id: 13,
          name: "Single - Teal",
          variantOptionIds: [201, 304],
          imageIndex: 4,
          price: 14.99
        },
        {
          id: 14,
          name: "Single - Purple",
          variantOptionIds: [201, 305],
          imageIndex: 5,
          outOfStock: true,
          price: 14.99
        },
        {
          id: 15,
          name: "King Single - Black",
          variantOptionIds: [202, 301],
          imageIndex: 1,
          outOfStock: true,
          price: 19.99
        },
        {
          id: 16,
          name: "King Single - Dark Grey",
          variantOptionIds: [202, 302],
          imageIndex: 2,
          price: 19.99
        },
        {
          id: 17,
          name: "King Single - Navy",
          variantOptionIds: [202, 303],
          imageIndex: 3,
          price: 19.99
        },
        {
          id: 18,
          name: "King Single - Teal",
          variantOptionIds: [202, 304],
          imageIndex: 4,
          outOfStock: true,
          price: 19.99
        },
        {
          id: 19,
          name: "King Single - Purple",
          variantOptionIds: [202, 305],
          imageIndex: 5,
          price: 19.99
        },
        {
          id: 20,
          name: "Double - Black",
          variantOptionIds: [203, 301],
          imageIndex: 1,
          price: 24.99
        },
        {
          id: 21,
          name: "Double - Dark Grey",
          variantOptionIds: [203, 302],
          imageIndex: 2,
          outOfStock: true,
          price: 24.99
        },
        {
          id: 22,
          name: "Double - Navy",
          variantOptionIds: [203, 303],
          imageIndex: 3,
          outOfStock: true,
          price: 24.99
        },
        {
          id: 23,
          name: "Double - Teal",
          variantOptionIds: [203, 304],
          imageIndex: 4,
          price: 24.99
        },
        {
          id: 24,
          name: "Double - Purple",
          variantOptionIds: [203, 305],
          imageIndex: 5,
          price: 24.99
        },
        {
          id: 25,
          name: "Queen - Black",
          variantOptionIds: [204, 301],
          imageIndex: 1,
          outOfStock: true,
          price: 29.99
        },
        {
          id: 26,
          name: "Queen - Dark Grey",
          variantOptionIds: [204, 302],
          imageIndex: 2,
          price: 29.99
        },
        {
          id: 27,
          name: "Queen - Navy",
          variantOptionIds: [204, 303],
          imageIndex: 3,
          outOfStock: true,
          price: 29.99
        },
        {
          id: 28,
          name: "Queen - Teal",
          variantOptionIds: [204, 304],
          imageIndex: 4,
          price: 29.99
        },
        {
          id: 29,
          name: "Queen - Purple",
          variantOptionIds: [204, 305],
          imageIndex: 5,
          outOfStock: true,
          price: 29.99
        }
      ]
    } as Product
  );
};
