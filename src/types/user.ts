type BaseMember = {
  id: number;
  name: string;
  email: string;
  age: number;
  postCode: string;
  phone: string;
  hobbies: string[];
  url: string;
};

export type Student = BaseMember & {
  role: "student";
  studyMinutes: number;
  taskCode: number;
  studyLangs: string[];
  score: number;
  availableMentor: string[];
};

export type Mentor = BaseMember & {
  role: "mentor";
  experienceDays: number;
  useLangs: string[];
  availableStartCode: number;
  availableEndCode: number;
  availableStudent: string[];
};

export type Member = Student | Mentor;

export type StudentSortKey = "studyMinutes" | "score";
export type MentorSortKey = "experienceDays";

export type SortKey = StudentSortKey | MentorSortKey;

export type SortOrder = "asc" | "desc";
