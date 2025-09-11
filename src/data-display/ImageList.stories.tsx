import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
  Typography,
} from "@mui/material";

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

const meta = {
  title: "DataDisplay/ImageList",
  component: ImageList as any,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          `<p>Image List displays images in a grid with support for standard, woven, masonry, and quilted layouts. Customize columns, row heights, gaps, and add overlays with <code>ImageListItemBar</code>.</p>`,
      },
    },
  },
  tags: ["imagelist"],
} satisfies Meta<typeof ImageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <ImageList cols={3} gap={8} rowHeight={160}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}&t=${encodeURIComponent(item.title)}`}
                alt={item.title}
                loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "A classic grid using `cols`, `gap`, and fixed `rowHeight`." },
      source: {
        code: `<Box sx={{ width: 520 }}>
      <ImageList cols={3} gap={8} rowHeight={160}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={\`\${item.img}&t=\${encodeURIComponent(item.title)}\`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>`,
      },
    },
  },
};

export const Woven: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Interleaved tiles using `variant=\"woven\"`." },
      source: {
        code: `    <Box sx={{ width: 520 }}>
      <ImageList variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={\`\${item.img}\`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>`,
      },
    },
  },
};

export const Masonry: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item, idx) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}&h=${180 + (idx % 4) * 30}`}
                alt={item.title}
                loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Pinterest-like columns using `variant=\"masonry\"`." },
      source: {
        code: `    <Box sx={{ width: 520 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item, idx) => (
          <ImageListItem key={item.img}>
            <img
              src={\`\${item.img}&h=\${180 + (idx % 4) * 30}\`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>`,
      },
    },
  },
};

export const Quilted: Story = {
  render: () => {
    const pattern = [
      { rows: 2, cols: 2 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 2, cols: 1 },
      { rows: 1, cols: 2 },
      { rows: 1, cols: 1 },
    ];
    return (
      <Box sx={{ width: 520 }}>
        <ImageList variant="quilted" cols={4} rowHeight={120} gap={8}>
          {pattern.map((p, i) => {
            const it = itemData[i % itemData.length];
            return (
              <ImageListItem key={`${it.img}-${i}`} cols={p.cols} rows={p.rows}>
                <img src={`${it.img}`} alt={it.title} loading="lazy" />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `variant=\"quilted\"` and set `cols`/`rows` on items to create asymmetric mosaics.",
      },
      source: {
        code: `<Box sx={{ width: 520 }}>
        <ImageList variant="quilted" cols={4} rowHeight={120} gap={8}>
          {pattern.map((p, i) => {
            const it = itemData[i % itemData.length];
            return (
              <ImageListItem key={\`\${it.img}-\${i}\`} cols={p.cols} rows={p.rows}>
                <img src={\`\${it.img}\`} alt={it.title} loading="lazy" />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>`,
      },
    },
  },
};

export const WithTitleBars: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <ImageList cols={3} gap={8}>
          <ImageListItem key="Subheader" cols={3}>
            <ListSubheader component="div">Featured</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} subtitle={'Author'} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Add `ImageListItemBar` for an overlaid title/subtitle and combine with `ListSubheader` for sections.",
      },
      source: {
        code: `<Box sx={{ width: 520 }}>
      <ImageList cols={3} gap={8}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">Featured</ListSubheader>
        </ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={\`\${item.img}\`} alt={item.title} loading="lazy" />
            <ImageListItemBar title={item.title} subtitle={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>`,
      },
    },
  },
};

export const TitleBarBelow: Story = {
  render: () => {
    return (
      <Box sx={{ width: 520 }}>
        <ImageList cols={3} gap={8}>
          {itemData.slice(0, 6).map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
              <ImageListItemBar position="below" title={item.title} subtitle={"Author"} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: { story: "Move captions under the image with `position=\"below\"`." },
      source: {
        code: `    <Box sx={{ width: 520 }}>
      <ImageList cols={3} gap={8}>
        {itemData.slice(0, 6).map((item) => (
          <ImageListItem key={item.img}>
            <img src={\`\${item.img}\`} alt={item.title} loading="lazy" />
            <ImageListItemBar position="below" title={item.title} subtitle={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>`,
      },
    },
  },
};

export const ResponsiveCols: Story = {
  render: () => {
    return (
      <Box sx={{ width: { xs: 360, sm: 520 } }}>
        <ImageList
          cols={{ xs: 2, sm: 3 } as any}
          gap={8}
          rowHeight={160}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Adjust the number of columns responsively using breakpoint-aware props or styles.",
      },
      source: {
        code: `<Box sx={{ width: { xs: 360, sm: 520 } }}>
        <ImageList
          cols={{ xs: 2, sm: 3 } as any}
          gap={8}
          rowHeight={160}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={\`\${item.img}\`} alt={item.title} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>`,
      },
    },
  },
};

export const WithSrcSet: Story = {
  render: () => {
    const srcSet = (image: string, size: number, rows = 1, cols = 1) => ({
      src: `${image}&w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}&w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    });

    return (
      <Box sx={{ width: 520 }}>
        <ImageList variant="quilted" cols={4} rowHeight={121} gap={8}>
          {[
            { rows: 2, cols: 2 },
            { rows: 1, cols: 1 },
            { rows: 1, cols: 1 },
            { rows: 2, cols: 1 },
          ].map((p, i) => {
            const it = itemData[i % itemData.length];
            const img = srcSet(it.img, 121, p.rows, p.cols);
            return (
              <ImageListItem key={`${it.img}-${i}`} cols={p.cols} rows={p.rows}>
                <img {...img} alt={it.title} loading="lazy" />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Provide `src` and `srcSet` to serve sharper images on high-DPI displays.",
      },
      source: {
        code: `
          const srcSet = (image: string, size: number, rows = 1, cols = 1) => ({
          src: \`\${image}&w=\${size * cols}&h=\${size * rows}&fit=crop&auto=format\`,
          srcSet: \`\${image}&w=\${size * cols}&h=\${size * rows}&fit=crop&auto=format&dpr=2 2x\`,
        });

        <Box sx={{ width: 520 }}>
        <ImageList variant="quilted" cols={4} rowHeight={121} gap={8}>
          {[
            { rows: 2, cols: 2 },
            { rows: 1, cols: 1 },
            { rows: 1, cols: 1 },
            { rows: 2, cols: 1 },
          ].map((p, i) => {
            const it = itemData[i % itemData.length];
            const img = srcSet(it.img, 121, p.rows, p.cols);
            return (
              <ImageListItem key={\`\${it.img}-\${i}\`} cols={p.cols} rows={p.rows}>
                <img {...img} alt={it.title} loading="lazy" />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>`,
      },
    },
  },
  tags: ["retina", "srcSet"],
};

