import { User } from "../user/User";

export type Profile = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  location: string | null;
  gender?: "Option1" | null;
  user?: User | null;
};
