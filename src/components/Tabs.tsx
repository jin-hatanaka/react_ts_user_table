import type { Dispatch, SetStateAction } from "react";

type PropsType = {
  tab: "all" | "student" | "mentor";
  setTab: Dispatch<SetStateAction<"all" | "student" | "mentor">>;
};

export const Tabs = ({ tab, setTab }: PropsType) => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <button
          className={`nav-link border border-primary ${tab === "all" ? "active" : ""}`}
          onClick={() => setTab("all")}
        >
          ユーザー一覧
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link border border-primary ${tab === "student" ? "active" : ""}`}
          onClick={() => setTab("student")}
        >
          生徒一覧
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link border border-primary ${tab === "mentor" ? "active" : ""}`}
          onClick={() => setTab("mentor")}
        >
          メンター一覧
        </button>
      </li>
    </ul>
  );
};
