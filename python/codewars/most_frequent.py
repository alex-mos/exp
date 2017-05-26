def find_most_frequent(l):
    item_frequency = {}
    frequency_items = {}

    for item in l:
        item_frequency.update({item: l.count(item)})

    for item in item_frequency:
        frequency = item_frequency[item]
        if item_frequency[item] in frequency_items:
            frequency_items[frequency].append(item)
        else:
            frequency_items[frequency] = [item]

    return set(frequency_items[max(frequency_items.keys())] if frequency_items else [])


print find_most_frequent([1, 2, 2, 2, 2, 5, 5, 'ab', 'ab', 'ab'])