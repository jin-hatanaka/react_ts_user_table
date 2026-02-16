import { useState, type Dispatch, type SetStateAction } from "react";
import Modal from "react-modal";
import type { Member } from "../types/user";
import { CreateUserModal } from "./CreateUserModal";

Modal.setAppElement("#root");

type PropsType = {
  isOpen: boolean;
  closeModal: () => void;
  members: Member[];
  setMembers: Dispatch<SetStateAction<Member[]>>;
};

export const SelectUserModal = ({
  isOpen,
  closeModal,
  members,
  setMembers,
}: PropsType) => {
  const [openModalType, setOpenModalType] = useState<
    "student" | "mentor" | null
  >(null);

  const handleOpenStudent = () => {
    closeModal();
    setOpenModalType("student");
  };
  const handleOpenMentor = () => {
    closeModal();
    setOpenModalType("mentor");
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bg-white w-25 h-25 border border-secondary mx-auto mt-5"
      >
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
          <span>どちらを登録しますか？</span>
          <div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleOpenStudent}
            >
              student
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleOpenMentor}
            >
              mentor
            </button>
          </div>
        </div>
      </Modal>

      <CreateUserModal
        openModalType={openModalType}
        closeModal={() => setOpenModalType(null)}
        members={members}
        setMembers={setMembers}
      />
    </>
  );
};
