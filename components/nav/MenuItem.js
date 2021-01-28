/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ link, href }) => (
  <motion.li
    className="nlist"
    variants={variants}
    // whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href={href}>
      <a className="menuLinks">{link}</a>
    </Link>
  </motion.li>
);

export default MenuItem;
