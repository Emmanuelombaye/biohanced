The catalog product card — a dark image panel over light metadata. Composes `Badge` for the category dot and purity.

```jsx
<ProductCard
  name="BPC-157"
  category="Healing & Recovery"
  categoryColor="var(--cat-recovery)"
  sizes="5mg · lyophilized"
  fromPrice="From $59"
  purity="99.7%"
  image="assets/products/bpc157.png"
  onOpen={() => openProduct('bpc157')}
/>
```

The image sits on a dark blue gradient panel (product PNGs are shot on dark). Product name is Archivo 900; price is Archivo 800. Hovers lift −4px with `--shadow-hover`.
