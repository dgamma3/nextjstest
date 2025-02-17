import { renderHook } from '@testing-library/react-hooks'
import { Variant } from '@/types/product'
import { useProductVariants } from './use-product-variant'

const SIZE_DOUBLE = '101'
const SIZE_SINGLE = '102'

const COLOR_BLACK = '201'
const COLOR_NAVY = '202'

const LABEL_DOUBLE = 'Double'
const LABEL_SINGLE = 'Single'
const LABEL_BLACK = 'Black'
const LABEL_NAVY = 'Navy'

const EXPECTED_VARIANT_1 = { outOfStock: false, price: 29.99, imageIndex: 0 }
const EXPECTED_VARIANT_2 = { outOfStock: true, price: 30.99, imageIndex: 1 }
const EXPECTED_VARIANT_3 = { outOfStock: false, price: 34.99, imageIndex: 2 }

const MOCK_VARIANTS: Variant[] = [
  {
    id: 1,
    name: `${LABEL_DOUBLE} - ${LABEL_BLACK}`,
    variantOptionIds: [Number(SIZE_DOUBLE), Number(COLOR_BLACK)],
    ...EXPECTED_VARIANT_1,
  },
  {
    id: 2,
    name: `${LABEL_DOUBLE} - ${LABEL_NAVY}`,
    variantOptionIds: [Number(SIZE_DOUBLE), Number(COLOR_NAVY)],
    ...EXPECTED_VARIANT_2,
  },
  {
    id: 3,
    name: `${LABEL_SINGLE} - ${LABEL_BLACK}`,
    variantOptionIds: [Number(SIZE_SINGLE), Number(COLOR_BLACK)],
    ...EXPECTED_VARIANT_3,
  },
]

describe('useProductVariants', () => {
  it('should return structured data with correct mappings', () => {
    const { result } = renderHook(() => useProductVariants(MOCK_VARIANTS))

    const { structuredData, sizeSet, colorSet } = result.current

    expect(sizeSet.size).toBe(2)
    expect(sizeSet.get(LABEL_DOUBLE)).toBe(SIZE_DOUBLE)
    expect(sizeSet.get(LABEL_SINGLE)).toBe(SIZE_SINGLE)

    expect(colorSet.size).toBe(2)
    expect(colorSet.get(LABEL_BLACK)).toBe(COLOR_BLACK)
    expect(colorSet.get(LABEL_NAVY)).toBe(COLOR_NAVY)

    expect(structuredData.size).toBe(2)
    expect(structuredData.get(SIZE_DOUBLE)?.get(COLOR_BLACK)).toEqual(EXPECTED_VARIANT_1)
    expect(structuredData.get(SIZE_DOUBLE)?.get(COLOR_NAVY)).toEqual(EXPECTED_VARIANT_2)
    expect(structuredData.get(SIZE_SINGLE)?.get(COLOR_BLACK)).toEqual(EXPECTED_VARIANT_3)
  })

  it('should handle empty product variants', () => {
    const { result } = renderHook(() => useProductVariants([]))

    expect(result.current.structuredData.size).toBe(0)
    expect(result.current.sizeSet.size).toBe(0)
    expect(result.current.colorSet.size).toBe(0)
  })

  it('should not duplicate sizes or colors', () => {
    const duplicateVariants: Variant[] = [
      ...MOCK_VARIANTS,
      {
        id: 4,
        name: `${LABEL_DOUBLE} - ${LABEL_BLACK}`,
        variantOptionIds: [Number(SIZE_DOUBLE), Number(COLOR_BLACK)],
        ...EXPECTED_VARIANT_1,
      },
    ]

    const { result } = renderHook(() => useProductVariants(duplicateVariants))

    expect(result.current.sizeSet.size).toBe(2)
    expect(result.current.colorSet.size).toBe(2)
  })
})
