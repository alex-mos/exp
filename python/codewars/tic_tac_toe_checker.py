def isSolved(board):
    for i in range(len(board)):
        lines = [[board[i][0], board[i][1], board[i][2]],
                 [board[0][i], board[1][i], board[2][i]],
                 [board[0][0], board[1][1], board[2][2]],
                 [board[0][2], board[1][1], board[2][0]]]
        if [1, 1, 1] in lines:
            return 1
        if [2, 2, 2] in lines:
            return 2

    zeros = 0
    for item in board:
        for item in item:
            if item == 0:
                zeros = 1
    if zeros == 0:
        return 0
    else:
        return -1


print(isSolved([[1, 2, 1],
                [1, 1, 2],
                [2, 1, 2]]))