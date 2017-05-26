# -*- coding: utf-8 -*-

i = raw_input('input flow: ').decode('UTF-8')

i += u' | обработка первым модулем'

out = i.encode('UTF-8')

# some transport

i2 = out.decode('UTF-8')

i2 += u' | обработка вторым модулем'

out2 = i2.encode('UTF-8')

print out2