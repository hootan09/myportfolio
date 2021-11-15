import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import { getArticles } from './api/articles';

const ArticlesPage = ({ articles }) => {
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="https://virgool.io/@hootan09"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          virgool.io
        </a>
      </h3>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.post.id} article={article.post} />
        ))}
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   const res = await fetch(
//     'https://virgool.io/api/v1.1/feeds?type=profile&username=hootan09&page=1',
//     {
//       headers: {
//         // 'api-key': process.env.DEV_TO_API_KEY,
//       },
//     }
//   );

//   const data = await res.json();
//   return {
//     props: { title: 'Articles', articles: data },
//     revalidate: 60,
//   };
// }

export async function getStaticProps() {
  const articles = getArticles();
  return {
    props: { title: 'Articles', articles: articles.posts },
  };
}

export default ArticlesPage;
