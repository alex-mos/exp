#include <stdbool.h>
#include <SDL2/SDL.h>

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
// Functions to draw shapes
///////////////////////////////////////////////////////////////////
void draw_pixel(int x, int y, uint32_t color) {
  color_buffer[(window_width * y) + x] = color;
}

void draw_rect(int x, int y, int w, int h, uint32_t color) {
  for (uint i = x; i <= x + w; i++) {
    for (uint j = y; j <= y + h; j++) {
      draw_pixel(i, j, color);
    }
  }
}

void draw_grid(void) {
  for (uint x = 0; x < window_width; x += 10) {
    for (uint y = 0; y < window_height; y += 10) {
      draw_pixel(x, y, 0xFF333333);
    }
  }
}

///////////////////////////////////////////////////////////////////
// Render
///////////////////////////////////////////////////////////////////
void clear_color_buffer(uint32_t color) {
  for (int y = 0; y < window_height; y++) {
    for (int x = 0; x < window_width; x++) {
      draw_pixel(x, y, color);
    }
  }
}

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

///////////////////////////////////////////////////////////////////
// Function to destroy SDL window and renderer
///////////////////////////////////////////////////////////////////
void destroy_window(void) {
  free(color_buffer);
  SDL_DestroyRenderer(renderer);
  SDL_DestroyWindow(window);
  SDL_Quit();
}
