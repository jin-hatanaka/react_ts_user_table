import type { Member } from "../types/user";

type PropsType = {
  members: Member[];
};

export const MemberTable = ({ members }: PropsType) => {
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
          <th scope="col">studyMinutes</th>
          <th scope="col">taskCode</th>
          <th scope="col">studyLangs</th>
          <th scope="col">score</th>
          <th scope="col">availableMentor</th>
          <th scope="col">experienceDays</th>
          <th scope="col">useLangs</th>
          <th scope="col">availableStartCode</th>
          <th scope="col">availableEndCode</th>
          <th scope="col">availableStudent</th>
        </tr>
      </thead>
      <tbody>
        {members.map((m) => (
          <tr key={m.id}>
            <th scope="row">{m.id}</th>
            <td>{m.name}</td>
            <td>{m.role}</td>
            <td>{m.email}</td>
            <td>{m.age}</td>
            <td>{m.postCode}</td>
            <td>{m.phone}</td>
            <td>{m.hobbies.join(", ")}</td>
            <td>{m.url}</td>
            {m.role === "student" ? (
              <>
                <td>{m.studyMinutes}</td>
                <td>{m.taskCode}</td>
                <td>{m.studyLangs.join(", ")}</td>
                <td>{m.score}</td>
                <td>{m.availableMentor.join(", ")}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </>
            ) : (
              <>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{m.experienceDays}</td>
                <td>{m.useLangs.join(", ")}</td>
                <td>{m.availableStartCode}</td>
                <td>{m.availableEndCode}</td>
                <td>{m.availableStudent.join(", ")}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
