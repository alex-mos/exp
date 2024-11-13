#include <stdio.h>
#include <stdbool.h>
#include <SDL2/SDL.h>
#include "./constants.h"

///////////////////////////////////////////////////////////////////
// Global variables
///////////////////////////////////////////////////////////////////
bool game_is_running = false;
SDL_Window* window = NULL;
SDL_Renderer* renderer = NULL;
int last_frame_time = 0;

///////////////////////////////////////////////////////////////////
// Game objects
///////////////////////////////////////////////////////////////////
struct game_object {
  float x;
  float y;
  int width;
  int heigth;
  float vel_x;
  float vel_y;
} ball, paddle;

///////////////////////////////////////////////////////////////////
// Function to initialize SDL window
///////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////
// Setup function that runs once at the beginning of the program
///////////////////////////////////////////////////////////////////
void setup(void) {
  // Initialize the ball position
  ball.width = 15;
  ball.heigth = 15;
  ball.x = -180;
  ball.y = 20;
  ball.vel_x = 300;
  ball.vel_y = 300;
  // Initialize the paddle position
  paddle.width = 100;
  paddle.heigth = 20;
  paddle.x = (WINDOW_WIDTH / 2.0) - (paddle.width / 2.0);
  paddle.y = WINDOW_HEIGHT - 40;
  paddle.vel_x = 0;
  paddle.vel_y = 0;
}

///////////////////////////////////////////////////////////////////
// Function to poll SDL events and process keyboard input
///////////////////////////////////////////////////////////////////
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
      }
      else if (event.key.keysym.sym == SDLK_LEFT) {
        paddle.vel_x = -PADDLE_VELOCITY;
      }
      else if (event.key.keysym.sym == SDLK_RIGHT) {
        paddle.vel_x = PADDLE_VELOCITY;
      }
      break;
    case SDL_KEYUP:
      if (event.key.keysym.sym == SDLK_LEFT) {
        paddle.vel_x = 0;
      }
      else if (event.key.keysym.sym == SDLK_RIGHT) {
        paddle.vel_x = 0;
      }
      break;
  }
}

///////////////////////////////////////////////////////////////////
// Update function
///////////////////////////////////////////////////////////////////
void update() {
  // Calculate how much we have to wait until we reach the target frame time
  int time_to_wait = FRAME_TARGET_TIME - (SDL_GetTicks() - last_frame_time);

  // Delay if the execution is to fast to update this frame
  if (time_to_wait > 0 && time_to_wait <= FRAME_TARGET_TIME) {
    SDL_Delay(time_to_wait);
  }

  // Get two frames delta time converted to seconds
  float delta_time = (SDL_GetTicks() - last_frame_time) / 1000.0;

  // Store the time of the current frame to be used in the next one
  last_frame_time = SDL_GetTicks();

  // Update the ball position based on its velocity
  ball.x += ball.vel_x * delta_time;
  ball.y += ball.vel_y * delta_time;

  // Update the paddle position based on its velocity
  paddle.x += paddle.vel_x * delta_time;

  // Check for ball collision with walls
  if (ball.y < 0) {
    ball.y = 0;
    ball.vel_y = -ball.vel_y;
  }
  if ((ball.x + ball.width) > WINDOW_WIDTH) {
    ball.x = WINDOW_WIDTH - ball.width;
    ball.vel_x = -ball.vel_x;
  }
  if (ball.x < 0) {
    ball.x = 0;
    ball.vel_x = -ball.vel_x;
  }

  // Check for ball collision with paddle
  if (
    ball.x > (paddle.x - ball.width ) &&
    ball.x < (paddle.x + paddle.width + ball.width) &&
    ball.y >= (paddle.y - ball.heigth)
  ) {
    ball.y = paddle.y - ball.heigth;
    ball.vel_y = -ball.vel_y;
  }

  // Prevent the moving paddle out of the window
  if (paddle.x < 0) {
    paddle.x = 0;
  }
  if (paddle.x > (WINDOW_WIDTH - paddle.width)) {
    paddle.x = WINDOW_WIDTH - paddle.width;
  }

  // Check for game over if the ball hits the bottom edge of the window
  if ((ball.y + ball.heigth) > WINDOW_HEIGHT) {
    game_is_running = false;
  }
}

///////////////////////////////////////////////////////////////////
// Render function to draw game objects in the SDL window
///////////////////////////////////////////////////////////////////
void render() {
  SDL_SetRenderDrawColor(renderer, 0, 0, 0, 255);
  SDL_RenderClear(renderer);

  // Draw a ball
  SDL_Rect ball_rect = {
    (int)ball.x,
    (int)ball.y,
    (int)ball.width,
    (int)ball.heigth
  };

  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
  SDL_RenderFillRect(renderer, &ball_rect);

  // Draw a paddle
  SDL_Rect paddle_rect = {
    (int)paddle.x,
    (int)paddle.y,
    (int)paddle.width,
    (int)paddle.heigth
  };

  SDL_SetRenderDrawColor(renderer, 255, 255, 255, 255);
  SDL_RenderFillRect(renderer, &paddle_rect);

  // Update screen
  SDL_RenderPresent(renderer);
}

///////////////////////////////////////////////////////////////////
// Function to destroy SDL window and renderer
///////////////////////////////////////////////////////////////////
void destroy_window() {
  SDL_DestroyRenderer(renderer);
  SDL_DestroyWindow(window);
  SDL_Quit();
};

///////////////////////////////////////////////////////////////////
// Main function
///////////////////////////////////////////////////////////////////
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
