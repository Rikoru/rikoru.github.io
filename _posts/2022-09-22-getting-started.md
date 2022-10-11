---
title: 'Getting Started'
date: '2022-09-22'
coverImage: 'clouds.jpg'
---

Rebuilding a site takes a lot of effort, even when you build it on top of Github Pages.

I went from a barebones HTML site to a NextJS site, but it took me months to get to a point where I felt ready to show it.

If you want to take a closer look at how it was built, consider taking a look at the [commits on the 0.1.0-react-init branch for this site](https://github.com/Rikoru/rikoru.github.io/commits/0.1.0-react-init).

There was a point where I had decided I would include my art somehow. My first attempt looked something like this, with button links on the [About](/about) page. It just didn't feel right.

```jsx
<Typography paragraph>
  If you&apos;re looking for my creative endeavours:
</Typography>

<Stack spacing={1} direction="row">
  <Link href="https://www.instagram.com/meerkat.art/" passHref>
    <Button variant="outlined" startIcon={<DrawIcon />}>
      Art Instagram
    </Button>
  </Link>
  <Link href="https://www.instagram.com/mircea.crafts/" passHref>
    <Button variant="outlined" startIcon={<CraftIcon />}>
      Crafts Instagram
    </Button>
  </Link>
</Stack>
```
