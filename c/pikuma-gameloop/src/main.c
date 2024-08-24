#include <stdio.h>
#include <stdbool.h>
#include <SDL2/SDL.h>
#include "./constants.h"

bool game_is_running = false;
SDL_Window* window = NULL;
SDL_Renderer* renderer = NULL;

struct ball {
  float x;
  float y;
  int width;
  int heigth;
} ball;

bool initialize_window(void) {
  if (SDL_Init(SDL_INIT_EVERYTHING) != 0) {
    fprintf(stderr, "Error initializing SDL.\n");
    return false;
  }

  window = SDL_CreateWindow(
    "game", // window title
    SDL_WINDOWPOS_CENTERED, // window x position
    SDL_WINDOWPOS_CENTERED, // window y position
    WINDOW_WIDTH, // window width
    WINDOW_HEIGHT, // window height
    0
    // SDL_WINDOW_FULLSCREEN
    // SDL_WINDOW_BORDERLESS
  );

  if (!window) {
    fprintf(stderr, "Error creating SDL Window.\n");
    return false;
  }

  renderer = SDL_CreateRenderer(
    window,
    -1, // default display driver
    0 // default way of rendering
  );

  if (!renderer) {
    fprintf(stderr, "Error creating SDL Renderer.\n");
    return false;
  }

  return true;
}

void process_input() {
  SDL_Event event;
  SDL_PollEvent(&event);

  switch (event.type) {
    case SDL_QUIT: // quit button on the window
      game_is_running = false;
      break;
    case SDL_KEYDOWN:
      if (event.key.keysym.sym == SDLK_ESCAPE) {
        game_is_running = false;
      } else if (event.key.keysym.sym == SDLK_UP) {
        ball.y = ball.y - 2;
      } else if (event.key.keysym.sym == SDLK_DOWN) {
        ball.y = ball.y + 2;
      }
      break;
  }
}

void setup() {
  ball.x = 20;
  ball.y = 20;
  ball.width = 15;
  ball.heigth = 15;
}

void update() {
  // todo
}

void render() {
  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
  SDL_RenderClear(renderer);

  // draw a rectangle
  SDL_Rect ball_rect = {
    ball.x,
    ball.y,
    ball.width,
    ball.heigth
  };

  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
  SDL_RenderFillRect(renderer, &ball_rect);

  SDL_RenderPresent(renderer);
}

void destroy_window() {
  SDL_DestroyRenderer(renderer);
  SDL_DestroyWindow(window);
  SDL_Quit();
};

int main() {
  game_is_running = initialize_window();
  printf("game is running\n");

  setup();

  while(game_is_running) {
    process_input();
    update();
    render();
  }

  destroy_window();

  return 0;
}
