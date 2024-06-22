import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

export default function Component() {
  return (
    <Tabs aria-label="Default tabs" variant="default">
      <Tabs.Item active title="Profile" icon={HiUserCircle}>
        <p className="text-gray-500 dark:text-gray-400">
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Profile tab{"'"}s associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item title="Dashboard" icon={MdDashboard}>
        <p className="text-gray-500 dark:text-gray-400">
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Dashboard tab{"'"}s associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        <p className="text-gray-500 dark:text-gray-400">
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Settings tab{"'"}s associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        <p className="text-gray-500 dark:text-gray-400">
          This is{' '}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab{"'"}s associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs>
  );
}
