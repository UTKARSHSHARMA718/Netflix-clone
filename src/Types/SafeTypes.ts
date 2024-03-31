import { User } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type MovieType = {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  genre: string;
  rating: number;
  cast: string[];
  releasedOn: Date;
  resolution: string[];
  minutes: number;
  langauges: string[];
  directedBy: string[];
  type: string;
};
