import { gamesMock } from "./mockGames";

// Juegos
export async function getLatestGames() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        gamesMock.map(({ description, releaseDate, score, slug, title, image }) => ({
          description,
          releaseDate,
          score,
          slug,
          title,
          image,
        }))
      );
    }, 300);
  });
}

// Detalles de los juegos:
export async function getGameDetails(slug) {
  return new Promise((resolve, reject) => {
    const game = gamesMock.find((g) => g.slug === slug);
    if (game) {
      resolve({
        img: game.image,
        title: game.title,
        slug: game.slug,
        description: game.description,
        score: game.score,
        reviews: game.reviews || [],
      });
    } else {
      reject(new Error("Juego no encontrado."));
    }
  });
}
