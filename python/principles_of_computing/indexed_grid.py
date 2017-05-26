"""
Draw an indexed grid
"""

import simpleguitk as simplegui

CELL_SIZE = 100
GRID_HEIGHT = 4
GRID_WIDTH = 6
CANVAS_HEIGHT = CELL_SIZE * GRID_HEIGHT
CANVAS_WIDTH = CELL_SIZE * GRID_WIDTH


# Handler to draw on canvas
def draw(canvas):
    """
    Draw the grid
    """
    for row in range(GRID_HEIGHT):
        for col in range(GRID_WIDTH):
            polygon = [[col * CELL_SIZE, row * CELL_SIZE],
                       [col * CELL_SIZE, (row + 1) * CELL_SIZE],
                       [(col + 1) * CELL_SIZE, (row + 1) * CELL_SIZE],
                       [(col + 1) * CELL_SIZE, row * CELL_SIZE]]
            canvas.draw_polygon(polygon, 1, "black")
            text_pos = [(col + 0.1) * CELL_SIZE, (row + 0.8) * CELL_SIZE]
            canvas.draw_text(str(row) + "," + str(col), text_pos, 0.3 * CELL_SIZE, "Black")


def run_gui():
    """
    Create a frame and assign draw handler
    """
    frame = simplegui.create_frame("Indexed grid", CANVAS_WIDTH, CANVAS_HEIGHT)
    frame.set_canvas_background("White")
    frame.set_draw_handler(draw)

    # Start the frame animation
    frame.start()

run_gui()
