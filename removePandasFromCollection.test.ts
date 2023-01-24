import { NFT, nft2, collection, collection2, nft3 } from "./collectionHasNft";
import removePandasFromCollection from "./removePandasFromCollection";


it("if Panda is included in the name of Type NFT [], remove it from the array, return new array", function() {
    const newArrayExpected: NFT[] = [nft2];

    expect(removePandasFromCollection(collection)).toEqual(newArrayExpected)
})

it("if Panda is not included in collection, return original array", function(){
    const newArrayExpected: NFT[] = [nft2, nft3];
    expect(removePandasFromCollection(collection2)).toEqual(newArrayExpected)
})