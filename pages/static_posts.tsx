import type { NextPage } from 'next'
import Link from 'next/Link'
import styles from '../styles/Posts.module.css'

const StaticPosts: NextPage = ({ posts }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {posts.map(post => (
          <Link key={post.id} href={`/post/${post.id}`}>
            <div className={styles.post}>
              <div className={styles.postTitle}>{post.title}</div>
              <div className={styles.postContent}>{post.content}</div>
              <div className={styles.postAuthor}>{post.author}</div>
              <small className={styles.postDate}>{post.date}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/api/posts");
  const posts = await res.json();

  return { props: { posts } }
}

export default StaticPosts
