import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CloudService {
  files: any = [
    // tslint:disable-next-line: max-line-length
    {
      url:
        "https://ia801709.us.archive.org/16/items/Stan_Getz_Tape_5_1957/Stan_Getz_Tape_5_1957_Side_B.mp3",
      name: "Niven Jazz Collection: Stan Getz Tape 5 Side B",
      artist: "Stan Getz"
    },
    {
      // tslint:disable-next-line: max-line-length
      url:
        "https://ia801206.us.archive.org/0/items/FlashFMGTAViceCityFullRadioShow/Flash%20FM%20-%20GTA%20vice%20city%20full%20radio%20show.mp3",
      name: "FlashFM",
      artist: "GTA Vice City"
    },
    {
      url:
        "https://ia800802.us.archive.org/25/items/KRose_20170808/K-Rose.mp3",
      name: "K-Rose",
      artist: "GTA San Andreas"
    }
  ];

  getFiles() {
    return of(this.files);
  }
}