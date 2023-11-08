import { http, delay, HttpResponse } from "msw";
import { filmsMock } from "./filmsMock";

export const handlers = [
  http.get("https://pelis-favoritas-lau-v2.onrender.com/films", async () => {
    await delay(150);
    return HttpResponse.json(filmsMock);
  }),
];
