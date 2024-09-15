public class QuickFindUF {
    private final int[] elements;

    public QuickFindUF(int length) {
        elements = new int[length];
        for (int i = 0; i < length; i++)
            elements[i] = i;
    }

    public void union(int p, int q) {
        int target = elements[q];

        for (int i = 0; i < elements.length; i++)
            if (elements[i] == target)
                elements[i] = elements[p];
    }

    public boolean connected(int p, int q) {
        return elements[p] == elements[q];
    }
}
