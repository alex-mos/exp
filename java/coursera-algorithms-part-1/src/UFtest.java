import edu.princeton.cs.algs4.StdIn;

public class UFtest {
    public static void main(String[] args) {
        int N = StdIn.readInt();
        QuickUnionUF uf = new QuickUnionUF(N);

        while (!StdIn.isEmpty()) {
            int p = StdIn.readInt();
            int q = StdIn.readInt();

            if (!uf.connected(p, q)) {
                uf.union(p, q);
            }
        }

        System.out.println(uf.connected(9, 3)); // true
        System.out.println(uf.connected(6, 3)); // false
    }
}
