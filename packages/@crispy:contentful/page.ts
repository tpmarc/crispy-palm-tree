import { Document } from "@contentful/rich-text-types";
import { ContentfulClient } from ".";

export interface IPage {
  title: string;
  slug: string;
  content: Document;
}

export interface IPageService {
  getPages: () => Promise<IPage[]>;
  getPage: (slug: string) => Promise<IPage>;
  getIndexPage: () => Promise<IPage>;
}

export class PageService implements IPageService {
  getPages = async (): Promise<IPage[]> => {
    const pages = await ContentfulClient.getInstance().getEntries<IPage>({
      content_type: "page",
    });

    return pages.items.map((p) => p.fields);
  };

  getPage = async (slug: string): Promise<IPage> => {
    const { items } = await ContentfulClient.getInstance().getEntries<IPage>({
      content_type: "page",
      "fields.slug": slug,
    });

    const [page] = items;

    return page.fields;
  };

  getIndexPage = async (): Promise<IPage> => {
    return this.getPage("index");
  };
}
