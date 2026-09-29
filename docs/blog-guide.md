# How to Add New Blog Posts

This guide explains how to add new blog posts to the Nexus blog.

## Adding a New Post

All blog posts are centrally managed in `/src/data/blogPosts.ts`. To add a new post:

### 1. Open the blog posts file
```
src/data/blogPosts.ts
```

### 2. Add your post to the `blogPostsDatabase` object

```typescript
export const blogPostsDatabase: Record<string, BlogPost> = {
  // ... existing posts
  
  "your-post-slug": {
    id: "unique-id",
    title: "Your Post Title",
    excerpt: "A brief summary of your post that appears on the blog listing page.",
    image: "/blog/wallpaper/your-image.png",
    author: {
      name: "Author Name",
      avatar: "/members/author-avatar.jpeg",
      role: "Author Role",
      bio: "Brief author biography that appears at the bottom of the post."
    },
    date: "Dec 6, 2025",
    readTime: "5 min read",
    category: "technology", // one of: technology, community, tutorials, updates, events
    slug: "your-post-slug", // must match the key above
    tags: ["tag1", "tag2", "tag3"], // optional
    content: `
## Your Content Here

Write your blog post content using Markdown syntax.

### Headings
Use ## for h2, ### for h3, etc.

### Lists
- Item 1
- Item 2
- Item 3

### Code
\`\`\`javascript
const example = "code block";
\`\`\`

Inline code: \`npm install\`

### Links
[Link text](https://example.com)

### Bold and Italic
**Bold text** and *italic text*
    `
  }
};
```

### 3. Post Properties Explained

- **id**: Unique identifier for the post (can be a number as string)
- **title**: The main title of your blog post
- **excerpt**: Short summary (150-200 characters) shown on listing page
- **image**: Path to featured image (stored in `/public/blog/wallpaper/`)
- **author.name**: Full name of the author
- **author.avatar**: Path to author's avatar image
- **author.role**: Author's role/title at Nexus
- **author.bio**: (Optional) Longer biography shown at bottom of post
- **date**: Publication date in format "Month Day, Year"
- **readTime**: Estimated reading time (e.g., "5 min read")
- **category**: Must be one of the predefined categories
- **slug**: URL-friendly version of title (lowercase, hyphens, no spaces)
- **tags**: (Optional) Array of relevant tags
- **content**: Full post content in Markdown format

### 4. Categories

Available categories:
- `technology` - Technical posts, tutorials, code
- `community` - Community updates, events, stories
- `tutorials` - Step-by-step guides
- `updates` - Platform updates, new features
- `events` - Event announcements and recaps

### 5. Markdown Support

The blog supports:
- Headers (##, ###, ####)
- **Bold** and *italic* text
- `Inline code`
- Code blocks with syntax highlighting
- Lists (bullet and numbered)
- [Links](url)
- Horizontal rules (---)

### 6. Images

Store blog images in:
```
/public/blog/wallpaper/your-image.png
```

Then reference them in your post:
```typescript
image: "/blog/wallpaper/your-image.png"
```

## Example Post

Here's a complete example:

```typescript
"getting-started-with-nexus": {
  id: "7",
  title: "Getting Started with Nexus",
  excerpt: "A beginner's guide to using Nexus platform and all its features.",
  image: "/blog/wallpaper/getting-started.png",
  author: {
    name: "Gabriel Monteiro",
    avatar: "/members/gabriel.jpeg",
    role: "Founder & CEO",
    bio: "Gabriel is passionate about empowering students through technology."
  },
  date: "Dec 10, 2025",
  readTime: "6 min read",
  category: "tutorials",
  slug: "getting-started-with-nexus",
  tags: ["beginners", "tutorial", "nexus"],
  content: `
## Welcome to Nexus!

This guide will help you get started with our platform.

### Step 1: Create an Account

Visit our website and click on the "Sign Up" button...

### Step 2: Explore Projects

Navigate to the projects section to see all available tools...

## Conclusion

You're now ready to start using Nexus!
  `
}
```

## URL Structure

Posts will be accessible at:
```
https://your-domain.com/blog/your-post-slug
```

## Testing

After adding a post:
1. Restart the dev server if needed
2. Visit `/blog` to see your post in the listing
3. Click on it to view the full post
4. Check that images, formatting, and links work correctly

## Tips

- Keep slugs concise but descriptive
- Use high-quality images (1200x630px recommended)
- Write compelling excerpts to encourage clicks
- Add relevant tags for better organization
- Test on mobile devices
- Preview markdown formatting before publishing
