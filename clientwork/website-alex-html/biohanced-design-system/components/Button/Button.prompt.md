Primary action button — use `primary` (Voltage green) for the main page CTA, `dark` for add-to-cart, `outline` on dark hero fields, `ghost` for nav items.

```jsx
<Button variant="primary" size="md">Browse catalog</Button>
<Button variant="outline">View COAs</Button>
<Button variant="dark" full>Add to cart</Button>
```

Never put two `primary` buttons side by side — the green is the single signal color. Pair primary + outline instead. Hover lifts −2px with a slight brightness bump; press snaps to scale(.97).
