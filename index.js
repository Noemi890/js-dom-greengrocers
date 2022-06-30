const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

const shopList = document.querySelector('.item-list')
const cartList = document.querySelector('.cart--item-list')

// Shop Section


const createShopElements = () => {
  let itemList, container, icon, button
  
  state.items.forEach(element => {

    itemList = document.createElement('li')

    container = document.createElement('div')
    container.setAttribute('class', 'store--item-icon')

    icon = document.createElement('img')
    icon.alt = `${element.name}`
    icon.src = `assets/icons/${element.id}.svg`

    button = document.createElement('button')
    button.innerText = 'Add To Cart'
    button.addEventListener('click', () => {
      state.cart.push({...element})
      console.log(state)
      addItemsToCart(element)
    })
    shopList.append(itemList)
    itemList.append(container)
    container.append(icon)
    itemList.append(button)
  })

}

// Cart Section

const createCartElements = (element) => {
  
  let cartListElement, cartIcon, nameElement, addQuantity, quantity, removeQuantity

  cartListElement = document.createElement('li')
  cartListElement.setAttribute('class', 'list_elements')
  
  cartIcon = document.createElement('img')
  cartIcon.alt = `${element.name}`
  cartIcon.setAttribute('class', 'cart--item-icon')
  cartIcon.src = `assets/icons/${element.id}.svg`
  
  nameElement = document.createElement('p')
  nameElement.innerText = element.name
  
  removeQuantity = document.createElement('button')
  removeQuantity.innerText = '-'
  removeQuantity.setAttribute('class', 'remove-btn')
  removeQuantity.addEventListener('click', () => {
    if (quantity.innerText <= 0) {
      removeItemFromCart(element)
    } else {
    quantity.innerText--
    updateTotal()
    }
  })
  
  quantity = document.createElement('span')
  quantity.innerText = 1
  quantity.setAttribute('class', 'quantity-text')
  
  addQuantity = document.createElement('button')
  addQuantity.innerText = '+'
  addQuantity.setAttribute('class', 'add-btn')
  addQuantity.addEventListener('click', () => {
    quantity.innerText++
    updateTotal()
  })

  updateTotal()
  
  cartList.append(cartListElement)
  cartListElement.append(cartIcon)
  cartListElement.append(nameElement)
  cartListElement.append(removeQuantity)
  cartListElement.append(quantity)
  cartListElement.append(addQuantity)
}


const removeItemFromCart = (item) => {
  const items = document.querySelector('.cart--item-list')
  console.log(items)
  items.innerHTML = ''

  state.cart.forEach(item => {
    if (item !== undefined) {
    createCartElements(item)
    }
  })
}

const addItemsToCart = (element) => {
  createCartElements(element)
}

// Total Section

const updateTotal = () => {
  const totalText = document.querySelector('.total-number')
  let total = 0
  state.cart.forEach(item => {
    total += item.price
  })
  totalText.innerText = `£${total.toFixed(2)}`

}

// Render Section

const run = () => {
  createShopElements()
}

run()