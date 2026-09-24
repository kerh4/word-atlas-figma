export type CardAudio = { src: string; wordStart: number; sentenceStart: number; end: number }
export type Card = { id: string; word: string; phonetic: string; meaning: string; sentence: string; translation: string; category: string; image?: string; audio: CardAudio }

export const cards: Card[] = [
  {
    "id": "basic_block_world_things-p01-c01",
    "word": "Player",
    "phonetic": "/pleɪər/",
    "meaning": "玩家",
    "sentence": "A brave player.",
    "translation": "一位勇敢的玩家。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 7.111,
      "sentenceStart": 8.571,
      "end": 9.943
    },
    "image": "/assets/words/player.webp"
  },
  {
    "id": "basic_block_world_things-p01-c02",
    "word": "World",
    "phonetic": "/wərld/",
    "meaning": "世界",
    "sentence": "A big world.",
    "translation": "一个广阔的世界。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 11.043,
      "sentenceStart": 12.446,
      "end": 13.759
    },
    "image": "/assets/words/world.webp"
  },
  {
    "id": "basic_block_world_things-p01-c03",
    "word": "Block",
    "phonetic": "/blɑk/",
    "meaning": "物块",
    "sentence": "A square block.",
    "translation": "一个方形的方块。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 14.859,
      "sentenceStart": 16.238,
      "end": 17.616
    },
    "image": "/assets/words/block.webp"
  },
  {
    "id": "basic_block_world_things-p01-c04",
    "word": "Item",
    "phonetic": "/ˈaɪtəm/",
    "meaning": "物品",
    "sentence": "A useful item.",
    "translation": "一件有用的物品。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 18.716,
      "sentenceStart": 20.163,
      "end": 21.667
    },
    "image": "/assets/words/item.webp"
  },
  {
    "id": "basic_block_world_things-p01-c05",
    "word": "Tool",
    "phonetic": "/tul/",
    "meaning": "工具",
    "sentence": "A handy tool.",
    "translation": "一件顺手的工具。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 22.767,
      "sentenceStart": 23.917,
      "end": 25.233
    },
    "image": "/assets/words/tool.webp"
  },
  {
    "id": "basic_block_world_things-p01-c06",
    "word": "Mob",
    "phonetic": "/mɑb/",
    "meaning": "手機",
    "sentence": "A game creature.",
    "translation": "一只游戏中的生物。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 26.333,
      "sentenceStart": 27.658,
      "end": 29.085
    },
    "image": "/assets/words/mob.webp"
  },
  {
    "id": "basic_block_world_things-p01-c07",
    "word": "House",
    "phonetic": "/haʊs/",
    "meaning": "House",
    "sentence": "A small house.",
    "translation": "一间小房子。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 30.185,
      "sentenceStart": 31.56,
      "end": 32.901
    },
    "image": "/assets/words/house.webp"
  },
  {
    "id": "basic_block_world_things-p01-c08",
    "word": "Cave",
    "phonetic": "/keɪv/",
    "meaning": "洞穴",
    "sentence": "A dark cave.",
    "translation": "一个昏暗的洞穴。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 34.001,
      "sentenceStart": 35.385,
      "end": 36.737
    },
    "image": "/assets/words/cave.webp"
  },
  {
    "id": "basic_block_world_things-p01-c09",
    "word": "Village",
    "phonetic": "/ˈvɪlɪʤ/",
    "meaning": "村庄",
    "sentence": "A little village.",
    "translation": "一个友好的村庄。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 37.837,
      "sentenceStart": 39.291,
      "end": 40.649
    },
    "image": "/assets/words/village.webp"
  },
  {
    "id": "basic_block_world_things-p01-c10",
    "word": "Farm",
    "phonetic": "/fɑrm/",
    "meaning": "发育",
    "sentence": "A wheat farm.",
    "translation": "一座小麦农场。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 41.749,
      "sentenceStart": 43.109,
      "end": 44.439
    },
    "image": "/assets/words/farm.webp"
  },
  {
    "id": "basic_block_world_things-p01-c11",
    "word": "Map",
    "phonetic": "/mæp/",
    "meaning": "地图",
    "sentence": "A paper map.",
    "translation": "一张纸质地图。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 45.539,
      "sentenceStart": 46.851,
      "end": 48.153
    },
    "image": "/assets/words/map.webp"
  },
  {
    "id": "basic_block_world_things-p01-c12",
    "word": "Chest",
    "phonetic": "/ʧɛst/",
    "meaning": "箱子",
    "sentence": "A storage chest.",
    "translation": "一个储物箱。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_01.mp3",
      "wordStart": 49.253,
      "sentenceStart": 50.607,
      "end": 52.177
    },
    "image": "/assets/words/chest.webp"
  },
  {
    "id": "basic_block_world_things-p02-c01",
    "word": "Door",
    "phonetic": "/dɔr/",
    "meaning": "门",
    "sentence": "A wooden door.",
    "translation": "一扇细木门。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.49,
      "end": 2.78
    }
  },
  {
    "id": "basic_block_world_things-p02-c02",
    "word": "Window",
    "phonetic": "/ˈwɪndoʊ/",
    "meaning": "窗口",
    "sentence": "A clear window.",
    "translation": "清空窗口",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 3.88,
      "sentenceStart": 5.36,
      "end": 6.745
    }
  },
  {
    "id": "basic_block_world_things-p02-c03",
    "word": "Ladder",
    "phonetic": "/ˈlædər/",
    "meaning": "梯子",
    "sentence": "A ladder to climb.",
    "translation": "要爬的梯子。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 7.845,
      "sentenceStart": 9.194,
      "end": 10.736
    }
  },
  {
    "id": "basic_block_world_things-p02-c04",
    "word": "Furnace",
    "phonetic": "/ˈfərnəs/",
    "meaning": "熔炉",
    "sentence": "A hot furnace.",
    "translation": "一个热炉。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 11.836,
      "sentenceStart": 13.336,
      "end": 14.762
    }
  },
  {
    "id": "basic_block_world_things-p02-c05",
    "word": "Farm",
    "phonetic": "/fɑrm/",
    "meaning": "发育",
    "sentence": "A food farm.",
    "translation": "一个粮食农场。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 15.862,
      "sentenceStart": 17.222,
      "end": 18.541
    }
  },
  {
    "id": "basic_block_world_things-p02-c06",
    "word": "Map",
    "phonetic": "/mæp/",
    "meaning": "地图",
    "sentence": "A map to read.",
    "translation": "要阅读的地图。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 19.641,
      "sentenceStart": 20.957,
      "end": 22.421
    }
  },
  {
    "id": "basic_block_world_things-p02-c07",
    "word": "Water",
    "phonetic": "/ˈwɔtər/",
    "meaning": "水",
    "sentence": "Blue water.",
    "translation": "蓝色的水",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 23.521,
      "sentenceStart": 24.888,
      "end": 26.118
    }
  },
  {
    "id": "basic_block_world_things-p02-c08",
    "word": "Fire",
    "phonetic": "/faɪər/",
    "meaning": "火",
    "sentence": "A warm fire.",
    "translation": "温暖的火焰。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 27.218,
      "sentenceStart": 28.597,
      "end": 29.904
    }
  },
  {
    "id": "basic_block_world_things-p02-c09",
    "word": "Light",
    "phonetic": "/laɪt/",
    "meaning": "光源方块",
    "sentence": "A bright light.",
    "translation": "一片璀璨。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 31.004,
      "sentenceStart": 32.308,
      "end": 33.66
    }
  },
  {
    "id": "basic_block_world_things-p02-c10",
    "word": "Food",
    "phonetic": "/fud/",
    "meaning": "食物",
    "sentence": "Food to eat.",
    "translation": "可以吃的食物。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 34.76,
      "sentenceStart": 36.089,
      "end": 37.376
    }
  },
  {
    "id": "basic_block_world_things-p02-c11",
    "word": "Tool",
    "phonetic": "/tul/",
    "meaning": "工具",
    "sentence": "A useful tool.",
    "translation": "一个有用的工具。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 38.476,
      "sentenceStart": 39.843,
      "end": 41.327
    }
  },
  {
    "id": "basic_block_world_things-p02-c12",
    "word": "Weapon",
    "phonetic": "/ˈwɛpən/",
    "meaning": "作用武器",
    "sentence": "A strong weapon.",
    "translation": "强大的武器。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 42.427,
      "sentenceStart": 43.863,
      "end": 45.403
    }
  },
  {
    "id": "basic_block_world_things-p02-c13",
    "word": "Armor",
    "phonetic": "/ˈɑrmər/",
    "meaning": "盔甲",
    "sentence": "Armor for safety.",
    "translation": "安全盔甲。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 46.503,
      "sentenceStart": 47.899,
      "end": 49.487
    }
  },
  {
    "id": "basic_block_world_things-p02-c14",
    "word": "Friend",
    "phonetic": "/frɛnd/",
    "meaning": "好友",
    "sentence": "A kind friend.",
    "translation": "一个好朋友。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 50.587,
      "sentenceStart": 51.967,
      "end": 53.364
    }
  },
  {
    "id": "basic_block_world_things-p02-c15",
    "word": "Adventure",
    "phonetic": "/ədˈvɛnʧər/",
    "meaning": "冒险",
    "sentence": "A fun adventure.",
    "translation": "一场有趣的冒险。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_02.mp3",
      "wordStart": 54.464,
      "sentenceStart": 56.093,
      "end": 57.565
    }
  },
  {
    "id": "basic_block_world_things-p03-c01",
    "word": "Inventory",
    "phonetic": "/ˌɪnvənˈtɔri/",
    "meaning": "物品栏",
    "sentence": "Stores the items you carry.",
    "translation": "存放您携带的物品。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.925,
      "end": 3.909
    }
  },
  {
    "id": "basic_block_world_things-p03-c02",
    "word": "Hotbar",
    "phonetic": "/ˈhɑtbɑr/",
    "meaning": "快捷栏",
    "sentence": "Selects items quickly.",
    "translation": "快速选择项目。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 5.009,
      "sentenceStart": 6.546,
      "end": 8.409
    }
  },
  {
    "id": "basic_block_world_things-p03-c03",
    "word": "Health",
    "phonetic": "/hɛlθ/",
    "meaning": "健康",
    "sentence": "Hearts show your health.",
    "translation": "心脏显示你的健康。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 9.509,
      "sentenceStart": 10.851,
      "end": 12.472
    }
  },
  {
    "id": "basic_block_world_things-p03-c04",
    "word": "Hunger",
    "phonetic": "/ˈhəŋgər/",
    "meaning": "饥饿",
    "sentence": "Shows when you need food.",
    "translation": "显示您何时需要食物。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 13.572,
      "sentenceStart": 15.063,
      "end": 16.825
    }
  },
  {
    "id": "basic_block_world_things-p03-c05",
    "word": "Experience",
    "phonetic": "/ɪkˈspɪriəns/",
    "meaning": "体验",
    "sentence": "Points used to gain levels.",
    "translation": "用于获得关卡的积分。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 17.925,
      "sentenceStart": 19.733,
      "end": 21.787
    }
  },
  {
    "id": "basic_block_world_things-p03-c06",
    "word": "Level",
    "phonetic": "/ˈlɛvəl/",
    "meaning": "强化等级",
    "sentence": "Shows your experience progress.",
    "translation": "显示您的体验进度。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 22.887,
      "sentenceStart": 24.224,
      "end": 26.413
    }
  },
  {
    "id": "basic_block_world_things-p03-c07",
    "word": "Spawn Point",
    "phonetic": "/spɔn pɔɪnt/",
    "meaning": "出生点",
    "sentence": "Where you enter the world.",
    "translation": "你进入世界的地方。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 27.513,
      "sentenceStart": 29.317,
      "end": 31.079
    }
  },
  {
    "id": "basic_block_world_things-p03-c08",
    "word": "Day",
    "phonetic": "/deɪ/",
    "meaning": "天",
    "sentence": "Time between sunrise and sunset.",
    "translation": "日出和日落之间的时间。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 32.179,
      "sentenceStart": 33.471,
      "end": 35.876
    }
  },
  {
    "id": "basic_block_world_things-p03-c09",
    "word": "Night",
    "phonetic": "/naɪt/",
    "meaning": "夜晚",
    "sentence": "Dark time with stars.",
    "translation": "星星的黑暗时光。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 36.976,
      "sentenceStart": 38.266,
      "end": 39.96
    }
  },
  {
    "id": "basic_block_world_things-p03-c10",
    "word": "Sun",
    "phonetic": "/sən/",
    "meaning": "Sun",
    "sentence": "Lights the daytime sky.",
    "translation": "点亮白天的天空。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 41.06,
      "sentenceStart": 42.314,
      "end": 44.151
    }
  },
  {
    "id": "basic_block_world_things-p03-c11",
    "word": "Moon",
    "phonetic": "/mun/",
    "meaning": "月亮",
    "sentence": "Shines in the night sky.",
    "translation": "闪耀在夜空中。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 45.251,
      "sentenceStart": 46.551,
      "end": 48.328
    }
  },
  {
    "id": "basic_block_world_things-p03-c12",
    "word": "Rain",
    "phonetic": "/reɪn/",
    "meaning": "下雨",
    "sentence": "Water falling from clouds.",
    "translation": "水从云层中落下。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 49.428,
      "sentenceStart": 50.719,
      "end": 52.674
    }
  },
  {
    "id": "basic_block_world_things-p03-c13",
    "word": "Snow",
    "phonetic": "/snoʊ/",
    "meaning": "雪",
    "sentence": "Soft flakes of frozen water.",
    "translation": "冰冻水的软薄片。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 53.774,
      "sentenceStart": 55.078,
      "end": 57.312
    }
  },
  {
    "id": "basic_block_world_things-p03-c14",
    "word": "Tree",
    "phonetic": "/tri/",
    "meaning": "树",
    "sentence": "Tall plant with woody trunk.",
    "translation": "高大的植物，木质树干。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 58.412,
      "sentenceStart": 59.741,
      "end": 61.853
    }
  },
  {
    "id": "basic_block_world_things-p03-c15",
    "word": "Flower",
    "phonetic": "/flaʊər/",
    "meaning": "鲜花",
    "sentence": "Plant with colorful petals.",
    "translation": "种植五颜六色的花瓣。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_03.mp3",
      "wordStart": 62.953,
      "sentenceStart": 64.357,
      "end": 66.405
    }
  },
  {
    "id": "basic_block_world_things-p04-c01",
    "word": "Animal",
    "phonetic": "/ˈænəməl/",
    "meaning": "动物",
    "sentence": "Living creature that moves.",
    "translation": "会移动的生物。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.635,
      "end": 3.59
    }
  },
  {
    "id": "basic_block_world_things-p04-c02",
    "word": "Monster",
    "phonetic": "/ˈmɑnstər/",
    "meaning": "怪",
    "sentence": "Creature that attacks players.",
    "translation": "攻击玩家的生物。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 4.69,
      "sentenceStart": 6.24,
      "end": 8.282
    }
  },
  {
    "id": "basic_block_world_things-p04-c03",
    "word": "Boss",
    "phonetic": "/bɔs/",
    "meaning": "Boss",
    "sentence": "Powerful enemy for major battles.",
    "translation": "大型战斗的强大敌人。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 9.382,
      "sentenceStart": 10.795,
      "end": 13.287
    }
  },
  {
    "id": "basic_block_world_things-p04-c04",
    "word": "Treasure",
    "phonetic": "/ˈtrɛʒər/",
    "meaning": "宝箱奖励",
    "sentence": "Valuable things you can find.",
    "translation": "您可以找到的珍贵物品。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 14.387,
      "sentenceStart": 15.891,
      "end": 18.128
    }
  },
  {
    "id": "basic_block_world_things-p04-c05",
    "word": "Portal",
    "phonetic": "/ˈpɔrtəl/",
    "meaning": "门架",
    "sentence": "Doorway to another place.",
    "translation": "通往另一个地方的门口。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 19.228,
      "sentenceStart": 20.711,
      "end": 22.578
    }
  },
  {
    "id": "basic_block_world_things-p04-c06",
    "word": "Mine",
    "phonetic": "/maɪn/",
    "meaning": "开采",
    "sentence": "Place for digging materials.",
    "translation": "挖掘材料的地方。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 23.678,
      "sentenceStart": 24.988,
      "end": 27.075
    }
  },
  {
    "id": "basic_block_world_things-p04-c07",
    "word": "Ore",
    "phonetic": "/ɔr/",
    "meaning": "矿石",
    "sentence": "Rock containing useful material.",
    "translation": "含有用材料的岩石。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 28.175,
      "sentenceStart": 29.43,
      "end": 31.837
    }
  },
  {
    "id": "basic_block_world_things-p04-c08",
    "word": "Gem",
    "phonetic": "/ʤɛm/",
    "meaning": "珍妮",
    "sentence": "Precious stone from underground.",
    "translation": "地下宝石。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 32.937,
      "sentenceStart": 34.286,
      "end": 36.38
    }
  },
  {
    "id": "basic_block_world_things-p04-c09",
    "word": "Wood",
    "phonetic": "/wʊd/",
    "meaning": "木板",
    "sentence": "Tree material for building.",
    "translation": "建筑用树木材料。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 37.48,
      "sentenceStart": 38.767,
      "end": 40.705
    }
  },
  {
    "id": "basic_block_world_things-p04-c10",
    "word": "Stone",
    "phonetic": "/stoʊn/",
    "meaning": "石头",
    "sentence": "Hard rock for building.",
    "translation": "建造坚硬的岩石。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 41.805,
      "sentenceStart": 43.176,
      "end": 44.942
    }
  },
  {
    "id": "basic_block_world_things-p04-c11",
    "word": "Metal",
    "phonetic": "/ˈmɛtəl/",
    "meaning": "金属材料",
    "sentence": "Material for tools and armor.",
    "translation": "工具和盔甲的材料。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 46.042,
      "sentenceStart": 47.397,
      "end": 49.684
    }
  },
  {
    "id": "basic_block_world_things-p04-c12",
    "word": "Village House",
    "phonetic": "/ˈvɪlɪʤ haʊs/",
    "meaning": "乡村别墅",
    "sentence": "Home inside a village.",
    "translation": "位于村庄内的房源。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 50.784,
      "sentenceStart": 52.646,
      "end": 54.363
    }
  },
  {
    "id": "basic_block_world_things-p04-c13",
    "word": "Farm Field",
    "phonetic": "/fɑrm fild/",
    "meaning": "农场",
    "sentence": "Land used for growing crops.",
    "translation": "用于种植作物的土地。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 55.463,
      "sentenceStart": 57.225,
      "end": 59.348
    }
  },
  {
    "id": "basic_block_world_things-p04-c14",
    "word": "Minecart",
    "phonetic": "/ˈmaɪnkɑrt/",
    "meaning": "矿车",
    "sentence": "Cart that travels on rails.",
    "translation": "在轨道上行驶的推车。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 60.448,
      "sentenceStart": 62.077,
      "end": 64.095
    }
  },
  {
    "id": "basic_block_world_things-p04-c15",
    "word": "Boat",
    "phonetic": "/boʊt/",
    "meaning": "船",
    "sentence": "Small craft for water travel.",
    "translation": "适合水上旅行的小型船只。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_04.mp3",
      "wordStart": 65.195,
      "sentenceStart": 66.55,
      "end": 68.749
    }
  },
  {
    "id": "basic_block_world_things-p05-c01",
    "word": "Survival Mode",
    "phonetic": "/sərˈvaɪvəl moʊd/",
    "meaning": "生存模式",
    "sentence": "Play by gathering food, tools, and blocks.",
    "translation": "通过收集食物、工具和积木来玩游戏。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.212,
      "end": 5.344
    }
  },
  {
    "id": "basic_block_world_things-p05-c02",
    "word": "Creative Mode",
    "phonetic": "/kriˈeɪtɪv moʊd/",
    "meaning": "创造模式",
    "sentence": "Build freely with blocks ready to use.",
    "translation": "使用可随时使用的区块自由构建。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 6.444,
      "sentenceStart": 8.387,
      "end": 11.023
    }
  },
  {
    "id": "basic_block_world_things-p05-c03",
    "word": "Adventure Mode",
    "phonetic": "/ədˈvɛnʧər moʊd/",
    "meaning": "冒险模式",
    "sentence": "Explore maps with special rules.",
    "translation": "探索包含特殊规则的地图。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 12.123,
      "sentenceStart": 14.094,
      "end": 16.372
    }
  },
  {
    "id": "basic_block_world_things-p05-c04",
    "word": "Spectator Mode",
    "phonetic": "/ˈspɛkteɪtər moʊd/",
    "meaning": "旁观模式",
    "sentence": "Watch the world without touching it.",
    "translation": "在不触摸世界的情况下观看世界。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 17.472,
      "sentenceStart": 19.564,
      "end": 21.822
    }
  },
  {
    "id": "basic_block_world_things-p05-c05",
    "word": "Peaceful Mode",
    "phonetic": "/ˈpisfəl moʊd/",
    "meaning": "和平模式",
    "sentence": "A calm game setting with no hunger danger.",
    "translation": "一个没有饥饿危险的平静游戏环境。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 22.922,
      "sentenceStart": 24.793,
      "end": 27.669
    }
  },
  {
    "id": "basic_block_world_things-p05-c06",
    "word": "Easy Mode",
    "phonetic": "/ˈizi moʊd/",
    "meaning": "簡易模式",
    "sentence": "A gentle challenge setting.",
    "translation": "一个温和的挑战环境。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 28.769,
      "sentenceStart": 30.49,
      "end": 32.368
    }
  },
  {
    "id": "basic_block_world_things-p05-c07",
    "word": "Normal Mode",
    "phonetic": "/ˈnɔrməl moʊd/",
    "meaning": "正常模式",
    "sentence": "A regular challenge setting.",
    "translation": "常规挑战设置。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 33.468,
      "sentenceStart": 35.28,
      "end": 37.222
    }
  },
  {
    "id": "basic_block_world_things-p05-c08",
    "word": "Hard Mode",
    "phonetic": "/hɑrd moʊd/",
    "meaning": "强制模式",
    "sentence": "A stronger challenge setting.",
    "translation": "更强大的挑战环境。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 38.322,
      "sentenceStart": 40.051,
      "end": 42.02
    }
  },
  {
    "id": "basic_block_world_things-p05-c09",
    "word": "Singleplayer",
    "phonetic": "/ˈsɪŋɡəlˌpleɪər/",
    "meaning": "单人游戏",
    "sentence": "One player exploring a world.",
    "translation": "一个玩家在探索一个世界。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 43.12,
      "sentenceStart": 44.981,
      "end": 47.116
    }
  },
  {
    "id": "basic_block_world_things-p05-c10",
    "word": "Multiplayer",
    "phonetic": "/ˈməltiˌpleɪər/",
    "meaning": "多人游戏",
    "sentence": "Players sharing a world together.",
    "translation": "玩家们一起分享世界。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 48.216,
      "sentenceStart": 50.083,
      "end": 52.234
    }
  },
  {
    "id": "basic_block_world_things-p05-c11",
    "word": "Server",
    "phonetic": "/ˈsərvər/",
    "meaning": "服务器",
    "sentence": "A shared world that players can join.",
    "translation": "玩家可以加入的共享世界。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 53.334,
      "sentenceStart": 54.754,
      "end": 57.169
    }
  },
  {
    "id": "basic_block_world_things-p05-c12",
    "word": "World Seed",
    "phonetic": "/wərld sid/",
    "meaning": "世界种子",
    "sentence": "A code that shapes a world.",
    "translation": "塑造世界的代码。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 58.269,
      "sentenceStart": 60.079,
      "end": 62.116
    }
  },
  {
    "id": "basic_block_world_things-p05-c13",
    "word": "Coordinates",
    "phonetic": "/koʊˈɔrdəˌneɪts/",
    "meaning": "棋盘坐标训练",
    "sentence": "Numbers that show where you are.",
    "translation": "显示您所在位置的数字。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 63.216,
      "sentenceStart": 65.007,
      "end": 67.019
    }
  },
  {
    "id": "basic_block_world_things-p05-c14",
    "word": "Difficulty",
    "phonetic": "/ˈdɪfɪˌkəlti/",
    "meaning": "难度",
    "sentence": "The setting for how hard the world feels.",
    "translation": "让世界感受到多么艰难的环境。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 68.119,
      "sentenceStart": 69.881,
      "end": 72.333
    }
  },
  {
    "id": "basic_block_world_things-p05-c15",
    "word": "Game Rule",
    "phonetic": "/geɪm rul/",
    "meaning": "玩法",
    "sentence": "A rule that changes how the world works.",
    "translation": "改变世界运作方式的规则。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_05.mp3",
      "wordStart": 73.433,
      "sentenceStart": 75.075,
      "end": 77.746
    }
  },
  {
    "id": "basic_block_world_things-p06-c01",
    "word": "Recipe Book",
    "phonetic": "/ˈrɛsəpi bʊk/",
    "meaning": "食谱书",
    "sentence": "A book that shows what you can craft.",
    "translation": "一本展示您可以制作的书。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.075,
      "end": 4.393
    }
  },
  {
    "id": "basic_block_world_things-p06-c02",
    "word": "Crafting Recipe",
    "phonetic": "/ˈkræftɪŋ ˈrɛsəpi/",
    "meaning": "制作配方名称",
    "sentence": "Steps for making an item.",
    "translation": "制作物品的步骤。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 5.493,
      "sentenceStart": 7.667,
      "end": 9.521
    }
  },
  {
    "id": "basic_block_world_things-p06-c03",
    "word": "Advancement",
    "phonetic": "/ədˈvænsmənt/",
    "meaning": "向前推进",
    "sentence": "A goal reached during play.",
    "translation": "比赛期间达到的目标。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 10.621,
      "sentenceStart": 12.387,
      "end": 14.298
    }
  },
  {
    "id": "basic_block_world_things-p06-c04",
    "word": "Quest",
    "phonetic": "/kwɛst/",
    "meaning": "商货任务",
    "sentence": "A task to try in the world.",
    "translation": "世界上值得尝试的任务。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 15.398,
      "sentenceStart": 16.917,
      "end": 18.913
    }
  },
  {
    "id": "basic_block_world_things-p06-c05",
    "word": "Heart",
    "phonetic": "/hɑrt/",
    "meaning": "倾心点",
    "sentence": "A symbol for player health.",
    "translation": "玩家生命值的象征。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 20.013,
      "sentenceStart": 21.373,
      "end": 23.303
    }
  },
  {
    "id": "basic_block_world_things-p06-c06",
    "word": "Hunger Bar",
    "phonetic": "/ˈhəŋgər bɑr/",
    "meaning": "饥饿酒吧",
    "sentence": "Icons that show how hungry you are.",
    "translation": "显示您有多饿的图标。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 24.403,
      "sentenceStart": 26.195,
      "end": 28.628
    }
  },
  {
    "id": "basic_block_world_things-p06-c07",
    "word": "Armor Bar",
    "phonetic": "/ˈɑrmər bɑr/",
    "meaning": "护甲棒",
    "sentence": "Icons that show your armor strength.",
    "translation": "显示你盔甲力量的图标。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 29.728,
      "sentenceStart": 31.441,
      "end": 33.909
    }
  },
  {
    "id": "basic_block_world_things-p06-c08",
    "word": "Air Bubbles",
    "phonetic": "/ɛr ˈbəbəlz/",
    "meaning": "气泡 ：",
    "sentence": "Bubbles that show breath under water.",
    "translation": "显示水下呼吸的气泡。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 35.009,
      "sentenceStart": 36.755,
      "end": 39.111
    }
  },
  {
    "id": "basic_block_world_things-p06-c09",
    "word": "X P Orb",
    "phonetic": "/ɛks pi ɔrb/",
    "meaning": "X P魔球",
    "sentence": "A glowing orb for experience.",
    "translation": "一个发光的球体，供您体验。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 40.211,
      "sentenceStart": 42.128,
      "end": 44.357
    }
  },
  {
    "id": "basic_block_world_things-p06-c10",
    "word": "Status Effect",
    "phonetic": "/ˈstætəs ˈifɛkt/",
    "meaning": "册封效果:",
    "sentence": "A temporary change on a player.",
    "translation": "玩家的临时变更。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 45.457,
      "sentenceStart": 47.467,
      "end": 49.737
    }
  },
  {
    "id": "basic_block_world_things-p06-c11",
    "word": "Potion Effect",
    "phonetic": "/ˈpoʊʃən ˈifɛkt/",
    "meaning": "药水效果",
    "sentence": "A magic effect from a potion.",
    "translation": "药水的魔法效果。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 50.837,
      "sentenceStart": 52.729,
      "end": 54.862
    }
  },
  {
    "id": "basic_block_world_things-p06-c12",
    "word": "Enchantment",
    "phonetic": "/ɛnˈʧæntmənt/",
    "meaning": "装备培养",
    "sentence": "A magic upgrade on gear.",
    "translation": "装备的魔法升级。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 55.962,
      "sentenceStart": 57.708,
      "end": 59.796
    }
  },
  {
    "id": "basic_block_world_things-p06-c13",
    "word": "Durability",
    "phonetic": "/dərəˈbɪlɪti/",
    "meaning": "耐久度",
    "sentence": "How long a tool can last.",
    "translation": "工具可以使用多长时间。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 60.896,
      "sentenceStart": 62.72,
      "end": 64.669
    }
  },
  {
    "id": "basic_block_world_things-p06-c14",
    "word": "Slot",
    "phonetic": "/slɑt/",
    "meaning": "栏位",
    "sentence": "One space in an inventory.",
    "translation": "库存中的一个空间。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 65.769,
      "sentenceStart": 67.148,
      "end": 69.141
    }
  },
  {
    "id": "basic_block_world_things-p06-c15",
    "word": "Item Stack",
    "phonetic": "/ˈaɪtəm stæk/",
    "meaning": "项目堆叠",
    "sentence": "Many matching items in one slot.",
    "translation": "一个插槽中有许多匹配的项目。",
    "category": "基础方块世界",
    "audio": {
      "src": "/audio/basic_block_world_things/page_06.mp3",
      "wordStart": 70.241,
      "sentenceStart": 72.069,
      "end": 74.595
    }
  },
  {
    "id": "blocks_and_building-p01-c01",
    "word": "Grass Block",
    "phonetic": "/græs blɑk/",
    "meaning": "草方块",
    "sentence": "A green block.",
    "translation": "绿色方块",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 5.526,
      "sentenceStart": 7.329,
      "end": 8.651
    }
  },
  {
    "id": "blocks_and_building-p01-c02",
    "word": "Dirt",
    "phonetic": "/dərt/",
    "meaning": "泥土",
    "sentence": "A brown block.",
    "translation": "棕色方块",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 9.751,
      "sentenceStart": 11.139,
      "end": 12.511
    }
  },
  {
    "id": "blocks_and_building-p01-c03",
    "word": "Stone",
    "phonetic": "/stoʊn/",
    "meaning": "石头",
    "sentence": "A gray block.",
    "translation": "一个灰色的块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 13.611,
      "sentenceStart": 15.106,
      "end": 16.402
    }
  },
  {
    "id": "blocks_and_building-p01-c04",
    "word": "Cobblestone",
    "phonetic": "/ˈkɑbəlˌstoʊn/",
    "meaning": "圆石",
    "sentence": "A rough stone block.",
    "translation": "一块粗糙的石块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 17.502,
      "sentenceStart": 19.256,
      "end": 20.888
    }
  },
  {
    "id": "blocks_and_building-p01-c05",
    "word": "Sand",
    "phonetic": "/sænd/",
    "meaning": "沙子",
    "sentence": "A soft sand block.",
    "translation": "柔软的沙块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 21.988,
      "sentenceStart": 23.354,
      "end": 25.004
    }
  },
  {
    "id": "blocks_and_building-p01-c06",
    "word": "Oak Log",
    "phonetic": "/oʊk lɔg/",
    "meaning": "橡木原木",
    "sentence": "A wood log.",
    "translation": "一根木头原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 26.104,
      "sentenceStart": 27.72,
      "end": 29.06
    }
  },
  {
    "id": "blocks_and_building-p01-c07",
    "word": "Oak Planks",
    "phonetic": "/oʊk plæŋks/",
    "meaning": "橡木木板",
    "sentence": "Wooden planks.",
    "translation": "木板",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 30.16,
      "sentenceStart": 31.922,
      "end": 33.267
    }
  },
  {
    "id": "blocks_and_building-p01-c08",
    "word": "Glass",
    "phonetic": "/glæs/",
    "meaning": "玻璃",
    "sentence": "A clear block.",
    "translation": "清除块",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 34.367,
      "sentenceStart": 35.8,
      "end": 37.109
    }
  },
  {
    "id": "blocks_and_building-p01-c09",
    "word": "Bricks",
    "phonetic": "/brɪks/",
    "meaning": "红砖块",
    "sentence": "Red building bricks.",
    "translation": "红色建筑砖。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 38.209,
      "sentenceStart": 39.651,
      "end": 41.256
    }
  },
  {
    "id": "blocks_and_building-p01-c10",
    "word": "Wool",
    "phonetic": "/wʊl/",
    "meaning": "羊毛",
    "sentence": "A soft wool block.",
    "translation": "柔软的羊毛块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 42.356,
      "sentenceStart": 43.622,
      "end": 45.26
    }
  },
  {
    "id": "blocks_and_building-p01-c11",
    "word": "Torch",
    "phonetic": "/tɔrʧ/",
    "meaning": "火把",
    "sentence": "A small light.",
    "translation": "小型浅色",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 46.36,
      "sentenceStart": 47.802,
      "end": 49.111
    }
  },
  {
    "id": "blocks_and_building-p01-c12",
    "word": "Chest",
    "phonetic": "/ʧɛst/",
    "meaning": "箱子",
    "sentence": "A storage box.",
    "translation": "一个储物箱。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_01.mp3",
      "wordStart": 50.211,
      "sentenceStart": 51.565,
      "end": 53.062
    }
  },
  {
    "id": "blocks_and_building-p02-c01",
    "word": "Crafting Table",
    "phonetic": "/ˈkræftɪŋ ˈteɪbəl/",
    "meaning": "工作台",
    "sentence": "A crafting block.",
    "translation": "一个制作块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.254,
      "end": 3.781
    }
  },
  {
    "id": "blocks_and_building-p02-c02",
    "word": "Furnace",
    "phonetic": "/ˈfərnəs/",
    "meaning": "熔炉",
    "sentence": "A hot furnace.",
    "translation": "一个热炉。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 4.881,
      "sentenceStart": 6.377,
      "end": 7.803
    }
  },
  {
    "id": "blocks_and_building-p02-c03",
    "word": "Door",
    "phonetic": "/dɔr/",
    "meaning": "门",
    "sentence": "A wooden door.",
    "translation": "一扇细木门。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 8.903,
      "sentenceStart": 10.213,
      "end": 11.504
    }
  },
  {
    "id": "blocks_and_building-p02-c04",
    "word": "Trapdoor",
    "phonetic": "/ˈtræpdɔr/",
    "meaning": "暗門",
    "sentence": "A small floor door.",
    "translation": "一扇小地板门。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 12.604,
      "sentenceStart": 14.264,
      "end": 15.842
    }
  },
  {
    "id": "blocks_and_building-p02-c05",
    "word": "Fence",
    "phonetic": "/fɛns/",
    "meaning": "围墙",
    "sentence": "A wooden fence.",
    "translation": "木栅栏。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 16.942,
      "sentenceStart": 18.329,
      "end": 19.724
    }
  },
  {
    "id": "blocks_and_building-p02-c06",
    "word": "Ladder",
    "phonetic": "/ˈlædər/",
    "meaning": "梯子",
    "sentence": "A ladder to climb.",
    "translation": "要爬的梯子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 20.824,
      "sentenceStart": 22.173,
      "end": 23.715
    }
  },
  {
    "id": "blocks_and_building-p02-c07",
    "word": "Bed",
    "phonetic": "/bɛd/",
    "meaning": "床榻",
    "sentence": "A place to sleep.",
    "translation": "睡觉的好去处。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 24.815,
      "sentenceStart": 26.128,
      "end": 27.742
    }
  },
  {
    "id": "blocks_and_building-p02-c08",
    "word": "Bookshelf",
    "phonetic": "/ˈbʊkˌʃɛlf/",
    "meaning": "书架",
    "sentence": "A shelf of books.",
    "translation": "一架书。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 28.842,
      "sentenceStart": 30.451,
      "end": 31.982
    }
  },
  {
    "id": "blocks_and_building-p02-c09",
    "word": "Barrel",
    "phonetic": "/ˈbɛrəl/",
    "meaning": "木桶",
    "sentence": "A round storage block.",
    "translation": "一个圆形存储块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 33.082,
      "sentenceStart": 34.537,
      "end": 36.399
    }
  },
  {
    "id": "blocks_and_building-p02-c10",
    "word": "Lantern",
    "phonetic": "/ˈlæntərn/",
    "meaning": "灯笼",
    "sentence": "A hanging light.",
    "translation": "一盏挂着的灯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 37.499,
      "sentenceStart": 38.991,
      "end": 40.354
    }
  },
  {
    "id": "blocks_and_building-p02-c11",
    "word": "Campfire",
    "phonetic": "/ˈkæmpˌfaɪər/",
    "meaning": "营火",
    "sentence": "A warm campfire.",
    "translation": "温暖的篝火。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 41.454,
      "sentenceStart": 43.133,
      "end": 44.717
    }
  },
  {
    "id": "blocks_and_building-p02-c12",
    "word": "Clay",
    "phonetic": "/kleɪ/",
    "meaning": "黏土",
    "sentence": "A soft clay block.",
    "translation": "一块柔软的粘土块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 45.817,
      "sentenceStart": 47.212,
      "end": 48.888
    }
  },
  {
    "id": "blocks_and_building-p02-c13",
    "word": "Snow",
    "phonetic": "/snoʊ/",
    "meaning": "雪",
    "sentence": "A white snow block.",
    "translation": "一块白色的积雪。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 49.988,
      "sentenceStart": 51.292,
      "end": 52.879
    }
  },
  {
    "id": "blocks_and_building-p02-c14",
    "word": "Ice",
    "phonetic": "/aɪs/",
    "meaning": "冰",
    "sentence": "A cold ice block.",
    "translation": "一块冰冷的冰块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 53.979,
      "sentenceStart": 55.308,
      "end": 56.954
    }
  },
  {
    "id": "blocks_and_building-p02-c15",
    "word": "Concrete",
    "phonetic": "/ˈkɑnkrit/",
    "meaning": "混凝土",
    "sentence": "A bright building block.",
    "translation": "明亮的积木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_02.mp3",
      "wordStart": 58.054,
      "sentenceStart": 59.67,
      "end": 61.437
    }
  },
  {
    "id": "blocks_and_building-p03-c01",
    "word": "Acacia Button",
    "phonetic": "/əˈkeɪʃə ˈbətən/",
    "meaning": "金合欢木按钮",
    "sentence": "Sends a short signal.",
    "translation": "发出短信号。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.157,
      "end": 3.907
    }
  },
  {
    "id": "blocks_and_building-p03-c02",
    "word": "Acacia Door",
    "phonetic": "/əˈkeɪʃə dɔr/",
    "meaning": "金合欢木门",
    "sentence": "Opens for passage.",
    "translation": "打开通道。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 5.007,
      "sentenceStart": 6.886,
      "end": 8.613
    }
  },
  {
    "id": "blocks_and_building-p03-c03",
    "word": "Acacia Fence",
    "phonetic": "/əˈkeɪʃə fɛns/",
    "meaning": "金合欢木栅栏",
    "sentence": "Wooden barrier for animals.",
    "translation": "动物木质屏障。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 9.713,
      "sentenceStart": 11.688,
      "end": 13.709
    }
  },
  {
    "id": "blocks_and_building-p03-c04",
    "word": "Acacia Fence Gate",
    "phonetic": "/əˈkeɪʃə fɛns geɪt/",
    "meaning": "金合欢木栅栏门",
    "sentence": "Opens a gap in fences.",
    "translation": "打开栅栏上的缝隙。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 14.809,
      "sentenceStart": 17.088,
      "end": 19.157
    }
  },
  {
    "id": "blocks_and_building-p03-c05",
    "word": "Acacia Hanging Sign",
    "phonetic": "/əˈkeɪʃə ˈhæŋɪŋ saɪn/",
    "meaning": "悬挂式金合欢木告示牌",
    "sentence": "Board hanging from chains.",
    "translation": "将木板挂在链条上。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 20.257,
      "sentenceStart": 22.678,
      "end": 24.562
    }
  },
  {
    "id": "blocks_and_building-p03-c06",
    "word": "Acacia Leaves",
    "phonetic": "/əˈkeɪʃə livz/",
    "meaning": "金合欢树叶",
    "sentence": "Some acacia leaves.",
    "translation": "一些金合欢叶。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 25.662,
      "sentenceStart": 27.67,
      "end": 29.306
    }
  },
  {
    "id": "blocks_and_building-p03-c07",
    "word": "Acacia Log",
    "phonetic": "/əˈkeɪʃə lɔg/",
    "meaning": "金合欢原木",
    "sentence": "Piece of tree trunk.",
    "translation": "一片树干。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 30.406,
      "sentenceStart": 32.323,
      "end": 33.89
    }
  },
  {
    "id": "blocks_and_building-p03-c08",
    "word": "Acacia Planks",
    "phonetic": "/əˈkeɪʃə plæŋks/",
    "meaning": "金合欢木板",
    "sentence": "Some acacia planks.",
    "translation": "一些相思木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 34.99,
      "sentenceStart": 37.056,
      "end": 38.736
    }
  },
  {
    "id": "blocks_and_building-p03-c09",
    "word": "Acacia Pressure Plate",
    "phonetic": "/əˈkeɪʃə ˈprɛʃər pleɪt/",
    "meaning": "金合欢木压力板",
    "sentence": "Sends power when stepped on.",
    "translation": "踩踏时发电。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 39.836,
      "sentenceStart": 42.307,
      "end": 44.317
    }
  },
  {
    "id": "blocks_and_building-p03-c10",
    "word": "Acacia Sapling",
    "phonetic": "/əˈkeɪʃə ˈsæplɪŋ/",
    "meaning": "金合欢树苗",
    "sentence": "Young plant that grows.",
    "translation": "生长的幼苗。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 45.417,
      "sentenceStart": 47.545,
      "end": 49.315
    }
  },
  {
    "id": "blocks_and_building-p03-c11",
    "word": "Acacia Shelf",
    "phonetic": "/əˈkeɪʃə ʃɛlf/",
    "meaning": "金合欢木展示架",
    "sentence": "Displays items on wood.",
    "translation": "在木材上显示项目。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 50.415,
      "sentenceStart": 52.386,
      "end": 54.387
    }
  },
  {
    "id": "blocks_and_building-p03-c12",
    "word": "Acacia Sign",
    "phonetic": "/əˈkeɪʃə saɪn/",
    "meaning": "金合欢木告示牌",
    "sentence": "Wooden board for writing.",
    "translation": "用于书写的木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 55.487,
      "sentenceStart": 57.415,
      "end": 59.281
    }
  },
  {
    "id": "blocks_and_building-p03-c13",
    "word": "Acacia Slab",
    "phonetic": "/əˈkeɪʃə slæb/",
    "meaning": "金合欢木台阶",
    "sentence": "Wooden block at half height.",
    "translation": "一半高度的木块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 60.381,
      "sentenceStart": 62.353,
      "end": 64.249
    }
  },
  {
    "id": "blocks_and_building-p03-c14",
    "word": "Acacia Stairs",
    "phonetic": "/əˈkeɪʃə stɛrz/",
    "meaning": "金合欢木楼梯",
    "sentence": "Some acacia stairs.",
    "translation": "一些金合欢楼梯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 65.349,
      "sentenceStart": 67.445,
      "end": 69.081
    }
  },
  {
    "id": "blocks_and_building-p03-c15",
    "word": "Acacia Trapdoor",
    "phonetic": "/əˈkeɪʃə ˈtræpdɔr/",
    "meaning": "金合欢木活板门",
    "sentence": "Small door covering openings.",
    "translation": "小门盖开口。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_03.mp3",
      "wordStart": 70.181,
      "sentenceStart": 72.385,
      "end": 74.579
    }
  },
  {
    "id": "blocks_and_building-p04-c01",
    "word": "Acacia Wall Hanging Sign",
    "phonetic": "/əˈkeɪʃə wɔl ˈhæŋɪŋ saɪn/",
    "meaning": "墙上的悬挂式金合欢木告示牌",
    "sentence": "Hanging board on a wall.",
    "translation": "墙上挂板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.901,
      "end": 4.701
    }
  },
  {
    "id": "blocks_and_building-p04-c02",
    "word": "Acacia Wall Sign",
    "phonetic": "/əˈkeɪʃə wɔl saɪn/",
    "meaning": "墙上的金合欢木告示牌",
    "sentence": "Wall board for messages.",
    "translation": "留言墙板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 5.801,
      "sentenceStart": 8.075,
      "end": 9.952
    }
  },
  {
    "id": "blocks_and_building-p04-c03",
    "word": "Acacia Wood",
    "phonetic": "/əˈkeɪʃə wʊd/",
    "meaning": "金合欢木",
    "sentence": "A block of acacia wood.",
    "translation": "一块金合欢木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 11.052,
      "sentenceStart": 12.923,
      "end": 14.834
    }
  },
  {
    "id": "blocks_and_building-p04-c04",
    "word": "Activator Rail",
    "phonetic": "/ˈæktəˌveɪtər reɪl/",
    "meaning": "激活铁轨",
    "sentence": "Controls minecart behavior.",
    "translation": "控制矿车行为。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 15.934,
      "sentenceStart": 18.061,
      "end": 20.331
    }
  },
  {
    "id": "blocks_and_building-p04-c05",
    "word": "Allium",
    "phonetic": "/ˈæliəm/",
    "meaning": "绒球葱",
    "sentence": "Round purple flower.",
    "translation": "圆形紫色花朵。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 21.431,
      "sentenceStart": 22.901,
      "end": 24.625
    }
  },
  {
    "id": "blocks_and_building-p04-c06",
    "word": "Amethyst Block",
    "phonetic": "/ˈæmɪθɪst blɑk/",
    "meaning": "紫水晶方块",
    "sentence": "Block made from purple crystals.",
    "translation": "由紫色水晶制成的格挡。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 25.725,
      "sentenceStart": 27.746,
      "end": 30.019
    }
  },
  {
    "id": "blocks_and_building-p04-c07",
    "word": "Amethyst Cluster",
    "phonetic": "/ˈæmɪθɪst ˈkləstər/",
    "meaning": "紫水晶簇",
    "sentence": "Cluster of pointed purple crystals.",
    "translation": "一簇簇尖锐的紫色晶体。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 31.119,
      "sentenceStart": 33.329,
      "end": 35.893
    }
  },
  {
    "id": "blocks_and_building-p04-c08",
    "word": "Ancient Debris",
    "phonetic": "/ˈeɪnʧənt dəˈbri/",
    "meaning": "远古残骸",
    "sentence": "Ancient debris.",
    "translation": "古代残骸。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 36.993,
      "sentenceStart": 38.867,
      "end": 40.247
    }
  },
  {
    "id": "blocks_and_building-p04-c09",
    "word": "Andesite",
    "phonetic": "/ˈændɪˌsaɪt/",
    "meaning": "安山岩",
    "sentence": "A block of andesite.",
    "translation": "一块安山岩。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 41.347,
      "sentenceStart": 43.018,
      "end": 44.69
    }
  },
  {
    "id": "blocks_and_building-p04-c10",
    "word": "Andesite Slab",
    "phonetic": "/ˈændɪˌsaɪt slæb/",
    "meaning": "安山岩台阶",
    "sentence": "Half-height stone block.",
    "translation": "半高石块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 45.79,
      "sentenceStart": 47.832,
      "end": 49.56
    }
  },
  {
    "id": "blocks_and_building-p04-c11",
    "word": "Andesite Stairs",
    "phonetic": "/ˈændɪˌsaɪt stɛrz/",
    "meaning": "安山岩楼梯",
    "sentence": "Some andesite stairs.",
    "translation": "一些安山台阶。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 50.66,
      "sentenceStart": 52.831,
      "end": 54.607
    }
  },
  {
    "id": "blocks_and_building-p04-c12",
    "word": "Andesite Wall",
    "phonetic": "/ˈændɪˌsaɪt wɔl/",
    "meaning": "安山岩墙",
    "sentence": "Low stone barrier.",
    "translation": "低矮的石头屏障。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 55.707,
      "sentenceStart": 57.694,
      "end": 59.314
    }
  },
  {
    "id": "blocks_and_building-p04-c13",
    "word": "Anvil",
    "phonetic": "/ˈænvəl/",
    "meaning": "铁砧",
    "sentence": "Repairs and renames tools.",
    "translation": "修复和重命名工具。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 60.414,
      "sentenceStart": 61.884,
      "end": 64.038
    }
  },
  {
    "id": "blocks_and_building-p04-c14",
    "word": "Attached Melon Stem",
    "phonetic": "/əˈtæʧt ˈmɛlən stɛm/",
    "meaning": "结果的西瓜茎",
    "sentence": "Connects a stem to melons.",
    "translation": "将茎连接到甜瓜。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 65.138,
      "sentenceStart": 67.512,
      "end": 69.453
    }
  },
  {
    "id": "blocks_and_building-p04-c15",
    "word": "Attached Pumpkin Stem",
    "phonetic": "/əˈtæʧt ˈpəmpkɪn stɛm/",
    "meaning": "结果的南瓜茎",
    "sentence": "Connects a stem to pumpkins.",
    "translation": "将茎连接到南瓜。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_04.mp3",
      "wordStart": 70.553,
      "sentenceStart": 73.028,
      "end": 75.151
    }
  },
  {
    "id": "blocks_and_building-p05-c01",
    "word": "Spruce Log",
    "phonetic": "/sprus lɔg/",
    "meaning": "云杉原木",
    "sentence": "A dark spruce wood log.",
    "translation": "深色云杉木原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.004,
      "end": 3.941
    }
  },
  {
    "id": "blocks_and_building-p05-c02",
    "word": "Spruce Planks",
    "phonetic": "/sprus plæŋks/",
    "meaning": "云杉木板",
    "sentence": "Planks made from spruce wood.",
    "translation": "云杉木制成的木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 5.041,
      "sentenceStart": 6.995,
      "end": 9.068
    }
  },
  {
    "id": "blocks_and_building-p05-c03",
    "word": "Spruce Leaves",
    "phonetic": "/sprus livz/",
    "meaning": "云杉树叶",
    "sentence": "Leaves from a spruce tree.",
    "translation": "云杉树上的叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 10.168,
      "sentenceStart": 12.08,
      "end": 14.021
    }
  },
  {
    "id": "blocks_and_building-p05-c04",
    "word": "Birch Log",
    "phonetic": "/bərʧ lɔg/",
    "meaning": "白桦原木",
    "sentence": "A pale birch wood log.",
    "translation": "一根苍白的桦木原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 15.121,
      "sentenceStart": 16.87,
      "end": 18.795
    }
  },
  {
    "id": "blocks_and_building-p05-c05",
    "word": "Birch Planks",
    "phonetic": "/bərʧ plæŋks/",
    "meaning": "白桦木板",
    "sentence": "Light planks made from birch wood.",
    "translation": "由桦木制成的轻木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 19.895,
      "sentenceStart": 21.782,
      "end": 24.055
    }
  },
  {
    "id": "blocks_and_building-p05-c06",
    "word": "Birch Leaves",
    "phonetic": "/bərʧ livz/",
    "meaning": "白桦树叶",
    "sentence": "Leaves from a birch tree.",
    "translation": "白桦树上的叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 25.155,
      "sentenceStart": 27.005,
      "end": 28.905
    }
  },
  {
    "id": "blocks_and_building-p05-c07",
    "word": "Jungle Log",
    "phonetic": "/ˈʤəŋgəl lɔg/",
    "meaning": "丛林原木",
    "sentence": "A warm jungle wood log.",
    "translation": "温暖的丛林原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 30.005,
      "sentenceStart": 31.876,
      "end": 33.834
    }
  },
  {
    "id": "blocks_and_building-p05-c08",
    "word": "Jungle Planks",
    "phonetic": "/ˈʤəŋgəl plæŋks/",
    "meaning": "丛林木板",
    "sentence": "Planks made from jungle wood.",
    "translation": "用丛林木材制成的木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 34.934,
      "sentenceStart": 36.93,
      "end": 39.0
    }
  },
  {
    "id": "blocks_and_building-p05-c09",
    "word": "Jungle Leaves",
    "phonetic": "/ˈʤəŋgəl livz/",
    "meaning": "丛林树叶",
    "sentence": "Leaves from a jungle tree.",
    "translation": "丛林树的叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 40.1,
      "sentenceStart": 42.037,
      "end": 43.973
    }
  },
  {
    "id": "blocks_and_building-p05-c10",
    "word": "Dark Oak Log",
    "phonetic": "/dɑrk oʊk lɔg/",
    "meaning": "深色橡木原木",
    "sentence": "A dark oak wood log.",
    "translation": "一根深色的橡木原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 45.073,
      "sentenceStart": 47.073,
      "end": 48.855
    }
  },
  {
    "id": "blocks_and_building-p05-c11",
    "word": "Dark Oak Planks",
    "phonetic": "/dɑrk oʊk plæŋks/",
    "meaning": "深色橡木木板",
    "sentence": "Deep brown dark oak planks.",
    "translation": "深棕色深色橡木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 49.955,
      "sentenceStart": 52.095,
      "end": 54.223
    }
  },
  {
    "id": "blocks_and_building-p05-c12",
    "word": "Dark Oak Leaves",
    "phonetic": "/dɑrk oʊk livz/",
    "meaning": "深色橡树树叶",
    "sentence": "Leaves from a dark oak tree.",
    "translation": "来自深色橡树的叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 55.323,
      "sentenceStart": 57.369,
      "end": 59.475
    }
  },
  {
    "id": "blocks_and_building-p05-c13",
    "word": "Mangrove Log",
    "phonetic": "/ˈmæŋˌgroʊv lɔg/",
    "meaning": "红树原木",
    "sentence": "A red mangrove wood log.",
    "translation": "红树林原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 60.575,
      "sentenceStart": 62.533,
      "end": 64.609
    }
  },
  {
    "id": "blocks_and_building-p05-c14",
    "word": "Mangrove Roots",
    "phonetic": "/ˈmæŋˌgroʊv ruts/",
    "meaning": "红树根",
    "sentence": "Tangled roots from a mangrove tree.",
    "translation": "红树林中缠结的树根。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 65.709,
      "sentenceStart": 67.73,
      "end": 70.112
    }
  },
  {
    "id": "blocks_and_building-p05-c15",
    "word": "Mangrove Leaves",
    "phonetic": "/ˈmæŋˌgroʊv livz/",
    "meaning": "红树树叶",
    "sentence": "Leaves from a mangrove tree.",
    "translation": "红树林的叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_05.mp3",
      "wordStart": 71.212,
      "sentenceStart": 73.243,
      "end": 75.231
    }
  },
  {
    "id": "blocks_and_building-p06-c01",
    "word": "Cherry Log",
    "phonetic": "/ˈʧɛri lɔg/",
    "meaning": "樱花原木",
    "sentence": "A soft pink cherry wood log.",
    "translation": "柔和的粉红色樱桃木原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.907,
      "end": 4.102
    }
  },
  {
    "id": "blocks_and_building-p06-c02",
    "word": "Cherry Planks",
    "phonetic": "/ˈʧɛri plæŋks/",
    "meaning": "樱花木板",
    "sentence": "Pink planks made from cherry wood.",
    "translation": "由樱桃木制成的粉红色木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 5.202,
      "sentenceStart": 7.07,
      "end": 9.327
    }
  },
  {
    "id": "blocks_and_building-p06-c03",
    "word": "Cherry Leaves",
    "phonetic": "/ˈʧɛri livz/",
    "meaning": "樱花树叶",
    "sentence": "Pink leaves from a cherry tree.",
    "translation": "樱桃树上的粉红色叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 10.427,
      "sentenceStart": 12.248,
      "end": 14.387
    }
  },
  {
    "id": "blocks_and_building-p06-c04",
    "word": "Pale Oak Log",
    "phonetic": "/peɪl oʊk lɔg/",
    "meaning": "苍白橡木原木",
    "sentence": "A pale oak wood log.",
    "translation": "一根苍白的橡木原木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 15.487,
      "sentenceStart": 17.465,
      "end": 19.249
    }
  },
  {
    "id": "blocks_and_building-p06-c05",
    "word": "Pale Oak Planks",
    "phonetic": "/peɪl oʊk plæŋks/",
    "meaning": "苍白橡木木板",
    "sentence": "Light planks made from pale oak.",
    "translation": "由浅橡木制成的轻质木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 20.349,
      "sentenceStart": 22.461,
      "end": 24.723
    }
  },
  {
    "id": "blocks_and_building-p06-c06",
    "word": "Pale Oak Leaves",
    "phonetic": "/peɪl oʊk livz/",
    "meaning": "苍白橡树树叶",
    "sentence": "Leaves from a pale oak tree.",
    "translation": "一棵苍白的橡树的叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 25.823,
      "sentenceStart": 27.87,
      "end": 29.97
    }
  },
  {
    "id": "blocks_and_building-p06-c07",
    "word": "Bamboo Planks",
    "phonetic": "/bæmˈbu plæŋks/",
    "meaning": "竹板",
    "sentence": "Planks made from bamboo.",
    "translation": "用竹子做的木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 31.07,
      "sentenceStart": 33.091,
      "end": 34.92
    }
  },
  {
    "id": "blocks_and_building-p06-c08",
    "word": "Bamboo Mosaic",
    "phonetic": "/bæmˈbu moʊˈzeɪɪk/",
    "meaning": "竹马赛克",
    "sentence": "A patterned bamboo block.",
    "translation": "带图案的竹块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 36.02,
      "sentenceStart": 38.166,
      "end": 40.186
    }
  },
  {
    "id": "blocks_and_building-p06-c09",
    "word": "Block Of Bamboo",
    "phonetic": "/blɑk əv bæmˈbu/",
    "meaning": "竹块",
    "sentence": "A solid block of bamboo.",
    "translation": "一块坚实的竹子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 41.286,
      "sentenceStart": 43.443,
      "end": 45.506
    }
  },
  {
    "id": "blocks_and_building-p06-c10",
    "word": "Crimson Stem",
    "phonetic": "/ˈkrɪmzən stɛm/",
    "meaning": "绯红菌柄",
    "sentence": "A red nether tree stem.",
    "translation": "一根红色的冥树茎。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 46.606,
      "sentenceStart": 48.521,
      "end": 50.413
    }
  },
  {
    "id": "blocks_and_building-p06-c11",
    "word": "Crimson Planks",
    "phonetic": "/ˈkrɪmzən plæŋks/",
    "meaning": "绯红木板",
    "sentence": "Red planks from crimson stems.",
    "translation": "深红色茎的红色木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 51.513,
      "sentenceStart": 53.559,
      "end": 55.747
    }
  },
  {
    "id": "blocks_and_building-p06-c12",
    "word": "Crimson Hyphae",
    "phonetic": "/ˈkrɪmzən ˈhaɪˌfi/",
    "meaning": "绯红菌核",
    "sentence": "A crimson nether wood block.",
    "translation": "一块深红色的幽冥木块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 56.847,
      "sentenceStart": 58.867,
      "end": 61.013
    }
  },
  {
    "id": "blocks_and_building-p06-c13",
    "word": "Warped Stem",
    "phonetic": "/wɔrpt stɛm/",
    "meaning": "诡异菌柄",
    "sentence": "A blue-green nether tree stem.",
    "translation": "一棵蓝绿色的幽泉树茎。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 62.113,
      "sentenceStart": 63.942,
      "end": 66.032
    }
  },
  {
    "id": "blocks_and_building-p06-c14",
    "word": "Warped Planks",
    "phonetic": "/wɔrpt plæŋks/",
    "meaning": "诡异木板",
    "sentence": "Blue-green warped planks.",
    "translation": "蓝绿色的翘曲木板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 67.132,
      "sentenceStart": 69.041,
      "end": 70.834
    }
  },
  {
    "id": "blocks_and_building-p06-c15",
    "word": "Warped Hyphae",
    "phonetic": "/wɔrpt ˈhaɪˌfi/",
    "meaning": "诡异菌核",
    "sentence": "A warped nether wood block.",
    "translation": "一块翘曲的阴暗木块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_06.mp3",
      "wordStart": 71.934,
      "sentenceStart": 73.808,
      "end": 75.855
    }
  },
  {
    "id": "blocks_and_building-p07-c01",
    "word": "Polished Granite",
    "phonetic": "/ˈpɑlɪʃt ˈgrænɪt/",
    "meaning": "磨制花岗岩",
    "sentence": "A smooth granite block.",
    "translation": "光滑的花岗岩块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.217,
      "end": 4.151
    }
  },
  {
    "id": "blocks_and_building-p07-c02",
    "word": "Polished Diorite",
    "phonetic": "/ˈpɑlɪʃt daɪəraɪt/",
    "meaning": "磨制闪长岩",
    "sentence": "A smooth diorite block.",
    "translation": "光滑的闪长岩块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 5.251,
      "sentenceStart": 7.339,
      "end": 9.325
    }
  },
  {
    "id": "blocks_and_building-p07-c03",
    "word": "Polished Andesite",
    "phonetic": "/ˈpɑlɪʃt ˈændɪˌsaɪt/",
    "meaning": "磨制安山岩",
    "sentence": "A smooth andesite block.",
    "translation": "光滑的安山岩块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 10.425,
      "sentenceStart": 12.609,
      "end": 14.621
    }
  },
  {
    "id": "blocks_and_building-p07-c04",
    "word": "Stone Bricks",
    "phonetic": "/stoʊn brɪks/",
    "meaning": "石砖",
    "sentence": "Bricks made of stone.",
    "translation": "石头制成的砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 15.721,
      "sentenceStart": 17.567,
      "end": 19.18
    }
  },
  {
    "id": "blocks_and_building-p07-c05",
    "word": "Mossy Stone Bricks",
    "phonetic": "/ˈmɔsi stoʊn brɪks/",
    "meaning": "苔石砖",
    "sentence": "Stone bricks with moss.",
    "translation": "石砖和苔藓。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 20.28,
      "sentenceStart": 22.601,
      "end": 24.338
    }
  },
  {
    "id": "blocks_and_building-p07-c06",
    "word": "Cracked Stone Bricks",
    "phonetic": "/krækt stoʊn brɪks/",
    "meaning": "裂纹石砖",
    "sentence": "Stone bricks with cracks.",
    "translation": "有裂缝的石砖。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 25.438,
      "sentenceStart": 27.717,
      "end": 29.579
    }
  },
  {
    "id": "blocks_and_building-p07-c07",
    "word": "Deepslate Bricks",
    "phonetic": "/ˈdiːpsleɪt brɪks/",
    "meaning": "深板岩砖",
    "sentence": "Dark bricks made of deepslate.",
    "translation": "深板岩制成的深色砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 30.679,
      "sentenceStart": 32.787,
      "end": 34.884
    }
  },
  {
    "id": "blocks_and_building-p07-c08",
    "word": "Deepslate Tiles",
    "phonetic": "/ˈdiːpsleɪt taɪlz/",
    "meaning": "深板岩瓦",
    "sentence": "Small dark deepslate tiles.",
    "translation": "深色深板岩小瓷砖。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 35.984,
      "sentenceStart": 38.105,
      "end": 40.216
    }
  },
  {
    "id": "blocks_and_building-p07-c09",
    "word": "Tuff Bricks",
    "phonetic": "/təf brɪks/",
    "meaning": "凝灰岩砖",
    "sentence": "Bricks made of tuff.",
    "translation": "凝灰岩制成的砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 41.316,
      "sentenceStart": 43.096,
      "end": 44.658
    }
  },
  {
    "id": "blocks_and_building-p07-c10",
    "word": "Nether Bricks",
    "phonetic": "/ˈnɛðər brɪks/",
    "meaning": "下界砖块",
    "sentence": "Dark bricks from the nether.",
    "translation": "阴间的黑砖。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 45.758,
      "sentenceStart": 47.629,
      "end": 49.488
    }
  },
  {
    "id": "blocks_and_building-p07-c11",
    "word": "Red Nether Bricks",
    "phonetic": "/rɛd ˈnɛðər brɪks/",
    "meaning": "红色下界砖块",
    "sentence": "Red bricks from the nether.",
    "translation": "冥界的红砖。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 50.588,
      "sentenceStart": 52.71,
      "end": 54.529
    }
  },
  {
    "id": "blocks_and_building-p07-c12",
    "word": "Polished Blackstone Bricks",
    "phonetic": "/ˈpɑlɪʃt ˈblækˌstoʊn brɪks/",
    "meaning": "磨制黑石砖",
    "sentence": "Bricks made of polished blackstone.",
    "translation": "由抛光黑石制成的砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 55.629,
      "sentenceStart": 58.325,
      "end": 60.655
    }
  },
  {
    "id": "blocks_and_building-p07-c13",
    "word": "Quartz Block",
    "phonetic": "/kwɔrts blɑk/",
    "meaning": "石英块",
    "sentence": "A clean white quartz block.",
    "translation": "一块干净的白色石英块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 61.755,
      "sentenceStart": 63.609,
      "end": 65.674
    }
  },
  {
    "id": "blocks_and_building-p07-c14",
    "word": "Purpur Block",
    "phonetic": "/ˈpɜrpɜr blɑk/",
    "meaning": "紫珀块",
    "sentence": "A purple block from the end.",
    "translation": "一块紫色的砖块从尽头。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 66.774,
      "sentenceStart": 68.666,
      "end": 70.692
    }
  },
  {
    "id": "blocks_and_building-p07-c15",
    "word": "Prismarine Bricks",
    "phonetic": "/ˈprɪzməriːn brɪks/",
    "meaning": "海晶石砖",
    "sentence": "Sea-colored prismarine bricks.",
    "translation": "海色棱镜砖。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_07.mp3",
      "wordStart": 71.792,
      "sentenceStart": 74.004,
      "end": 76.192
    }
  },
  {
    "id": "blocks_and_building-p08-c01",
    "word": "Cobblestone Slab",
    "phonetic": "/ˈkɑbəlˌstoʊn slæb/",
    "meaning": "圆石台阶",
    "sentence": "A half-height cobblestone block.",
    "translation": "半高鹅卵石块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.376,
      "end": 4.552
    }
  },
  {
    "id": "blocks_and_building-p08-c02",
    "word": "Cobblestone Stairs",
    "phonetic": "/ˈkɑbəlˌstoʊn stɛrz/",
    "meaning": "圆石楼梯",
    "sentence": "Stairs made of cobblestone.",
    "translation": "楼梯由鹅卵石制成。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 5.652,
      "sentenceStart": 7.976,
      "end": 9.969
    }
  },
  {
    "id": "blocks_and_building-p08-c03",
    "word": "Cobblestone Wall",
    "phonetic": "/ˈkɑbəlˌstoʊn wɔl/",
    "meaning": "圆石墙",
    "sentence": "A low cobblestone wall.",
    "translation": "一堵低矮的鹅卵石墙。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 11.069,
      "sentenceStart": 13.186,
      "end": 15.049
    }
  },
  {
    "id": "blocks_and_building-p08-c04",
    "word": "Brick Slab",
    "phonetic": "/brɪk slæb/",
    "meaning": "红砖台阶",
    "sentence": "A half-height brick block.",
    "translation": "半高砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 16.149,
      "sentenceStart": 17.908,
      "end": 19.794
    }
  },
  {
    "id": "blocks_and_building-p08-c05",
    "word": "Brick Stairs",
    "phonetic": "/brɪk stɛrz/",
    "meaning": "红砖楼梯",
    "sentence": "Stairs made of bricks.",
    "translation": "砖砌楼梯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 20.894,
      "sentenceStart": 22.769,
      "end": 24.513
    }
  },
  {
    "id": "blocks_and_building-p08-c06",
    "word": "Brick Wall",
    "phonetic": "/brɪk wɔl/",
    "meaning": "红砖墙",
    "sentence": "A low wall made of bricks.",
    "translation": "一堵由砖制成的矮墙。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 25.613,
      "sentenceStart": 27.278,
      "end": 29.257
    }
  },
  {
    "id": "blocks_and_building-p08-c07",
    "word": "Stone Brick Slab",
    "phonetic": "/stoʊn brɪk slæb/",
    "meaning": "石砖台阶",
    "sentence": "A half-height stone brick block.",
    "translation": "半高石砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 30.357,
      "sentenceStart": 32.428,
      "end": 34.574
    }
  },
  {
    "id": "blocks_and_building-p08-c08",
    "word": "Stone Brick Stairs",
    "phonetic": "/stoʊn brɪk stɛrz/",
    "meaning": "石砖楼梯",
    "sentence": "Stairs made of stone bricks.",
    "translation": "石砖楼梯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 35.674,
      "sentenceStart": 37.851,
      "end": 39.791
    }
  },
  {
    "id": "blocks_and_building-p08-c09",
    "word": "Stone Brick Wall",
    "phonetic": "/stoʊn brɪk wɔl/",
    "meaning": "石砖墙",
    "sentence": "A low wall made of stone bricks.",
    "translation": "一堵由石砖制成的矮墙。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 40.891,
      "sentenceStart": 42.953,
      "end": 45.141
    }
  },
  {
    "id": "blocks_and_building-p08-c10",
    "word": "Deepslate Brick Slab",
    "phonetic": "/ˈdiːpsleɪt brɪk slæb/",
    "meaning": "深板岩砖台阶",
    "sentence": "A half-height deepslate brick block.",
    "translation": "半高深板岩砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 46.241,
      "sentenceStart": 48.619,
      "end": 50.931
    }
  },
  {
    "id": "blocks_and_building-p08-c11",
    "word": "Deepslate Brick Stairs",
    "phonetic": "/ˈdiːpsleɪt brɪk stɛrz/",
    "meaning": "深板岩砖楼梯",
    "sentence": "Stairs made of deepslate bricks.",
    "translation": "深板砖砌成的楼梯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 52.031,
      "sentenceStart": 54.517,
      "end": 56.686
    }
  },
  {
    "id": "blocks_and_building-p08-c12",
    "word": "Deepslate Brick Wall",
    "phonetic": "/ˈdiːpsleɪt brɪk wɔl/",
    "meaning": "深板岩砖墙",
    "sentence": "A low wall made of deepslate bricks.",
    "translation": "由深板岩砖制成的矮墙。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 57.786,
      "sentenceStart": 60.087,
      "end": 62.561
    }
  },
  {
    "id": "blocks_and_building-p08-c13",
    "word": "Quartz Slab",
    "phonetic": "/kwɔrts slæb/",
    "meaning": "石英台阶",
    "sentence": "A half-height quartz block.",
    "translation": "半高石英块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 63.661,
      "sentenceStart": 65.54,
      "end": 67.51
    }
  },
  {
    "id": "blocks_and_building-p08-c14",
    "word": "Quartz Stairs",
    "phonetic": "/kwɔrts stɛrz/",
    "meaning": "石英楼梯",
    "sentence": "White stairs made of quartz.",
    "translation": "石英白色楼梯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 68.61,
      "sentenceStart": 70.489,
      "end": 72.494
    }
  },
  {
    "id": "blocks_and_building-p08-c15",
    "word": "Nether Brick Fence",
    "phonetic": "/ˈnɛðər brɪk fɛns/",
    "meaning": "下界砖栅栏",
    "sentence": "A fence made of nether brick.",
    "translation": "冥砖篱笆。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_08.mp3",
      "wordStart": 73.594,
      "sentenceStart": 75.721,
      "end": 77.811
    }
  },
  {
    "id": "blocks_and_building-p09-c01",
    "word": "Redstone Torch",
    "phonetic": "/ˈrɛdˌstoʊn tɔrʧ/",
    "meaning": "红石火把",
    "sentence": "A small redstone power light.",
    "translation": "一盏小小的红石电灯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.221,
      "end": 4.388
    }
  },
  {
    "id": "blocks_and_building-p09-c02",
    "word": "Redstone Lamp",
    "phonetic": "/ˈrɛdˌstoʊn læmp/",
    "meaning": "红石灯",
    "sentence": "A lamp powered by redstone.",
    "translation": "一盏由红石供电的灯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 5.488,
      "sentenceStart": 7.416,
      "end": 9.469
    }
  },
  {
    "id": "blocks_and_building-p09-c03",
    "word": "Lever",
    "phonetic": "/ˈlɛvər/",
    "meaning": "拉杆",
    "sentence": "A switch to pull.",
    "translation": "拉动开关。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 10.569,
      "sentenceStart": 11.923,
      "end": 13.388
    }
  },
  {
    "id": "blocks_and_building-p09-c04",
    "word": "Button",
    "phonetic": "/ˈbətən/",
    "meaning": "按钮",
    "sentence": "A button to press.",
    "translation": "按下按钮。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 14.488,
      "sentenceStart": 15.905,
      "end": 17.394
    }
  },
  {
    "id": "blocks_and_building-p09-c05",
    "word": "Pressure Plate",
    "phonetic": "/ˈprɛʃər pleɪt/",
    "meaning": "压力踏板",
    "sentence": "A plate that reacts when stepped on.",
    "translation": "踩踏时会发生反应的板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 18.494,
      "sentenceStart": 20.387,
      "end": 22.784
    }
  },
  {
    "id": "blocks_and_building-p09-c06",
    "word": "Tripwire Hook",
    "phonetic": "/ˈtrɪpwaɪr hʊk/",
    "meaning": "绊线钩",
    "sentence": "A hook for string traps.",
    "translation": "用于绳索陷阱的钩子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 23.884,
      "sentenceStart": 25.827,
      "end": 27.66
    }
  },
  {
    "id": "blocks_and_building-p09-c07",
    "word": "Rail",
    "phonetic": "/reɪl/",
    "meaning": "铁轨",
    "sentence": "A track for minecarts.",
    "translation": "矿车的轨道。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 28.76,
      "sentenceStart": 30.039,
      "end": 31.771
    }
  },
  {
    "id": "blocks_and_building-p09-c08",
    "word": "Powered Rail",
    "phonetic": "/paʊərd reɪl/",
    "meaning": "动力铁轨",
    "sentence": "A rail that speeds up carts.",
    "translation": "加快推车速度的轨道。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 32.871,
      "sentenceStart": 34.655,
      "end": 36.71
    }
  },
  {
    "id": "blocks_and_building-p09-c09",
    "word": "Detector Rail",
    "phonetic": "/dɪˈtɛktər reɪl/",
    "meaning": "探测铁轨",
    "sentence": "A rail that notices carts.",
    "translation": "注意到手推车的栏杆。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 37.81,
      "sentenceStart": 39.839,
      "end": 41.886
    }
  },
  {
    "id": "blocks_and_building-p09-c10",
    "word": "Redstone Repeater",
    "phonetic": "/ˈrɛdˌstoʊn rɪˈpitər/",
    "meaning": "红石中继器",
    "sentence": "A block that repeats redstone power.",
    "translation": "重复红石力量的积木。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 42.986,
      "sentenceStart": 45.179,
      "end": 47.638
    }
  },
  {
    "id": "blocks_and_building-p09-c11",
    "word": "Redstone Comparator",
    "phonetic": "/ˈrɛdˌstoʊn kəmˈpærəˌtər/",
    "meaning": "红石比较器",
    "sentence": "A block that compares redstone signals.",
    "translation": "比较红石信号的区块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 48.738,
      "sentenceStart": 51.105,
      "end": 53.709
    }
  },
  {
    "id": "blocks_and_building-p09-c12",
    "word": "Observer",
    "phonetic": "/əbˈzərvər/",
    "meaning": "侦测器",
    "sentence": "A block that watches for changes.",
    "translation": "一个观察变化的区块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 54.809,
      "sentenceStart": 56.399,
      "end": 58.664
    }
  },
  {
    "id": "blocks_and_building-p09-c13",
    "word": "Dispenser",
    "phonetic": "/dɪˈspɛnsər/",
    "meaning": "发射器",
    "sentence": "A block that shoots or uses items.",
    "translation": "射击或使用物品的区块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 59.764,
      "sentenceStart": 61.518,
      "end": 64.109
    }
  },
  {
    "id": "blocks_and_building-p09-c14",
    "word": "Hopper",
    "phonetic": "/ˈhɑpər/",
    "meaning": "漏斗",
    "sentence": "A block that moves items.",
    "translation": "移动项目的块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 65.209,
      "sentenceStart": 66.676,
      "end": 68.629
    }
  },
  {
    "id": "blocks_and_building-p09-c15",
    "word": "Piston",
    "phonetic": "/ˈpɪstən/",
    "meaning": "活塞",
    "sentence": "A block that pushes blocks.",
    "translation": "推动块的块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_09.mp3",
      "wordStart": 69.729,
      "sentenceStart": 71.3,
      "end": 73.31
    }
  },
  {
    "id": "blocks_and_building-p10-c01",
    "word": "Dropper",
    "phonetic": "/ˈdrɑpər/",
    "meaning": "投掷器",
    "sentence": "A block that drops items.",
    "translation": "放置项目的区块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.701,
      "end": 3.716
    }
  },
  {
    "id": "blocks_and_building-p10-c02",
    "word": "Sticky Piston",
    "phonetic": "/ˈstɪki ˈpɪstən/",
    "meaning": "黏性活塞",
    "sentence": "A piston that pulls blocks back.",
    "translation": "一个能向后拉阻挡的活塞。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 4.816,
      "sentenceStart": 6.846,
      "end": 9.137
    }
  },
  {
    "id": "blocks_and_building-p10-c03",
    "word": "Target Block",
    "phonetic": "/ˈtərgət blɑk/",
    "meaning": "目标区块",
    "sentence": "A block for aiming at.",
    "translation": "用于瞄准的区块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 10.237,
      "sentenceStart": 12.091,
      "end": 13.754
    }
  },
  {
    "id": "blocks_and_building-p10-c04",
    "word": "Note Block",
    "phonetic": "/noʊt blɑk/",
    "meaning": "音符盒",
    "sentence": "A block that plays notes.",
    "translation": "播放音符的块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 14.854,
      "sentenceStart": 16.545,
      "end": 18.41
    }
  },
  {
    "id": "blocks_and_building-p10-c05",
    "word": "Jukebox",
    "phonetic": "/ˈʤukˌbɑks/",
    "meaning": "唱片机",
    "sentence": "A block that plays music discs.",
    "translation": "播放音乐光盘的块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 19.51,
      "sentenceStart": 21.227,
      "end": 23.559
    }
  },
  {
    "id": "blocks_and_building-p10-c06",
    "word": "Daylight Detector",
    "phonetic": "/ˈdeɪˌlaɪt dɪˈtɛktər/",
    "meaning": "阳光探测器",
    "sentence": "A block that senses sunlight.",
    "translation": "一个能感受到阳光的街区。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 24.659,
      "sentenceStart": 26.819,
      "end": 28.945
    }
  },
  {
    "id": "blocks_and_building-p10-c07",
    "word": "Sculk Sensor",
    "phonetic": "/skʌlk ˈsɛnsər/",
    "meaning": "幽匿感测体",
    "sentence": "A block that senses sound.",
    "translation": "一个能感应声音的街区。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 30.045,
      "sentenceStart": 31.999,
      "end": 33.97
    }
  },
  {
    "id": "blocks_and_building-p10-c08",
    "word": "Calibrated Sculk Sensor",
    "phonetic": "/ˈkæləˌbreɪtəd skʌlk ˈsɛnsər/",
    "meaning": "校频幽匿感测体",
    "sentence": "A tuned sound sensor.",
    "translation": "调谐的声音传感器。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 35.07,
      "sentenceStart": 37.77,
      "end": 39.588
    }
  },
  {
    "id": "blocks_and_building-p10-c09",
    "word": "Trapped Chest",
    "phonetic": "/træpt ʧɛst/",
    "meaning": "陷阱箱",
    "sentence": "A chest that sends a redstone signal.",
    "translation": "一个发出红石信号的箱子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 40.688,
      "sentenceStart": 42.555,
      "end": 45.251
    }
  },
  {
    "id": "blocks_and_building-p10-c10",
    "word": "T N T",
    "phonetic": "/ti ɛn ti/",
    "meaning": "T N T",
    "sentence": "An explosive block.",
    "translation": "炸药块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 46.351,
      "sentenceStart": 48.155,
      "end": 49.882
    }
  },
  {
    "id": "blocks_and_building-p10-c11",
    "word": "Redstone Block",
    "phonetic": "/ˈrɛdˌstoʊn blɑk/",
    "meaning": "Redstone Block",
    "sentence": "A solid block of redstone power.",
    "translation": "一块坚固的红石力量。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 50.982,
      "sentenceStart": 52.985,
      "end": 55.378
    }
  },
  {
    "id": "blocks_and_building-p10-c12",
    "word": "Redstone Wire",
    "phonetic": "/ˈrɛdˌstoʊn waɪər/",
    "meaning": "红石线",
    "sentence": "A line that carries redstone power.",
    "translation": "承载红石力量的线路。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 56.478,
      "sentenceStart": 58.456,
      "end": 60.881
    }
  },
  {
    "id": "blocks_and_building-p10-c13",
    "word": "Slime Block",
    "phonetic": "/slaɪm blɑk/",
    "meaning": "黏液块",
    "sentence": "A bouncy sticky block.",
    "translation": "有弹性的粘性块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 61.981,
      "sentenceStart": 63.802,
      "end": 65.655
    }
  },
  {
    "id": "blocks_and_building-p10-c14",
    "word": "Honey Block",
    "phonetic": "/ˈhəni blɑk/",
    "meaning": "蜂蜜块",
    "sentence": "A sticky honey block.",
    "translation": "粘稠的蜂蜜块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 66.755,
      "sentenceStart": 68.501,
      "end": 70.266
    }
  },
  {
    "id": "blocks_and_building-p10-c15",
    "word": "Bell",
    "phonetic": "/bɛl/",
    "meaning": "钟",
    "sentence": "A bell that rings in a village.",
    "translation": "在村庄里敲响的钟声。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_10.mp3",
      "wordStart": 71.366,
      "sentenceStart": 72.676,
      "end": 74.799
    }
  },
  {
    "id": "blocks_and_building-p11-c01",
    "word": "Shulker Box",
    "phonetic": "/ˈʃʌlkər bɑks/",
    "meaning": "潜影盒",
    "sentence": "A box you can carry with items inside.",
    "translation": "您可以随身携带物品的盒子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.054,
      "end": 4.65
    }
  },
  {
    "id": "blocks_and_building-p11-c02",
    "word": "Ender Chest",
    "phonetic": "/ˈɛndər ʧɛst/",
    "meaning": "末影箱",
    "sentence": "A magic chest linked across places.",
    "translation": "一个连接各地的魔法宝箱。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 5.75,
      "sentenceStart": 7.575,
      "end": 10.141
    }
  },
  {
    "id": "blocks_and_building-p11-c03",
    "word": "Chiseled Bookshelf",
    "phonetic": "/ˈʧɪzəld ˈbʊkˌʃɛlf/",
    "meaning": "雕纹书架",
    "sentence": "A bookshelf that can hold books.",
    "translation": "一个可以放书的书架。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 11.241,
      "sentenceStart": 13.353,
      "end": 15.542
    }
  },
  {
    "id": "blocks_and_building-p11-c04",
    "word": "Lectern",
    "phonetic": "/ˈlɛktərn/",
    "meaning": "讲台",
    "sentence": "A stand for reading a book.",
    "translation": "阅读书籍的支架。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 16.642,
      "sentenceStart": 18.171,
      "end": 20.125
    }
  },
  {
    "id": "blocks_and_building-p11-c05",
    "word": "Lodestone",
    "phonetic": "/ˈloʊdˌstoʊn/",
    "meaning": "磁石",
    "sentence": "A block that guides a compass.",
    "translation": "一个引导指南针的块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 21.225,
      "sentenceStart": 22.835,
      "end": 24.926
    }
  },
  {
    "id": "blocks_and_building-p11-c06",
    "word": "Respawn Anchor",
    "phonetic": "/ˌriˈspɔn ˈæŋkər/",
    "meaning": "重生锚",
    "sentence": "A block for respawning in the nether.",
    "translation": "用于在冥界中重生的块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 26.026,
      "sentenceStart": 28.055,
      "end": 30.368
    }
  },
  {
    "id": "blocks_and_building-p11-c07",
    "word": "Beacon",
    "phonetic": "/ˈbikən/",
    "meaning": "信标",
    "sentence": "A shining block with helpful power.",
    "translation": "一块闪亮的积木，有帮助的力量。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 31.468,
      "sentenceStart": 32.967,
      "end": 35.387
    }
  },
  {
    "id": "blocks_and_building-p11-c08",
    "word": "Conduit",
    "phonetic": "/ˈkɑnʤuɪt/",
    "meaning": "潮涌核心",
    "sentence": "A sea block that helps under water.",
    "translation": "有助于水下的海块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 36.487,
      "sentenceStart": 38.083,
      "end": 40.465
    }
  },
  {
    "id": "blocks_and_building-p11-c09",
    "word": "End Rod",
    "phonetic": "/ɛnd rɑd/",
    "meaning": "末地烛",
    "sentence": "A bright rod from the end.",
    "translation": "一根明亮的棍子从尽头。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 41.565,
      "sentenceStart": 43.236,
      "end": 45.154
    }
  },
  {
    "id": "blocks_and_building-p11-c10",
    "word": "Hanging Sign",
    "phonetic": "/ˈhæŋɪŋ saɪn/",
    "meaning": "悬挂标志",
    "sentence": "A sign that hangs down.",
    "translation": "一个垂下来的标志。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 46.254,
      "sentenceStart": 48.083,
      "end": 49.772
    }
  },
  {
    "id": "blocks_and_building-p11-c11",
    "word": "Sign",
    "phonetic": "/saɪn/",
    "meaning": "告示牌",
    "sentence": "A board for writing words.",
    "translation": "用于书写单词的板。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 50.872,
      "sentenceStart": 52.152,
      "end": 54.059
    }
  },
  {
    "id": "blocks_and_building-p11-c12",
    "word": "Flower Pot",
    "phonetic": "/flaʊər pɑt/",
    "meaning": "花盆",
    "sentence": "A small pot for plants.",
    "translation": "放植物的小盆栽。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 55.159,
      "sentenceStart": 56.894,
      "end": 58.766
    }
  },
  {
    "id": "blocks_and_building-p11-c13",
    "word": "Decorated Pot",
    "phonetic": "/ˈdɛkərˌeɪtɪd pɑt/",
    "meaning": "饰纹陶罐",
    "sentence": "A patterned clay pot.",
    "translation": "一个带图案的陶罐。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 59.866,
      "sentenceStart": 61.937,
      "end": 63.653
    }
  },
  {
    "id": "blocks_and_building-p11-c14",
    "word": "Banner",
    "phonetic": "/ˈbænər/",
    "meaning": "横幅",
    "sentence": "A tall flag for decoration.",
    "translation": "一面高高的旗帜，用于装饰。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 64.753,
      "sentenceStart": 66.199,
      "end": 68.348
    }
  },
  {
    "id": "blocks_and_building-p11-c15",
    "word": "Item Frame",
    "phonetic": "/ˈaɪtəm freɪm/",
    "meaning": "物品展示框",
    "sentence": "A frame that shows an item.",
    "translation": "显示项目的边框。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_11.mp3",
      "wordStart": 69.448,
      "sentenceStart": 71.252,
      "end": 73.256
    }
  },
  {
    "id": "blocks_and_building-p12-c01",
    "word": "Glowstone",
    "phonetic": "/ˈɡloʊstoʊn/",
    "meaning": "荧石",
    "sentence": "A bright glowing block.",
    "translation": "一块明亮的发光块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.734,
      "end": 3.455
    }
  },
  {
    "id": "blocks_and_building-p12-c02",
    "word": "Sea Lantern",
    "phonetic": "/si ˈlæntərn/",
    "meaning": "海晶灯",
    "sentence": "A bright light from the sea.",
    "translation": "来自大海的明亮光芒。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 4.555,
      "sentenceStart": 6.297,
      "end": 8.223
    }
  },
  {
    "id": "blocks_and_building-p12-c03",
    "word": "Jack O'lantern",
    "phonetic": "/ʤæk oʊˈlæntərn/",
    "meaning": "南瓜灯",
    "sentence": "A glowing carved pumpkin.",
    "translation": "一只发光的雕刻南瓜。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 9.323,
      "sentenceStart": 11.257,
      "end": 13.22
    }
  },
  {
    "id": "blocks_and_building-p12-c04",
    "word": "Soul Torch",
    "phonetic": "/soʊl tɔrʧ/",
    "meaning": "灵魂火把",
    "sentence": "A blue soul torch.",
    "translation": "一支蓝色的灵魂火炬。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 14.32,
      "sentenceStart": 16.049,
      "end": 17.67
    }
  },
  {
    "id": "blocks_and_building-p12-c05",
    "word": "Soul Lantern",
    "phonetic": "/soʊl ˈlæntərn/",
    "meaning": "灵魂灯笼",
    "sentence": "A blue soul lantern.",
    "translation": "一盏蓝色的灵魂灯笼。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 18.77,
      "sentenceStart": 20.548,
      "end": 22.226
    }
  },
  {
    "id": "blocks_and_building-p12-c06",
    "word": "Soul Campfire",
    "phonetic": "/soʊl ˈkæmpˌfaɪər/",
    "meaning": "灵魂营火",
    "sentence": "A blue campfire.",
    "translation": "蓝色的篝火。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 23.326,
      "sentenceStart": 25.343,
      "end": 26.895
    }
  },
  {
    "id": "blocks_and_building-p12-c07",
    "word": "Candle",
    "phonetic": "/ˈkændəl/",
    "meaning": "蜡烛",
    "sentence": "A small wax light.",
    "translation": "一盏小蜡灯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 27.995,
      "sentenceStart": 29.491,
      "end": 31.121
    }
  },
  {
    "id": "blocks_and_building-p12-c08",
    "word": "Painting",
    "phonetic": "/ˈpeɪnɪŋ/",
    "meaning": "画",
    "sentence": "A picture for a wall.",
    "translation": "墙壁的图片。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 32.221,
      "sentenceStart": 33.801,
      "end": 35.439
    }
  },
  {
    "id": "blocks_and_building-p12-c09",
    "word": "Carpet",
    "phonetic": "/ˈkɑrpət/",
    "meaning": "地毯",
    "sentence": "A soft block for floors.",
    "translation": "用于地板的软块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 36.539,
      "sentenceStart": 38.056,
      "end": 40.061
    }
  },
  {
    "id": "blocks_and_building-p12-c10",
    "word": "Glass Pane",
    "phonetic": "/glæs peɪn/",
    "meaning": "玻璃板",
    "sentence": "A thin glass block.",
    "translation": "一块薄薄的玻璃块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 41.161,
      "sentenceStart": 43.001,
      "end": 44.698
    }
  },
  {
    "id": "blocks_and_building-p12-c11",
    "word": "Stained Glass",
    "phonetic": "/steɪnd glæs/",
    "meaning": "花窗玻璃",
    "sentence": "Glass with color.",
    "translation": "彩色玻璃。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 45.798,
      "sentenceStart": 47.694,
      "end": 49.142
    }
  },
  {
    "id": "blocks_and_building-p12-c12",
    "word": "Glazed Terracotta",
    "phonetic": "/gleɪzd ˌtɛrəˈkɑtə/",
    "meaning": "釉面兵马俑",
    "sentence": "A patterned clay block.",
    "translation": "带图案的粘土块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 50.242,
      "sentenceStart": 52.484,
      "end": 54.276
    }
  },
  {
    "id": "blocks_and_building-p12-c13",
    "word": "Carved Pumpkin",
    "phonetic": "/kɑrvd ˈpəmpkɪn/",
    "meaning": "雕刻南瓜",
    "sentence": "A pumpkin with a face.",
    "translation": "一个有脸的南瓜。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 55.376,
      "sentenceStart": 57.394,
      "end": 59.224
    }
  },
  {
    "id": "blocks_and_building-p12-c14",
    "word": "Bone Block",
    "phonetic": "/boʊn blɑk/",
    "meaning": "骨块",
    "sentence": "A pale block made from bones.",
    "translation": "由骨头制成的苍白块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 60.324,
      "sentenceStart": 62.062,
      "end": 64.224
    }
  },
  {
    "id": "blocks_and_building-p12-c15",
    "word": "Sponge",
    "phonetic": "/spənʤ/",
    "meaning": "海绵",
    "sentence": "A block that soaks up water.",
    "translation": "一个吸水的街区。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_12.mp3",
      "wordStart": 65.324,
      "sentenceStart": 67.042,
      "end": 69.088
    }
  },
  {
    "id": "blocks_and_building-p13-c01",
    "word": "Moss Block",
    "phonetic": "/mɔs blɑk/",
    "meaning": "苔藓块",
    "sentence": "A soft green moss block.",
    "translation": "柔软的绿色苔藓块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.934,
      "end": 3.926
    }
  },
  {
    "id": "blocks_and_building-p13-c02",
    "word": "Moss Carpet",
    "phonetic": "/mɔs ˈkɑrpət/",
    "meaning": "覆地苔藓",
    "sentence": "A thin moss cover.",
    "translation": "薄薄的苔藓罩。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 5.026,
      "sentenceStart": 6.856,
      "end": 8.469
    }
  },
  {
    "id": "blocks_and_building-p13-c03",
    "word": "Vine",
    "phonetic": "/vaɪn/",
    "meaning": "Vine",
    "sentence": "A climbing plant.",
    "translation": "一种攀爬植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 9.569,
      "sentenceStart": 10.873,
      "end": 12.3
    }
  },
  {
    "id": "blocks_and_building-p13-c04",
    "word": "Hanging Roots",
    "phonetic": "/ˈhæŋɪŋ ruts/",
    "meaning": "垂根",
    "sentence": "Roots that hang down.",
    "translation": "垂下的根。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 13.4,
      "sentenceStart": 15.281,
      "end": 16.864
    }
  },
  {
    "id": "blocks_and_building-p13-c05",
    "word": "Big Dripleaf",
    "phonetic": "/bɪg ˈdrɪpliːf/",
    "meaning": "大型垂滴叶",
    "sentence": "A large cave leaf.",
    "translation": "一片大洞穴树叶。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 17.964,
      "sentenceStart": 19.876,
      "end": 21.524
    }
  },
  {
    "id": "blocks_and_building-p13-c06",
    "word": "Small Dripleaf",
    "phonetic": "/smɔl ˈdrɪpliːf/",
    "meaning": "小型垂滴叶",
    "sentence": "A small cave leaf.",
    "translation": "一片小洞穴树叶。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 22.624,
      "sentenceStart": 24.57,
      "end": 26.141
    }
  },
  {
    "id": "blocks_and_building-p13-c07",
    "word": "Azalea",
    "phonetic": "/əˈzeɪljə/",
    "meaning": "杜鹃花丛",
    "sentence": "A small leafy bush.",
    "translation": "一棵绿意盎然的小灌木丛。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 27.241,
      "sentenceStart": 28.757,
      "end": 30.406
    }
  },
  {
    "id": "blocks_and_building-p13-c08",
    "word": "Flowering Azalea",
    "phonetic": "/flaʊərɪŋ əˈzeɪljə/",
    "meaning": "盛开的杜鹃花丛",
    "sentence": "An azalea with flowers.",
    "translation": "盛开鲜花的杜鹃花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 31.506,
      "sentenceStart": 33.672,
      "end": 35.535
    }
  },
  {
    "id": "blocks_and_building-p13-c09",
    "word": "Spore Blossom",
    "phonetic": "/spɔr ˈblɑsəm/",
    "meaning": "孢子花",
    "sentence": "A flower on a cave ceiling.",
    "translation": "洞穴天花板上的一朵花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 36.635,
      "sentenceStart": 38.552,
      "end": 40.516
    }
  },
  {
    "id": "blocks_and_building-p13-c10",
    "word": "Brown Mushroom Block",
    "phonetic": "/braʊn ˈməʃrum blɑk/",
    "meaning": "棕色蘑菇方块",
    "sentence": "A block from a brown mushroom.",
    "translation": "距离棕色蘑菇只有一个街区。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 41.616,
      "sentenceStart": 43.929,
      "end": 46.024
    }
  },
  {
    "id": "blocks_and_building-p13-c11",
    "word": "Red Mushroom Block",
    "phonetic": "/rɛd ˈməʃrum blɑk/",
    "meaning": "红色蘑菇方块",
    "sentence": "A block from a red mushroom.",
    "translation": "距离红蘑菇一个街区。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 47.124,
      "sentenceStart": 49.427,
      "end": 51.475
    }
  },
  {
    "id": "blocks_and_building-p13-c12",
    "word": "Dead Bush",
    "phonetic": "/dɛd bʊʃ/",
    "meaning": "枯萎的灌木",
    "sentence": "A dry desert bush.",
    "translation": "干燥的沙漠灌木丛。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 52.575,
      "sentenceStart": 54.268,
      "end": 55.956
    }
  },
  {
    "id": "blocks_and_building-p13-c13",
    "word": "Grass",
    "phonetic": "/græs/",
    "meaning": "草",
    "sentence": "A small patch of grass.",
    "translation": "一小片草地。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 57.056,
      "sentenceStart": 58.489,
      "end": 60.315
    }
  },
  {
    "id": "blocks_and_building-p13-c14",
    "word": "Tall Grass",
    "phonetic": "/tɔl græs/",
    "meaning": "高草丛",
    "sentence": "Tall green grass.",
    "translation": "青",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 61.415,
      "sentenceStart": 63.202,
      "end": 64.766
    }
  },
  {
    "id": "blocks_and_building-p13-c15",
    "word": "Seagrass",
    "phonetic": "/ˈsiːɡræs/",
    "meaning": "海草",
    "sentence": "Grass that grows under water.",
    "translation": "生长在水下的草。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_13.mp3",
      "wordStart": 65.866,
      "sentenceStart": 67.412,
      "end": 69.476
    }
  },
  {
    "id": "blocks_and_building-p14-c01",
    "word": "Poppy",
    "phonetic": "/ˈpɑpi/",
    "meaning": "虞美人",
    "sentence": "A small red flower.",
    "translation": "小红花",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.725,
      "end": 3.371
    }
  },
  {
    "id": "blocks_and_building-p14-c02",
    "word": "Dandelion",
    "phonetic": "/ˈdændəˌlaɪən/",
    "meaning": "蒲公英",
    "sentence": "A small yellow flower.",
    "translation": "一朵黄色的小花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 4.471,
      "sentenceStart": 6.137,
      "end": 7.861
    }
  },
  {
    "id": "blocks_and_building-p14-c03",
    "word": "Blue Orchid",
    "phonetic": "/blu ˈɔrkəd/",
    "meaning": "兰花",
    "sentence": "A bright blue flower.",
    "translation": "一朵鲜艳的蓝色花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 8.961,
      "sentenceStart": 10.752,
      "end": 12.453
    }
  },
  {
    "id": "blocks_and_building-p14-c04",
    "word": "Azure Bluet",
    "phonetic": "/ˈæʒər ˈbluːɪt/",
    "meaning": "蓝花美耳草",
    "sentence": "A tiny pale flower.",
    "translation": "一朵苍白的小花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 13.553,
      "sentenceStart": 15.393,
      "end": 17.153
    }
  },
  {
    "id": "blocks_and_building-p14-c05",
    "word": "Red Tulip",
    "phonetic": "/rɛd ˈtulɪp/",
    "meaning": "红色郁金香",
    "sentence": "A red tulip flower.",
    "translation": "一朵红色郁金香花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 18.253,
      "sentenceStart": 19.987,
      "end": 21.744
    }
  },
  {
    "id": "blocks_and_building-p14-c06",
    "word": "Orange Tulip",
    "phonetic": "/ˈɔrɪnʤ ˈtulɪp/",
    "meaning": "橙色郁金香",
    "sentence": "An orange tulip flower.",
    "translation": "橙色郁金香花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 22.844,
      "sentenceStart": 24.731,
      "end": 26.627
    }
  },
  {
    "id": "blocks_and_building-p14-c07",
    "word": "White Tulip",
    "phonetic": "/waɪt ˈtulɪp/",
    "meaning": "白色郁金香",
    "sentence": "A white tulip flower.",
    "translation": "一朵白色的郁金香花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 27.727,
      "sentenceStart": 29.452,
      "end": 31.194
    }
  },
  {
    "id": "blocks_and_building-p14-c08",
    "word": "Pink Tulip",
    "phonetic": "/pɪŋk ˈtulɪp/",
    "meaning": "粉红色郁金香",
    "sentence": "A pink tulip flower.",
    "translation": "一朵粉红色的郁金香花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 32.294,
      "sentenceStart": 34.086,
      "end": 35.822
    }
  },
  {
    "id": "blocks_and_building-p14-c09",
    "word": "Oxeye Daisy",
    "phonetic": "/ˈɑksaɪ ˈdeɪzi/",
    "meaning": "滨菊",
    "sentence": "A white flower with a yellow center.",
    "translation": "一朵黄色中心的白色花朵。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 36.922,
      "sentenceStart": 38.921,
      "end": 41.262
    }
  },
  {
    "id": "blocks_and_building-p14-c10",
    "word": "Cornflower",
    "phonetic": "/ˈkɔrnˌflaʊər/",
    "meaning": "矢车菊",
    "sentence": "A blue field flower.",
    "translation": "一朵蓝色的田野花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 42.362,
      "sentenceStart": 44.111,
      "end": 45.753
    }
  },
  {
    "id": "blocks_and_building-p14-c11",
    "word": "Lily Of The Valley",
    "phonetic": "/ˈlɪli əv ðə ˈvæli/",
    "meaning": "铃兰",
    "sentence": "A small white bell flower.",
    "translation": "一朵白色的小铃铛花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 46.853,
      "sentenceStart": 48.882,
      "end": 50.899
    }
  },
  {
    "id": "blocks_and_building-p14-c12",
    "word": "Wither Rose",
    "phonetic": "/ˈwɪðər roʊz/",
    "meaning": "凋灵玫瑰",
    "sentence": "A dark dangerous flower.",
    "translation": "一朵黑暗危险的花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 51.999,
      "sentenceStart": 53.757,
      "end": 55.722
    }
  },
  {
    "id": "blocks_and_building-p14-c13",
    "word": "Sunflower",
    "phonetic": "/ˈsənˌflaʊər/",
    "meaning": "向日葵",
    "sentence": "A tall yellow flower.",
    "translation": "一朵高大的黄色花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 56.822,
      "sentenceStart": 58.472,
      "end": 60.19
    }
  },
  {
    "id": "blocks_and_building-p14-c14",
    "word": "Lilac",
    "phonetic": "/ˈlaɪˌlæk/",
    "meaning": "丁香",
    "sentence": "A tall purple flower.",
    "translation": "紫色的花",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 61.29,
      "sentenceStart": 62.743,
      "end": 64.585
    }
  },
  {
    "id": "blocks_and_building-p14-c15",
    "word": "Peony",
    "phonetic": "/ˈpiəni/",
    "meaning": "牡丹",
    "sentence": "A full pink flower.",
    "translation": "一朵饱满的粉红色花朵。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_14.mp3",
      "wordStart": 65.685,
      "sentenceStart": 67.195,
      "end": 68.856
    }
  },
  {
    "id": "blocks_and_building-p15-c01",
    "word": "Lily Pad",
    "phonetic": "/ˈlɪli pæd/",
    "meaning": "睡莲",
    "sentence": "A flat leaf on water.",
    "translation": "一片扁平的水面叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.876,
      "end": 3.762
    }
  },
  {
    "id": "blocks_and_building-p15-c02",
    "word": "Fern",
    "phonetic": "/fərn/",
    "meaning": "蕨",
    "sentence": "A small green fern.",
    "translation": "一片绿色的小蕨类植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 4.862,
      "sentenceStart": 6.224,
      "end": 7.881
    }
  },
  {
    "id": "blocks_and_building-p15-c03",
    "word": "Large Fern",
    "phonetic": "/lɑrʤ fərn/",
    "meaning": "大型蕨",
    "sentence": "A tall green fern.",
    "translation": "高大的绿色蕨类植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 8.981,
      "sentenceStart": 10.698,
      "end": 12.319
    }
  },
  {
    "id": "blocks_and_building-p15-c04",
    "word": "Bush",
    "phonetic": "/bʊʃ/",
    "meaning": "灌木丛",
    "sentence": "A small leafy bush.",
    "translation": "一棵绿意盎然的小灌木丛。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 13.419,
      "sentenceStart": 14.777,
      "end": 16.426
    }
  },
  {
    "id": "blocks_and_building-p15-c05",
    "word": "Cactus Flower",
    "phonetic": "/ˈkæktəs flaʊər/",
    "meaning": "仙人掌花",
    "sentence": "A flower on a cactus.",
    "translation": "仙人掌上的花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 17.526,
      "sentenceStart": 19.53,
      "end": 21.426
    }
  },
  {
    "id": "blocks_and_building-p15-c06",
    "word": "Pink Petals",
    "phonetic": "/pɪŋk ˈpɛtəlz/",
    "meaning": "粉红色花簇",
    "sentence": "Soft pink petals on the ground.",
    "translation": "柔软的粉红色花瓣铺在地上。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 22.526,
      "sentenceStart": 24.418,
      "end": 26.628
    }
  },
  {
    "id": "blocks_and_building-p15-c07",
    "word": "Leaf Litter",
    "phonetic": "/lif ˈlɪtər/",
    "meaning": "枯叶堆",
    "sentence": "Dry leaves on the ground.",
    "translation": "地面上的干叶子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 27.728,
      "sentenceStart": 29.348,
      "end": 31.151
    }
  },
  {
    "id": "blocks_and_building-p15-c08",
    "word": "Cave Vines",
    "phonetic": "/keɪv vaɪnz/",
    "meaning": "洞穴藤蔓",
    "sentence": "Vines that hang in caves.",
    "translation": "悬挂在洞穴中的藤蔓。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 32.251,
      "sentenceStart": 34.063,
      "end": 36.003
    }
  },
  {
    "id": "blocks_and_building-p15-c09",
    "word": "Glow Lichen",
    "phonetic": "/gloʊ ˈlaɪkən/",
    "meaning": "发光地衣",
    "sentence": "A glowing plant on stone.",
    "translation": "一棵发光的植物在石头上。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 37.103,
      "sentenceStart": 38.818,
      "end": 40.808
    }
  },
  {
    "id": "blocks_and_building-p15-c10",
    "word": "Nether Sprouts",
    "phonetic": "/ˈnɛðər spraʊts/",
    "meaning": "下界苗",
    "sentence": "Small plants from the nether.",
    "translation": "来自冥界的小植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 41.908,
      "sentenceStart": 43.82,
      "end": 45.712
    }
  },
  {
    "id": "blocks_and_building-p15-c11",
    "word": "Warped Roots",
    "phonetic": "/wɔrpt ruts/",
    "meaning": "诡异菌索",
    "sentence": "Blue-green nether roots.",
    "translation": "蓝绿色的冥根。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 46.812,
      "sentenceStart": 48.646,
      "end": 50.45
    }
  },
  {
    "id": "blocks_and_building-p15-c12",
    "word": "Crimson Roots",
    "phonetic": "/ˈkrɪmzən ruts/",
    "meaning": "绯红菌索",
    "sentence": "Red nether roots.",
    "translation": "红色冥根。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 51.55,
      "sentenceStart": 53.471,
      "end": 54.972
    }
  },
  {
    "id": "blocks_and_building-p15-c13",
    "word": "Weeping Vines",
    "phonetic": "/ˈwipɪŋ vaɪnz/",
    "meaning": "垂泪藤",
    "sentence": "Vines that hang down in the nether.",
    "translation": "垂在阴间的藤蔓。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 56.072,
      "sentenceStart": 58.067,
      "end": 60.234
    }
  },
  {
    "id": "blocks_and_building-p15-c14",
    "word": "Twisting Vines",
    "phonetic": "/tˈwɪstɪŋ vaɪnz/",
    "meaning": "缠怨藤",
    "sentence": "Vines that grow upward in the nether.",
    "translation": "在冥界中向上生长的藤蔓。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 61.334,
      "sentenceStart": 63.33,
      "end": 65.67
    }
  },
  {
    "id": "blocks_and_building-p15-c15",
    "word": "Pale Hanging Moss",
    "phonetic": "/peɪl ˈhæŋɪŋ mɔs/",
    "meaning": "苍白垂须",
    "sentence": "Pale moss that hangs down.",
    "translation": "垂下来的苍白的苔藓。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_15.mp3",
      "wordStart": 66.77,
      "sentenceStart": 68.916,
      "end": 70.895
    }
  },
  {
    "id": "blocks_and_building-p16-c01",
    "word": "Chiseled Copper",
    "phonetic": "/ˈʧɪzəld ˈkɑpər/",
    "meaning": "雕纹铜块",
    "sentence": "A carved copper block.",
    "translation": "雕刻的铜块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.155,
      "end": 3.961
    }
  },
  {
    "id": "blocks_and_building-p16-c02",
    "word": "Block Of Copper",
    "phonetic": "/blɑk əv ˈkɑpər/",
    "meaning": "铜块",
    "sentence": "A solid copper block.",
    "translation": "坚固的铜块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 5.061,
      "sentenceStart": 7.096,
      "end": 8.878
    }
  },
  {
    "id": "blocks_and_building-p16-c03",
    "word": "Cut Copper",
    "phonetic": "/kət ˈkɑpər/",
    "meaning": "切制铜块",
    "sentence": "A copper block cut into a pattern.",
    "translation": "一块铜块切成图案。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 9.978,
      "sentenceStart": 11.763,
      "end": 14.255
    }
  },
  {
    "id": "blocks_and_building-p16-c04",
    "word": "Copper Grate",
    "phonetic": "/ˈkɑpər greɪt/",
    "meaning": "铜格栅",
    "sentence": "A see-through copper grate.",
    "translation": "透明的铜格栅。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 15.355,
      "sentenceStart": 17.182,
      "end": 19.139
    }
  },
  {
    "id": "blocks_and_building-p16-c05",
    "word": "Copper Bulb",
    "phonetic": "/ˈkɑpər bəlb/",
    "meaning": "铜灯",
    "sentence": "A copper light block.",
    "translation": "一块铜灯。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 20.239,
      "sentenceStart": 22.048,
      "end": 23.73
    }
  },
  {
    "id": "blocks_and_building-p16-c06",
    "word": "Copper Door",
    "phonetic": "/ˈkɑpər dɔr/",
    "meaning": "铜门",
    "sentence": "A door made of copper.",
    "translation": "一扇铜门。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 24.83,
      "sentenceStart": 26.592,
      "end": 28.422
    }
  },
  {
    "id": "blocks_and_building-p16-c07",
    "word": "Copper Trapdoor",
    "phonetic": "/ˈkɑpər ˈtræpdɔr/",
    "meaning": "铜活板门",
    "sentence": "A small copper trapdoor.",
    "translation": "一扇小小的铜制活板门。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 29.522,
      "sentenceStart": 31.614,
      "end": 33.646
    }
  },
  {
    "id": "blocks_and_building-p16-c08",
    "word": "Copper Bars",
    "phonetic": "/ˈkɑpər bɑrz/",
    "meaning": "铜栏杆",
    "sentence": "Thin bars made of copper.",
    "translation": "铜制细条。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 34.746,
      "sentenceStart": 36.63,
      "end": 38.577
    }
  },
  {
    "id": "blocks_and_building-p16-c09",
    "word": "Copper Chain",
    "phonetic": "/ˈkɑpər ʧeɪn/",
    "meaning": "铜链",
    "sentence": "A chain made of copper.",
    "translation": "铜制链条。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 39.677,
      "sentenceStart": 41.486,
      "end": 43.239
    }
  },
  {
    "id": "blocks_and_building-p16-c10",
    "word": "Copper Lantern",
    "phonetic": "/ˈkɑpər ˈlæntərn/",
    "meaning": "铜灯笼",
    "sentence": "A lantern made of copper.",
    "translation": "铜灯笼。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 44.339,
      "sentenceStart": 46.288,
      "end": 48.298
    }
  },
  {
    "id": "blocks_and_building-p16-c11",
    "word": "Lightning Rod",
    "phonetic": "/ˈlaɪtnɪŋ rɑd/",
    "meaning": "避雷针",
    "sentence": "A rod that catches lightning.",
    "translation": "一根能捕捉闪电的棍子。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 49.398,
      "sentenceStart": 51.244,
      "end": 53.337
    }
  },
  {
    "id": "blocks_and_building-p16-c12",
    "word": "Exposed Copper",
    "phonetic": "/ɪkˈspoʊzd ˈkɑpər/",
    "meaning": "斑驳的铜块",
    "sentence": "Copper that has started to change color.",
    "translation": "已经开始变色的铜。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 54.437,
      "sentenceStart": 56.591,
      "end": 59.25
    }
  },
  {
    "id": "blocks_and_building-p16-c13",
    "word": "Weathered Copper",
    "phonetic": "/ˈwɛðərd ˈkɑpər/",
    "meaning": "锈蚀的铜块",
    "sentence": "Copper with a weathered color.",
    "translation": "风化色的铜。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 60.35,
      "sentenceStart": 62.286,
      "end": 64.283
    }
  },
  {
    "id": "blocks_and_building-p16-c14",
    "word": "Oxidized Copper",
    "phonetic": "/ˈɑksəˌdaɪzd ˈkɑpər/",
    "meaning": "氧化的铜块",
    "sentence": "Copper that has turned blue-green.",
    "translation": "已经变成蓝绿色的铜。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 65.383,
      "sentenceStart": 67.643,
      "end": 69.89
    }
  },
  {
    "id": "blocks_and_building-p16-c15",
    "word": "Copper Golem Statue",
    "phonetic": "/ˈkɑpər ˈgoʊləm ˈstæˌʧu/",
    "meaning": "铜傀儡像",
    "sentence": "A statue shaped like a copper golem.",
    "translation": "铜傀儡造型的雕像。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_16.mp3",
      "wordStart": 70.99,
      "sentenceStart": 73.54,
      "end": 76.123
    }
  },
  {
    "id": "blocks_and_building-p17-c01",
    "word": "Tube Coral",
    "phonetic": "/tub ˈkɔrəl/",
    "meaning": "管珊瑚",
    "sentence": "A blue coral plant.",
    "translation": "一种蓝色珊瑚植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.926,
      "end": 3.56
    }
  },
  {
    "id": "blocks_and_building-p17-c02",
    "word": "Brain Coral",
    "phonetic": "/breɪn ˈkɔrəl/",
    "meaning": "脑纹珊瑚",
    "sentence": "A pink coral plant.",
    "translation": "粉红色的珊瑚植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 4.66,
      "sentenceStart": 6.449,
      "end": 8.185
    }
  },
  {
    "id": "blocks_and_building-p17-c03",
    "word": "Bubble Coral",
    "phonetic": "/ˈbəbəl ˈkɔrəl/",
    "meaning": "气泡珊瑚",
    "sentence": "A purple coral plant.",
    "translation": "紫色的珊瑚植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 9.285,
      "sentenceStart": 11.139,
      "end": 12.996
    }
  },
  {
    "id": "blocks_and_building-p17-c04",
    "word": "Fire Coral",
    "phonetic": "/faɪər ˈkɔrəl/",
    "meaning": "火珊瑚",
    "sentence": "A red coral plant.",
    "translation": "红珊瑚植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 14.096,
      "sentenceStart": 15.838,
      "end": 17.535
    }
  },
  {
    "id": "blocks_and_building-p17-c05",
    "word": "Horn Coral",
    "phonetic": "/hɔrn ˈkɔrəl/",
    "meaning": "鹿角珊瑚",
    "sentence": "A yellow coral plant.",
    "translation": "一种黄色的珊瑚植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 18.635,
      "sentenceStart": 20.402,
      "end": 22.211
    }
  },
  {
    "id": "blocks_and_building-p17-c06",
    "word": "Tube Coral Block",
    "phonetic": "/tub ˈkɔrəl blɑk/",
    "meaning": "管珊瑚块",
    "sentence": "A block of tube coral.",
    "translation": "一块管状珊瑚。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 23.311,
      "sentenceStart": 25.502,
      "end": 27.321
    }
  },
  {
    "id": "blocks_and_building-p17-c07",
    "word": "Brain Coral Block",
    "phonetic": "/breɪn ˈkɔrəl blɑk/",
    "meaning": "脑纹珊瑚块",
    "sentence": "A block of brain coral.",
    "translation": "一块脑珊瑚。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 28.421,
      "sentenceStart": 30.699,
      "end": 32.598
    }
  },
  {
    "id": "blocks_and_building-p17-c08",
    "word": "Bubble Coral Block",
    "phonetic": "/ˈbəbəl ˈkɔrəl blɑk/",
    "meaning": "气泡珊瑚块",
    "sentence": "A block of bubble coral.",
    "translation": "一块泡泡珊瑚。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 33.698,
      "sentenceStart": 36.063,
      "end": 38.005
    }
  },
  {
    "id": "blocks_and_building-p17-c09",
    "word": "Fire Coral Block",
    "phonetic": "/faɪər ˈkɔrəl blɑk/",
    "meaning": "火珊瑚块",
    "sentence": "A block of fire coral.",
    "translation": "一块火珊瑚。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 39.105,
      "sentenceStart": 41.371,
      "end": 43.282
    }
  },
  {
    "id": "blocks_and_building-p17-c10",
    "word": "Horn Coral Block",
    "phonetic": "/hɔrn ˈkɔrəl blɑk/",
    "meaning": "鹿角珊瑚块",
    "sentence": "A block of horn coral.",
    "translation": "一块牛角珊瑚。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 44.382,
      "sentenceStart": 46.67,
      "end": 48.485
    }
  },
  {
    "id": "blocks_and_building-p17-c11",
    "word": "Dark Prismarine",
    "phonetic": "/dɑrk ˈprɪzməriːn/",
    "meaning": "暗海晶石",
    "sentence": "A dark sea-green block.",
    "translation": "一块深海绿色的街区。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 49.585,
      "sentenceStart": 51.731,
      "end": 53.541
    }
  },
  {
    "id": "blocks_and_building-p17-c12",
    "word": "Wet Sponge",
    "phonetic": "/wɛt spənʤ/",
    "meaning": "湿海绵",
    "sentence": "A sponge filled with water.",
    "translation": "一块装满水的海绵。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 54.641,
      "sentenceStart": 56.52,
      "end": 58.483
    }
  },
  {
    "id": "blocks_and_building-p17-c13",
    "word": "Bubble Column",
    "phonetic": "/ˈbəbəl ˈkɑləm/",
    "meaning": "气泡柱",
    "sentence": "A rising column of bubbles.",
    "translation": "一排冉冉升起的气泡。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 59.583,
      "sentenceStart": 61.475,
      "end": 63.579
    }
  },
  {
    "id": "blocks_and_building-p17-c14",
    "word": "Tall Seagrass",
    "phonetic": "/tɔl ˈsiːɡræs/",
    "meaning": "高海草",
    "sentence": "Tall grass under water.",
    "translation": "水下的高草。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 64.679,
      "sentenceStart": 66.575,
      "end": 68.399
    }
  },
  {
    "id": "blocks_and_building-p17-c15",
    "word": "Kelp Plant",
    "phonetic": "/kɛlp plænt/",
    "meaning": "海带植株",
    "sentence": "A tall plant under water.",
    "translation": "一棵高大的水下植物。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_17.mp3",
      "wordStart": 69.499,
      "sentenceStart": 71.303,
      "end": 73.33
    }
  },
  {
    "id": "blocks_and_building-p18-c01",
    "word": "Bedrock",
    "phonetic": "/ˈbɛˌdrɑk/",
    "meaning": "基岩",
    "sentence": "An unbreakable dark block.",
    "translation": "坚不可摧的黑暗砖块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.726,
      "end": 3.829
    }
  },
  {
    "id": "blocks_and_building-p18-c02",
    "word": "Crying Obsidian",
    "phonetic": "/kraɪɪŋ əbˈsɪdiən/",
    "meaning": "哭泣的黑曜石",
    "sentence": "A purple glowing obsidian block.",
    "translation": "一块紫色发光的黑曜石块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 4.929,
      "sentenceStart": 6.966,
      "end": 9.376
    }
  },
  {
    "id": "blocks_and_building-p18-c03",
    "word": "Soul Sand",
    "phonetic": "/soʊl sænd/",
    "meaning": "灵魂沙",
    "sentence": "A slow block from the nether.",
    "translation": "离冥界一个缓慢的街区。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 10.476,
      "sentenceStart": 12.197,
      "end": 14.109
    }
  },
  {
    "id": "blocks_and_building-p18-c04",
    "word": "Soul Soil",
    "phonetic": "/soʊl sɔɪl/",
    "meaning": "灵魂土",
    "sentence": "A dark soil from the nether.",
    "translation": "阴间的黑土。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 15.209,
      "sentenceStart": 16.862,
      "end": 18.788
    }
  },
  {
    "id": "blocks_and_building-p18-c05",
    "word": "Magma Block",
    "phonetic": "/ˈmægmə blɑk/",
    "meaning": "岩浆块",
    "sentence": "A hot glowing block.",
    "translation": "一块炽热的发光块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 19.888,
      "sentenceStart": 21.772,
      "end": 23.481
    }
  },
  {
    "id": "blocks_and_building-p18-c06",
    "word": "Gilded Blackstone",
    "phonetic": "/ˈgɪldɪd ˈblækˌstoʊn/",
    "meaning": "镶金黑石",
    "sentence": "Blackstone with gold inside.",
    "translation": "黑石，里面有黄金。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 24.581,
      "sentenceStart": 26.81,
      "end": 28.889
    }
  },
  {
    "id": "blocks_and_building-p18-c07",
    "word": "Smooth Basalt",
    "phonetic": "/smuð bəˈsɔlt/",
    "meaning": "平滑玄武岩",
    "sentence": "A smooth dark basalt block.",
    "translation": "光滑的深色玄武岩块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 29.989,
      "sentenceStart": 31.843,
      "end": 34.077
    }
  },
  {
    "id": "blocks_and_building-p18-c08",
    "word": "Purpur Pillar",
    "phonetic": "/ˈpɜrpɜr ˈpɪlər/",
    "meaning": "紫珀柱",
    "sentence": "A purple pillar from the end.",
    "translation": "一根紫色的柱子从尽头。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 35.177,
      "sentenceStart": 37.145,
      "end": 39.121
    }
  },
  {
    "id": "blocks_and_building-p18-c09",
    "word": "Chorus Flower",
    "phonetic": "/ˈkɔrəs flaʊər/",
    "meaning": "紫颂花",
    "sentence": "A flower from a chorus plant.",
    "translation": "一朵来自合唱植物的花。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 40.221,
      "sentenceStart": 42.138,
      "end": 44.198
    }
  },
  {
    "id": "blocks_and_building-p18-c10",
    "word": "Chorus Plant",
    "phonetic": "/ˈkɔrəs plænt/",
    "meaning": "紫颂植株",
    "sentence": "A strange plant from the end.",
    "translation": "一株奇怪的植物从尽头冒出来。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 45.298,
      "sentenceStart": 47.202,
      "end": 49.199
    }
  },
  {
    "id": "blocks_and_building-p18-c11",
    "word": "Shroomlight",
    "phonetic": "/ˈʃruːmlaɪt/",
    "meaning": "菌光体",
    "sentence": "A glowing fungus block.",
    "translation": "发光的真菌块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 50.299,
      "sentenceStart": 51.829,
      "end": 53.795
    }
  },
  {
    "id": "blocks_and_building-p18-c12",
    "word": "Nether Wart Block",
    "phonetic": "/ˈnɛðər wɔrt blɑk/",
    "meaning": "下界疣块",
    "sentence": "A red nether plant block.",
    "translation": "一个红色的幽冥植物块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 54.895,
      "sentenceStart": 57.111,
      "end": 59.135
    }
  },
  {
    "id": "blocks_and_building-p18-c13",
    "word": "Warped Wart Block",
    "phonetic": "/wɔrpt wɔrt blɑk/",
    "meaning": "诡异疣块",
    "sentence": "A blue-green nether plant block.",
    "translation": "一株蓝绿色的幽冥植物块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 60.235,
      "sentenceStart": 62.35,
      "end": 64.57
    }
  },
  {
    "id": "blocks_and_building-p18-c14",
    "word": "Crimson Nylium",
    "phonetic": "/ˈkrɪmzən ˈnaɪliəm/",
    "meaning": "绯红菌岩",
    "sentence": "A red nether ground block.",
    "translation": "一道红色幽冥地块。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 65.67,
      "sentenceStart": 67.649,
      "end": 69.71
    }
  },
  {
    "id": "blocks_and_building-p18-c15",
    "word": "Warped Nylium",
    "phonetic": "/wɔrpt ˈnaɪliəm/",
    "meaning": "诡异菌岩",
    "sentence": "A blue-green nether ground block.",
    "translation": "一块蓝绿色的幽冥地砖。",
    "category": "方块与建造",
    "audio": {
      "src": "/audio/blocks_and_building/page_18.mp3",
      "wordStart": 70.81,
      "sentenceStart": 72.709,
      "end": 75.016
    }
  },
  {
    "id": "animals_and_friends-p01-c01",
    "word": "Cow",
    "phonetic": "/kaʊ/",
    "meaning": "牛",
    "sentence": "A brown cow.",
    "translation": "一头棕色的奶牛。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 5.746,
      "sentenceStart": 7.046,
      "end": 8.368
    }
  },
  {
    "id": "animals_and_friends-p01-c02",
    "word": "Pig",
    "phonetic": "/pɪg/",
    "meaning": "猪",
    "sentence": "A pink pig.",
    "translation": "一头粉红色的猪。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 9.468,
      "sentenceStart": 10.839,
      "end": 12.125
    }
  },
  {
    "id": "animals_and_friends-p01-c03",
    "word": "Sheep",
    "phonetic": "/ʃip/",
    "meaning": "绵羊",
    "sentence": "A fluffy sheep.",
    "translation": "一只毛茸茸的羊。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 13.225,
      "sentenceStart": 14.483,
      "end": 15.998
    }
  },
  {
    "id": "animals_and_friends-p01-c04",
    "word": "Chicken",
    "phonetic": "/ˈʧɪkən/",
    "meaning": "鸡",
    "sentence": "A small chicken.",
    "translation": "幺鸡",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 17.098,
      "sentenceStart": 18.514,
      "end": 20.003
    }
  },
  {
    "id": "animals_and_friends-p01-c05",
    "word": "Horse",
    "phonetic": "/hɔrs/",
    "meaning": "马",
    "sentence": "A fast horse.",
    "translation": "一匹快马。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 21.103,
      "sentenceStart": 22.537,
      "end": 23.954
    }
  },
  {
    "id": "animals_and_friends-p01-c06",
    "word": "Wolf",
    "phonetic": "/wʊlf/",
    "meaning": "狼",
    "sentence": "A loyal wolf.",
    "translation": "一只忠诚的狼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 25.054,
      "sentenceStart": 26.422,
      "end": 27.815
    }
  },
  {
    "id": "animals_and_friends-p01-c07",
    "word": "Cat",
    "phonetic": "/kæt/",
    "meaning": "猫",
    "sentence": "A quiet cat.",
    "translation": "一只安静的猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 28.915,
      "sentenceStart": 30.232,
      "end": 31.635
    }
  },
  {
    "id": "animals_and_friends-p01-c08",
    "word": "Rabbit",
    "phonetic": "/ˈræbɪt/",
    "meaning": "兔子",
    "sentence": "A little rabbit.",
    "translation": "小兔",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 32.735,
      "sentenceStart": 34.17,
      "end": 35.516
    }
  },
  {
    "id": "animals_and_friends-p01-c09",
    "word": "Fox",
    "phonetic": "/fɑks/",
    "meaning": "狐狸",
    "sentence": "A clever fox.",
    "translation": "一只聪明的狐狸。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 36.616,
      "sentenceStart": 38.028,
      "end": 39.504
    }
  },
  {
    "id": "animals_and_friends-p01-c10",
    "word": "Bee",
    "phonetic": "/bi/",
    "meaning": "蜜蜂",
    "sentence": "A busy bee.",
    "translation": "一只忙碌的蜜蜂。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 40.604,
      "sentenceStart": 41.887,
      "end": 43.174
    }
  },
  {
    "id": "animals_and_friends-p01-c11",
    "word": "Frog",
    "phonetic": "/frɑg/",
    "meaning": "青蛙",
    "sentence": "A green frog.",
    "translation": "一只绿色的青蛙。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 44.274,
      "sentenceStart": 45.684,
      "end": 47.042
    }
  },
  {
    "id": "animals_and_friends-p01-c12",
    "word": "Turtle",
    "phonetic": "/ˈtərtəl/",
    "meaning": "海龟",
    "sentence": "A slow turtle.",
    "translation": "一只缓慢的乌龟。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_01.mp3",
      "wordStart": 48.142,
      "sentenceStart": 49.662,
      "end": 51.074
    }
  },
  {
    "id": "animals_and_friends-p02-c01",
    "word": "Donkey",
    "phonetic": "/ˈdɔŋki/",
    "meaning": "驴",
    "sentence": "A helpful donkey.",
    "translation": "一头乐于助人的驴子。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.735,
      "end": 3.318
    }
  },
  {
    "id": "animals_and_friends-p02-c02",
    "word": "Llama",
    "phonetic": "/ˈlɑmə/",
    "meaning": "羊驼",
    "sentence": "A tall llama.",
    "translation": "一头高大的美洲驼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 4.418,
      "sentenceStart": 5.798,
      "end": 7.088
    }
  },
  {
    "id": "animals_and_friends-p02-c03",
    "word": "Camel",
    "phonetic": "/ˈkæməl/",
    "meaning": "骆驼",
    "sentence": "A desert camel.",
    "translation": "沙漠骆驼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 8.188,
      "sentenceStart": 9.623,
      "end": 11.125
    }
  },
  {
    "id": "animals_and_friends-p02-c04",
    "word": "Panda",
    "phonetic": "/ˈpændə/",
    "meaning": "熊猫",
    "sentence": "A black and white panda.",
    "translation": "一只黑白熊猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 12.225,
      "sentenceStart": 13.727,
      "end": 15.564
    }
  },
  {
    "id": "animals_and_friends-p02-c05",
    "word": "Parrot",
    "phonetic": "/ˈpɛrət/",
    "meaning": "鹦鹉",
    "sentence": "A colorful parrot.",
    "translation": "五颜六色的鹦鹉。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 16.664,
      "sentenceStart": 18.149,
      "end": 19.746
    }
  },
  {
    "id": "animals_and_friends-p02-c06",
    "word": "Ocelot",
    "phonetic": "/ˈɑsəˌlɑt/",
    "meaning": "豹猫",
    "sentence": "A wild cat.",
    "translation": "一只野猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 20.846,
      "sentenceStart": 22.425,
      "end": 23.783
    }
  },
  {
    "id": "animals_and_friends-p02-c07",
    "word": "Goat",
    "phonetic": "/goʊt/",
    "meaning": "山羊",
    "sentence": "A mountain goat.",
    "translation": "山羊",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 24.883,
      "sentenceStart": 26.22,
      "end": 27.604
    }
  },
  {
    "id": "animals_and_friends-p02-c08",
    "word": "Armadillo",
    "phonetic": "/ˌɑrməˈdɪloʊ/",
    "meaning": "犰狳",
    "sentence": "A small armadillo.",
    "translation": "一只小蟑螂。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 28.704,
      "sentenceStart": 30.403,
      "end": 32.075
    }
  },
  {
    "id": "animals_and_friends-p02-c09",
    "word": "Sniffer",
    "phonetic": "/sˈnɪfər/",
    "meaning": "嗅探兽",
    "sentence": "A big gentle sniffer.",
    "translation": "一个大而温和的嗅探器。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 33.175,
      "sentenceStart": 34.629,
      "end": 36.465
    }
  },
  {
    "id": "animals_and_friends-p02-c10",
    "word": "Allay",
    "phonetic": "/əˈleɪ/",
    "meaning": "悦灵",
    "sentence": "A small helpful friend.",
    "translation": "一个小小的乐于助人的朋友。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 37.565,
      "sentenceStart": 38.894,
      "end": 40.836
    }
  },
  {
    "id": "animals_and_friends-p02-c11",
    "word": "Villager",
    "phonetic": "/ˈvɪlɪʤər/",
    "meaning": "村民",
    "sentence": "A village person.",
    "translation": "一个村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 41.936,
      "sentenceStart": 43.44,
      "end": 45.007
    }
  },
  {
    "id": "animals_and_friends-p02-c12",
    "word": "Wandering Trader",
    "phonetic": "/ˈwɑndərɪŋ ˈtreɪdər/",
    "meaning": "流浪商人",
    "sentence": "A traveling trader.",
    "translation": "一个旅行商人。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 46.107,
      "sentenceStart": 48.228,
      "end": 49.88
    }
  },
  {
    "id": "animals_and_friends-p02-c13",
    "word": "Iron Golem",
    "phonetic": "/aɪərn ˈgoʊləm/",
    "meaning": "铁傀儡",
    "sentence": "A strong helper.",
    "translation": "一个强有力的助手。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 50.98,
      "sentenceStart": 52.783,
      "end": 54.258
    }
  },
  {
    "id": "animals_and_friends-p02-c14",
    "word": "Snow Golem",
    "phonetic": "/snoʊ ˈgoʊləm/",
    "meaning": "雪傀儡",
    "sentence": "A snowy helper.",
    "translation": "一个白雪皑皑的帮手。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 55.358,
      "sentenceStart": 57.137,
      "end": 58.679
    }
  },
  {
    "id": "animals_and_friends-p02-c15",
    "word": "Copper Golem",
    "phonetic": "/ˈkɑpər ˈgoʊləm/",
    "meaning": "铜傀儡",
    "sentence": "A copper helper.",
    "translation": "一个铜管助手。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_02.mp3",
      "wordStart": 59.779,
      "sentenceStart": 61.683,
      "end": 63.185
    }
  },
  {
    "id": "animals_and_friends-p03-c01",
    "word": "Axolotl",
    "phonetic": "/ˌæksəˈlɑtəl/",
    "meaning": "美西螈",
    "sentence": "Water animal with feathery gills.",
    "translation": "带有羽毛鳃的水生动物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.939,
      "end": 4.367
    }
  },
  {
    "id": "animals_and_friends-p03-c02",
    "word": "Bat",
    "phonetic": "/bæt/",
    "meaning": "蝙蝠",
    "sentence": "Small flying animal.",
    "translation": "会飞的小动物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 5.467,
      "sentenceStart": 6.821,
      "end": 8.546
    }
  },
  {
    "id": "animals_and_friends-p03-c03",
    "word": "Glow Squid",
    "phonetic": "/gloʊ skwɪd/",
    "meaning": "发光鱿鱼",
    "sentence": "Squid with glowing spots.",
    "translation": "带有发光斑点的鱿鱼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 9.646,
      "sentenceStart": 11.358,
      "end": 13.22
    }
  },
  {
    "id": "animals_and_friends-p03-c04",
    "word": "Happy Ghast",
    "phonetic": "/ˈhæpi ɡæst/",
    "meaning": "快乐恶魂",
    "sentence": "Flying friend you can ride.",
    "translation": "您可以乘坐的飞行朋友。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 14.32,
      "sentenceStart": 16.178,
      "end": 18.126
    }
  },
  {
    "id": "animals_and_friends-p03-c05",
    "word": "Mooshroom",
    "phonetic": "/ˈmuːʃruːm/",
    "meaning": "哞菇",
    "sentence": "Cow covered with mushrooms.",
    "translation": "牛身上覆盖着蘑菇。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 19.226,
      "sentenceStart": 20.759,
      "end": 22.679
    }
  },
  {
    "id": "animals_and_friends-p03-c06",
    "word": "Mule",
    "phonetic": "/mjul/",
    "meaning": "骡",
    "sentence": "Pack animal that carries items.",
    "translation": "携带物品的包装动物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 23.779,
      "sentenceStart": 25.141,
      "end": 27.401
    }
  },
  {
    "id": "animals_and_friends-p03-c07",
    "word": "Nautilus",
    "phonetic": "/ˈnɔtələs/",
    "meaning": "鹦鹉螺",
    "sentence": "Rideable sea creature.",
    "translation": "可骑行的海洋生物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 28.501,
      "sentenceStart": 30.047,
      "end": 31.736
    }
  },
  {
    "id": "animals_and_friends-p03-c08",
    "word": "Squid",
    "phonetic": "/skwɪd/",
    "meaning": "鱿鱼",
    "sentence": "Sea animal with eight arms.",
    "translation": "有八只胳膊的海洋动物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 32.836,
      "sentenceStart": 34.228,
      "end": 36.304
    }
  },
  {
    "id": "animals_and_friends-p03-c09",
    "word": "Strider",
    "phonetic": "/ˈstraɪdər/",
    "meaning": "炽足兽",
    "sentence": "Lava-walking creature.",
    "translation": "行走在熔岩中的生物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 37.404,
      "sentenceStart": 38.958,
      "end": 40.68
    }
  },
  {
    "id": "animals_and_friends-p03-c10",
    "word": "Tadpole",
    "phonetic": "/ˈtædˌpoʊl/",
    "meaning": "蝌蚪",
    "sentence": "Young frog that swims.",
    "translation": "会游泳的小青蛙。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 41.78,
      "sentenceStart": 43.375,
      "end": 45.241
    }
  },
  {
    "id": "animals_and_friends-p03-c11",
    "word": "Trader Llama",
    "phonetic": "/ˈtreɪdər ˈlɑmə/",
    "meaning": "行商羊驼",
    "sentence": "Llama following a trader.",
    "translation": "跟随商人的骆驼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 46.341,
      "sentenceStart": 48.201,
      "end": 50.043
    }
  },
  {
    "id": "animals_and_friends-p03-c12",
    "word": "Cod",
    "phonetic": "/ˈsiˈoʊˈdi/",
    "meaning": "鳕鱼",
    "sentence": "Fish that swim in groups.",
    "translation": "成群结队地游泳的鱼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 51.143,
      "sentenceStart": 52.485,
      "end": 54.491
    }
  },
  {
    "id": "animals_and_friends-p03-c13",
    "word": "Dolphin",
    "phonetic": "/ˈdɑlfən/",
    "meaning": "海豚",
    "sentence": "Sea animal that leaps.",
    "translation": "跳跃的海洋动物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 55.591,
      "sentenceStart": 57.101,
      "end": 58.909
    }
  },
  {
    "id": "animals_and_friends-p03-c14",
    "word": "Pufferfish",
    "phonetic": "/ˈpʌfərfɪʃ/",
    "meaning": "河豚",
    "sentence": "Fish that puffs when threatened.",
    "translation": "受到威胁时会膨胀的鱼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 60.009,
      "sentenceStart": 61.768,
      "end": 63.859
    }
  },
  {
    "id": "animals_and_friends-p03-c15",
    "word": "Salmon",
    "phonetic": "/ˈsæmən/",
    "meaning": "鲑鱼",
    "sentence": "Fish from rivers and oceans.",
    "translation": "来自河流和海洋的鱼类。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_03.mp3",
      "wordStart": 64.959,
      "sentenceStart": 66.338,
      "end": 68.457
    }
  },
  {
    "id": "animals_and_friends-p04-c01",
    "word": "Tropical Fish",
    "phonetic": "/ˈtrɑpɪkəl fɪʃ/",
    "meaning": "热带鱼",
    "sentence": "Fish with bright patterns.",
    "translation": "有明亮图案的鱼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.205,
      "end": 4.074
    }
  },
  {
    "id": "animals_and_friends-p04-c02",
    "word": "Enderman",
    "phonetic": "/ˈɛndərmæn/",
    "meaning": "末影人",
    "sentence": "Tall creature that teleports.",
    "translation": "传送的高个子生物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 5.174,
      "sentenceStart": 6.742,
      "end": 8.799
    }
  },
  {
    "id": "animals_and_friends-p04-c03",
    "word": "Piglin",
    "phonetic": "/ˈpɪɡlɪn/",
    "meaning": "猪灵",
    "sentence": "Gold-loving pig-like creature.",
    "translation": "爱金猪般的生物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 9.899,
      "sentenceStart": 11.47,
      "end": 13.667
    }
  },
  {
    "id": "animals_and_friends-p04-c04",
    "word": "Polar Bear",
    "phonetic": "/ˈpoʊlər bɛr/",
    "meaning": "北极熊",
    "sentence": "Large bear from snowy places.",
    "translation": "大熊来自白雪皑皑的地方。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 14.767,
      "sentenceStart": 16.502,
      "end": 18.766
    }
  },
  {
    "id": "animals_and_friends-p04-c05",
    "word": "Spider",
    "phonetic": "/ˈspaɪdər/",
    "meaning": "蜘蛛",
    "sentence": "Eight-legged climbing creature.",
    "translation": "八足攀岩生物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 19.866,
      "sentenceStart": 21.337,
      "end": 23.429
    }
  },
  {
    "id": "animals_and_friends-p04-c06",
    "word": "Zombified Piglin",
    "phonetic": "/ˈzɑmbɪfaɪd ˈpɪɡlɪn/",
    "meaning": "僵尸猪灵",
    "sentence": "Undead creature with golden sword.",
    "translation": "金剑不死生物。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 24.529,
      "sentenceStart": 26.828,
      "end": 29.23
    }
  },
  {
    "id": "animals_and_friends-p04-c07",
    "word": "Tabby Cat",
    "phonetic": "/ˈtæbi kæt/",
    "meaning": "虎斑猫",
    "sentence": "Cat with dark striped fur.",
    "translation": "深色条纹毛皮猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 30.33,
      "sentenceStart": 32.072,
      "end": 34.063
    }
  },
  {
    "id": "animals_and_friends-p04-c08",
    "word": "Black Cat",
    "phonetic": "/blæk kæt/",
    "meaning": "黑猫",
    "sentence": "Dark cat with yellow eyes.",
    "translation": "深色猫，黄眼睛。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 35.163,
      "sentenceStart": 36.93,
      "end": 38.892
    }
  },
  {
    "id": "animals_and_friends-p04-c09",
    "word": "Red Cat",
    "phonetic": "/rɛd kæt/",
    "meaning": "红猫",
    "sentence": "Cat with orange-and-white fur.",
    "translation": "橙白色毛皮猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 39.992,
      "sentenceStart": 41.7,
      "end": 43.722
    }
  },
  {
    "id": "animals_and_friends-p04-c10",
    "word": "Siamese Cat",
    "phonetic": "/ˌsaɪəˈmiz kæt/",
    "meaning": "暹罗猫",
    "sentence": "Cat with a dark face.",
    "translation": "脸色黝黑的猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 44.822,
      "sentenceStart": 46.76,
      "end": 48.463
    }
  },
  {
    "id": "animals_and_friends-p04-c11",
    "word": "British Shorthair Cat",
    "phonetic": "/ˈbrɪtɪʃ ˈʃɔrˌthɛr kæt/",
    "meaning": "英短",
    "sentence": "Gray cat with orange eyes.",
    "translation": "灰色猫，橙色眼睛。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 49.563,
      "sentenceStart": 51.897,
      "end": 53.896
    }
  },
  {
    "id": "animals_and_friends-p04-c12",
    "word": "Calico Cat",
    "phonetic": "/ˈkæləˌkoʊ kæt/",
    "meaning": "三毛猫",
    "sentence": "Cat with three-colored patches.",
    "translation": "有三色斑块的猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 54.996,
      "sentenceStart": 56.936,
      "end": 59.129
    }
  },
  {
    "id": "animals_and_friends-p04-c13",
    "word": "Persian Cat",
    "phonetic": "/ˈpərʒən kæt/",
    "meaning": "波斯貓",
    "sentence": "Fluffy cat with long fur.",
    "translation": "长毛的蓬松猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 60.229,
      "sentenceStart": 62.108,
      "end": 64.124
    }
  },
  {
    "id": "animals_and_friends-p04-c14",
    "word": "Ragdoll Cat",
    "phonetic": "/ˈræɡdɑl kæt/",
    "meaning": "布偶猫",
    "sentence": "Pale cat with blue eyes.",
    "translation": "苍白的猫，蓝色的眼睛。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 65.224,
      "sentenceStart": 67.114,
      "end": 69.053
    }
  },
  {
    "id": "animals_and_friends-p04-c15",
    "word": "White Cat",
    "phonetic": "/waɪt kæt/",
    "meaning": "只白猫",
    "sentence": "White cat with pink nose.",
    "translation": "粉红色鼻子的白猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_04.mp3",
      "wordStart": 70.153,
      "sentenceStart": 71.818,
      "end": 73.744
    }
  },
  {
    "id": "animals_and_friends-p05-c01",
    "word": "Jellie Cat",
    "phonetic": "/ˈdʒɛli kæt/",
    "meaning": "Jellie Cat",
    "sentence": "A special cat variant.",
    "translation": "一种特殊的猫变种。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.959,
      "end": 3.78
    }
  },
  {
    "id": "animals_and_friends-p05-c02",
    "word": "Toast Rabbit",
    "phonetic": "/toʊst ˈræbɪt/",
    "meaning": "土司兔",
    "sentence": "A special rabbit variant.",
    "translation": "一种特殊的兔子变种。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 4.88,
      "sentenceStart": 6.734,
      "end": 8.635
    }
  },
  {
    "id": "animals_and_friends-p05-c03",
    "word": "Pale Wolf",
    "phonetic": "/peɪl wʊlf/",
    "meaning": "苍白狼",
    "sentence": "A pale wolf variant.",
    "translation": "苍白的狼变种。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 9.735,
      "sentenceStart": 11.447,
      "end": 13.257
    }
  },
  {
    "id": "animals_and_friends-p05-c04",
    "word": "Black Wolf",
    "phonetic": "/blæk wʊlf/",
    "meaning": "黑狼",
    "sentence": "A dark wolf variant.",
    "translation": "黑狼变种。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 14.357,
      "sentenceStart": 16.119,
      "end": 17.876
    }
  },
  {
    "id": "animals_and_friends-p05-c05",
    "word": "Snowy Wolf",
    "phonetic": "/snoʊi wʊlf/",
    "meaning": "雪狼",
    "sentence": "A wolf from snowy places.",
    "translation": "一只来自白雪皑皑地方的狼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 18.976,
      "sentenceStart": 20.738,
      "end": 22.82
    }
  },
  {
    "id": "animals_and_friends-p05-c06",
    "word": "Temperate Frog",
    "phonetic": "/ˈtɛmpərət frɑg/",
    "meaning": "温带青蛙",
    "sentence": "A frog from mild places.",
    "translation": "一只来自温和地方的青蛙。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 23.92,
      "sentenceStart": 25.844,
      "end": 27.862
    }
  },
  {
    "id": "animals_and_friends-p05-c07",
    "word": "Warm Frog",
    "phonetic": "/wɔrm frɑg/",
    "meaning": "暖蛙",
    "sentence": "A frog from warm places.",
    "translation": "一只来自温暖地方的青蛙。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 28.962,
      "sentenceStart": 30.758,
      "end": 32.788
    }
  },
  {
    "id": "animals_and_friends-p05-c08",
    "word": "Cold Frog",
    "phonetic": "/koʊld frɑg/",
    "meaning": "寒蛙",
    "sentence": "A frog from cold places.",
    "translation": "一只来自寒冷地区的青蛙。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 33.888,
      "sentenceStart": 35.698,
      "end": 37.768
    }
  },
  {
    "id": "animals_and_friends-p05-c09",
    "word": "Blue Axolotl",
    "phonetic": "/blu ˌæksəˈlɑtəl/",
    "meaning": "Blue Axolotl",
    "sentence": "A rare blue axolotl.",
    "translation": "一种罕见的蓝色腋窝鸟。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 38.868,
      "sentenceStart": 40.989,
      "end": 42.815
    }
  },
  {
    "id": "animals_and_friends-p05-c10",
    "word": "Gold Axolotl",
    "phonetic": "/goʊld ˌæksəˈlɑtəl/",
    "meaning": "金色Axolotl",
    "sentence": "A golden axolotl.",
    "translation": "一只金黄色的腋窝鸟。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 43.915,
      "sentenceStart": 46.137,
      "end": 47.925
    }
  },
  {
    "id": "animals_and_friends-p05-c11",
    "word": "Brown Mooshroom",
    "phonetic": "/braʊn ˈmuːʃruːm/",
    "meaning": "棕色Mooshroom",
    "sentence": "A rare brown mooshroom.",
    "translation": "罕见的棕色Mooshroom。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 49.025,
      "sentenceStart": 50.903,
      "end": 52.583
    }
  },
  {
    "id": "animals_and_friends-p05-c12",
    "word": "Screaming Goat",
    "phonetic": "/ˈskrimɪŋ goʊt/",
    "meaning": "尖叫的山羊",
    "sentence": "A goat that screams loudly.",
    "translation": "一只大声尖叫的山羊。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 53.683,
      "sentenceStart": 55.549,
      "end": 57.56
    }
  },
  {
    "id": "animals_and_friends-p05-c13",
    "word": "Tamed Wolf",
    "phonetic": "/teɪmd wʊlf/",
    "meaning": "驯狼",
    "sentence": "A wolf that has become a pet.",
    "translation": "一只变成宠物的狼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 58.66,
      "sentenceStart": 60.401,
      "end": 62.843
    }
  },
  {
    "id": "animals_and_friends-p05-c14",
    "word": "Tamed Cat",
    "phonetic": "/teɪmd kæt/",
    "meaning": "驯服猫",
    "sentence": "A cat that has become a pet.",
    "translation": "已成为宠物的猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 63.943,
      "sentenceStart": 65.683,
      "end": 67.967
    }
  },
  {
    "id": "animals_and_friends-p05-c15",
    "word": "Sitting Pet",
    "phonetic": "/ˈsɪtɪŋ pɛt/",
    "meaning": "坐姿宠物",
    "sentence": "A pet waiting in one place.",
    "translation": "一只宠物在一个地方等着。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_05.mp3",
      "wordStart": 69.067,
      "sentenceStart": 70.771,
      "end": 72.771
    }
  },
  {
    "id": "animals_and_friends-p06-c01",
    "word": "Farmer Villager",
    "phonetic": "/ˈfɑrmər ˈvɪlɪʤər/",
    "meaning": "农民村民",
    "sentence": "A villager who farms.",
    "translation": "一个耕种的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.176,
      "end": 3.939
    }
  },
  {
    "id": "animals_and_friends-p06-c02",
    "word": "Librarian Villager",
    "phonetic": "/laɪˈbrɛˌriən ˈvɪlɪʤər/",
    "meaning": "图书管理员村民",
    "sentence": "A villager who works with books.",
    "translation": "一个从事书籍工作的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 5.039,
      "sentenceStart": 7.285,
      "end": 9.544
    }
  },
  {
    "id": "animals_and_friends-p06-c03",
    "word": "Armorer Villager",
    "phonetic": "/ˈɑrmərər ˈvɪlɪʤər/",
    "meaning": "Armorer Villager",
    "sentence": "A villager who works with armor.",
    "translation": "一个使用盔甲的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 10.644,
      "sentenceStart": 12.648,
      "end": 14.886
    }
  },
  {
    "id": "animals_and_friends-p06-c04",
    "word": "Butcher Villager",
    "phonetic": "/ˈbʊʧər ˈvɪlɪʤər/",
    "meaning": "屠夫村民",
    "sentence": "A villager who works with meat.",
    "translation": "一个从事肉类工作的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 15.986,
      "sentenceStart": 17.918,
      "end": 20.081
    }
  },
  {
    "id": "animals_and_friends-p06-c05",
    "word": "Cartographer Villager",
    "phonetic": "/kɑrˈtɑɡrəfər ˈvɪlɪʤər/",
    "meaning": "制图师村民",
    "sentence": "A villager who makes maps.",
    "translation": "制作地图的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 21.181,
      "sentenceStart": 23.603,
      "end": 25.567
    }
  },
  {
    "id": "animals_and_friends-p06-c06",
    "word": "Cleric Villager",
    "phonetic": "/ˈklɛrɪk ˈvɪlɪʤər/",
    "meaning": "牧师村民",
    "sentence": "A villager who brews and heals.",
    "translation": "酿造和治疗的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 26.667,
      "sentenceStart": 28.691,
      "end": 30.892
    }
  },
  {
    "id": "animals_and_friends-p06-c07",
    "word": "Fisherman Villager",
    "phonetic": "/ˈfɪʃərˌmæn ˈvɪlɪʤər/",
    "meaning": "渔民村民",
    "sentence": "A villager who fishes.",
    "translation": "一个钓鱼的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 31.992,
      "sentenceStart": 34.134,
      "end": 35.971
    }
  },
  {
    "id": "animals_and_friends-p06-c08",
    "word": "Fletcher Villager",
    "phonetic": "/ˈflɛʧər ˈvɪlɪʤər/",
    "meaning": "Fletcher Villager",
    "sentence": "A villager who makes arrows.",
    "translation": "制造箭矢的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 37.071,
      "sentenceStart": 38.995,
      "end": 41.054
    }
  },
  {
    "id": "animals_and_friends-p06-c09",
    "word": "Leatherworker Villager",
    "phonetic": "/ˈlɛðərˌwɜrkər ˈvɪlɪʤər/",
    "meaning": "皮革工人村民",
    "sentence": "A villager who works with leather.",
    "translation": "一个使用皮革的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 42.154,
      "sentenceStart": 44.423,
      "end": 46.673
    }
  },
  {
    "id": "animals_and_friends-p06-c10",
    "word": "Mason Villager",
    "phonetic": "/ˈmeɪsən ˈvɪlɪʤər/",
    "meaning": "Mason Villager",
    "sentence": "A villager who works with stone.",
    "translation": "一个用石头工作的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 47.773,
      "sentenceStart": 49.785,
      "end": 51.929
    }
  },
  {
    "id": "animals_and_friends-p06-c11",
    "word": "Shepherd Villager",
    "phonetic": "/ˈʃɛpərd ˈvɪlɪʤər/",
    "meaning": "Shepherd Villager",
    "sentence": "A villager who cares for sheep.",
    "translation": "一个爱护羊群的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 53.029,
      "sentenceStart": 55.014,
      "end": 57.027
    }
  },
  {
    "id": "animals_and_friends-p06-c12",
    "word": "Toolsmith Villager",
    "phonetic": "/ˈtuːlsmɪθ ˈvɪlɪʤər/",
    "meaning": "工具匠村民",
    "sentence": "A villager who makes tools.",
    "translation": "一个制造工具的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 58.127,
      "sentenceStart": 60.295,
      "end": 62.211
    }
  },
  {
    "id": "animals_and_friends-p06-c13",
    "word": "Weaponsmith Villager",
    "phonetic": "/ˈwɛpənsmɪθ ˈvɪlɪʤər/",
    "meaning": "武器匠村民",
    "sentence": "A villager who makes weapons.",
    "translation": "一个制造武器的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 63.311,
      "sentenceStart": 65.657,
      "end": 67.743
    }
  },
  {
    "id": "animals_and_friends-p06-c14",
    "word": "Nitwit Villager",
    "phonetic": "/ˈnɪtwɪt ˈvɪlɪʤər/",
    "meaning": "Nitwit Villager",
    "sentence": "A villager with no job.",
    "translation": "一个没有工作的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 68.843,
      "sentenceStart": 70.86,
      "end": 72.748
    }
  },
  {
    "id": "animals_and_friends-p06-c15",
    "word": "Baby Villager",
    "phonetic": "/ˈbeɪbi ˈvɪlɪʤər/",
    "meaning": "婴儿村民",
    "sentence": "A young villager.",
    "translation": "一个年轻的村民。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_06.mp3",
      "wordStart": 73.848,
      "sentenceStart": 75.73,
      "end": 77.13
    }
  },
  {
    "id": "animals_and_friends-p07-c01",
    "word": "Baby Cow",
    "phonetic": "/ˈbeɪbi kaʊ/",
    "meaning": "奶牛宝宝",
    "sentence": "A young cow.",
    "translation": "一头年轻的母牛。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.875,
      "end": 3.147
    }
  },
  {
    "id": "animals_and_friends-p07-c02",
    "word": "Baby Pig",
    "phonetic": "/ˈbeɪbi pɪg/",
    "meaning": "小猪",
    "sentence": "A young pig.",
    "translation": "一只年轻的猪。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 4.247,
      "sentenceStart": 5.951,
      "end": 7.205
    }
  },
  {
    "id": "animals_and_friends-p07-c03",
    "word": "Baby Sheep",
    "phonetic": "/ˈbeɪbi ʃip/",
    "meaning": "小绵羊",
    "sentence": "A young sheep.",
    "translation": "一只小羊。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 8.305,
      "sentenceStart": 10.026,
      "end": 11.401
    }
  },
  {
    "id": "animals_and_friends-p07-c04",
    "word": "Baby Chicken",
    "phonetic": "/ˈbeɪbi ˈʧɪkən/",
    "meaning": "小鸡",
    "sentence": "A young chicken.",
    "translation": "童子鸡",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 12.501,
      "sentenceStart": 14.313,
      "end": 15.685
    }
  },
  {
    "id": "animals_and_friends-p07-c05",
    "word": "Baby Horse",
    "phonetic": "/ˈbeɪbi hɔrs/",
    "meaning": "马宝宝",
    "sentence": "A young horse.",
    "translation": "幼马",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 16.785,
      "sentenceStart": 18.597,
      "end": 19.888
    }
  },
  {
    "id": "animals_and_friends-p07-c06",
    "word": "Baby Wolf",
    "phonetic": "/ˈbeɪbi wʊlf/",
    "meaning": "小狼",
    "sentence": "A young wolf.",
    "translation": "一只年轻的狼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 20.988,
      "sentenceStart": 22.747,
      "end": 24.047
    }
  },
  {
    "id": "animals_and_friends-p07-c07",
    "word": "Baby Cat",
    "phonetic": "/ˈbeɪbi kæt/",
    "meaning": "小猫咪",
    "sentence": "A young cat.",
    "translation": "一只小猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 25.147,
      "sentenceStart": 26.887,
      "end": 28.171
    }
  },
  {
    "id": "animals_and_friends-p07-c08",
    "word": "Baby Rabbit",
    "phonetic": "/ˈbeɪbi ˈræbɪt/",
    "meaning": "小兔子",
    "sentence": "A young rabbit.",
    "translation": "一只小兔子。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 29.271,
      "sentenceStart": 31.108,
      "end": 32.486
    }
  },
  {
    "id": "animals_and_friends-p07-c09",
    "word": "Baby Turtle",
    "phonetic": "/ˈbeɪbi ˈtərtəl/",
    "meaning": "小乌龟",
    "sentence": "A young turtle.",
    "translation": "一只小乌龟。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 33.586,
      "sentenceStart": 35.418,
      "end": 36.782
    }
  },
  {
    "id": "animals_and_friends-p07-c10",
    "word": "Baby Panda",
    "phonetic": "/ˈbeɪbi ˈpændə/",
    "meaning": "熊猫宝宝",
    "sentence": "A young panda.",
    "translation": "一只小熊猫。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 37.882,
      "sentenceStart": 39.736,
      "end": 41.058
    }
  },
  {
    "id": "animals_and_friends-p07-c11",
    "word": "Baby Fox",
    "phonetic": "/ˈbeɪbi fɑks/",
    "meaning": "狐狸宝宝",
    "sentence": "A young fox.",
    "translation": "一只小狐狸。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 42.158,
      "sentenceStart": 44.004,
      "end": 45.367
    }
  },
  {
    "id": "animals_and_friends-p07-c12",
    "word": "Baby Camel",
    "phonetic": "/ˈbeɪbi ˈkæməl/",
    "meaning": "小骆驼",
    "sentence": "A young camel.",
    "translation": "一只年轻的骆驼。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 46.467,
      "sentenceStart": 48.274,
      "end": 49.584
    }
  },
  {
    "id": "animals_and_friends-p07-c13",
    "word": "Pet Collar",
    "phonetic": "/pɛt ˈkɑlər/",
    "meaning": "宠物项圈",
    "sentence": "A collar for a pet.",
    "translation": "宠物项圈。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 50.684,
      "sentenceStart": 52.377,
      "end": 53.973
    }
  },
  {
    "id": "animals_and_friends-p07-c14",
    "word": "Pet Pen",
    "phonetic": "/pɛt pɛn/",
    "meaning": "宠物笔",
    "sentence": "A small safe place for pets.",
    "translation": "一个小小的安全宠物场所。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 55.073,
      "sentenceStart": 56.702,
      "end": 58.869
    }
  },
  {
    "id": "animals_and_friends-p07-c15",
    "word": "Feeding Time",
    "phonetic": "/ˈfidɪŋ taɪm/",
    "meaning": "喂食时间",
    "sentence": "Time to feed an animal.",
    "translation": "是时候给动物喂食了。",
    "category": "动物与伙伴",
    "audio": {
      "src": "/audio/animals_and_friends/page_07.mp3",
      "wordStart": 59.969,
      "sentenceStart": 61.803,
      "end": 63.574
    }
  },
  {
    "id": "monsters_and_bosses-p01-c01",
    "word": "Zombie",
    "phonetic": "/ˈzɑmbi/",
    "meaning": "僵尸",
    "sentence": "A slow monster.",
    "translation": "一个缓慢的怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 5.966,
      "sentenceStart": 7.376,
      "end": 8.859
    }
  },
  {
    "id": "monsters_and_bosses-p01-c02",
    "word": "Skeleton",
    "phonetic": "/ˈskɛlətən/",
    "meaning": "骷髅",
    "sentence": "A bony archer.",
    "translation": "骨头弓箭手。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 9.959,
      "sentenceStart": 11.539,
      "end": 12.969
    }
  },
  {
    "id": "monsters_and_bosses-p01-c03",
    "word": "Creeper",
    "phonetic": "/ˈkriːpər/",
    "meaning": "苦力怕",
    "sentence": "A green monster.",
    "translation": "绿怪",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 14.069,
      "sentenceStart": 15.604,
      "end": 17.101
    }
  },
  {
    "id": "monsters_and_bosses-p01-c04",
    "word": "Spider",
    "phonetic": "/ˈspaɪdər/",
    "meaning": "蜘蛛",
    "sentence": "A crawling spider.",
    "translation": "一只爬行的蜘蛛。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 18.201,
      "sentenceStart": 19.671,
      "end": 21.174
    }
  },
  {
    "id": "monsters_and_bosses-p01-c05",
    "word": "Enderman",
    "phonetic": "/ˈɛndərmæn/",
    "meaning": "末影人",
    "sentence": "A tall dark monster.",
    "translation": "一个高大的黑暗怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 22.274,
      "sentenceStart": 23.845,
      "end": 25.633
    }
  },
  {
    "id": "monsters_and_bosses-p01-c06",
    "word": "Witch",
    "phonetic": "/wɪʧ/",
    "meaning": "女巫",
    "sentence": "A magic witch.",
    "translation": "一个魔法女巫。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 26.733,
      "sentenceStart": 28.069,
      "end": 29.427
    }
  },
  {
    "id": "monsters_and_bosses-p01-c07",
    "word": "Slime",
    "phonetic": "/slaɪm/",
    "meaning": "史莱姆",
    "sentence": "A bouncy slime.",
    "translation": "有弹性的粘液。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 30.527,
      "sentenceStart": 31.914,
      "end": 33.448
    }
  },
  {
    "id": "monsters_and_bosses-p01-c08",
    "word": "Drowned",
    "phonetic": "/draʊnd/",
    "meaning": "溺尸",
    "sentence": "A water zombie.",
    "translation": "一个水僵尸。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 34.548,
      "sentenceStart": 35.978,
      "end": 37.39
    }
  },
  {
    "id": "monsters_and_bosses-p01-c09",
    "word": "Husk",
    "phonetic": "/həsk/",
    "meaning": "尸壳",
    "sentence": "A desert zombie.",
    "translation": "沙漠僵尸。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 38.49,
      "sentenceStart": 39.945,
      "end": 41.473
    }
  },
  {
    "id": "monsters_and_bosses-p01-c10",
    "word": "Pillager",
    "phonetic": "/ˈpɪlɪʤər/",
    "meaning": "掠夺者",
    "sentence": "A dangerous raider.",
    "translation": "一个危险的突袭者。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 42.573,
      "sentenceStart": 44.144,
      "end": 45.797
    }
  },
  {
    "id": "monsters_and_bosses-p01-c11",
    "word": "Blaze",
    "phonetic": "/bleɪz/",
    "meaning": "烈焰人",
    "sentence": "A fiery monster.",
    "translation": "一个火热的怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 46.897,
      "sentenceStart": 48.38,
      "end": 49.972
    }
  },
  {
    "id": "monsters_and_bosses-p01-c12",
    "word": "Ghast",
    "phonetic": "/ɡæst/",
    "meaning": "恶魂",
    "sentence": "A floating monster.",
    "translation": "一只漂浮的怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_01.mp3",
      "wordStart": 51.072,
      "sentenceStart": 52.509,
      "end": 54.136
    }
  },
  {
    "id": "monsters_and_bosses-p02-c01",
    "word": "Magma Cube",
    "phonetic": "/ˈmægmə kjub/",
    "meaning": "岩浆怪",
    "sentence": "A hot bouncing cube.",
    "translation": "一个热弹跳的立方体。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.042,
      "end": 3.863
    }
  },
  {
    "id": "monsters_and_bosses-p02-c02",
    "word": "Wither Skeleton",
    "phonetic": "/ˈwɪðər ˈskɛlətən/",
    "meaning": "凋灵骷髅",
    "sentence": "A dark skeleton.",
    "translation": "一具黑暗的骷髅。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 4.963,
      "sentenceStart": 7.025,
      "end": 8.592
    }
  },
  {
    "id": "monsters_and_bosses-p02-c03",
    "word": "Guardian",
    "phonetic": "/ˈgɑrdiən/",
    "meaning": "守卫者",
    "sentence": "A sea guardian.",
    "translation": "海上守护者。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 9.692,
      "sentenceStart": 11.227,
      "end": 12.673
    }
  },
  {
    "id": "monsters_and_bosses-p02-c04",
    "word": "Elder Guardian",
    "phonetic": "/ˈɛldər ˈgɑrdiən/",
    "meaning": "远古守卫者",
    "sentence": "A big sea guardian.",
    "translation": "大海守护者。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 13.773,
      "sentenceStart": 15.738,
      "end": 17.326
    }
  },
  {
    "id": "monsters_and_bosses-p02-c05",
    "word": "Warden",
    "phonetic": "/ˈwɔrdən/",
    "meaning": "监守者",
    "sentence": "A very strong monster.",
    "translation": "一个非常强大的怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 18.426,
      "sentenceStart": 19.842,
      "end": 21.643
    }
  },
  {
    "id": "monsters_and_bosses-p02-c06",
    "word": "Phantom",
    "phonetic": "/ˈfænəm/",
    "meaning": "幻翼",
    "sentence": "A flying night monster.",
    "translation": "飞翔的夜间怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 22.743,
      "sentenceStart": 24.276,
      "end": 26.089
    }
  },
  {
    "id": "monsters_and_bosses-p02-c07",
    "word": "Ravager",
    "phonetic": "/ˈrævɪdʒər/",
    "meaning": "劫掠兽",
    "sentence": "A huge raider beast.",
    "translation": "一只巨大的突袭兽。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 27.189,
      "sentenceStart": 28.688,
      "end": 30.483
    }
  },
  {
    "id": "monsters_and_bosses-p02-c08",
    "word": "Vex",
    "phonetic": "/vɛks/",
    "meaning": "恼鬼",
    "sentence": "A tiny flying enemy.",
    "translation": "一个小小的飞行敌人。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 31.583,
      "sentenceStart": 32.966,
      "end": 34.865
    }
  },
  {
    "id": "monsters_and_bosses-p02-c09",
    "word": "Evoker",
    "phonetic": "/ɪˈvoʊkər/",
    "meaning": "唤魔者",
    "sentence": "A magic raider.",
    "translation": "一个魔法突袭者。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 35.965,
      "sentenceStart": 37.497,
      "end": 38.875
    }
  },
  {
    "id": "monsters_and_bosses-p02-c10",
    "word": "Vindicator",
    "phonetic": "/vɪndəˈkeɪtər/",
    "meaning": "卫道士",
    "sentence": "A strong raider.",
    "translation": "强大的突袭者。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 39.975,
      "sentenceStart": 41.754,
      "end": 43.151
    }
  },
  {
    "id": "monsters_and_bosses-p02-c11",
    "word": "Piglin",
    "phonetic": "/ˈpɪɡlɪn/",
    "meaning": "猪灵",
    "sentence": "A nether creature.",
    "translation": "幽冥生物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 44.251,
      "sentenceStart": 45.822,
      "end": 47.306
    }
  },
  {
    "id": "monsters_and_bosses-p02-c12",
    "word": "Piglin Brute",
    "phonetic": "/ˈpɪɡlɪn brut/",
    "meaning": "猪灵蛮兵",
    "sentence": "A strong piglin.",
    "translation": "强壮的猪笼草。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 48.406,
      "sentenceStart": 50.364,
      "end": 51.867
    }
  },
  {
    "id": "monsters_and_bosses-p02-c13",
    "word": "Ender Dragon",
    "phonetic": "/ˈɛndər ˈdrægən/",
    "meaning": "末影龙",
    "sentence": "A giant dragon.",
    "translation": "一头巨龙",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 52.967,
      "sentenceStart": 54.891,
      "end": 56.417
    }
  },
  {
    "id": "monsters_and_bosses-p02-c14",
    "word": "Wither",
    "phonetic": "/ˈwɪðər/",
    "meaning": "凋灵",
    "sentence": "A dark boss.",
    "translation": "一个黑暗的老板。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 57.517,
      "sentenceStart": 58.869,
      "end": 60.218
    }
  },
  {
    "id": "monsters_and_bosses-p02-c15",
    "word": "Sulfur Cube",
    "phonetic": "/ˈsəlfər kjub/",
    "meaning": "硫磺方块",
    "sentence": "A yellow bouncing monster.",
    "translation": "黄色蹦蹦跳跳的怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_02.mp3",
      "wordStart": 61.318,
      "sentenceStart": 63.172,
      "end": 65.208
    }
  },
  {
    "id": "monsters_and_bosses-p03-c01",
    "word": "Bogged",
    "phonetic": "/bɔgd/",
    "meaning": "沼骸",
    "sentence": "Skeleton shooting poison arrows.",
    "translation": "骷髅射毒箭。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.615,
      "end": 3.98
    }
  },
  {
    "id": "monsters_and_bosses-p03-c02",
    "word": "Breeze",
    "phonetic": "/briz/",
    "meaning": "旋风人",
    "sentence": "Creature that attacks with wind.",
    "translation": "用风攻击的生物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 5.08,
      "sentenceStart": 6.563,
      "end": 8.651
    }
  },
  {
    "id": "monsters_and_bosses-p03-c03",
    "word": "Camel Husk",
    "phonetic": "/ˈkæməl həsk/",
    "meaning": "骆驼尸壳",
    "sentence": "Undead desert camel.",
    "translation": "不死沙漠骆驼。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 9.751,
      "sentenceStart": 11.579,
      "end": 13.426
    }
  },
  {
    "id": "monsters_and_bosses-p03-c04",
    "word": "Cave Spider",
    "phonetic": "/keɪv ˈspaɪdər/",
    "meaning": "洞穴蜘蛛",
    "sentence": "Small spider that poisons players.",
    "translation": "毒害玩家的小蜘蛛。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 14.526,
      "sentenceStart": 16.351,
      "end": 18.862
    }
  },
  {
    "id": "monsters_and_bosses-p03-c05",
    "word": "Creaking",
    "phonetic": "/ˈkrikɪŋ/",
    "meaning": "嘎枝",
    "sentence": "Tree-like monster with glowing eyes.",
    "translation": "眼睛发光的树状怪物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 19.962,
      "sentenceStart": 21.508,
      "end": 23.932
    }
  },
  {
    "id": "monsters_and_bosses-p03-c06",
    "word": "Endermite",
    "phonetic": "/ˈɛndərmaɪt/",
    "meaning": "末影螨",
    "sentence": "Tiny many-legged purple creature.",
    "translation": "多条腿的紫色小生物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 25.032,
      "sentenceStart": 26.648,
      "end": 29.09
    }
  },
  {
    "id": "monsters_and_bosses-p03-c07",
    "word": "Hoglin",
    "phonetic": "/ˈhɑɡlɪn/",
    "meaning": "疣猪兽",
    "sentence": "Tusked beast from the Nether.",
    "translation": "有牙的冥兽。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 30.19,
      "sentenceStart": 31.678,
      "end": 33.651
    }
  },
  {
    "id": "monsters_and_bosses-p03-c08",
    "word": "Parched",
    "phonetic": "/pɑrʧt/",
    "meaning": "焦骸",
    "sentence": "Desert skeleton shooting weakening arrows.",
    "translation": "沙漠骷髅射击弱化箭。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 34.751,
      "sentenceStart": 36.237,
      "end": 39.051
    }
  },
  {
    "id": "monsters_and_bosses-p03-c09",
    "word": "Shulker",
    "phonetic": "/ˈʃʌlkər/",
    "meaning": "潜影贝",
    "sentence": "Creature inside a hard shell.",
    "translation": "硬壳中的生物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 40.151,
      "sentenceStart": 41.661,
      "end": 43.664
    }
  },
  {
    "id": "monsters_and_bosses-p03-c10",
    "word": "Silverfish",
    "phonetic": "/ˈsɪlvərfɪʃ/",
    "meaning": "蠹虫",
    "sentence": "Tiny creature hiding in stone.",
    "translation": "躲在石头里的小生物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 44.764,
      "sentenceStart": 46.489,
      "end": 48.684
    }
  },
  {
    "id": "monsters_and_bosses-p03-c11",
    "word": "Stray",
    "phonetic": "/streɪ/",
    "meaning": "流浪者",
    "sentence": "Skeleton shooting slowing arrows.",
    "translation": "骷髅射击减速箭。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 49.784,
      "sentenceStart": 51.164,
      "end": 53.477
    }
  },
  {
    "id": "monsters_and_bosses-p03-c12",
    "word": "Zoglin",
    "phonetic": "/ˈzɑɡlɪn/",
    "meaning": "僵尸疣猪兽",
    "sentence": "Undead beast with large tusks.",
    "translation": "长着大牙的亡灵野兽。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 54.577,
      "sentenceStart": 56.052,
      "end": 58.457
    }
  },
  {
    "id": "monsters_and_bosses-p03-c13",
    "word": "Zombie Nautilus",
    "phonetic": "/ˈzɑmbi ˈnɔtələs/",
    "meaning": "僵尸鹦鹉螺",
    "sentence": "Undead underwater mount.",
    "translation": "不死水下坐骑。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 59.557,
      "sentenceStart": 61.601,
      "end": 63.605
    }
  },
  {
    "id": "monsters_and_bosses-p03-c14",
    "word": "Zombie Villager",
    "phonetic": "/ˈzɑmbi ˈvɪlɪʤər/",
    "meaning": "僵尸村民",
    "sentence": "Villager turned into a zombie.",
    "translation": "村民变成了僵尸。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 64.705,
      "sentenceStart": 66.604,
      "end": 68.718
    }
  },
  {
    "id": "monsters_and_bosses-p03-c15",
    "word": "Giant",
    "phonetic": "/ʤaɪənt/",
    "meaning": "巨人",
    "sentence": "Huge zombie-shaped creature.",
    "translation": "巨大的僵尸形状的生物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_03.mp3",
      "wordStart": 69.818,
      "sentenceStart": 71.272,
      "end": 73.244
    }
  },
  {
    "id": "monsters_and_bosses-p04-c01",
    "word": "Illusioner",
    "phonetic": "/ɪˈluːʒənər/",
    "meaning": "幻术师",
    "sentence": "Mysterious enemy using magic.",
    "translation": "使用魔法的神秘敌人。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.767,
      "end": 4.272
    }
  },
  {
    "id": "monsters_and_bosses-p04-c02",
    "word": "The Killer Bunny",
    "phonetic": "/ðə ˈkɪlər ˈbəni/",
    "meaning": "杀手兔",
    "sentence": "A rare hostile rabbit.",
    "translation": "一种罕见的敌对兔子。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 5.372,
      "sentenceStart": 7.372,
      "end": 9.28
    }
  },
  {
    "id": "monsters_and_bosses-p04-c03",
    "word": "Skeleton Horse",
    "phonetic": "/ˈskɛlətən hɔrs/",
    "meaning": "骷髅马",
    "sentence": "Horse made of bones.",
    "translation": "用骨头做成的马。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 10.38,
      "sentenceStart": 12.376,
      "end": 14.002
    }
  },
  {
    "id": "monsters_and_bosses-p04-c04",
    "word": "Snow Golem",
    "phonetic": "/snoʊ ˈgoʊləm/",
    "meaning": "雪傀儡",
    "sentence": "Snowy helper throwing snowballs.",
    "translation": "白雪皑皑的帮手扔雪球。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 15.102,
      "sentenceStart": 16.881,
      "end": 19.221
    }
  },
  {
    "id": "monsters_and_bosses-p04-c05",
    "word": "Zombie Horse",
    "phonetic": "/ˈzɑmbi hɔrs/",
    "meaning": "僵尸马",
    "sentence": "Rideable undead horse.",
    "translation": "可骑乘的不死马。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 20.321,
      "sentenceStart": 22.191,
      "end": 24.052
    }
  },
  {
    "id": "monsters_and_bosses-p04-c06",
    "word": "Charged Creeper",
    "phonetic": "/ʧɑrʤd ˈkriːpər/",
    "meaning": "充电爬虫",
    "sentence": "Creeper charged by lightning.",
    "translation": "爬行者被闪电充电。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 25.152,
      "sentenceStart": 27.112,
      "end": 29.112
    }
  },
  {
    "id": "monsters_and_bosses-p04-c07",
    "word": "Baby Zombie",
    "phonetic": "/ˈbeɪbi ˈzɑmbi/",
    "meaning": "婴儿僵尸",
    "sentence": "Small fast-running zombie.",
    "translation": "跑得很快的小僵尸。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 30.212,
      "sentenceStart": 32.066,
      "end": 33.989
    }
  },
  {
    "id": "monsters_and_bosses-p04-c08",
    "word": "Baby Husk",
    "phonetic": "/ˈbeɪbi həsk/",
    "meaning": "婴儿外壳",
    "sentence": "Small fast desert zombie.",
    "translation": "小型快速沙漠僵尸。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 35.089,
      "sentenceStart": 36.835,
      "end": 38.904
    }
  },
  {
    "id": "monsters_and_bosses-p04-c09",
    "word": "Baby Drowned",
    "phonetic": "/ˈbeɪbi draʊnd/",
    "meaning": "婴儿溺水",
    "sentence": "Small underwater zombie.",
    "translation": "水下小僵尸。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 40.004,
      "sentenceStart": 41.842,
      "end": 43.824
    }
  },
  {
    "id": "monsters_and_bosses-p04-c10",
    "word": "Baby Zombie Villager",
    "phonetic": "/ˈbeɪbi ˈzɑmbi ˈvɪlɪʤər/",
    "meaning": "婴儿僵尸村民",
    "sentence": "Small zombified villager.",
    "translation": "小僵尸村民。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 44.924,
      "sentenceStart": 47.445,
      "end": 49.54
    }
  },
  {
    "id": "monsters_and_bosses-p04-c11",
    "word": "Baby Zombified Piglin",
    "phonetic": "/ˈbeɪbi ˈzɑmbɪfaɪd ˈpɪɡlɪn/",
    "meaning": "婴儿僵尸小猪",
    "sentence": "Small pig-like undead creature.",
    "translation": "像猪一样的小不死生物。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 50.64,
      "sentenceStart": 53.452,
      "end": 55.746
    }
  },
  {
    "id": "monsters_and_bosses-p04-c12",
    "word": "Chicken Jockey",
    "phonetic": "/ˈʧɪkən ˈʤɑki/",
    "meaning": "Chicken Jockey",
    "sentence": "Small zombie riding a chicken.",
    "translation": "骑着鸡的小僵尸。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 56.846,
      "sentenceStart": 58.788,
      "end": 61.001
    }
  },
  {
    "id": "monsters_and_bosses-p04-c13",
    "word": "Spider Jockey",
    "phonetic": "/ˈspaɪdər ˈʤɑki/",
    "meaning": "蜘蛛骑师",
    "sentence": "Skeleton riding a spider.",
    "translation": "骷髅骑着蜘蛛。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 62.101,
      "sentenceStart": 64.03,
      "end": 65.964
    }
  },
  {
    "id": "monsters_and_bosses-p04-c14",
    "word": "Skeleton Trap Horse",
    "phonetic": "/ˈskɛlətən træp hɔrs/",
    "meaning": "骷髅陷阱马",
    "sentence": "Bony horse hiding an ambush.",
    "translation": "瘦骨马躲着埋伏。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 67.064,
      "sentenceStart": 69.435,
      "end": 71.591
    }
  },
  {
    "id": "monsters_and_bosses-p04-c15",
    "word": "Raider Captain",
    "phonetic": "/ˈreɪdər ˈkæptən/",
    "meaning": "突袭者队长",
    "sentence": "Raider carrying an ominous banner.",
    "translation": "突袭者拿着一面不祥的旗帜。",
    "category": "怪物与首领",
    "audio": {
      "src": "/audio/monsters_and_bosses/page_04.mp3",
      "wordStart": 72.691,
      "sentenceStart": 74.608,
      "end": 76.958
    }
  },
  {
    "id": "food_and_farming-p01-c01",
    "word": "Apple",
    "phonetic": "/ˈæpəl/",
    "meaning": "苹果",
    "sentence": "A red apple.",
    "translation": "一个红苹果。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 5.462,
      "sentenceStart": 6.872,
      "end": 8.182
    }
  },
  {
    "id": "food_and_farming-p01-c02",
    "word": "Bread",
    "phonetic": "/brɛd/",
    "meaning": "面包",
    "sentence": "A loaf of bread.",
    "translation": "一条面包。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 9.282,
      "sentenceStart": 10.661,
      "end": 12.158
    }
  },
  {
    "id": "food_and_farming-p01-c03",
    "word": "Carrot",
    "phonetic": "/ˈkɛrət/",
    "meaning": "胡萝卜",
    "sentence": "An orange carrot.",
    "translation": "橙色胡萝卜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 13.258,
      "sentenceStart": 14.695,
      "end": 16.242
    }
  },
  {
    "id": "food_and_farming-p01-c04",
    "word": "Potato",
    "phonetic": "/pəˈteɪˌtoʊ/",
    "meaning": "马铃薯",
    "sentence": "A brown potato.",
    "translation": "一个棕色马铃薯。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 17.342,
      "sentenceStart": 19.016,
      "end": 20.565
    }
  },
  {
    "id": "food_and_farming-p01-c05",
    "word": "Wheat",
    "phonetic": "/wit/",
    "meaning": "小麦",
    "sentence": "Golden wheat.",
    "translation": "金稞",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 21.665,
      "sentenceStart": 22.969,
      "end": 24.248
    }
  },
  {
    "id": "food_and_farming-p01-c06",
    "word": "Pumpkin",
    "phonetic": "/ˈpəmpkɪn/",
    "meaning": "南瓜",
    "sentence": "A big pumpkin.",
    "translation": "一个大南瓜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 25.348,
      "sentenceStart": 26.933,
      "end": 28.392
    }
  },
  {
    "id": "food_and_farming-p01-c07",
    "word": "Melon",
    "phonetic": "/ˈmɛlən/",
    "meaning": "西瓜",
    "sentence": "A green melon.",
    "translation": "一个青瓜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 29.492,
      "sentenceStart": 30.852,
      "end": 32.207
    }
  },
  {
    "id": "food_and_farming-p01-c08",
    "word": "Egg",
    "phonetic": "/ɛg/",
    "meaning": "鸡蛋",
    "sentence": "A small egg.",
    "translation": "一个小鸡蛋。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 33.307,
      "sentenceStart": 34.567,
      "end": 35.881
    }
  },
  {
    "id": "food_and_farming-p01-c09",
    "word": "Milk",
    "phonetic": "/mɪlk/",
    "meaning": "奶",
    "sentence": "A bucket of milk.",
    "translation": "一桶牛奶。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 36.981,
      "sentenceStart": 38.341,
      "end": 39.869
    }
  },
  {
    "id": "food_and_farming-p01-c10",
    "word": "Cake",
    "phonetic": "/keɪk/",
    "meaning": "蛋糕",
    "sentence": "A sweet cake.",
    "translation": "一个甜蜜的蛋糕。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 40.969,
      "sentenceStart": 42.323,
      "end": 43.738
    }
  },
  {
    "id": "food_and_farming-p01-c11",
    "word": "Cookie",
    "phonetic": "/ˈkʊki/",
    "meaning": "曲奇",
    "sentence": "A small cookie.",
    "translation": "一块小饼干。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 44.838,
      "sentenceStart": 46.348,
      "end": 47.725
    }
  },
  {
    "id": "food_and_farming-p01-c12",
    "word": "Cooked Beef",
    "phonetic": "/kʊkt bif/",
    "meaning": "熟牛肉",
    "sentence": "A cooked meal.",
    "translation": "一顿熟食。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_01.mp3",
      "wordStart": 48.825,
      "sentenceStart": 50.592,
      "end": 51.87
    }
  },
  {
    "id": "food_and_farming-p02-c01",
    "word": "Beetroot",
    "phonetic": "/ˈbiːtruːt/",
    "meaning": "甜菜根",
    "sentence": "A red beetroot.",
    "translation": "红甜菜根。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.767,
      "end": 3.205
    }
  },
  {
    "id": "food_and_farming-p02-c02",
    "word": "Sweet Berries",
    "phonetic": "/swit ˈbɛriz/",
    "meaning": "甜浆果",
    "sentence": "Small red berries.",
    "translation": "小红浆果。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 4.305,
      "sentenceStart": 6.155,
      "end": 7.761
    }
  },
  {
    "id": "food_and_farming-p02-c03",
    "word": "Glow Berries",
    "phonetic": "/gloʊ ˈbɛriz/",
    "meaning": "发光浆果",
    "sentence": "Bright cave berries.",
    "translation": "明亮的洞穴浆果。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 8.861,
      "sentenceStart": 10.677,
      "end": 12.277
    }
  },
  {
    "id": "food_and_farming-p02-c04",
    "word": "Honey Bottle",
    "phonetic": "/ˈhəni ˈbɑtəl/",
    "meaning": "蜂蜜瓶",
    "sentence": "A sweet honey bottle.",
    "translation": "甜蜜的蜂蜜瓶。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 13.377,
      "sentenceStart": 15.169,
      "end": 16.87
    }
  },
  {
    "id": "food_and_farming-p02-c05",
    "word": "Golden Apple",
    "phonetic": "/ˈgoʊldən ˈæpəl/",
    "meaning": "金苹果",
    "sentence": "A shiny apple.",
    "translation": "一个闪亮的苹果。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 17.97,
      "sentenceStart": 19.874,
      "end": 21.269
    }
  },
  {
    "id": "food_and_farming-p02-c06",
    "word": "Mushroom Stew",
    "phonetic": "/ˈməʃrum stu/",
    "meaning": "蘑菇煲",
    "sentence": "A warm stew.",
    "translation": "热炖菜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 22.369,
      "sentenceStart": 24.236,
      "end": 25.557
    }
  },
  {
    "id": "food_and_farming-p02-c07",
    "word": "Cooked Chicken",
    "phonetic": "/kʊkt ˈʧɪkən/",
    "meaning": "熟鸡肉",
    "sentence": "Cooked chicken ready to eat.",
    "translation": "熟鸡即食。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 26.657,
      "sentenceStart": 28.517,
      "end": 30.509
    }
  },
  {
    "id": "food_and_farming-p02-c08",
    "word": "Cooked Cod",
    "phonetic": "/kʊkt ˈsiˈoʊˈdi/",
    "meaning": "熟鳕鱼",
    "sentence": "A cooked fish.",
    "translation": "煮熟的鱼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 31.609,
      "sentenceStart": 33.388,
      "end": 34.676
    }
  },
  {
    "id": "food_and_farming-p02-c09",
    "word": "Cooked Salmon",
    "phonetic": "/kʊkt ˈsæmən/",
    "meaning": "熟鲑鱼",
    "sentence": "Cooked salmon ready to eat.",
    "translation": "煮熟的三文鱼即食。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 35.776,
      "sentenceStart": 37.553,
      "end": 39.481
    }
  },
  {
    "id": "food_and_farming-p02-c10",
    "word": "Pumpkin Pie",
    "phonetic": "/ˈpəmpkɪn paɪ/",
    "meaning": "南瓜派",
    "sentence": "A sweet pie.",
    "translation": "甜馅饼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 40.581,
      "sentenceStart": 42.511,
      "end": 43.87
    }
  },
  {
    "id": "food_and_farming-p02-c11",
    "word": "Farm",
    "phonetic": "/fɑrm/",
    "meaning": "发育",
    "sentence": "A place to grow food.",
    "translation": "种植食物的地方。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 44.97,
      "sentenceStart": 46.33,
      "end": 48.083
    }
  },
  {
    "id": "food_and_farming-p02-c12",
    "word": "Seeds",
    "phonetic": "/sidz/",
    "meaning": "种源",
    "sentence": "Tiny seeds.",
    "translation": "微小的种子。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 49.183,
      "sentenceStart": 50.613,
      "end": 51.949
    }
  },
  {
    "id": "food_and_farming-p02-c13",
    "word": "Hay Bale",
    "phonetic": "/heɪ beɪl/",
    "meaning": "干草捆",
    "sentence": "A block of hay.",
    "translation": "一块干草。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 53.049,
      "sentenceStart": 54.629,
      "end": 56.036
    }
  },
  {
    "id": "food_and_farming-p02-c14",
    "word": "Composter",
    "phonetic": "/kəmˈpoʊstər/",
    "meaning": "堆肥桶",
    "sentence": "A farm helper.",
    "translation": "一个农场帮手。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 57.136,
      "sentenceStart": 58.861,
      "end": 60.272
    }
  },
  {
    "id": "food_and_farming-p02-c15",
    "word": "Water Bucket",
    "phonetic": "/ˈwɔtər ˈbəkɪt/",
    "meaning": "水桶",
    "sentence": "Water for the farm.",
    "translation": "农场用水。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_02.mp3",
      "wordStart": 61.372,
      "sentenceStart": 63.21,
      "end": 64.798
    }
  },
  {
    "id": "food_and_farming-p03-c01",
    "word": "Enchanted Golden Apple",
    "phonetic": "/ɛnˈʧænɪd ˈgoʊldən ˈæpəl/",
    "meaning": "附魔金苹果",
    "sentence": "Rare fruit with magical effects.",
    "translation": "具有神奇效果的稀有水果。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.82,
      "end": 5.208
    }
  },
  {
    "id": "food_and_farming-p03-c02",
    "word": "Golden Carrot",
    "phonetic": "/ˈgoʊldən ˈkɛrət/",
    "meaning": "金胡萝卜",
    "sentence": "Golden food that restores hunger.",
    "translation": "恢复饥饿的黄金食物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 6.308,
      "sentenceStart": 8.27,
      "end": 10.802
    }
  },
  {
    "id": "food_and_farming-p03-c03",
    "word": "Baked Potato",
    "phonetic": "/beɪkt pəˈteɪˌtoʊ/",
    "meaning": "烤马铃薯",
    "sentence": "Potato cooked for eating.",
    "translation": "马铃薯煮熟食用。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 11.902,
      "sentenceStart": 13.885,
      "end": 15.775
    }
  },
  {
    "id": "food_and_farming-p03-c04",
    "word": "Poisonous Potato",
    "phonetic": "/ˈpɔɪzənəs pəˈteɪˌtoʊ/",
    "meaning": "毒马铃薯",
    "sentence": "Potato that can poison.",
    "translation": "可以下毒的马铃薯。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 16.875,
      "sentenceStart": 19.143,
      "end": 21.071
    }
  },
  {
    "id": "food_and_farming-p03-c05",
    "word": "Beetroot Soup",
    "phonetic": "/ˈbiːtruːt sup/",
    "meaning": "甜菜汤",
    "sentence": "Beetroot soup in a bowl.",
    "translation": "碗里的甜菜根汤。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 22.171,
      "sentenceStart": 24.088,
      "end": 25.909
    }
  },
  {
    "id": "food_and_farming-p03-c06",
    "word": "Rabbit Stew",
    "phonetic": "/ˈræbɪt stu/",
    "meaning": "兔肉煲",
    "sentence": "Meal with rabbit and vegetables.",
    "translation": "与兔子和蔬菜一起用餐。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 27.009,
      "sentenceStart": 28.806,
      "end": 31.034
    }
  },
  {
    "id": "food_and_farming-p03-c07",
    "word": "Suspicious Stew",
    "phonetic": "/səˈspɪʃəs stu/",
    "meaning": "谜之炖菜",
    "sentence": "Stew with a surprise effect.",
    "translation": "带有惊喜效果的炖菜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 32.134,
      "sentenceStart": 34.152,
      "end": 36.261
    }
  },
  {
    "id": "food_and_farming-p03-c08",
    "word": "Dried Kelp",
    "phonetic": "/draɪd kɛlp/",
    "meaning": "干海带",
    "sentence": "Dried sea kelp.",
    "translation": "干海带。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 37.361,
      "sentenceStart": 39.136,
      "end": 40.56
    }
  },
  {
    "id": "food_and_farming-p03-c09",
    "word": "Chorus Fruit",
    "phonetic": "/ˈkɔrəs frut/",
    "meaning": "紫颂果",
    "sentence": "Fruit that teleports you.",
    "translation": "传送你的水果。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 41.66,
      "sentenceStart": 43.52,
      "end": 45.442
    }
  },
  {
    "id": "food_and_farming-p03-c10",
    "word": "Beef",
    "phonetic": "/bif/",
    "meaning": "牛肉",
    "sentence": "Raw beef.",
    "translation": "生牛肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 46.542,
      "sentenceStart": 47.896,
      "end": 49.03
    }
  },
  {
    "id": "food_and_farming-p03-c11",
    "word": "Porkchop",
    "phonetic": "/ˈpɔrktʃɑp/",
    "meaning": "猪排",
    "sentence": "Raw meat from pigs.",
    "translation": "生猪肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 50.13,
      "sentenceStart": 51.742,
      "end": 53.372
    }
  },
  {
    "id": "food_and_farming-p03-c12",
    "word": "Cooked Porkchop",
    "phonetic": "/kʊkt ˈpɔrktʃɑp/",
    "meaning": "熟猪排",
    "sentence": "Cooked meat from pigs.",
    "translation": "猪煮熟的肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 54.472,
      "sentenceStart": 56.452,
      "end": 58.178
    }
  },
  {
    "id": "food_and_farming-p03-c13",
    "word": "Mutton",
    "phonetic": "/ˈmətən/",
    "meaning": "羊肉",
    "sentence": "Raw mutton.",
    "translation": "生羊肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 59.278,
      "sentenceStart": 60.652,
      "end": 61.804
    }
  },
  {
    "id": "food_and_farming-p03-c14",
    "word": "Cooked Mutton",
    "phonetic": "/kʊkt ˈmətən/",
    "meaning": "熟羊肉",
    "sentence": "Cooked mutton.",
    "translation": "煮熟的羊肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 62.904,
      "sentenceStart": 64.714,
      "end": 65.949
    }
  },
  {
    "id": "food_and_farming-p03-c15",
    "word": "Rabbit",
    "phonetic": "/ˈræbɪt/",
    "meaning": "兔子",
    "sentence": "Raw rabbit meat.",
    "translation": "生兔肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_03.mp3",
      "wordStart": 67.049,
      "sentenceStart": 68.476,
      "end": 69.889
    }
  },
  {
    "id": "food_and_farming-p04-c01",
    "word": "Cooked Rabbit",
    "phonetic": "/kʊkt ˈræbɪt/",
    "meaning": "熟兔肉",
    "sentence": "Cooked rabbit meat.",
    "translation": "煮熟的兔肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.997,
      "end": 3.5
    }
  },
  {
    "id": "food_and_farming-p04-c02",
    "word": "Cod",
    "phonetic": "/ˈsiˈoʊˈdi/",
    "meaning": "鳕鱼",
    "sentence": "Raw cod ready to cook.",
    "translation": "生鳕鱼随时可以烹饪。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 4.6,
      "sentenceStart": 5.942,
      "end": 7.804
    }
  },
  {
    "id": "food_and_farming-p04-c03",
    "word": "Salmon",
    "phonetic": "/ˈsæmən/",
    "meaning": "鲑鱼",
    "sentence": "Raw salmon ready to cook.",
    "translation": "生三文鱼随时可以烹饪。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 8.904,
      "sentenceStart": 10.271,
      "end": 12.204
    }
  },
  {
    "id": "food_and_farming-p04-c04",
    "word": "Tropical Fish",
    "phonetic": "/ˈtrɑpɪkəl fɪʃ/",
    "meaning": "热带鱼",
    "sentence": "Colorful fish from warm waters.",
    "translation": "来自温暖水域的五颜六色的鱼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 13.304,
      "sentenceStart": 15.329,
      "end": 17.591
    }
  },
  {
    "id": "food_and_farming-p04-c05",
    "word": "Pufferfish",
    "phonetic": "/ˈpʌfərfɪʃ/",
    "meaning": "河豚",
    "sentence": "Spiky fish that can poison.",
    "translation": "会下毒的尖刺鱼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 18.691,
      "sentenceStart": 20.45,
      "end": 22.665
    }
  },
  {
    "id": "food_and_farming-p04-c06",
    "word": "Rotten Flesh",
    "phonetic": "/ˈrɑtən flɛʃ/",
    "meaning": "腐肉",
    "sentence": "Rotten flesh.",
    "translation": "腐烂的肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 23.765,
      "sentenceStart": 25.581,
      "end": 26.867
    }
  },
  {
    "id": "food_and_farming-p04-c07",
    "word": "Spider Eye",
    "phonetic": "/ˈspaɪdər aɪ/",
    "meaning": "蜘蛛眼",
    "sentence": "Ingredient for brewing potions.",
    "translation": "酿造药水的原料。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 27.967,
      "sentenceStart": 29.666,
      "end": 31.894
    }
  },
  {
    "id": "food_and_farming-p04-c08",
    "word": "Glistering Melon Slice",
    "phonetic": "/ˈɡlɪstərɪŋ ˈmɛlən slaɪs/",
    "meaning": "闪烁的西瓜片",
    "sentence": "Golden slice for brewing potions.",
    "translation": "用于酿造药水的黄金切片。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 32.994,
      "sentenceStart": 35.535,
      "end": 37.938
    }
  },
  {
    "id": "food_and_farming-p04-c09",
    "word": "Sugar",
    "phonetic": "/ˈʃʊgər/",
    "meaning": "糖",
    "sentence": "Sweet sugar.",
    "translation": "甜甜的糖。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 39.038,
      "sentenceStart": 40.418,
      "end": 41.764
    }
  },
  {
    "id": "food_and_farming-p04-c10",
    "word": "Cocoa Beans",
    "phonetic": "/ˈkoʊkoʊ binz/",
    "meaning": "可可豆",
    "sentence": "Some cocoa beans.",
    "translation": "一些可可豆。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 42.864,
      "sentenceStart": 44.801,
      "end": 46.423
    }
  },
  {
    "id": "food_and_farming-p04-c11",
    "word": "Brown Mushroom",
    "phonetic": "/braʊn ˈməʃrum/",
    "meaning": "棕色蘑菇",
    "sentence": "Fungus used in stew.",
    "translation": "蘑菇用于炖菜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 47.523,
      "sentenceStart": 49.451,
      "end": 51.251
    }
  },
  {
    "id": "food_and_farming-p04-c12",
    "word": "Red Mushroom",
    "phonetic": "/rɛd ˈməʃrum/",
    "meaning": "红色蘑菇",
    "sentence": "Red fungus used in stew.",
    "translation": "红木耳用于炖菜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 52.351,
      "sentenceStart": 54.228,
      "end": 56.273
    }
  },
  {
    "id": "food_and_farming-p04-c13",
    "word": "Bamboo",
    "phonetic": "/bæmˈbu/",
    "meaning": "竹子",
    "sentence": "A bamboo stalk.",
    "translation": "一根竹竿。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 57.373,
      "sentenceStart": 58.936,
      "end": 60.419
    }
  },
  {
    "id": "food_and_farming-p04-c14",
    "word": "Kelp",
    "phonetic": "/kɛlp/",
    "meaning": "海带",
    "sentence": "Sea kelp.",
    "translation": "海带。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 61.519,
      "sentenceStart": 62.904,
      "end": 64.129
    }
  },
  {
    "id": "food_and_farming-p04-c15",
    "word": "Sea Pickle",
    "phonetic": "/si ˈpɪkəl/",
    "meaning": "海泡菜",
    "sentence": "Underwater creature that glows.",
    "translation": "会发光的水下生物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_04.mp3",
      "wordStart": 65.229,
      "sentenceStart": 66.891,
      "end": 69.155
    }
  },
  {
    "id": "food_and_farming-p05-c01",
    "word": "Sugar Cane",
    "phonetic": "/ˈʃʊgər keɪn/",
    "meaning": "甘蔗",
    "sentence": "A tall sweet plant.",
    "translation": "一种高大的甜植物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.876,
      "end": 3.538
    }
  },
  {
    "id": "food_and_farming-p05-c02",
    "word": "Nether Wart",
    "phonetic": "/ˈnɛðər wɔrt/",
    "meaning": "下界疣",
    "sentence": "A crop from the nether.",
    "translation": "来自下界的庄稼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 4.638,
      "sentenceStart": 6.446,
      "end": 8.16
    }
  },
  {
    "id": "food_and_farming-p05-c03",
    "word": "Torchflower",
    "phonetic": "/ˈtɔrtʃˌflaʊər/",
    "meaning": "火把花",
    "sentence": "A bright ancient flower.",
    "translation": "一朵鲜艳的古花。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 9.26,
      "sentenceStart": 11.01,
      "end": 12.897
    }
  },
  {
    "id": "food_and_farming-p05-c04",
    "word": "Pitcher Plant",
    "phonetic": "/ˈpɪʧər plænt/",
    "meaning": "瓶子草",
    "sentence": "A large ancient plant.",
    "translation": "一种大型古老植物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 13.997,
      "sentenceStart": 15.839,
      "end": 17.718
    }
  },
  {
    "id": "food_and_farming-p05-c05",
    "word": "Cocoa Pod",
    "phonetic": "/ˈkoʊkoʊ pɑd/",
    "meaning": "可可豆荚",
    "sentence": "A pod that grows cocoa beans.",
    "translation": "种植可可豆的豆荚。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 18.818,
      "sentenceStart": 20.678,
      "end": 22.949
    }
  },
  {
    "id": "food_and_farming-p05-c06",
    "word": "Melon Slice",
    "phonetic": "/ˈmɛlən slaɪs/",
    "meaning": "西瓜片",
    "sentence": "A slice of melon.",
    "translation": "一片瓜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 24.049,
      "sentenceStart": 25.945,
      "end": 27.473
    }
  },
  {
    "id": "food_and_farming-p05-c07",
    "word": "Wheat Seeds",
    "phonetic": "/wit sidz/",
    "meaning": "小麦种子",
    "sentence": "Seeds for growing wheat.",
    "translation": "用于种植小麦的种子。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 28.573,
      "sentenceStart": 30.332,
      "end": 32.116
    }
  },
  {
    "id": "food_and_farming-p05-c08",
    "word": "Beetroot Seeds",
    "phonetic": "/ˈbiːtruːt sidz/",
    "meaning": "甜菜种子",
    "sentence": "Seeds for growing beetroot.",
    "translation": "用于种植甜菜根的种子。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 33.216,
      "sentenceStart": 35.228,
      "end": 37.224
    }
  },
  {
    "id": "food_and_farming-p05-c09",
    "word": "Melon Seeds",
    "phonetic": "/ˈmɛlən sidz/",
    "meaning": "西瓜种子",
    "sentence": "Seeds for growing melon.",
    "translation": "种植瓜的种子。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 38.324,
      "sentenceStart": 40.245,
      "end": 42.1
    }
  },
  {
    "id": "food_and_farming-p05-c10",
    "word": "Pumpkin Seeds",
    "phonetic": "/ˈpəmpkɪn sidz/",
    "meaning": "南瓜种子",
    "sentence": "Seeds for growing pumpkin.",
    "translation": "用于种植南瓜的种子。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 43.2,
      "sentenceStart": 45.237,
      "end": 47.224
    }
  },
  {
    "id": "food_and_farming-p05-c11",
    "word": "Torchflower Seeds",
    "phonetic": "/ˈtɔrtʃˌflaʊər sidz/",
    "meaning": "火把花种子",
    "sentence": "Seeds for a torchflower.",
    "translation": "火炬花的种子。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 48.324,
      "sentenceStart": 50.508,
      "end": 52.37
    }
  },
  {
    "id": "food_and_farming-p05-c12",
    "word": "Pitcher Pod",
    "phonetic": "/ˈpɪʧər pɑd/",
    "meaning": "瓶子草荚果",
    "sentence": "A pod for growing a pitcher plant.",
    "translation": "用于种植猪笼草的豆荚。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 53.47,
      "sentenceStart": 55.262,
      "end": 57.626
    }
  },
  {
    "id": "food_and_farming-p05-c13",
    "word": "Carrots",
    "phonetic": "/ˈkɛrəts/",
    "meaning": "胡萝卜",
    "sentence": "Carrot crops in a farm row.",
    "translation": "农场里的胡萝卜作物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 58.726,
      "sentenceStart": 60.193,
      "end": 62.17
    }
  },
  {
    "id": "food_and_farming-p05-c14",
    "word": "Potatoes",
    "phonetic": "/pəˈteɪtoʊz/",
    "meaning": "马铃薯",
    "sentence": "Potato crops in a farm row.",
    "translation": "农场里的马铃薯作物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 63.27,
      "sentenceStart": 64.962,
      "end": 67.161
    }
  },
  {
    "id": "food_and_farming-p05-c15",
    "word": "Cactus",
    "phonetic": "/ˈkæktəs/",
    "meaning": "仙人掌",
    "sentence": "A prickly desert plant.",
    "translation": "一种带刺的沙漠植物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_05.mp3",
      "wordStart": 68.261,
      "sentenceStart": 69.896,
      "end": 71.888
    }
  },
  {
    "id": "food_and_farming-p06-c01",
    "word": "Farmland",
    "phonetic": "/ˈfɑrmˌlænd/",
    "meaning": "耕地",
    "sentence": "Soil ready for crops.",
    "translation": "土壤准备好种植农作物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.81,
      "end": 3.596
    }
  },
  {
    "id": "food_and_farming-p06-c02",
    "word": "Bone Meal",
    "phonetic": "/boʊn mil/",
    "meaning": "骨粉",
    "sentence": "Powder that helps plants grow.",
    "translation": "帮助植物生长的粉末。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 4.696,
      "sentenceStart": 6.303,
      "end": 8.398
    }
  },
  {
    "id": "food_and_farming-p06-c03",
    "word": "Bee Nest",
    "phonetic": "/bi nɛst/",
    "meaning": "蜂巢",
    "sentence": "A natural home for bees.",
    "translation": "蜜蜂的天然家园。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 9.498,
      "sentenceStart": 11.094,
      "end": 13.027
    }
  },
  {
    "id": "food_and_farming-p06-c04",
    "word": "Beehive",
    "phonetic": "/ˈbiˌhaɪv/",
    "meaning": "蜂箱",
    "sentence": "A crafted home for bees.",
    "translation": "为蜜蜂精心打造的家园。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 14.127,
      "sentenceStart": 15.664,
      "end": 17.565
    }
  },
  {
    "id": "food_and_farming-p06-c05",
    "word": "Wheat Field",
    "phonetic": "/wit fild/",
    "meaning": "麦田",
    "sentence": "A field full of wheat.",
    "translation": "一片长满麦子的田野。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 18.665,
      "sentenceStart": 20.369,
      "end": 22.101
    }
  },
  {
    "id": "food_and_farming-p06-c06",
    "word": "Carrot Field",
    "phonetic": "/ˈkɛrət fild/",
    "meaning": "胡萝卜田",
    "sentence": "A field full of carrots.",
    "translation": "田里长满了胡萝卜。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 23.201,
      "sentenceStart": 25.055,
      "end": 26.914
    }
  },
  {
    "id": "food_and_farming-p06-c07",
    "word": "Potato Field",
    "phonetic": "/pəˈteɪˌtoʊ fild/",
    "meaning": "马铃薯田",
    "sentence": "A field full of potatoes.",
    "translation": "田里长满了土豆。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 28.014,
      "sentenceStart": 30.026,
      "end": 32.114
    }
  },
  {
    "id": "food_and_farming-p06-c08",
    "word": "Pumpkin Patch",
    "phonetic": "/ˈpəmpkɪn pæʧ/",
    "meaning": "南瓜地",
    "sentence": "A patch where pumpkins grow.",
    "translation": "南瓜生长的地方。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 33.214,
      "sentenceStart": 35.166,
      "end": 37.13
    }
  },
  {
    "id": "food_and_farming-p06-c09",
    "word": "Melon Patch",
    "phonetic": "/ˈmɛlən pæʧ/",
    "meaning": "瓜片",
    "sentence": "A patch where melons grow.",
    "translation": "一块长瓜的地方。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 38.23,
      "sentenceStart": 40.08,
      "end": 41.929
    }
  },
  {
    "id": "food_and_farming-p06-c10",
    "word": "Sweet Berry Bush",
    "phonetic": "/swit ˈbɛri bʊʃ/",
    "meaning": "甜浆果丛",
    "sentence": "A bush with sweet berries.",
    "translation": "长满甜浆果的灌木丛。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 43.029,
      "sentenceStart": 45.179,
      "end": 47.104
    }
  },
  {
    "id": "food_and_farming-p06-c11",
    "word": "Cocoa Farm",
    "phonetic": "/ˈkoʊkoʊ fɑrm/",
    "meaning": "可可农场",
    "sentence": "A farm for cocoa pods.",
    "translation": "可可豆荚农场。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 48.204,
      "sentenceStart": 50.096,
      "end": 52.059
    }
  },
  {
    "id": "food_and_farming-p06-c12",
    "word": "Bamboo Farm",
    "phonetic": "/bæmˈbu fɑrm/",
    "meaning": "竹园",
    "sentence": "A farm for bamboo.",
    "translation": "竹子农场。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 53.159,
      "sentenceStart": 55.101,
      "end": 56.743
    }
  },
  {
    "id": "food_and_farming-p06-c13",
    "word": "Kelp Farm",
    "phonetic": "/kɛlp fɑrm/",
    "meaning": "海带农场",
    "sentence": "A farm under water.",
    "translation": "水下农场。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 57.843,
      "sentenceStart": 59.647,
      "end": 61.35
    }
  },
  {
    "id": "food_and_farming-p06-c14",
    "word": "Mushroom Farm",
    "phonetic": "/ˈməʃrum fɑrm/",
    "meaning": "蘑菇农场",
    "sentence": "A farm for mushrooms.",
    "translation": "蘑菇农场。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 62.45,
      "sentenceStart": 64.402,
      "end": 66.133
    }
  },
  {
    "id": "food_and_farming-p06-c15",
    "word": "Nether Wart Farm",
    "phonetic": "/ˈnɛðər wɔrt fɑrm/",
    "meaning": "地狱疣农场",
    "sentence": "A farm for nether wart.",
    "translation": "下界疣农场。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_06.mp3",
      "wordStart": 67.233,
      "sentenceStart": 69.417,
      "end": 71.293
    }
  },
  {
    "id": "food_and_farming-p07-c01",
    "word": "Raw Beef",
    "phonetic": "/rɑ bif/",
    "meaning": "生牛肉",
    "sentence": "Uncooked beef.",
    "translation": "未煮熟的牛肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.801,
      "end": 3.189
    }
  },
  {
    "id": "food_and_farming-p07-c02",
    "word": "Raw Porkchop",
    "phonetic": "/rɑ ˈpɔrktʃɑp/",
    "meaning": "生猪排",
    "sentence": "Uncooked porkchop.",
    "translation": "未煮熟的猪排。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 4.289,
      "sentenceStart": 6.091,
      "end": 7.738
    }
  },
  {
    "id": "food_and_farming-p07-c03",
    "word": "Raw Chicken",
    "phonetic": "/rɑ ˈʧɪkən/",
    "meaning": "生鸡肉",
    "sentence": "Uncooked chicken.",
    "translation": "未煮熟的鸡肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 8.838,
      "sentenceStart": 10.517,
      "end": 12.014
    }
  },
  {
    "id": "food_and_farming-p07-c04",
    "word": "Raw Mutton",
    "phonetic": "/rɑ ˈmətən/",
    "meaning": "生羊肉",
    "sentence": "Uncooked mutton.",
    "translation": "未煮熟的羊肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 13.114,
      "sentenceStart": 14.716,
      "end": 16.118
    }
  },
  {
    "id": "food_and_farming-p07-c05",
    "word": "Raw Rabbit",
    "phonetic": "/rɑ ˈræbɪt/",
    "meaning": "生兔肉",
    "sentence": "Uncooked rabbit meat.",
    "translation": "未煮熟的兔肉。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 17.218,
      "sentenceStart": 18.909,
      "end": 20.658
    }
  },
  {
    "id": "food_and_farming-p07-c06",
    "word": "Raw Cod",
    "phonetic": "/rɑ ˈsiˈoʊˈdi/",
    "meaning": "生鳕鱼",
    "sentence": "Uncooked cod.",
    "translation": "未煮熟的鳕鱼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 21.758,
      "sentenceStart": 23.404,
      "end": 24.833
    }
  },
  {
    "id": "food_and_farming-p07-c07",
    "word": "Raw Salmon",
    "phonetic": "/rɑ ˈsæmən/",
    "meaning": "生鲑鱼",
    "sentence": "Uncooked salmon.",
    "translation": "未煮熟的鲑鱼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 25.933,
      "sentenceStart": 27.635,
      "end": 29.073
    }
  },
  {
    "id": "food_and_farming-p07-c08",
    "word": "Milk Bucket",
    "phonetic": "/mɪlk ˈbəkɪt/",
    "meaning": "奶桶",
    "sentence": "A bucket filled with milk.",
    "translation": "一个装满牛奶的桶。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 30.173,
      "sentenceStart": 32.002,
      "end": 33.938
    }
  },
  {
    "id": "food_and_farming-p07-c09",
    "word": "Fish Bucket",
    "phonetic": "/fɪʃ ˈbəkɪt/",
    "meaning": "鱼桶",
    "sentence": "A bucket carrying a small fish.",
    "translation": "一个桶，里面装着一条小鱼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 35.038,
      "sentenceStart": 36.805,
      "end": 39.097
    }
  },
  {
    "id": "food_and_farming-p07-c10",
    "word": "Bucket Of Salmon",
    "phonetic": "/ˈbəkɪt əv ˈsæmən/",
    "meaning": "鲑鱼桶",
    "sentence": "A salmon carried in a bucket.",
    "translation": "桶里装着一条鲑鱼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 40.197,
      "sentenceStart": 42.164,
      "end": 44.223
    }
  },
  {
    "id": "food_and_farming-p07-c11",
    "word": "Bucket Of Pufferfish",
    "phonetic": "/ˈbəkɪt əv ˈpʌfərfɪʃ/",
    "meaning": "河豚桶",
    "sentence": "A pufferfish carried in a bucket.",
    "translation": "一条河豚被装在桶里。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 45.323,
      "sentenceStart": 47.702,
      "end": 49.984
    }
  },
  {
    "id": "food_and_farming-p07-c12",
    "word": "Bucket Of Tropical Fish",
    "phonetic": "/ˈbəkɪt əv ˈtrɑpɪkəl fɪʃ/",
    "meaning": "热带鱼桶",
    "sentence": "A tropical fish carried in a bucket.",
    "translation": "一条热带鱼装在桶里。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 51.084,
      "sentenceStart": 53.83,
      "end": 56.343
    }
  },
  {
    "id": "food_and_farming-p07-c13",
    "word": "Farm Harvest",
    "phonetic": "/fɑrm ˈhɑrvəst/",
    "meaning": "农场丰收",
    "sentence": "Food gathered from a farm.",
    "translation": "从农场采集的食物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 57.443,
      "sentenceStart": 59.359,
      "end": 61.333
    }
  },
  {
    "id": "food_and_farming-p07-c14",
    "word": "Fishing Catch",
    "phonetic": "/ˈfɪʃɪŋ kæʧ/",
    "meaning": "钓鱼渔获",
    "sentence": "Food caught while fishing.",
    "translation": "钓鱼时捕获的食物。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 62.433,
      "sentenceStart": 64.251,
      "end": 66.095
    }
  },
  {
    "id": "food_and_farming-p07-c15",
    "word": "Crop Basket",
    "phonetic": "/krɑp ˈbæskət/",
    "meaning": "农作物篮",
    "sentence": "A basket full of crops.",
    "translation": "篮子里装满了庄稼。",
    "category": "食物与耕作",
    "audio": {
      "src": "/audio/food_and_farming/page_07.mp3",
      "wordStart": 67.195,
      "sentenceStart": 69.112,
      "end": 71.047
    }
  },
  {
    "id": "tools_and_gear-p01-c01",
    "word": "Pickaxe",
    "phonetic": "/ˈpɪkæks/",
    "meaning": "镐",
    "sentence": "A mining tool.",
    "translation": "一种采矿工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 5.44,
      "sentenceStart": 7.124,
      "end": 8.501
    }
  },
  {
    "id": "tools_and_gear-p01-c02",
    "word": "Axe",
    "phonetic": "/æks/",
    "meaning": "斧头",
    "sentence": "A chopping tool.",
    "translation": "一种砍伐工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 9.601,
      "sentenceStart": 10.935,
      "end": 12.399
    }
  },
  {
    "id": "tools_and_gear-p01-c03",
    "word": "Shovel",
    "phonetic": "/ˈʃəvəl/",
    "meaning": "铲",
    "sentence": "A digging tool.",
    "translation": "一种挖掘工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 13.499,
      "sentenceStart": 14.919,
      "end": 16.328
    }
  },
  {
    "id": "tools_and_gear-p01-c04",
    "word": "Hoe",
    "phonetic": "/hoʊ/",
    "meaning": "锄",
    "sentence": "A farming tool.",
    "translation": "一种农具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 17.428,
      "sentenceStart": 18.703,
      "end": 20.1
    }
  },
  {
    "id": "tools_and_gear-p01-c05",
    "word": "Sword",
    "phonetic": "/sɔrd/",
    "meaning": "剑",
    "sentence": "A sharp sword.",
    "translation": "一把锋利的剑。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 21.2,
      "sentenceStart": 22.535,
      "end": 23.964
    }
  },
  {
    "id": "tools_and_gear-p01-c06",
    "word": "Bow",
    "phonetic": "/boʊ/",
    "meaning": "弓",
    "sentence": "A shooting bow.",
    "translation": "一把射击弓。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 25.064,
      "sentenceStart": 26.394,
      "end": 27.724
    }
  },
  {
    "id": "tools_and_gear-p01-c07",
    "word": "Arrow",
    "phonetic": "/ˈɛroʊ/",
    "meaning": "箭",
    "sentence": "A flying arrow.",
    "translation": "一支飞箭。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 28.824,
      "sentenceStart": 30.194,
      "end": 31.639
    }
  },
  {
    "id": "tools_and_gear-p01-c08",
    "word": "Shield",
    "phonetic": "/ʃild/",
    "meaning": "盾牌",
    "sentence": "A strong shield.",
    "translation": "坚固的盾牌。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 32.739,
      "sentenceStart": 34.06,
      "end": 35.502
    }
  },
  {
    "id": "tools_and_gear-p01-c09",
    "word": "Helmet",
    "phonetic": "/ˈhɛlmət/",
    "meaning": "头盔",
    "sentence": "Armor for the head.",
    "translation": "头部的铠甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 36.602,
      "sentenceStart": 38.111,
      "end": 39.613
    }
  },
  {
    "id": "tools_and_gear-p01-c10",
    "word": "Chestplate",
    "phonetic": "/ˈtʃɛstpleɪt/",
    "meaning": "胸甲",
    "sentence": "Armor for the body.",
    "translation": "为身体提供铠甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 40.713,
      "sentenceStart": 42.38,
      "end": 44.024
    }
  },
  {
    "id": "tools_and_gear-p01-c11",
    "word": "Leggings",
    "phonetic": "/ˈlɛgɪŋz/",
    "meaning": "绑腿",
    "sentence": "Armor for the legs.",
    "translation": "腿部的装甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 45.124,
      "sentenceStart": 46.636,
      "end": 48.199
    }
  },
  {
    "id": "tools_and_gear-p01-c12",
    "word": "Boots",
    "phonetic": "/buts/",
    "meaning": "靴子",
    "sentence": "Armor for the feet.",
    "translation": "脚部的铠甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_01.mp3",
      "wordStart": 49.299,
      "sentenceStart": 50.707,
      "end": 52.322
    }
  },
  {
    "id": "tools_and_gear-p02-c01",
    "word": "Crossbow",
    "phonetic": "/ˈkrɔsˌboʊ/",
    "meaning": "弩",
    "sentence": "A strong bow.",
    "translation": "强弓。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.829,
      "end": 3.146
    }
  },
  {
    "id": "tools_and_gear-p02-c02",
    "word": "Trident",
    "phonetic": "/ˈtraɪdənt/",
    "meaning": "三叉戟",
    "sentence": "A three-point weapon.",
    "translation": "三点武器。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 4.246,
      "sentenceStart": 5.771,
      "end": 7.518
    }
  },
  {
    "id": "tools_and_gear-p02-c03",
    "word": "Mace",
    "phonetic": "/meɪs/",
    "meaning": "重锤",
    "sentence": "A heavy weapon.",
    "translation": "重型武器。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 8.618,
      "sentenceStart": 9.993,
      "end": 11.402
    }
  },
  {
    "id": "tools_and_gear-p02-c04",
    "word": "Bucket",
    "phonetic": "/ˈbəkɪt/",
    "meaning": "铁桶",
    "sentence": "A useful bucket.",
    "translation": "一个有用的桶。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 12.502,
      "sentenceStart": 13.988,
      "end": 15.573
    }
  },
  {
    "id": "tools_and_gear-p02-c05",
    "word": "Water Bucket",
    "phonetic": "/ˈwɔtər ˈbəkɪt/",
    "meaning": "水桶",
    "sentence": "A bucket of water.",
    "translation": "一桶水。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 16.673,
      "sentenceStart": 18.513,
      "end": 20.135
    }
  },
  {
    "id": "tools_and_gear-p02-c06",
    "word": "Fishing Rod",
    "phonetic": "/ˈfɪʃɪŋ rɑd/",
    "meaning": "钓鱼竿",
    "sentence": "A rod for fishing.",
    "translation": "钓鱼用的竿。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 21.235,
      "sentenceStart": 23.047,
      "end": 24.597
    }
  },
  {
    "id": "tools_and_gear-p02-c07",
    "word": "Shears",
    "phonetic": "/ʃirz/",
    "meaning": "剪刀",
    "sentence": "A cutting tool.",
    "translation": "一种切削工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 25.697,
      "sentenceStart": 27.097,
      "end": 28.471
    }
  },
  {
    "id": "tools_and_gear-p02-c08",
    "word": "Flint And Steel",
    "phonetic": "/flɪnt ənd stil/",
    "meaning": "打火石",
    "sentence": "A tool for fire.",
    "translation": "一种取火的工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 29.571,
      "sentenceStart": 31.566,
      "end": 33.055
    }
  },
  {
    "id": "tools_and_gear-p02-c09",
    "word": "Compass",
    "phonetic": "/ˈkəmpəs/",
    "meaning": "指南针",
    "sentence": "A pointing tool.",
    "translation": "一个指点工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 34.155,
      "sentenceStart": 35.709,
      "end": 37.18
    }
  },
  {
    "id": "tools_and_gear-p02-c10",
    "word": "Clock",
    "phonetic": "/klɑk/",
    "meaning": "时钟",
    "sentence": "A time tool.",
    "translation": "一个时间工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 38.28,
      "sentenceStart": 39.692,
      "end": 40.989
    }
  },
  {
    "id": "tools_and_gear-p02-c11",
    "word": "Map",
    "phonetic": "/mæp/",
    "meaning": "地图",
    "sentence": "A map to read.",
    "translation": "要阅读的地图。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 42.089,
      "sentenceStart": 43.401,
      "end": 44.779
    }
  },
  {
    "id": "tools_and_gear-p02-c12",
    "word": "Brush",
    "phonetic": "/brəʃ/",
    "meaning": "刷子",
    "sentence": "A digging brush.",
    "translation": "一把挖土刷。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 45.879,
      "sentenceStart": 47.296,
      "end": 48.692
    }
  },
  {
    "id": "tools_and_gear-p02-c13",
    "word": "Spyglass",
    "phonetic": "/ˈspaɪˌglæs/",
    "meaning": "望远镜",
    "sentence": "A looking tool.",
    "translation": "一个寻找工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 49.792,
      "sentenceStart": 51.438,
      "end": 52.802
    }
  },
  {
    "id": "tools_and_gear-p02-c14",
    "word": "Elytra",
    "phonetic": "/ˈɛlətrə/",
    "meaning": "鞘翅",
    "sentence": "Wings for gliding.",
    "translation": "翅膀用于滑翔。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 53.902,
      "sentenceStart": 55.431,
      "end": 56.944
    }
  },
  {
    "id": "tools_and_gear-p02-c15",
    "word": "Totem",
    "phonetic": "/ˈtoʊtəm/",
    "meaning": "图腾",
    "sentence": "A magic helper.",
    "translation": "一个神奇的帮手。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_02.mp3",
      "wordStart": 58.044,
      "sentenceStart": 59.554,
      "end": 61.081
    }
  },
  {
    "id": "tools_and_gear-p03-c01",
    "word": "Armor Stand",
    "phonetic": "/ˈɑrmər stænd/",
    "meaning": "盔甲架",
    "sentence": "Stand displaying armor.",
    "translation": "站着展示盔甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.058,
      "end": 3.857
    }
  },
  {
    "id": "tools_and_gear-p03-c02",
    "word": "Bucket Of Axolotl",
    "phonetic": "/ˈbəkɪt əv ˌæksəˈlɑtəl/",
    "meaning": "美西螈桶",
    "sentence": "Holds a live axolotl.",
    "translation": "手里拿着一条活蝾螈。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 4.957,
      "sentenceStart": 7.453,
      "end": 9.419
    }
  },
  {
    "id": "tools_and_gear-p03-c03",
    "word": "Black Bundle",
    "phonetic": "/blæk ˈbəndəl/",
    "meaning": "黑色收纳袋",
    "sentence": "Bag holding mixed items.",
    "translation": "装有混合物品的袋子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 10.519,
      "sentenceStart": 12.381,
      "end": 14.319
    }
  },
  {
    "id": "tools_and_gear-p03-c04",
    "word": "Blue Bundle",
    "phonetic": "/blu ˈbəndəl/",
    "meaning": "蓝色收纳袋",
    "sentence": "Bag holding mixed items.",
    "translation": "装有混合物品的袋子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 15.419,
      "sentenceStart": 17.193,
      "end": 19.131
    }
  },
  {
    "id": "tools_and_gear-p03-c05",
    "word": "Smithing Template",
    "phonetic": "/ˈsmɪθɪŋ ˈtɛmplət/",
    "meaning": "锻造模板",
    "sentence": "Upgrade or decoration pattern.",
    "translation": "升级或装饰图案。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 20.231,
      "sentenceStart": 22.343,
      "end": 24.764
    }
  },
  {
    "id": "tools_and_gear-p03-c06",
    "word": "Bowl",
    "phonetic": "/boʊl/",
    "meaning": "碗",
    "sentence": "Container for soup or stew.",
    "translation": "盛汤或炖菜的容器。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 25.864,
      "sentenceStart": 27.194,
      "end": 29.238
    }
  },
  {
    "id": "tools_and_gear-p03-c07",
    "word": "Brown Bundle",
    "phonetic": "/braʊn ˈbəndəl/",
    "meaning": "棕色收纳袋",
    "sentence": "Bag holding mixed items.",
    "translation": "装有混合物品的袋子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 30.338,
      "sentenceStart": 32.205,
      "end": 34.143
    }
  },
  {
    "id": "tools_and_gear-p03-c08",
    "word": "Bundle",
    "phonetic": "/ˈbəndəl/",
    "meaning": "收纳袋",
    "sentence": "Bag holding mixed items.",
    "translation": "装有混合物品的袋子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 35.243,
      "sentenceStart": 36.722,
      "end": 38.66
    }
  },
  {
    "id": "tools_and_gear-p03-c09",
    "word": "Chainmail Boots",
    "phonetic": "/ˈtʃeɪnmeɪl buts/",
    "meaning": "锁链靴子",
    "sentence": "Some chainmail boots.",
    "translation": "一些链甲靴子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 39.76,
      "sentenceStart": 41.701,
      "end": 43.298
    }
  },
  {
    "id": "tools_and_gear-p03-c10",
    "word": "Chainmail Chestplate",
    "phonetic": "/ˈtʃeɪnmeɪl ˈtʃɛstpleɪt/",
    "meaning": "锁链胸甲",
    "sentence": "Metal rings protecting your body.",
    "translation": "金属环保护您的身体。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 44.398,
      "sentenceStart": 46.64,
      "end": 48.982
    }
  },
  {
    "id": "tools_and_gear-p03-c11",
    "word": "Chainmail Helmet",
    "phonetic": "/ˈtʃeɪnmeɪl ˈhɛlmət/",
    "meaning": "锁链头盔",
    "sentence": "Metal rings protecting your head.",
    "translation": "金属环保护您的头部。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 50.082,
      "sentenceStart": 52.019,
      "end": 54.257
    }
  },
  {
    "id": "tools_and_gear-p03-c12",
    "word": "Chainmail Leggings",
    "phonetic": "/ˈtʃeɪnmeɪl ˈlɛgɪŋz/",
    "meaning": "锁链护腿",
    "sentence": "Some chainmail leggings.",
    "translation": "一些链甲护腿。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 55.357,
      "sentenceStart": 57.303,
      "end": 59.025
    }
  },
  {
    "id": "tools_and_gear-p03-c13",
    "word": "Bucket Of Cod",
    "phonetic": "/ˈbəkɪt əv ˈsiˈoʊˈdi/",
    "meaning": "鳕鱼桶",
    "sentence": "Bucket carrying a live fish.",
    "translation": "提着活鱼的桶。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 60.125,
      "sentenceStart": 62.053,
      "end": 64.131
    }
  },
  {
    "id": "tools_and_gear-p03-c14",
    "word": "Copper Axe",
    "phonetic": "/ˈkɑpər æks/",
    "meaning": "铜斧",
    "sentence": "Tool for chopping wood.",
    "translation": "砍木头的工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 65.231,
      "sentenceStart": 67.09,
      "end": 68.751
    }
  },
  {
    "id": "tools_and_gear-p03-c15",
    "word": "Copper Boots",
    "phonetic": "/ˈkɑpər buts/",
    "meaning": "铜靴子",
    "sentence": "Some copper boots.",
    "translation": "一些铜靴子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_03.mp3",
      "wordStart": 69.851,
      "sentenceStart": 71.738,
      "end": 73.288
    }
  },
  {
    "id": "tools_and_gear-p04-c01",
    "word": "Copper Chestplate",
    "phonetic": "/ˈkɑpər ˈtʃɛstpleɪt/",
    "meaning": "铜胸甲",
    "sentence": "Copper armor protecting your body.",
    "translation": "铜甲保护你的身体。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.334,
      "end": 4.836
    }
  },
  {
    "id": "tools_and_gear-p04-c02",
    "word": "Copper Helmet",
    "phonetic": "/ˈkɑpər ˈhɛlmət/",
    "meaning": "铜头盔",
    "sentence": "Copper armor protecting your head.",
    "translation": "铜甲保护你的头部。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 5.936,
      "sentenceStart": 7.852,
      "end": 10.196
    }
  },
  {
    "id": "tools_and_gear-p04-c03",
    "word": "Copper Hoe",
    "phonetic": "/ˈkɑpər hoʊ/",
    "meaning": "铜锄",
    "sentence": "Tool preparing soil for crops.",
    "translation": "为农作物准备土壤的工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 11.296,
      "sentenceStart": 13.015,
      "end": 15.234
    }
  },
  {
    "id": "tools_and_gear-p04-c04",
    "word": "Copper Horse Armor",
    "phonetic": "/ˈkɑpər hɔrs ˈɑrmər/",
    "meaning": "铜马铠",
    "sentence": "Copper armor protecting horses.",
    "translation": "铜甲保护马匹。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 16.334,
      "sentenceStart": 18.569,
      "end": 20.908
    }
  },
  {
    "id": "tools_and_gear-p04-c05",
    "word": "Copper Leggings",
    "phonetic": "/ˈkɑpər ˈlɛgɪŋz/",
    "meaning": "铜护腿",
    "sentence": "Some copper leggings.",
    "translation": "一些铜护腿。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 22.008,
      "sentenceStart": 23.92,
      "end": 25.608
    }
  },
  {
    "id": "tools_and_gear-p04-c06",
    "word": "Copper Nautilus Armor",
    "phonetic": "/ˈkɑpər ˈnɔtələs ˈɑrmər/",
    "meaning": "铜鹦鹉螺铠",
    "sentence": "Copper armor protecting sea mounts.",
    "translation": "保护海坐骑的铜甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 26.708,
      "sentenceStart": 29.152,
      "end": 31.616
    }
  },
  {
    "id": "tools_and_gear-p04-c07",
    "word": "Copper Pickaxe",
    "phonetic": "/ˈkɑpər ˈpɪkæks/",
    "meaning": "铜镐",
    "sentence": "Mines stone and ores.",
    "translation": "开采石头和矿石。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 32.716,
      "sentenceStart": 34.745,
      "end": 36.464
    }
  },
  {
    "id": "tools_and_gear-p04-c08",
    "word": "Copper Shovel",
    "phonetic": "/ˈkɑpər ˈʃəvəl/",
    "meaning": "铜锹",
    "sentence": "Digs dirt and sand.",
    "translation": "挖泥土和沙子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 37.564,
      "sentenceStart": 39.456,
      "end": 41.229
    }
  },
  {
    "id": "tools_and_gear-p04-c09",
    "word": "Copper Sword",
    "phonetic": "/ˈkɑpər sɔrd/",
    "meaning": "铜剑",
    "sentence": "Weapon for fighting enemies.",
    "translation": "与敌人战斗的武器。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 42.329,
      "sentenceStart": 44.133,
      "end": 46.112
    }
  },
  {
    "id": "tools_and_gear-p04-c10",
    "word": "Cyan Bundle",
    "phonetic": "/saɪæn ˈbəndəl/",
    "meaning": "青色收纳袋",
    "sentence": "Bag holding mixed items.",
    "translation": "装有混合物品的袋子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 47.212,
      "sentenceStart": 49.062,
      "end": 51.0
    }
  },
  {
    "id": "tools_and_gear-p04-c11",
    "word": "Diamond Axe",
    "phonetic": "/ˈdaɪmənd æks/",
    "meaning": "钻石斧",
    "sentence": "Durable tool for chopping wood.",
    "translation": "耐用的砍柴工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 52.1,
      "sentenceStart": 54.037,
      "end": 56.26
    }
  },
  {
    "id": "tools_and_gear-p04-c12",
    "word": "Diamond Boots",
    "phonetic": "/ˈdaɪmənd buts/",
    "meaning": "钻石靴子",
    "sentence": "Some diamond boots.",
    "translation": "一些钻石靴子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 57.36,
      "sentenceStart": 59.347,
      "end": 60.967
    }
  },
  {
    "id": "tools_and_gear-p04-c13",
    "word": "Diamond Chestplate",
    "phonetic": "/ˈdaɪmənd ˈtʃɛstpleɪt/",
    "meaning": "钻石胸甲",
    "sentence": "Diamond armor protecting your body.",
    "translation": "钻石铠甲保护你的身体。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 62.067,
      "sentenceStart": 64.309,
      "end": 67.012
    }
  },
  {
    "id": "tools_and_gear-p04-c14",
    "word": "Diamond Helmet",
    "phonetic": "/ˈdaɪmənd ˈhɛlmət/",
    "meaning": "钻石头盔",
    "sentence": "Diamond armor protecting your head.",
    "translation": "钻石盔甲保护你的头部。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 68.112,
      "sentenceStart": 70.053,
      "end": 72.561
    }
  },
  {
    "id": "tools_and_gear-p04-c15",
    "word": "Diamond Hoe",
    "phonetic": "/ˈdaɪmənd hoʊ/",
    "meaning": "钻石锄",
    "sentence": "Durable tool preparing farmland.",
    "translation": "准备农田的耐用工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_04.mp3",
      "wordStart": 73.661,
      "sentenceStart": 75.498,
      "end": 78.04
    }
  },
  {
    "id": "tools_and_gear-p05-c01",
    "word": "Saddle",
    "phonetic": "/ˈsædəl/",
    "meaning": "鞍",
    "sentence": "A seat for riding an animal.",
    "translation": "供骑乘动物的座位。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.56,
      "end": 3.56
    }
  },
  {
    "id": "tools_and_gear-p05-c02",
    "word": "Lead",
    "phonetic": "/liːd/",
    "meaning": "拴绳",
    "sentence": "A rope for guiding animals.",
    "translation": "引导动物的绳子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 4.66,
      "sentenceStart": 5.976,
      "end": 7.989
    }
  },
  {
    "id": "tools_and_gear-p05-c03",
    "word": "Name Tag",
    "phonetic": "/neɪm tæg/",
    "meaning": "命名牌",
    "sentence": "A tag for giving a name.",
    "translation": "用于命名的标签。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 9.089,
      "sentenceStart": 10.716,
      "end": 12.66
    }
  },
  {
    "id": "tools_and_gear-p05-c04",
    "word": "Firework Rocket",
    "phonetic": "/ˈfaɪrˌwərk ˈrɑkət/",
    "meaning": "烟花火箭",
    "sentence": "A rocket for flying with wings.",
    "translation": "带翅膀飞行的火箭。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 13.76,
      "sentenceStart": 15.831,
      "end": 17.983
    }
  },
  {
    "id": "tools_and_gear-p05-c05",
    "word": "Goat Horn",
    "phonetic": "/goʊt hɔrn/",
    "meaning": "山羊角",
    "sentence": "A horn that makes a loud sound.",
    "translation": "发出响亮声音的号角。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 19.083,
      "sentenceStart": 20.72,
      "end": 22.933
    }
  },
  {
    "id": "tools_and_gear-p05-c06",
    "word": "Ender Pearl",
    "phonetic": "/ˈɛndər pərl/",
    "meaning": "末影珍珠",
    "sentence": "A pearl used for teleporting.",
    "translation": "用于传送的珍珠。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 24.033,
      "sentenceStart": 25.84,
      "end": 28.053
    }
  },
  {
    "id": "tools_and_gear-p05-c07",
    "word": "Eye Of Ender",
    "phonetic": "/aɪ əv ˈɛndər/",
    "meaning": "末影之眼",
    "sentence": "An eye that points the way.",
    "translation": "一只指明方向的眼睛。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 29.153,
      "sentenceStart": 30.893,
      "end": 32.811
    }
  },
  {
    "id": "tools_and_gear-p05-c08",
    "word": "Lava Bucket",
    "phonetic": "/ˈlɑvə ˈbəkɪt/",
    "meaning": "熔岩桶",
    "sentence": "A bucket filled with lava.",
    "translation": "一个装满熔岩的桶。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 33.911,
      "sentenceStart": 35.773,
      "end": 37.795
    }
  },
  {
    "id": "tools_and_gear-p05-c09",
    "word": "Powder Snow Bucket",
    "phonetic": "/ˈpaʊdər snoʊ ˈbəkɪt/",
    "meaning": "细雪桶",
    "sentence": "A bucket filled with powder snow.",
    "translation": "装满粉雪的桶。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 38.895,
      "sentenceStart": 41.199,
      "end": 43.441
    }
  },
  {
    "id": "tools_and_gear-p05-c10",
    "word": "Recovery Compass",
    "phonetic": "/rɪˈkəvəri ˈkəmpəs/",
    "meaning": "追溯指针",
    "sentence": "A compass for finding the way back.",
    "translation": "寻找回去路的指南针。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 44.541,
      "sentenceStart": 46.7,
      "end": 48.988
    }
  },
  {
    "id": "tools_and_gear-p05-c11",
    "word": "Wind Charge",
    "phonetic": "/wɪnd ʧɑrʤ/",
    "meaning": "风弹",
    "sentence": "A small blast of wind.",
    "translation": "一阵小风。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 50.088,
      "sentenceStart": 51.896,
      "end": 53.785
    }
  },
  {
    "id": "tools_and_gear-p05-c12",
    "word": "Fire Charge",
    "phonetic": "/faɪər ʧɑrʤ/",
    "meaning": "火焰弹",
    "sentence": "A small ball of fire.",
    "translation": "一个小火球。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 54.885,
      "sentenceStart": 56.614,
      "end": 58.337
    }
  },
  {
    "id": "tools_and_gear-p05-c13",
    "word": "Snowball",
    "phonetic": "/sˈnoʊˌbɔl/",
    "meaning": "雪球",
    "sentence": "A ball of snow to throw.",
    "translation": "扔一个雪球。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 59.437,
      "sentenceStart": 60.941,
      "end": 62.8
    }
  },
  {
    "id": "tools_and_gear-p05-c14",
    "word": "Empty Map",
    "phonetic": "/ˈɛmti mæp/",
    "meaning": "空地图",
    "sentence": "A blank map ready to fill.",
    "translation": "一张空白地图，随时可以填充。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 63.9,
      "sentenceStart": 65.654,
      "end": 67.665
    }
  },
  {
    "id": "tools_and_gear-p05-c15",
    "word": "Totem Of Undying",
    "phonetic": "/ˈtoʊtəm əv ənˈdaɪɪŋ/",
    "meaning": "不死图腾",
    "sentence": "A rare item that can save a player.",
    "translation": "可以拯救玩家的稀有物品。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_05.mp3",
      "wordStart": 68.765,
      "sentenceStart": 70.957,
      "end": 73.532
    }
  },
  {
    "id": "tools_and_gear-p06-c01",
    "word": "Spectral Arrow",
    "phonetic": "/ˈspɛktrəl ˈɛroʊ/",
    "meaning": "光灵箭",
    "sentence": "An arrow that makes a target glow.",
    "translation": "使目标发光的箭头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.224,
      "end": 4.66
    }
  },
  {
    "id": "tools_and_gear-p06-c02",
    "word": "Tipped Arrow",
    "phonetic": "/tɪpt ˈɛroʊ/",
    "meaning": "药箭",
    "sentence": "An arrow with a potion effect.",
    "translation": "带有药水效果的箭。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 5.76,
      "sentenceStart": 7.54,
      "end": 9.754
    }
  },
  {
    "id": "tools_and_gear-p06-c03",
    "word": "Potion",
    "phonetic": "/ˈpoʊʃən/",
    "meaning": "药水",
    "sentence": "A magic drink.",
    "translation": "一种神奇的饮料。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 10.854,
      "sentenceStart": 12.346,
      "end": 13.773
    }
  },
  {
    "id": "tools_and_gear-p06-c04",
    "word": "Splash Potion",
    "phonetic": "/splæʃ ˈpoʊʃən/",
    "meaning": "喷溅药水",
    "sentence": "A potion that can be thrown.",
    "translation": "可以投掷的药水。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 14.873,
      "sentenceStart": 16.891,
      "end": 18.958
    }
  },
  {
    "id": "tools_and_gear-p06-c05",
    "word": "Lingering Potion",
    "phonetic": "/ˈlɪŋgərɪŋ ˈpoʊʃən/",
    "meaning": "滞留药水",
    "sentence": "A potion that leaves a cloud.",
    "translation": "留下云朵的药剂。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 20.058,
      "sentenceStart": 22.095,
      "end": 24.15
    }
  },
  {
    "id": "tools_and_gear-p06-c06",
    "word": "Experience Bottle",
    "phonetic": "/ɪkˈspɪriəns ˈbɑtəl/",
    "meaning": "经验瓶",
    "sentence": "A bottle that gives experience.",
    "translation": "提供经验的瓶子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 25.25,
      "sentenceStart": 27.494,
      "end": 29.709
    }
  },
  {
    "id": "tools_and_gear-p06-c07",
    "word": "Blaze Rod",
    "phonetic": "/bleɪz rɑd/",
    "meaning": "烈焰棒",
    "sentence": "A rod dropped by a blaze.",
    "translation": "一根棍子被火焰掉落。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 30.809,
      "sentenceStart": 32.576,
      "end": 34.528
    }
  },
  {
    "id": "tools_and_gear-p06-c08",
    "word": "Blaze Powder",
    "phonetic": "/bleɪz ˈpaʊdər/",
    "meaning": "烈焰粉",
    "sentence": "Powder made from a blaze rod.",
    "translation": "由火焰棒制成的粉末。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 35.628,
      "sentenceStart": 37.503,
      "end": 39.583
    }
  },
  {
    "id": "tools_and_gear-p06-c09",
    "word": "Ghast Tear",
    "phonetic": "/ɡæst tɪr/",
    "meaning": "恶魂之泪",
    "sentence": "A tear from a ghast.",
    "translation": "恶魂的眼泪。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 40.683,
      "sentenceStart": 42.408,
      "end": 44.054
    }
  },
  {
    "id": "tools_and_gear-p06-c10",
    "word": "Magma Cream",
    "phonetic": "/ˈmægmə krim/",
    "meaning": "岩浆膏",
    "sentence": "A warm magic ingredient.",
    "translation": "一种温暖的神奇成分。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 45.154,
      "sentenceStart": 47.001,
      "end": 48.989
    }
  },
  {
    "id": "tools_and_gear-p06-c11",
    "word": "Fermented Spider Eye",
    "phonetic": "/fərˈmɛntəd ˈspaɪdər aɪ/",
    "meaning": "发酵蛛眼",
    "sentence": "A changed spider eye for brewing.",
    "translation": "改变了用于酿造的蜘蛛眼。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 50.089,
      "sentenceStart": 52.456,
      "end": 54.695
    }
  },
  {
    "id": "tools_and_gear-p06-c12",
    "word": "Glass Bottle",
    "phonetic": "/glæs ˈbɑtəl/",
    "meaning": "玻璃瓶",
    "sentence": "A bottle for holding potions.",
    "translation": "用来装药水的瓶子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 55.795,
      "sentenceStart": 57.67,
      "end": 59.743
    }
  },
  {
    "id": "tools_and_gear-p06-c13",
    "word": "Dragon's Breath",
    "phonetic": "/ˈdrægənz brɛθ/",
    "meaning": "龙息",
    "sentence": "A rare breath in a bottle.",
    "translation": "瓶中难得的呼吸。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 60.843,
      "sentenceStart": 62.859,
      "end": 64.774
    }
  },
  {
    "id": "tools_and_gear-p06-c14",
    "word": "Rabbit's Foot",
    "phonetic": "/ˈræbɪts fʊt/",
    "meaning": "兔子脚",
    "sentence": "A lucky brewing ingredient.",
    "translation": "幸运的酿造原料。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 65.874,
      "sentenceStart": 67.728,
      "end": 69.734
    }
  },
  {
    "id": "tools_and_gear-p06-c15",
    "word": "Turtle Shell",
    "phonetic": "/ˈtərtəl ʃɛl/",
    "meaning": "海龟壳",
    "sentence": "A shell worn like a helmet.",
    "translation": "像头盔一样佩戴的外壳。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_06.mp3",
      "wordStart": 70.834,
      "sentenceStart": 72.634,
      "end": 74.734
    }
  },
  {
    "id": "tools_and_gear-p07-c01",
    "word": "Grindstone",
    "phonetic": "/ˈgraɪndˌstoʊn/",
    "meaning": "砂轮",
    "sentence": "A block for repairing tools.",
    "translation": "用于修理工具的方块。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.958,
      "end": 4.001
    }
  },
  {
    "id": "tools_and_gear-p07-c02",
    "word": "Smithing Table",
    "phonetic": "/ˈsmɪθɪŋ ˈteɪbəl/",
    "meaning": "锻造台",
    "sentence": "A table for upgrading gear.",
    "translation": "升级装备的桌子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 5.101,
      "sentenceStart": 7.028,
      "end": 9.148
    }
  },
  {
    "id": "tools_and_gear-p07-c03",
    "word": "Loom",
    "phonetic": "/lum/",
    "meaning": "织布机",
    "sentence": "A block for banner patterns.",
    "translation": "横幅图案块。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 10.248,
      "sentenceStart": 11.552,
      "end": 13.514
    }
  },
  {
    "id": "tools_and_gear-p07-c04",
    "word": "Cartography Table",
    "phonetic": "/kɑrˈtɑɡrəfi ˈteɪbəl/",
    "meaning": "制图台",
    "sentence": "A table for map work.",
    "translation": "地图工作表。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 14.614,
      "sentenceStart": 16.942,
      "end": 18.804
    }
  },
  {
    "id": "tools_and_gear-p07-c05",
    "word": "Stonecutter",
    "phonetic": "/ˈstoʊnˌkətər/",
    "meaning": "切石机",
    "sentence": "A block for cutting stone.",
    "translation": "用于切割石头的块。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 19.904,
      "sentenceStart": 21.621,
      "end": 23.546
    }
  },
  {
    "id": "tools_and_gear-p07-c06",
    "word": "Enchanting Table",
    "phonetic": "/ɛnˈʧænɪŋ ˈteɪbəl/",
    "meaning": "附魔台",
    "sentence": "A table for magic upgrades.",
    "translation": "魔法升级表。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 24.646,
      "sentenceStart": 26.794,
      "end": 28.955
    }
  },
  {
    "id": "tools_and_gear-p07-c07",
    "word": "Brewing Stand",
    "phonetic": "/bruɪŋ stænd/",
    "meaning": "酿造台",
    "sentence": "A stand for brewing potions.",
    "translation": "酿造药水的架子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 30.055,
      "sentenceStart": 31.983,
      "end": 34.054
    }
  },
  {
    "id": "tools_and_gear-p07-c08",
    "word": "Fletching Table",
    "phonetic": "/ˈflɛtʃɪŋ ˈteɪbəl/",
    "meaning": "制箭台",
    "sentence": "A table for arrow work.",
    "translation": "箭头工作表。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 35.154,
      "sentenceStart": 37.114,
      "end": 38.974
    }
  },
  {
    "id": "tools_and_gear-p07-c09",
    "word": "Cauldron",
    "phonetic": "/ˈkɔldrən/",
    "meaning": "炼药锅",
    "sentence": "A pot that can hold liquid.",
    "translation": "可以容纳液体的锅。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 40.074,
      "sentenceStart": 41.693,
      "end": 43.735
    }
  },
  {
    "id": "tools_and_gear-p07-c10",
    "word": "Blast Furnace",
    "phonetic": "/blæst ˈfərnəs/",
    "meaning": "高炉",
    "sentence": "A furnace for smelting ores.",
    "translation": "熔炼矿石的熔炉。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 44.835,
      "sentenceStart": 46.835,
      "end": 48.964
    }
  },
  {
    "id": "tools_and_gear-p07-c11",
    "word": "Smoker",
    "phonetic": "/sˈmoʊkər/",
    "meaning": "烟熏炉",
    "sentence": "A cooker for food.",
    "translation": "一个用来做饭的炊具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 50.064,
      "sentenceStart": 51.539,
      "end": 53.066
    }
  },
  {
    "id": "tools_and_gear-p07-c12",
    "word": "Chipped Anvil",
    "phonetic": "/ʧɪpt ˈænvəl/",
    "meaning": "开裂的铁砧",
    "sentence": "A worn anvil for tool work.",
    "translation": "用于工具作业的磨损砧座。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 54.166,
      "sentenceStart": 56.035,
      "end": 58.214
    }
  },
  {
    "id": "tools_and_gear-p07-c13",
    "word": "Damaged Anvil",
    "phonetic": "/ˈdæmɪʤd ˈænvəl/",
    "meaning": "损坏的铁砧",
    "sentence": "A badly worn anvil.",
    "translation": "磨损严重的铁砧。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 59.314,
      "sentenceStart": 61.356,
      "end": 63.243
    }
  },
  {
    "id": "tools_and_gear-p07-c14",
    "word": "Enchanted Book",
    "phonetic": "/ɛnˈʧænɪd bʊk/",
    "meaning": "附魔书",
    "sentence": "A book with a magic upgrade.",
    "translation": "一本魔法升级的书。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 64.343,
      "sentenceStart": 66.399,
      "end": 68.503
    }
  },
  {
    "id": "tools_and_gear-p07-c15",
    "word": "Writable Book",
    "phonetic": "/ˈraɪtəbəl bʊk/",
    "meaning": "可写书",
    "sentence": "A book ready for writing.",
    "translation": "一本准备写作的书。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_07.mp3",
      "wordStart": 69.603,
      "sentenceStart": 71.507,
      "end": 73.355
    }
  },
  {
    "id": "tools_and_gear-p08-c01",
    "word": "Leather Armor",
    "phonetic": "/ˈlɛðər ˈɑrmər/",
    "meaning": "皮甲",
    "sentence": "Light basic armor.",
    "translation": "轻型基础装甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.922,
      "end": 3.589
    }
  },
  {
    "id": "tools_and_gear-p08-c02",
    "word": "Chainmail Armor",
    "phonetic": "/ˈtʃeɪnmeɪl ˈɑrmər/",
    "meaning": "锁子甲",
    "sentence": "Armor made of chain links.",
    "translation": "由链环制成的装甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 4.689,
      "sentenceStart": 6.543,
      "end": 8.49
    }
  },
  {
    "id": "tools_and_gear-p08-c03",
    "word": "Iron Armor",
    "phonetic": "/aɪərn ˈɑrmər/",
    "meaning": "铁甲",
    "sentence": "Strong armor made of iron.",
    "translation": "由铁制成的坚固盔甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 9.59,
      "sentenceStart": 11.364,
      "end": 13.364
    }
  },
  {
    "id": "tools_and_gear-p08-c04",
    "word": "Golden Armor",
    "phonetic": "/ˈgoʊldən ˈɑrmər/",
    "meaning": "黄金铠甲",
    "sentence": "Shiny armor made of gold.",
    "translation": "闪闪发亮的黄金铠甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 14.464,
      "sentenceStart": 16.376,
      "end": 18.374
    }
  },
  {
    "id": "tools_and_gear-p08-c05",
    "word": "Diamond Armor",
    "phonetic": "/ˈdaɪmənd ˈɑrmər/",
    "meaning": "钻石铠甲",
    "sentence": "Very strong armor made of diamond.",
    "translation": "由钻石制成的非常坚固的盔甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 19.474,
      "sentenceStart": 21.416,
      "end": 23.856
    }
  },
  {
    "id": "tools_and_gear-p08-c06",
    "word": "Netherite Armor",
    "phonetic": "/ˈnɛðəraɪt ˈɑrmər/",
    "meaning": "下界合金盔甲",
    "sentence": "The strongest armor family.",
    "translation": "最强铠甲家族。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 24.956,
      "sentenceStart": 27.044,
      "end": 29.176
    }
  },
  {
    "id": "tools_and_gear-p08-c07",
    "word": "Horse Armor",
    "phonetic": "/hɔrs ˈɑrmər/",
    "meaning": "马甲",
    "sentence": "Armor for a horse.",
    "translation": "马的盔甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 30.276,
      "sentenceStart": 32.075,
      "end": 33.63
    }
  },
  {
    "id": "tools_and_gear-p08-c08",
    "word": "Leather Horse Armor",
    "phonetic": "/ˈlɛðər hɔrs ˈɑrmər/",
    "meaning": "皮革马铠",
    "sentence": "Leather armor for a horse.",
    "translation": "马的皮甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 34.73,
      "sentenceStart": 36.921,
      "end": 38.839
    }
  },
  {
    "id": "tools_and_gear-p08-c09",
    "word": "Iron Horse Armor",
    "phonetic": "/aɪərn hɔrs ˈɑrmər/",
    "meaning": "铁马铠",
    "sentence": "Iron armor for a horse.",
    "translation": "马的铁甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 39.939,
      "sentenceStart": 42.079,
      "end": 44.043
    }
  },
  {
    "id": "tools_and_gear-p08-c10",
    "word": "Golden Horse Armor",
    "phonetic": "/ˈgoʊldən hɔrs ˈɑrmər/",
    "meaning": "金马铠",
    "sentence": "Gold armor for a horse.",
    "translation": "马的金甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 45.143,
      "sentenceStart": 47.471,
      "end": 49.284
    }
  },
  {
    "id": "tools_and_gear-p08-c11",
    "word": "Diamond Horse Armor",
    "phonetic": "/ˈdaɪmənd hɔrs ˈɑrmər/",
    "meaning": "钻石马铠",
    "sentence": "Diamond armor for a horse.",
    "translation": "马的钻石盔甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 50.384,
      "sentenceStart": 52.73,
      "end": 54.689
    }
  },
  {
    "id": "tools_and_gear-p08-c12",
    "word": "Wolf Armor",
    "phonetic": "/wʊlf ˈɑrmər/",
    "meaning": "狼铠",
    "sentence": "Armor for a wolf.",
    "translation": "狼的盔甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 55.789,
      "sentenceStart": 57.551,
      "end": 59.079
    }
  },
  {
    "id": "tools_and_gear-p08-c13",
    "word": "Turtle Helmet",
    "phonetic": "/ˈtərtəl ˈhɛlmət/",
    "meaning": "海龟头盔",
    "sentence": "A shell helmet from a turtle.",
    "translation": "乌龟的甲壳头盔。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 60.179,
      "sentenceStart": 62.17,
      "end": 64.217
    }
  },
  {
    "id": "tools_and_gear-p08-c14",
    "word": "Shield Pattern",
    "phonetic": "/ʃild ˈpætərn/",
    "meaning": "盾牌图案",
    "sentence": "A pattern added to a shield.",
    "translation": "添加到盾牌上的图案。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 65.317,
      "sentenceStart": 67.142,
      "end": 69.147
    }
  },
  {
    "id": "tools_and_gear-p08-c15",
    "word": "Armor Trim",
    "phonetic": "/ˈɑrmər trɪm/",
    "meaning": "装甲装饰",
    "sentence": "A decoration for armor.",
    "translation": "盔甲的装饰品。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_08.mp3",
      "wordStart": 70.247,
      "sentenceStart": 72.014,
      "end": 73.874
    }
  },
  {
    "id": "tools_and_gear-p09-c01",
    "word": "Wooden Pickaxe",
    "phonetic": "/ˈwʊdən ˈpɪkæks/",
    "meaning": "木镐",
    "sentence": "A simple wooden mining tool.",
    "translation": "一种简单的木制采矿工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.221,
      "end": 4.254
    }
  },
  {
    "id": "tools_and_gear-p09-c02",
    "word": "Stone Pickaxe",
    "phonetic": "/stoʊn ˈpɪkæks/",
    "meaning": "石镐",
    "sentence": "A stone mining tool.",
    "translation": "一种采石工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 5.354,
      "sentenceStart": 7.342,
      "end": 9.023
    }
  },
  {
    "id": "tools_and_gear-p09-c03",
    "word": "Iron Pickaxe",
    "phonetic": "/aɪərn ˈpɪkæks/",
    "meaning": "铁镐",
    "sentence": "A strong iron mining tool.",
    "translation": "强大的铁矿开采工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 10.123,
      "sentenceStart": 12.135,
      "end": 14.215
    }
  },
  {
    "id": "tools_and_gear-p09-c04",
    "word": "Golden Pickaxe",
    "phonetic": "/ˈgoʊldən ˈpɪkæks/",
    "meaning": "金镐",
    "sentence": "A shiny gold mining tool.",
    "translation": "闪亮的金矿开采工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 15.315,
      "sentenceStart": 17.523,
      "end": 19.476
    }
  },
  {
    "id": "tools_and_gear-p09-c05",
    "word": "Diamond Pickaxe",
    "phonetic": "/ˈdaɪmənd ˈpɪkæks/",
    "meaning": "钻石镐",
    "sentence": "A very strong mining tool.",
    "translation": "非常强大的采矿工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 20.576,
      "sentenceStart": 22.722,
      "end": 24.652
    }
  },
  {
    "id": "tools_and_gear-p09-c06",
    "word": "Netherite Pickaxe",
    "phonetic": "/ˈnɛðəraɪt ˈpɪkæks/",
    "meaning": "下界合金镐",
    "sentence": "The strongest mining tool.",
    "translation": "最强的挖矿工具。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 25.752,
      "sentenceStart": 28.018,
      "end": 29.866
    }
  },
  {
    "id": "tools_and_gear-p09-c07",
    "word": "Wooden Sword",
    "phonetic": "/ˈwʊdən sɔrd/",
    "meaning": "木剑",
    "sentence": "A simple wooden sword.",
    "translation": "一把简单的木剑。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 30.966,
      "sentenceStart": 32.728,
      "end": 34.466
    }
  },
  {
    "id": "tools_and_gear-p09-c08",
    "word": "Stone Sword",
    "phonetic": "/stoʊn sɔrd/",
    "meaning": "石剑",
    "sentence": "A sword made of stone.",
    "translation": "一把石头制成的剑。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 35.566,
      "sentenceStart": 37.299,
      "end": 38.945
    }
  },
  {
    "id": "tools_and_gear-p09-c09",
    "word": "Iron Sword",
    "phonetic": "/aɪərn sɔrd/",
    "meaning": "铁剑",
    "sentence": "A strong iron sword.",
    "translation": "一把坚固的铁剑。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 40.045,
      "sentenceStart": 41.783,
      "end": 43.513
    }
  },
  {
    "id": "tools_and_gear-p09-c10",
    "word": "Golden Sword",
    "phonetic": "/ˈgoʊldən sɔrd/",
    "meaning": "金剑",
    "sentence": "A shiny gold sword.",
    "translation": "一把闪闪发光的金剑。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 44.613,
      "sentenceStart": 46.515,
      "end": 48.166
    }
  },
  {
    "id": "tools_and_gear-p09-c11",
    "word": "Diamond Sword",
    "phonetic": "/ˈdaɪmənd sɔrd/",
    "meaning": "钻石剑",
    "sentence": "A very strong sword.",
    "translation": "一把非常强的剑。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 49.266,
      "sentenceStart": 51.153,
      "end": 52.824
    }
  },
  {
    "id": "tools_and_gear-p09-c12",
    "word": "Netherite Sword",
    "phonetic": "/ˈnɛðəraɪt sɔrd/",
    "meaning": "下界合金剑",
    "sentence": "The strongest sword.",
    "translation": "最强的剑。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 53.924,
      "sentenceStart": 55.906,
      "end": 57.473
    }
  },
  {
    "id": "tools_and_gear-p09-c13",
    "word": "Netherite Axe",
    "phonetic": "/ˈnɛðəraɪt æks/",
    "meaning": "下界合金斧",
    "sentence": "A strong netherite axe.",
    "translation": "一把坚固的下界合金斧头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 58.573,
      "sentenceStart": 60.61,
      "end": 62.571
    }
  },
  {
    "id": "tools_and_gear-p09-c14",
    "word": "Netherite Shovel",
    "phonetic": "/ˈnɛðəraɪt ˈʃəvəl/",
    "meaning": "下界合金锹",
    "sentence": "A strong netherite shovel.",
    "translation": "一把强力的下界合金铲子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 63.671,
      "sentenceStart": 65.749,
      "end": 67.684
    }
  },
  {
    "id": "tools_and_gear-p09-c15",
    "word": "Netherite Hoe",
    "phonetic": "/ˈnɛðəraɪt hoʊ/",
    "meaning": "下界合金锄",
    "sentence": "A strong netherite hoe.",
    "translation": "一把强力的下界合金锄头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_09.mp3",
      "wordStart": 68.784,
      "sentenceStart": 70.712,
      "end": 72.538
    }
  },
  {
    "id": "tools_and_gear-p10-c01",
    "word": "Wooden Axe",
    "phonetic": "/ˈwʊdən æks/",
    "meaning": "木斧",
    "sentence": "A simple wooden axe.",
    "translation": "一把简单的木斧。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.926,
      "end": 3.681
    }
  },
  {
    "id": "tools_and_gear-p10-c02",
    "word": "Wooden Shovel",
    "phonetic": "/ˈwʊdən ˈʃəvəl/",
    "meaning": "木锹",
    "sentence": "A simple wooden shovel.",
    "translation": "一把简单的木铲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 4.781,
      "sentenceStart": 6.578,
      "end": 8.372
    }
  },
  {
    "id": "tools_and_gear-p10-c03",
    "word": "Wooden Hoe",
    "phonetic": "/ˈwʊdən hoʊ/",
    "meaning": "木锄",
    "sentence": "A simple wooden hoe.",
    "translation": "一把简单的木锄头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 9.472,
      "sentenceStart": 11.151,
      "end": 12.789
    }
  },
  {
    "id": "tools_and_gear-p10-c04",
    "word": "Stone Axe",
    "phonetic": "/stoʊn æks/",
    "meaning": "石斧",
    "sentence": "An axe made of stone.",
    "translation": "石头制成的斧头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 13.889,
      "sentenceStart": 15.655,
      "end": 17.397
    }
  },
  {
    "id": "tools_and_gear-p10-c05",
    "word": "Stone Shovel",
    "phonetic": "/stoʊn ˈʃəvəl/",
    "meaning": "石锹",
    "sentence": "A shovel made of stone.",
    "translation": "石头制成的铲子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 18.497,
      "sentenceStart": 20.277,
      "end": 21.994
    }
  },
  {
    "id": "tools_and_gear-p10-c06",
    "word": "Stone Hoe",
    "phonetic": "/stoʊn hoʊ/",
    "meaning": "石锄",
    "sentence": "A hoe made of stone.",
    "translation": "石头做的锄头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 23.094,
      "sentenceStart": 24.736,
      "end": 26.349
    }
  },
  {
    "id": "tools_and_gear-p10-c07",
    "word": "Iron Axe",
    "phonetic": "/aɪərn æks/",
    "meaning": "铁斧",
    "sentence": "A strong iron axe.",
    "translation": "一把坚固的铁斧。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 27.449,
      "sentenceStart": 29.195,
      "end": 30.907
    }
  },
  {
    "id": "tools_and_gear-p10-c08",
    "word": "Iron Shovel",
    "phonetic": "/aɪərn ˈʃəvəl/",
    "meaning": "铁锹",
    "sentence": "A strong iron shovel.",
    "translation": "一把坚固的铁铲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 32.007,
      "sentenceStart": 33.787,
      "end": 35.602
    }
  },
  {
    "id": "tools_and_gear-p10-c09",
    "word": "Iron Hoe",
    "phonetic": "/aɪərn hoʊ/",
    "meaning": "铁锄",
    "sentence": "A strong iron hoe.",
    "translation": "一把坚固的铁锄头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 36.702,
      "sentenceStart": 38.346,
      "end": 40.001
    }
  },
  {
    "id": "tools_and_gear-p10-c10",
    "word": "Golden Axe",
    "phonetic": "/ˈgoʊldən æks/",
    "meaning": "金斧",
    "sentence": "A shiny gold axe.",
    "translation": "一把闪闪发光的金斧头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 41.101,
      "sentenceStart": 43.022,
      "end": 44.71
    }
  },
  {
    "id": "tools_and_gear-p10-c11",
    "word": "Golden Shovel",
    "phonetic": "/ˈgoʊldən ˈʃəvəl/",
    "meaning": "金锹",
    "sentence": "A shiny gold shovel.",
    "translation": "一把闪闪发光的金铲子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 45.81,
      "sentenceStart": 47.744,
      "end": 49.457
    }
  },
  {
    "id": "tools_and_gear-p10-c12",
    "word": "Golden Hoe",
    "phonetic": "/ˈgoʊldən hoʊ/",
    "meaning": "金锄",
    "sentence": "A shiny gold hoe.",
    "translation": "一把闪亮的金锄头。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 50.557,
      "sentenceStart": 52.364,
      "end": 53.936
    }
  },
  {
    "id": "tools_and_gear-p10-c13",
    "word": "Diamond Shovel",
    "phonetic": "/ˈdaɪmənd ˈʃəvəl/",
    "meaning": "钻石锹",
    "sentence": "A very strong shovel.",
    "translation": "一把非常强力的铲子。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 55.036,
      "sentenceStart": 56.965,
      "end": 58.64
    }
  },
  {
    "id": "tools_and_gear-p10-c14",
    "word": "Diamond Leggings",
    "phonetic": "/ˈdaɪmənd ˈlɛgɪŋz/",
    "meaning": "钻石护腿",
    "sentence": "Strong diamond leg armor.",
    "translation": "坚固的钻石腿甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 59.74,
      "sentenceStart": 61.742,
      "end": 63.713
    }
  },
  {
    "id": "tools_and_gear-p10-c15",
    "word": "Netherite Leggings",
    "phonetic": "/ˈnɛðəraɪt ˈlɛgɪŋz/",
    "meaning": "下界合金护腿",
    "sentence": "Very strong netherite leg armor.",
    "translation": "非常坚固的下界合金腿甲。",
    "category": "工具与装备",
    "audio": {
      "src": "/audio/tools_and_gear/page_10.mp3",
      "wordStart": 64.813,
      "sentenceStart": 66.959,
      "end": 69.195
    }
  },
  {
    "id": "places_and_biomes-p01-c01",
    "word": "Plains",
    "phonetic": "/pleɪnz/",
    "meaning": "平原",
    "sentence": "A wide grassy place.",
    "translation": "一片宽阔的草地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 5.696,
      "sentenceStart": 7.225,
      "end": 9.028
    }
  },
  {
    "id": "places_and_biomes-p01-c02",
    "word": "Forest",
    "phonetic": "/ˈfɔrɪst/",
    "meaning": "森林",
    "sentence": "A place with trees.",
    "translation": "有树的地方。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 10.128,
      "sentenceStart": 11.619,
      "end": 13.191
    }
  },
  {
    "id": "places_and_biomes-p01-c03",
    "word": "Birch Forest",
    "phonetic": "/bərʧ ˈfɔrɪst/",
    "meaning": "桦木森林",
    "sentence": "A white tree forest.",
    "translation": "一片白色的树林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 14.291,
      "sentenceStart": 16.208,
      "end": 17.87
    }
  },
  {
    "id": "places_and_biomes-p01-c04",
    "word": "Dark Forest",
    "phonetic": "/dɑrk ˈfɔrɪst/",
    "meaning": "黑森林",
    "sentence": "A shadowy forest.",
    "translation": "一片阴暗的森林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 18.97,
      "sentenceStart": 20.83,
      "end": 22.423
    }
  },
  {
    "id": "places_and_biomes-p01-c05",
    "word": "Jungle",
    "phonetic": "/ˈʤəŋgəl/",
    "meaning": "丛林",
    "sentence": "A thick green jungle.",
    "translation": "茂密的绿色丛林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 23.523,
      "sentenceStart": 24.953,
      "end": 26.67
    }
  },
  {
    "id": "places_and_biomes-p01-c06",
    "word": "Desert",
    "phonetic": "/ˈdɛzərt/",
    "meaning": "沙漠",
    "sentence": "A hot sandy place.",
    "translation": "炎热的沙地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 27.77,
      "sentenceStart": 29.258,
      "end": 30.951
    }
  },
  {
    "id": "places_and_biomes-p01-c07",
    "word": "Savanna",
    "phonetic": "/səˈvænə/",
    "meaning": "热带草原",
    "sentence": "A dry grassy place.",
    "translation": "干燥的草地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 32.051,
      "sentenceStart": 33.522,
      "end": 35.296
    }
  },
  {
    "id": "places_and_biomes-p01-c08",
    "word": "Swamp",
    "phonetic": "/swɔmp/",
    "meaning": "沼泽",
    "sentence": "A wet muddy place.",
    "translation": "潮湿泥泞的地方。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 36.396,
      "sentenceStart": 37.783,
      "end": 39.369
    }
  },
  {
    "id": "places_and_biomes-p01-c09",
    "word": "Taiga",
    "phonetic": "/ˈtaɪɡə/",
    "meaning": "针叶林",
    "sentence": "A cold forest.",
    "translation": "寒冷的森林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 40.469,
      "sentenceStart": 41.94,
      "end": 43.463
    }
  },
  {
    "id": "places_and_biomes-p01-c10",
    "word": "Snowy Plains",
    "phonetic": "/snoʊi pleɪnz/",
    "meaning": "雪原",
    "sentence": "A snowy flat place.",
    "translation": "白雪皑皑的平坦之地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 44.563,
      "sentenceStart": 46.458,
      "end": 48.246
    }
  },
  {
    "id": "places_and_biomes-p01-c11",
    "word": "Mountains",
    "phonetic": "/ˈmaʊntənz/",
    "meaning": "山脉",
    "sentence": "Tall rocky mountains.",
    "translation": "高大的落基山脉。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 49.346,
      "sentenceStart": 50.954,
      "end": 52.678
    }
  },
  {
    "id": "places_and_biomes-p01-c12",
    "word": "Ocean",
    "phonetic": "/ˈoʊʃən/",
    "meaning": "海洋",
    "sentence": "A big blue ocean.",
    "translation": "一片广阔的蓝色海洋。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_01.mp3",
      "wordStart": 53.778,
      "sentenceStart": 55.208,
      "end": 56.778
    }
  },
  {
    "id": "places_and_biomes-p02-c01",
    "word": "River",
    "phonetic": "/ˈrɪvər/",
    "meaning": "河流",
    "sentence": "A flowing river.",
    "translation": "一条流动的河流。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.565,
      "end": 3.017
    }
  },
  {
    "id": "places_and_biomes-p02-c02",
    "word": "Beach",
    "phonetic": "/biʧ/",
    "meaning": "沙滩",
    "sentence": "A sandy beach.",
    "translation": "一片沙滩。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 4.117,
      "sentenceStart": 5.502,
      "end": 6.931
    }
  },
  {
    "id": "places_and_biomes-p02-c03",
    "word": "Cherry Grove",
    "phonetic": "/ˈʧɛri groʊv/",
    "meaning": "樱花树林",
    "sentence": "A pink tree place.",
    "translation": "一个粉红色的树的地方。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 8.031,
      "sentenceStart": 9.847,
      "end": 11.398
    }
  },
  {
    "id": "places_and_biomes-p02-c04",
    "word": "Meadow",
    "phonetic": "/ˈmɛˌdoʊ/",
    "meaning": "草甸",
    "sentence": "A flower meadow.",
    "translation": "一片花草甸。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 12.498,
      "sentenceStart": 13.944,
      "end": 15.345
    }
  },
  {
    "id": "places_and_biomes-p02-c05",
    "word": "Mangrove Swamp",
    "phonetic": "/ˈmæŋˌgroʊv swɔmp/",
    "meaning": "红树林沼泽",
    "sentence": "A swamp with roots.",
    "translation": "有根的沼泽。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 16.445,
      "sentenceStart": 18.423,
      "end": 20.035
    }
  },
  {
    "id": "places_and_biomes-p02-c06",
    "word": "Mushroom Fields",
    "phonetic": "/ˈməʃrum fildz/",
    "meaning": "蘑菇岛",
    "sentence": "A mushroom island.",
    "translation": "一座蘑菇岛。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 21.135,
      "sentenceStart": 23.206,
      "end": 24.752
    }
  },
  {
    "id": "places_and_biomes-p02-c07",
    "word": "Frozen Ocean",
    "phonetic": "/ˈfroʊzən ˈoʊʃən/",
    "meaning": "冻洋",
    "sentence": "A cold icy ocean.",
    "translation": "冰冷的海洋。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 25.852,
      "sentenceStart": 27.854,
      "end": 29.656
    }
  },
  {
    "id": "places_and_biomes-p02-c08",
    "word": "Warm Ocean",
    "phonetic": "/wɔrm ˈoʊʃən/",
    "meaning": "暖水海洋",
    "sentence": "A warm blue ocean.",
    "translation": "温暖的蓝色海洋。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 30.756,
      "sentenceStart": 32.51,
      "end": 34.09
    }
  },
  {
    "id": "places_and_biomes-p02-c09",
    "word": "Cave",
    "phonetic": "/keɪv/",
    "meaning": "洞穴",
    "sentence": "A dark cave.",
    "translation": "一个黑暗的洞穴。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 35.19,
      "sentenceStart": 36.573,
      "end": 37.925
    }
  },
  {
    "id": "places_and_biomes-p02-c10",
    "word": "Lush Caves",
    "phonetic": "/ləʃ keɪvz/",
    "meaning": "繁茂洞穴",
    "sentence": "A green cave.",
    "translation": "一个绿色的洞穴。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 39.025,
      "sentenceStart": 40.784,
      "end": 42.122
    }
  },
  {
    "id": "places_and_biomes-p02-c11",
    "word": "Dripstone Caves",
    "phonetic": "/ˈdrɪpstoʊn keɪvz/",
    "meaning": "溶洞",
    "sentence": "A pointed stone cave.",
    "translation": "一个尖尖的石洞。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 43.222,
      "sentenceStart": 45.363,
      "end": 47.138
    }
  },
  {
    "id": "places_and_biomes-p02-c12",
    "word": "Deep Dark",
    "phonetic": "/dip dɑrk/",
    "meaning": "深暗之域",
    "sentence": "A very dark place.",
    "translation": "一个非常黑暗的地方。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 48.238,
      "sentenceStart": 49.95,
      "end": 51.576
    }
  },
  {
    "id": "places_and_biomes-p02-c13",
    "word": "Nether Wastes",
    "phonetic": "/ˈnɛðər weɪsts/",
    "meaning": "下界荒地",
    "sentence": "A hot nether place.",
    "translation": "一个炎热的阴间。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 52.676,
      "sentenceStart": 54.584,
      "end": 56.237
    }
  },
  {
    "id": "places_and_biomes-p02-c14",
    "word": "Soul Sand Valley",
    "phonetic": "/soʊl sænd ˈvæli/",
    "meaning": "灵魂沙峡谷",
    "sentence": "A spooky nether valley.",
    "translation": "阴森恐怖的幽谷。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 57.337,
      "sentenceStart": 59.391,
      "end": 61.241
    }
  },
  {
    "id": "places_and_biomes-p02-c15",
    "word": "The End",
    "phonetic": "/ðə ɛnd/",
    "meaning": "末地",
    "sentence": "A strange final place.",
    "translation": "一个奇怪的最终地点。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_02.mp3",
      "wordStart": 62.341,
      "sentenceStart": 63.851,
      "end": 65.726
    }
  },
  {
    "id": "places_and_biomes-p03-c01",
    "word": "Badlands",
    "phonetic": "/ˈbæˌdlændz/",
    "meaning": "恶地",
    "sentence": "Badlands.",
    "translation": "荒地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.838,
      "end": 3.06
    }
  },
  {
    "id": "places_and_biomes-p03-c02",
    "word": "Bamboo Jungle",
    "phonetic": "/bæmˈbu ˈʤəŋgəl/",
    "meaning": "竹林",
    "sentence": "Jungle filled with bamboo.",
    "translation": "丛林里长满了竹子。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 4.16,
      "sentenceStart": 6.139,
      "end": 8.074
    }
  },
  {
    "id": "places_and_biomes-p03-c03",
    "word": "Basalt Deltas",
    "phonetic": "/bəˈsɔlt ˈdɛltəz/",
    "meaning": "玄武岩三角洲",
    "sentence": "Dark rocky land with lava.",
    "translation": "有熔岩的黑暗岩石土地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 9.174,
      "sentenceStart": 11.351,
      "end": 13.488
    }
  },
  {
    "id": "places_and_biomes-p03-c04",
    "word": "Cold Ocean",
    "phonetic": "/koʊld ˈoʊʃən/",
    "meaning": "冷水海洋",
    "sentence": "Cold water for swimming fish.",
    "translation": "冷水适合鱼儿游泳。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 14.588,
      "sentenceStart": 16.412,
      "end": 18.549
    }
  },
  {
    "id": "places_and_biomes-p03-c05",
    "word": "Crimson Forest",
    "phonetic": "/ˈkrɪmzən ˈfɔrɪst/",
    "meaning": "绯红森林",
    "sentence": "Nether forest with red fungi.",
    "translation": "下界森林里有红色真菌。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 19.649,
      "sentenceStart": 21.69,
      "end": 23.981
    }
  },
  {
    "id": "places_and_biomes-p03-c06",
    "word": "Deep Cold Ocean",
    "phonetic": "/dip koʊld ˈoʊʃən/",
    "meaning": "冷水深海",
    "sentence": "Cold water over deep seabed.",
    "translation": "深海海底的冷水。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 25.081,
      "sentenceStart": 27.235,
      "end": 29.52
    }
  },
  {
    "id": "places_and_biomes-p03-c07",
    "word": "Deep Frozen Ocean",
    "phonetic": "/dip ˈfroʊzən ˈoʊʃən/",
    "meaning": "冰冻深海",
    "sentence": "Deep water below icebergs.",
    "translation": "冰山下方的深水。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 30.62,
      "sentenceStart": 32.869,
      "end": 35.054
    }
  },
  {
    "id": "places_and_biomes-p03-c08",
    "word": "Deep Lukewarm Ocean",
    "phonetic": "/dip ˈlukˈwɔrm ˈoʊʃən/",
    "meaning": "温水深海",
    "sentence": "Deep lukewarm ocean water.",
    "translation": "温热的深海水。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 36.154,
      "sentenceStart": 38.483,
      "end": 40.577
    }
  },
  {
    "id": "places_and_biomes-p03-c09",
    "word": "Deep Ocean",
    "phonetic": "/dip ˈoʊʃən/",
    "meaning": "深海",
    "sentence": "Ocean with a low seabed.",
    "translation": "海底较低的海洋。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 41.677,
      "sentenceStart": 43.456,
      "end": 45.339
    }
  },
  {
    "id": "places_and_biomes-p03-c10",
    "word": "End Barrens",
    "phonetic": "/ɛnd ˈbærənz/",
    "meaning": "末地荒地",
    "sentence": "Bare edges of End islands.",
    "translation": "末地群岛光秃秃的边缘。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 46.439,
      "sentenceStart": 48.276,
      "end": 50.32
    }
  },
  {
    "id": "places_and_biomes-p03-c11",
    "word": "End Highlands",
    "phonetic": "/ɛnd ˈhaɪləndz/",
    "meaning": "末地高地",
    "sentence": "High ground with chorus plants.",
    "translation": "高地有紫颂植物。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 51.42,
      "sentenceStart": 53.261,
      "end": 55.308
    }
  },
  {
    "id": "places_and_biomes-p03-c12",
    "word": "End Midlands",
    "phonetic": "/ɛnd ˈmɪˌdlændz/",
    "meaning": "末地内陆",
    "sentence": "Lower land near End highlands.",
    "translation": "末地高地附近的低地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 56.408,
      "sentenceStart": 58.279,
      "end": 60.478
    }
  },
  {
    "id": "places_and_biomes-p03-c13",
    "word": "Eroded Badlands",
    "phonetic": "/ɪˈroʊdɪd ˈbæˌdlændz/",
    "meaning": "风蚀恶地",
    "sentence": "Eroded Badlands.",
    "translation": "被侵蚀的荒地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 61.578,
      "sentenceStart": 63.821,
      "end": 65.422
    }
  },
  {
    "id": "places_and_biomes-p03-c14",
    "word": "Flower Forest",
    "phonetic": "/flaʊər ˈfɔrɪst/",
    "meaning": "繁花森林",
    "sentence": "Forest filled with flowers.",
    "translation": "森林开满鲜花。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 66.522,
      "sentenceStart": 68.463,
      "end": 70.336
    }
  },
  {
    "id": "places_and_biomes-p03-c15",
    "word": "Frozen Peaks",
    "phonetic": "/ˈfroʊzən piks/",
    "meaning": "冰封山峰",
    "sentence": "Frozen Peaks.",
    "translation": "冰冻的山峰。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_03.mp3",
      "wordStart": 71.436,
      "sentenceStart": 73.402,
      "end": 74.831
    }
  },
  {
    "id": "places_and_biomes-p04-c01",
    "word": "Frozen River",
    "phonetic": "/ˈfroʊzən ˈrɪvər/",
    "meaning": "冻河",
    "sentence": "Icy river surface.",
    "translation": "冰冷的河面。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.122,
      "end": 3.909
    }
  },
  {
    "id": "places_and_biomes-p04-c02",
    "word": "Grove",
    "phonetic": "/groʊv/",
    "meaning": "雪林",
    "sentence": "Snowy spruce mountain forest.",
    "translation": "白雪皑皑的云杉山林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 5.009,
      "sentenceStart": 6.436,
      "end": 8.731
    }
  },
  {
    "id": "places_and_biomes-p04-c03",
    "word": "Ice Spikes",
    "phonetic": "/aɪs spaɪks/",
    "meaning": "冰刺之地",
    "sentence": "Tall ice towers.",
    "translation": "高大的冰塔。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 9.831,
      "sentenceStart": 11.555,
      "end": 13.131
    }
  },
  {
    "id": "places_and_biomes-p04-c04",
    "word": "Jagged Peaks",
    "phonetic": "/ʤægd piks/",
    "meaning": "尖峭山峰",
    "sentence": "Jagged Peaks.",
    "translation": "锯齿状的山峰。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 14.231,
      "sentenceStart": 16.135,
      "end": 17.474
    }
  },
  {
    "id": "places_and_biomes-p04-c05",
    "word": "Lukewarm Ocean",
    "phonetic": "/ˈlukˈwɔrm ˈoʊʃən/",
    "meaning": "温水海洋",
    "sentence": "Mildly warm seawater.",
    "translation": "温和温暖的海水。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 18.574,
      "sentenceStart": 20.52,
      "end": 22.313
    }
  },
  {
    "id": "places_and_biomes-p04-c06",
    "word": "Old Growth Birch Forest",
    "phonetic": "/oʊld groʊθ bərʧ ˈfɔrɪst/",
    "meaning": "原始桦木森林",
    "sentence": "Forest with very tall birches.",
    "translation": "森林里有很高的白桦树。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 23.413,
      "sentenceStart": 26.017,
      "end": 28.357
    }
  },
  {
    "id": "places_and_biomes-p04-c07",
    "word": "Old Growth Pine Taiga",
    "phonetic": "/oʊld groʊθ paɪn ˈtaɪɡə/",
    "meaning": "原始松木针叶林",
    "sentence": "Spruce forest with bare trunks.",
    "translation": "树干光秃秃的云杉林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 29.457,
      "sentenceStart": 32.024,
      "end": 34.326
    }
  },
  {
    "id": "places_and_biomes-p04-c08",
    "word": "Old Growth Spruce Taiga",
    "phonetic": "/oʊld groʊθ sprus ˈtaɪɡə/",
    "meaning": "原始云杉针叶林",
    "sentence": "Forest with old tall spruces.",
    "translation": "有老高云杉的森林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 35.426,
      "sentenceStart": 38.043,
      "end": 40.359
    }
  },
  {
    "id": "places_and_biomes-p04-c09",
    "word": "Pale Garden",
    "phonetic": "/peɪl ˈgɑrdən/",
    "meaning": "苍白之园",
    "sentence": "Quiet pale oak forest.",
    "translation": "安静的苍白橡树林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 41.459,
      "sentenceStart": 43.276,
      "end": 45.249
    }
  },
  {
    "id": "places_and_biomes-p04-c10",
    "word": "Savanna Plateau",
    "phonetic": "/səˈvænə plæˈtoʊ/",
    "meaning": "热带高原",
    "sentence": "High flat savanna land.",
    "translation": "高平坦的稀树草原。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 46.349,
      "sentenceStart": 48.417,
      "end": 50.337
    }
  },
  {
    "id": "places_and_biomes-p04-c11",
    "word": "Small End Islands",
    "phonetic": "/smɔl ɛnd ˈaɪləndz/",
    "meaning": "末地小型岛屿",
    "sentence": "Small islands above the void.",
    "translation": "虚空之上的小岛。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 51.437,
      "sentenceStart": 53.656,
      "end": 55.821
    }
  },
  {
    "id": "places_and_biomes-p04-c12",
    "word": "Snowy Beach",
    "phonetic": "/snoʊi biʧ/",
    "meaning": "积雪沙滩",
    "sentence": "Cold snow-covered shore.",
    "translation": "寒冷的冰雪覆盖的海岸。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 56.921,
      "sentenceStart": 58.696,
      "end": 60.535
    }
  },
  {
    "id": "places_and_biomes-p04-c13",
    "word": "Snowy Slopes",
    "phonetic": "/snoʊi sloʊps/",
    "meaning": "积雪山坡",
    "sentence": "Snowy Slopes.",
    "translation": "雪坡。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 61.635,
      "sentenceStart": 63.51,
      "end": 64.896
    }
  },
  {
    "id": "places_and_biomes-p04-c14",
    "word": "Snowy Taiga",
    "phonetic": "/snoʊi ˈtaɪɡə/",
    "meaning": "积雪针叶林",
    "sentence": "Snowy forest with spruce trees.",
    "translation": "有云杉树的白雪皑皑的森林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 65.996,
      "sentenceStart": 67.788,
      "end": 70.105
    }
  },
  {
    "id": "places_and_biomes-p04-c15",
    "word": "Sparse Jungle",
    "phonetic": "/spɑrs ˈʤəŋgəl/",
    "meaning": "稀疏丛林",
    "sentence": "Jungle with widely spaced trees.",
    "translation": "丛林，树木稀疏。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_04.mp3",
      "wordStart": 71.205,
      "sentenceStart": 73.122,
      "end": 75.425
    }
  },
  {
    "id": "places_and_biomes-p05-c01",
    "word": "Stony Peaks",
    "phonetic": "/ˈstoʊni piks/",
    "meaning": "裸岩山峰",
    "sentence": "Rocky mountain peaks.",
    "translation": "落基山脉的山峰。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.01,
      "end": 3.719
    }
  },
  {
    "id": "places_and_biomes-p05-c02",
    "word": "Stony Shore",
    "phonetic": "/ˈstoʊni ʃɔr/",
    "meaning": "石岸",
    "sentence": "A rocky shore.",
    "translation": "岩石海岸。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 4.819,
      "sentenceStart": 6.594,
      "end": 7.929
    }
  },
  {
    "id": "places_and_biomes-p05-c03",
    "word": "Sulfur Caves",
    "phonetic": "/ˈsəlfər keɪvz/",
    "meaning": "硫磺洞",
    "sentence": "A sulfur cave biome.",
    "translation": "硫磺洞穴生物群系。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 9.029,
      "sentenceStart": 10.945,
      "end": 12.808
    }
  },
  {
    "id": "places_and_biomes-p05-c04",
    "word": "Sunflower Plains",
    "phonetic": "/ˈsənˌflaʊər pleɪnz/",
    "meaning": "向日葵平原",
    "sentence": "A field of sunflowers.",
    "translation": "一片向日葵田。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 13.908,
      "sentenceStart": 16.074,
      "end": 17.879
    }
  },
  {
    "id": "places_and_biomes-p05-c05",
    "word": "Warped Forest",
    "phonetic": "/wɔrpt ˈfɔrɪst/",
    "meaning": "诡异森林",
    "sentence": "A blue-green nether forest.",
    "translation": "一片蓝绿色的幽冥森林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 18.979,
      "sentenceStart": 20.908,
      "end": 22.928
    }
  },
  {
    "id": "places_and_biomes-p05-c06",
    "word": "Windswept Forest",
    "phonetic": "/ˈwɪnsˌwɛpt ˈfɔrɪst/",
    "meaning": "风袭森林",
    "sentence": "A windy forest.",
    "translation": "多风的森林。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 24.028,
      "sentenceStart": 26.221,
      "end": 27.734
    }
  },
  {
    "id": "places_and_biomes-p05-c07",
    "word": "Windswept Gravelly Hills",
    "phonetic": "/ˈwɪnsˌwɛpt ˈgrævəli hɪlz/",
    "meaning": "风袭沙砾丘陵",
    "sentence": "Windy hills with gravel.",
    "translation": "有风的山丘，有砾石。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 28.834,
      "sentenceStart": 31.581,
      "end": 33.503
    }
  },
  {
    "id": "places_and_biomes-p05-c08",
    "word": "Windswept Hills",
    "phonetic": "/ˈwɪnsˌwɛpt hɪlz/",
    "meaning": "风袭丘陵",
    "sentence": "High windy hills.",
    "translation": "高风山。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 34.603,
      "sentenceStart": 36.699,
      "end": 38.15
    }
  },
  {
    "id": "places_and_biomes-p05-c09",
    "word": "Windswept Savanna",
    "phonetic": "/ˈwɪnsˌwɛpt səˈvænə/",
    "meaning": "风袭热带草原",
    "sentence": "A windy savanna.",
    "translation": "多风的稀树草原。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 39.25,
      "sentenceStart": 41.496,
      "end": 42.974
    }
  },
  {
    "id": "places_and_biomes-p05-c10",
    "word": "Wooded Badlands",
    "phonetic": "/ˈwʊdɪd ˈbæˌdlændz/",
    "meaning": "疏林恶地",
    "sentence": "Badlands with trees.",
    "translation": "有树木的荒地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 44.074,
      "sentenceStart": 46.144,
      "end": 47.916
    }
  },
  {
    "id": "places_and_biomes-p05-c11",
    "word": "The Nether",
    "phonetic": "/ðə ˈnɛðər/",
    "meaning": "下界",
    "sentence": "A hot nether dimension.",
    "translation": "一个炎热的下界维度。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 49.016,
      "sentenceStart": 50.571,
      "end": 52.497
    }
  },
  {
    "id": "places_and_biomes-p05-c12",
    "word": "Overworld",
    "phonetic": "/ˈoʊvərˌwɜrld/",
    "meaning": "主世界",
    "sentence": "The main world.",
    "translation": "主世界。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 53.597,
      "sentenceStart": 55.297,
      "end": 56.668
    }
  },
  {
    "id": "places_and_biomes-p05-c13",
    "word": "Overworld Caves",
    "phonetic": "/ˈoʊvərˌwɜrld keɪvz/",
    "meaning": "主世界洞穴",
    "sentence": "Caves under the main world.",
    "translation": "主世界下方的洞穴。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 57.768,
      "sentenceStart": 59.839,
      "end": 61.655
    }
  },
  {
    "id": "places_and_biomes-p05-c14",
    "word": "Underground",
    "phonetic": "/ˈəndərˌgraʊnd/",
    "meaning": "地下",
    "sentence": "A place below the surface.",
    "translation": "地表以下的一个地方。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 62.755,
      "sentenceStart": 64.546,
      "end": 66.588
    }
  },
  {
    "id": "places_and_biomes-p05-c15",
    "word": "Nether Cave",
    "phonetic": "/ˈnɛðər keɪv/",
    "meaning": "地狱洞",
    "sentence": "A cave in the nether.",
    "translation": "下界的一个山洞。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_05.mp3",
      "wordStart": 67.688,
      "sentenceStart": 69.496,
      "end": 71.118
    }
  },
  {
    "id": "places_and_biomes-p06-c01",
    "word": "Island",
    "phonetic": "/ˈaɪlənd/",
    "meaning": "岛",
    "sentence": "Land surrounded by water.",
    "translation": "土地四面环水。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.61,
      "end": 3.659
    }
  },
  {
    "id": "places_and_biomes-p06-c02",
    "word": "Hill",
    "phonetic": "/hɪl/",
    "meaning": "爬坡道",
    "sentence": "A small raised landform.",
    "translation": "小型凸起地貌。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 4.759,
      "sentenceStart": 6.114,
      "end": 8.124
    }
  },
  {
    "id": "places_and_biomes-p06-c03",
    "word": "Valley",
    "phonetic": "/ˈvæli/",
    "meaning": "谷",
    "sentence": "Low land between hills.",
    "translation": "丘陵之间的低地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 9.224,
      "sentenceStart": 10.623,
      "end": 12.469
    }
  },
  {
    "id": "places_and_biomes-p06-c04",
    "word": "Cliff",
    "phonetic": "/klɪf/",
    "meaning": "悬崖",
    "sentence": "A steep rocky edge.",
    "translation": "陡峭的岩石边缘。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 13.569,
      "sentenceStart": 14.979,
      "end": 16.612
    }
  },
  {
    "id": "places_and_biomes-p06-c05",
    "word": "Waterfall",
    "phonetic": "/ˈwɔtərˌfɔl/",
    "meaning": "瀑布",
    "sentence": "Water falling down a cliff.",
    "translation": "水从悬崖上倾泻而下。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 17.712,
      "sentenceStart": 19.316,
      "end": 21.328
    }
  },
  {
    "id": "places_and_biomes-p06-c06",
    "word": "Lava Lake",
    "phonetic": "/ˈlɑvə leɪk/",
    "meaning": "熔岩湖",
    "sentence": "A lake made of lava.",
    "translation": "由熔岩构成的湖。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 22.428,
      "sentenceStart": 24.069,
      "end": 25.744
    }
  },
  {
    "id": "places_and_biomes-p06-c07",
    "word": "Canyon",
    "phonetic": "/ˈkænjən/",
    "meaning": "峡谷",
    "sentence": "A deep cut through land.",
    "translation": "深深地切开陆地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 26.844,
      "sentenceStart": 28.36,
      "end": 30.164
    }
  },
  {
    "id": "places_and_biomes-p06-c08",
    "word": "Ravine",
    "phonetic": "/rəˈvin/",
    "meaning": "峡谷",
    "sentence": "A long deep crack in the ground.",
    "translation": "地面上出现一条又长又深的裂缝。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 31.264,
      "sentenceStart": 32.743,
      "end": 34.962
    }
  },
  {
    "id": "places_and_biomes-p06-c09",
    "word": "Cave Entrance",
    "phonetic": "/keɪv ˈɛntrəns/",
    "meaning": "洞穴入口",
    "sentence": "The opening of a cave.",
    "translation": "一个山洞的开口。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 36.062,
      "sentenceStart": 37.924,
      "end": 39.739
    }
  },
  {
    "id": "places_and_biomes-p06-c10",
    "word": "Cave Lake",
    "phonetic": "/keɪv leɪk/",
    "meaning": "洞湖",
    "sentence": "A lake inside a cave.",
    "translation": "山洞内的一个湖。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 40.839,
      "sentenceStart": 42.509,
      "end": 44.318
    }
  },
  {
    "id": "places_and_biomes-p06-c11",
    "word": "Underground River",
    "phonetic": "/ˈəndərˌgraʊnd ˈrɪvər/",
    "meaning": "暗河",
    "sentence": "A river below the ground.",
    "translation": "一条河流在地下。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 45.418,
      "sentenceStart": 47.589,
      "end": 49.456
    }
  },
  {
    "id": "places_and_biomes-p06-c12",
    "word": "Mountain Peak",
    "phonetic": "/ˈmaʊntən pik/",
    "meaning": "山峰",
    "sentence": "The top of a mountain.",
    "translation": "一座山的山顶。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 50.556,
      "sentenceStart": 52.391,
      "end": 54.046
    }
  },
  {
    "id": "places_and_biomes-p06-c13",
    "word": "Forest Clearing",
    "phonetic": "/ˈfɔrɪst ˈklɪrɪŋ/",
    "meaning": "森林砍伐",
    "sentence": "An open space in a forest.",
    "translation": "森林中的一处空地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 55.146,
      "sentenceStart": 57.148,
      "end": 59.447
    }
  },
  {
    "id": "places_and_biomes-p06-c14",
    "word": "Desert Oasis",
    "phonetic": "/ˈdɛzərt oʊˈeɪsɪs/",
    "meaning": "沙漠绿洲",
    "sentence": "A watery place in a desert.",
    "translation": "沙漠中有水的地方。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 60.547,
      "sentenceStart": 62.573,
      "end": 64.711
    }
  },
  {
    "id": "places_and_biomes-p06-c15",
    "word": "Snowy Hill",
    "phonetic": "/snoʊi hɪl/",
    "meaning": "雪山",
    "sentence": "A hill covered with snow.",
    "translation": "一座被雪覆盖的小山。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_06.mp3",
      "wordStart": 65.811,
      "sentenceStart": 67.486,
      "end": 69.335
    }
  },
  {
    "id": "places_and_biomes-p07-c01",
    "word": "Home Base",
    "phonetic": "/hoʊm beɪs/",
    "meaning": "基地",
    "sentence": "A player's main safe place.",
    "translation": "玩家的主要安全场所。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.889,
      "end": 3.92
    }
  },
  {
    "id": "places_and_biomes-p07-c02",
    "word": "Starter Base",
    "phonetic": "/ˈstɑrtər beɪs/",
    "meaning": "入门基地",
    "sentence": "A first small base.",
    "translation": "第一个小基地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 5.02,
      "sentenceStart": 6.87,
      "end": 8.495
    }
  },
  {
    "id": "places_and_biomes-p07-c03",
    "word": "Farm Base",
    "phonetic": "/fɑrm beɪs/",
    "meaning": "农场基地",
    "sentence": "A base built near farms.",
    "translation": "在农场附近建立的基地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 9.595,
      "sentenceStart": 11.345,
      "end": 13.26
    }
  },
  {
    "id": "places_and_biomes-p07-c04",
    "word": "Mining Camp",
    "phonetic": "/ˈmaɪnɪŋ kæmp/",
    "meaning": "采矿营",
    "sentence": "A camp for mining trips.",
    "translation": "采矿旅行营地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 14.36,
      "sentenceStart": 16.122,
      "end": 18.002
    }
  },
  {
    "id": "places_and_biomes-p07-c05",
    "word": "Nether Base",
    "phonetic": "/ˈnɛðər beɪs/",
    "meaning": "下界基地",
    "sentence": "A safe base in the nether.",
    "translation": "下界的安全基地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 19.102,
      "sentenceStart": 20.868,
      "end": 22.843
    }
  },
  {
    "id": "places_and_biomes-p07-c06",
    "word": "Ocean Base",
    "phonetic": "/ˈoʊʃən beɪs/",
    "meaning": "海洋基地",
    "sentence": "A base near or under the ocean.",
    "translation": "靠近海洋或海底的基地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 23.943,
      "sentenceStart": 25.805,
      "end": 28.128
    }
  },
  {
    "id": "places_and_biomes-p07-c07",
    "word": "Tree House",
    "phonetic": "/tri haʊs/",
    "meaning": "树屋",
    "sentence": "A house built in a tree.",
    "translation": "一座建在树上的房子。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 29.228,
      "sentenceStart": 30.916,
      "end": 32.86
    }
  },
  {
    "id": "places_and_biomes-p07-c08",
    "word": "Mountain Base",
    "phonetic": "/ˈmaʊntən beɪs/",
    "meaning": "山地基地",
    "sentence": "A base in the mountains.",
    "translation": "山中的基地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 33.96,
      "sentenceStart": 35.876,
      "end": 37.695
    }
  },
  {
    "id": "places_and_biomes-p07-c09",
    "word": "Cave Base",
    "phonetic": "/keɪv beɪs/",
    "meaning": "洞穴基地",
    "sentence": "A base inside a cave.",
    "translation": "山洞内的基地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 38.795,
      "sentenceStart": 40.537,
      "end": 42.361
    }
  },
  {
    "id": "places_and_biomes-p07-c10",
    "word": "Desert Camp",
    "phonetic": "/ˈdɛzərt kæmp/",
    "meaning": "沙漠营地",
    "sentence": "A camp in the desert.",
    "translation": "沙漠中的一个营地。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 43.461,
      "sentenceStart": 45.283,
      "end": 47.015
    }
  },
  {
    "id": "places_and_biomes-p07-c11",
    "word": "Trading Hall",
    "phonetic": "/ˈtreɪdɪŋ hɔl/",
    "meaning": "交易大厅",
    "sentence": "A place for trading with villagers.",
    "translation": "与村民交易的场所。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 48.115,
      "sentenceStart": 49.89,
      "end": 52.174
    }
  },
  {
    "id": "places_and_biomes-p07-c12",
    "word": "Animal Pen",
    "phonetic": "/ˈænəməl pɛn/",
    "meaning": "动物围栏",
    "sentence": "A fenced place for animals.",
    "translation": "动物的围栏场所。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 53.274,
      "sentenceStart": 55.111,
      "end": 57.187
    }
  },
  {
    "id": "places_and_biomes-p07-c13",
    "word": "Workshop",
    "phonetic": "/ˈwərkˌʃɑp/",
    "meaning": "车间",
    "sentence": "A place for tools and crafting.",
    "translation": "工具和手工艺的地方。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 58.287,
      "sentenceStart": 59.887,
      "end": 62.144
    }
  },
  {
    "id": "places_and_biomes-p07-c14",
    "word": "Village Path",
    "phonetic": "/ˈvɪlɪʤ pæθ/",
    "meaning": "乡村小路",
    "sentence": "A path through a village.",
    "translation": "一条穿过村庄的小路。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 63.244,
      "sentenceStart": 65.115,
      "end": 66.772
    }
  },
  {
    "id": "places_and_biomes-p07-c15",
    "word": "Watch Post",
    "phonetic": "/wɔʧ poʊst/",
    "meaning": "观察帖子",
    "sentence": "A small lookout place.",
    "translation": "一个小小的瞭望台。",
    "category": "地点与生物群系",
    "audio": {
      "src": "/audio/places_and_biomes/page_07.mp3",
      "wordStart": 67.872,
      "sentenceStart": 69.634,
      "end": 71.379
    }
  },
  {
    "id": "structures_and_treasures-p01-c01",
    "word": "Village",
    "phonetic": "/ˈvɪlɪʤ/",
    "meaning": "村庄",
    "sentence": "A friendly village.",
    "translation": "一个友好的村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 5.877,
      "sentenceStart": 7.329,
      "end": 8.834
    }
  },
  {
    "id": "structures_and_treasures-p01-c02",
    "word": "House",
    "phonetic": "/haʊs/",
    "meaning": "House",
    "sentence": "A small house.",
    "translation": "小型房屋设计",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 9.934,
      "sentenceStart": 11.309,
      "end": 12.65
    }
  },
  {
    "id": "structures_and_treasures-p01-c03",
    "word": "Farm",
    "phonetic": "/fɑrm/",
    "meaning": "发育",
    "sentence": "A village farm.",
    "translation": "一个乡村农场。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 13.75,
      "sentenceStart": 15.11,
      "end": 16.567
    }
  },
  {
    "id": "structures_and_treasures-p01-c04",
    "word": "Well",
    "phonetic": "/wɛl/",
    "meaning": "出色地",
    "sentence": "A deep well.",
    "translation": "一口深井。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 17.667,
      "sentenceStart": 18.947,
      "end": 20.199
    }
  },
  {
    "id": "structures_and_treasures-p01-c05",
    "word": "Mineshaft",
    "phonetic": "/ˈmaɪnʃæft/",
    "meaning": "矿井",
    "sentence": "An old mine.",
    "translation": "一个老矿井。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 21.299,
      "sentenceStart": 22.97,
      "end": 24.256
    }
  },
  {
    "id": "structures_and_treasures-p01-c06",
    "word": "Dungeon",
    "phonetic": "/ˈdənʤən/",
    "meaning": "地下城",
    "sentence": "A hidden dungeon.",
    "translation": "一个隐藏的地牢。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 25.356,
      "sentenceStart": 26.847,
      "end": 28.332
    }
  },
  {
    "id": "structures_and_treasures-p01-c07",
    "word": "Desert Pyramid",
    "phonetic": "/ˈdɛzərt ˈpɪrəmɪd/",
    "meaning": "沙漠金字塔",
    "sentence": "A sand temple.",
    "translation": "一座沙庙。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 29.432,
      "sentenceStart": 31.511,
      "end": 32.966
    }
  },
  {
    "id": "structures_and_treasures-p01-c08",
    "word": "Jungle Temple",
    "phonetic": "/ˈʤəŋgəl ˈtɛmpəl/",
    "meaning": "丛林神庙",
    "sentence": "Old temple hidden in jungle.",
    "translation": "古老的寺庙隐藏在丛林中。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 34.066,
      "sentenceStart": 36.065,
      "end": 38.212
    }
  },
  {
    "id": "structures_and_treasures-p01-c09",
    "word": "Witch Hut",
    "phonetic": "/wɪʧ hət/",
    "meaning": "女巫小屋",
    "sentence": "A small swamp hut.",
    "translation": "一间沼泽小屋。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 39.312,
      "sentenceStart": 40.941,
      "end": 42.552
    }
  },
  {
    "id": "structures_and_treasures-p01-c10",
    "word": "Shipwreck",
    "phonetic": "/ˈʃɪprɛk/",
    "meaning": "海难",
    "sentence": "A broken ship.",
    "translation": "一艘破损的船。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 43.652,
      "sentenceStart": 45.224,
      "end": 46.627
    }
  },
  {
    "id": "structures_and_treasures-p01-c11",
    "word": "Ocean Monument",
    "phonetic": "/ˈoʊʃən ˈmɑnjəmənt/",
    "meaning": "海洋纪念碑",
    "sentence": "A huge sea building.",
    "translation": "一座巨大的海上建筑。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 47.727,
      "sentenceStart": 49.768,
      "end": 51.428
    }
  },
  {
    "id": "structures_and_treasures-p01-c12",
    "word": "Pillager Outpost",
    "phonetic": "/ˈpɪlɪʤər ˈaʊtˌpoʊst/",
    "meaning": "掠夺者前哨站",
    "sentence": "A raider tower.",
    "translation": "一座掠夺者塔。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_01.mp3",
      "wordStart": 52.528,
      "sentenceStart": 54.744,
      "end": 56.097
    }
  },
  {
    "id": "structures_and_treasures-p02-c01",
    "word": "Woodland Mansion",
    "phonetic": "/ˈwʊˌdlænd ˈmænʃən/",
    "meaning": "林地大厦",
    "sentence": "A giant forest house.",
    "translation": "一座巨大的森林房屋。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.267,
      "end": 4.034
    }
  },
  {
    "id": "structures_and_treasures-p02-c02",
    "word": "Ancient City",
    "phonetic": "/ˈeɪnʧənt ˈsɪti/",
    "meaning": "古城",
    "sentence": "A deep dark city.",
    "translation": "一座深邃黑暗的城市。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 5.134,
      "sentenceStart": 6.976,
      "end": 8.59
    }
  },
  {
    "id": "structures_and_treasures-p02-c03",
    "word": "Trail Ruins",
    "phonetic": "/treɪl ruɪnz/",
    "meaning": "小径废墟",
    "sentence": "Old buried ruins.",
    "translation": "老被掩埋的废墟。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 9.69,
      "sentenceStart": 11.612,
      "end": 13.422
    }
  },
  {
    "id": "structures_and_treasures-p02-c04",
    "word": "Trial Chamber",
    "phonetic": "/traɪəl ˈʧeɪmbər/",
    "meaning": "审判分庭",
    "sentence": "A challenge room.",
    "translation": "挑战室。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 14.522,
      "sentenceStart": 16.421,
      "end": 17.875
    }
  },
  {
    "id": "structures_and_treasures-p02-c05",
    "word": "Stronghold",
    "phonetic": "/ˈstrɔŋˌhoʊld/",
    "meaning": "据点",
    "sentence": "A hidden stone place.",
    "translation": "一个隐藏的石头地方。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 18.975,
      "sentenceStart": 20.642,
      "end": 22.279
    }
  },
  {
    "id": "structures_and_treasures-p02-c06",
    "word": "Nether Fortress",
    "phonetic": "/ˈnɛðər ˈfɔrtrəs/",
    "meaning": "地狱要塞",
    "sentence": "A dark nether fortress.",
    "translation": "一座黑暗的下界要塞。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 23.379,
      "sentenceStart": 25.425,
      "end": 27.33
    }
  },
  {
    "id": "structures_and_treasures-p02-c07",
    "word": "Bastion Remnant",
    "phonetic": "/ˈbæsʧən ˈrɛmnənt/",
    "meaning": "堡垒遗迹",
    "sentence": "A broken nether fortress.",
    "translation": "一座破损的下界要塞。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 28.43,
      "sentenceStart": 30.484,
      "end": 32.508
    }
  },
  {
    "id": "structures_and_treasures-p02-c08",
    "word": "End City",
    "phonetic": "/ɛnd ˈsɪti/",
    "meaning": "末地城",
    "sentence": "A tall end city.",
    "translation": "一座高端城市。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 33.608,
      "sentenceStart": 35.262,
      "end": 36.81
    }
  },
  {
    "id": "structures_and_treasures-p02-c09",
    "word": "Ruined Portal",
    "phonetic": "/ruɪnd ˈpɔrtəl/",
    "meaning": "被毁的传送门",
    "sentence": "A broken portal.",
    "translation": "一个破损的传送门。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 37.91,
      "sentenceStart": 39.814,
      "end": 41.276
    }
  },
  {
    "id": "structures_and_treasures-p02-c10",
    "word": "Igloo",
    "phonetic": "/ˈɪglu/",
    "meaning": "圆顶冰屋",
    "sentence": "A small snow house.",
    "translation": "一座小雪屋。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 42.376,
      "sentenceStart": 43.825,
      "end": 45.387
    }
  },
  {
    "id": "structures_and_treasures-p02-c11",
    "word": "Swamp Hut",
    "phonetic": "/swɔmp hət/",
    "meaning": "沼泽小屋",
    "sentence": "A hut in the swamp.",
    "translation": "沼泽中的一间小屋。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 46.487,
      "sentenceStart": 48.197,
      "end": 49.71
    }
  },
  {
    "id": "structures_and_treasures-p02-c12",
    "word": "Buried Treasure",
    "phonetic": "/ˈbɛrid ˈtrɛʒər/",
    "meaning": "埋藏的宝藏",
    "sentence": "A hidden treasure.",
    "translation": "一个隐藏的宝藏。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 50.81,
      "sentenceStart": 52.739,
      "end": 54.224
    }
  },
  {
    "id": "structures_and_treasures-p02-c13",
    "word": "Treasure Chest",
    "phonetic": "/ˈtrɛʒər ʧɛst/",
    "meaning": "宝箱",
    "sentence": "A chest with treasure.",
    "translation": "一个装有宝藏的箱子。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 55.324,
      "sentenceStart": 57.241,
      "end": 58.94
    }
  },
  {
    "id": "structures_and_treasures-p02-c14",
    "word": "Spawner",
    "phonetic": "/ˈspɔnər/",
    "meaning": "产卵者",
    "sentence": "A monster spawner.",
    "translation": "怪物生成器。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 60.04,
      "sentenceStart": 61.465,
      "end": 63.091
    }
  },
  {
    "id": "structures_and_treasures-p02-c15",
    "word": "Portal",
    "phonetic": "/ˈpɔrtəl/",
    "meaning": "门架",
    "sentence": "A magic doorway.",
    "translation": "一个神奇的门道。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_02.mp3",
      "wordStart": 64.191,
      "sentenceStart": 65.688,
      "end": 67.166
    }
  },
  {
    "id": "structures_and_treasures-p03-c01",
    "word": "Fortress",
    "phonetic": "/ˈfɔrtrəs/",
    "meaning": "堡垒",
    "sentence": "Strong building with protective walls.",
    "translation": "坚固的建筑，有防护墙。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.792,
      "end": 4.352
    }
  },
  {
    "id": "structures_and_treasures-p03-c02",
    "word": "Jungle Pyramid",
    "phonetic": "/ˈʤəŋgəl ˈpɪrəmɪd/",
    "meaning": "丛林金字塔",
    "sentence": "Old stone building with traps.",
    "translation": "有陷阱的古老石头建筑。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 5.452,
      "sentenceStart": 7.568,
      "end": 9.789
    }
  },
  {
    "id": "structures_and_treasures-p03-c03",
    "word": "Mansion",
    "phonetic": "/ˈmænʃən/",
    "meaning": "大厦",
    "sentence": "Large house with many rooms.",
    "translation": "大房子有很多房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 10.889,
      "sentenceStart": 12.414,
      "end": 14.497
    }
  },
  {
    "id": "structures_and_treasures-p03-c04",
    "word": "Mineshaft Mesa",
    "phonetic": "/ˈmaɪnʃæft ˈmeɪsə/",
    "meaning": "梅萨矿井",
    "sentence": "Old badlands mining tunnels.",
    "translation": "老荒地采矿隧道。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 15.597,
      "sentenceStart": 17.788,
      "end": 19.989
    }
  },
  {
    "id": "structures_and_treasures-p03-c05",
    "word": "Monument",
    "phonetic": "/ˈmɑnjəmənt/",
    "meaning": "纪念碑",
    "sentence": "Stone marker for important places.",
    "translation": "重要地点的石碑。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 21.089,
      "sentenceStart": 22.691,
      "end": 25.218
    }
  },
  {
    "id": "structures_and_treasures-p03-c06",
    "word": "Nether Fossil",
    "phonetic": "/ˈnɛðər ˈfɑsəl/",
    "meaning": "下界化石",
    "sentence": "Ancient bones in the Nether.",
    "translation": "下界的远古骸骨。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 26.318,
      "sentenceStart": 28.217,
      "end": 30.213
    }
  },
  {
    "id": "structures_and_treasures-p03-c07",
    "word": "Ocean Ruin Cold",
    "phonetic": "/ˈoʊʃən ruɪn koʊld/",
    "meaning": "海洋废墟寒冷",
    "sentence": "Cold-ocean stone ruins.",
    "translation": "寒海石遗址。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 31.313,
      "sentenceStart": 33.541,
      "end": 35.617
    }
  },
  {
    "id": "structures_and_treasures-p03-c08",
    "word": "Ocean Ruin Warm",
    "phonetic": "/ˈoʊʃən ruɪn wɔrm/",
    "meaning": "海洋废墟温暖",
    "sentence": "Warm-ocean sandstone ruins.",
    "translation": "暖洋砂岩遗址。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 36.717,
      "sentenceStart": 38.919,
      "end": 41.239
    }
  },
  {
    "id": "structures_and_treasures-p03-c09",
    "word": "Ruined Portal Desert",
    "phonetic": "/ruɪnd ˈpɔrtəl ˈdɛzərt/",
    "meaning": "传送门废墟沙漠",
    "sentence": "Broken desert gateway.",
    "translation": "破碎的沙漠门户。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 42.339,
      "sentenceStart": 44.863,
      "end": 46.785
    }
  },
  {
    "id": "structures_and_treasures-p03-c10",
    "word": "Ruined Portal Jungle",
    "phonetic": "/ruɪnd ˈpɔrtəl ˈʤəŋgəl/",
    "meaning": "废弃传送门丛林",
    "sentence": "Broken jungle gateway.",
    "translation": "破碎的丛林大门。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 47.885,
      "sentenceStart": 50.312,
      "end": 52.224
    }
  },
  {
    "id": "structures_and_treasures-p03-c11",
    "word": "Ruined Portal Mountain",
    "phonetic": "/ruɪnd ˈpɔrtəl ˈmaʊntən/",
    "meaning": "传送门山遗迹",
    "sentence": "Broken mountain gateway.",
    "translation": "山门残破。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 53.324,
      "sentenceStart": 55.745,
      "end": 57.669
    }
  },
  {
    "id": "structures_and_treasures-p03-c12",
    "word": "Ruined Portal Nether",
    "phonetic": "/ruɪnd ˈpɔrtəl ˈnɛðər/",
    "meaning": "废弃的下界传送门",
    "sentence": "Broken Nether gateway.",
    "translation": "破碎的虚空传送门。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 58.769,
      "sentenceStart": 61.19,
      "end": 63.032
    }
  },
  {
    "id": "structures_and_treasures-p03-c13",
    "word": "Ruined Portal Ocean",
    "phonetic": "/ruɪnd ˈpɔrtəl ˈoʊʃən/",
    "meaning": "毁坏的传送门海洋",
    "sentence": "Broken ocean gateway.",
    "translation": "破碎的海洋门户。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 64.132,
      "sentenceStart": 66.474,
      "end": 68.309
    }
  },
  {
    "id": "structures_and_treasures-p03-c14",
    "word": "Ruined Portal Swamp",
    "phonetic": "/ruɪnd ˈpɔrtəl swɔmp/",
    "meaning": "废弃传送门沼泽",
    "sentence": "Broken swamp gateway.",
    "translation": "破碎的沼泽大门。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 69.409,
      "sentenceStart": 71.784,
      "end": 73.65
    }
  },
  {
    "id": "structures_and_treasures-p03-c15",
    "word": "Shipwreck Beached",
    "phonetic": "/ˈʃɪprɛk biʧt/",
    "meaning": "沉船搁浅",
    "sentence": "Wrecked ship on the shore.",
    "translation": "岸边失事的船。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_03.mp3",
      "wordStart": 74.75,
      "sentenceStart": 76.692,
      "end": 78.385
    }
  },
  {
    "id": "structures_and_treasures-p04-c01",
    "word": "Trial Chambers",
    "phonetic": "/traɪəl ˈʧeɪmbərz/",
    "meaning": "审判分庭",
    "sentence": "A set of challenge rooms.",
    "translation": "一组挑战室。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.176,
      "end": 3.962
    }
  },
  {
    "id": "structures_and_treasures-p04-c02",
    "word": "Village Desert",
    "phonetic": "/ˈvɪlɪʤ ˈdɛzərt/",
    "meaning": "乡村沙漠",
    "sentence": "A desert village.",
    "translation": "一个沙漠村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 5.062,
      "sentenceStart": 7.016,
      "end": 8.533
    }
  },
  {
    "id": "structures_and_treasures-p04-c03",
    "word": "Village Plains",
    "phonetic": "/ˈvɪlɪʤ pleɪnz/",
    "meaning": "乡村平原",
    "sentence": "A plains village.",
    "translation": "一个平原村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 9.633,
      "sentenceStart": 11.602,
      "end": 13.082
    }
  },
  {
    "id": "structures_and_treasures-p04-c04",
    "word": "Village Savanna",
    "phonetic": "/ˈvɪlɪʤ səˈvænə/",
    "meaning": "稀树草原村",
    "sentence": "A savanna village.",
    "translation": "一个热带草原村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 14.182,
      "sentenceStart": 16.123,
      "end": 17.59
    }
  },
  {
    "id": "structures_and_treasures-p04-c05",
    "word": "Village Snowy",
    "phonetic": "/ˈvɪlɪʤ snoʊi/",
    "meaning": "雪村",
    "sentence": "A snowy village.",
    "translation": "一个白雪皑皑的村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 18.69,
      "sentenceStart": 20.556,
      "end": 22.011
    }
  },
  {
    "id": "structures_and_treasures-p04-c06",
    "word": "Village Taiga",
    "phonetic": "/ˈvɪlɪʤ ˈtaɪɡə/",
    "meaning": "针叶林村",
    "sentence": "A taiga village.",
    "translation": "一个针叶林村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 23.111,
      "sentenceStart": 24.936,
      "end": 26.345
    }
  },
  {
    "id": "structures_and_treasures-p04-c07",
    "word": "Desert Well",
    "phonetic": "/ˈdɛzərt wɛl/",
    "meaning": "沙漠之井",
    "sentence": "Sheltered desert water pool.",
    "translation": "受保护的沙漠水池。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 27.445,
      "sentenceStart": 29.21,
      "end": 31.343
    }
  },
  {
    "id": "structures_and_treasures-p04-c08",
    "word": "Fossil",
    "phonetic": "/ˈfɑsəl/",
    "meaning": "化石",
    "sentence": "Ancient remains underground.",
    "translation": "古代遗迹在地下。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 32.443,
      "sentenceStart": 33.868,
      "end": 36.013
    }
  },
  {
    "id": "structures_and_treasures-p04-c09",
    "word": "Geode",
    "phonetic": "/ˈdʒiːoʊd/",
    "meaning": "晶洞",
    "sentence": "Rock formation containing crystals.",
    "translation": "含有晶体的岩层。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 37.113,
      "sentenceStart": 38.617,
      "end": 41.183
    }
  },
  {
    "id": "structures_and_treasures-p04-c10",
    "word": "Dungeon Room",
    "phonetic": "/ˈdənʤən rum/",
    "meaning": "地牢室",
    "sentence": "Room with a monster spawner.",
    "translation": "有怪物刷怪笼的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 42.283,
      "sentenceStart": 44.136,
      "end": 46.106
    }
  },
  {
    "id": "structures_and_treasures-p04-c11",
    "word": "Village House",
    "phonetic": "/ˈvɪlɪʤ haʊs/",
    "meaning": "乡村别墅",
    "sentence": "A home for villagers.",
    "translation": "村民的家。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 47.206,
      "sentenceStart": 49.068,
      "end": 50.699
    }
  },
  {
    "id": "structures_and_treasures-p04-c12",
    "word": "Village Temple",
    "phonetic": "/ˈvɪlɪʤ ˈtɛmpəl/",
    "meaning": "村庙",
    "sentence": "Contains a brewing stand.",
    "translation": "包含一个酿造台。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 51.799,
      "sentenceStart": 53.698,
      "end": 55.6
    }
  },
  {
    "id": "structures_and_treasures-p04-c13",
    "word": "Village Library",
    "phonetic": "/ˈvɪlɪʤ ˈlaɪbrɛˌri/",
    "meaning": "乡村图书馆",
    "sentence": "Contains bookshelves and lecterns.",
    "translation": "包含书架和讲台。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 56.7,
      "sentenceStart": 58.821,
      "end": 61.192
    }
  },
  {
    "id": "structures_and_treasures-p04-c14",
    "word": "Village Blacksmith",
    "phonetic": "/ˈvɪlɪʤ ˈblæksˌmɪθ/",
    "meaning": "乡村铁匠",
    "sentence": "A village metalworking workshop.",
    "translation": "村里的金工作坊。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 62.292,
      "sentenceStart": 64.47,
      "end": 66.827
    }
  },
  {
    "id": "structures_and_treasures-p04-c15",
    "word": "Portal Room",
    "phonetic": "/ˈpɔrtəl rum/",
    "meaning": "传送门室",
    "sentence": "Room containing a portal.",
    "translation": "包含传送门的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_04.mp3",
      "wordStart": 67.927,
      "sentenceStart": 69.754,
      "end": 71.631
    }
  },
  {
    "id": "structures_and_treasures-p05-c01",
    "word": "Roof",
    "phonetic": "/rʊf/",
    "meaning": "屋顶",
    "sentence": "The top cover of a building.",
    "translation": "建筑物的顶盖。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.492,
      "end": 3.511
    }
  },
  {
    "id": "structures_and_treasures-p05-c02",
    "word": "Floor",
    "phonetic": "/flɔr/",
    "meaning": "地面",
    "sentence": "The ground inside a building.",
    "translation": "建筑物内的地面。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 4.611,
      "sentenceStart": 5.977,
      "end": 8.051
    }
  },
  {
    "id": "structures_and_treasures-p05-c03",
    "word": "Wall",
    "phonetic": "/wɔl/",
    "meaning": "墙",
    "sentence": "A side of a building.",
    "translation": "建筑物的一侧。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 9.151,
      "sentenceStart": 10.438,
      "end": 12.001
    }
  },
  {
    "id": "structures_and_treasures-p05-c04",
    "word": "Ceiling",
    "phonetic": "/ˈsilɪŋ/",
    "meaning": "天花板",
    "sentence": "The top inside a room.",
    "translation": "房间内的顶部。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 13.101,
      "sentenceStart": 14.53,
      "end": 16.343
    }
  },
  {
    "id": "structures_and_treasures-p05-c05",
    "word": "Stairs",
    "phonetic": "/stɛrz/",
    "meaning": "楼梯",
    "sentence": "Steps for going up or down.",
    "translation": "向上或向下的步骤。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 17.443,
      "sentenceStart": 18.918,
      "end": 20.92
    }
  },
  {
    "id": "structures_and_treasures-p05-c06",
    "word": "Bridge",
    "phonetic": "/brɪʤ/",
    "meaning": "桥",
    "sentence": "A path over water or a gap.",
    "translation": "水上或间隙上的路径。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 22.02,
      "sentenceStart": 23.463,
      "end": 25.607
    }
  },
  {
    "id": "structures_and_treasures-p05-c07",
    "word": "Tower",
    "phonetic": "/taʊər/",
    "meaning": "塔",
    "sentence": "A tall narrow building.",
    "translation": "一栋又高又窄的建筑。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 26.707,
      "sentenceStart": 28.086,
      "end": 29.852
    }
  },
  {
    "id": "structures_and_treasures-p05-c08",
    "word": "Gate",
    "phonetic": "/geɪt/",
    "meaning": "门",
    "sentence": "An entrance that can open.",
    "translation": "一个可以打开的入口。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 30.952,
      "sentenceStart": 32.29,
      "end": 34.375
    }
  },
  {
    "id": "structures_and_treasures-p05-c09",
    "word": "Path",
    "phonetic": "/pæθ/",
    "meaning": "小路",
    "sentence": "A way to walk through a place.",
    "translation": "一种走过某个地方的方式。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 35.475,
      "sentenceStart": 36.858,
      "end": 38.775
    }
  },
  {
    "id": "structures_and_treasures-p05-c10",
    "word": "Dock",
    "phonetic": "/dɑk/",
    "meaning": "码头",
    "sentence": "A wooden place beside water.",
    "translation": "水边的木头地方。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 39.875,
      "sentenceStart": 41.229,
      "end": 43.415
    }
  },
  {
    "id": "structures_and_treasures-p05-c11",
    "word": "Balcony",
    "phonetic": "/ˈbælkəni/",
    "meaning": "阳台",
    "sentence": "A small platform outside a building.",
    "translation": "建筑物外的一个小平台。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 44.515,
      "sentenceStart": 46.148,
      "end": 48.54
    }
  },
  {
    "id": "structures_and_treasures-p05-c12",
    "word": "Courtyard",
    "phonetic": "/ˈkɔrˌtjɑrd/",
    "meaning": "庭院",
    "sentence": "An open space inside walls.",
    "translation": "墙内的开放空间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 49.64,
      "sentenceStart": 51.344,
      "end": 53.749
    }
  },
  {
    "id": "structures_and_treasures-p05-c13",
    "word": "Hallway",
    "phonetic": "/ˈhɔlˌweɪ/",
    "meaning": "门厅",
    "sentence": "A long passage inside a building.",
    "translation": "建筑物内一条长长的通道。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 54.849,
      "sentenceStart": 56.359,
      "end": 58.827
    }
  },
  {
    "id": "structures_and_treasures-p05-c14",
    "word": "Staircase",
    "phonetic": "/ˈstɛrˌkeɪs/",
    "meaning": "楼梯",
    "sentence": "A set of stairs.",
    "translation": "一组楼梯。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 59.927,
      "sentenceStart": 61.611,
      "end": 63.119
    }
  },
  {
    "id": "structures_and_treasures-p05-c15",
    "word": "Basement",
    "phonetic": "/ˈbeɪsmənt/",
    "meaning": "地下室",
    "sentence": "A room under a building.",
    "translation": "建筑物下的一个房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_05.mp3",
      "wordStart": 64.219,
      "sentenceStart": 65.773,
      "end": 67.684
    }
  },
  {
    "id": "structures_and_treasures-p06-c01",
    "word": "Loot Chest",
    "phonetic": "/lut ʧɛst/",
    "meaning": "战利品箱",
    "sentence": "A chest with useful items.",
    "translation": "一个装有有用物品的箱子。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.89,
      "end": 3.968
    }
  },
  {
    "id": "structures_and_treasures-p06-c02",
    "word": "Secret Room",
    "phonetic": "/ˈsikrɪt rum/",
    "meaning": "密室",
    "sentence": "A hidden room.",
    "translation": "一个隐藏的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 5.068,
      "sentenceStart": 6.845,
      "end": 8.123
    }
  },
  {
    "id": "structures_and_treasures-p06-c03",
    "word": "Treasure Room",
    "phonetic": "/ˈtrɛʒər rum/",
    "meaning": "宝藏室",
    "sentence": "A room full of treasure.",
    "translation": "一个充满宝藏的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 9.223,
      "sentenceStart": 11.015,
      "end": 12.817
    }
  },
  {
    "id": "structures_and_treasures-p06-c04",
    "word": "Library Room",
    "phonetic": "/ˈlaɪbrɛˌri rum/",
    "meaning": "图书室",
    "sentence": "A room full of books.",
    "translation": "一个装满书籍的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 13.917,
      "sentenceStart": 15.757,
      "end": 17.546
    }
  },
  {
    "id": "structures_and_treasures-p06-c05",
    "word": "Armory",
    "phonetic": "/ˈɑrməri/",
    "meaning": "军械库",
    "sentence": "A room for weapons and armor.",
    "translation": "武器和盔甲的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 18.646,
      "sentenceStart": 20.154,
      "end": 22.169
    }
  },
  {
    "id": "structures_and_treasures-p06-c06",
    "word": "Storage Room",
    "phonetic": "/ˈstɔrɪʤ rum/",
    "meaning": "储藏室",
    "sentence": "A room for keeping items.",
    "translation": "存放物品的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 23.269,
      "sentenceStart": 25.106,
      "end": 27.076
    }
  },
  {
    "id": "structures_and_treasures-p06-c07",
    "word": "Map Room",
    "phonetic": "/mæp rum/",
    "meaning": "地图室",
    "sentence": "A room for maps.",
    "translation": "一个放地图的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 28.176,
      "sentenceStart": 29.805,
      "end": 31.26
    }
  },
  {
    "id": "structures_and_treasures-p06-c08",
    "word": "Brewing Room",
    "phonetic": "/bruɪŋ rum/",
    "meaning": "酿造室",
    "sentence": "A room for brewing potions.",
    "translation": "酿造药剂的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 32.36,
      "sentenceStart": 34.152,
      "end": 36.167
    }
  },
  {
    "id": "structures_and_treasures-p06-c09",
    "word": "Enchanting Room",
    "phonetic": "/ɛnˈʧænɪŋ rum/",
    "meaning": "迷人的房间",
    "sentence": "A room for magic upgrades.",
    "translation": "魔法升级的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 37.267,
      "sentenceStart": 39.296,
      "end": 41.436
    }
  },
  {
    "id": "structures_and_treasures-p06-c10",
    "word": "Blacksmith Room",
    "phonetic": "/ˈblæksˌmɪθ rum/",
    "meaning": "铁匠室",
    "sentence": "A room for metal work.",
    "translation": "金属加工室。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 42.536,
      "sentenceStart": 44.54,
      "end": 46.343
    }
  },
  {
    "id": "structures_and_treasures-p06-c11",
    "word": "Dining Room",
    "phonetic": "/ˈdaɪnɪŋ rum/",
    "meaning": "饭厅",
    "sentence": "A room for eating.",
    "translation": "一个吃饭的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 47.443,
      "sentenceStart": 49.21,
      "end": 50.64
    }
  },
  {
    "id": "structures_and_treasures-p06-c12",
    "word": "Bedroom",
    "phonetic": "/ˈbɛˌdrum/",
    "meaning": "卧室",
    "sentence": "A room for sleeping.",
    "translation": "一个睡觉的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 51.74,
      "sentenceStart": 53.31,
      "end": 54.969
    }
  },
  {
    "id": "structures_and_treasures-p06-c13",
    "word": "Jail Cell",
    "phonetic": "/ʤeɪl sɛl/",
    "meaning": "牢房",
    "sentence": "A small locked room.",
    "translation": "一间上锁的小房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 56.069,
      "sentenceStart": 57.677,
      "end": 59.336
    }
  },
  {
    "id": "structures_and_treasures-p06-c14",
    "word": "Throne Room",
    "phonetic": "/θroʊn rum/",
    "meaning": "王座室",
    "sentence": "A grand room with a throne.",
    "translation": "一个宏伟的房间，里面有一个王座。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 60.436,
      "sentenceStart": 62.12,
      "end": 64.119
    }
  },
  {
    "id": "structures_and_treasures-p06-c15",
    "word": "Portal Hall",
    "phonetic": "/ˈpɔrtəl hɔl/",
    "meaning": "门户大厅",
    "sentence": "A hall with a portal.",
    "translation": "一个有门户的大厅。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_06.mp3",
      "wordStart": 65.219,
      "sentenceStart": 67.043,
      "end": 68.681
    }
  },
  {
    "id": "structures_and_treasures-p07-c01",
    "word": "Village Road",
    "phonetic": "/ˈvɪlɪʤ roʊd/",
    "meaning": "村道",
    "sentence": "A road through a village.",
    "translation": "一条路穿过一个村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.996,
      "end": 3.715
    }
  },
  {
    "id": "structures_and_treasures-p07-c02",
    "word": "Village Market",
    "phonetic": "/ˈvɪlɪʤ ˈmɑrkɪt/",
    "meaning": "乡村市场",
    "sentence": "A place where villagers trade.",
    "translation": "村民交易的地方。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 4.815,
      "sentenceStart": 6.794,
      "end": 8.876
    }
  },
  {
    "id": "structures_and_treasures-p07-c03",
    "word": "Village Stable",
    "phonetic": "/ˈvɪlɪʤ ˈsteɪbəl/",
    "meaning": "乡村马厩",
    "sentence": "A village place for animals.",
    "translation": "动物的村庄。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 9.976,
      "sentenceStart": 11.878,
      "end": 13.981
    }
  },
  {
    "id": "structures_and_treasures-p07-c04",
    "word": "Village Barn",
    "phonetic": "/ˈvɪlɪʤ bɑrn/",
    "meaning": "乡村谷仓",
    "sentence": "A farm building in a village.",
    "translation": "村庄里的一座农舍。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 15.081,
      "sentenceStart": 16.905,
      "end": 18.912
    }
  },
  {
    "id": "structures_and_treasures-p07-c05",
    "word": "Village Dock",
    "phonetic": "/ˈvɪlɪʤ dɑk/",
    "meaning": "村码头",
    "sentence": "A village dock beside water.",
    "translation": "水边的村庄码头。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 20.012,
      "sentenceStart": 21.824,
      "end": 24.077
    }
  },
  {
    "id": "structures_and_treasures-p07-c06",
    "word": "Village Fountain",
    "phonetic": "/ˈvɪlɪʤ ˈfaʊntən/",
    "meaning": "乡村喷泉",
    "sentence": "A fountain in a village.",
    "translation": "村庄里的一个喷泉。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 25.177,
      "sentenceStart": 27.152,
      "end": 28.828
    }
  },
  {
    "id": "structures_and_treasures-p07-c07",
    "word": "Watchtower",
    "phonetic": "/ˈwɑtʃˌtaʊər/",
    "meaning": "岗楼",
    "sentence": "A tower for watching far away.",
    "translation": "一座可以远眺的塔。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 29.928,
      "sentenceStart": 31.578,
      "end": 33.753
    }
  },
  {
    "id": "structures_and_treasures-p07-c08",
    "word": "Guard Tower",
    "phonetic": "/gɑrd taʊər/",
    "meaning": "守卫塔",
    "sentence": "A tower for guarding a place.",
    "translation": "塔，用于守卫一个地方。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 34.853,
      "sentenceStart": 36.603,
      "end": 38.641
    }
  },
  {
    "id": "structures_and_treasures-p07-c09",
    "word": "Ruined Tower",
    "phonetic": "/ruɪnd taʊər/",
    "meaning": "废塔",
    "sentence": "A broken old tower.",
    "translation": "一座破旧的塔楼。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 39.741,
      "sentenceStart": 41.533,
      "end": 43.199
    }
  },
  {
    "id": "structures_and_treasures-p07-c10",
    "word": "Broken Bridge",
    "phonetic": "/ˈbroʊkən brɪʤ/",
    "meaning": "断桥",
    "sentence": "A bridge that has fallen apart.",
    "translation": "一座已经倒塌的桥。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 44.299,
      "sentenceStart": 46.286,
      "end": 48.441
    }
  },
  {
    "id": "structures_and_treasures-p07-c11",
    "word": "Stone Ruins",
    "phonetic": "/stoʊn ruɪnz/",
    "meaning": "石遗迹",
    "sentence": "Old broken stone buildings.",
    "translation": "破旧的石头建筑。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 49.541,
      "sentenceStart": 51.387,
      "end": 53.525
    }
  },
  {
    "id": "structures_and_treasures-p07-c12",
    "word": "Old Well",
    "phonetic": "/oʊld wɛl/",
    "meaning": "老井",
    "sentence": "An old well in a settlement.",
    "translation": "定居点内的一口老井。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 54.625,
      "sentenceStart": 56.237,
      "end": 58.296
    }
  },
  {
    "id": "structures_and_treasures-p07-c13",
    "word": "Ancient Hall",
    "phonetic": "/ˈeɪnʧənt hɔl/",
    "meaning": "古殿",
    "sentence": "A large old hall.",
    "translation": "一座古老的大大厅。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 59.396,
      "sentenceStart": 61.17,
      "end": 62.724
    }
  },
  {
    "id": "structures_and_treasures-p07-c14",
    "word": "Trial Vault",
    "phonetic": "/traɪəl vɔlt/",
    "meaning": "试用金库",
    "sentence": "A vault found in a trial area.",
    "translation": "在试验区发现的一个金库。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 63.824,
      "sentenceStart": 65.628,
      "end": 67.799
    }
  },
  {
    "id": "structures_and_treasures-p07-c15",
    "word": "Treasure Vault",
    "phonetic": "/ˈtrɛʒər vɔlt/",
    "meaning": "宝库",
    "sentence": "A locked place for treasure.",
    "translation": "一个锁着宝藏的地方。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_07.mp3",
      "wordStart": 68.899,
      "sentenceStart": 70.79,
      "end": 72.74
    }
  },
  {
    "id": "structures_and_treasures-p08-c01",
    "word": "Trial Key",
    "phonetic": "/traɪəl ki/",
    "meaning": "试炼钥匙",
    "sentence": "A key for opening a trial reward.",
    "translation": "开启试用奖励的钥匙。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.897,
      "end": 4.316
    }
  },
  {
    "id": "structures_and_treasures-p08-c02",
    "word": "Ominous Trial Key",
    "phonetic": "/ˈɑmənəs traɪəl ki/",
    "meaning": "不祥试炼钥匙",
    "sentence": "A special key for a harder reward.",
    "translation": "获得更难奖励的特殊钥匙。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 5.416,
      "sentenceStart": 7.733,
      "end": 10.281
    }
  },
  {
    "id": "structures_and_treasures-p08-c03",
    "word": "Vault",
    "phonetic": "/vɔlt/",
    "meaning": "宝库",
    "sentence": "A block that gives a reward.",
    "translation": "给予奖励的区块。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 11.381,
      "sentenceStart": 12.741,
      "end": 14.753
    }
  },
  {
    "id": "structures_and_treasures-p08-c04",
    "word": "Ominous Vault",
    "phonetic": "/ˈɑmənəs vɔlt/",
    "meaning": "不祥的金库",
    "sentence": "A special vault with harder rewards.",
    "translation": "一个特殊的金库，有更难的奖励。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 15.853,
      "sentenceStart": 17.731,
      "end": 20.256
    }
  },
  {
    "id": "structures_and_treasures-p08-c05",
    "word": "Reward Chest",
    "phonetic": "/rɪˈwɔrd ʧɛst/",
    "meaning": "奖励宝箱",
    "sentence": "A chest with a prize.",
    "translation": "一个装有奖品的箱子。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 21.356,
      "sentenceStart": 23.247,
      "end": 24.947
    }
  },
  {
    "id": "structures_and_treasures-p08-c06",
    "word": "Treasure Map",
    "phonetic": "/ˈtrɛʒər mæp/",
    "meaning": "藏宝图",
    "sentence": "A map that points to treasure.",
    "translation": "一张指向宝藏的地图。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 26.047,
      "sentenceStart": 27.826,
      "end": 29.85
    }
  },
  {
    "id": "structures_and_treasures-p08-c07",
    "word": "Gold Pile",
    "phonetic": "/goʊld paɪl/",
    "meaning": "金堆",
    "sentence": "A pile of shiny gold.",
    "translation": "一堆闪闪发亮的金子。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 30.95,
      "sentenceStart": 32.704,
      "end": 34.533
    }
  },
  {
    "id": "structures_and_treasures-p08-c08",
    "word": "Diamond Cache",
    "phonetic": "/ˈdaɪmənd kæˈʃeɪ/",
    "meaning": "钻石宝箱",
    "sentence": "A hidden stash of diamonds.",
    "translation": "隐藏的钻石藏品。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 35.633,
      "sentenceStart": 37.574,
      "end": 39.575
    }
  },
  {
    "id": "structures_and_treasures-p08-c09",
    "word": "Emerald Cache",
    "phonetic": "/ˈɛmərrəld kæˈʃeɪ/",
    "meaning": "翡翠宝箱",
    "sentence": "A hidden stash of emeralds.",
    "translation": "隐藏的祖母绿藏品。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 40.675,
      "sentenceStart": 42.575,
      "end": 44.603
    }
  },
  {
    "id": "structures_and_treasures-p08-c10",
    "word": "Amethyst Geode Room",
    "phonetic": "/ˈæmɪθɪst ˈdʒiːoʊd rum/",
    "meaning": "紫水晶晶洞室",
    "sentence": "A room with purple crystals.",
    "translation": "一个有紫色水晶的房间。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 45.703,
      "sentenceStart": 48.17,
      "end": 50.263
    }
  },
  {
    "id": "structures_and_treasures-p08-c11",
    "word": "Fossil Bones",
    "phonetic": "/ˈfɑsəl boʊnz/",
    "meaning": "骨头化石",
    "sentence": "Old bones found underground.",
    "translation": "地下发现的老骨头。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 51.363,
      "sentenceStart": 53.284,
      "end": 55.558
    }
  },
  {
    "id": "structures_and_treasures-p08-c12",
    "word": "Ancient Pottery",
    "phonetic": "/ˈeɪnʧənt ˈpɑtəri/",
    "meaning": "古代陶器",
    "sentence": "Old decorated pottery.",
    "translation": "旧装饰陶器。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 56.658,
      "sentenceStart": 58.707,
      "end": 60.787
    }
  },
  {
    "id": "structures_and_treasures-p08-c13",
    "word": "Loot Barrel",
    "phonetic": "/lut ˈbɛrəl/",
    "meaning": "战利品桶",
    "sentence": "A barrel with useful items.",
    "translation": "装有有用物品的桶。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 61.887,
      "sentenceStart": 63.619,
      "end": 65.693
    }
  },
  {
    "id": "structures_and_treasures-p08-c14",
    "word": "Hidden Button",
    "phonetic": "/ˈhɪdən ˈbətən/",
    "meaning": "隐藏按钮",
    "sentence": "A button that opens a secret.",
    "translation": "打开秘密的按钮。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 66.793,
      "sentenceStart": 68.672,
      "end": 70.96
    }
  },
  {
    "id": "structures_and_treasures-p08-c15",
    "word": "Secret Door",
    "phonetic": "/ˈsikrɪt dɔr/",
    "meaning": "暗门",
    "sentence": "A hidden entrance.",
    "translation": "一个隐藏的入口。",
    "category": "建筑与宝藏",
    "audio": {
      "src": "/audio/structures_and_treasures/page_08.mp3",
      "wordStart": 72.06,
      "sentenceStart": 73.845,
      "end": 75.433
    }
  },
  {
    "id": "colors_and_materials-p01-c01",
    "word": "White",
    "phonetic": "/waɪt/",
    "meaning": "白色",
    "sentence": "A white block.",
    "translation": "一个白色的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 5.866,
      "sentenceStart": 7.201,
      "end": 8.527
    }
  },
  {
    "id": "colors_and_materials-p01-c02",
    "word": "Black",
    "phonetic": "/blæk/",
    "meaning": "黑色",
    "sentence": "A black block.",
    "translation": "一个黑色块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 9.627,
      "sentenceStart": 11.031,
      "end": 12.409
    }
  },
  {
    "id": "colors_and_materials-p01-c03",
    "word": "Red",
    "phonetic": "/rɛd/",
    "meaning": "红色",
    "sentence": "A red block.",
    "translation": "一个红色块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 13.509,
      "sentenceStart": 14.821,
      "end": 16.148
    }
  },
  {
    "id": "colors_and_materials-p01-c04",
    "word": "Orange",
    "phonetic": "/ˈɔrɪnʤ/",
    "meaning": "橙色",
    "sentence": "An orange block.",
    "translation": "一个橙色的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 17.248,
      "sentenceStart": 18.727,
      "end": 20.199
    }
  },
  {
    "id": "colors_and_materials-p01-c05",
    "word": "Yellow",
    "phonetic": "/ˈjɛloʊ/",
    "meaning": "黄色",
    "sentence": "A yellow block.",
    "translation": "一个黄色块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 21.299,
      "sentenceStart": 22.706,
      "end": 24.102
    }
  },
  {
    "id": "colors_and_materials-p01-c06",
    "word": "Green",
    "phonetic": "/grin/",
    "meaning": "绿色",
    "sentence": "A green block.",
    "translation": "绿色方块",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 25.202,
      "sentenceStart": 26.601,
      "end": 27.923
    }
  },
  {
    "id": "colors_and_materials-p01-c07",
    "word": "Blue",
    "phonetic": "/blu/",
    "meaning": "蓝色",
    "sentence": "A blue block.",
    "translation": "一个蓝色块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 29.023,
      "sentenceStart": 30.368,
      "end": 31.648
    }
  },
  {
    "id": "colors_and_materials-p01-c08",
    "word": "Purple",
    "phonetic": "/ˈpərpəl/",
    "meaning": "紫色",
    "sentence": "A purple block.",
    "translation": "一个紫色块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 32.748,
      "sentenceStart": 34.305,
      "end": 35.732
    }
  },
  {
    "id": "colors_and_materials-p01-c09",
    "word": "Pink",
    "phonetic": "/pɪŋk/",
    "meaning": "粉红色",
    "sentence": "A pink block.",
    "translation": "一个粉红色的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 36.832,
      "sentenceStart": 38.202,
      "end": 39.529
    }
  },
  {
    "id": "colors_and_materials-p01-c10",
    "word": "Brown",
    "phonetic": "/braʊn/",
    "meaning": "棕色",
    "sentence": "A brown block.",
    "translation": "棕色方块",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 40.629,
      "sentenceStart": 42.058,
      "end": 43.43
    }
  },
  {
    "id": "colors_and_materials-p01-c11",
    "word": "Gray",
    "phonetic": "/greɪ/",
    "meaning": "灰色",
    "sentence": "A gray block.",
    "translation": "一个灰色的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 44.53,
      "sentenceStart": 45.879,
      "end": 47.175
    }
  },
  {
    "id": "colors_and_materials-p01-c12",
    "word": "Light Blue",
    "phonetic": "/laɪt blu/",
    "meaning": "淡蓝色",
    "sentence": "A light blue block.",
    "translation": "浅蓝色块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_01.mp3",
      "wordStart": 48.275,
      "sentenceStart": 49.924,
      "end": 51.526
    }
  },
  {
    "id": "colors_and_materials-p02-c01",
    "word": "Wood",
    "phonetic": "/wʊd/",
    "meaning": "木板",
    "sentence": "A wooden material.",
    "translation": "一种木质材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.467,
      "end": 3.06
    }
  },
  {
    "id": "colors_and_materials-p02-c02",
    "word": "Stone",
    "phonetic": "/stoʊn/",
    "meaning": "石头",
    "sentence": "A stone material.",
    "translation": "一种石材。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 4.16,
      "sentenceStart": 5.531,
      "end": 7.026
    }
  },
  {
    "id": "colors_and_materials-p02-c03",
    "word": "Iron",
    "phonetic": "/aɪərn/",
    "meaning": "铁",
    "sentence": "A strong metal.",
    "translation": "一种坚固的金属。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 8.126,
      "sentenceStart": 9.523,
      "end": 10.902
    }
  },
  {
    "id": "colors_and_materials-p02-c04",
    "word": "Gold",
    "phonetic": "/goʊld/",
    "meaning": "金子",
    "sentence": "A shiny metal.",
    "translation": "有光泽的金属。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 12.002,
      "sentenceStart": 13.362,
      "end": 14.698
    }
  },
  {
    "id": "colors_and_materials-p02-c05",
    "word": "Diamond",
    "phonetic": "/ˈdaɪmənd/",
    "meaning": "钻石",
    "sentence": "A blue gem.",
    "translation": "一颗蓝色宝石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 15.798,
      "sentenceStart": 17.333,
      "end": 18.585
    }
  },
  {
    "id": "colors_and_materials-p02-c06",
    "word": "Emerald",
    "phonetic": "/ˈɛmərrəld/",
    "meaning": "绿宝石",
    "sentence": "A green gem.",
    "translation": "一颗绿色宝石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 19.685,
      "sentenceStart": 21.195,
      "end": 22.474
    }
  },
  {
    "id": "colors_and_materials-p02-c07",
    "word": "Copper",
    "phonetic": "/ˈkɑpər/",
    "meaning": "铜",
    "sentence": "An orange metal.",
    "translation": "橙色金属。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 23.574,
      "sentenceStart": 25.045,
      "end": 26.572
    }
  },
  {
    "id": "colors_and_materials-p02-c08",
    "word": "Coal",
    "phonetic": "/koʊl/",
    "meaning": "煤炭",
    "sentence": "A black fuel.",
    "translation": "黑色燃料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 27.672,
      "sentenceStart": 29.026,
      "end": 30.378
    }
  },
  {
    "id": "colors_and_materials-p02-c09",
    "word": "Redstone",
    "phonetic": "/ˈrɛdˌstoʊn/",
    "meaning": "红石",
    "sentence": "A red dust.",
    "translation": "一粒红尘。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 31.478,
      "sentenceStart": 33.095,
      "end": 34.397
    }
  },
  {
    "id": "colors_and_materials-p02-c10",
    "word": "Lapis",
    "phonetic": "/ˈlæpəs/",
    "meaning": "青金石",
    "sentence": "A blue stone.",
    "translation": "一块蓝色的石头。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 35.497,
      "sentenceStart": 37.043,
      "end": 38.439
    }
  },
  {
    "id": "colors_and_materials-p02-c11",
    "word": "Quartz",
    "phonetic": "/kwɔrts/",
    "meaning": "石英",
    "sentence": "A white crystal.",
    "translation": "白色晶体。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 39.539,
      "sentenceStart": 41.029,
      "end": 42.575
    }
  },
  {
    "id": "colors_and_materials-p02-c12",
    "word": "Amethyst",
    "phonetic": "/ˈæmɪθɪst/",
    "meaning": "紫晶",
    "sentence": "A purple crystal.",
    "translation": "紫色晶体。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 43.675,
      "sentenceStart": 45.284,
      "end": 46.872
    }
  },
  {
    "id": "colors_and_materials-p02-c13",
    "word": "Netherite",
    "phonetic": "/ˈnɛðəraɪt/",
    "meaning": "下界合金",
    "sentence": "A dark strong material.",
    "translation": "一种深色的坚固材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 47.972,
      "sentenceStart": 49.624,
      "end": 51.462
    }
  },
  {
    "id": "colors_and_materials-p02-c14",
    "word": "Sulfur",
    "phonetic": "/ˈsəlfər/",
    "meaning": "硫",
    "sentence": "A yellow material.",
    "translation": "黄色材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 52.562,
      "sentenceStart": 54.048,
      "end": 55.618
    }
  },
  {
    "id": "colors_and_materials-p02-c15",
    "word": "Cinnabar",
    "phonetic": "/ˈsɪnəˌbɑr/",
    "meaning": "辰砂",
    "sentence": "A red stone material.",
    "translation": "红色石材。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_02.mp3",
      "wordStart": 56.718,
      "sentenceStart": 58.217,
      "end": 60.059
    }
  },
  {
    "id": "colors_and_materials-p03-c01",
    "word": "Magenta",
    "phonetic": "/məˈʤɛntə/",
    "meaning": "品红色",
    "sentence": "A magenta color.",
    "translation": "洋红色。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.837,
      "end": 3.358
    }
  },
  {
    "id": "colors_and_materials-p03-c02",
    "word": "Lime",
    "phonetic": "/laɪm/",
    "meaning": "黄绿色",
    "sentence": "A lime color.",
    "translation": "石灰色。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 4.458,
      "sentenceStart": 5.77,
      "end": 7.075
    }
  },
  {
    "id": "colors_and_materials-p03-c03",
    "word": "Light Gray",
    "phonetic": "/laɪt greɪ/",
    "meaning": "淡灰色",
    "sentence": "A light gray color.",
    "translation": "浅灰色。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 8.175,
      "sentenceStart": 9.829,
      "end": 11.467
    }
  },
  {
    "id": "colors_and_materials-p03-c04",
    "word": "Cyan",
    "phonetic": "/saɪæn/",
    "meaning": "青色",
    "sentence": "A cyan color.",
    "translation": "青色。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 12.567,
      "sentenceStart": 13.909,
      "end": 15.309
    }
  },
  {
    "id": "colors_and_materials-p03-c05",
    "word": "Oak",
    "phonetic": "/oʊk/",
    "meaning": "橡木",
    "sentence": "An oak wood type.",
    "translation": "橡木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 16.409,
      "sentenceStart": 17.679,
      "end": 19.25
    }
  },
  {
    "id": "colors_and_materials-p03-c06",
    "word": "Spruce",
    "phonetic": "/sprus/",
    "meaning": "云杉",
    "sentence": "A spruce wood type.",
    "translation": "云杉木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 20.35,
      "sentenceStart": 21.854,
      "end": 23.536
    }
  },
  {
    "id": "colors_and_materials-p03-c07",
    "word": "Birch",
    "phonetic": "/bərʧ/",
    "meaning": "桦木",
    "sentence": "A birch wood type.",
    "translation": "桦木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 24.636,
      "sentenceStart": 26.047,
      "end": 27.619
    }
  },
  {
    "id": "colors_and_materials-p03-c08",
    "word": "Jungle",
    "phonetic": "/ˈʤəŋgəl/",
    "meaning": "丛林",
    "sentence": "A jungle wood type.",
    "translation": "丛林木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 28.719,
      "sentenceStart": 30.149,
      "end": 31.85
    }
  },
  {
    "id": "colors_and_materials-p03-c09",
    "word": "Acacia",
    "phonetic": "/əˈkeɪʃə/",
    "meaning": "金合欢属",
    "sentence": "An acacia wood type.",
    "translation": "一种金合欢木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 32.95,
      "sentenceStart": 34.545,
      "end": 36.3
    }
  },
  {
    "id": "colors_and_materials-p03-c10",
    "word": "Dark Oak",
    "phonetic": "/dɑrk oʊk/",
    "meaning": "深色橡木",
    "sentence": "A dark oak wood type.",
    "translation": "深色橡木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 37.4,
      "sentenceStart": 39.06,
      "end": 40.845
    }
  },
  {
    "id": "colors_and_materials-p03-c11",
    "word": "Mangrove",
    "phonetic": "/ˈmæŋˌgroʊv/",
    "meaning": "红树",
    "sentence": "A mangrove wood type.",
    "translation": "红树林木材类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 41.945,
      "sentenceStart": 43.507,
      "end": 45.287
    }
  },
  {
    "id": "colors_and_materials-p03-c12",
    "word": "Cherry",
    "phonetic": "/ˈʧɛri/",
    "meaning": "樱桃",
    "sentence": "A cherry wood type.",
    "translation": "樱桃木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 46.387,
      "sentenceStart": 47.755,
      "end": 49.351
    }
  },
  {
    "id": "colors_and_materials-p03-c13",
    "word": "Bamboo",
    "phonetic": "/bæmˈbu/",
    "meaning": "竹子",
    "sentence": "A bamboo stalk.",
    "translation": "一根竹竿。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 50.451,
      "sentenceStart": 52.018,
      "end": 53.501
    }
  },
  {
    "id": "colors_and_materials-p03-c14",
    "word": "Crimson",
    "phonetic": "/ˈkrɪmzən/",
    "meaning": "赤红",
    "sentence": "A crimson wood type.",
    "translation": "深红色木质类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 54.601,
      "sentenceStart": 56.196,
      "end": 57.922
    }
  },
  {
    "id": "colors_and_materials-p03-c15",
    "word": "Warped",
    "phonetic": "/wɔrpt/",
    "meaning": "翘曲",
    "sentence": "A warped wood type.",
    "translation": "扭曲的木材类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_03.mp3",
      "wordStart": 59.022,
      "sentenceStart": 60.407,
      "end": 62.012
    }
  },
  {
    "id": "colors_and_materials-p04-c01",
    "word": "Pale Oak",
    "phonetic": "/peɪl oʊk/",
    "meaning": "淡橡木",
    "sentence": "A pale oak wood type.",
    "translation": "浅色橡木类型。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.815,
      "end": 3.599
    }
  },
  {
    "id": "colors_and_materials-p04-c02",
    "word": "Granite",
    "phonetic": "/ˈgrænɪt/",
    "meaning": "花岗岩",
    "sentence": "A granite material.",
    "translation": "一种花岗岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 4.699,
      "sentenceStart": 6.184,
      "end": 7.853
    }
  },
  {
    "id": "colors_and_materials-p04-c03",
    "word": "Diorite",
    "phonetic": "/daɪəraɪt/",
    "meaning": "闪长岩",
    "sentence": "A diorite material.",
    "translation": "一种闪长岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 8.953,
      "sentenceStart": 10.488,
      "end": 12.245
    }
  },
  {
    "id": "colors_and_materials-p04-c04",
    "word": "Andesite",
    "phonetic": "/ˈændɪˌsaɪt/",
    "meaning": "安山岩",
    "sentence": "An andesite material.",
    "translation": "一种安山岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 13.345,
      "sentenceStart": 15.016,
      "end": 16.914
    }
  },
  {
    "id": "colors_and_materials-p04-c05",
    "word": "Deepslate",
    "phonetic": "/ˈdiːpsleɪt/",
    "meaning": "深板岩",
    "sentence": "A deepslate material.",
    "translation": "一种深板岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 18.014,
      "sentenceStart": 19.622,
      "end": 21.4
    }
  },
  {
    "id": "colors_and_materials-p04-c06",
    "word": "Tuff",
    "phonetic": "/təf/",
    "meaning": "凝灰岩",
    "sentence": "A tuff material.",
    "translation": "一种凝灰岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 22.5,
      "sentenceStart": 23.842,
      "end": 25.289
    }
  },
  {
    "id": "colors_and_materials-p04-c07",
    "word": "Calcite",
    "phonetic": "/ˈkælˌsaɪt/",
    "meaning": "方解石",
    "sentence": "A calcite material.",
    "translation": "方解石材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 26.389,
      "sentenceStart": 27.976,
      "end": 29.666
    }
  },
  {
    "id": "colors_and_materials-p04-c08",
    "word": "Dripstone",
    "phonetic": "/ˈdrɪpstoʊn/",
    "meaning": "滴水石",
    "sentence": "A dripstone material.",
    "translation": "一种滴石材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 30.766,
      "sentenceStart": 32.474,
      "end": 34.274
    }
  },
  {
    "id": "colors_and_materials-p04-c09",
    "word": "Basalt",
    "phonetic": "/bəˈsɔlt/",
    "meaning": "玄武岩",
    "sentence": "A basalt material.",
    "translation": "一种玄武岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 35.374,
      "sentenceStart": 36.916,
      "end": 38.579
    }
  },
  {
    "id": "colors_and_materials-p04-c10",
    "word": "Blackstone",
    "phonetic": "/ˈblækˌstoʊn/",
    "meaning": "黑石",
    "sentence": "A blackstone material.",
    "translation": "黑石材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 39.679,
      "sentenceStart": 41.321,
      "end": 43.059
    }
  },
  {
    "id": "colors_and_materials-p04-c11",
    "word": "End Stone",
    "phonetic": "/ɛnd stoʊn/",
    "meaning": "末地石",
    "sentence": "An end stone material.",
    "translation": "末地石材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 44.159,
      "sentenceStart": 45.925,
      "end": 47.798
    }
  },
  {
    "id": "colors_and_materials-p04-c12",
    "word": "Prismarine",
    "phonetic": "/ˈprɪzməriːn/",
    "meaning": "海晶石",
    "sentence": "A prismarine material.",
    "translation": "海晶石材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 48.898,
      "sentenceStart": 50.718,
      "end": 52.61
    }
  },
  {
    "id": "colors_and_materials-p04-c13",
    "word": "Obsidian",
    "phonetic": "/əbˈsɪdiən/",
    "meaning": "黑曜石",
    "sentence": "An obsidian material.",
    "translation": "黑曜石材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 53.71,
      "sentenceStart": 55.352,
      "end": 57.214
    }
  },
  {
    "id": "colors_and_materials-p04-c14",
    "word": "Netherrack",
    "phonetic": "/ˈnɛðəræk/",
    "meaning": "下界岩",
    "sentence": "A netherrack material.",
    "translation": "下界岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 58.314,
      "sentenceStart": 59.939,
      "end": 61.827
    }
  },
  {
    "id": "colors_and_materials-p04-c15",
    "word": "Sandstone",
    "phonetic": "/ˈsænˌstoʊn/",
    "meaning": "砂岩",
    "sentence": "A sandstone material.",
    "translation": "一种砂岩材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_04.mp3",
      "wordStart": 62.927,
      "sentenceStart": 64.586,
      "end": 66.394
    }
  },
  {
    "id": "colors_and_materials-p05-c01",
    "word": "Raw Iron",
    "phonetic": "/rɑ aɪərn/",
    "meaning": "粗铁",
    "sentence": "Iron before smelting.",
    "translation": "熔炼前先打铁。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.818,
      "end": 3.798
    }
  },
  {
    "id": "colors_and_materials-p05-c02",
    "word": "Raw Gold",
    "phonetic": "/rɑ goʊld/",
    "meaning": "粗金",
    "sentence": "Gold before smelting.",
    "translation": "冶炼前的黄金。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 4.898,
      "sentenceStart": 6.575,
      "end": 8.493
    }
  },
  {
    "id": "colors_and_materials-p05-c03",
    "word": "Raw Copper",
    "phonetic": "/rɑ ˈkɑpər/",
    "meaning": "粗铜",
    "sentence": "Copper before smelting.",
    "translation": "冶炼前的铜。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 9.593,
      "sentenceStart": 11.322,
      "end": 13.244
    }
  },
  {
    "id": "colors_and_materials-p05-c04",
    "word": "Iron Ingot",
    "phonetic": "/aɪərn ˈɪŋgət/",
    "meaning": "铁锭",
    "sentence": "A bar of iron.",
    "translation": "一根铁条。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 14.344,
      "sentenceStart": 16.14,
      "end": 17.593
    }
  },
  {
    "id": "colors_and_materials-p05-c05",
    "word": "Gold Ingot",
    "phonetic": "/goʊld ˈɪŋgət/",
    "meaning": "金锭",
    "sentence": "A bar of gold.",
    "translation": "一块金条。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 18.693,
      "sentenceStart": 20.547,
      "end": 21.991
    }
  },
  {
    "id": "colors_and_materials-p05-c06",
    "word": "Copper Ingot",
    "phonetic": "/ˈkɑpər ˈɪŋgət/",
    "meaning": "铜锭",
    "sentence": "A bar of copper.",
    "translation": "一根铜条。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 23.091,
      "sentenceStart": 24.945,
      "end": 26.422
    }
  },
  {
    "id": "colors_and_materials-p05-c07",
    "word": "Netherite Ingot",
    "phonetic": "/ˈnɛðəraɪt ˈɪŋgət/",
    "meaning": "下界合金锭",
    "sentence": "A bar of netherite.",
    "translation": "一块下界合金块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 27.522,
      "sentenceStart": 29.613,
      "end": 31.27
    }
  },
  {
    "id": "colors_and_materials-p05-c08",
    "word": "Netherite Scrap",
    "phonetic": "/ˈnɛðəraɪt skræp/",
    "meaning": "下界合金碎片",
    "sentence": "A piece of netherite scrap.",
    "translation": "一块下界合金废料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 32.37,
      "sentenceStart": 34.457,
      "end": 36.462
    }
  },
  {
    "id": "colors_and_materials-p05-c09",
    "word": "Amethyst Shard",
    "phonetic": "/ˈæmɪθɪst ʃɑrd/",
    "meaning": "紫水晶碎片",
    "sentence": "A purple crystal shard.",
    "translation": "紫色水晶碎片。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 37.562,
      "sentenceStart": 39.522,
      "end": 41.431
    }
  },
  {
    "id": "colors_and_materials-p05-c10",
    "word": "Prismarine Shard",
    "phonetic": "/ˈprɪzməriːn ʃɑrd/",
    "meaning": "海晶碎片",
    "sentence": "A sea-colored shard.",
    "translation": "海色碎片。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 42.531,
      "sentenceStart": 44.634,
      "end": 46.235
    }
  },
  {
    "id": "colors_and_materials-p05-c11",
    "word": "Prismarine Crystals",
    "phonetic": "/ˈprɪzməriːn ˈkrɪstəlz/",
    "meaning": "海晶砂粒",
    "sentence": "Sea-colored crystals.",
    "translation": "海色晶体。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 47.335,
      "sentenceStart": 49.731,
      "end": 51.468
    }
  },
  {
    "id": "colors_and_materials-p05-c12",
    "word": "Glowstone Dust",
    "phonetic": "/ˈɡloʊstoʊn dəst/",
    "meaning": "荧石粉",
    "sentence": "Glowing yellow dust.",
    "translation": "发光的黄色灰尘。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 52.568,
      "sentenceStart": 54.584,
      "end": 56.26
    }
  },
  {
    "id": "colors_and_materials-p05-c13",
    "word": "Charcoal",
    "phonetic": "/ˈʧɑrˌkoʊl/",
    "meaning": "木炭",
    "sentence": "A dark fuel material.",
    "translation": "一种深色燃料材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 57.36,
      "sentenceStart": 58.914,
      "end": 60.804
    }
  },
  {
    "id": "colors_and_materials-p05-c14",
    "word": "Honeycomb",
    "phonetic": "/ˈhəniˌkoʊm/",
    "meaning": "蜜脾",
    "sentence": "A waxy honey material.",
    "translation": "蜡状蜂蜜材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 61.904,
      "sentenceStart": 63.523,
      "end": 65.489
    }
  },
  {
    "id": "colors_and_materials-p05-c15",
    "word": "Slimeball",
    "phonetic": "/ˈslaɪmbɔl/",
    "meaning": "黏液球",
    "sentence": "A sticky green ball.",
    "translation": "一个粘稠的绿色球。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_05.mp3",
      "wordStart": 66.589,
      "sentenceStart": 68.168,
      "end": 69.777
    }
  },
  {
    "id": "colors_and_materials-p06-c01",
    "word": "Coal Ore",
    "phonetic": "/koʊl ɔr/",
    "meaning": "煤矿石",
    "sentence": "Ore with coal inside.",
    "translation": "里面有煤的矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.742,
      "end": 3.428
    }
  },
  {
    "id": "colors_and_materials-p06-c02",
    "word": "Copper Ore",
    "phonetic": "/ˈkɑpər ɔr/",
    "meaning": "铜矿石",
    "sentence": "Ore with copper inside.",
    "translation": "里面含有铜的矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 4.528,
      "sentenceStart": 6.213,
      "end": 8.011
    }
  },
  {
    "id": "colors_and_materials-p06-c03",
    "word": "Iron Ore",
    "phonetic": "/aɪərn ɔr/",
    "meaning": "铁矿石",
    "sentence": "Ore with iron inside.",
    "translation": "里面含有铁的矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 9.111,
      "sentenceStart": 10.685,
      "end": 12.425
    }
  },
  {
    "id": "colors_and_materials-p06-c04",
    "word": "Gold Ore",
    "phonetic": "/goʊld ɔr/",
    "meaning": "金矿石",
    "sentence": "Ore with gold inside.",
    "translation": "里面有金的矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 13.525,
      "sentenceStart": 15.125,
      "end": 16.892
    }
  },
  {
    "id": "colors_and_materials-p06-c05",
    "word": "Redstone Ore",
    "phonetic": "/ˈrɛdˌstoʊn ɔr/",
    "meaning": "红石矿石",
    "sentence": "Ore with redstone inside.",
    "translation": "里面有红石的矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 17.992,
      "sentenceStart": 19.859,
      "end": 21.789
    }
  },
  {
    "id": "colors_and_materials-p06-c06",
    "word": "Lapis Ore",
    "phonetic": "/ˈlæpəs ɔr/",
    "meaning": "青金石矿石",
    "sentence": "Ore with lapis inside.",
    "translation": "里面有青金石的矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 22.889,
      "sentenceStart": 24.605,
      "end": 26.485
    }
  },
  {
    "id": "colors_and_materials-p06-c07",
    "word": "Diamond Ore",
    "phonetic": "/ˈdaɪmənd ɔr/",
    "meaning": "钻石矿石",
    "sentence": "Ore with diamond inside.",
    "translation": "里面有钻石的矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 27.585,
      "sentenceStart": 29.367,
      "end": 31.349
    }
  },
  {
    "id": "colors_and_materials-p06-c08",
    "word": "Emerald Ore",
    "phonetic": "/ˈɛmərrəld ɔr/",
    "meaning": "绿宝石矿石",
    "sentence": "Ore with emerald inside.",
    "translation": "矿石内含祖母绿。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 32.449,
      "sentenceStart": 34.243,
      "end": 36.2
    }
  },
  {
    "id": "colors_and_materials-p06-c09",
    "word": "Nether Gold Ore",
    "phonetic": "/ˈnɛðər goʊld ɔr/",
    "meaning": "下界金矿石",
    "sentence": "Gold ore from the nether.",
    "translation": "来自下界的金矿。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 37.3,
      "sentenceStart": 39.282,
      "end": 41.068
    }
  },
  {
    "id": "colors_and_materials-p06-c10",
    "word": "Nether Quartz Ore",
    "phonetic": "/ˈnɛðər kwɔrts ɔr/",
    "meaning": "下界石英矿石",
    "sentence": "Quartz ore from the nether.",
    "translation": "来自下界的石英矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 42.168,
      "sentenceStart": 44.272,
      "end": 46.023
    }
  },
  {
    "id": "colors_and_materials-p06-c11",
    "word": "Deepslate Coal Ore",
    "phonetic": "/ˈdiːpsleɪt koʊl ɔr/",
    "meaning": "深层煤矿石",
    "sentence": "Coal ore in deep stone.",
    "translation": "深石中的煤炭矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 47.123,
      "sentenceStart": 49.338,
      "end": 51.137
    }
  },
  {
    "id": "colors_and_materials-p06-c12",
    "word": "Deepslate Copper Ore",
    "phonetic": "/ˈdiːpsleɪt ˈkɑpər ɔr/",
    "meaning": "深层铜矿石",
    "sentence": "Copper ore in deep stone.",
    "translation": "深石中的铜矿。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 52.237,
      "sentenceStart": 54.591,
      "end": 56.481
    }
  },
  {
    "id": "colors_and_materials-p06-c13",
    "word": "Deepslate Iron Ore",
    "phonetic": "/ˈdiːpsleɪt aɪərn ɔr/",
    "meaning": "深层铁矿石",
    "sentence": "Iron ore in deep stone.",
    "translation": "深石中的铁矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 57.581,
      "sentenceStart": 59.846,
      "end": 61.811
    }
  },
  {
    "id": "colors_and_materials-p06-c14",
    "word": "Deepslate Diamond Ore",
    "phonetic": "/ˈdiːpsleɪt ˈdaɪmənd ɔr/",
    "meaning": "深层钻石矿石",
    "sentence": "Diamond ore in deep stone.",
    "translation": "深石中的钻石矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 62.911,
      "sentenceStart": 65.397,
      "end": 67.499
    }
  },
  {
    "id": "colors_and_materials-p06-c15",
    "word": "Deepslate Emerald Ore",
    "phonetic": "/ˈdiːpsleɪt ˈɛmərrəld ɔr/",
    "meaning": "深层绿宝石矿石",
    "sentence": "Emerald ore in deep stone.",
    "translation": "深石中的祖母绿矿石。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_06.mp3",
      "wordStart": 68.599,
      "sentenceStart": 71.018,
      "end": 73.149
    }
  },
  {
    "id": "colors_and_materials-p07-c01",
    "word": "Block Of Coal",
    "phonetic": "/blɑk əv koʊl/",
    "meaning": "煤炭块",
    "sentence": "A block made of coal.",
    "translation": "由煤制成的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.072,
      "end": 3.751
    }
  },
  {
    "id": "colors_and_materials-p07-c02",
    "word": "Block Of Iron",
    "phonetic": "/blɑk əv aɪərn/",
    "meaning": "铁块",
    "sentence": "A block made of iron.",
    "translation": "由铁制成的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 4.851,
      "sentenceStart": 6.761,
      "end": 8.472
    }
  },
  {
    "id": "colors_and_materials-p07-c03",
    "word": "Block Of Gold",
    "phonetic": "/blɑk əv goʊld/",
    "meaning": "金块",
    "sentence": "A block made of gold.",
    "translation": "由金制成的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 9.572,
      "sentenceStart": 11.481,
      "end": 13.171
    }
  },
  {
    "id": "colors_and_materials-p07-c04",
    "word": "Block Of Diamond",
    "phonetic": "/blɑk əv ˈdaɪmənd/",
    "meaning": "钻石块",
    "sentence": "A block made of diamond.",
    "translation": "由钻石制成的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 14.271,
      "sentenceStart": 16.392,
      "end": 18.224
    }
  },
  {
    "id": "colors_and_materials-p07-c05",
    "word": "Block Of Emerald",
    "phonetic": "/blɑk əv ˈɛmərrəld/",
    "meaning": "绿宝石块",
    "sentence": "A block made of emerald.",
    "translation": "由祖母绿制成的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 19.324,
      "sentenceStart": 21.337,
      "end": 23.169
    }
  },
  {
    "id": "colors_and_materials-p07-c06",
    "word": "Block Of Redstone",
    "phonetic": "/blɑk əv ˈrɛdˌstoʊn/",
    "meaning": "红石块",
    "sentence": "A block made of redstone.",
    "translation": "由红石制成的方块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 24.269,
      "sentenceStart": 26.448,
      "end": 28.4
    }
  },
  {
    "id": "colors_and_materials-p07-c07",
    "word": "Block Of Lapis Lazuli",
    "phonetic": "/blɑk əv ˈlæpəs ləˈzuli/",
    "meaning": "青金石块",
    "sentence": "A block made of lapis.",
    "translation": "由青金石制成的块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 29.5,
      "sentenceStart": 32.174,
      "end": 34.006
    }
  },
  {
    "id": "colors_and_materials-p07-c08",
    "word": "Raw Copper Block",
    "phonetic": "/rɑ ˈkɑpər blɑk/",
    "meaning": "原铜块",
    "sentence": "A block of raw copper.",
    "translation": "一块原铜。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 35.106,
      "sentenceStart": 37.222,
      "end": 39.029
    }
  },
  {
    "id": "colors_and_materials-p07-c09",
    "word": "Raw Iron Block",
    "phonetic": "/rɑ aɪərn blɑk/",
    "meaning": "生铁块",
    "sentence": "A block of raw iron.",
    "translation": "一块生铁。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 40.129,
      "sentenceStart": 42.207,
      "end": 43.964
    }
  },
  {
    "id": "colors_and_materials-p07-c10",
    "word": "Raw Gold Block",
    "phonetic": "/rɑ goʊld blɑk/",
    "meaning": "原金块",
    "sentence": "A block of raw gold.",
    "translation": "一块原金。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 45.064,
      "sentenceStart": 47.13,
      "end": 48.912
    }
  },
  {
    "id": "colors_and_materials-p07-c11",
    "word": "Netherite Block",
    "phonetic": "/ˈnɛðəraɪt blɑk/",
    "meaning": "下界合金块",
    "sentence": "A block of netherite.",
    "translation": "一块下界合金。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 50.012,
      "sentenceStart": 52.072,
      "end": 53.832
    }
  },
  {
    "id": "colors_and_materials-p07-c12",
    "word": "Budding Amethyst",
    "phonetic": "/ˈbədɪŋ ˈæmɪθɪst/",
    "meaning": "紫水晶母岩",
    "sentence": "A crystal-growing amethyst block.",
    "translation": "晶体生长的紫水晶块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 54.932,
      "sentenceStart": 56.985,
      "end": 59.384
    }
  },
  {
    "id": "colors_and_materials-p07-c13",
    "word": "Large Amethyst Bud",
    "phonetic": "/lɑrʤ ˈæmɪθɪst bəd/",
    "meaning": "大型紫晶芽",
    "sentence": "A large growing amethyst crystal.",
    "translation": "一颗正在生长的大紫水晶。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 60.484,
      "sentenceStart": 62.846,
      "end": 65.276
    }
  },
  {
    "id": "colors_and_materials-p07-c14",
    "word": "Medium Amethyst Bud",
    "phonetic": "/ˈmidiəm ˈæmɪθɪst bəd/",
    "meaning": "中型紫晶芽",
    "sentence": "A medium growing amethyst crystal.",
    "translation": "中等生长的紫水晶晶体。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 66.376,
      "sentenceStart": 68.918,
      "end": 71.447
    }
  },
  {
    "id": "colors_and_materials-p07-c15",
    "word": "Small Amethyst Bud",
    "phonetic": "/smɔl ˈæmɪθɪst bəd/",
    "meaning": "小型紫晶芽",
    "sentence": "A small growing amethyst crystal.",
    "translation": "正在生长的小型紫水晶。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_07.mp3",
      "wordStart": 72.547,
      "sentenceStart": 74.885,
      "end": 77.306
    }
  },
  {
    "id": "colors_and_materials-p08-c01",
    "word": "White Dye",
    "phonetic": "/waɪt daɪ/",
    "meaning": "白色染料",
    "sentence": "White coloring dye.",
    "translation": "白色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.768,
      "end": 3.349
    }
  },
  {
    "id": "colors_and_materials-p08-c02",
    "word": "Black Dye",
    "phonetic": "/blæk daɪ/",
    "meaning": "黑色染料",
    "sentence": "Black coloring dye.",
    "translation": "黑色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 4.449,
      "sentenceStart": 6.167,
      "end": 7.796
    }
  },
  {
    "id": "colors_and_materials-p08-c03",
    "word": "Red Dye",
    "phonetic": "/rɛd daɪ/",
    "meaning": "红色染料",
    "sentence": "Red coloring dye.",
    "translation": "红色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 8.896,
      "sentenceStart": 10.513,
      "end": 12.093
    }
  },
  {
    "id": "colors_and_materials-p08-c04",
    "word": "Blue Dye",
    "phonetic": "/blu daɪ/",
    "meaning": "蓝色染料",
    "sentence": "Blue coloring dye.",
    "translation": "蓝色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 13.193,
      "sentenceStart": 14.81,
      "end": 16.345
    }
  },
  {
    "id": "colors_and_materials-p08-c05",
    "word": "Green Dye",
    "phonetic": "/grin daɪ/",
    "meaning": "绿色染料",
    "sentence": "Green coloring dye.",
    "translation": "绿色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 17.445,
      "sentenceStart": 19.11,
      "end": 20.675
    }
  },
  {
    "id": "colors_and_materials-p08-c06",
    "word": "Yellow Dye",
    "phonetic": "/ˈjɛloʊ daɪ/",
    "meaning": "黄色染料",
    "sentence": "Yellow coloring dye.",
    "translation": "黄色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 21.775,
      "sentenceStart": 23.404,
      "end": 25.014
    }
  },
  {
    "id": "colors_and_materials-p08-c07",
    "word": "Purple Dye",
    "phonetic": "/ˈpərpəl daɪ/",
    "meaning": "紫色染料",
    "sentence": "Purple coloring dye.",
    "translation": "紫色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 26.114,
      "sentenceStart": 27.974,
      "end": 29.646
    }
  },
  {
    "id": "colors_and_materials-p08-c08",
    "word": "Orange Dye",
    "phonetic": "/ˈɔrɪnʤ daɪ/",
    "meaning": "橙色染料",
    "sentence": "Orange coloring dye.",
    "translation": "橙色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 30.746,
      "sentenceStart": 32.513,
      "end": 34.183
    }
  },
  {
    "id": "colors_and_materials-p08-c09",
    "word": "Pink Dye",
    "phonetic": "/pɪŋk daɪ/",
    "meaning": "粉红色染料",
    "sentence": "Pink coloring dye.",
    "translation": "粉红色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 35.283,
      "sentenceStart": 36.978,
      "end": 38.539
    }
  },
  {
    "id": "colors_and_materials-p08-c10",
    "word": "Brown Dye",
    "phonetic": "/braʊn daɪ/",
    "meaning": "棕色染料",
    "sentence": "Brown coloring dye.",
    "translation": "棕色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 39.639,
      "sentenceStart": 41.343,
      "end": 42.941
    }
  },
  {
    "id": "colors_and_materials-p08-c11",
    "word": "Gray Dye",
    "phonetic": "/greɪ daɪ/",
    "meaning": "灰色染料",
    "sentence": "Gray coloring dye.",
    "translation": "灰色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 44.041,
      "sentenceStart": 45.67,
      "end": 47.264
    }
  },
  {
    "id": "colors_and_materials-p08-c12",
    "word": "Cyan Dye",
    "phonetic": "/saɪæn daɪ/",
    "meaning": "青色染料",
    "sentence": "Cyan coloring dye.",
    "translation": "青色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 48.364,
      "sentenceStart": 50.056,
      "end": 51.742
    }
  },
  {
    "id": "colors_and_materials-p08-c13",
    "word": "Lime Dye",
    "phonetic": "/laɪm daɪ/",
    "meaning": "黄绿色染料",
    "sentence": "Lime coloring dye.",
    "translation": "石灰着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 52.842,
      "sentenceStart": 54.432,
      "end": 56.042
    }
  },
  {
    "id": "colors_and_materials-p08-c14",
    "word": "Magenta Dye",
    "phonetic": "/məˈʤɛntə daɪ/",
    "meaning": "品红色染料",
    "sentence": "Magenta coloring dye.",
    "translation": "洋红色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 57.142,
      "sentenceStart": 59.009,
      "end": 60.839
    }
  },
  {
    "id": "colors_and_materials-p08-c15",
    "word": "Light Blue Dye",
    "phonetic": "/laɪt blu daɪ/",
    "meaning": "淡蓝色染料",
    "sentence": "Light blue coloring dye.",
    "translation": "浅蓝色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_08.mp3",
      "wordStart": 61.939,
      "sentenceStart": 63.859,
      "end": 65.741
    }
  },
  {
    "id": "colors_and_materials-p09-c01",
    "word": "Light Gray Dye",
    "phonetic": "/laɪt greɪ daɪ/",
    "meaning": "淡灰色染料",
    "sentence": "Light gray coloring dye.",
    "translation": "浅灰色着色染料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.109,
      "end": 4.033
    }
  },
  {
    "id": "colors_and_materials-p09-c02",
    "word": "White Wool",
    "phonetic": "/waɪt wʊl/",
    "meaning": "白色羊毛",
    "sentence": "White wool material.",
    "translation": "白色羊毛材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 5.133,
      "sentenceStart": 6.687,
      "end": 8.323
    }
  },
  {
    "id": "colors_and_materials-p09-c03",
    "word": "Black Wool",
    "phonetic": "/blæk wʊl/",
    "meaning": "黑色羊毛",
    "sentence": "Black wool material.",
    "translation": "黑色羊毛材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 9.423,
      "sentenceStart": 11.065,
      "end": 12.716
    }
  },
  {
    "id": "colors_and_materials-p09-c04",
    "word": "Red Wool",
    "phonetic": "/rɛd wʊl/",
    "meaning": "红色羊毛",
    "sentence": "Red wool material.",
    "translation": "红色羊毛材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 13.816,
      "sentenceStart": 15.415,
      "end": 17.006
    }
  },
  {
    "id": "colors_and_materials-p09-c05",
    "word": "Blue Wool",
    "phonetic": "/blu wʊl/",
    "meaning": "蓝色羊毛",
    "sentence": "Blue wool material.",
    "translation": "蓝色羊毛材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 18.106,
      "sentenceStart": 19.685,
      "end": 21.256
    }
  },
  {
    "id": "colors_and_materials-p09-c06",
    "word": "Green Wool",
    "phonetic": "/grin wʊl/",
    "meaning": "绿色羊毛",
    "sentence": "Green wool material.",
    "translation": "绿色羊毛材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 22.356,
      "sentenceStart": 23.983,
      "end": 25.628
    }
  },
  {
    "id": "colors_and_materials-p09-c07",
    "word": "Yellow Wool",
    "phonetic": "/ˈjɛloʊ wʊl/",
    "meaning": "黄色羊毛",
    "sentence": "Yellow wool material.",
    "translation": "黄色羊毛材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 26.728,
      "sentenceStart": 28.42,
      "end": 30.078
    }
  },
  {
    "id": "colors_and_materials-p09-c08",
    "word": "White Concrete",
    "phonetic": "/waɪt ˈkɑnkrit/",
    "meaning": "白色混凝土",
    "sentence": "White concrete material.",
    "translation": "白色混凝土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 31.178,
      "sentenceStart": 33.14,
      "end": 35.017
    }
  },
  {
    "id": "colors_and_materials-p09-c09",
    "word": "Black Concrete",
    "phonetic": "/blæk ˈkɑnkrit/",
    "meaning": "黑色混凝土",
    "sentence": "Black concrete material.",
    "translation": "黑色混凝土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 36.117,
      "sentenceStart": 38.188,
      "end": 40.112
    }
  },
  {
    "id": "colors_and_materials-p09-c10",
    "word": "Red Concrete",
    "phonetic": "/rɛd ˈkɑnkrit/",
    "meaning": "红色混凝土",
    "sentence": "Red concrete material.",
    "translation": "红色混凝土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 41.212,
      "sentenceStart": 43.19,
      "end": 45.075
    }
  },
  {
    "id": "colors_and_materials-p09-c11",
    "word": "Blue Concrete",
    "phonetic": "/blu ˈkɑnkrit/",
    "meaning": "蓝色混凝土",
    "sentence": "Blue concrete material.",
    "translation": "蓝色混凝土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 46.175,
      "sentenceStart": 48.137,
      "end": 50.001
    }
  },
  {
    "id": "colors_and_materials-p09-c12",
    "word": "Green Concrete",
    "phonetic": "/grin ˈkɑnkrit/",
    "meaning": "绿色混凝土",
    "sentence": "Green concrete material.",
    "translation": "绿色混凝土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 51.101,
      "sentenceStart": 53.129,
      "end": 55.033
    }
  },
  {
    "id": "colors_and_materials-p09-c13",
    "word": "Yellow Concrete",
    "phonetic": "/ˈjɛloʊ ˈkɑnkrit/",
    "meaning": "黄色混凝土",
    "sentence": "Yellow concrete material.",
    "translation": "黄色混凝土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 56.133,
      "sentenceStart": 58.187,
      "end": 60.209
    }
  },
  {
    "id": "colors_and_materials-p09-c14",
    "word": "White Terracotta",
    "phonetic": "/waɪt ˌtɛrəˈkɑtə/",
    "meaning": "白色陶瓦",
    "sentence": "White terracotta material.",
    "translation": "白色陶土材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 61.309,
      "sentenceStart": 63.351,
      "end": 65.304
    }
  },
  {
    "id": "colors_and_materials-p09-c15",
    "word": "Blue Terracotta",
    "phonetic": "/blu ˌtɛrəˈkɑtə/",
    "meaning": "蓝色陶瓦",
    "sentence": "Blue terracotta material.",
    "translation": "蓝色陶土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_09.mp3",
      "wordStart": 66.404,
      "sentenceStart": 68.471,
      "end": 70.442
    }
  },
  {
    "id": "colors_and_materials-p10-c01",
    "word": "Red Sandstone",
    "phonetic": "/rɛd ˈsænˌstoʊn/",
    "meaning": "红砂岩",
    "sentence": "A warm red sandstone material.",
    "translation": "温暖的红砂岩材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 0.18,
      "sentenceStart": 2.229,
      "end": 4.568
    }
  },
  {
    "id": "colors_and_materials-p10-c02",
    "word": "Terracotta",
    "phonetic": "/ˌtɛrəˈkɑtə/",
    "meaning": "陶瓦",
    "sentence": "A baked clay material.",
    "translation": "一种烧制的粘土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 5.668,
      "sentenceStart": 7.414,
      "end": 9.287
    }
  },
  {
    "id": "colors_and_materials-p10-c03",
    "word": "Mud",
    "phonetic": "/məd/",
    "meaning": "泥巴",
    "sentence": "A soft wet earth material.",
    "translation": "一种柔软的湿土材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 10.387,
      "sentenceStart": 11.67,
      "end": 13.758
    }
  },
  {
    "id": "colors_and_materials-p10-c04",
    "word": "Packed Mud",
    "phonetic": "/pækt məd/",
    "meaning": "泥坯",
    "sentence": "Mud packed into a block.",
    "translation": "泥浆挤成块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 14.858,
      "sentenceStart": 16.575,
      "end": 18.487
    }
  },
  {
    "id": "colors_and_materials-p10-c05",
    "word": "Moss",
    "phonetic": "/mɔs/",
    "meaning": "苔藓",
    "sentence": "A soft green plant material.",
    "translation": "柔软的绿色植物材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 19.587,
      "sentenceStart": 20.971,
      "end": 23.134
    }
  },
  {
    "id": "colors_and_materials-p10-c06",
    "word": "Dripstone Block",
    "phonetic": "/ˈdrɪpstoʊn blɑk/",
    "meaning": "滴水石块",
    "sentence": "A block made of dripstone.",
    "translation": "由滴水石制成的方块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 24.234,
      "sentenceStart": 26.287,
      "end": 28.203
    }
  },
  {
    "id": "colors_and_materials-p10-c07",
    "word": "Pointed Dripstone",
    "phonetic": "/ˈpɔɪntɪd ˈdrɪpstoʊn/",
    "meaning": "滴水石锥",
    "sentence": "A sharp dripstone spike.",
    "translation": "锋利的滴石钉。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 29.303,
      "sentenceStart": 31.457,
      "end": 33.393
    }
  },
  {
    "id": "colors_and_materials-p10-c08",
    "word": "Cobbled Deepslate",
    "phonetic": "/ˈkɑbəld ˈdiːpsleɪt/",
    "meaning": "深板岩圆石",
    "sentence": "Rough dark deepslate.",
    "translation": "粗糙的深色深板岩。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 34.493,
      "sentenceStart": 36.655,
      "end": 38.422
    }
  },
  {
    "id": "colors_and_materials-p10-c09",
    "word": "Chiseled Deepslate",
    "phonetic": "/ˈʧɪzəld ˈdiːpsleɪt/",
    "meaning": "雕纹深板岩",
    "sentence": "Carved dark deepslate.",
    "translation": "雕刻深色深板岩。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 39.522,
      "sentenceStart": 41.651,
      "end": 43.454
    }
  },
  {
    "id": "colors_and_materials-p10-c10",
    "word": "Chiseled Tuff",
    "phonetic": "/ˈʧɪzəld təf/",
    "meaning": "雕纹凝灰岩",
    "sentence": "Carved tuff stone.",
    "translation": "雕刻凝灰岩。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 44.554,
      "sentenceStart": 46.358,
      "end": 47.942
    }
  },
  {
    "id": "colors_and_materials-p10-c11",
    "word": "Polished Tuff",
    "phonetic": "/ˈpɑlɪʃt təf/",
    "meaning": "磨制凝灰岩",
    "sentence": "Smooth tuff stone.",
    "translation": "光滑的凝灰岩。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 49.042,
      "sentenceStart": 50.91,
      "end": 52.436
    }
  },
  {
    "id": "colors_and_materials-p10-c12",
    "word": "Resin Bricks",
    "phonetic": "/ˈrɛzɪn brɪks/",
    "meaning": "树脂砖块",
    "sentence": "Bricks made with resin.",
    "translation": "用树脂制成的砖。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 53.536,
      "sentenceStart": 55.482,
      "end": 57.305
    }
  },
  {
    "id": "colors_and_materials-p10-c13",
    "word": "Cinnabar Bricks",
    "phonetic": "/ˈsɪnəˌbɑr brɪks/",
    "meaning": "朱砂砖",
    "sentence": "Bricks made with cinnabar.",
    "translation": "用朱砂制成的砖。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 58.405,
      "sentenceStart": 60.467,
      "end": 62.27
    }
  },
  {
    "id": "colors_and_materials-p10-c14",
    "word": "Sulfur Bricks",
    "phonetic": "/ˈsəlfər brɪks/",
    "meaning": "硫磺砖",
    "sentence": "Bricks made with sulfur.",
    "translation": "用硫磺制成的砖。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 63.37,
      "sentenceStart": 65.305,
      "end": 67.064
    }
  },
  {
    "id": "colors_and_materials-p10-c15",
    "word": "End Stone Bricks",
    "phonetic": "/ɛnd stoʊn brɪks/",
    "meaning": "末地石砖",
    "sentence": "Bricks made from end stone.",
    "translation": "由末地石制成的砖块。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_10.mp3",
      "wordStart": 68.164,
      "sentenceStart": 70.36,
      "end": 72.36
    }
  },
  {
    "id": "colors_and_materials-p11-c01",
    "word": "Echo Shard",
    "phonetic": "/ˈɛkoʊ ʃɑrd/",
    "meaning": "回响碎片",
    "sentence": "A dark shard from ancient places.",
    "translation": "来自远古地方的黑暗碎片。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.897,
      "end": 4.271
    }
  },
  {
    "id": "colors_and_materials-p11-c02",
    "word": "Disc Fragment",
    "phonetic": "/dɪsk ˈfrægmənt/",
    "meaning": "唱片残片",
    "sentence": "A small piece of a music disc.",
    "translation": "音乐光盘的一小片。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 5.371,
      "sentenceStart": 7.333,
      "end": 9.591
    }
  },
  {
    "id": "colors_and_materials-p11-c03",
    "word": "Nether Star",
    "phonetic": "/ˈnɛðər stɑr/",
    "meaning": "下界之星",
    "sentence": "A rare star from a boss.",
    "translation": "来自老板的罕见明星。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 10.691,
      "sentenceStart": 12.482,
      "end": 14.309
    }
  },
  {
    "id": "colors_and_materials-p11-c04",
    "word": "Heart Of The Sea",
    "phonetic": "/hɑrt əv ðə si/",
    "meaning": "海洋之心",
    "sentence": "A rare blue sea treasure.",
    "translation": "罕见的蓝色海洋瑰宝。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 15.409,
      "sentenceStart": 17.333,
      "end": 19.14
    }
  },
  {
    "id": "colors_and_materials-p11-c05",
    "word": "Nautilus Shell",
    "phonetic": "/ˈnɔtələs ʃɛl/",
    "meaning": "鹦鹉螺壳",
    "sentence": "A shell from the sea.",
    "translation": "来自大海的贝壳。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 20.24,
      "sentenceStart": 22.114,
      "end": 23.664
    }
  },
  {
    "id": "colors_and_materials-p11-c06",
    "word": "Leather",
    "phonetic": "/ˈlɛðər/",
    "meaning": "皮革",
    "sentence": "A flexible animal material.",
    "translation": "一种灵活的动物材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 24.764,
      "sentenceStart": 26.119,
      "end": 28.414
    }
  },
  {
    "id": "colors_and_materials-p11-c07",
    "word": "Feather",
    "phonetic": "/ˈfɛðər/",
    "meaning": "羽毛",
    "sentence": "A light feather material.",
    "translation": "轻质羽毛材质。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 29.514,
      "sentenceStart": 30.96,
      "end": 32.902
    }
  },
  {
    "id": "colors_and_materials-p11-c08",
    "word": "String",
    "phonetic": "/strɪŋ/",
    "meaning": "线",
    "sentence": "A thin crafting material.",
    "translation": "一种薄的制作材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 34.002,
      "sentenceStart": 35.572,
      "end": 37.554
    }
  },
  {
    "id": "colors_and_materials-p11-c09",
    "word": "Gunpowder",
    "phonetic": "/ˈgənˌpaʊdər/",
    "meaning": "火药",
    "sentence": "A powder used for explosions.",
    "translation": "用于爆炸的粉末。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 38.654,
      "sentenceStart": 40.346,
      "end": 42.592
    }
  },
  {
    "id": "colors_and_materials-p11-c10",
    "word": "Bone",
    "phonetic": "/boʊn/",
    "meaning": "骨头",
    "sentence": "A pale bone material.",
    "translation": "苍白的骨头材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 43.692,
      "sentenceStart": 45.032,
      "end": 46.87
    }
  },
  {
    "id": "colors_and_materials-p11-c11",
    "word": "Clay Ball",
    "phonetic": "/kleɪ bɔl/",
    "meaning": "黏土球",
    "sentence": "A small piece of clay.",
    "translation": "一小块粘土。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 47.97,
      "sentenceStart": 49.624,
      "end": 51.351
    }
  },
  {
    "id": "colors_and_materials-p11-c12",
    "word": "Brick",
    "phonetic": "/brɪk/",
    "meaning": "红砖",
    "sentence": "A small brick item.",
    "translation": "一个小砖块物品。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 52.451,
      "sentenceStart": 53.836,
      "end": 55.449
    }
  },
  {
    "id": "colors_and_materials-p11-c13",
    "word": "Nether Brick",
    "phonetic": "/ˈnɛðər brɪk/",
    "meaning": "下界砖",
    "sentence": "A small nether brick item.",
    "translation": "一个小型的下界砖块物品。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 56.549,
      "sentenceStart": 58.319,
      "end": 60.319
    }
  },
  {
    "id": "colors_and_materials-p11-c14",
    "word": "Resin Clump",
    "phonetic": "/ˈrɛzɪn kləmp/",
    "meaning": "树脂团",
    "sentence": "A sticky resin material.",
    "translation": "一种粘性树脂材料。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 61.419,
      "sentenceStart": 63.29,
      "end": 65.277
    }
  },
  {
    "id": "colors_and_materials-p11-c15",
    "word": "Copper Nugget",
    "phonetic": "/ˈkɑpər ˈnəgɪt/",
    "meaning": "铜粒",
    "sentence": "A tiny piece of copper.",
    "translation": "一小块铜。",
    "category": "颜色与材料",
    "audio": {
      "src": "/audio/colors_and_materials/page_11.mp3",
      "wordStart": 66.377,
      "sentenceStart": 68.281,
      "end": 70.248
    }
  },
  {
    "id": "action_words-p01-c01",
    "word": "Mine",
    "phonetic": "/maɪn/",
    "meaning": "开采",
    "sentence": "Mine a block.",
    "translation": "开采一个区块。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 5.191,
      "sentenceStart": 6.5,
      "end": 7.746
    }
  },
  {
    "id": "action_words-p01-c02",
    "word": "Build",
    "phonetic": "/bɪld/",
    "meaning": "建造",
    "sentence": "Build a house.",
    "translation": "建造一座房子。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 8.846,
      "sentenceStart": 10.212,
      "end": 11.476
    }
  },
  {
    "id": "action_words-p01-c03",
    "word": "Craft",
    "phonetic": "/kræft/",
    "meaning": "工艺",
    "sentence": "Craft an item.",
    "translation": "制作一个物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 12.576,
      "sentenceStart": 14.041,
      "end": 15.443
    }
  },
  {
    "id": "action_words-p01-c04",
    "word": "Dig",
    "phonetic": "/dɪg/",
    "meaning": "挖",
    "sentence": "Dig the dirt.",
    "translation": "挖土。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 16.543,
      "sentenceStart": 17.851,
      "end": 19.179
    }
  },
  {
    "id": "action_words-p01-c05",
    "word": "Jump",
    "phonetic": "/ʤəmp/",
    "meaning": "跳跃",
    "sentence": "Jump up high.",
    "translation": "跳得高高的。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 20.279,
      "sentenceStart": 21.599,
      "end": 22.927
    }
  },
  {
    "id": "action_words-p01-c06",
    "word": "Run",
    "phonetic": "/rən/",
    "meaning": "跑步",
    "sentence": "Run very fast.",
    "translation": "跑得很快。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 24.027,
      "sentenceStart": 25.312,
      "end": 26.817
    }
  },
  {
    "id": "action_words-p01-c07",
    "word": "Swim",
    "phonetic": "/swɪm/",
    "meaning": "游泳",
    "sentence": "Swim in water.",
    "translation": "在水中游泳。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 27.917,
      "sentenceStart": 29.246,
      "end": 30.608
    }
  },
  {
    "id": "action_words-p01-c08",
    "word": "Fly",
    "phonetic": "/flaɪ/",
    "meaning": "飞",
    "sentence": "Fly in the sky.",
    "translation": "飞翔在天空中。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 31.708,
      "sentenceStart": 33.057,
      "end": 34.472
    }
  },
  {
    "id": "action_words-p01-c09",
    "word": "Climb",
    "phonetic": "/klaɪm/",
    "meaning": "爬",
    "sentence": "Climb a ladder.",
    "translation": "爬梯子。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 35.572,
      "sentenceStart": 36.98,
      "end": 38.259
    }
  },
  {
    "id": "action_words-p01-c10",
    "word": "Open",
    "phonetic": "/ˈoʊpən/",
    "meaning": "打开",
    "sentence": "Open the chest.",
    "translation": "打开胸部。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 39.359,
      "sentenceStart": 40.769,
      "end": 42.296
    }
  },
  {
    "id": "action_words-p01-c11",
    "word": "Close",
    "phonetic": "/kloʊz/",
    "meaning": "关闭",
    "sentence": "Close the door.",
    "translation": "关门。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 43.396,
      "sentenceStart": 44.875,
      "end": 46.206
    }
  },
  {
    "id": "action_words-p01-c12",
    "word": "Eat",
    "phonetic": "/it/",
    "meaning": "吃",
    "sentence": "Eat some food.",
    "translation": "吃一些食物。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_01.mp3",
      "wordStart": 47.306,
      "sentenceStart": 48.566,
      "end": 49.904
    }
  },
  {
    "id": "action_words-p02-c01",
    "word": "Drink",
    "phonetic": "/drɪŋk/",
    "meaning": "喝",
    "sentence": "Drink a potion.",
    "translation": "喝一剂药水。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.584,
      "end": 2.96
    }
  },
  {
    "id": "action_words-p02-c02",
    "word": "Sleep",
    "phonetic": "/slip/",
    "meaning": "睡觉",
    "sentence": "Sleep in a bed.",
    "translation": "睡在床上。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 4.06,
      "sentenceStart": 5.507,
      "end": 7.009
    }
  },
  {
    "id": "action_words-p02-c03",
    "word": "Fight",
    "phonetic": "/faɪt/",
    "meaning": "斗争",
    "sentence": "Fight a monster.",
    "translation": "与怪物战斗。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 8.109,
      "sentenceStart": 9.421,
      "end": 10.818
    }
  },
  {
    "id": "action_words-p02-c04",
    "word": "Shoot",
    "phonetic": "/ʃut/",
    "meaning": "射击",
    "sentence": "Shoot an arrow.",
    "translation": "射箭。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 11.918,
      "sentenceStart": 13.183,
      "end": 14.52
    }
  },
  {
    "id": "action_words-p02-c05",
    "word": "Throw",
    "phonetic": "/θroʊ/",
    "meaning": "扔",
    "sentence": "Throw a snowball.",
    "translation": "扔一个雪球。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 15.62,
      "sentenceStart": 16.944,
      "end": 18.369
    }
  },
  {
    "id": "action_words-p02-c06",
    "word": "Ride",
    "phonetic": "/raɪd/",
    "meaning": "骑",
    "sentence": "Ride a horse.",
    "translation": "骑马。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 19.469,
      "sentenceStart": 20.804,
      "end": 22.078
    }
  },
  {
    "id": "action_words-p02-c07",
    "word": "Grow",
    "phonetic": "/groʊ/",
    "meaning": "生长",
    "sentence": "Grow a plant.",
    "translation": "种植植物。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 23.178,
      "sentenceStart": 24.49,
      "end": 25.818
    }
  },
  {
    "id": "action_words-p02-c08",
    "word": "Explode",
    "phonetic": "/ɪkˈsploʊd/",
    "meaning": "爆炸",
    "sentence": "Make a big boom.",
    "translation": "掀起大热潮。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 26.918,
      "sentenceStart": 28.564,
      "end": 30.03
    }
  },
  {
    "id": "action_words-p02-c09",
    "word": "Fish",
    "phonetic": "/fɪʃ/",
    "meaning": "鱼",
    "sentence": "Fish in a river.",
    "translation": "河里有鱼。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 31.13,
      "sentenceStart": 32.472,
      "end": 33.934
    }
  },
  {
    "id": "action_words-p02-c10",
    "word": "Cook",
    "phonetic": "/kʊk/",
    "meaning": "厨师",
    "sentence": "Cook some food.",
    "translation": "煮一些食物。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 35.034,
      "sentenceStart": 36.394,
      "end": 37.768
    }
  },
  {
    "id": "action_words-p02-c11",
    "word": "Trade",
    "phonetic": "/treɪd/",
    "meaning": "贸易",
    "sentence": "Trade with a villager.",
    "translation": "与村民进行交易。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 38.868,
      "sentenceStart": 40.295,
      "end": 41.943
    }
  },
  {
    "id": "action_words-p02-c12",
    "word": "Plant",
    "phonetic": "/plænt/",
    "meaning": "植物",
    "sentence": "Plant a seed.",
    "translation": "种下一颗种子。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 43.043,
      "sentenceStart": 44.478,
      "end": 45.906
    }
  },
  {
    "id": "action_words-p02-c13",
    "word": "Light",
    "phonetic": "/laɪt/",
    "meaning": "光源方块",
    "sentence": "Light a torch.",
    "translation": "点燃火把。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 47.006,
      "sentenceStart": 48.31,
      "end": 49.613
    }
  },
  {
    "id": "action_words-p02-c14",
    "word": "Explore",
    "phonetic": "/ɪkˈsplɔr/",
    "meaning": "探索",
    "sentence": "Explore a cave.",
    "translation": "探索一个洞穴。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 50.713,
      "sentenceStart": 52.299,
      "end": 53.745
    }
  },
  {
    "id": "action_words-p02-c15",
    "word": "Sneak",
    "phonetic": "/snik/",
    "meaning": "潜行",
    "sentence": "Sneak quietly.",
    "translation": "悄悄潜行。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_02.mp3",
      "wordStart": 54.845,
      "sentenceStart": 56.322,
      "end": 57.776
    }
  },
  {
    "id": "action_words-p03-c01",
    "word": "Look",
    "phonetic": "/lʊk/",
    "meaning": "看",
    "sentence": "Look at the world.",
    "translation": "看看世界。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.441,
      "end": 2.902
    }
  },
  {
    "id": "action_words-p03-c02",
    "word": "Walk",
    "phonetic": "/wɔk/",
    "meaning": "走",
    "sentence": "Walk on the path.",
    "translation": "走在路上。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 4.002,
      "sentenceStart": 5.298,
      "end": 6.698
    }
  },
  {
    "id": "action_words-p03-c03",
    "word": "Place",
    "phonetic": "/pleɪs/",
    "meaning": "地方",
    "sentence": "Place a block.",
    "translation": "放置一个块。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 7.798,
      "sentenceStart": 9.281,
      "end": 10.679
    }
  },
  {
    "id": "action_words-p03-c04",
    "word": "Break",
    "phonetic": "/breɪk/",
    "meaning": "休息",
    "sentence": "Break a block.",
    "translation": "打破一个方块。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 11.779,
      "sentenceStart": 13.166,
      "end": 14.47
    }
  },
  {
    "id": "action_words-p03-c05",
    "word": "Collect",
    "phonetic": "/kəˈlɛkt/",
    "meaning": "收集",
    "sentence": "Collect an item.",
    "translation": "收集一个物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 15.57,
      "sentenceStart": 17.08,
      "end": 18.529
    }
  },
  {
    "id": "action_words-p03-c06",
    "word": "Store",
    "phonetic": "/stɔr/",
    "meaning": "店铺",
    "sentence": "Store items.",
    "translation": "存放物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 19.629,
      "sentenceStart": 20.983,
      "end": 22.274
    }
  },
  {
    "id": "action_words-p03-c07",
    "word": "Smelt",
    "phonetic": "/smɛlt/",
    "meaning": "冶炼",
    "sentence": "Smelt an ore.",
    "translation": "熔炼了矿石。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 23.374,
      "sentenceStart": 24.786,
      "end": 26.132
    }
  },
  {
    "id": "action_words-p03-c08",
    "word": "Enchant",
    "phonetic": "/ɛnˈʧænt/",
    "meaning": "附魔",
    "sentence": "Enchant a tool.",
    "translation": "为工具附魔。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 27.232,
      "sentenceStart": 28.803,
      "end": 30.32
    }
  },
  {
    "id": "action_words-p03-c09",
    "word": "Brew",
    "phonetic": "/bru/",
    "meaning": "酿造",
    "sentence": "Brew a potion.",
    "translation": "煮一剂药水。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 31.42,
      "sentenceStart": 32.755,
      "end": 34.131
    }
  },
  {
    "id": "action_words-p03-c10",
    "word": "Sprint",
    "phonetic": "/sprɪnt/",
    "meaning": "疾跑",
    "sentence": "Sprint very fast.",
    "translation": "冲刺速度非常快。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 35.231,
      "sentenceStart": 36.693,
      "end": 38.306
    }
  },
  {
    "id": "action_words-p03-c11",
    "word": "Glide",
    "phonetic": "/glaɪd/",
    "meaning": "滑行",
    "sentence": "Glide in the sky.",
    "translation": "在天空中滑翔。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 39.406,
      "sentenceStart": 40.814,
      "end": 42.279
    }
  },
  {
    "id": "action_words-p03-c12",
    "word": "Teleport",
    "phonetic": "/ˈtɛləˈpɔrt/",
    "meaning": "传送",
    "sentence": "Teleport away.",
    "translation": "传送离开。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 43.379,
      "sentenceStart": 45.064,
      "end": 46.524
    }
  },
  {
    "id": "action_words-p03-c13",
    "word": "Respawn",
    "phonetic": "/ˌriˈspɔn/",
    "meaning": "重生",
    "sentence": "Respawn again.",
    "translation": "再次重生。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 47.624,
      "sentenceStart": 49.203,
      "end": 50.62
    }
  },
  {
    "id": "action_words-p03-c14",
    "word": "Tame",
    "phonetic": "/teɪm/",
    "meaning": "驯服",
    "sentence": "Tame an animal.",
    "translation": "驯服动物。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 51.72,
      "sentenceStart": 53.074,
      "end": 54.454
    }
  },
  {
    "id": "action_words-p03-c15",
    "word": "Feed",
    "phonetic": "/fid/",
    "meaning": "喂养",
    "sentence": "Feed a friend.",
    "translation": "喂一个朋友。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_03.mp3",
      "wordStart": 55.554,
      "sentenceStart": 56.884,
      "end": 58.224
    }
  },
  {
    "id": "action_words-p04-c01",
    "word": "Breed",
    "phonetic": "/brid/",
    "meaning": "品种",
    "sentence": "Breed animals.",
    "translation": "饲养动物。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.593,
      "end": 2.975
    }
  },
  {
    "id": "action_words-p04-c02",
    "word": "Milk",
    "phonetic": "/mɪlk/",
    "meaning": "奶",
    "sentence": "Milk a cow.",
    "translation": "给奶牛挤奶。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 4.075,
      "sentenceStart": 5.435,
      "end": 6.775
    }
  },
  {
    "id": "action_words-p04-c03",
    "word": "Harvest",
    "phonetic": "/ˈhɑrvəst/",
    "meaning": "收成",
    "sentence": "Harvest wheat.",
    "translation": "收获小麦。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 7.875,
      "sentenceStart": 9.421,
      "end": 10.76
    }
  },
  {
    "id": "action_words-p04-c04",
    "word": "Water",
    "phonetic": "/ˈwɔtər/",
    "meaning": "水",
    "sentence": "Water the farm.",
    "translation": "给农场浇水。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 11.86,
      "sentenceStart": 13.227,
      "end": 14.643
    }
  },
  {
    "id": "action_words-p04-c05",
    "word": "Chop",
    "phonetic": "/ʧɑp/",
    "meaning": "劈",
    "sentence": "Chop a tree.",
    "translation": "砍一棵树。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 15.743,
      "sentenceStart": 17.043,
      "end": 18.292
    }
  },
  {
    "id": "action_words-p04-c06",
    "word": "Sail",
    "phonetic": "/seɪl/",
    "meaning": "帆",
    "sentence": "Sail a boat.",
    "translation": "驾船航行。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 19.392,
      "sentenceStart": 20.686,
      "end": 21.938
    }
  },
  {
    "id": "action_words-p04-c07",
    "word": "Row",
    "phonetic": "/roʊ/",
    "meaning": "排",
    "sentence": "Row a boat.",
    "translation": "划一条船。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 23.038,
      "sentenceStart": 24.287,
      "end": 25.531
    }
  },
  {
    "id": "action_words-p04-c08",
    "word": "Smith",
    "phonetic": "/smɪθ/",
    "meaning": "史密斯",
    "sentence": "Smith new gear.",
    "translation": "史密斯新装备。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 26.631,
      "sentenceStart": 27.964,
      "end": 29.317
    }
  },
  {
    "id": "action_words-p04-c09",
    "word": "Repair",
    "phonetic": "/rɪˈpɛr/",
    "meaning": "维修",
    "sentence": "Repair a tool.",
    "translation": "修理一个工具。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 30.417,
      "sentenceStart": 31.884,
      "end": 33.261
    }
  },
  {
    "id": "action_words-p04-c10",
    "word": "Dye",
    "phonetic": "/daɪ/",
    "meaning": "染料",
    "sentence": "Dye the wool.",
    "translation": "给羊毛染色。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 34.361,
      "sentenceStart": 35.66,
      "end": 36.873
    }
  },
  {
    "id": "action_words-p04-c11",
    "word": "Push",
    "phonetic": "/pʊʃ/",
    "meaning": "推",
    "sentence": "Push a button.",
    "translation": "按下按钮。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 37.973,
      "sentenceStart": 39.377,
      "end": 40.665
    }
  },
  {
    "id": "action_words-p04-c12",
    "word": "Press",
    "phonetic": "/prɛs/",
    "meaning": "按",
    "sentence": "Press a plate.",
    "translation": "压一个盘子。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 41.765,
      "sentenceStart": 43.207,
      "end": 44.595
    }
  },
  {
    "id": "action_words-p04-c13",
    "word": "Descend",
    "phonetic": "/dɪˈsɛnd/",
    "meaning": "下降",
    "sentence": "Go down safely.",
    "translation": "安全下去。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 45.695,
      "sentenceStart": 47.22,
      "end": 48.727
    }
  },
  {
    "id": "action_words-p04-c14",
    "word": "Hide",
    "phonetic": "/haɪd/",
    "meaning": "隐藏",
    "sentence": "Hide from danger.",
    "translation": "躲避危险。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 49.827,
      "sentenceStart": 51.144,
      "end": 52.63
    }
  },
  {
    "id": "action_words-p04-c15",
    "word": "Listen",
    "phonetic": "/ˈlɪsən/",
    "meaning": "听",
    "sentence": "Listen for sounds.",
    "translation": "聆听声音。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_04.mp3",
      "wordStart": 53.73,
      "sentenceStart": 55.115,
      "end": 56.653
    }
  },
  {
    "id": "action_words-p05-c01",
    "word": "Search",
    "phonetic": "/sərʧ/",
    "meaning": "搜索",
    "sentence": "Search for treasure.",
    "translation": "寻找宝藏。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.563,
      "end": 3.08
    }
  },
  {
    "id": "action_words-p05-c02",
    "word": "Find",
    "phonetic": "/faɪnd/",
    "meaning": "寻找",
    "sentence": "Find something useful.",
    "translation": "找到一些有用的东西。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 4.18,
      "sentenceStart": 5.561,
      "end": 7.329
    }
  },
  {
    "id": "action_words-p05-c03",
    "word": "Escape",
    "phonetic": "/ɪˈskeɪp/",
    "meaning": "Esc",
    "sentence": "Escape from danger.",
    "translation": "逃离危险。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 8.429,
      "sentenceStart": 9.908,
      "end": 11.571
    }
  },
  {
    "id": "action_words-p05-c04",
    "word": "Protect",
    "phonetic": "/prəˈtɛkt/",
    "meaning": "保护",
    "sentence": "Protect your home.",
    "translation": "保护你的家。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 12.671,
      "sentenceStart": 14.282,
      "end": 15.76
    }
  },
  {
    "id": "action_words-p05-c05",
    "word": "Heal",
    "phonetic": "/hil/",
    "meaning": "愈合",
    "sentence": "Heal your heart.",
    "translation": "治愈你的心。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 16.86,
      "sentenceStart": 18.24,
      "end": 19.593
    }
  },
  {
    "id": "action_words-p05-c06",
    "word": "Burn",
    "phonetic": "/bərn/",
    "meaning": "烧伤",
    "sentence": "Burn in fire.",
    "translation": "于火中燃烧。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 20.693,
      "sentenceStart": 22.073,
      "end": 23.417
    }
  },
  {
    "id": "action_words-p05-c07",
    "word": "Freeze",
    "phonetic": "/friz/",
    "meaning": "冻结",
    "sentence": "Freeze in snow.",
    "translation": "冻在雪里。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 24.517,
      "sentenceStart": 25.992,
      "end": 27.4
    }
  },
  {
    "id": "action_words-p05-c08",
    "word": "Bounce",
    "phonetic": "/baʊns/",
    "meaning": "弹跳",
    "sentence": "Bounce on slime.",
    "translation": "在粘液上弹跳。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 28.5,
      "sentenceStart": 29.934,
      "end": 31.434
    }
  },
  {
    "id": "action_words-p05-c09",
    "word": "Splash",
    "phonetic": "/splæʃ/",
    "meaning": "溅",
    "sentence": "Splash in water.",
    "translation": "溅入水中。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 32.534,
      "sentenceStart": 34.026,
      "end": 35.493
    }
  },
  {
    "id": "action_words-p05-c10",
    "word": "Glow",
    "phonetic": "/gloʊ/",
    "meaning": "辉光",
    "sentence": "Glow in the dark.",
    "translation": "在黑暗中发光。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 36.593,
      "sentenceStart": 37.948,
      "end": 39.371
    }
  },
  {
    "id": "action_words-p05-c11",
    "word": "Aim",
    "phonetic": "/eɪm/",
    "meaning": "目的",
    "sentence": "Aim at a target.",
    "translation": "瞄准一个目标。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 40.471,
      "sentenceStart": 41.75,
      "end": 43.202
    }
  },
  {
    "id": "action_words-p05-c12",
    "word": "Defend",
    "phonetic": "/dɪˈfɛnd/",
    "meaning": "保卫",
    "sentence": "Defend with a shield.",
    "translation": "用盾牌防御。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 44.302,
      "sentenceStart": 45.807,
      "end": 47.416
    }
  },
  {
    "id": "action_words-p05-c13",
    "word": "Dodge",
    "phonetic": "/dɑʤ/",
    "meaning": "躲闪",
    "sentence": "Dodge the danger.",
    "translation": "躲避危险。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 48.516,
      "sentenceStart": 49.914,
      "end": 51.385
    }
  },
  {
    "id": "action_words-p05-c14",
    "word": "Chase",
    "phonetic": "/ʧeɪs/",
    "meaning": "追赶",
    "sentence": "Chase a monster.",
    "translation": "追赶怪物。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 52.485,
      "sentenceStart": 53.869,
      "end": 55.42
    }
  },
  {
    "id": "action_words-p05-c15",
    "word": "Return",
    "phonetic": "/rɪˈtərn/",
    "meaning": "返回",
    "sentence": "Return home.",
    "translation": "回家。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_05.mp3",
      "wordStart": 56.52,
      "sentenceStart": 57.998,
      "end": 59.283
    }
  },
  {
    "id": "action_words-p06-c01",
    "word": "Sort",
    "phonetic": "/sɔrt/",
    "meaning": "种类",
    "sentence": "Sort items into groups.",
    "translation": "将项目分组。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.576,
      "end": 3.481
    }
  },
  {
    "id": "action_words-p06-c02",
    "word": "Share",
    "phonetic": "/ʃɛr/",
    "meaning": "分享",
    "sentence": "Share items with a friend.",
    "translation": "与朋友分享物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 4.581,
      "sentenceStart": 5.818,
      "end": 7.656
    }
  },
  {
    "id": "action_words-p06-c03",
    "word": "Save",
    "phonetic": "/seɪv/",
    "meaning": "保存",
    "sentence": "Save your progress.",
    "translation": "保存您的进度。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 8.756,
      "sentenceStart": 10.102,
      "end": 11.654
    }
  },
  {
    "id": "action_words-p06-c04",
    "word": "Load",
    "phonetic": "/loʊd/",
    "meaning": "加载",
    "sentence": "Load a world.",
    "translation": "加载一个世界。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 12.754,
      "sentenceStart": 14.083,
      "end": 15.355
    }
  },
  {
    "id": "action_words-p06-c05",
    "word": "Join",
    "phonetic": "/ʤɔɪn/",
    "meaning": "加入",
    "sentence": "Join another player.",
    "translation": "加入另一个玩家。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 16.455,
      "sentenceStart": 17.849,
      "end": 19.49
    }
  },
  {
    "id": "action_words-p06-c06",
    "word": "Leave",
    "phonetic": "/liv/",
    "meaning": "离开",
    "sentence": "Leave a place safely.",
    "translation": "安全地离开一个地方。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 20.59,
      "sentenceStart": 21.919,
      "end": 23.616
    }
  },
  {
    "id": "action_words-p06-c07",
    "word": "Chat",
    "phonetic": "/ʧæt/",
    "meaning": "聊天",
    "sentence": "Chat with another player.",
    "translation": "与其他玩家聊天。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 24.716,
      "sentenceStart": 26.037,
      "end": 27.829
    }
  },
  {
    "id": "action_words-p06-c08",
    "word": "Carry",
    "phonetic": "/ˈkɛri/",
    "meaning": "携带",
    "sentence": "Carry useful items.",
    "translation": "携带有用的物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 28.929,
      "sentenceStart": 30.359,
      "end": 32.087
    }
  },
  {
    "id": "action_words-p06-c09",
    "word": "Drop",
    "phonetic": "/drɔp/",
    "meaning": "降低",
    "sentence": "Drop an item.",
    "translation": "放下一个物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 33.187,
      "sentenceStart": 34.558,
      "end": 35.943
    }
  },
  {
    "id": "action_words-p06-c10",
    "word": "Pick Up",
    "phonetic": "/pɪk əp/",
    "meaning": "捡起",
    "sentence": "Pick up an item.",
    "translation": "拿起一个物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 37.043,
      "sentenceStart": 38.578,
      "end": 40.046
    }
  },
  {
    "id": "action_words-p06-c11",
    "word": "Equip",
    "phonetic": "/ɪkˈwɪp/",
    "meaning": "装备",
    "sentence": "Equip a piece of gear.",
    "translation": "装备一件装备。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 41.146,
      "sentenceStart": 42.586,
      "end": 44.355
    }
  },
  {
    "id": "action_words-p06-c12",
    "word": "Unequip",
    "phonetic": "/ˌʌnɪˈkwɪp/",
    "meaning": "取消装备",
    "sentence": "Take off a piece of gear.",
    "translation": "取下一个齿轮。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 45.455,
      "sentenceStart": 47.014,
      "end": 48.866
    }
  },
  {
    "id": "action_words-p06-c13",
    "word": "Upgrade",
    "phonetic": "/ˈəpˈgreɪd/",
    "meaning": "升级",
    "sentence": "Upgrade your gear.",
    "translation": "升级你的装备。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 49.966,
      "sentenceStart": 51.57,
      "end": 53.061
    }
  },
  {
    "id": "action_words-p06-c14",
    "word": "Name",
    "phonetic": "/neɪm/",
    "meaning": "名称",
    "sentence": "Name a creature or item.",
    "translation": "命名一个生物或物品。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 54.161,
      "sentenceStart": 55.451,
      "end": 57.467
    }
  },
  {
    "id": "action_words-p06-c15",
    "word": "Read",
    "phonetic": "/riːd/",
    "meaning": "读",
    "sentence": "Read a book or sign.",
    "translation": "读一本书或标志。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_06.mp3",
      "wordStart": 58.567,
      "sentenceStart": 59.879,
      "end": 61.513
    }
  },
  {
    "id": "action_words-p07-c01",
    "word": "Power",
    "phonetic": "/paʊər/",
    "meaning": "力量",
    "sentence": "Power a machine.",
    "translation": "给机器供电。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 0.18,
      "sentenceStart": 1.565,
      "end": 2.958
    }
  },
  {
    "id": "action_words-p07-c02",
    "word": "Switch",
    "phonetic": "/swɪʧ/",
    "meaning": "切换",
    "sentence": "Switch something on or off.",
    "translation": "打开或关闭某些东西。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 4.058,
      "sentenceStart": 5.468,
      "end": 7.329
    }
  },
  {
    "id": "action_words-p07-c03",
    "word": "Connect",
    "phonetic": "/kəˈnɛkt/",
    "meaning": "连接",
    "sentence": "Connect blocks together.",
    "translation": "将块连接在一起。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 8.429,
      "sentenceStart": 9.909,
      "end": 11.68
    }
  },
  {
    "id": "action_words-p07-c04",
    "word": "Trigger",
    "phonetic": "/ˈtrɪgər/",
    "meaning": "扳机",
    "sentence": "Trigger a trap or machine.",
    "translation": "触发陷阱或机器。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 12.78,
      "sentenceStart": 14.26,
      "end": 16.184
    }
  },
  {
    "id": "action_words-p07-c05",
    "word": "Raise",
    "phonetic": "/reɪz/",
    "meaning": "增加",
    "sentence": "Raise something higher.",
    "translation": "把东西举得更高。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 17.284,
      "sentenceStart": 18.684,
      "end": 20.262
    }
  },
  {
    "id": "action_words-p07-c06",
    "word": "Lower",
    "phonetic": "/loʊər/",
    "meaning": "降低",
    "sentence": "Lower something down.",
    "translation": "把东西放下来。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 21.362,
      "sentenceStart": 22.691,
      "end": 24.321
    }
  },
  {
    "id": "action_words-p07-c07",
    "word": "Turn",
    "phonetic": "/tərn/",
    "meaning": "转动",
    "sentence": "Turn around.",
    "translation": "回转。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 25.421,
      "sentenceStart": 26.841,
      "end": 28.075
    }
  },
  {
    "id": "action_words-p07-c08",
    "word": "Float",
    "phonetic": "/floʊt/",
    "meaning": "漂浮",
    "sentence": "Float on water.",
    "translation": "漂浮在水面上。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 29.175,
      "sentenceStart": 30.579,
      "end": 31.969
    }
  },
  {
    "id": "action_words-p07-c09",
    "word": "Sink",
    "phonetic": "/sɪŋk/",
    "meaning": "下沉",
    "sentence": "Sink under water.",
    "translation": "沉入水下。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 33.069,
      "sentenceStart": 34.491,
      "end": 35.982
    }
  },
  {
    "id": "action_words-p07-c10",
    "word": "Follow",
    "phonetic": "/ˈfɑloʊ/",
    "meaning": "跟随",
    "sentence": "Follow a path.",
    "translation": "遵循一条路径。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 37.082,
      "sentenceStart": 38.555,
      "end": 39.893
    }
  },
  {
    "id": "action_words-p07-c11",
    "word": "Guide",
    "phonetic": "/gaɪd/",
    "meaning": "指导",
    "sentence": "Guide an animal.",
    "translation": "引导动物。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 40.993,
      "sentenceStart": 42.372,
      "end": 43.748
    }
  },
  {
    "id": "action_words-p07-c12",
    "word": "Wait",
    "phonetic": "/weɪt/",
    "meaning": "等待",
    "sentence": "Wait for the right time.",
    "translation": "等待合适的时机。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 44.848,
      "sentenceStart": 46.183,
      "end": 47.84
    }
  },
  {
    "id": "action_words-p07-c13",
    "word": "Watch",
    "phonetic": "/wɔʧ/",
    "meaning": "手表",
    "sentence": "Watch carefully.",
    "translation": "仔细观察。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 48.94,
      "sentenceStart": 50.298,
      "end": 51.709
    }
  },
  {
    "id": "action_words-p07-c14",
    "word": "Catch",
    "phonetic": "/kæʧ/",
    "meaning": "抓住",
    "sentence": "Catch a fish.",
    "translation": "抓到一条鱼。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 52.809,
      "sentenceStart": 54.119,
      "end": 55.389
    }
  },
  {
    "id": "action_words-p07-c15",
    "word": "Release",
    "phonetic": "/riˈlis/",
    "meaning": "发布",
    "sentence": "Release something free.",
    "translation": "免费发布一些东西。",
    "category": "动作词汇",
    "audio": {
      "src": "/audio/action_words/page_07.mp3",
      "wordStart": 56.489,
      "sentenceStart": 57.989,
      "end": 59.672
    }
  }
]
