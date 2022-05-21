import posts from '../data/comments.json'
import { Change } from './Change'

export const Log = () => {
    return (
        <article class="comments">
        {posts.map((post) => (
          <Change key={post.id} {...post} />
        ))}
      </article> 
    )
}