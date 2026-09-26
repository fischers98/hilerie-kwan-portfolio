// Match the reference's horizontal-order masonry layout at each breakpoint.
function layoutPortfolio() {
  const grid = document.querySelector('.grid');
  const items = [...grid.querySelectorAll('article')];
  const columns = matchMedia('(min-width: 60em)').matches ? 3 : matchMedia('(min-width: 30em)').matches ? 2 : 1;
  const heights = Array(columns).fill(0);
  const offset = columns === 3 ? 35 : columns === 2 ? 53 : 0;
  const gap = parseFloat(getComputedStyle(document.documentElement).fontSize) * 2;
  items.forEach((item, i) => {
    const column = i % columns;
    item.style.position = 'absolute';
    item.style.left = `${column * offset}%`;
    item.style.top = `${heights[column]}px`;
    heights[column] += item.getBoundingClientRect().height + gap;
  });
  grid.style.height = `${Math.max(...heights)}px`;
}
layoutPortfolio();
document.fonts.ready.then(layoutPortfolio);
addEventListener('resize', layoutPortfolio);
