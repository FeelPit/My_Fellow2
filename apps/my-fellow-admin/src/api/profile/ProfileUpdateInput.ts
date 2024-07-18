import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  location?: string | null;
  gender?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
