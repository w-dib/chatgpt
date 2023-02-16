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
            <div className="flex flex-col md:flex-row">
              <div className="bg-slate-500 overflow-y-auto md:h-screen md:min-w-[20rem]">
                <Sidebar />
              </div>

              {/* Client Provider */}
              <ClientProvider />

              <div className="flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js" /> */}
      </body>
    </html>
  );
}
