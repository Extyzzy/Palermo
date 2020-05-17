export function ADD_PRODUCT (state, { slug, companyName, price }) {
  const foundExistenCompanyIndex = state.carts.findIndex(data => data.companyName === companyName)

  if (foundExistenCompanyIndex !== -1) {
    const foundExistenSlugIndex = state.carts[foundExistenCompanyIndex].products.findIndex(data => data.slug === slug)

    if (foundExistenSlugIndex !== -1) {
      state.carts[foundExistenCompanyIndex].products[foundExistenSlugIndex].quantity += 1
    } else {
      state.carts[foundExistenCompanyIndex].products.push({ slug, price, quantity: 1 })
    }
  } else {
    state.carts.push({ companyName, products: [{ slug, price, quantity: 1 }] })
  }
  // const foundExistenCompanyIndex = state.products.findIndex(data => data.companyName === companyName)

  // if (foundExistenCompanyIndex !== -1) {
  //   const foundExistentSlugIndex = state.products[foundExistenCompanyIndex].products.findIndex(data => data.slug === slug)

  //   if (foundExistentSlugIndex !== -1) {
  //     state.products[foundExistenCompanyIndex].products[foundExistentSlugIndex].quantity += 1
  //   }
  //   else {
  //     state.products[foundExistenCompanyIndex].products.push({ slug, price, quantity: 1 })
  //   }
  // } else {
  //   state.products.push()
  // }
}

export function DECREASE_QUANTITY (state, { companyName, slug }) {
  const foundExistenCompanyIndex = state.carts.findIndex(data => data.companyName === companyName)
  const foundExistenSlugIndex = state.carts[foundExistenCompanyIndex].products.findIndex(data => data.slug === slug)

  if (state.carts[foundExistenCompanyIndex].products[foundExistenSlugIndex].quantity > 1) {
    state.carts[foundExistenCompanyIndex].products[foundExistenSlugIndex].quantity -= 1
  }
}

export function INCREASE_QUANTITY (state, { companyName, slug }) {
  const foundExistenCompanyIndex = state.carts.findIndex(data => data.companyName === companyName)
  const foundExistenSlugIndex = state.carts[foundExistenCompanyIndex].products.findIndex(data => data.slug === slug)

  if (state.carts[foundExistenCompanyIndex].products[foundExistenSlugIndex].quantity < 16) {
    state.carts[foundExistenCompanyIndex].products[foundExistenSlugIndex].quantity += 1
  }
}

export function REMOVE_PRODUCT (state, index) {
  // TO_DO
}
