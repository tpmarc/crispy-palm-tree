import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Button } from "ui";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getStaticPaths() {
  const pages = await client.getEntries({ content_type: "page" });
  const paths = pages.items.map(({ fields }: any) => ({
    params: { slug: fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { items } = await client.getEntries({
    content_type: "page",
    "fields.slug": params.slug,
  });

  return {
    props: {
      page: items[0],
    },
  };
}

export default function Page({ page }: any) {
  const { fields, sys } = page;

  return (
    <div>
      <h1>{fields.title}</h1>

      <span
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(fields.content),
        }}
      />

      <Button />
    </div>
  );
}
