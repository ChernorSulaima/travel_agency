import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-jcas-light">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="font-heading text-2xl font-bold text-jcas-dark">JCAS</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-jcas-dark"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-jcas-dark hover:text-jcas-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact"
              className="rounded-full bg-jcas-primary px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="font-heading text-2xl font-bold text-jcas-dark">JCAS</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-jcas-dark"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-jcas-dark hover:bg-jcas-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/contact"
                    className="block rounded-full bg-jcas-primary px-6 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-jcas-dark transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="bg-jcas-dark text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-xl font-bold">JCAS Global Immigration Services LLC</h3>
              <p className="mt-4 text-sm text-gray-300">Guiding You to the American Dream</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-gray-300 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@jcasglobal.com</li>
                <li>Address: 123 Immigration Ave, Suite 100, City, State 12345</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-600 pt-8 text-center">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} JCAS Global Immigration Services LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 