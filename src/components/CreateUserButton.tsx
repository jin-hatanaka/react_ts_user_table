type PropsType = {
  onClick: () => void;
};

export const CreateUserButton = ({ onClick }: PropsType) => {
  return (
    <button type="button" onClick={onClick} className="btn btn-secondary">
      新規登録
    </button>
  );
};
