def remove_duplicates(l):
    if not l:
        return []
    l2 = list(l)
    l2.sort()
    result = []
    for i in range(len(l2) - 1):
        if l2[i] != l2[i + 1]:
            result.append(l2[i])
    result.append(l2[len(l2) - 1])
    return result


print remove_duplicates([])