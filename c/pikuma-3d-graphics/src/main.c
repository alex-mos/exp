#include <stdio.h>
#include <stdbool.h>
#include <SDL2/SDL.h>
#include "./constants.h"

///////////////////////////////////////////////////////////////////
// Global variables
///////////////////////////////////////////////////////////////////
bool is_running = false;
SDL_Window* window = NULL;
SDL_Renderer* renderer = NULL;
uint32_t* color_buffer = NULL;
SDL_Texture* color_buffer_texture = NULL;
int window_width = 800;
int window_height = 600;

///////////////////////////////////////////////////////////////////
// Initialization
///////////////////////////////////////////////////////////////////
bool initialize_window(void) {
  if (SDL_Init(SDL_INIT_EVERYTHING) != 0) {
    fprintf(stderr, "Error initializing SDL.\n");
    return false;
  }

  // Use SDL to query what is the fullscreen max width and height
  SDL_DisplayMode display_mode;
  SDL_GetCurrentDisplayMode(
    0,
    &display_mode
  );
  window_width = display_mode.w;
  window_height = display_mode.h;

  printf("Screen width is %dpx.\n", window_width);
  printf("Screen heigth is %dpx.\n", window_height);

  // Create a SDL window
  window = SDL_CreateWindow(
    "renderer", // window title
    SDL_WINDOWPOS_CENTERED, // window x position
    SDL_WINDOWPOS_CENTERED, // window y position
    window_width, // window width, number
    window_height, // window height, number
    // 0
    SDL_WINDOW_FULLSCREEN_DESKTOP
    // SDL_WINDOW_FULLSCREEN
  );
  if (!window) {
    fprintf(stderr, "Error creating SDL window.\n");
    return false;
  }

  // Create a SDL renderer
  renderer = SDL_CreateRenderer(
    window,
    -1, // default display driver
    0 // default way of rendering
  );
  if (!renderer) {
    fprintf(stderr, "Error creating SDL renderer.\n");
    return false;
  }

  // SDL_SetWindowFullscreen(window, SDL_WINDOW_FULLSCREEN);

  return true;
}

///////////////////////////////////////////////////////////////////
// Setup
///////////////////////////////////////////////////////////////////
void setup(void) {
  // Allocate the required memory in bytes for the color buffer
  color_buffer = (uint32_t*) malloc(sizeof(uint32_t) * window_width * window_height);

  // Create a SDL texture that is used to display the color buffer
  color_buffer_texture = SDL_CreateTexture(
    renderer,
    SDL_PIXELFORMAT_ARGB8888,
    SDL_TEXTUREACCESS_STREAMING,
    window_width,
    window_height
  );
}

///////////////////////////////////////////////////////////////////
// Process input
///////////////////////////////////////////////////////////////////
void process_input(void) {
  SDL_Event event;
  SDL_PollEvent(&event);

  switch (event.type) {
    case SDL_QUIT:
      is_running = false;
      break;
    case SDL_KEYDOWN:
      if (event.key.keysym.sym == SDLK_ESCAPE) {
        is_running = false;
      }
      break;
  }
}

///////////////////////////////////////////////////////////////////
// Update
///////////////////////////////////////////////////////////////////
void update(void) {

}

void point(uint x, uint y, uint32_t color) {
  color_buffer[(window_width * y) + x] = color;
}

void clear_color_buffer(uint32_t color) {
  for (int y = 0; y < window_height; y++) {
    for (int x = 0; x < window_width; x++) {
      point(x, y, 0xFFFFFF00);
    }
  }
}

///////////////////////////////////////////////////////////////////
// Render
///////////////////////////////////////////////////////////////////
void render_color_buffer(void) {
  SDL_UpdateTexture(
    color_buffer_texture,
    NULL,
    color_buffer,
    (int)(window_width * sizeof(uint32_t)) // size of each row
  );
  SDL_RenderCopy(
    renderer,
    color_buffer_texture,
    NULL,
    NULL
  );
}

void render(void) {
  SDL_SetRenderDrawColor(renderer, 255, 0, 0, 0); // select renderer draw color
  SDL_RenderClear(renderer); // clear the whole renderer with selected color
  render_color_buffer();
  clear_color_buffer(0xFFFFFF00);
  SDL_RenderPresent(renderer);
}

///////////////////////////////////////////////////////////////////
// Function to destroy SDL window and renderer
///////////////////////////////////////////////////////////////////
void destroy_window(void) {
  free(color_buffer);
  SDL_DestroyRenderer(renderer);
  SDL_DestroyWindow(window);
  SDL_Quit();
}

///////////////////////////////////////////////////////////////////
// Main function
///////////////////////////////////////////////////////////////////
int main(void) {
  printf("Game is running...\n");
  is_running = initialize_window();

  setup();

  while(is_running) {
    process_input();
    update();
    render();
  }

  destroy_window();

  return 0;
}
