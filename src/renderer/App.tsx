import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Breadcrumb, DarkThemeToggle, Flowbite } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import MainMenu from './components/routes/MainMenu';
import SideBar from './components/SideBarStyled';

export default function App() {
  return (
    <Flowbite
      theme={{
        mode: 'auto',
      }}
    >
      <Router>
        <div className="h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
          <SideBar />
          <div className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
            <Breadcrumb
              aria-label="Solid background breadcrumb example"
              className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
            >
              <Breadcrumb.Item href="#" icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
              <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
            </Breadcrumb>
            <main className="mx-12 my-8">
              <Routes>
                <Route path="/" element={<MainMenu />} />
              </Routes>
            </main>
          </div>
          <div className="flex w-full justify-end items-end">
            <DarkThemeToggle />
          </div>
        </div>
      </Router>
    </Flowbite>
  );
}
