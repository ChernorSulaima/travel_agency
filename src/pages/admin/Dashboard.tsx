import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Overview', icon: ChartBarIcon, current: true },
  { name: 'Blog Posts', icon: DocumentTextIcon, current: false },
  { name: 'Inquiries', icon: UserGroupIcon, current: false },
  { name: 'Settings', icon: Cog6ToothIcon, current: false },
];

const stats = [
  { name: 'Total Blog Posts', value: '12' },
  { name: 'Active Services', value: '6' },
  { name: 'New Inquiries', value: '24' },
  { name: 'Consultation Requests', value: '18' },
];

const recentInquiries = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    subject: 'Visa Application Question',
    date: '1 hour ago',
  },
  {
    id: 2,
    name: 'Maria Garcia',
    email: 'maria.g@example.com',
    subject: 'Green Card Process',
    date: '2 hours ago',
  },
  {
    id: 3,
    name: 'David Chen',
    email: 'david.c@example.com',
    subject: 'Citizenship Application',
    date: '3 hours ago',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-jcas-dark px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <span className="text-2xl font-bold text-white">JCAS Admin</span>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className={classNames(
                          item.current
                            ? 'bg-jcas-primary text-white'
                            : 'text-gray-300 hover:text-white hover:bg-jcas-primary',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current ? 'text-white' : 'text-gray-300 group-hover:text-white',
                            'h-6 w-6 shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto">
                <a
                  href="#"
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-300 hover:bg-jcas-primary hover:text-white"
                >
                  <ArrowLeftOnRectangleIcon
                    className="h-6 w-6 shrink-0 text-gray-300 group-hover:text-white"
                    aria-hidden="true"
                  />
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  className="bg-white overflow-hidden rounded-lg shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                            {stat.name}
                          </dt>
                          <dd className="flex items-baseline">
                            <div className="text-2xl font-semibold text-jcas-dark">
                              {stat.value}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Inquiries */}
            <div className="mt-8">
              <motion.div
                className="bg-white shadow rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-6">
                  <h2 className="text-lg font-medium text-jcas-dark">Recent Inquiries</h2>
                  <div className="mt-6 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Email
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Subject
                              </th>
                              <th
                                scope="col"
                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Date
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {recentInquiries.map((inquiry) => (
                              <tr key={inquiry.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                  {inquiry.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {inquiry.email}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {inquiry.subject}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                  {inquiry.date}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 