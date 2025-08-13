import { useQuery } from "@tanstack/react-query";
type Movies = {
    id: string;
    text : string;
};

const API_URL = "http://localhost:3001"

export const useMovies = () => {
    return useQuery<Movies[]>({
    queryKey: ["moviesKey"],
    queryFn: () =>
      fetch(`${API_URL}/movies`).then((res) => res.json()),
  });
};