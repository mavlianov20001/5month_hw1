import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cartImg from "../../assets/img/cart.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { totalPrice, cart } = useSelector((state) => state.cart);
  const totalCount = cart.reduce((total, item) => total + item.count, 0);

  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to={"/"} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link to={"/cart"} className={styles.link__count}>
                <span>{totalPrice.toFixed(0)}$</span>
                <img className={styles.img} src={cartImg} alt="cart" />
                <span>{totalCount ? totalCount : ""}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
