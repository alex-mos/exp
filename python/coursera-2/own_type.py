class WordplayStr(str):
    # A string that can report whether it has interesting properties.

    def same_start_and_end(self):
        return self[0] == self[-1]


s = WordplayStr('abracadabra')

print s.startswith('abra')
print type(s)
print s.same_start_and_end()

b = WordplayStr('abcd')

print b.same_start_and_end()