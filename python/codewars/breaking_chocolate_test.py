import unittest
import breaking_chocolate


class Test(unittest.TestCase):

    def test_normal_bar(self):
        self.assertEqual(breaking_chocolate.break_chocolate(5, 5), 24)
        self.assertEqual(breaking_chocolate.break_chocolate(1, 1), 0)

    def test_less_than_0(self):
        self.assertEqual(breaking_chocolate.break_chocolate(-2, -1), 0)

unittest.main()