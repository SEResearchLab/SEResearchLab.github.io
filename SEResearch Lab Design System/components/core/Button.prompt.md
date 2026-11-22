Use `Button` for any committed action — downloading a paper, submitting a form, opening a dataset.

```jsx
<Button variant="primary" size="md">Download PDF</Button>
<Button variant="outline" as="a" href="#">Replication package</Button>
```

Variants: `primary` (orange, one per view), `secondary` (navy), `outline`, `ghost`. Labels are set in JetBrains Mono uppercase automatically — write them in sentence case and let the component do the casing. Never round the corners.
