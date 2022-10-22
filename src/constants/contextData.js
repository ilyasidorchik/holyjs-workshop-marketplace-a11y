import { Delivery } from './filters/delivery'
import { Promo } from './filters/promo'
import { FilterTypes } from './filters/types'

const items = [
  {
    id: 0,
    title: 'Футболка HolyJS',
    price: 3000,
    oldPrice: 5000,
    discount: 20,
    currency: 'RUR',
    rating: '4,9',
    feedbackCount: 124,
    delivery: Delivery.TODAY,
    promo: Promo.DISCOUNT,
  },
  {
    id: 1,
    title: 'Футболка HolyJS Rock',
    price: 3600,
    currency: 'RUR',
    rating: '3,5',
    feedbackCount: 124,
    delivery: Delivery.TOMORROW,
    promo: Promo.CASHBACK,
  },
  {
    id: 2,
    title: 'Футболка HolyJS Kids',
    price: 3000,
    oldPrice: 5000,
    discount: 20,
    currency: 'RUR',
    rating: '4',
    feedbackCount: 124,
    delivery: Delivery.TOMORROW,
    promo: Promo.DISCOUNT,
  },
]

export const Data = {
  cartCount: 0,
  wishlistCount: 0,
  items,
  search: {
    filters: {
      delivery: {
        type: FilterTypes.RADIO,
        values: Object.values(Delivery),
      },
      promo: {
        type: FilterTypes.CHECKBOX,
        values: Object.values(Promo),
      },
    },
    data: items,
  },
}
