with open(r'D:\proj\springBoot\xzs-mysql\source\vue\xzs-admin\subjects.json',"r" ,encoding="utf-8") as f:
    subjectsData=f.read()


print(subjectsData)

import json

subjects=json.loads(subjectsData)

print(subjects)