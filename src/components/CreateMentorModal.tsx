import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  type SubmitEvent,
} from "react";
import Modal from "react-modal";
import type { Member, Mentor } from "../types/user";

type PropsType = {
  isOpen: boolean;
  closeModal: () => void;
  members: Member[];
  setMembers: Dispatch<SetStateAction<Member[]>>;
};

const initialData: Mentor = {
  id: 0,
  name: "",
  role: "mentor",
  email: "",
  age: 0,
  postCode: "",
  phone: "",
  hobbies: [],
  url: "",
  experienceDays: 0,
  useLangs: [],
  availableStartCode: 0,
  availableEndCode: 0,
  availableStudent: [],
};

export const CreateMentorModal = ({
  isOpen,
  closeModal,
  members,
  setMembers,
}: PropsType) => {
  const [newUser, setNewUser] = useState<Mentor>(initialData);

  // idだけの配列に変換し、最大のidを取得し、インクリメントする
  const newUserId: number = Math.max(...members.map((m) => m.id)) + 1;

  const onChangeNewUser = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "hobbies" || name === "useLangs") {
      setNewUser({ ...newUser, [name]: value.split(",").map((v) => v.trim()) });
    } else {
      setNewUser({ ...newUser, [name]: value });
    }
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createUser: Mentor = {
      ...newUser,
      id: newUserId,
    };

    setMembers((prev) => [...prev, createUser]);

    setNewUser(initialData);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="bg-white w-25 h-75 border border-secondary mx-auto mt-5 px-4 overflow-y-auto"
    >
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameForm">name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="nameForm"
            value={newUser.name}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="emailForm">email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="emailForm"
            value={newUser.email}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="ageForm">age</label>
          <input
            name="age"
            type="number"
            className="form-control"
            id="ageForm"
            value={newUser.age}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="postCodeForm">postCode</label>
          <input
            name="postCode"
            type="text"
            className="form-control"
            id="postCodeForm"
            value={newUser.postCode}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="phoneForm">phone</label>
          <input
            name="phone"
            type="tel"
            className="form-control"
            id="phoneForm"
            value={newUser.phone}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="hobbiesForm">hobbies</label>
          <input
            name="hobbies"
            type="text"
            className="form-control"
            id="hobbiesForm"
            value={newUser.hobbies}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="urlForm">url</label>
          <input
            name="url"
            type="url"
            className="form-control"
            id="urlForm"
            value={newUser.url}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="experienceDaysForm">experienceDays</label>
          <input
            name="experienceDays"
            type="number"
            className="form-control"
            id="experienceDaysForm"
            value={newUser.experienceDays}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="useLangsForm">useLangs</label>
          <input
            name="useLangs"
            type="text"
            className="form-control"
            id="useLangsForm"
            value={newUser.useLangs}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="availableStartCodeForm">availableStartCode</label>
          <input
            name="availableStartCode"
            type="number"
            className="form-control"
            id="availableStartCodeForm"
            value={newUser.availableStartCode}
            onChange={onChangeNewUser}
          />
        </div>
        <div>
          <label htmlFor="availableEndCodeForm">availableEndCode</label>
          <input
            name="availableEndCode"
            type="number"
            className="form-control"
            id="availableEndCodeForm"
            value={newUser.availableEndCode}
            onChange={onChangeNewUser}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          送信
        </button>
      </form>
    </Modal>
  );
};
