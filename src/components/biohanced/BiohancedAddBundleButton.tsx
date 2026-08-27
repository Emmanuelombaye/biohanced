"use client";

import { useState } from "react";
import { useCart } from "@/lib/biohanced-cart-context";

export function BiohancedAddBundleButton({
  bundleId,
  name,
  price,
  className = "bio-btn-dark mt-5 w-full",
}: {
  bundleId: string;
  name: string;
  price: number;
  className?: string;
}) {
  const { addBundle } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addBundle(bundleId, name, price);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${className} ${added ? "brightness-95" : ""}`}
      aria-label={added ? "Bundle added to cart" : `Add ${name} bundle to cart`}
    >
      {added ? "Added ✓" : "Add bundle to cart"}
    </button>
  );
}
