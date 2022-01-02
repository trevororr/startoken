import os
import json

items = os.listdir('token_uri')
print(items)
mapping = {}
for filename in enumerate(items):
    name = filename[1].split('.')[0]
    mapping[name] = (name+'.png')
print(mapping)
with open('imgData.json', 'w') as f:
    f.write(json.dumps(mapping))
