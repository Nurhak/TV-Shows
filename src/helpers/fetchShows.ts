import type { Show } from "@/data/Show";
import { getReq } from "@/lib/fetch";

const PAGE_LIMIT = 250;

export const fetchRandomShows = async (shuffle = false): Promise<Show[]> => {
  let pageNumber = parseInt(localStorage.getItem("pageNumber") || "0");
  if (!pageNumber || shuffle) {
    pageNumber = Math.floor(Math.random() * Math.floor(PAGE_LIMIT));
    localStorage.setItem("pageNumber", pageNumber.toString());
  }
  return await fetchShows(pageNumber);
};

export const fetchShows = async (pageNumber: number): Promise<Show[]> => {
  return await getReq<Show[]>(`/shows?page=${pageNumber}`);
};

export const mapShowsToGenres = (shows: Show[]) => {
  const genres = shows.reduce((acc, show) => {
    show.genres.forEach((genre) => {
      if (!acc[genre]) {
        acc[genre] = [];
      }
      acc[genre].push(show);
    });
    return acc;
  }, {} as { [key: string]: Show[] });
  return genres;
};
