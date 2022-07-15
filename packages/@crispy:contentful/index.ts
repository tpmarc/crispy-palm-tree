import { ContentfulClientApi, createClient, Entry } from "contentful";
export { documentToHtmlString } from "@contentful/rich-text-html-renderer";

type PageFields = {
  title: string;
  slug: string;
  content: string;
};

export type Page = Entry<PageFields>;

let client: ContentfulClientApi;

export const fromContentful = () => {
  if (!client) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
  }

  const getPages = async (): Promise<Entry<PageFields>[]> => {
    const pages = await client.getEntries<PageFields>({ content_type: "page" });
    return pages.items;
  };

  const getPage = async (slug: string): Promise<Entry<PageFields>> => {
    const { items } = await client.getEntries<PageFields>({
      content_type: "page",
      "fields.slug": slug,
    });

    const [page] = items;
    return page;
  };

  const getIndexPage = async (): Promise<Entry<PageFields>> => getPage("index");

  return {
    getPage,
    getPages,
    getIndexPage,
  };
};
