/* Santa puts all the presents into the huge sack. In order to let his reindeers rest a bit, he only takes as many reindeers with him as he is required to do. The others may take a nap.

Two reindeers are always required for the sleigh and Santa himself. Additionally he needs 1 reindeer per 30 presents. As you know, Santa has 8 reindeers in total, so he can deliver up to 180 presents at once (2 reindeers for Santa and the sleigh + 6 reindeers with 30 presents each).

Complete the function reindeers(), which takes a number of presents and returns the minimum numbers of required reindeers. If the number of presents is too high, throw an error.

Examples (input -> output / error)
0 -> 2
1 -> 3
30 -> 3
200 -> throws an error */

function reindeers(presents) {
    if (presents === 0) {
      return 2
    }else if (presents > 0 && presents <= 30) {
      return 2 + 1
    }else if (presents > 30 && presents <= 60) {
      return 2 + 2
    }else if (presents > 60 && presents <= 90) {
      return 2 + 3
    }else if (presents > 90 && presents <= 120) {
      return 2 + 4
    }else if (presents > 120 && presents <= 150) {
      return 2 + 5
    }else if (presents > 150 && presents <= 180) {
      return 2 + 6
    }else {
      return error
    }
  }