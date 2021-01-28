import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const NavLinks = [
  {
    id: 1,
    link: "home",
    href: "/",
  },
  {
    id: 2,
    link: "about",
    href: "/about",
  },
  {
    id: 3,
    link: "work",
    href: "/work",
  },
  {
    id: 4,
    link: "contact",
    href: "/",
  },
];

const Navigation = () => (
  <motion.ul variants={variants} className="center">
    {NavLinks.map((item) => (
      <MenuItem key={item.id} href={item.href} link={item.link} />
    ))}
  </motion.ul>
);

export default Navigation;
