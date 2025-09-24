import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Avatar,
  Skeleton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

const meta = {
  title: "Surfaces/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          `<p>Cards display content and actions on a single subject. They support headers, media, content, and actions. Use variants, elevation, and layout to fit different use cases.</p>`,
      },
    },
  },
  tags: ["card"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <Card sx={{ width: 360 }}>
        <CardContent>
          <Typography gutterBottom variant="h6">Basic card</Typography>
          <Typography variant="body2" color="text.secondary">
            A simple card with a title and supporting text below as a natural lead-in to additional content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Action</Button>
          <Button size="small">Secondary</Button>
        </CardActions>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "A simple card with content and actions." },
      source: {
        code: `<Card>
        <CardContent>
          <Typography variant="h6">Basic card</Typography>
          <Typography variant="body2">Supporting text…</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Action</Button>
          <Button size="small">Secondary</Button>
        </CardActions>
      </Card>`,
      },
    },
  },
};

export const WithMedia: Story = {
  render: () => {
    return (
      <Card sx={{ width: 360 }}>
        <CardMedia
          component="img"
          height="180"
          image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
          alt="Mountains" />
        <CardContent>
          <Typography gutterBottom variant="h6">Mountain escape</Typography>
          <Typography variant="body2" color="text.secondary">
            Explore scenic routes and cozy cabins in the alpine region.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "Card with a top image using `CardMedia`." },
      source: {
        code: `<Card>
        <CardMedia component="img" height="180" image="/img.jpg" />
        <CardContent>…</CardContent>
        <CardActions>…</CardActions>
      </Card>`,
      },
    },
  },
  tags: ["media"],
};

export const ClickableActionArea: Story = {
  render: () => {
    return (
      <Card sx={{ width: 360 }}>
        <CardActionArea onClick={() => { } }>
          <CardMedia
            component="img"
            height="160"
            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop"
            alt="City" />
          <CardContent>
            <Typography gutterBottom variant="h6">City lights</Typography>
            <Typography variant="body2" color="text.secondary">
              Tap the card to open details. CardActionArea makes the whole area clickable.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">Bookmark</Button>
        </CardActions>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "Make the entire card interactive with `CardActionArea`." },
      source: {
        code: `<Card>
          <CardActionArea>
            <CardMedia component="img" height="160" image="/img.jpg" />
            <CardContent>…</CardContent>
          </CardActionArea>
          <CardActions>…</CardActions>
        </Card>`,
      },
    },
  },
};

export const WithHeaderAndActions: Story = {
  render: () => {
    return (
      <Card sx={{ width: 380 }}>
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          action={<IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>}
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2025" />
        <CardMedia
          component="img"
          height="190"
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
          alt="Paella dish" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon />}
              sx={{ p: 0 }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Box sx={{ flex: 1 }} />
          <Button size="small">Recipe</Button>
        </CardActions>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "Card with `CardHeader`, media, content, and action icons." },
      source: {
        code: `<Card>
  <CardHeader avatar={<Avatar>R</Avatar>} action={<IconButton><MoreVertIcon/></IconButton>} title="…" subheader="…" />
  <CardMedia component="img" height="190" image="/food.jpg" />
  <CardContent>…</CardContent>
  <CardActions disableSpacing>…</CardActions>
</Card>`,
      },
    },
  },
};

export const Outlined: Story = {
  render: () => {
    return (
      <Card variant="outlined" sx={{ width: 360 }}>
        <CardContent>
          <Typography gutterBottom variant="h6">Outlined card</Typography>
          <Typography variant="body2" color="text.secondary">
            Use the outlined variant for subtle emphasis and reduced elevation.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Action</Button>
        </CardActions>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "Outlined variant replaces elevation with a border." },
      source: {
        code: `<Card variant="outlined" sx={{ width: 360 }}>
        <CardContent>
          <Typography gutterBottom variant="h6">Outlined card</Typography>
          <Typography variant="body2" color="text.secondary">
            Use the outlined variant for subtle emphasis and reduced elevation.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Action</Button>
        </CardActions>
      </Card>`,
      },
    },
  },
};

export const Horizontal: Story = {
  render: () => {
    return (
      <Card sx={{ display: "flex", width: 520 }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop"
          alt="Forest" />
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">Forest walk</Typography>
            <Typography variant="body2" color="text.secondary">
              Split layout with media on the left and text on the right.
            </Typography>
          </CardContent>
          <CardActions sx={{ pt: 0 }}>
            <Button size="small">Explore</Button>
            <Button size="small">Save</Button>
          </CardActions>
        </Box>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "Use flex layout to create a horizontal card with side media." },
      source: {
        code: `<Card sx={{ display: "flex", width: 520 }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop"
          alt="Forest" />
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">Forest walk</Typography>
            <Typography variant="body2" color="text.secondary">
              Split layout with media on the left and text on the right.
            </Typography>
          </CardContent>
          <CardActions sx={{ pt: 0 }}>
            <Button size="small">Explore</Button>
            <Button size="small">Save</Button>
          </CardActions>
        </Box>
      </Card>`,
      },
    },
  },
};

export const ElevationHover: Story = {
  render: () => {
    return (
      <Card
        sx={{
          width: 360,
          transition: (t) => t.transitions.create("box-shadow", { duration: t.transitions.duration.shorter }),
          "&:hover": { boxShadow: 8 },
        }}
        elevation={2}
      >
        <CardContent>
          <Typography gutterBottom variant="h6">Hover card</Typography>
          <Typography variant="body2" color="text.secondary">
            Increase elevation on hover for emphasis.
          </Typography>
        </CardContent>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "Control visual emphasis with `elevation` and hover transitions." },
      source: {
        code: `<Card
        sx={{
          width: 360,
          transition: (t) => t.transitions.create("box-shadow", { duration: t.transitions.duration.shorter }),
          "&:hover": { boxShadow: 8 },
        }}
        elevation={2}
      >
        <CardContent>
          <Typography gutterBottom variant="h6">Hover card</Typography>
          <Typography variant="body2" color="text.secondary">
            Increase elevation on hover for emphasis.
          </Typography>
        </CardContent>
      </Card>`,
      },
    },
  },
};

export const LoadingSkeleton: Story = {
  render: () => {
    return (
      <Card sx={{ width: 360 }}>
        <Skeleton variant="rectangular" height={160} />
        <CardContent>
          <Skeleton width="60%" />
          <Skeleton width="90%" />
          <Skeleton width="80%" />
        </CardContent>
        <CardActions>
          <Skeleton variant="rounded" width={80} height={32} />
          <Skeleton variant="rounded" width={80} height={32} />
        </CardActions>
      </Card>
    );
  },
  parameters: {
    docs: {
      description: { story: "Use `Skeleton` components to indicate loading state for card content." },
      source: {
        code: `<Card sx={{ width: 360 }}>
        <Skeleton variant="rectangular" height={160} />
        <CardContent>
          <Skeleton width="60%" />
          <Skeleton width="90%" />
          <Skeleton width="80%" />
        </CardContent>
        <CardActions>
          <Skeleton variant="rounded" width={80} height={32} />
          <Skeleton variant="rounded" width={80} height={32} />
        </CardActions>
      </Card>`,
      },
    },
  },
};
