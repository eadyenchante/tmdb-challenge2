import { Lightning, Utils } from "wpe-lightning-sdk";

import { getImgUrl } from "../../lib/tools";

const genreMaps = {
    18: "Drama",
    878: "Science Fiction",
    28: "genre",
    53: "genre",
    35: "genre",
    10751: "genre",
    80: "genre",
    12: "genre",
    27: "genre",
    37: "genre",
    10752: "genre",
    36: "genre",
    16: "genre",
    14: "genre",
  };
  
export default class Level extends Lightning.Component {
  static _template() {
    return {
      Image: {
        // w: 370,
        // h: 556,
      },
      Title: {
        alpha: 0,
        y: 300,
        x: 20,
        text: { fontFace: "SourceSansPro-Regular", fontSize: 24 },
      },
      Genre: {
        alpha: 0,
        y: 280,
        x: 20,
        text: { fontFace: "SourceSansPro-ExtraLight", fontSize: 10 },
      },
    };
  }

  /**
   * @todo:
   * - toggle alpha on focus / unfocus (transition)
   */

  // @todo: patch the correct image and title
  set item(v) {
    const { poster_path, backdrop_path, title, genre_ids } = v;
    this.tag("Image").src = getImgUrl(poster_path);
    this.tag("Title").text.text = title;
    this.tag("Genre").text.text = genre_ids;
    // console.log('kkkkkkkk', genre_ids);
    stringArray = genre_ids.map((element, index) => {
      console.log('xxxx',genreMaps[element])
        return genreMaps[element];

    });
  }
  _focus() {
    this.tag("Image").setSmooth("scale", 1.2);
  }

  _unfocus() {
    this.tag("Image").setSmooth("scale", 1);
  }
}
