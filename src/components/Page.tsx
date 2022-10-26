import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageProps = {
  children: ReactNode;
};

const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <div className="m-auto max-w-full px-4 md:px-8 lg:px-16">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Page;
