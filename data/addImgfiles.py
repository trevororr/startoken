import os
import json

items = os.listdir('token_uri')
print(items)
mapping = {}
for filename in enumerate(items):
    name = filename[1].split('.')[0]
    mapping[name] = ('https://gateway.pinata.cloud/ipfs/Qme4JEXh5seBfTJ66fbLAV48S1A3mKhbwdfgGVGhMbF5WZ/'+name+'.png')
print(mapping)
with open('imgData.json', 'w') as f:
    f.write(json.dumps(mapping))
