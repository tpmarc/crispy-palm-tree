import { createClient } from "contentful";
import { Button } from "ui";

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const entries = await client.getEntries({ content_type: "page" });

  return {
    props: {
      pages: entries.items,
    },
  };
}

export default function Web({ pages }: any) {
  return (
    <div>
      <h1>Web</h1>

      <ul>
        {pages.map(({ fields, sys }: any) => {
          return <li key={sys.id}>{fields.title}</li>;
        })}
      </ul>

      <Button />
    </div>
  );
}
