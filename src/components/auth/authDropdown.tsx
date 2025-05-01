import React, { useState } from "react";
import { Dropdown, MenuProps, Button } from "antd";
import {
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./auth.css";
interface AuthDropdownProps {
  isAuthenticated: boolean;
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

const AuthDropdown: React.FC<AuthDropdownProps> = ({
  isAuthenticated,
  user,
  onLogout,
}) => {
  const [visible, setVisible] = useState(false);

  const items: MenuProps["items"] = isAuthenticated
    ? [
        {
          key: "1",
          label: (
            <div className="px-4 py-2">
              <p className="font-semibold">{user?.name}</p>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "2",
          label: (
            <button onClick={onLogout} className="w-full text-left">
              <LogoutOutlined className="mr-2" />
              Logout
            </button>
          ),
        },
      ]
    : [
        {
          key: "1",
          label: (
            <Link to="/login">
              <LoginOutlined className="mr-2" />
              Login
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to="/signup">
              <UserAddOutlined className="mr-2" />
              Sign Up
            </Link>
          ),
        },
      ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      open={visible}
      onOpenChange={(flag) => setVisible(flag)}
      placement="bottomRight"
    >
      <Button
        type="text"
        icon={<UserOutlined className="text-xl text-[#030000]" />}
        className="flex items-center justify-center"
      />
    </Dropdown>
  );
};

export default AuthDropdown;
