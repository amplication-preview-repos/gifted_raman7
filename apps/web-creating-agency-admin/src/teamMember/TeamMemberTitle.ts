import { TeamMember as TTeamMember } from "../api/teamMember/TeamMember";

export const TEAMMEMBER_TITLE_FIELD = "id";

export const TeamMemberTitle = (record: TTeamMember): string => {
  return record.id?.toString() || String(record.id);
};
