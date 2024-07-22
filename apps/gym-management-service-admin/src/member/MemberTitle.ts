import { Member as TMember } from "../api/member/Member";

export const MEMBER_TITLE_FIELD = "name";

export const MemberTitle = (record: TMember): string => {
  return record.name?.toString() || String(record.id);
};
