// ============================================================
//  src/components/layout/Layout.jsx
//  Global layout wrapper: Navbar + <Outlet /> + Footer
//  Used as a parent route in App.jsx so Navbar/Footer
//  are NEVER duplicated in individual page components.
// ============================================================
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  // Hide the global Footer on the Contact page since it contains a duplicate form
  const isContactPage = location.pathname === '/contact';

  return (
    <>
      {/* Top navigation */}
      <Navbar />

      {/* Active page rendered here by React Router */}
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
        </div>
      </main>

      {/* Footer with contact form */}
      {!isContactPage && <Footer />}
    </>
  );
}
