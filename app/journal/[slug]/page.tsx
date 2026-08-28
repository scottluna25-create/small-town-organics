import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { absUrl, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: absUrl(`/journal/${article.slug}`) },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url: absUrl(`/journal/${article.slug}`),
      images: [{ url: "/logo.png", alt: `${site.name} badge` }],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, logo: absUrl("/logo.png") },
    mainEntityOfPage: absUrl(`/journal/${article.slug}`),
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm text-moss">
        {article.date} · {article.readingTime}
      </p>
      <h1 className="mt-3 font-serif text-4xl leading-tight text-forest-deep">{article.title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-forest">
        {article.content.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
