import {VolumeInfo} from './volumeInfo';

export class Item {
  id: string;
  volumeInfo: VolumeInfo = new VolumeInfo();
  kind: string;
}
