public class QuickUnionUF {
    private final int[] elements;
    private final int[] size;

    public QuickUnionUF(int length) {
        elements = new int[length];
        size = new int[length];
        for (int i = 0; i < length; i++) {
            elements[i] = i;
            size[i] = 1;
        }
    }

    private int root(int i) {
        while (i != elements[i]) {
            elements[i] = elements[elements[i]];
            i = elements[i];
        }
        return i;
    }

    public void union(int p, int q) {
        int i = root(q);
        int j = root(p);
        if (i == j) return;

        if (size[i] < size[j]) {
            elements[i] = j;
            size[j] += size[i];
        } else {
            elements[j] = i;
            size[i] += size[j];
        }
    }

    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }
}
