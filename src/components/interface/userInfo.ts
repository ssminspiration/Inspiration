    interface infoList{
        [index:number]:{
            icon:string;
            text:string;
            path?:string;
            num?:number;
        }
    }
    interface songsRecord{
        [index:number]:{
            playCount:number;
            score:number;
            song:object;
        }
    }
    export { infoList };
    export { songsRecord };