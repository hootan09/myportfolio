// import Image from 'next/image';
import PencilIcon from '../components/icons/PencilIcon';
import HeartIcon from '../components/icons/HeartIcon';
import CommentIcon from '../components/icons/CommentIcon';
import styles from '../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  return (
    <a
      href={article.links.href}
      target="_blank"
      rel="noopener"
      className={styles.container}
    >
      <img
        src={article.image}
        alt={article.title}
        width={300}
        height={150}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p>{article.description}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <PencilIcon className={styles.icon} /> <p style={{direction: 'rtl'}}>{article.created_at}</p>
        </div>
        <div className={styles.stat}>
          <HeartIcon className={styles.icon} /> {article.likes_count}
        </div>
        <div className={styles.stat}>
          <CommentIcon className={styles.icon} /> {article.comments_count}
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
