import type { NextPage } from 'next'
import Link from 'next/Link'
import styles from '../../../styles/Post.module.css'

const PostPage: NextPage = ({ post }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <div className={styles.postContent}>{post.content}</div>
        <div className={styles.postAuthor}>{post.author}</div>
        <small className={styles.postDate}>{post.date}</small>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3001/api/posts/${context.params.id}`)
  const post = await res.json()

  return { props: { post } }
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3001/api/posts`)
  const posts = await res.json()
  const params = posts.map(({id}) => ({ params: { id: id.toString() } }))

  return {
    paths: params,
    fallback: false,
  }
}

export default PostPage
