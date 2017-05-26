# Rock-paper-scissors-lizard-Spock template


# The key idea of this program is to equate the strings
# "rock", "paper", "scissors", "lizard", "Spock" to numbers
# as follows:
#
# 0 - rock
# 1 - Spock
# 2 - paper
# 3 - lizard
# 4 - scissors

import random


def name_to_number(name):
    return ['rock', 'Spock', 'paper', 'lizard', 'scissors'].index(name)


def number_to_name(number):
    return ['rock', 'Spock', 'paper', 'lizard', 'scissors'][number]


def rpsls(player_choice):
    # print out the message for the player's choice
    print '\nPlayer chooses %s' % player_choice

    # convert the player's choice to player_number using the function name_to_number()
    player_number = name_to_number(player_choice)

    # compute random guess for comp_number using random.randrange()
    comp_number = random.randrange(5)

    # convert comp_number to comp_choice using the function number_to_name()
    comp_choice = number_to_name(comp_number)

    # print out the message for computer's choice
    print 'Computer chooses %s' % comp_choice

    # compute difference of comp_number and player_number modulo five
    if comp_number == player_number:
        print 'Player and computer tie!'
    else:
        print 'Computer wins!' if (comp_number - player_number) % 5 < 3 else 'Player wins!'


# test your code - THESE CALLS MUST BE PRESENT IN YOUR SUBMITTED CODE
rpsls("rock")
rpsls("Spock")
rpsls("paper")
rpsls("lizard")
rpsls("scissors")
