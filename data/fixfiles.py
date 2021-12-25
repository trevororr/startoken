import os
import json
import shutil
items = os.listdir('token_uri')
print(items)
mapping = {}
for filename in enumerate(items):
    name = filename[1].split('.')[0]
    mapping[name] = filename[0]
    shutil.copy('token_uri/'+filename[1], 'uris/'+str(filename[0])+'.json')
print(mapping)
with open('mapping.json', 'w') as f:
    f.write(json.dumps(mapping))
