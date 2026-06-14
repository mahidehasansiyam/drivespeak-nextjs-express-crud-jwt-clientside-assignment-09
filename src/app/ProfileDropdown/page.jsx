'use client';

import Link from 'next/link';
import { FaAngleDown, FaUser, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { Dropdown, Button } from '@heroui/react';

export default function ProfileDropdown() {
  return (
    <Dropdown placement="bottom-end">
      <Button
        aria-label="Profile Menu"
        className="
          bg-white/10
          backdrop-blur-md
          border border-white/20
          text-white
          rounded-full
        "
      >
        <FaAngleDown />
      </Button>

      <Dropdown.Popover
        className="
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-2xl
          shadow-2xl
          min-w-[220px]
        "
      >
        <Dropdown.Menu aria-label="Profile Actions">
          <Dropdown.Item id="home" textValue="Home" className='text-white' startContent={<FaHome />}>
            <Link href="/" className="w-full block">
              Home
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="profile"
            textValue="Profile"
            startContent={<FaUser />}
          >
            <Link href="/profile" className="w-full block">
              Profile
            </Link>
          </Dropdown.Item>

          <Dropdown.Item id="dashboard" textValue="Dashboard">
            <Link href="/dashboard" className="w-full block">
              Dashboard
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="logout"
            textValue="Logout"
            variant="danger"
            color="danger"
            startContent={<FaSignOutAlt />}
            onPress={() => {
              // console.log('Logout clicked');

              // logout logic here
              // signOut();
            }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
