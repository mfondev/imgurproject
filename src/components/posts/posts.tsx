import { getPosts } from '../../../action'
import Feeds from '../feed/feeds'

interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

interface PostsResponse {
  posts: Post[]
  total: number
  skip: number
  limit: number
}

export default async function PostsPage() {
  const data: PostsResponse = await getPosts()

  return <Feeds initialData={data} />
}
