import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
    public static void main(String[] args) {
        String champion = "";
        int wordCount = 1;

        while (!StdIn.isEmpty()) {
            String word = StdIn.readString();
            if (StdRandom.bernoulli((double) 1 / wordCount)) {
                champion = word;
            }
            wordCount++;
        }
        System.out.println(champion);
    }
}
