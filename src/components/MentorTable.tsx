import type { Mentor } from "../types/user";

type PropsType = {
  mentors: Mentor[];
  onSort: (key: "experienceDays") => void;
};

export const MentorTable = ({ mentors, onSort }: PropsType) => {
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
          <th scope="col" onClick={() => onSort("experienceDays")}>
            experienceDays
          </th>
          <th scope="col">useLangs</th>
          <th scope="col">availableStartCode</th>
          <th scope="col">availableEndCode</th>
          <th scope="col">availableStudent</th>
        </tr>
      </thead>
      <tbody>
        {mentors.map((m) => (
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
            <td>{m.experienceDays}</td>
            <td>{m.useLangs.join(", ")}</td>
            <td>{m.availableStartCode}</td>
            <td>{m.availableEndCode}</td>
            <td>{m.availableStudent.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
