"use client";

import { CartProvider } from "@/lib/biohanced-cart-context";

export function BiohancedCartProvider({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
