import Head from "next/head";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = "David G.",
}: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>{children}</main>
    </>
  );
}
