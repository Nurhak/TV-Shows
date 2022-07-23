import type { Episode } from "@/data/Episode";
import { getReq } from "@/lib/fetch";

export const fetchEpisodes = async (id: string): Promise<Episode[]> => {
  return await getReq<Episode[]>(`/shows/${id}/episodes`);
};
