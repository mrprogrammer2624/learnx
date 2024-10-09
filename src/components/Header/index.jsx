import { Avatar, Dropdown } from "antd";
import { useTitle } from "../../App";
import clsx from "clsx";
import { Icons } from "@/constants";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@/components/";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const { headerText } = useTitle();
  return (
    <header
      className={clsx(
        styles.header,
        "d-flex align-items-center justify-content-between"
      )}
    >
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <Button
          // icon={collapsed ? Icons.NotificationBall : Icons.AllEmployees}
          className={"d-md-none"}
        />
        <h1 className="clr-dark fw-semibold">{headerText}</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <Input placeholder={"Search"} prefix={Icons.Search} />
        <Button
          icon={Icons.NotificationBall}
          onClick={() => navigate("/notifications")}
        />
        {/* <Dropdown items={menuItems}>children</Dropdown> */}
        <Dropdown
          overlayStyle={{
            background: "#1f1f1f",
            borderRadius: "8px",
          }}
        >
          <a
            onClick={(e) => e.preventDefault()}
            className="d-flex align-items-center justify-content-start gap-xs"
          >
            <Avatar src="A" alt="Lucifer" />
            <div className="d-flex flex-column">
              <span className="font-semibold p d-block lh-base clr-white">
                Lucifer
              </span>
              <span className="text-xs text-gray-400 p d-block lh-base clr-gray">
                HR Manager
              </span>
            </div>
          </a>
        </Dropdown>
      </div>
    </header>
  );
};
