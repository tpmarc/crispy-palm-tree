import { PropsWithChildren, ReactNode } from "react";

export function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      App layout
      {children}
    </div>
  );
}

export function getAppLayout(content: ReactNode) {
  return <AppLayout>{content}</AppLayout>;
}
