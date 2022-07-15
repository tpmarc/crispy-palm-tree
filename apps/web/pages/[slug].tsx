import { Page, documentToHtmlString, fromContentful } from "@crispy/contentful";

import { Button } from "@crispy/ui";
import type { GetStaticPropsResult } from "next";

export async function getStaticPaths() {
  const pages = await fromContentful().getPages();
  const paths = pages.map(({ fields: { slug } }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

type StaticProps = {
  page: Page;
};

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<GetStaticPropsResult<StaticProps>> {
  const page = await fromContentful().getPage(params.slug);

  return {
    props: {
      page,
    },
  };
}

export default function PageBySlug({ page }: any) {
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
