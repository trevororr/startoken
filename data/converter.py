



import json

ipfs_link = "https://ipfs.io/ipfs/Qme4JEXh5seBfTJ66fbLAV48S1A3mKhbwdfgGVGhMbF5WZ/"
nfts = []
token_uri_json = {}
sizes = {
    40:"hyper giant",
    35:"super giant",
    30:"giant",
    20: "sub giant",
    10:"main sequence",
    15:"main sequence",
    5:"dwarf"
}

with open("stars.json", "r") as stars:
    for star in json.load(stars)["stars"]:
        nfts.append({
            "original_name":star[0],
            "name":star[0],
            "image":ipfs_link+star[0]+".png",
            "description":"An ownable star nft",
            "attributes":[
            {"trait_type":"color",
             "value":"#"+star[1]
            },
            {
            "trait_type":"size",
            ""
            }
            {
            "trait_type":"constellation",
            ""
            }
            ]
        })
print(nfts[0])
