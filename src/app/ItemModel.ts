// tslint:disable-next-line:class-name
export class itemList {
    public item_name: string;
    public item_price: string;
    public image_path: string;
    constructor(name: string, Desc: string, image_Path: string) {
        this.item_name = name;
        this.item_price = Desc;
        this.image_path = image_Path;
    }

}
