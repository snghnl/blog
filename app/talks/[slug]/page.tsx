import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getTalks } from "app/talks/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  let talks = getTalks();

  return talks.map((talk) => ({
    slug: talk.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let talk = getTalks().find((talk) => talk.slug === slug);
  if (!talk) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = talk.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/talks/${talk.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Talk({ params }) {
  const { slug } = await params;
  let talk = getTalks().find((talk) => talk.slug === slug);

  if (!talk) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: talk.metadata.title,
            datePublished: talk.metadata.publishedAt,
            dateModified: talk.metadata.publishedAt,
            description: talk.metadata.summary,
            image: talk.metadata.image
              ? `${baseUrl}${talk.metadata.image}`
              : `/og?title=${encodeURIComponent(talk.metadata.title)}`,
            url: `${baseUrl}/talks/${talk.slug}`,
            author: {
              "@type": "Person",
              name: "Seungheon Lee",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {talk.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(talk.metadata.publishedAt)}
        </p>
        {talk.metadata.slides && (
          <a
            href={talk.metadata.slides}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            slides ↗
          </a>
        )}
      </div>
      <article className="prose">
        <CustomMDX source={talk.content} />
      </article>
    </section>
  );
}
