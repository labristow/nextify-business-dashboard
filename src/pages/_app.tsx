import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/store";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

const dashboardPages = [
  "/home",
  "/products",
  "/orders",
  "/customers",
  "/profile",
  "/setting",
];
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const isDashboardPages = dashboardPages.includes(router.pathname);
  return (
    <Provider store={store}>
      <Toaster />
      <SessionProvider session={session}>
        {isDashboardPages ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </Provider>
  );
}
