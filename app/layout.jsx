import "./styles/globals.css";
import Nav from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "NEXT BLOG APP",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
