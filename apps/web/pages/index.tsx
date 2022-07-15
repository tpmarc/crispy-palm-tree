import { documentToHtmlString, fromContentful, Page } from "@crispy/contentful";
import { Button } from "@crispy/ui";
import { GetStaticPropsResult } from "next";

type StaticProps = {
  page: Page;
};

export async function getStaticProps(): Promise<
  GetStaticPropsResult<StaticProps>
> {
  const page = await fromContentful().getIndexPage();

  return {
    props: {
      page,
    },
  };
}

export default function IndexPage({ page }: any) {
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
