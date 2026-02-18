import type { Member, Mentor, Student } from "../types/user";

export function isStudent(member: Member): member is Student {
  return member.role === "student";
}

export function isMentor(member: Member): member is Mentor {
  return member.role === "mentor";
}
