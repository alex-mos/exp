# coding: utf-8

fruit_to_colour = {
    'banana': 'yellow',
    'cherry': 'red',
    'orange': 'orange',
    'pear': 'green',
    'peach': 'orange',
    'plum': 'purple',
    'pomegranate': 'red',
    'strawberry': 'red'
}

# Invert fruit to colour.
colour_to_fruit = {}
for fruit in fruit_to_colour:
    colour = fruit_to_colour[fruit]

    # Если цвета ещё нет в словаре, добавлять ключ [цвет]
    if not colour in colour_to_fruit:
        colour_to_fruit[colour] = [fruit]

    # Если же цвет уже является ключом словаря, то добавляем фрукт в массив значений этого ключа.
    else:
        colour_to_fruit[colour].append(fruit)