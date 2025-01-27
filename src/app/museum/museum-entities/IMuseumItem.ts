export interface IMuseumItem{
  id : string;
  name : string;
  donationXp : number;
  gameStage : string;
  type : string;
  pieces?: string[];
  owned? : boolean;
}
