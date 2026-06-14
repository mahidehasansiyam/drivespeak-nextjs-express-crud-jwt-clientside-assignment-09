'use client';

import Link from 'next/link';
import { FaAngleDown, FaUser, FaSignOutAlt, FaHome } from 'react-icons/fa';
import { Dropdown, Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';

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
          <Dropdown.Item
            id="home"
            textValue="Home"
            className="text-white hover:text-black"
            startContent={<FaHome />}
          >
            <Link href="/" className="w-full block">
              Home
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="profile"
            className="text-white hover:text-black"
            textValue="Profile"
            startContent={<FaUser />}
          >
            <Link href="/profile" className="w-full block">
              Profile
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="dashboard"
            textValue="Dashboard"
            className="text-white hover:text-black"
          >
            <Link href="/dashboard" className="w-full block">
              Dashboard
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="my-added-cars"
            textValue="My Added Cars"
            className="text-white hover:text-black"
          >
            <Link href="/my-added-cars" className="w-full block">
              My Added Cars
            </Link>
          </Dropdown.Item>

          <Dropdown.Item
            id="logout"
            className="text-red-400 "
            textValue="Logout"
            variant="danger"
            color="danger"
            startContent={<FaSignOutAlt />}
            onPress={async () => {
              await authClient.signOut();
            }}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
