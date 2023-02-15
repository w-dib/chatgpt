import Sidebar from "@/components/Sidebar";
import SessionProvider from "@/components/SessionProvider";
import Login from "@/components/Login";
import { getServerSession } from "next-auth";
import "./globals.css";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ClientProvider from "@/components/ClientProvider";

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-slate-500 overflow-y-auto max-w-xs h-screen md:min-w-[20rem]">
                <Sidebar />
              </div>

              {/* Client Provider */}
              <ClientProvider />

              <div className="flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
