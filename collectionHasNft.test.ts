import { 
collection,
nft1,
nft2,
nft3,
collectionHasNft,
type NFT
} from "./collectionHasNft";


it("if collection has nft1 or nft2 the collection, running collectionHasNft should return true", function() {
    expect(collectionHasNft(collection,nft1)).toBe(true);
})

it("if collection has nft2 in the collection, running collectionHasNft should return true", function(){
    expect(collectionHasNft(collection,nft2)).toBe(true);
})

it("collection does not contain nft3, running collectionHasNft should return false", function(){
    expect(collectionHasNft(collection, nft3)).toBe(false);
})

