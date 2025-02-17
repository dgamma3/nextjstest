'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useProductVariants, VariantData } from '@/hooks/use-product-variant'
import {
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectScrollDownButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  SelectItemText,
  Root,
} from '@radix-ui/react-select'
import './styles.css'
import { Product } from '@/types/product'

interface ProductDetailsProps {
  product: Product
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedSize, setSelectedSize] = useState<undefined | string>(undefined)
  const [selectedColor, setSelectedColor] = useState<undefined | string>(undefined)
  const [selectedColorError, setSelectedColorError] = useState(false)
  const [selectedSizeError, setSelectedSizeError] = useState(false)

  const { structuredData, sizeSet, colorSet } = useProductVariants(product.variants)
  const { toast } = useToast()

  const handleSizeChange = (value: string) => {
    setSelectedSize(value)
    setSelectedSizeError(false)
  }

  const handleColorChange = (value: string) => {
    setSelectedColor(value)
    setSelectedColorError(false)
  }

  const getVariantData = (size: undefined | string, color: undefined | string): VariantData | undefined => {
    return size !== undefined && color !== undefined ? structuredData.get(size)?.get(color) : undefined
  }

  const handleAddToCartClick = () => {
    const variant = getVariantData(selectedSize, selectedColor)
    if (!selectedColor || variant?.outOfStock) setSelectedColorError(true)
    if (!selectedSize) setSelectedSizeError(true)

    if (variant && !variant.outOfStock) {
      toast({
        title: 'Scheduled: Catch up',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      })
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Carousel scrollTo={getVariantData(selectedSize, selectedColor)?.imageIndex} className="w-[800px] mr-16">
        <ProductCarousel product={product} />
      </Carousel>
      <div>
        <ProductInfo
          title={product.title}
          rating={product.rating.value}
          count={product.rating.count}
          description={product.description}
          price={getVariantData(selectedSize, selectedColor)?.price}
        />

        <Root value={selectedSize} onValueChange={handleSizeChange}>
          <SizeSelector sizeSet={sizeSet} selectedSizeError={selectedSizeError} />
        </Root>

        <Root value={selectedColor} onValueChange={handleColorChange}>
          <ColorSelector
            colorSet={colorSet}
            selectedColorError={selectedColorError}
            getVariantData={(colourId: number) => getVariantData(selectedSize, colourId.toString())}
          />
        </Root>

        <Button className="mt-4 font-semibold" size="lg" onClick={handleAddToCartClick}>
          Add to cart
        </Button>
      </div>
    </div>
  )
}

const ProductCarousel = ({ product }: ProductDetailsProps) => {
  return (
    <>
      <CarouselContent>
        {product.images.map((image) => (
          <CarouselItem key={image.url}>
            <Image src={image.url} alt={image.alt} width={500} height={500} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </>
  )
}

const ProductInfo = ({ title, rating, count, description, price }: any) => {
  return (
    <>
      <h1 className="text-2xl font-semibold text-[#282828]">{title}</h1>
      <div className="flex items-center mt-2 mb-4">
        <span className="text-yellow-500">★</span>
        <span className="ml-1 text-[#282828]">
          {rating} ({count})
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
      <p className="text-4xl font-bold tracking-tighter text-[#f04a1c] mt-4">{price && `$${price}`}</p>
    </>
  )
}

const SizeSelector = ({ sizeSet, selectedSizeError }: any) => {
  return (
    <div style={{ display: 'flex', margin: '20px 0' }}>
      <div style={{ flex: 0.2 }}>Size</div>
      <div style={{ flex: 1 }}>
        <SelectTrigger className="SelectTrigger">
          <SelectValue placeholder="Choose…" />
          <SelectIcon className="SelectIcon">
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent className="SelectContent">
          <SelectViewport className="SelectViewport">
            <SelectGroup>
              {[...sizeSet.entries()].map(([size, sizeId]) => (
                <SelectItem key={sizeId} value={sizeId}>
                  <SelectItemText>{size}</SelectItemText>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
        {selectedSizeError && <p style={{ color: 'red' }}>Please select a size</p>}
      </div>
    </div>
  )
}

const ColorSelector = ({ colorSet, selectedColorError, getVariantData }: any) => {
  return (
    <div style={{ display: 'flex', margin: '20px 0' }}>
      <div style={{ flex: 0.2 }}>Colour</div>
      <div style={{ flex: 1 }}>
        <SelectTrigger className="SelectTrigger">
          <SelectValue placeholder="Choose…" />
          <SelectIcon className="SelectIcon">
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent className="SelectContent">
          <SelectViewport className="SelectViewport">
            <SelectGroup>
              {[...colorSet.entries()].map(([color, colorId]) => {
                const variantData = getVariantData(colorId)
                return (
                  <SelectItem key={colorId} value={colorId} disabled={variantData?.outOfStock}>
                    <SelectItemText>
                      <span style={{ color: variantData?.outOfStock ? 'grey' : 'black' }}>
                        {color} {variantData?.outOfStock && ' - out of stock'}
                      </span>
                    </SelectItemText>
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
        {selectedColorError && <p style={{ color: 'red' }}>Please select a colour</p>}
      </div>
    </div>
  )
}
