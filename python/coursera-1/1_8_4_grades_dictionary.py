def read_grades(gradefile):
    """ (file open for reading) -> dict of {float: list of str}
    """
    # Skip over the header.
    line = gradefile.readline()
    while line != '\n':
        line = gradefile.readline()

    # Read the grades, accumulating them into a dict.
    grade_to_ids = {}
    line = gradefile.readline()

    while line != '':
        student_id = line[:4]
        grade = float(line[4:].strip())

        if grade not in grade_to_ids:
            grade_to_ids[grade] = student_id
        else:
            grade_to_ids[grade].append(student_id)

        line = gradefile.readline()

    return grade_to_ids