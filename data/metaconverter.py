



import json

nfts = []
favorites = []
token_uri_json = {}
sizes = {
    40:"Hyper Giant",
    35:"Super Giant",
    30:"Giant",
    20:"Sub Giant",
    10:"Sub Dwarf",
    15:"Main Sequence",
    5:"Dwarf"
}
with open("favorite.txt", "r") as f:
    favorites = f.read().splitlines()

with open("stars.json", "r") as stars:
    for star in json.load(stars)["stars"]:
        if (star[0] in favorites):
            favorite=True
        else:
            favorite=False
        nfts.append({
            "name":star[0],
            "size":sizes[int(star[2])],
            "constituents":star[3],
            "constellation":star[4],
            "favorite":favorite
        })
for nft in nfts:
    with open("starMeta/"+nft["name"]+".json", "w") as token_uri:
        json.dump(nft, token_uri)
