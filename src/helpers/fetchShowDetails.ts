import type { Show } from "@/data/Show";
import { getReq } from "@/lib/fetch";

export const fetchShowDetails = async (id: string): Promise<Show> => {
  return await getReq<Show>(`/shows/${id}`);
};
