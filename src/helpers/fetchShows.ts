import type { Show } from "@/data/Show";
import { getReq } from "@/lib/fetch";
import { ref, type Ref } from "vue";

const PAGE_LIMIT = 250;

export const fetchRandomShows = () => {
  const pageNumber = Math.floor(Math.random() * Math.floor(PAGE_LIMIT));
  return fetchShows(pageNumber);
};

export const fetchShows = (
  pageNumber: number
): {
  shows: Ref<Show[]>;
  error: Ref<string | null>;
  isLoading: Ref<boolean>;
} => {
  const isLoading = ref(true);
  const error = ref(null);
  const shows = ref<Array<Show>>([]);
  getReq<Show[]>(`/shows?page=${pageNumber}`)
    .then((resp) => (shows.value = resp))
    .catch((err) => (error.value = err))
    .finally(() => (isLoading.value = false));
  return { shows, error, isLoading };
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
