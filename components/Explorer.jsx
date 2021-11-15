import Link from 'next/link';
// import Image from 'next/image';
import { useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import styles from '../styles/Explorer.module.css';

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          <Link href="/" as={process.env.BACKEND_URL + '/'}>
            <div className={styles.file}>
              <img
                src="/react_icon.svg"
                alt="React Icon"
                height={18}
                width={18}
              />{' '}
              <p>home.jsx</p>
            </div>
          </Link>
          <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
            <div className={styles.file}>
              <img
                src="/html_icon.svg"
                alt="HTML Icon"
                height={18}
                width={18}
              />{' '}
              <p>about.html</p>
            </div>
          </Link>
          <Link href="/contact" as={process.env.BACKEND_URL + '/contact'}>
            <div className={styles.file}>
              <img
                src="/css_icon.svg"
                alt="CSS Icon"
                height={18}
                width={18}
              />{' '}
              <p>contact.css</p>
            </div>
          </Link>
          <Link href="/projects" as={process.env.BACKEND_URL + '/projects'}>
            <div className={styles.file}>
              <img
                src="/js_icon.svg"
                alt="JavaScript Icon"
                height={18}
                width={18}
              />{' '}
              <p>projects.js</p>
            </div>
          </Link>
          <Link href="/articles" as={process.env.BACKEND_URL + '/articles'}>
            <div className={styles.file}>
              <img
                src="/json_icon.svg"
                alt="JSON Icon"
                height={18}
                width={18}
              />{' '}
              <p>articles.json</p>
            </div>
          </Link>
          <Link href="/github" as={process.env.BACKEND_URL + '/github'}>
            <div className={styles.file}>
              <img
                src="/markdown_icon.svg"
                alt="Markdown Icon"
                height={18}
                width={18}
              />{' '}
              <p>github.md</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
