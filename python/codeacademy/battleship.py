# -*- coding: utf-8 -*-

from random import randint

board = []
turn = 1

# Составляем поле из пяти списков по пять ячеек с 'O'.
for x in range(5):
    board.append(['O'] * 5)


# Выводим поле на экран построчно, объединяя списки рядов в строки, через пробел.
def print_board(board):
    for row in board:
        print(" ".join(row))

# Первоначальная печать поля с приглашением поиграть.
print(u"Давай играть в Морской бой!")
print_board(board)


# Определяем координаты, на которых будет стоять корабль.
def random_row(board):
    return randint(0, len(board) - 1)


def random_col(board):
    return randint(0, len(board[0]) - 1)

# Устанавливаем корабль.
ship_row = random_row(board)
ship_col = random_col(board)

# Выводим координаты корабля todo debug remove
print(ship_row + 1)
print(ship_col + 1)

while True:

    print(u"\nВыстрел %s\n" % turn)
    guess_col = int(input(u"Цельтесь по Х: ")) - 1
    guess_row = int(input(u"Цельтесь по У: ")) - 1  # отнимаем единицу, чтобы номер совпадал с номером ячейки списка

    # Проверяем, если введённые координаты равны координатам корабля, то выводим поздравление и выходим из цикла.
    if guess_row == ship_row and guess_col == ship_col:
        print(u"\nПоздравляю! Вы потопили мой корабль.")
        break

    else:
        # Если предполагаемые координаты не совпадают с координатами поля, выводим сообщение об ошибке.
        if (guess_row < 0 or guess_row > 4) or (guess_col < 0 or guess_col > 4):
            print(u"Пушка не может стрелять мимо океана.")

        # Если в эти координаты уже стреляли, то выводить сообщение об ошибке.
        elif board[guess_row][guess_col] == "X":
            print(u"\nТуда уже стреляли, там ничего нет.\n")

        # Если промазали, выводим сообщение, и отмечаем место на карте.
        else:
            print(u"\nМимо!\n")
            board[guess_row][guess_col] = "X"
            turn += 1

        # Выводим поле, если ходы кончились — говорим об этом.
        print_board(board)
        if turn > 5:
            print(u'\nИгра окончена, вы не потопили корабль.')
            break


            # todo принимать ходы в привычном формате: "а4, б8" и т.п.