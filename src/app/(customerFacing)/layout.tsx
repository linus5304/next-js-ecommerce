import { Nav, NavLink } from "../../components/nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/orders">My Orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  );
}
