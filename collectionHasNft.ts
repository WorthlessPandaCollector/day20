
type NFT = {
    name: string;
    imageURL: string;
}

const nft1: NFT = {
    name: "this is a Panda",
    imageURL: "https://image.jpg"
}
const nft2: NFT = {
    name: "nft2",
    imageURL: "Https://image2.jpeg"
}
const nft3: NFT = {
    name: "nft3",
    imageURL: "https://none.jpeg"
}
const collection: NFT[] = [nft1, nft2];
const collection2: NFT[] = [nft2, nft3];

function collectionHasNft(collection: NFT[], nft: NFT): boolean {
    return collection.find((checkArray: NFT) => checkArray === nft) !== undefined;
}

export {
    collectionHasNft,
    nft1,
    nft2,
    nft3,
    collection,
    collection2,
    type NFT,
}