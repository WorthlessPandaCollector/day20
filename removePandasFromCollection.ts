import { 
    type NFT
    } from "./collectionHasNft";

function removePandasFromCollection(collection: NFT[]): NFT[]{
    return collection.filter(nft => !nft.name.includes("Panda"))
    }

export default removePandasFromCollection;