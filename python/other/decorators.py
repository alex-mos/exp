def crowd(function):
    def wrapper():
        print 'you are not'
        function()
    return wrapper()


@crowd
def example():
    print 'alone'