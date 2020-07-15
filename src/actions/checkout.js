export const SORT_ITEMS_BY_PRICE = 'SORT_ITEMS_BY_PRICE'

export const sortItemsByPrice = payload => {
  console.log('GOT INTO SORT BY PRICE ACTION', payload)

  return {
    type: SORT_ITEMS_BY_PRICE,
    payload
  }
}
