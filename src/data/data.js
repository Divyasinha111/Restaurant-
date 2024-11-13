import Dosa from "../images/dosa.jpg";
import Chola from "../images/chhola.jpg";
import Idli from "../images/idli.jpg";
import MasalaDosa from "../images/masala.jpg";
import Paneer from "../images/paneer.jpg";
import Gujrati from "../images/gujrati.jpeg";

export const MenuList = [
  {
    name: "Dosa",
    description:
      "A crispy, golden-brown South Indian crepe made from fermented rice and lentil batter, filled with a savory spiced potato filling. Served with coconut chutney and sambar on the side      ₹150",
    image: Dosa,
    price: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(250),

  },
  {
    name: "Chola",
    description:
      "A hearty and flavorful Punjabi dish made with tender chickpeas slow-cooked in a rich, spiced gravy of tomatoes, onions, and aromatic spices. Traditionally enjoyed with fluffy bhature or steamed rice.” ₹250",
    image: Chola,
    price: 250,
  },
  {
    name: "Idli Sambhar",
    description:
      "Soft, steamed rice cakes served with a flavorful and spicy lentil-based sambar. Accompanied by coconut chutney and tangy tomato chutney for an authentic South Indian experience.”₹120",
    image: Idli,
    price: 300,
  },
  {
    name: "Masala Dosa",
    description:
      "A crispy, golden-brown South Indian crepe made from fermented rice and lentil batter, filled with a savory spiced potato filling. Served with coconut chutney and tangy sambar on the side for the perfect combination of flavors.”₹150",
    image: MasalaDosa,
    price: 100,
  },
  {
    name: "Paneer Butter Masala",
    description:
      "A creamy and flavorful curry made with soft cubes of paneer (Indian cottage cheese), simmered in a rich, aromatic tomato gravy, and seasoned with a blend of spices. Perfectly paired with naan or steamed rice.”₹250",
    image: Paneer,
    price: 400,
  },
  {
    name: "GGujarati Thali",
    description:
      "A wholesome and vibrant assortment of traditional Gujarati dishes, including dal, vegetable curry, chapati, rice, khichdi, pickles, and a sweet treat like shrikhand. A perfect balance of flavors – sweet, salty, sour, and spicy – served on a single platter for an authentic regional experience.”₹350",
    image: Gujrati,
    price: 500,
  },
];
