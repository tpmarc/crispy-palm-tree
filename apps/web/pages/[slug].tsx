import { documentToHtmlString, getPageService } from "@crispy/contentful";
import { IPage, PageService } from "@crispy/contentful/page";
import type { GetStaticPropsResult } from "next";
import { Button } from "@crispy/ui";
import { getAppLayout } from "@crispy/ui/Layout";

type BySlugProps = {
  page: IPage;
};

export default function BySlug({ page }: BySlugProps) {
  return (
    <div>
      <h1>{page.title}</h1>

      <span
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(page.content),
        }}
      />

      <Button />
    </div>
  );
}

BySlug.getLayout = getAppLayout;

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<GetStaticPropsResult<BySlugProps>> {
  const pageService = new PageService();
  const page = await pageService.getPage(params.slug);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const pageService = new PageService();
  const pages = await pageService.getPages();
  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
