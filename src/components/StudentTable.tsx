import type { Student } from "../types/user";

type PropsType = {
  students: Student[];
  onSort: (key: "studyMinutes" | "score") => void;
};

export const StudentTable = ({ students, onSort }: PropsType) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">role</th>
          <th scope="col">email</th>
          <th scope="col">age</th>
          <th scope="col">postCode</th>
          <th scope="col">phone</th>
          <th scope="col">hobbies</th>
          <th scope="col">url</th>
          <th scope="col" onClick={() => onSort("studyMinutes")}>
            studyMinutes
          </th>
          <th scope="col">taskCode</th>
          <th scope="col">studyLangs</th>
          <th scope="col" onClick={() => onSort("score")}>
            score
          </th>
          <th scope="col">availableMentor</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <th scope="row">{s.id}</th>
            <td>{s.name}</td>
            <td>{s.role}</td>
            <td>{s.email}</td>
            <td>{s.age}</td>
            <td>{s.postCode}</td>
            <td>{s.phone}</td>
            <td>{s.hobbies.join(", ")}</td>
            <td>{s.url}</td>
            <td>{s.studyMinutes}</td>
            <td>{s.taskCode}</td>
            <td>{s.studyLangs.join(", ")}</td>
            <td>{s.score}</td>
            <td>{s.availableMentor.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
