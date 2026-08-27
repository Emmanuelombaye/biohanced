"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { shippingCost } from "./biohanced-price-tiers";

export type CartLineItem = {
  key: string;
  type: "product" | "bundle";
  productId?: string;
  bundleId?: string;
  name: string;
  variantLabel: string;
  price: number;
  quantity: number;
};

type CartContextValue = {
  items: CartLineItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  addProduct: (productId: string, name: string, variantLabel: string, price: number) => void;
  addBundle: (bundleId: string, name: string, price: number) => void;
  removeItem: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  clearCart: () => void;
};

const STORAGE_KEY = "biohanced-cart-v1";

const CartContext = createContext<CartContextValue | null>(null);

function loadItems(): CartLineItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartLineItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLineItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(loadItems());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addProduct = useCallback(
    (productId: string, name: string, variantLabel: string, price: number) => {
      const key = `${productId}|${variantLabel}`;
      setItems((current) => {
        const existing = current.find((item) => item.key === key);
        if (existing) {
          return current.map((item) =>
            item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }
        return [
          ...current,
          {
            key,
            type: "product",
            productId,
            name,
            variantLabel,
            price,
            quantity: 1,
          },
        ];
      });
    },
    [],
  );

  const addBundle = useCallback((bundleId: string, name: string, price: number) => {
    const key = `bundle|${bundleId}`;
    setItems((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [
        ...current,
        {
          key,
          type: "bundle",
          bundleId,
          name,
          variantLabel: "Bundle · 2 vials",
          price,
          quantity: 1,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((key: string) => {
    setItems((current) => current.filter((item) => item.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.key !== key));
      return;
    }
    setItems((current) =>
      current.map((item) => (item.key === key ? { ...item, quantity } : item)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  const shipping = useMemo(() => shippingCost(subtotal), [subtotal]);

  const total = subtotal + shipping;

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      shipping,
      total,
      addProduct,
      addBundle,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      itemCount,
      subtotal,
      shipping,
      total,
      addProduct,
      addBundle,
      removeItem,
      updateQuantity,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
