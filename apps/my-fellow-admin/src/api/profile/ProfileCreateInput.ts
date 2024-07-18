import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  location?: string | null;
  gender?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
