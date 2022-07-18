import { documentToHtmlString } from "@crispy/contentful";
import { IPage, PageService } from "@crispy/contentful/page";
import { Button } from "@crispy/ui";
import { GetStaticPropsResult } from "next";

type IndexPageProps = {
  page: IPage;
};

export default function IndexPage({ page }: IndexPageProps) {
  return (
    <>
      <h1>{page.title}</h1>

      <span
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(page.content),
        }}
      />

      <Button />
    </>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IndexPageProps>
> {
  const pageService = new PageService();
  const page = await pageService.getIndexPage();

  return {
    props: {
      page,
    },
  };
}
