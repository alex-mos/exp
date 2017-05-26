def areYouPlayingBanjo(name):
    is_play = "plays banjo" if name[0].lower() == 'r' else "does not play banjo"
    return '%s %s' % (name, is_play)