import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  ListSubheader,
} from "@mui/material";

const itemData_1 = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
];

const itemData_2 = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const itemData_quilted = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
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
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
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
    rows: 2,
    cols: 2,
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
    cols: 2,
  },
];

const meta = {
  title: "DataDisplay/ImageList",
  component: ImageList as any,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `<p>Image List displays images in a grid with support for standard, woven, masonry, and quilted layouts. Customize columns, row heights, gaps, and add overlays with <code>ImageListItemBar</code>.</p>`,
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
      <ImageList
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
        rowHeight={160}
      >
        {itemData_2.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "A classic grid using `cols`, `gap`, and fixed `rowHeight`.",
      },
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
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {itemData_1.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    );
  },
  parameters: {
    docs: {
      description: { story: 'Interleaved tiles using `variant="woven"`.' },
      source: {
        code: `    <Box sx={{ width: 520 }}>
      <ImageList variant="woven" cols={3} gap={8}>
        {itemData_1.map((item) => (
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
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData_1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Pinterest-like columns using `variant="masonry"`.',
      },
      source: {
        code: `    <Box sx={{ width: 520 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData_1.map((item, idx) => (
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

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

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
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData_quilted.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use `variant="quilted"` and set `cols`/`rows` on items to create asymmetric mosaics.',
      },
      source: {
        code: `<Box sx={{ width: 520 }}>
        <ImageList variant="quilted" cols={4} rowHeight={120} gap={8}>
          {pattern.map((p, i) => {
            const it = itemData_1[i % itemData_1.length];
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
      <ImageList sx={{ width: 500, height: 450 }} cols={3} gap={8}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">Featured</ListSubheader>
        </ImageListItem>
        {itemData_1.map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
            <ImageListItemBar title={item.title} subtitle={"Author"} />
          </ImageListItem>
        ))}
      </ImageList>
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
        {itemData_1.map((item) => (
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
      <ImageList sx={{ width: 500, height: 450 }} cols={3} gap={8}>
        {itemData_1.slice(0, 6).map((item) => (
          <ImageListItem key={item.img}>
            <img src={`${item.img}`} alt={item.title} loading="lazy" />
            <ImageListItemBar
              position="below"
              title={item.title}
              subtitle={"Author"}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Move captions under the image with `position="below"`.',
      },
      source: {
        code: `    <Box sx={{ width: 520 }}>
      <ImageList cols={3} gap={8}>
        {itemData_1.slice(0, 6).map((item) => (
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
