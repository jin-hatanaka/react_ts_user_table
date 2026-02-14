import { useEffect, useMemo, useState } from "react";
import { CreateUserButton } from "./components/CreateUserButton";
import { MemberTable } from "./components/MemberTable";
import type { Member, SortKey, SortOrder } from "./types/user";
import { USER_LIST } from "./data/users";
import { StudentTable } from "./components/StudentTable";
import { MentorTable } from "./components/MentorTable";
import { Tabs } from "./components/Tabs";
import { CreateUserModal } from "./components/CreateUserModal";

// テーブル表示までの流れ
// member（初期データ）
// ↓ 表示用に加工
// displayMember（availableMentorとavailableStudentの計算）
// ↓ 抽出
// studentsWithAvailableMentor/mentorsWithAvailableStudent（student/mentorのみのデータに絞り込む）
// ↓ ソート
// sortedStudents/sortedMentors（ソートした配列にする）
// ↓
// 表示

function App() {
  const [members, setMembers] = useState<Member[]>(USER_LIST);
  const students = members.filter((user) => user.role === "student");
  const mentors = members.filter((user) => user.role === "mentor");

  const [tab, setTab] = useState<"all" | "student" | "mentor">("all");

  // どの列を並べるか状態を管理する
  const [sortKey, setSortKey] = useState<SortKey | null>(null);
  // どの向きで並べるか状態を管理する
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  // ユーザー一覧の表示用配列を作成する
  // 初期データでは、availableMentorとavailableStudentが入力されてないので作成する
  const displayMembers = useMemo(() => {
    return members.map((member) => {
      if (member.role === "student") {
        const availableMentor = mentors
          .filter(
            (mentor) =>
              member.taskCode >= mentor.availableStartCode &&
              member.taskCode <= mentor.availableEndCode,
          )
          .map((mentor) => mentor.name);

        return { ...member, availableMentor };
      } else {
        const availableStudent = students
          .filter(
            (student) =>
              student.taskCode >= member.availableStartCode &&
              student.taskCode <= member.availableEndCode,
          )
          .map((student) => student.name);

        return { ...member, availableStudent };
      }
    });
  }, [members]);

  // studentのみのデータに絞り込む
  const studentsWithAvailableMentor = useMemo(
    () => displayMembers.filter((member) => member.role === "student"),
    [displayMembers],
  );

  // mentorのみのデータに絞り込む
  const mentorsWithAvailableStudent = useMemo(
    () => displayMembers.filter((member) => member.role === "mentor"),
    [displayMembers],
  );

  // タブを切り替えたらソートをリセット
  useEffect(() => {
    setSortKey(null);
    setSortOrder("asc");
  }, [tab]);

  // 同じ列をクリックしたら昇降反転、違う列なら asc からスタート
  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // 生徒の表示用配列を作成する
  const sortedStudents = useMemo(() => {
    if (!sortKey) return studentsWithAvailableMentor;

    const sorted = [...studentsWithAvailableMentor].sort((a, b) => {
      const aValue = a[sortKey as "studyMinutes" | "score"];
      const bValue = b[sortKey as "studyMinutes" | "score"];

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    });
    return sorted;
  }, [studentsWithAvailableMentor, sortKey, sortOrder]);

  // メンターの表示用配列を作成
  const sortedMentors = useMemo(() => {
    if (!sortKey) return mentorsWithAvailableStudent;

    const sorted = [...mentorsWithAvailableStudent].sort((a, b) => {
      return sortOrder === "asc"
        ? a.experienceDays - b.experienceDays
        : b.experienceDays - a.experienceDays;
    });
    return sorted;
  }, [mentorsWithAvailableStudent, sortKey, sortOrder]);

  return (
    <>
      <div className="d-flex gap-3 justify-content-center mt-1">
        <Tabs tab={tab} setTab={setTab} />
        <CreateUserButton onClick={() => setIsOpen(true)} />
        <CreateUserModal
          isOpen={isOpen}
          closeModal={closeModal}
          members={members}
          setMembers={setMembers}
        />
      </div>
      {tab === "all" && <MemberTable members={displayMembers} />}
      {tab === "student" && (
        <StudentTable students={sortedStudents} onSort={handleSort} />
      )}
      {tab === "mentor" && (
        <MentorTable mentors={sortedMentors} onSort={handleSort} />
      )}
    </>
  );
}

export default App;
