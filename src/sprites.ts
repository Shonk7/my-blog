import type { SpriteName } from "./data";

// '.' = transparent; each letter maps to a palette colour.
export const PALETTE: Record<string, string> = {
  k: "#0f1418", w: "#f2f5f0", o: "#ffb23e", r: "#ef6a55", g: "#62d69a", b: "#58b4ea",
  n: "#2b5876", y: "#ffe27a", s: "#d39a6a", h: "#3b2619", p: "#b98af0", c: "#a9bdc9",
};

export const SPRITES: Record<SpriteName, string[]> = {
  face: ["....hhhhhh....","...hhhhhhhh...","..hhhhhhhhhh..","..hhssssssshh.","..hsssssssss..","..ssk.ss.kss..","..ssssssssss..","..sssss.ssss..","...ssrrrrss...","....ssssss....","..nnnbbbbnnn..",".nnnnbbbbnnnn.",".nnnnnbbnnnnn.",".nnnnnnnnnnnn."],
  card: ["kkkkkkkkkkkk","kwwwwwwwwwwk","kwssw.kkkkwk","kwssw.....wk","kwnnw.kkk.wk","kwnnw.....wk","kwwwwwwwwwwk","kkkkkkkkkkkk"],
  bot: ["...kkkkkk...","..kccccccck.","..kcbkkbcck.","..kcccccccck","kkkkkkkkkkkk","krrrrrrrrrrk","krrkrrrrkrrk","kkkkkkkkkkkk",".kk......kk.",".kk......kk."],
  log: ["..kkkkkkk...","..kwwwwwwk..","..kwkkkkwwk.","..kwwwwwwwk.","..kwkkkkkwk.","..kwwwwwwwk.","..kwkkkwwwk.","..kwwwwwwwk.","..kkkkkkkkk."],
  star: [".....kk.....","....kook....","kkkkkooookkk","koooooooyook",".kooooyyook.","..koooooook.","..kook.kook.",".kook...kook","kkk.......kk"],
  mail: ["kkkkkkkkkkkk","kwkwwwwwwkwk","kwwkwwwwkwwk","kwwwkwwkwwwk","kwwwwkkwwwwk","kwwwwwwwwwwk","kkkkkkkkkkkk"],
  flag: ["kk..........","kgkkkkkkkk..","kgggggggggk.","kgggwgggggk.","kgggggggggk.","kgkkkkkkkk..","kk..........","kk..........","kk.........."],
  chip: ["..k.k.k.k...",".kkkkkkkkk..","kknnnnnnnkk.",".kngggggnk..","kkngkkkgnkk.",".kngggggnk..","kknnnnnnnkk.",".kkkkkkkkk..","..k.k.k.k..."],
  net: ["....kbbk....","....kbbk....",".....kk.....","kkkkkkkkkkkk","k....kk....k","kbbk.kk.kbbk","kbbk.kk.kbbk",".kk..kk..kk."],
  pipe: ["kkkkk.......","kgggk.......","kkkgkkkkkk..","..kgggggggk.","..kkkkkkkgk.",".........gk.",".......kkgkk",".......kgggk",".......kkkkk"],
  bolt: [".....kkk....","....kook....","...kook.....","..kooookk...",".kkkkooook..","....kook....","...kook.....","..kok.......","..kk........"],
  db: ["..kkkkkkkk..",".kppppppppk.",".kkppppppkk.",".kppkkkkppk.",".kkppppppkk.",".kppkkkkppk.",".kkppppppkk.","..kkkkkkkk.."],
};
