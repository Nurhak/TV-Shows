import type { Show } from "@/data/Show";
import { getReq } from "@/lib/fetch";

export interface SearchResult {
  score: number;
  show: Show;
}

export const fetchShowsBySearchQuery = async (
  query: string
): Promise<SearchResult[]> => {
  return await getReq<SearchResult[]>(`/search/shows`, {
    q: query,
  });
};
