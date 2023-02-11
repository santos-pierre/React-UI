# React-UI

Set of reusable components

## Components

### Ribbon Components

#### Props

```ts
export type RibbonProps = {
  position?: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
  size?: 'sm' | 'md' | 'lg';
  color?: 'amber' | 'green' | 'purple' | 'cyan';
  children: React.ReactNode;
};
```

#### Config

Add custom class to get always the right width for the ribbon

```js
// tailwind.config.cjs
content: [...],
theme: {
  extend: {
    width: {
      'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%'
    },
    ...
  },
},
plugins: [...],
```
