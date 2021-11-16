import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { TITLE, AUTHOR, AUTHOR_EMAIL, YEAR } from '../lib/constants'
import Layout from '../components/Layout'
import styles from '../styles/Site.module.css'

const ExternalLink = ({ href, children }) => (
    <a
      className="ext_link"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
    {children}
  </a>
);

export default function Contact() {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.section}>
          <p>{TITLE}, {YEAR} &mdash; {AUTHOR}.<br></br>
          Contacter l'auteur: <a href={`mailto:${AUTHOR_EMAIL}`}>{AUTHOR_EMAIL}</a>.
          </p>
          <p>Carnet de notes est une réalisation de <ExternalLink href="https://github.com/narmanguebraun">N.A.B</ExternalLink>.<br></br>
          Conception, direction artistique, design graphique, développement web.<br></br>
          Technologies web: Next.js et Markdown. Typographie: Helvetica.
          </p>
        </section>
      </main>
    </Layout>
  )
}
