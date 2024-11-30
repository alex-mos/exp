#include <stdio.h>
#include <stdbool.h>
#include <SDL2/SDL.h>
#include "./display.h"
#include "./vector.h"

///////////////////////////////////////////////////////////////////
// Global variables
///////////////////////////////////////////////////////////////////
const int N_POINTS = 9 * 9 * 9;
vec3_t cube_points[N_POINTS]; // 9x9x9 cube
vec2_t projected_points[N_POINTS];
vec3_t camera_position = {
  .x = 0,
  .y = 0,
  .z = 5
};
float fov_factor = 640;
bool is_running = false;

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

  int point_count = 0;

  for (float x = -1; x <= 1; x += 0.25) {
    for (float y = -1; y <= 1; y += 0.25) {
      for (float z = -1; z <= 1; z += 0.25) {
        vec3_t new_point = {
          .x = x,
          .y = y,
          .z = z
        };
        cube_points[point_count] = new_point;
        point_count++;
      }
    }
  }
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
// Function that receives a 3D vector and returns a projected 2D point
///////////////////////////////////////////////////////////////////
vec2_t project(vec3_t point) {
  vec2_t projected_point = {
    .x = (fov_factor * point.x) / point.z,
    .y = (fov_factor * point.y) / point.z
  };

  return projected_point;
}

///////////////////////////////////////////////////////////////////
// Update
///////////////////////////////////////////////////////////////////
void rotate(float x, float y, float z) {

}

void scale(float x, float y, float z) {

}

void translate(float x, float y, float z) {

}

void transform_points(void) {

}

void update(void) {
  for (int i = 0; i <= N_POINTS; i++) {
    vec3_t point = cube_points[i];

    // Move the points away from the camera
    point.z -= camera_position.z;

    // Project the current point
    vec2_t projected_point = project(point);

    // Save the projected 2D vector in the array of projected points
    projected_points[i] = projected_point;
  }
}

///////////////////////////////////////////////////////////////////
// Render
///////////////////////////////////////////////////////////////////
void render(void) {
  clear_color_buffer(0xFF000000);
  draw_grid();

  for (int i = 0; i <= N_POINTS; i++) {
    vec2_t projected_point = projected_points[i];
    draw_rect(
      projected_point.x + (window_width / 2),
      projected_point.y + (window_height / 2),
      4,
      4,
      0xFFFFFF00
    );
  }

  // draw_rect(40, 50, 55, 35, 0xFF0000FF);
  // draw_rect(100, 50, 55, 35, 0xFF0000FF);
  render_color_buffer();
  SDL_RenderPresent(renderer);
}

///////////////////////////////////////////////////////////////////
// Main function
///////////////////////////////////////////////////////////////////
int main(void) {
  printf("Renderer is running...\n");
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
