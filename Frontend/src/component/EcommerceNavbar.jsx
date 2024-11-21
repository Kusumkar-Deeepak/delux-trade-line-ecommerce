"use client";

import { Button, Navbar } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";

export function EcommerceNavbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Navbar fluid rounded>
      {/* Brand Logo */}
      <Navbar.Brand href="/">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Ecommerce Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          GroceryMart
        </span>
      </Navbar.Brand>

      {/* Cart and Dark Mode Toggle */}
      <div className="flex md:order-2 items-center">
        {/* Cart Icon */}
        <Button color="gray" pill className="mr-3 flex items-center">
          <HiShoppingCart className="mr-1 text-xl" />
          Cart
        </Button>

        {/* Dark Mode Toggle */}
        <Button color="gray" pill onClick={toggleDarkMode}>
          {darkMode ? "🌙" : "☀️"}
        </Button>

        {/* Mobile Navbar Toggle */}
        <Navbar.Toggle />
      </div>

      {/* Navbar Links */}
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/shop">Shop</Navbar.Link>
        <Navbar.Link href="/deals">Deals</Navbar.Link>
        <Navbar.Link href="/categories">Categories</Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default EcommerceNavbar;
