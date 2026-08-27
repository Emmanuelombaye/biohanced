Home-page "shop by category" tile.

```jsx
<CategoryTile name="Healing & Recovery" count="4 products"
  tile="linear-gradient(145deg,#4f7bff,#6f7bf5)"
  onOpen={() => openCategory('recovery')} />
```

Lay these out in a 6-up grid on desktop. Each category has its own tile gradient (see the `--cat-*` tokens). Hover lifts −3px with `--shadow-tile`.
