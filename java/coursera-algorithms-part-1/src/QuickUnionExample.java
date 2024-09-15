public class QuickUnionExample {

    int[] parents;
    int[] sizeOfSubtree;

    public QuickUnionExample(int length) {
        parents = new int[length];
        sizeOfSubtree = new int[length];
        for (int i = 0; i < length; i++) {
            parents[i] = i;
            sizeOfSubtree[i] = 1;
        }
    }

    protected int root(int i) {
        while (parents[i] != i) {
            parents[i] = parents[parents[i]];
            sizeOfSubtree[i]--;
            i = parents[i];
        }
        return i;
    }

    public boolean connected(int i, int j) {
        return root(i) == root(j);
    }

    public boolean union(int p, int q) {
        int i = root(p);
        int j = root(q);
        if (i == j) {
            return false;
        }
        if (sizeOfSubtree[i] < sizeOfSubtree[j]) {
            parents[i] = j;
            sizeOfSubtree[j] += sizeOfSubtree[i];
        } else {
            parents[j] = i;
            sizeOfSubtree[i] += sizeOfSubtree[j];
        }
        return true;
    }

}
