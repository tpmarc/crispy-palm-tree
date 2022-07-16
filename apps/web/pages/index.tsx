import { documentToHtmlString } from "@crispy/contentful";
import { IPage, PageService } from "@crispy/contentful/page";
import { Button } from "@crispy/ui";
import { getAppLayout } from "@crispy/ui/Layout";
import { GetStaticPropsResult } from "next";

type IndexPageProps = {
  page: IPage;
};

export default function IndexPage({ page }: IndexPageProps) {
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

IndexPage.getLayout = getAppLayout;

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
