import Layout from "@/components/Layout";
import "@/styles/globals.css";
import localFont from "next/font/local";
const Quicksand = localFont({
  src: [
    {
      path: "../../assets/fonts/Quicksand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Quicksand-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Quicksand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={Quicksand.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
