import unittest
import ghost_color


class Test(unittest.TestCase):

    def test_right_color(self):
        ghost = ghost_color.Ghost()
        self.assertIn(ghost.color, ['white', 'yellow', 'purple', 'red'])

    def test_random(self):
        ghosts = []

        for i in range(100):
            ghosts.append(ghost_color.Ghost().color)

        # it "should sometimes make white ghosts"
        self.assertGreaterEqual(ghosts.count("white"), 1, 'из сотни случайных привидений ни одного белого.')

        # it "should sometimes make yellow ghosts"
        self.assertGreaterEqual(ghosts.count("yellow"), 1, 'из сотни случайных привидений ни одного желтого.')

        # it "should sometimes make purple ghosts"
        self.assertGreaterEqual(ghosts.count("purple"), 1, 'из сотни случайных привидений ни одного фиолетового.')

        # it "should sometimes make red ghosts"
        self.assertGreaterEqual(ghosts.count("red"), 1, 'из сотни случайных привидений ни одного красного.')


unittest.main()