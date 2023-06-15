import cart from './components/cart.js';
import loader from './components/loader.js';
import products from './components/products.js';
import showCart from './components/showCart.js';
import showMenu from './components/showMenu.js';
import getProducts from './helpers/getProducts.js';
import dark from './components/night.js';


dark()
loader()


showMenu()


showCart()




const { db, printProducts } = products(await getProducts())


cart(db, printProducts)