interface ContentPostProps {
  type: string,
  content: string,
}

interface PostProps {
  author: {
    avatarUrl: string,
    name: string,
    role: string,
  },
  content: ContentPostProps[],
  publishedAt: Date,
}

interface CommentsProps {
  id: string,
  content: string,
}